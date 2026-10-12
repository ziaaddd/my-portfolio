import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { siteConfig } from '@/config/site';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || siteConfig.email || 'ziadshaban.dev@gmail.com';
const senderEmail = process.env.CONTACT_SENDER_EMAIL || 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request payload with Zod
    const validatedData = contactFormSchema.parse(body);

    // If Resend API key is configured, dispatch a real production email
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: senderEmail,
        to: [receiverEmail],
        replyTo: validatedData.email,
        subject: `[Portfolio Contact] ${validatedData.subject} - from ${validatedData.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080b11; color: #f8fafc; padding: 24px; }
                .container { max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); padding: 32px; }
                .header { border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; margin-bottom: 24px; }
                .title { font-size: 20px; font-weight: 700; color: #38bdf8; margin: 0; }
                .field { margin-bottom: 16px; }
                .label { font-size: 12px; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.05em; margin-bottom: 4px; }
                .value { font-size: 15px; color: #ffffff; font-weight: 500; }
                .message-box { background: rgba(255,255,255,0.04); border-left: 3px solid #6366f1; border-radius: 6px; padding: 16px; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
                .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #64748b; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 class="title">⚡ New Portfolio Message Received</h2>
                </div>
                
                <div class="field">
                  <div class="label">Sender Name</div>
                  <div class="value">${validatedData.name}</div>
                </div>

                <div class="field">
                  <div class="label">Sender Email</div>
                  <div class="value"><a href="mailto:${validatedData.email}" style="color: #38bdf8; text-decoration: none;">${validatedData.email}</a></div>
                </div>

                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${validatedData.subject}</div>
                </div>

                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${validatedData.message}</div>
                </div>

                <div class="footer">
                  Sent from your portfolio contact form at ${new Date().toUTCString()}
                </div>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return NextResponse.json(
          {
            success: false,
            message: error.message || 'Failed to send email. Please check your email configuration.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: 'Your message has been sent successfully!',
          id: data?.id,
        },
        { status: 200 }
      );
    }

    // Fallback when RESEND_API_KEY is not configured:
    console.warn(
      '⚠️ RESEND_API_KEY is not configured in .env. Simulated email received from:',
      validatedData.email
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Message received! (Configure RESEND_API_KEY in .env to deliver to your real inbox).',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'errors' in error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your form inputs.',
          errors: (error as { errors: unknown }).errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
