"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

export default function DebugPage() {
  const [checks, setChecks] = useState({
    envVars: { status: "checking", details: [] as string[] },
    supabase: { status: "checking", error: "" },
    components: { status: "checking", errors: [] as string[] },
    routes: { status: "checking", working: [] as string[], broken: [] as string[] },
  })

  useEffect(() => {
    runDiagnostics()
  }, [])

  const runDiagnostics = async () => {
    // Check environment variables
    const envVars = []
    const requiredEnvs = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "NEXT_PUBLIC_SITE_URL"]

    requiredEnvs.forEach((env) => {
      const value = process.env[env]
      envVars.push(`${env}: ${value ? "✅ Set" : "❌ Missing"}`)
    })

    setChecks((prev) => ({
      ...prev,
      envVars: {
        status: envVars.some((v) => v.includes("❌")) ? "error" : "success",
        details: envVars,
      },
    }))

    // Test Supabase connection
    try {
      const response = await fetch("/api/test-connection", { method: "POST" })
      const result = await response.json()

      setChecks((prev) => ({
        ...prev,
        supabase: {
          status: result.success ? "success" : "error",
          error: result.error || "",
        },
      }))
    } catch (error) {
      setChecks((prev) => ({
        ...prev,
        supabase: {
          status: "error",
          error: error instanceof Error ? error.message : "Connection failed",
        },
      }))
    }

    // Test basic routes
    const routes = ["/", "/signup", "/login", "/dashboard"]
    const working = []
    const broken = []

    for (const route of routes) {
      try {
        const response = await fetch(route, { method: "HEAD" })
        if (response.ok) {
          working.push(route)
        } else {
          broken.push(`${route} (${response.status})`)
        }
      } catch (error) {
        broken.push(`${route} (fetch failed)`)
      }
    }

    setChecks((prev) => ({
      ...prev,
      routes: {
        status: broken.length === 0 ? "success" : "error",
        working,
        broken,
      },
      components: { status: "success", errors: [] },
    }))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500 animate-pulse" />
    }
  }

  const fixCommonIssues = async () => {
    try {
      const response = await fetch("/api/fix-issues", { method: "POST" })
      const result = await response.json()

      if (result.success) {
        alert("Common issues fixed! Please refresh the page.")
        window.location.reload()
      } else {
        alert("Fix attempt failed: " + result.error)
      }
    } catch (error) {
      alert("Could not apply fixes: " + (error instanceof Error ? error.message : "Unknown error"))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🔍 Application Diagnostics</h1>
          <p className="text-gray-600">Let's identify and fix the server error</p>
        </div>

        {/* Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon(checks.envVars.status)}
              Environment Variables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {checks.envVars.details.map((detail, index) => (
                <div key={index} className="text-sm font-mono bg-gray-100 p-2 rounded">
                  {detail}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supabase Connection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon(checks.supabase.status)}
              Supabase Connection
            </CardTitle>
          </CardHeader>
          <CardContent>
            {checks.supabase.status === "success" ? (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">Supabase connection successful!</AlertDescription>
              </Alert>
            ) : checks.supabase.error ? (
              <Alert className="bg-red-50 border-red-200">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">Error: {checks.supabase.error}</AlertDescription>
              </Alert>
            ) : (
              <div className="text-gray-500">Testing connection...</div>
            )}
          </CardContent>
        </Card>

        {/* Routes Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon(checks.routes.status)}
              Application Routes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ Working Routes</h4>
                {checks.routes.working.map((route, index) => (
                  <div key={index} className="text-sm bg-green-50 p-2 rounded mb-1">
                    {route}
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">❌ Broken Routes</h4>
                {checks.routes.broken.map((route, index) => (
                  <div key={index} className="text-sm bg-red-50 p-2 rounded mb-1">
                    {route}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Fixes */}
        <Card>
          <CardHeader>
            <CardTitle>🛠️ Quick Fixes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={fixCommonIssues} className="w-full">
              Apply Common Fixes
            </Button>

            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => (window.location.href = "/simple-home")} className="w-full">
                Load Simple Homepage
              </Button>
              <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
                Refresh Page
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Error Details */}
        <Card>
          <CardHeader>
            <CardTitle>📋 Error Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded text-sm font-mono">
              <div>Error Digest: 2610453204</div>
              <div>Platform: Vercel</div>
              <div>Timestamp: {new Date().toISOString()}</div>
              <div>User Agent: {typeof navigator !== "undefined" ? navigator.userAgent : "Server"}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
