"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { CreditCard, Shield, CheckCircle, Clock, Smartphone, Building2, Copy, AlertTriangle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [mobileProvider, setMobileProvider] = useState("")
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    organizationName: "",
    contactPerson: "",
    organizationEmail: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      const paymentData = {
        amount: 500, // $5.00 in cents
        paymentMethod: paymentMethod,
        mobileProvider: mobileProvider,
        ...formData,
      }

      if (paymentMethod === "card") {
        // For card payments, use Paystack integration
        const initResponse = await fetch("/api/paystack/initialize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.cardholderName + "@example.com", // In real app, get from questionnaire
            amount: 5, // $5.00
            reference: `fertility_${Date.now()}`,
            metadata: {
              service: "basic-fertility-checkup",
              customer_name: formData.cardholderName,
            },
          }),
        })

        if (initResponse.ok) {
          const result = await initResponse.json()
          // Redirect to Paystack payment page
          window.location.href = result.authorization_url
          return
        } else {
          throw new Error("Payment initialization failed")
        }
      } else {
        // For mobile money and bank transfers, use existing flow
        const paymentResponse = await fetch("/api/fertility-checkup/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })

        if (paymentResponse.ok) {
          const result = await paymentResponse.json()

          if (paymentMethod === "bank") {
            // For bank transfers, show different success message
            router.push(`/plans/basic-fertility-checkup/bank-transfer-pending?requestId=${result.paymentId}`)
          } else {
            router.push(`/plans/basic-fertility-checkup/payment-success?paymentId=${result.paymentId}`)
          }
        } else {
          throw new Error("Payment failed")
        }
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = () => {
    if (paymentMethod === "card") {
      return formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv
    } else if (paymentMethod === "mobile") {
      return mobileProvider && formData.phoneNumber
    } else if (paymentMethod === "bank") {
      return formData.organizationName && formData.contactPerson && formData.organizationEmail
    }
    return false
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Complete Your Payment</h1>
              <p className="text-lg text-gray-600">Secure payment for your Basic Fertility Checkup</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Payment Method Selection */}
                    <div>
                      <Label className="text-base font-medium">Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card (Instant)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mobile" id="mobile" />
                          <Label htmlFor="mobile" className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            Mobile Money (Instant)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            Bank Transfer (Manual Verification)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Card Payment Form */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                          <p className="font-medium">✅ Instant Payment via Paystack</p>
                          <p>Visa, Mastercard, Verve accepted. Secure & encrypted.</p>
                        </div>

                        <div>
                          <Label htmlFor="cardholderName">Cardholder Name *</Label>
                          <Input
                            id="cardholderName"
                            value={formData.cardholderName}
                            onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value)}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile Money Form */}
                    {paymentMethod === "mobile" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                          <p className="font-medium">✅ Instant Mobile Money Payment</p>
                          <p>MTN Mobile Money, Airtel Money, M-Pesa, MoMoPay</p>
                        </div>

                        <div>
                          <Label htmlFor="mobileProvider">Mobile Money Provider *</Label>
                          <Select value={mobileProvider} onValueChange={setMobileProvider}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your mobile money provider" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="airtel">Airtel Money</SelectItem>
                              <SelectItem value="mpesa">M-Pesa</SelectItem>
                              <SelectItem value="momopay">MoMoPay</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <Input
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                            placeholder="+250 XXX XXX XXX"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Bank Transfer Form */}
                    {paymentMethod === "bank" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                            <p className="font-medium">Manual Verification Required</p>
                          </div>
                          <p>Bank transfers require manual payment confirmation. You'll receive an invoice.</p>
                        </div>

                        <div>
                          <Label htmlFor="organizationName">Organization Name *</Label>
                          <Input
                            id="organizationName"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange("organizationName", e.target.value)}
                            placeholder="Your Organization Name"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="contactPerson">Contact Person *</Label>
                          <Input
                            id="contactPerson"
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="organizationEmail">Organization Email *</Label>
                          <Input
                            id="organizationEmail"
                            type="email"
                            value={formData.organizationEmail}
                            onChange={(e) => handleInputChange("organizationEmail", e.target.value)}
                            placeholder="contact@organization.com"
                            required
                          />
                        </div>

                        {/* Bank Details */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium">FertiTerra Technologies Bank Details</h3>

                          <div className="space-y-3">
                            <div>
                              <p className="font-medium text-sm text-gray-700">RWF Account:</p>
                              <div className="flex items-center justify-between bg-white p-2 rounded border">
                                <div className="text-sm">
                                  <p>
                                    <strong>Bank:</strong> Equity Bank Rwanda
                                  </p>
                                  <p>
                                    <strong>Account Name:</strong> FertiTerra Technologies
                                  </p>
                                  <p>
                                    <strong>Account Number:</strong> 4003201240597
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyToClipboard("4003201240597", "RWF Account Number")}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div>
                              <p className="font-medium text-sm text-gray-700">USD Account:</p>
                              <div className="flex items-center justify-between bg-white p-2 rounded border">
                                <div className="text-sm">
                                  <p>
                                    <strong>Bank:</strong> Equity Bank Rwanda
                                  </p>
                                  <p>
                                    <strong>Account Name:</strong> FertiTerra Technologies
                                  </p>
                                  <p>
                                    <strong>Swift Code:</strong> EQBLRWRWXXX
                                  </p>
                                  <p>
                                    <strong>Address:</strong> 24R6+C48, KG 11 Ave, Kigali
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyToClipboard("EQBLRWRWXXX", "Swift Code")}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Shield className="h-4 w-4" />
                      <span>Your payment information is encrypted and secure</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Basic Fertility Checkup</span>
                      <span>$5.00</span>
                    </div>

                    <div className="border-t pt-4 flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>$5.00</span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>15-minute consultation included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Personalized fertility assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Written recommendations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>Schedule consultation after payment</span>
                      </div>
                    </div>

                    <Button
                      onClick={handlePayment}
                      className="w-full bg-rose-500 hover:bg-rose-600"
                      disabled={isProcessing || !isFormValid()}
                    >
                      {isProcessing
                        ? "Processing..."
                        : paymentMethod === "bank"
                          ? "Send Invoice Request"
                          : paymentMethod === "card"
                            ? "Pay with Card - $5.00"
                            : "Pay with Mobile Money - $5.00"}
                    </Button>

                    {paymentMethod === "mobile" && (
                      <p className="text-xs text-center text-gray-500">
                        You'll receive a payment prompt on your mobile device
                      </p>
                    )}

                    {paymentMethod === "bank" && (
                      <p className="text-xs text-center text-gray-500">
                        An invoice will be sent to your organization email
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
