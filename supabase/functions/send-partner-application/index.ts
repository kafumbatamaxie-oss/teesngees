import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PartnerApplicationRequest {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, businessName, email, phone, message }: PartnerApplicationRequest = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !businessName || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to the applicant
    const confirmationEmail = await resend.emails.send({
      from: "TEES & GEES <onboarding@resend.dev>",
      to: [email],
      subject: "Partnership Application Received - TEES & GEES",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank You for Your Interest, ${firstName}!</h1>
          <p>We have received your partnership application for <strong>${businessName}</strong>.</p>
          <p>Our team is reviewing your application and will get back to you within 48 hours.</p>
          
          <h2 style="color: #666; margin-top: 30px;">Application Summary</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Business:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${businessName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="margin-top: 30px; color: #666;">
            Best regards,<br>
            <strong>The TEES & GEES Wholesale Team</strong>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    // Send notification email to the business (internal)
    const notificationEmail = await resend.emails.send({
      from: "TEES & GEES Partner System <onboarding@resend.dev>",
      to: ["wholesale@teesandgees.com"],
      subject: `New Partnership Application: ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Partnership Application</h1>
          
          <h2 style="color: #666;">Applicant Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Business:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${businessName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
          </table>
          
          <h2 style="color: #666; margin-top: 30px;">Message</h2>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message || 'No message provided'}
          </p>
          
          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            This application was submitted via the TEES & GEES website.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-partner-application function:", error);
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
