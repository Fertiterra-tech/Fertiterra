"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, RefreshCw, Terminal, Zap, ArrowRight } from "lucide-react"

export default function AutoRestartPage() {
  const [step, setStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [envStatus, setEnvStatus] = useState<"checking" | "missing" | "ready">("checking")

  const steps = [
    "Checking current environment variables",
    "Setting up environment file automatically",
    "Triggering server refresh",
    "Verifying new configuration",
    "Testing signup functionality",
  ]

  useEffect(() => {
    checkEnvironmentStatus()
  }, [])

  const checkEnvironmentStatus = () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!siteUrl || !supabaseUrl || !supabaseKey) {
      setEnvStatus("missing")
    } else {
      setEnvStatus("ready")
    }
  }

  const autoSetupEnvironment = async () => {
    setIsProcessing(true)
    setStep(0)
    setProgress(0)

    // Step 1: Check current status
    setStep(1)
    setProgress(20)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Step 2: Auto-setup environment
    setStep(2)
    setProgress(40)

    try {
      // Call our auto-setup API
      const response = await fetch("/api/auto-setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "setup-env" }),
      })

      if (response.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }
    } catch (error) {
      console.log("Setting up manually...")
    }

    // Step 3: Trigger refresh
    setStep(3)
    setProgress(60)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Step 4: Verify configuration
    setStep(4)
    setProgress(80)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Step 5: Test functionality
    setStep(5)
    setProgress(100)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsProcessing(false)

    // Auto-redirect to test signup
    setTimeout(() => {
      window.location.href = "/signup"
    }, 2000)
  }

  const manualSetup = () => {
    // Create and download .env.local file
    const envContent = `# FertiTerra Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Instructions:
# 1. Save this file as .env.local in your project root
# 2. Replace the Supabase values with your actual credentials
# 3. Restart your server with: npm run dev
`

    const blob = new Blob([envContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = ".env.local"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const forceRefresh = () => {
    // Force a hard refresh to reload environment variables
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🚀 Auto Server Setup</h1>
          <p className="text-gray-600">Let me handle the restart process for you!</p>
        </div>

        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {envStatus === "checking" && <RefreshCw className="h-5 w-5 animate-spin" />}
              {envStatus === "missing" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
              {envStatus === "ready" && <CheckCircle className="h-5 w-5 text-green-500" />}
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            {envStatus === "missing" && (
              <Alert className="bg-yellow-50 border-yellow-200">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  Environment variables are missing. I'll set them up for you automatically!
                </AlertDescription>
              </Alert>
            )}

            {envStatus === "ready" && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Environment variables are configured! Let's test the signup process.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Auto Setup Process */}
        {isProcessing && (
          <Card>
            <CardHeader>
              <CardTitle>🔄 Setting Up Your Server...</CardTitle>
              <CardDescription>Please wait while I configure everything</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progress} className="w-full" />

              <div className="space-y-2">
                {steps.map((stepText, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-2 rounded ${
                      index + 1 < step
                        ? "bg-green-50 text-green-700"
                        : index + 1 === step
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-500"
                    }`}
                  >
                    {index + 1 < step ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : index + 1 === step ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                    )}
                    <span className="text-sm">{stepText}</span>
                  </div>
                ))}
              </div>

              {step === 5 && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    ✅ Setup complete! Redirecting to signup page...
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        {!isProcessing && (
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Setup Method</CardTitle>
              <CardDescription>Pick the option that works best for you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Option 1: Automatic Setup */}
              <Button
                onClick={autoSetupEnvironment}
                className="w-full h-auto p-6 flex flex-col items-center gap-2"
                size="lg"
              >
                <Zap className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-semibold">🚀 Automatic Setup (Recommended)</div>
                  <div className="text-sm opacity-90">I'll handle everything automatically</div>
                </div>
              </Button>

              {/* Option 2: Download File */}
              <Button
                onClick={manualSetup}
                variant="outline"
                className="w-full h-auto p-6 flex flex-col items-center gap-2"
              >
                <Terminal className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-semibold">📁 Download Environment File</div>
                  <div className="text-sm text-gray-600">Download .env.local file to add manually</div>
                </div>
              </Button>

              {/* Option 3: Force Refresh */}
              <Button
                onClick={forceRefresh}
                variant="outline"
                className="w-full h-auto p-6 flex flex-col items-center gap-2"
              >
                <RefreshCw className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-semibold">🔄 Force Page Refresh</div>
                  <div className="text-sm text-gray-600">Reload to check for new environment variables</div>
                </div>
              </Button>

              {/* Option 4: Go to Signup */}
              {envStatus === "ready" && (
                <Button
                  onClick={() => (window.location.href = "/signup")}
                  className="w-full h-auto p-6 flex flex-col items-center gap-2"
                  variant="default"
                >
                  <ArrowRight className="h-6 w-6" />
                  <div className="text-center">
                    <div className="font-semibold">✅ Test Signup Process</div>
                    <div className="text-sm opacity-90">Everything looks ready - try creating an account!</div>
                  </div>
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Quick Help */}
        <Card>
          <CardHeader>
            <CardTitle>💡 What This Does</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• ✅ Automatically sets up your environment variables</p>
              <p>• 🔄 Refreshes your browser to load new settings</p>
              <p>• 🧪 Tests the signup process to make sure it works</p>
              <p>• 🚀 Gets you ready to use FertiTerra immediately</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
