"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, Database } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function TestConnectionPage() {
  const [connectionStatus, setConnectionStatus] = useState<{
    status: "idle" | "testing" | "success" | "error"
    message: string
    details?: any
  }>({ status: "idle", message: "Ready to test connection" })

  const supabase = createClientComponentClient()

  const testConnection = async () => {
    setConnectionStatus({ status: "testing", message: "Testing Supabase connection..." })

    try {
      // Test 1: Basic connection
      const { data: healthCheck, error: healthError } = await supabase.from("_health_check").select("*").limit(1)

      if (healthError && healthError.code !== "PGRST116") {
        // PGRST116 is "table not found" which is expected for _health_check
        throw healthError
      }

      // Test 2: Auth connection
      const { data: session, error: sessionError } = await supabase.auth.getSession()

      if (sessionError) {
        throw sessionError
      }

      // Test 3: Try a simple auth operation
      const { data: user, error: userError } = await supabase.auth.getUser()

      setConnectionStatus({
        status: "success",
        message: "Supabase connection successful!",
        details: {
          session: session ? "Session available" : "No active session",
          user: user ? "User data accessible" : "No user logged in",
          timestamp: new Date().toISOString(),
        },
      })
    } catch (error: any) {
      setConnectionStatus({
        status: "error",
        message: `Connection failed: ${error.message}`,
        details: error,
      })
    }
  }

  const testSignupFlow = async () => {
    setConnectionStatus({ status: "testing", message: "Testing signup flow..." })

    try {
      // Test with a dummy email that won't actually be sent
      const testEmail = `test-${Date.now()}@example.com`
      const testPassword = "testpassword123"

      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
      })

      if (error) {
        throw error
      }

      setConnectionStatus({
        status: "success",
        message: "Signup flow test successful!",
        details: {
          user_id: data.user?.id,
          email: data.user?.email,
          confirmed: data.user?.email_confirmed_at ? "Yes" : "No",
          session: data.session ? "Created" : "Not created",
        },
      })

      // Clean up - sign out the test user
      await supabase.auth.signOut()
    } catch (error: any) {
      setConnectionStatus({
        status: "error",
        message: `Signup test failed: ${error.message}`,
        details: error,
      })
    }
  }

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Connection Test
          </CardTitle>
          <CardDescription>Test the Supabase connection and signup functionality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={testConnection} disabled={connectionStatus.status === "testing"} variant="outline">
              {connectionStatus.status === "testing" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Database className="mr-2 h-4 w-4" />
              )}
              Test Connection
            </Button>

            <Button onClick={testSignupFlow} disabled={connectionStatus.status === "testing"}>
              {connectionStatus.status === "testing" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <CheckCircle className="mr-2 h-4 w-4" />
              )}
              Test Signup Flow
            </Button>
          </div>

          {connectionStatus.status !== "idle" && (
            <Alert
              className={
                connectionStatus.status === "success"
                  ? "bg-green-50 border-green-200"
                  : connectionStatus.status === "error"
                    ? "bg-red-50 border-red-200"
                    : "bg-blue-50 border-blue-200"
              }
            >
              {connectionStatus.status === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : connectionStatus.status === "error" ? (
                <AlertCircle className="h-4 w-4 text-red-600" />
              ) : (
                <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
              )}
              <AlertDescription
                className={
                  connectionStatus.status === "success"
                    ? "text-green-800"
                    : connectionStatus.status === "error"
                      ? "text-red-800"
                      : "text-blue-800"
                }
              >
                <strong>
                  {connectionStatus.status === "success"
                    ? "Success!"
                    : connectionStatus.status === "error"
                      ? "Error:"
                      : "Testing:"}
                </strong>{" "}
                {connectionStatus.message}
              </AlertDescription>
            </Alert>
          )}

          {connectionStatus.details && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Details:</h4>
              <pre className="text-sm text-gray-700 overflow-auto">
                {JSON.stringify(connectionStatus.details, null, 2)}
              </pre>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Environment Check:</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p>• Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"}</p>
              <p>• Supabase Anon Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"}</p>
              <p>• Environment: {process.env.NODE_ENV}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
