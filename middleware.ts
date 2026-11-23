import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse, type NextRequest } from "next/server"

const protectedPrefixes = ["/dashboard", "/profile", "/admin", "/consultation/room", "/instagram-admin"]
const developmentOnlyPrefixes = [
  "/debug",
  "/dev-helper",
  "/test-auth",
  "/test-connection",
  "/test-email",
  "/test-signup",
  "/verify-env",
  "/one-click-setup",
  "/auto-restart",
  "/api/test-email",
  "/api/auto-setup",
]

function matchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`)
}

function redirectWithCookies(request: NextRequest, response: NextResponse, destination: string) {
  const redirectResponse = NextResponse.redirect(new URL(destination, request.url))
  response.cookies.getAll().forEach((cookie) => redirectResponse.cookies.set(cookie))
  return redirectResponse
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isApiRoute = pathname.startsWith("/api/")
  const isAdminRoute =
    matchesPrefix(pathname, "/admin") ||
    matchesPrefix(pathname, "/api/admin") ||
    matchesPrefix(pathname, "/instagram-admin")
  const needsAuthentication = protectedPrefixes.some((prefix) => matchesPrefix(pathname, prefix)) || matchesPrefix(pathname, "/api/admin")

  if (process.env.NODE_ENV === "production" && developmentOnlyPrefixes.some((prefix) => matchesPrefix(pathname, prefix))) {
    return new NextResponse(null, { status: 404 })
  }

  if (pathname === "/admin/login" || !needsAuthentication) {
    return NextResponse.next()
  }

  const response = NextResponse.next()
  response.headers.set("Cache-Control", "private, no-store, max-age=0")

  try {
    const supabase = createMiddlewareClient({ req: request, res: response })
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error || !user) {
      if (isApiRoute) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      return redirectWithCookies(request, response, "/login")
    }

    if (isAdminRoute && user.app_metadata?.role !== "admin") {
      if (isApiRoute) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
      return redirectWithCookies(request, response, "/dashboard")
    }

    return response
  } catch {
    if (isApiRoute) {
      return NextResponse.json({ error: "Authentication service unavailable" }, { status: 503 })
    }
    return redirectWithCookies(request, response, "/login")
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/admin/:path*",
    "/consultation/room/:path*",
    "/instagram-admin/:path*",
    "/api/admin/:path*",
    "/debug/:path*",
    "/dev-helper/:path*",
    "/test-auth/:path*",
    "/test-connection/:path*",
    "/test-email/:path*",
    "/test-signup/:path*",
    "/verify-env/:path*",
    "/one-click-setup/:path*",
    "/auto-restart/:path*",
    "/api/test-email/:path*",
    "/api/auto-setup/:path*",
  ],
}
