"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { AdminAnalytics } from "@/components/admin/admin-analytics"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminAnalyticsPage() {
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

  return <AdminAnalytics />
}
