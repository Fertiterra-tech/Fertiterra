import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FertiTerra Technologies - Fertility Care & Support in Africa",
  description:
    "FertiTerra provides affordable fertility tests, expert support, and comprehensive education across Africa to help couples conceive.",
  keywords:
    "fertility, reproductive health, Africa, AI healthcare, fertility testing, telemedicine, infertility treatment, fertility test Africa, fertility support Rwanda, fertility app Africa",
  authors: [{ name: "FertiTerra Technologies" }],
  creator: "FertiTerra Technologies",
  publisher: "FertiTerra Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fertiterratechnologies.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FertiTerra Technologies - Fertility Care & Support in Africa",
    description: "AI-driven, affordable, and inclusive fertility solutions for Africa",
    url: "https://fertiterratechnologies.com",
    siteName: "FertiTerra Technologies",
    images: [
      {
        url: "/images/fertiterra-logo-main.png",
        width: 1200,
        height: 630,
        alt: "FertiTerra Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FertiTerra Technologies - Fertility Care & Support in Africa",
    description: "AI-driven, affordable, and inclusive fertility solutions for Africa",
    images: ["/images/fertiterra-logo-main.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ef4444",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9375281731859570"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
