"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function TestSignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    error?: string
  } | null>(null)

  const supabase = createClientComponentClient()

  const handleTestSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    // Validation
    if (!email || !password || !confirmPassword) {
      setResult({
        success: false,
        message: "All fields are required",
        error: "Validation error",
      })
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setResult({
        success: false,
        message: "Passwords do not match",
        error: "Validation error",
      })
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setResult({
        success: false,
        message: "Password must be at least 6 characters",
        error: "Validation error",
      })
      setIsLoading(false)
      return
    }

    try {
      console.log("Attempting to sign up with:", { email, password: "***" })

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      console.log("Signup response:", { data, error })

      if (error) {
        setResult({
          success: false,
          message: error.message,
          error: error.message,
        })
      } else {
        setResult({
          success: true,
          message: `Account created successfully! ${data.user?.email_confirmed_at ? "Email confirmed." : "Please check your email for confirmation."}`,
        })
      }
    } catch (err) {
      console.error("Signup error:", err)
      setResult({
        success: false,
        message: "Network error. Please try again.",
        error: "Network error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const generateTestEmail = () => {
    const timestamp = Date.now()
    const testEmail = `test${timestamp}@example.com`
    setEmail(testEmail)
    setPassword("testpassword123")
    setConfirmPassword("testpassword123")
  }

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Test Signup Form</CardTitle>
          <CardDescription>Test the signup functionality to ensure it's working correctly</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button onClick={generateTestEmail} variant="outline" className="w-full">
            Generate Test Credentials
          </Button>

          <form onSubmit={handleTestSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="test-email">Email</Label>
              <Input
                id="test-email"
                type="email"
                placeholder="test@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="test-password">Password</Label>
              <Input
                id="test-password"
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="test-confirm-password">Confirm Password</Label>
              <Input
                id="test-confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Signup...
                </>
              ) : (
                "Test Signup"
              )}
            </Button>
          </form>

          {result && (
            <Alert className={result.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={result.success ? "text-green-800" : "text-red-800"}>
                <strong>{result.success ? "Success!" : "Error:"}</strong> {result.message}
              </AlertDescription>
            </Alert>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Test Instructions:</h4>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Click "Generate Test Credentials" to auto-fill test data</li>
              <li>Click "Test Signup" to attempt account creation</li>
              <li>Check the result message for success or error details</li>
              <li>If successful, check your email for confirmation (if using real email)</li>
            </ol>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-900 mb-2">Expected Behavior:</h4>
            <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
              <li>✅ Form validation should work (required fields, password match, length)</li>
              <li>✅ Supabase connection should be established</li>
              <li>✅ Account creation should succeed with valid data</li>
              <li>✅ Error messages should be clear and helpful</li>
              <li>✅ Loading states should be shown during submission</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
