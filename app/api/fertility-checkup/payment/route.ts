import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const paymentData = await request.json()

    // Validate payment amount (should be 500 cents = $5.00)
    if (paymentData.amount !== 500) {
      return NextResponse.json({ error: "Invalid payment amount" }, { status: 400 })
    }

    console.log("Payment Processing:", {
      amount: paymentData.amount,
      paymentMethod: paymentData.paymentMethod,
      timestamp: new Date().toISOString(),
    })

    // Generate payment/request ID
    const paymentId = `${paymentData.paymentMethod}_${Date.now()}`

    // Handle different payment methods
    let paymentMessage = ""
    let emailSubject = ""
    let paymentStatus = "completed"
    let responseMessage = "Payment processed successfully"

    switch (paymentData.paymentMethod) {
      case "card":
        // For card payments, integrate with Paystack/Flutterwave
        // This is a simulation - replace with actual payment processing
        paymentMessage = `💳 CARD PAYMENT RECEIVED - $5.00
        
Payment Details:
- Amount: $5.00 USD
- Payment ID: ${paymentId}
- Date: ${new Date().toLocaleString()}
- Service: Basic Fertility Checkup
- Customer: ${paymentData.cardholderName || "N/A"}
- Payment Method: Credit/Debit Card
- Card Last 4: ${paymentData.cardNumber?.slice(-4) || "****"}

✅ PAYMENT CONFIRMED - READY TO SCHEDULE CONSULTATION

Next Steps:
1. Customer will schedule consultation
2. Prepare for 15-minute consultation session  
3. Review customer questionnaire responses
4. Send consultation link 30 minutes before appointment`

        emailSubject = "💳 CARD PAYMENT CONFIRMED - $5.00 - Basic Fertility Checkup"
        break

      case "mobile":
        // For mobile money, integrate with payment providers
        paymentMessage = `📱 MOBILE MONEY PAYMENT RECEIVED - $5.00
        
Payment Details:
- Amount: $5.00 USD
- Payment ID: ${paymentId}
- Date: ${new Date().toLocaleString()}
- Service: Basic Fertility Checkup
- Mobile Provider: ${paymentData.mobileProvider?.toUpperCase() || "N/A"}
- Phone Number: ${paymentData.phoneNumber || "N/A"}
- Payment Method: Mobile Money

✅ PAYMENT CONFIRMED - READY TO SCHEDULE CONSULTATION

Next Steps:
1. Customer will schedule consultation
2. Prepare for 15-minute consultation session
3. Review customer questionnaire responses  
4. Send consultation link 30 minutes before appointment`

        emailSubject = "📱 MOBILE MONEY PAYMENT CONFIRMED - $5.00 - Basic Fertility Checkup"
        break

      case "bank":
        // For bank transfers, this is just a request - not actual payment
        paymentStatus = "pending_bank_transfer"
        responseMessage = "Bank transfer request submitted. Invoice sent to your email."

        paymentMessage = `🏦 BANK TRANSFER REQUEST - $5.00 (PENDING PAYMENT)
        
⚠️ ACTION REQUIRED: AWAITING BANK TRANSFER CONFIRMATION

Organization Details:
- Organization: ${paymentData.organizationName || "N/A"}
- Contact Person: ${paymentData.contactPerson || "N/A"}
- Email: ${paymentData.organizationEmail || "N/A"}
- Amount: $5.00 USD
- Service: Basic Fertility Checkup
- Request ID: ${paymentId}
- Date: ${new Date().toLocaleString()}

🔄 NEXT ACTIONS REQUIRED:
1. ✅ Invoice sent to: ${paymentData.organizationEmail}
2. ⏳ Awaiting bank transfer to our accounts
3. ⏳ Customer to send payment confirmation
4. ⏳ Verify payment received
5. ⏳ Schedule consultation after payment confirmation

💰 BANK DETAILS PROVIDED TO CUSTOMER:
- RWF Account: 4003201240597 (Equity Bank Rwanda)  
- USD Account: Swift Code EQBLRWRWXXX

📧 FOLLOW UP: Contact organization if no payment received within 48 hours`

        emailSubject = "🏦 BANK TRANSFER REQUEST - $5.00 - AWAITING PAYMENT"
        break

      default:
        paymentMessage = `Payment request received for Basic Fertility Checkup - $5.00`
        emailSubject = "New Payment Request - Basic Fertility Checkup"
    }

    // Send payment notification email to FertiTerra team
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "fertiterratechnologies@africanimpactinitiative.com",
          type: paymentData.paymentMethod === "bank" ? "bank_transfer_request" : "payment_confirmed",
          subject: emailSubject,
          message: paymentMessage,
          customerEmail: paymentData.organizationEmail || paymentData.email,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send payment notification:", emailError)
      // Don't fail the payment if email fails
    }

    // For bank transfers, send invoice to organization
    if (paymentData.paymentMethod === "bank" && paymentData.organizationEmail) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: paymentData.organizationEmail,
            type: "invoice_sent",
            subject: "📄 INVOICE - FertiTerra Basic Fertility Checkup - $5.00",
            message: `Dear ${paymentData.contactPerson},

Thank you for your interest in FertiTerra's Basic Fertility Checkup service.

📋 INVOICE DETAILS:
- Service: Basic Fertility Checkup (15-minute consultation)
- Amount: $5.00 USD
- Organization: ${paymentData.organizationName}
- Invoice ID: ${paymentId}
- Date: ${new Date().toLocaleString()}

💰 PAYMENT INSTRUCTIONS:
Please make payment to one of our bank accounts:

🇷🇼 RWF ACCOUNT:
- Bank: Equity Bank Rwanda
- Account Name: FertiTerra Technologies  
- Account Number: 4003201240597

🌍 USD ACCOUNT:
- Bank: Equity Bank Rwanda
- Account Name: FertiTerra Technologies
- Swift Code: EQBLRWRWXXX
- Bank Address: 24R6+C48, KG 11 Ave, Kigali

📧 AFTER PAYMENT:
Please send payment confirmation (receipt/screenshot) to:
fertiterratechnologies@africanimpactinitiative.com

⏰ NEXT STEPS:
1. Make bank transfer payment
2. Send payment confirmation
3. We'll verify payment (within 24 hours)
4. Schedule your 15-minute consultation
5. Receive personalized fertility recommendations

❓ QUESTIONS?
Contact us at: fertiterratechnologies@africanimpactinitiative.com

Best regards,
FertiTerra Technologies Team
🌸 Supporting your fertility journey`,
          }),
        })
      } catch (invoiceError) {
        console.error("Failed to send invoice:", invoiceError)
      }
    }

    // Store payment record (in real app, save to database)
    const paymentRecord = {
      id: paymentId,
      amount: paymentData.amount,
      status: paymentStatus,
      service: "basic-fertility-checkup",
      paymentMethod: paymentData.paymentMethod,
      customerInfo: {
        name: paymentData.cardholderName || paymentData.contactPerson,
        phone: paymentData.phoneNumber,
        email: paymentData.organizationEmail,
        organization: paymentData.organizationName,
      },
      timestamp: new Date().toISOString(),
    }

    console.log("Payment record:", paymentRecord)

    return NextResponse.json({
      success: true,
      paymentId: paymentId,
      message: responseMessage,
      amount: "$5.00",
      service: "Basic Fertility Checkup",
      paymentMethod: paymentData.paymentMethod,
      status: paymentStatus,
    })
  } catch (error) {
    console.error("Error processing payment:", error)
    return NextResponse.json(
      {
        error: "Payment processing failed",
        message: "Please try again or contact support",
      },
      { status: 500 },
    )
  }
}
