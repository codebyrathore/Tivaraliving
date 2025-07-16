"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "customer" | "admin"
  firstName?: string
  lastName?: string
  createdAt: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
}

const AuthContext = createContext<{
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isAdmin: () => boolean
} | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
  })

  useEffect(() => {
    const savedUser = localStorage.getItem("tivara-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        setAuthState({ user, isLoading: false })
      } catch (error) {
        console.error("Error loading user from localStorage:", error)
        localStorage.removeItem("tivara-user")
        setAuthState({ user: null, isLoading: false })
      }
    } else {
      setAuthState({ user: null, isLoading: false })
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Admin credentials
      if (email === "admin@tivara.com" && password === "admin123") {
        const adminUser: User = {
          id: "admin-1",
          name: "Admin User",
          firstName: "Admin",
          lastName: "User",
          email: "admin@tivara.com",
          role: "admin",
          createdAt: new Date().toISOString(),
        }
        localStorage.setItem("tivara-user", JSON.stringify(adminUser))
        setAuthState({ user: adminUser, isLoading: false })
        return true
      }

      // Demo customer credentials
      if (email === "customer@tivara.com" && password === "customer123") {
        const customerUser: User = {
          id: "customer-1",
          name: "Demo Customer",
          firstName: "Demo",
          lastName: "Customer",
          email: "customer@tivara.com",
          role: "customer",
          createdAt: new Date().toISOString(),
        }
        localStorage.setItem("tivara-user", JSON.stringify(customerUser))
        setAuthState({ user: customerUser, isLoading: false })
        return true
      }

      // For any other email, create a customer account
      if (email && password) {
        const newUser: User = {
          id: `user-${Date.now()}`,
          name: email.split("@")[0],
          firstName: email.split("@")[0],
          email,
          role: "customer",
          createdAt: new Date().toISOString(),
        }
        localStorage.setItem("tivara-user", JSON.stringify(newUser))
        setAuthState({ user: newUser, isLoading: false })
        return true
      }

      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const nameParts = name.split(" ")
      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(" "),
        email,
        role: "customer",
        createdAt: new Date().toISOString(),
      }

      localStorage.setItem("tivara-user", JSON.stringify(newUser))
      setAuthState({ user: newUser, isLoading: false })
      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("tivara-user")
    setAuthState({ user: null, isLoading: false })
  }

  const isAdmin = () => {
    return authState.user?.role === "admin"
  }

  const isAuthenticated = authState.user !== null

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isLoading: authState.isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
