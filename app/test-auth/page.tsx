"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createClient } from "@/lib/supabase"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function TestAuthPage() {
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testConnection = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      const supabase = createClient()

      // Test basic connection
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        setTestResult(`Connection failed: ${error.message}`)
      } else {
        setTestResult("Connection successful! Supabase is working.")
      }
    } catch (error: any) {
      setTestResult(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const testSignup = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      const supabase = createClient()

      // Test signup with a dummy email
      const { data, error } = await supabase.auth.signUp({
        email: `test-${Date.now()}@example.com`,
        password: "testpassword123",
      })

      if (error) {
        setTestResult(`Signup test failed: ${error.message}`)
      } else {
        setTestResult("Signup test successful! Auth is working.")
      }
    } catch (error: any) {
      setTestResult(`Signup test error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Auth Connection Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button onClick={testConnection} disabled={isLoading} className="w-full">
              Test Supabase Connection
            </Button>
            <Button onClick={testSignup} disabled={isLoading} className="w-full" variant="outline">
              Test Signup Function
            </Button>
          </div>

          {testResult && (
            <Alert className={testResult.includes("successful") ? "bg-green-50 border-green-200" : "border-red-200"}>
              {testResult.includes("successful") ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={testResult.includes("successful") ? "text-green-800" : "text-red-800"}>
                {testResult}
              </AlertDescription>
            </Alert>
          )}

          <div className="text-xs text-gray-600 space-y-1">
            <p>
              <strong>Environment Variables:</strong>
            </p>
            <p>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Missing"}</p>
            <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Set" : "✗ Missing"}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
