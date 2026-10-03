import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface GrammarPoint {
  label: string;
  value: string;
  explanation: string;
}

interface GrammarResponse {
  spanish: string;
  english: string;
  pronunciation: string;
  grammarSummary: string;
  grammarPoints?: GrammarPoint[];
  notes?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI configuration missing" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const body = await req.json().catch(() => null) as {
      text?: string;
      level?: string;
    } | null;

    const text = body?.text?.trim();
    const level = body?.level || "A2";

    if (!text) {
      return new Response(
        JSON.stringify({ error: "Text in Spanish is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    console.log("Spanish grammar coach request:", { text, level });

    const systemPrompt = `
You are an English teacher who explains grammar to Spanish-speaking students.

The user will send you a SHORT sentence or phrase in SPANISH.

Your job is to:
1) Translate it to NATURAL English.
2) Give a clear PRONUNCIATION GUIDE for the English sentence.
3) Explain the MAIN GRAMMAR behind the English sentence (tense, structure, key rules).

IMPORTANT:
- Always answer ONLY in JSON, no extra text.
- Use this exact JSON shape:

{
  "spanish": "original Spanish sentence",
  "english": "natural English translation",
  "pronunciation": "pronunciation of the ENGLISH sentence, using either IPA or a simple syllable guide",
  "grammarSummary": "one short sentence naming the tense and main idea (for example: 'Present Simple for daily routines').",
  "grammarPoints": [
    {
      "label": "Tense",
      "value": "Present Simple",
      "explanation": "We use Present Simple for routines and habits."
    },
    {
      "label": "Structure",
      "value": "Subject + base verb",
      "explanation": "In 'I work every day', 'I' is the subject and 'work' is the base verb."
    }
  ],
  "notes": "Optional extra tip for the student in very simple English."
}

Rules:
- Level of English: explain using simple English, adapted to level ${level}.
- Do NOT include Spanish inside explanations, only inside the "spanish" field.
- If the Spanish is ambiguous, choose the most common meaning and continue.
`.trim();

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: text },
          ],
          stream: false,
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      const status =
        response.status === 429 || response.status === 402
          ? response.status
          : 500;

      const errorMessage =
        response.status === 429
          ? "Rate limit exceeded. Please try again later."
          : response.status === 402
          ? "Payment required. Please try again later."
          : "AI service error";

      return new Response(
        JSON.stringify({ error: errorMessage }),
        {
          status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const data = await response.json();
    const content =
      data.choices?.[0]?.message?.content ??
      data.choices?.[0]?.delta?.content ??
      "";

    if (!content) {
      console.error("Empty AI response content");
      return new Response(
        JSON.stringify({ error: "Empty AI response" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Sometimes the model may wrap JSON in code fences; strip them if present
    const cleaned = String(content)
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let parsed: GrammarResponse;
    try {
      parsed = JSON.parse(cleaned) as GrammarResponse;
    } catch (e) {
      console.error("Failed to parse AI JSON:", e, "Raw content:", content);
      return new Response(
        JSON.stringify({ error: "Failed to parse AI response" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Spanish grammar coach error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});

