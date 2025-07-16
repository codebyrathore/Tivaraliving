"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Package, DollarSign, Pause, Play, X } from "lucide-react"
import Image from "next/image"

interface Subscription {
  id: string
  productName: string
  productImage: string
  frequency: "weekly" | "monthly" | "quarterly"
  nextDelivery: string
  price: number
  status: "active" | "paused" | "cancelled"
  savings: number
  startDate: string
}

export function SubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "sub-1",
      productName: "Turmeric Golden Milk Powder",
      productImage: "/placeholder.svg?height=100&width=100&text=Turmeric",
      frequency: "monthly",
      nextDelivery: "2024-02-15",
      price: 28,
      status: "active",
      savings: 5.6,
      startDate: "2023-11-15",
    },
    {
      id: "sub-2",
      productName: "Ashwagandha Capsules",
      productImage: "/placeholder.svg?height=100&width=100&text=Ashwagandha",
      frequency: "quarterly",
      nextDelivery: "2024-03-01",
      price: 34,
      status: "active",
      savings: 6.8,
      startDate: "2023-12-01",
    },
    {
      id: "sub-3",
      productName: "Organic Sesame Oil",
      productImage: "/placeholder.svg?height=100&width=100&text=Oil",
      frequency: "monthly",
      nextDelivery: "2024-02-20",
      price: 28,
      status: "paused",
      savings: 5.6,
      startDate: "2023-10-20",
    },
  ])

  const updateSubscriptionStatus = (id: string, status: "active" | "paused" | "cancelled") => {
    setSubscriptions((prev) => prev.map((sub) => (sub.id === id ? { ...sub, status } : sub)))
  }

  const updateSubscriptionFrequency = (id: string, frequency: "weekly" | "monthly" | "quarterly") => {
    setSubscriptions((prev) => prev.map((sub) => (sub.id === id ? { ...sub, frequency } : sub)))
  }

  const getStatusColor = (status: string) => {
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

  const getFrequencyLabel = (frequency: string) => {
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

  const totalMonthlySavings = subscriptions
    .filter((sub) => sub.status === "active")
    .reduce((total, sub) => total + sub.savings, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">Subscription Manager</h1>
          <p className="text-stone-600 mt-2">Manage your recurring wellness deliveries</p>
        </div>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">${totalMonthlySavings.toFixed(2)}</div>
            <div className="text-sm text-stone-600">Monthly Savings</div>
          </div>
        </Card>
      </div>

      {/* Subscriptions Grid */}
      <div className="grid gap-6">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Product Image */}
                <Image
                  src={subscription.productImage || "/placeholder.svg"}
                  alt={subscription.productName}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />

                {/* Product Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900">{subscription.productName}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-stone-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Next: {subscription.nextDelivery}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>${subscription.price}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Package className="h-4 w-4" />
                          <span>{getFrequencyLabel(subscription.frequency)}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(subscription.status)}>
                      {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                    </Badge>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Frequency Selector */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-stone-600">Frequency:</span>
                        <Select
                          value={subscription.frequency}
                          onValueChange={(value: "weekly" | "monthly" | "quarterly") =>
                            updateSubscriptionFrequency(subscription.id, value)
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
                      </div>

                      {/* Savings Display */}
                      <div className="text-sm text-green-600 font-medium">
                        Saving ${subscription.savings.toFixed(2)}/month
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2">
                      {subscription.status === "active" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateSubscriptionStatus(subscription.id, "paused")}
                        >
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                      )}
                      {subscription.status === "paused" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateSubscriptionStatus(subscription.id, "active")}
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Resume
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 bg-transparent"
                        onClick={() => updateSubscriptionStatus(subscription.id, "cancelled")}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Subscription */}
      <Card className="border-dashed border-2 border-stone-300">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <Package className="h-12 w-12 text-stone-400 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-stone-900">Add New Subscription</h3>
              <p className="text-stone-600">Save up to 20% with recurring deliveries</p>
            </div>
            <Button className="bg-sage-600 hover:bg-sage-700">Browse Products</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
