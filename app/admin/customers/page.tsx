"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { AdminCustomerManagement } from "@/components/admin/admin-customer-management"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminCustomersPage() {
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

  return <AdminCustomerManagement />
}
