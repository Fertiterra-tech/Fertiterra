"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Users, Calendar, DollarSign, ShoppingCart, Download, Filter } from "lucide-react"

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      period: "vs last month",
    },
    {
      title: "New Users",
      value: "1,247",
      change: "+8.2%",
      changeType: "positive",
      icon: Users,
      period: "vs last month",
    },
    {
      title: "Consultations",
      value: "456",
      change: "+15.3%",
      changeType: "positive",
      icon: Calendar,
      period: "vs last month",
    },
    {
      title: "Test Kit Sales",
      value: "892",
      change: "-2.1%",
      changeType: "negative",
      icon: ShoppingCart,
      period: "vs last month",
    },
  ]

  const topPerformers = [
    { name: "Dr. Emily Chen", consultations: 89, revenue: "$12,450", rating: 4.9 },
    { name: "Dr. Michael Smith", consultations: 76, revenue: "$10,890", rating: 4.8 },
    { name: "Dr. Sarah Johnson", consultations: 65, revenue: "$9,230", rating: 4.9 },
    { name: "Dr. David Wilson", consultations: 58, revenue: "$8,120", rating: 4.7 },
  ]

  const popularServices = [
    { name: "Initial Fertility Consultation", bookings: 234, revenue: "$23,400" },
    { name: "Hormone Test Kit", sales: 189, revenue: "$18,900" },
    { name: "Follow-up Consultation", bookings: 156, revenue: "$9,360" },
    { name: "IVF Planning Session", bookings: 89, revenue: "$13,350" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track performance and business metrics</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                {metric.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={metric.changeType === "positive" ? "text-green-600" : "text-red-600"}>
                  {metric.change}
                </span>
                <span>{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Performing Doctors */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Doctors</CardTitle>
            <CardDescription>Based on consultations and revenue this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((doctor, index) => (
                <div key={doctor.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{doctor.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {doctor.consultations} consultations • ⭐ {doctor.rating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{doctor.revenue}</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Services */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Services</CardTitle>
            <CardDescription>Most booked services this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularServices.map((service, index) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {service.bookings || service.sales} {service.bookings ? "bookings" : "sales"}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{service.revenue}</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends</CardTitle>
          <CardDescription>Monthly revenue over the past 12 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Revenue chart would be displayed here</p>
              <p className="text-sm text-gray-400">Integration with charting library needed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Growth Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
          <CardDescription>New user registrations over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">User growth chart would be displayed here</p>
              <p className="text-sm text-gray-400">Integration with charting library needed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
