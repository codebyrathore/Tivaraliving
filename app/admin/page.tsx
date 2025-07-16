"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminPage() {
  const { isAuthenticated, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || !isAdmin()) {
      router.push("/signin")
    }
  }, [isAuthenticated, isAdmin, router])

  if (!isAuthenticated || !isAdmin()) {
    return null
  }

  return <AdminDashboard />
}
