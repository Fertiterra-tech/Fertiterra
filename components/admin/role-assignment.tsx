"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Shield, AlertTriangle } from "lucide-react"
import { updateUserRole, type UserRole, type UserProfile } from "@/actions/user-management"

interface RoleAssignmentProps {
  user: UserProfile
  onRoleUpdated?: (user: UserProfile) => void
}

const roleDescriptions = {
  patient: "Can book consultations, access test results, and manage their health profile",
  doctor: "Can conduct consultations, access patient records, and manage appointments",
  admin: "Full system access including user management and platform administration",
  support: "Can assist users with technical issues and basic account management",
}

const roleColors = {
  patient: "bg-blue-100 text-blue-800",
  doctor: "bg-green-100 text-green-800",
  admin: "bg-purple-100 text-purple-800",
  support: "bg-orange-100 text-orange-800",
}

export function RoleAssignment({ user, onRoleUpdated }: RoleAssignmentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<UserRole>(user.role)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRoleUpdate = async () => {
    if (selectedRole === user.role) {
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await updateUserRole(user.id, selectedRole)

      if (result.error) {
        setError(result.error)
      } else if (result.user) {
        setIsOpen(false)
        if (onRoleUpdated) {
          onRoleUpdated(result.user)
        }
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const isRoleChange = selectedRole !== user.role
  const isAdminChange = selectedRole === "admin" || user.role === "admin"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Shield className="h-4 w-4" />
          Change Role
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Change User Role
          </DialogTitle>
          <DialogDescription>Update the role and permissions for {user.full_name || user.email}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Current Role</label>
            <Badge className={roleColors[user.role]}>{user.role}</Badge>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">New Role</label>
            <Select value={selectedRole} onValueChange={(value: UserRole) => setSelectedRole(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="patient">Patient</SelectItem>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="support">Support Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {selectedRole && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Role Permissions:</p>
              <p className="text-sm text-muted-foreground">{roleDescriptions[selectedRole]}</p>
            </div>
          )}

          {isAdminChange && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                {selectedRole === "admin"
                  ? "Granting admin access will give this user full system privileges."
                  : "Removing admin access will revoke all administrative privileges."}
              </AlertDescription>
            </Alert>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleRoleUpdate} disabled={isLoading || !isRoleChange}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Role
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
