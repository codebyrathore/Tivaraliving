"use client"

import { useEffect, useState } from "react"
import { useCart } from "./cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, ShoppingCart, Clock, Mail } from "lucide-react"

interface AbandonedCartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  abandonedAt: Date
}

export function AbandonedCartRecovery() {
  const { state } = useCart()
  const { user } = useAuth()
  const [showReminder, setShowReminder] = useState(false)
  const [abandonedItems, setAbandonedItems] = useState<AbandonedCartItem[]>([])

  useEffect(() => {
    // Check for abandoned cart after 30 minutes of inactivity
    let abandonedTimer: NodeJS.Timeout

    if (state.items.length > 0 && user) {
      abandonedTimer = setTimeout(
        () => {
          const abandoned = state.items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
            abandonedAt: new Date(),
          }))

          setAbandonedItems(abandoned)
          setShowReminder(true)

          // Send email reminder (in real app, this would be a server-side function)
          sendAbandonedCartEmail(user.email, abandoned)
        },
        30 * 60 * 1000,
      ) // 30 minutes

      return () => clearTimeout(abandonedTimer)
    }
  }, [state.items, user])

  const sendAbandonedCartEmail = async (email: string, items: AbandonedCartItem[]) => {
    // In a real application, this would call your email service
    console.log(`Sending abandoned cart email to ${email}`, items)

    // Mock email service call
    try {
      const response = await fetch("/api/send-abandoned-cart-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          items,
          recoveryUrl: `${window.location.origin}/cart?recovery=true`,
        }),
      })

      if (response.ok) {
        console.log("Abandoned cart email sent successfully")
      }
    } catch (error) {
      console.error("Failed to send abandoned cart email:", error)
    }
  }

  const dismissReminder = () => {
    setShowReminder(false)
    setAbandonedItems([])
  }

  const goToCart = () => {
    window.location.href = "/cart"
    dismissReminder()
  }

  if (!showReminder || abandonedItems.length === 0) {
    return null
  }

  const totalValue = abandonedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="fixed bottom-20 right-6 z-40 max-w-sm">
      <Card className="shadow-lg border-l-4 border-l-amber-500">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <CardTitle className="text-lg">Don't forget your items!</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={dismissReminder} className="h-6 w-6 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-stone-600">
            You have {abandonedItems.length} item{abandonedItems.length > 1 ? "s" : ""} waiting in your cart
          </p>

          <div className="space-y-2 max-h-32 overflow-y-auto">
            {abandonedItems.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-stone-900 truncate">{item.name}</p>
                  <p className="text-xs text-stone-500">
                    Qty: {item.quantity} • ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
            {abandonedItems.length > 3 && (
              <p className="text-xs text-stone-500 text-center">+{abandonedItems.length - 3} more items</p>
            )}
          </div>

          <div className="border-t pt-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Total Value:</span>
              <span className="text-lg font-bold text-emerald-600">₹{totalValue}</span>
            </div>

            <div className="space-y-2">
              <Button onClick={goToCart} className="w-full btn-primary">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Complete Purchase
              </Button>

              <div className="text-center">
                <p className="text-xs text-stone-500">
                  <Mail className="w-3 h-3 inline mr-1" />
                  Recovery email sent to {user?.email}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
