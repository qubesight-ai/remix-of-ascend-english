import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TEACHER_EMAIL = "temkhawk@gmail.com";
const FROM_EMAIL = "noreply@temteaching.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface PlacementResultRequest {
  studentName: string;
  studentEmail: string;
  assignedLevel: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpent: string;
  completedAt: string;
  sectionBreakdown: { section: string; correct: number; total: number }[];
  incorrectAnswers: { question: string; userAnswer: string; correctAnswer: string; category: string }[];
  skipped?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const data: PlacementResultRequest = await req.json();
    console.log("Received placement exam results:", data);

    const {
      studentName,
      studentEmail,
      assignedLevel,
      score,
      totalQuestions,
      percentage,
      timeSpent,
      completedAt,
      sectionBreakdown,
      incorrectAnswers,
      skipped,
    } = data;

    // Build section breakdown table
    const sectionTable = sectionBreakdown.map(s => `
      <tr>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">${s.section}</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb; text-align: center;">${s.correct} / ${s.total}</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb; text-align: center;">${Math.round((s.correct / s.total) * 100)}%</td>
      </tr>
    `).join("");

    // Build incorrect answers section
    let incorrectSection = "";
    if (incorrectAnswers && incorrectAnswers.length > 0) {
      incorrectSection = `
        <h3 style="color: #dc2626; margin-top: 30px;">❌ Areas for Improvement (${incorrectAnswers.length} incorrect)</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Category</th>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Question</th>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Student's Answer</th>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            ${incorrectAnswers.map(item => `
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-size: 12px;">${item.category}</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${item.question}</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #dc2626;">${item.userAnswer}</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #16a34a;">${item.correctAnswer}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    }

    // Determine level colors and descriptions
    const levelColors: Record<string, string> = {
      "A1": "#22c55e",
      "A2": "#84cc16",
      "B1": "#eab308",
      "B2": "#f97316",
      "C1": "#ef4444",
      "C2": "#a855f7",
    };
    const levelColor = levelColors[assignedLevel] || "#6366f1";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Placement Test Results - Tem Teaching</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎓 Placement Test Results</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Tem Teaching English Learning Platform</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 10px 0;">${skipped ? '⚠️ Student Skipped Placement Exam' : 'New Student Placement'}</h2>
              <p style="color: #6b7280; margin: 0;">${skipped ? 'This student chose to skip the placement exam and was assigned to A1 by default' : 'A new student has completed their placement exam'}</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin: 0 0 15px 0; color: #374151;">👤 Student Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${studentName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${studentEmail}</p>
              <p style="margin: 5px 0;"><strong>Completed:</strong> ${new Date(completedAt).toLocaleString()}</p>
              <p style="margin: 5px 0;"><strong>Time Spent:</strong> ${timeSpent}</p>
            </div>
            
            <div style="background: linear-gradient(135deg, ${levelColor}20, ${levelColor}10); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 20px; border: 2px solid ${levelColor};">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">Assigned Level</p>
              <div style="font-size: 48px; font-weight: bold; color: ${levelColor}; margin-bottom: 10px;">${assignedLevel}</div>
              <p style="color: #374151; margin: 0; font-size: 18px;">
                Score: <strong>${score} / ${totalQuestions}</strong> (${percentage}%)
              </p>
            </div>
            
            <h3 style="color: #374151; margin: 30px 0 15px 0;">📊 Section Breakdown</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f3f4f6;">
                  <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Section</th>
                  <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: center;">Score</th>
                  <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: center;">Percentage</th>
                </tr>
              </thead>
              <tbody>
                ${sectionTable}
              </tbody>
            </table>
            
            ${incorrectSection}
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              This is an automated message from Tem Teaching English Learning Platform.<br>
              The student has been automatically enrolled at level ${assignedLevel}.
            </p>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Tem Teaching <${FROM_EMAIL}>`,
        to: [TEACHER_EMAIL],
        subject: `${skipped ? '⚠️ Skipped Exam' : '🎓 New Placement'}: ${studentName} → Level ${assignedLevel}${skipped ? ' (default)' : ` (${percentage}%)`}`,
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", emailResult);
      throw new Error(`Failed to send email: ${JSON.stringify(emailResult)}`);
    }

    console.log("Placement results email sent successfully:", emailResult);

    return new Response(JSON.stringify({ success: true, emailResult }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-placement-results function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
