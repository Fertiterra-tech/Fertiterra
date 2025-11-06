"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle, Eye, EyeOff, Copy, RefreshCw } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface EnvVar {
  name: string
  value: string | undefined
  required: boolean
  description: string
  type: "url" | "key" | "secret" | "string"
}

export default function VerifyEnvPage() {
  const [showValues, setShowValues] = useState(false)
  const [connectionTest, setConnectionTest] = useState<{
    status: "idle" | "testing" | "success" | "error"
    message: string
  }>({ status: "idle", message: "" })

  const envVars: EnvVar[] = [
    {
      name: "NEXT_PUBLIC_SUPABASE_URL",
      value: process.env.NEXT_PUBLIC_SUPABASE_URL,
      required: true,
      description: "Your Supabase project URL",
      type: "url",
    },
    {
      name: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      value: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      required: true,
      description: "Supabase anonymous/public key",
      type: "key",
    },
    {
      name: "SUPABASE_SERVICE_ROLE_KEY",
      value: process.env.SUPABASE_SERVICE_ROLE_KEY,
      required: false,
      description: "Supabase service role key (for server-side operations)",
      type: "secret",
    },
    {
      name: "SUPABASE_JWT_SECRET",
      value: process.env.SUPABASE_JWT_SECRET,
      required: false,
      description: "JWT secret for token verification",
      type: "secret",
    },
  ]

  const validateEnvVar = (envVar: EnvVar) => {
    if (!envVar.value) {
      return { status: "missing", message: "Not set" }
    }

    switch (envVar.type) {
      case "url":
        try {
          const url = new URL(envVar.value)
          if (url.hostname.includes("supabase")) {
            return { status: "valid", message: "Valid Supabase URL" }
          } else {
            return { status: "warning", message: "URL doesn't appear to be Supabase" }
          }
        } catch {
          return { status: "invalid", message: "Invalid URL format" }
        }

      case "key":
        if (envVar.value.length > 100 && envVar.value.startsWith("eyJ")) {
          return { status: "valid", message: "Valid JWT format" }
        } else {
          return { status: "warning", message: "Doesn't match expected key format" }
        }

      case "secret":
        if (envVar.value.length > 30) {
          return { status: "valid", message: "Appears to be valid" }
        } else {
          return { status: "warning", message: "Seems too short for a secret" }
        }

      default:
        return { status: "valid", message: "Set" }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "valid":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "invalid":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "missing":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid":
        return "bg-green-100 text-green-800 border-green-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "invalid":
        return "bg-red-100 text-red-800 border-red-200"
      case "missing":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const maskValue = (value: string, type: string) => {
    if (!showValues) {
      if (type === "url") {
        try {
          const url = new URL(value)
          return `${url.protocol}//${url.hostname.substring(0, 8)}...`
        } catch {
          return "***invalid-url***"
        }
      } else {
        return `${value.substring(0, 8)}...${value.substring(value.length - 4)}`
      }
    }
    return value
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const testSupabaseConnection = async () => {
    setConnectionTest({ status: "testing", message: "Testing connection..." })

    try {
      const supabase = createClientComponentClient()

      // Test basic connection
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        throw error
      }

      // Test if we can make a simple query
      const { error: queryError } = await supabase.from("test_table").select("*").limit(1)

      // It's okay if the table doesn't exist, we just want to test the connection
      if (queryError && !queryError.message.includes("does not exist")) {
        throw queryError
      }

      setConnectionTest({
        status: "success",
        message: "Successfully connected to Supabase!",
      })
    } catch (error: any) {
      setConnectionTest({
        status: "error",
        message: `Connection failed: ${error.message}`,
      })
    }
  }

  const requiredVars = envVars.filter((v) => v.required)
  const optionalVars = envVars.filter((v) => !v.required)
  const missingRequired = requiredVars.filter((v) => !v.value)
  const allRequiredSet = missingRequired.length === 0

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Environment Variables Status
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowValues(!showValues)}>
                  {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {showValues ? "Hide" : "Show"} Values
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Verify that all required Supabase environment variables are properly configured
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Overall Status */}
              <Alert className={allRequiredSet ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
                {allRequiredSet ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={allRequiredSet ? "text-green-800" : "text-red-800"}>
                  {allRequiredSet
                    ? "✅ All required environment variables are set!"
                    : `❌ Missing ${missingRequired.length} required environment variable(s)`}
                </AlertDescription>
              </Alert>

              {/* Required Variables */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Required Variables</h3>
                <div className="space-y-3">
                  {requiredVars.map((envVar) => {
                    const validation = validateEnvVar(envVar)
                    return (
                      <div key={envVar.name} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(validation.status)}
                            <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{envVar.name}</code>
                            <Badge className={getStatusColor(validation.status)}>{validation.status}</Badge>
                          </div>
                          {envVar.value && (
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(envVar.value!)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{envVar.description}</p>
                        <div className="bg-gray-50 p-2 rounded font-mono text-sm">
                          {envVar.value ? maskValue(envVar.value, envVar.type) : "❌ NOT SET"}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{validation.message}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Optional Variables */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Optional Variables</h3>
                <div className="space-y-3">
                  {optionalVars.map((envVar) => {
                    const validation = validateEnvVar(envVar)
                    return (
                      <div key={envVar.name} className="border rounded-lg p-4 opacity-75">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(validation.status)}
                            <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{envVar.name}</code>
                            <Badge variant="outline">optional</Badge>
                          </div>
                          {envVar.value && (
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(envVar.value!)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{envVar.description}</p>
                        <div className="bg-gray-50 p-2 rounded font-mono text-sm">
                          {envVar.value ? maskValue(envVar.value, envVar.type) : "Not set (optional)"}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{validation.message}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Connection Test */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Connection Test</h3>
                <div className="space-y-3">
                  <Button
                    onClick={testSupabaseConnection}
                    disabled={!allRequiredSet || connectionTest.status === "testing"}
                    className="w-full"
                  >
                    {connectionTest.status === "testing" ? (
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <CheckCircle className="mr-2 h-4 w-4" />
                    )}
                    Test Supabase Connection
                  </Button>

                  {connectionTest.message && (
                    <Alert
                      className={
                        connectionTest.status === "success"
                          ? "bg-green-50 border-green-200"
                          : connectionTest.status === "error"
                            ? "bg-red-50 border-red-200"
                            : "bg-blue-50 border-blue-200"
                      }
                    >
                      {connectionTest.status === "success" ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : connectionTest.status === "error" ? (
                        <XCircle className="h-4 w-4 text-red-600" />
                      ) : (
                        <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />
                      )}
                      <AlertDescription
                        className={
                          connectionTest.status === "success"
                            ? "text-green-800"
                            : connectionTest.status === "error"
                              ? "text-red-800"
                              : "text-blue-800"
                        }
                      >
                        {connectionTest.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
            <CardDescription>How to configure your environment variables</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Get your Supabase credentials:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Go to your Supabase project dashboard</li>
                  <li>Navigate to Settings → API</li>
                  <li>Copy the Project URL and anon/public key</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Set environment variables:</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div>NEXT_PUBLIC_SUPABASE_URL=your_project_url</div>
                  <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key</div>
                  <div className="text-gray-400"># Optional:</div>
                  <div>SUPABASE_SERVICE_ROLE_KEY=your_service_role_key</div>
                  <div>SUPABASE_JWT_SECRET=your_jwt_secret</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Restart your development server:</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">npm run dev</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
