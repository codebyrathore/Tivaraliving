"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { AdminOrderManagement } from "@/components/admin/admin-order-management"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminOrdersPage() {
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

  return <AdminOrderManagement />
}
