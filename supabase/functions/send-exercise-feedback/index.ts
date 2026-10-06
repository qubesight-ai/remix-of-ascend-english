import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TEACHER_EMAIL = "temkhawk@gmail.com";
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") || "onboarding@resend.dev";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface CurriculumProgress {
  overallPercent: number;
  completedSubSkills: number;
  totalSubSkills: number;
  currentLevelPercent: number | null;
  levels: { level: string; percent: number }[];
}

interface ExerciseFeedbackRequest {
  studentName: string;
  studentEmail: string;
  exerciseType: string;
  exerciseTitle: string;
  level: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: { question: string; userAnswer: string; correctAnswer: string }[];
  completedAt: string;
  curriculumProgress?: CurriculumProgress | null;
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

    const data: ExerciseFeedbackRequest = await req.json();
    console.log("Received exercise feedback request:", data);

    const {
      studentName,
      studentEmail,
      exerciseType,
      exerciseTitle,
      level,
      score,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      completedAt,
      curriculumProgress,
    } = data;

    // Build the curriculum progress section
    let curriculumSection = "";
    if (curriculumProgress && typeof curriculumProgress.overallPercent === "number") {
      const levelRows = (curriculumProgress.levels || [])
        .map(
          (l) => `
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>${l.level}</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${l.percent}%</td>
            </tr>`
        )
        .join("");

      curriculumSection = `
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #0369a1;">📈 Curriculum Progress</h3>
          <p style="font-size: 28px; font-weight: bold; color: #0369a1; margin: 0;">${curriculumProgress.overallPercent}% overall</p>
          <p style="margin: 8px 0 0 0; color: #6b7280;">
            ${curriculumProgress.completedSubSkills} of ${curriculumProgress.totalSubSkills} sub-skills completed
            ${
              curriculumProgress.currentLevelPercent !== null && curriculumProgress.currentLevelPercent !== undefined
                ? ` &nbsp;•&nbsp; ${level}: ${curriculumProgress.currentLevelPercent}%`
                : ""
            }
          </p>
          ${
            levelRows
              ? `<table style="width: 100%; border-collapse: collapse; margin-top: 15px; background: white;">
                   <thead>
                     <tr style="background-color: #f3f4f6;">
                       <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: left;">Level</th>
                       <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: left;">Completed</th>
                     </tr>
                   </thead>
                   <tbody>${levelRows}</tbody>
                 </table>`
              : ""
          }
        </div>
      `;
    }

    // Build the incorrect answers section
    let incorrectSection = "";
    if (incorrectAnswers && incorrectAnswers.length > 0) {
      incorrectSection = `
        <h3 style="color: #dc2626; margin-top: 20px;">❌ Incorrect Answers (${incorrectAnswers.length})</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Question</th>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Student's Answer</th>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            ${incorrectAnswers
              .map(
                (item) => `
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${item.question}</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #dc2626;">${item.userAnswer}</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #16a34a;">${item.correctAnswer}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      `;
    }

    // Determine performance color
    const performanceColor = score >= 80 ? "#16a34a" : score >= 60 ? "#ca8a04" : "#dc2626";
    const performanceEmoji = score >= 80 ? "🎉" : score >= 60 ? "📚" : "⚠️";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Exercise Completed - Luma</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #00acc1, #26c6da); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✨ Luma</h1>
            <p style="color: rgba(255,255,255,0.95); margin: 8px 0 0 0; font-weight: 600;">Learn brighter. — Exercise Report</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">${performanceEmoji} Exercise Completed</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin: 0 0 15px 0; color: #374151;">Student Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${studentName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${studentEmail}</p>
              <p style="margin: 5px 0;"><strong>Completed:</strong> ${new Date(completedAt).toLocaleString()}</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin: 0 0 15px 0; color: #374151;">Exercise Details</h3>
              <p style="margin: 5px 0;"><strong>Type:</strong> ${exerciseType}</p>
              <p style="margin: 5px 0;"><strong>Title:</strong> ${exerciseTitle}</p>
              <p style="margin: 5px 0;"><strong>Level:</strong> ${level}</p>
            </div>
            
            <div style="background-color: ${performanceColor}15; padding: 20px; border-radius: 8px; border-left: 4px solid ${performanceColor}; margin-bottom: 20px;">
              <h3 style="margin: 0 0 15px 0; color: ${performanceColor};">Results</h3>
              <p style="font-size: 36px; font-weight: bold; color: ${performanceColor}; margin: 0;">${score}%</p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">
                ✅ Correct: ${correctAnswers} / ${totalQuestions} &nbsp;&nbsp;
                ❌ Incorrect: ${incorrectAnswers?.length || 0}
              </p>
            </div>
            
            ${curriculumSection}

            ${incorrectSection}
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              This is an automated message from Luma — Learn brighter.
            </p>
          </div>
        </body>
      </html>
    `;

    if (!studentEmail || !studentEmail.includes("@")) {
      throw new Error("Student email is missing or invalid");
    }

    const recipients = Array.from(new Set([studentEmail, TEACHER_EMAIL].filter(Boolean)));

    // Send email directly to the registered student email and the teacher/admin email
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Luma <${FROM_EMAIL}>`,
        to: recipients,
        subject: `${performanceEmoji} Your results: ${exerciseTitle} (${score}%) - ${level}`,
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", emailResult);
      throw new Error(`Failed to send email: ${JSON.stringify(emailResult)}`);
    }

    console.log("Email sent successfully:", { emailResult, recipients });

    return new Response(JSON.stringify({ success: true, emailResult, recipients }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-exercise-feedback function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
