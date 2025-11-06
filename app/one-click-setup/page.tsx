"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Download, ExternalLink, Copy } from "lucide-react"

export default function OneClickSetup() {
  const [step, setStep] = useState(1)

  const downloadEnvFile = () => {
    const envContent = `NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`

    const blob = new Blob([envContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = ".env.local"
    a.click()
    URL.revokeObjectURL(url)
    setStep(2)
  }

  const copyCommands = () => {
    const commands = `# Stop your current server (Ctrl+C)
# Then run:
npm run dev`
    navigator.clipboard.writeText(commands)
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">⚡ One-Click Setup</h1>
          <p className="text-gray-600">3 simple steps to get your server running</p>
        </div>

        {/* Step 1 */}
        <Card className={step >= 1 ? "border-green-200 bg-green-50" : ""}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step > 1 ? <CheckCircle className="h-5 w-5 text-green-600" /> : "1️⃣"}
              Download Environment File
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Download the .env.local file with default settings</p>
            <Button onClick={downloadEnvFile} className="w-full" disabled={step > 1}>
              <Download className="h-4 w-4 mr-2" />
              Download .env.local File
            </Button>
            {step > 1 && (
              <Alert className="mt-3 bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  ✅ File downloaded! Save it in your project root folder.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className={step >= 2 ? "border-green-200 bg-green-50" : "opacity-50"}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step > 2 ? <CheckCircle className="h-5 w-5 text-green-600" /> : "2️⃣"}
              Copy Restart Commands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Copy the commands to restart your server</p>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
              # Stop your current server (Ctrl+C)
              <br /># Then run:
              <br />
              npm run dev
            </div>
            <Button onClick={copyCommands} className="w-full" disabled={step < 2 || step > 2}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Commands
            </Button>
            {step > 2 && (
              <Alert className="mt-3 bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  ✅ Commands copied! Paste them in your terminal.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className={step >= 3 ? "border-green-200 bg-green-50" : "opacity-50"}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">3️⃣ Test Your Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">After restarting your server, test the signup process</p>
            <Button onClick={() => window.open("/signup", "_blank")} className="w-full" disabled={step < 3}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Test Signup Process
            </Button>
          </CardContent>
        </Card>

        {step >= 3 && (
          <Alert className="bg-blue-50 border-blue-200">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              🎉 All done! Your server should now work without "failed to fetch" errors.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
