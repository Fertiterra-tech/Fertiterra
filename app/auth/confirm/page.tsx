"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react"
import { createClient } from "@/lib/supabase"

export default function ConfirmEmailPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Get the token from URL parameters
        const token_hash = searchParams.get("token_hash")
        const type = searchParams.get("type")

        if (token_hash && type) {
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash,
            type: type as any,
          })

          if (error) {
            console.error("Email confirmation error:", error)
            setError(error.message)
          } else if (data.user) {
            setIsConfirmed(true)
            // Redirect to dashboard after a short delay
            setTimeout(() => {
              router.push("/dashboard")
            }, 3000)
          }
        } else {
          // No token in URL, just show the confirmation page
          setError(null)
        }
      } catch (error) {
        console.error("Unexpected confirmation error:", error)
        setError("An unexpected error occurred. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    confirmEmail()
  }, [searchParams, router, supabase.auth])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-rose-500 mb-4" />
              <p className="text-center text-gray-600">Confirming your email...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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
            {isConfirmed ? (
              <>
                <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-2xl font-bold text-green-800">Email Confirmed!</CardTitle>
                <CardDescription>
                  Your email has been successfully confirmed. You will be redirected to your dashboard shortly.
                </CardDescription>
              </>
            ) : error ? (
              <>
                <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-2xl font-bold text-red-800">Confirmation Failed</CardTitle>
                <CardDescription>There was an issue confirming your email address.</CardDescription>
              </>
            ) : (
              <>
                <Mail className="mx-auto h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
                <CardDescription>
                  We've sent you a confirmation link. Please check your email and click the link to activate your
                  account.
                </CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {isConfirmed ? (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Redirecting to your dashboard in 3 seconds...
                </AlertDescription>
              </Alert>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Check your spam/junk folder if you don't see the email</p>
                  <p>• The confirmation link will expire in 24 hours</p>
                  <p>• Make sure to click the link from the same device/browser</p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button asChild>
                    <Link href="/auth/resend-confirmation">Resend Confirmation Email</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/login">Back to Login</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
