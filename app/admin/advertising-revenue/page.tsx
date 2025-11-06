"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, DollarSign, TrendingUp, Users, Globe } from "lucide-react"
import { Header } from "@/components/header"

export default function AdvertisingRevenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Advertising Revenue</h1>
            <p className="text-lg text-gray-600">
              Explore established ad networks to monetize your website traffic effectively.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Google AdSense */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  Use Established Ad Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Google AdSense</strong> is a low-maintenance, highly popular option that serves contextually
                    relevant ads (via responsive/adaptable formats) to visitors, earning revenue per impression or
                    click—especially useful for sites with consistent traffic.
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-blue-600 font-medium">Source: Wikipedia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High-Earning Networks */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  High-Earning Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">
                    Other high-earning networks to explore include <strong>SmartyAds SSP</strong>,{" "}
                    <strong>Media.net</strong>, and <strong>Propeller Ads</strong>, known for competitive CPM and CPC
                    rates.
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-green-600 font-medium">Source: SmartyAds</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Niche Networks */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  Niche & Affiliate-Friendly Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">
                    For more niche or affiliate-friendly programs, consider <strong>AdCash</strong>,{" "}
                    <strong>Adsterra</strong>, <strong>Publift</strong>, <strong>Media.net</strong>, or{" "}
                    <strong>Propeller Ads</strong>.
                  </p>
                  <div className="mt-3 space-x-4">
                    <span className="text-sm text-purple-600 font-medium">Source: Teqblaze</span>
                    <span className="text-sm text-purple-600 font-medium">Adcash</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High-Traffic Networks */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-orange-500" />
                  High-Traffic Premium Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">
                    If your site becomes high-traffic, networks like <strong>Mediavine</strong> and{" "}
                    <strong>Raptive</strong> tend to offer better revenue share models.
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-orange-600 font-medium">Source: Blogging Explorer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Section */}
          <div className="mt-12 bg-gradient-to-r from-rose-500 to-green-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Monetize Your Traffic?</h2>
            <p className="text-lg mb-6 opacity-90">
              Start with Google AdSense for immediate implementation, then explore other networks as your traffic grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                <ExternalLink className="mr-2 h-4 w-4" />
                Apply to Google AdSense
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                Explore Other Networks
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
