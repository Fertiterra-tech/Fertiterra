"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, FileText, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "Active Consultations",
      value: "156",
      change: "+8%",
      changeType: "positive",
      icon: Calendar,
    },
    {
      title: "Monthly Revenue",
      value: "$45,230",
      change: "+23%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      title: "Test Kits Sold",
      value: "1,234",
      change: "+15%",
      changeType: "positive",
      icon: FileText,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "user_signup",
      message: "New user registered: sarah.johnson@email.com",
      time: "2 minutes ago",
      status: "success",
    },
    {
      id: 2,
      type: "appointment",
      message: "Consultation scheduled with Dr. Smith",
      time: "5 minutes ago",
      status: "info",
    },
    {
      id: 3,
      type: "payment",
      message: "Payment received for Hormone Test Kit",
      time: "10 minutes ago",
      status: "success",
    },
    {
      id: 4,
      type: "alert",
      message: "System maintenance scheduled for tonight",
      time: "1 hour ago",
      status: "warning",
    },
  ]

  const systemHealth = [
    { name: "API Response Time", value: "245ms", status: "good" },
    { name: "Database Performance", value: "98.5%", status: "good" },
    { name: "Payment Gateway", value: "Online", status: "good" },
    { name: "Email Service", value: "99.2%", status: "good" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === "positive" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events and user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current status of all services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((service) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                  <Badge variant="secondary">{service.value}</Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Detailed Metrics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <Button variant="outline" className="h-20 flex-col">
              <Users className="h-6 w-6 mb-2" />
              <span className="text-xs">Manage Users</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              <span className="text-xs">View Appointments</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              <span className="text-xs">Content Manager</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <TrendingUp className="h-6 w-6 mb-2" />
              <span className="text-xs">Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <AlertTriangle className="h-6 w-6 mb-2" />
              <span className="text-xs">System Alerts</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Clock className="h-6 w-6 mb-2" />
              <span className="text-xs">Scheduled Tasks</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
