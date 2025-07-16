"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Package, CreditCard, Pause, Play, X } from "lucide-react"

interface Subscription {
  id: string
  productName: string
  productImage: string
  frequency: "weekly" | "monthly" | "quarterly"
  nextDelivery: string
  price: number
  status: "active" | "paused" | "cancelled"
  startDate: string
}

export function SubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "sub-001",
      productName: "Turmeric Golden Milk Blend",
      productImage: "/placeholder.svg?height=100&width=100&text=Golden+Milk",
      frequency: "monthly",
      nextDelivery: "2024-02-15",
      price: 1999,
      status: "active",
      startDate: "2024-01-15",
    },
    {
      id: "sub-002",
      productName: "Ashwagandha Capsules",
      productImage: "/placeholder.svg?height=100&width=100&text=Ashwagandha",
      frequency: "monthly",
      nextDelivery: "2024-02-20",
      price: 1599,
      status: "active",
      startDate: "2024-01-20",
    },
    {
      id: "sub-003",
      productName: "Essential Oil Blend",
      productImage: "/placeholder.svg?height=100&width=100&text=Essential+Oil",
      frequency: "quarterly",
      nextDelivery: "2024-03-10",
      price: 2299,
      status: "paused",
      startDate: "2023-12-10",
    },
  ])

  const updateSubscriptionStatus = (id: string, status: Subscription["status"]) => {
    setSubscriptions((subs) => subs.map((sub) => (sub.id === id ? { ...sub, status } : sub)))
  }

  const updateSubscriptionFrequency = (id: string, frequency: Subscription["frequency"]) => {
    setSubscriptions((subs) => subs.map((sub) => (sub.id === id ? { ...sub, frequency } : sub)))
  }

  const getStatusColor = (status: Subscription["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getFrequencyText = (frequency: Subscription["frequency"]) => {
    switch (frequency) {
      case "weekly":
        return "Every Week"
      case "monthly":
        return "Every Month"
      case "quarterly":
        return "Every 3 Months"
      default:
        return frequency
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const activeSubscriptions = subscriptions.filter((sub) => sub.status === "active")
  const totalMonthlySavings = activeSubscriptions.reduce((total, sub) => {
    const discount = sub.frequency === "quarterly" ? 0.15 : 0.1 // 15% for quarterly, 10% for monthly
    return total + sub.price * discount
  }, 0)

  return (
    <div className="space-y-6">
      {/* Subscription Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Subscriptions</p>
                <p className="text-2xl font-bold text-gray-900">{activeSubscriptions.length}</p>
              </div>
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Savings</p>
                <p className="text-2xl font-bold text-emerald-600">₹{Math.round(totalMonthlySavings)}</p>
              </div>
              <CreditCard className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Next Delivery</p>
                <p className="text-lg font-semibold text-gray-900">
                  {activeSubscriptions.length > 0
                    ? formatDate(
                        activeSubscriptions.sort(
                          (a, b) => new Date(a.nextDelivery).getTime() - new Date(b.nextDelivery).getTime(),
                        )[0].nextDelivery,
                      )
                    : "No active subscriptions"}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subscription List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={subscription.productImage || "/placeholder.svg"}
                      alt={subscription.productName}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{subscription.productName}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>₹{subscription.price}</span>
                        <span>•</span>
                        <span>{getFrequencyText(subscription.frequency)}</span>
                        <span>•</span>
                        <span>Next: {formatDate(subscription.nextDelivery)}</span>
                      </div>
                      <div className="mt-2">
                        <Badge className={getStatusColor(subscription.status)}>
                          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {subscription.status === "active" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateSubscriptionStatus(subscription.id, "paused")}
                      >
                        <Pause className="w-4 h-4 mr-1" />
                        Pause
                      </Button>
                    )}

                    {subscription.status === "paused" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateSubscriptionStatus(subscription.id, "active")}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Resume
                      </Button>
                    )}

                    <Select
                      value={subscription.frequency}
                      onValueChange={(value) =>
                        updateSubscriptionFrequency(subscription.id, value as Subscription["frequency"])
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateSubscriptionStatus(subscription.id, "cancelled")}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {subscription.status === "active" && (
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-emerald-800">
                      <strong>Subscription Benefits:</strong> Save 10% on every delivery, skip or modify anytime, and
                      get priority customer support.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {subscriptions.length === 0 && (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No subscriptions yet.</p>
              <Button className="mt-4" asChild>
                <a href="/shop">Browse Products</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
