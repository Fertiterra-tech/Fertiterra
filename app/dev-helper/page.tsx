"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Terminal, CheckCircle, AlertCircle, XCircle } from "lucide-react"

export default function DevHelper() {
  const [serverStatus, setServerStatus] = useState<"checking" | "needs_restart" | "running">("checking")
  const [envVars, setEnvVars] = useState<Record<string, string>>({})
  const [lastRestart, setLastRestart] = useState<string | null>(null)

  useEffect(() => {
    checkServerStatus()
    checkEnvironmentVariables()
  }, [])

  const checkServerStatus = () => {
    // Check if environment variables are loaded
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

    if (!siteUrl || !supabaseUrl) {
      setServerStatus("needs_restart")
    } else {
      setServerStatus("running")
    }
  }

  const checkEnvironmentVariables = () => {
    const vars = {
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "",
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    }
    setEnvVars(vars)
  }

  const simulateRestart = () => {
    setLastRestart(new Date().toLocaleTimeString())
    // Simulate checking after restart
    setTimeout(() => {
      checkServerStatus()
      checkEnvironmentVariables()
    }, 1000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "checking":
        return <RefreshCw className="h-4 w-4 animate-spin" />
      case "needs_restart":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "running":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <XCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusMessage = () => {
    switch (serverStatus) {
      case "checking":
        return "Checking server status..."
      case "needs_restart":
        return "Server needs restart to load environment variables"
      case "running":
        return "Server is running with all environment variables loaded"
      default:
        return "Unknown status"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Development Helper</h1>
          <p className="text-gray-600">Check server status and restart guidance</p>
        </div>

        {/* Server Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon(serverStatus)}
              Server Status
            </CardTitle>
            <CardDescription>{getStatusMessage()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Last checked:</span>
                <Badge variant="outline">{new Date().toLocaleTimeString()}</Badge>
              </div>
              {lastRestart && (
                <div className="flex items-center justify-between">
                  <span>Last restart simulation:</span>
                  <Badge variant="outline">{lastRestart}</Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Environment Variables Status */}
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
            <CardDescription>Current status of required environment variables</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(envVars).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-mono text-sm">{key}</span>
                  <div className="flex items-center gap-2">
                    {value ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <Badge variant="outline" className="text-green-700">
                          Set ({value.substring(0, 20)}...)
                        </Badge>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-red-500" />
                        <Badge variant="destructive">Missing</Badge>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Restart Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              How to Restart Your Server
            </CardTitle>
            <CardDescription>Follow these steps in your terminal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2"># Step 1: Stop the current server</div>
                <div className="mb-4">Press Ctrl+C (or Cmd+C on Mac)</div>

                <div className="mb-2"># Step 2: Start the server again</div>
                <div className="mb-2">npm run dev</div>
                <div className="mb-2"># or</div>
                <div className="mb-4">yarn dev</div>

                <div className="mb-2"># Step 3: Look for this message:</div>
                <div className="text-blue-400">ready - started server on 0.0.0.0:3000</div>
              </div>

              <Button onClick={simulateRestart} className="w-full" variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Simulate Restart Check
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions After Restart</CardTitle>
            <CardDescription>Test these features once your server is restarted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => window.open("/verify-env", "_blank")}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">Check Environment Variables</div>
                <div className="text-sm text-gray-600">Verify all variables loaded correctly</div>
              </Button>

              <Button
                onClick={() => window.open("/signup", "_blank")}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">Test Signup Process</div>
                <div className="text-sm text-gray-600">Try creating an account</div>
              </Button>

              <Button
                onClick={() => window.open("/test-connection", "_blank")}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">Test Supabase Connection</div>
                <div className="text-sm text-gray-600">Verify database connectivity</div>
              </Button>

              <Button
                onClick={() => window.open("/simple-signup", "_blank")}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">Try Fallback Signup</div>
                <div className="text-sm text-gray-600">Test alternative signup method</div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Environment File Template */}
        <Card>
          <CardHeader>
            <CardTitle>Environment File Template</CardTitle>
            <CardDescription>Copy this to your .env.local file</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="mb-2"># Add these to your .env.local file:</div>
              <div>NEXT_PUBLIC_SITE_URL=http://localhost:3000</div>
              <div>NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co</div>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here</div>
            </div>
            <Button
              onClick={() => {
                const template = `NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`
                navigator.clipboard.writeText(template)
              }}
              variant="outline"
              className="mt-3"
            >
              Copy Template
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
