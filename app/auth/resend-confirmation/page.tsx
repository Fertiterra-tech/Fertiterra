"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/context/auth-context"
import { Loader2, Mail, CheckCircle, AlertCircle } from "lucide-react"

export default function ResendConfirmationPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { resendConfirmation } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email) {
      setError("Email address is required")
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      const { error, success } = await resendConfirmation(email)

      if (error) {
        setError(error.message || "Failed to resend confirmation email")
        return
      }

      if (success) {
        setSuccess(true)
      }
    } catch (err: any) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center mb-8">
          <Image
            src="/placeholder.svg?height=45&width=160"
            alt="FertiTerra Logo"
            width={160}
            height={45}
            className="h-12 w-auto"
          />
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-12 w-12 text-blue-500 mb-4" />
            <CardTitle className="text-2xl font-bold">Resend Confirmation</CardTitle>
            <CardDescription>Enter your email address and we'll send you a new confirmation link.</CardDescription>
          </CardHeader>

          {success ? (
            <CardContent className="space-y-4">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Confirmation email sent! Please check your inbox and spam folder.
                </AlertDescription>
              </Alert>
              <div className="flex flex-col space-y-2">
                <Button asChild>
                  <Link href="/auth/confirm">Check Email Status</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/login">Back to Login</Link>
                </Button>
              </div>
            </CardContent>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Make sure to check your spam/junk folder</p>
                  <p>• You can only resend once every few minutes</p>
                  <p>• The new link will expire in 24 hours</p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Resend Confirmation Email"
                  )}
                </Button>

                <div className="flex flex-col space-y-2 w-full">
                  <Button variant="outline" asChild>
                    <Link href="/login">Back to Login</Link>
                  </Button>
                  <div className="text-center text-sm">
                    Need help?{" "}
                    <Link href="/contact" className="text-rose-500 hover:underline">
                      Contact Support
                    </Link>
                  </div>
                </div>
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
