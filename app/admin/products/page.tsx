"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { AdminProductManagement } from "@/components/admin/admin-product-management"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminProductsPage() {
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

  return <AdminProductManagement />
}
