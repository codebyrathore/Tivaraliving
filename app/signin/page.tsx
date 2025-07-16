"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, Shield, User, Info } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { Logo } from "@/components/logo"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(formData.email, formData.password)
      if (success) {
        // Check if admin and redirect accordingly
        if (formData.email === "admin@tivara.com") {
          router.push("/admin")
        } else {
          router.push("/")
        }
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred during sign in")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = async (type: "admin" | "customer") => {
    setIsLoading(true)
    setError("")

    const credentials = {
      admin: { email: "admin@tivara.com", password: "admin123" },
      customer: { email: "customer@tivara.com", password: "customer123" },
    }

    setFormData(credentials[type])

    try {
      const success = await login(credentials[type].email, credentials[type].password)
      if (success) {
        if (type === "admin") {
          router.push("/admin")
        } else {
          router.push("/")
        }
      }
    } catch (err) {
      setError("Demo login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-stone-50 to-lavender-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Logo size="lg" />
          <h1 className="mt-6 text-3xl font-bold text-stone-800">Welcome Back</h1>
          <p className="mt-2 text-stone-600">Sign in to continue your wellness journey</p>
        </div>

        {/* Demo Credentials Info */}
        <Alert className="bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Demo Credentials:</strong>
            <div className="mt-2 space-y-1 text-sm">
              <div>Admin: admin@tivara.com / admin123</div>
              <div>Customer: customer@tivara.com / customer123</div>
            </div>
          </AlertDescription>
        </Alert>

        {/* Quick Demo Login Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => handleDemoLogin("admin")}
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Shield className="h-4 w-4 mr-2" />
            Admin Demo
          </Button>
          <Button
            onClick={() => handleDemoLogin("customer")}
            disabled={isLoading}
            variant="outline"
            className="bg-transparent"
          >
            <User className="h-4 w-4 mr-2" />
            Customer Demo
          </Button>
        </div>

        <div className="relative">
          <Separator />
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-stone-500">
            or sign in manually
          </span>
        </div>

        {/* Sign In Form */}
        <Card className="card-spiritual">
          <CardHeader>
            <CardTitle className="text-center text-stone-800">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert className="mb-4 bg-red-50 border-red-200">
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-stone-700">
                  Email Address
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    required
                    className="pl-10"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-stone-700">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-10 pr-10"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-stone-300 rounded"
                  />
                  <Label htmlFor="remember-me" className="ml-2 text-sm text-stone-600">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-emerald-600 hover:text-emerald-500">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-stone-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-emerald-600 hover:text-emerald-500 font-medium">
              Join the Healing Circle
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
