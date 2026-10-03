import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const DIFFICULTY_GUIDE: Record<string, string> = {
  easy: "CEFR A2. Short simple sentences, very common vocabulary, slow clear narration style, lots of repetition of key facts.",
  moderate: "CEFR B1-B2. Natural sentences of medium length, some idiomatic language, connectors and varied tenses.",
  difficult: "CEFR C1-C2. Complex sentences, advanced and topic-specific vocabulary, nuance, implication and inference.",
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI is not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({}));
    const topic = typeof body.topic === "string" ? body.topic.trim().slice(0, 120) : "";
    const difficultyRaw = typeof body.difficulty === "string" ? body.difficulty.toLowerCase() : "moderate";
    const difficulty = ["easy", "moderate", "difficult"].includes(difficultyRaw) ? difficultyRaw : "moderate";

    if (topic.length < 2) {
      return new Response(JSON.stringify({ error: "Please provide a topic (at least 2 characters)." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const prompt = `You are an English listening-comprehension content designer.

Create a listening practice episode about: "${topic}"
Difficulty: ${difficulty} -> ${DIFFICULTY_GUIDE[difficulty]}

Requirements:
- "script": a single-narrator monologue in ENGLISH ONLY, between 430 and 520 words (about 3 minutes when read aloud). Plain prose, no headings, no markdown, no stage directions, no speaker labels. Informative, engaging, factual where possible. Do not mention that this is an exercise.
- "title": short episode title in English.
- "questions": exactly 10 multiple-choice comprehension questions about the script, in order of appearance. Each has 4 distinct options, one correct answer copied exactly from the options, and a one-sentence explanation.
- Everything in English only.

Return ONLY JSON with this shape:
{"title":"","script":"","questions":[{"question":"","options":["","","",""],"correctAnswer":"","explanation":""}]}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.8-flash",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error(`AI gateway error [${aiRes.status}]: ${errText}`);
      const message = aiRes.status === 429
        ? "Too many requests right now. Please try again in a moment."
        : aiRes.status === 402
        ? "AI credits are exhausted. Please contact your teacher."
        : "Could not generate the listening episode. Please try again.";
      return new Response(JSON.stringify({ error: message }), {
        status: aiRes.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiJson = await aiRes.json();
    const content: string = aiJson?.choices?.[0]?.message?.content ?? "";
    let parsed: any;
    try {
      parsed = JSON.parse(content);
    } catch {
      const match = content.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : null;
    }

    if (!parsed?.script || !Array.isArray(parsed?.questions) || parsed.questions.length === 0) {
      console.error("Unexpected AI payload:", content.slice(0, 400));
      return new Response(JSON.stringify({ error: "The generated episode was invalid. Please try again." }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const questions = parsed.questions
      .filter((q: any) => q?.question && Array.isArray(q?.options) && q.options.length >= 2 && q?.correctAnswer)
      .slice(0, 10)
      .map((q: any) => ({
        question: String(q.question),
        options: q.options.map((o: any) => String(o)),
        correctAnswer: String(q.correctAnswer),
        explanation: String(q.explanation ?? ""),
      }));

    return new Response(JSON.stringify({
      title: String(parsed.title ?? topic),
      topic,
      difficulty,
      script: String(parsed.script),
      questions,
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error: unknown) {
    console.error("listening-lab error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
