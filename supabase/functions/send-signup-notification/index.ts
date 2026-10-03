import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ADMIN_EMAIL = "temkhawk@gmail.com";
const FROM_EMAIL = "noreply@temteaching.com";

interface SignupNotificationRequest {
  userEmail: string;
  displayName: string;
  signupTime: string;
  adminUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, displayName, signupTime, adminUrl }: SignupNotificationRequest = await req.json();

    // Validate required fields
    if (!userEmail) {
      throw new Error("Missing user email");
    }

    const formattedTime = new Date(signupTime).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const emailResponse = await resend.emails.send({
      from: `Tem Teaching <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `🆕 New Signup: ${displayName || userEmail}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
          <div style="max-width: 500px; margin: 0 auto; background-color: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            
            <div style="text-align: center; margin-bottom: 24px;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 28px;">📚</span>
              </div>
              <h1 style="margin: 0; color: #18181b; font-size: 22px;">New User Signup</h1>
            </div>

            <div style="background-color: #fafafa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #71717a; font-size: 14px;">Username:</td>
                  <td style="padding: 8px 0; color: #18181b; font-size: 14px; font-weight: 600; text-align: right;">${displayName || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #71717a; font-size: 14px;">Email:</td>
                  <td style="padding: 8px 0; color: #18181b; font-size: 14px; font-weight: 600; text-align: right;">${userEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #71717a; font-size: 14px;">Signed up:</td>
                  <td style="padding: 8px 0; color: #18181b; font-size: 14px; text-align: right;">${formattedTime}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #71717a; font-size: 14px;">Status:</td>
                  <td style="padding: 8px 0; text-align: right;">
                    <span style="background-color: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">⏳ Pending Approval</span>
                  </td>
                </tr>
              </table>
            </div>

            <div style="text-align: center;">
              <a href="${adminUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                Review & Approve User
              </a>
            </div>

            <p style="text-align: center; color: #a1a1aa; font-size: 12px; margin-top: 24px; margin-bottom: 0;">
              This notification was sent from Tem Teaching
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Signup notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-signup-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
