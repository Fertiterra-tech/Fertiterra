"use client"

import { useAuth } from "@/context/auth-context"
import { Badge } from "@/components/ui/badge"
import { Shield, User, Stethoscope, HeadphonesIcon } from "lucide-react"

export function AdminStatus() {
  const { profile, isLoading } = useAuth()

  if (isLoading || !profile) {
    return null
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="h-3 w-3" />
      case "doctor":
        return <Stethoscope className="h-3 w-3" />
      case "support":
        return <HeadphonesIcon className="h-3 w-3" />
      default:
        return <User className="h-3 w-3" />
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800"
      case "doctor":
        return "bg-blue-100 text-blue-800"
      case "support":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Badge className={`${getRoleColor(profile.role)} gap-1`}>
      {getRoleIcon(profile.role)}
      {profile.role}
    </Badge>
  )
}
