// Email service for FertiTerra platform
// In production, integrate with SendGrid, Mailgun, or similar service

interface EmailTemplate {
  subject: string
  html: string
  text: string
}

class EmailService {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }

  // Generate email templates
  private getWelcomeTemplate(email: string): EmailTemplate {
    return {
      subject: "Welcome to FertiTerra! 🌸",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to FertiTerra</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
            .feature { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🌸 Welcome to FertiTerra!</h1>
            <p>Your fertility journey starts here</p>
          </div>
          <div class="content">
            <p>Hi there!</p>
            <p>Welcome to FertiTerra! We're excited to help you on your fertility journey with personalized insights, expert consultations, and comprehensive tracking tools.</p>
            
            <h3>What you can do now:</h3>
            <div class="feature">📅 <strong>Track your cycles:</strong> Monitor menstrual cycles and ovulation patterns</div>
            <div class="feature">📚 <strong>Learn from experts:</strong> Access evidence-based fertility health content</div>
            <div class="feature">👩‍⚕️ <strong>Book consultations:</strong> Schedule video calls with fertility specialists</div>
            <div class="feature">📊 <strong>Get insights:</strong> Receive personalized health recommendations</div>
            
            <p style="text-align: center;">
              <a href="${this.baseUrl}/dashboard" class="button">Get Started</a>
            </p>
            
            <p>If you have any questions, our support team is here to help!</p>
            
            <p>Best regards,<br>The FertiTerra Team</p>
          </div>
          <div class="footer">
            <p>© 2024 FertiTerra. All rights reserved.</p>
            <p>You received this email because you created an account at FertiTerra.</p>
          </div>
        </body>
        </html>
      `,
      text: `
Welcome to FertiTerra! 🌸

Hi there!

Welcome to FertiTerra! We're excited to help you on your fertility journey.

What you can do now:
• Track your menstrual cycles and ovulation
• Read expert fertility health content
• Book video consultations with doctors
• Get personalized health insights

Get started: ${this.baseUrl}/dashboard

Best regards,
The FertiTerra Team

© 2024 FertiTerra. All rights reserved.
      `,
    }
  }

  private getConfirmationTemplate(email: string): EmailTemplate {
    const confirmationLink = `${this.baseUrl}/auth/confirm?email=${encodeURIComponent(email)}`

    return {
      subject: "Please confirm your FertiTerra account",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirm Your Account</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #667eea; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Confirm Your Account</h1>
          </div>
          <div class="content">
            <p>Hi!</p>
            <p>Thank you for signing up for FertiTerra. To complete your registration, please confirm your email address by clicking the button below:</p>
            
            <p style="text-align: center;">
              <a href="${confirmationLink}" class="button">Confirm My Account</a>
            </p>
            
            <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
            <p style="word-break: break-all; background: #eee; padding: 10px; border-radius: 5px;">${confirmationLink}</p>
            
            <p>If you didn't create this account, please ignore this email.</p>
            
            <p>Best regards,<br>The FertiTerra Team</p>
          </div>
          <div class="footer">
            <p>© 2024 FertiTerra. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      text: `
Confirm Your FertiTerra Account

Hi!

Thank you for signing up for FertiTerra. To complete your registration, please confirm your email address by visiting:

${confirmationLink}

If you didn't create this account, please ignore this email.

Best regards,
The FertiTerra Team

© 2024 FertiTerra. All rights reserved.
      `,
    }
  }

  private getAppointmentTemplate(email: string, doctorName: string, appointmentDate: string): EmailTemplate {
    return {
      subject: "Your FertiTerra consultation is confirmed",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Consultation Confirmed</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #28a745; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
            .appointment-details { background: white; padding: 20px; border-radius: 5px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📅 Consultation Confirmed</h1>
          </div>
          <div class="content">
            <p>Hi!</p>
            <p>Your consultation with Dr. ${doctorName} has been confirmed!</p>
            
            <div class="appointment-details">
              <h3>Appointment Details:</h3>
              <p><strong>Doctor:</strong> Dr. ${doctorName}</p>
              <p><strong>Date & Time:</strong> ${appointmentDate}</p>
              <p><strong>Type:</strong> Video Consultation</p>
              <p><strong>Duration:</strong> 30 minutes</p>
            </div>
            
            <p>You'll receive a reminder email 24 hours before your appointment with the video call link.</p>
            
            <p style="text-align: center;">
              <a href="${this.baseUrl}/consultation" class="button">View Appointment</a>
            </p>
            
            <p>If you need to reschedule or cancel, please do so at least 24 hours in advance.</p>
            
            <p>Best regards,<br>The FertiTerra Team</p>
          </div>
          <div class="footer">
            <p>© 2024 FertiTerra. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      text: `
Your FertiTerra consultation is confirmed

Hi!

Your consultation with Dr. ${doctorName} has been confirmed!

Appointment Details:
- Doctor: Dr. ${doctorName}
- Date & Time: ${appointmentDate}
- Type: Video Consultation
- Duration: 30 minutes

You'll receive a reminder email 24 hours before your appointment.

View appointment: ${this.baseUrl}/consultation

Best regards,
The FertiTerra Team

© 2024 FertiTerra. All rights reserved.
      `,
    }
  }

  // Mock email sending (in production, use real email service)
  private async sendEmail(to: string, template: EmailTemplate): Promise<boolean> {
    try {
      // Log email details for development
      console.log(`📧 Sending email to: ${to}`)
      console.log(`📝 Subject: ${template.subject}`)
      console.log(`📄 Content: ${template.text.substring(0, 100)}...`)

      // In production, replace this with actual email service:
      // await emailProvider.send({
      //   to,
      //   subject: template.subject,
      //   html: template.html,
      //   text: template.text
      // })

      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log(`✅ Email sent successfully to: ${to}`)
      return true
    } catch (error) {
      console.error(`❌ Failed to send email to ${to}:`, error)
      return false
    }
  }

  // Public methods
  async sendWelcomeEmail(email: string): Promise<boolean> {
    const template = this.getWelcomeTemplate(email)
    return await this.sendEmail(email, template)
  }

  async sendConfirmationEmail(email: string): Promise<boolean> {
    const template = this.getConfirmationTemplate(email)
    return await this.sendEmail(email, template)
  }

  async sendAppointmentConfirmation(email: string, doctorName: string, appointmentDate: string): Promise<boolean> {
    const template = this.getAppointmentTemplate(email, doctorName, appointmentDate)
    return await this.sendEmail(email, template)
  }

  // Test method for development
  async testEmail(email: string, type: "welcome" | "confirmation" | "appointment" = "welcome"): Promise<boolean> {
    switch (type) {
      case "welcome":
        return await this.sendWelcomeEmail(email)
      case "confirmation":
        return await this.sendConfirmationEmail(email)
      case "appointment":
        return await this.sendAppointmentConfirmation(email, "Sarah Johnson", "Tomorrow at 2:00 PM")
      default:
        return false
    }
  }
}

// Export the email service instance
export const emailService = new EmailService()

// Export the class for type checking
export { EmailService }
export type { EmailTemplate }
