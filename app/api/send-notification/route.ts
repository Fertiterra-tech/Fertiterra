import { NextResponse } from "next/server"

interface NotificationRequest {
  email: string
  type: string
  subject?: string
  message: string
  customerEmail?: string
}

export async function POST(request: Request) {
  try {
    const { email, type, subject, message, customerEmail }: NotificationRequest = await request.json()

    // Log the notification for development
    console.log(`📧 Sending ${type} notification to: ${email}`)
    console.log(`📝 Subject: ${subject || `FertiTerra ${type} Notification`}`)
    console.log(`📄 Message: ${message}`)

    // In production, integrate with email service (SendGrid, Mailgun, etc.)
    // For now, we'll simulate email sending

    const emailData = {
      to: email,
      subject: subject || `FertiTerra ${type} Notification`,
      html: generateEmailHTML(type, message, customerEmail),
      text: message,
      timestamp: new Date().toISOString(),
    }

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log successful send
    console.log(`✅ ${type} notification sent successfully to: ${email}`)

    // If there's a customer email, send them a copy too
    if (customerEmail && type === "consultation_scheduled") {
      await sendCustomerConfirmation(customerEmail, message)
    }

    return NextResponse.json({
      success: true,
      message: "Notification sent successfully",
      type,
      recipient: email,
    })
  } catch (error) {
    console.error("❌ Failed to send notification:", error)
    return NextResponse.json(
      {
        error: "Failed to send notification",
        message: "Email service temporarily unavailable",
      },
      { status: 500 },
    )
  }
}

function generateEmailHTML(type: string, message: string, customerEmail?: string): string {
  const baseStyle = `
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  `

  const headerStyle = `
    background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 10px 10px 0 0;
  `

  const contentStyle = `
    background: #f9f9f9;
    padding: 30px;
    border-radius: 0 0 10px 10px;
    white-space: pre-line;
  `

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FertiTerra ${type} Notification</title>
    </head>
    <body style="${baseStyle}">
      <div style="${headerStyle}">
        <h1>🌸 FertiTerra Notification</h1>
        <p>${type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>
      </div>
      <div style="${contentStyle}">
        ${message}
        
        ${customerEmail ? `<p><strong>Customer Email:</strong> ${customerEmail}</p>` : ""}
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 14px;">
          This is an automated notification from FertiTerra Technologies.<br>
          Time: ${new Date().toLocaleString()}
        </p>
      </div>
    </body>
    </html>
  `
}

async function sendCustomerConfirmation(customerEmail: string, originalMessage: string) {
  try {
    console.log(`📧 Sending customer confirmation to: ${customerEmail}`)

    // Extract appointment details from the original message
    const customerMessage = `Your consultation has been scheduled successfully!

We'll send you:
• A confirmation email with all details
• A calendar invite 24 hours before your appointment  
• Video call link 30 minutes before your consultation
• Written summary after your consultation

If you need to reschedule, please contact us at least 24 hours in advance.

Thank you for choosing FertiTerra!

Best regards,
The FertiTerra Team`

    // In production, send actual email to customer
    console.log(`✅ Customer confirmation prepared for: ${customerEmail}`)
  } catch (error) {
    console.error("Failed to send customer confirmation:", error)
  }
}
