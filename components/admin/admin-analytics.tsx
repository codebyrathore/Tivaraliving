"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("30d")

  // Mock analytics data
  const analyticsData = {
    "7d": {
      revenue: { current: 12450, previous: 11200, growth: 11.2 },
      orders: { current: 89, previous: 76, growth: 17.1 },
      customers: { current: 34, previous: 28, growth: 21.4 },
      avgOrderValue: { current: 139.89, previous: 147.37, growth: -5.1 },
    },
    "30d": {
      revenue: { current: 45230, previous: 38900, growth: 16.3 },
      orders: { current: 324, previous: 289, growth: 12.1 },
      customers: { current: 156, previous: 134, growth: 16.4 },
      avgOrderValue: { current: 139.6, previous: 134.6, growth: 3.7 },
    },
    "90d": {
      revenue: { current: 134560, previous: 118900, growth: 13.2 },
      orders: { current: 967, previous: 834, growth: 15.9 },
      customers: { current: 423, previous: 367, growth: 15.3 },
      avgOrderValue: { current: 139.15, previous: 142.6, growth: -2.4 },
    },
    "1y": {
      revenue: { current: 567890, previous: 445600, growth: 27.4 },
      orders: { current: 4123, previous: 3456, growth: 19.3 },
      customers: { current: 1247, previous: 987, growth: 26.3 },
      avgOrderValue: { current: 137.8, previous: 129.0, growth: 6.8 },
    },
  }

  const currentData = analyticsData[timeRange as keyof typeof analyticsData]

  const topProducts = [
    { name: "Turmeric Golden Milk", revenue: 3450, orders: 145, growth: 23.5 },
    { name: "Meditation Cushion", revenue: 4450, orders: 89, growth: 18.2 },
    { name: "Ayurvedic Tea Blend", revenue: 2890, orders: 156, growth: 15.8 },
    { name: "Sacred Space Candle", revenue: 2140, orders: 67, growth: 12.4 },
    { name: "Wellness Journal", revenue: 3510, orders: 234, growth: 8.9 },
  ]

  const salesByCategory = [
    { category: "Tivara Body", revenue: 18450, percentage: 40.8, growth: 15.2 },
    { category: "Tivara Mind", revenue: 15670, percentage: 34.6, growth: 12.8 },
    { category: "Tivara Space", revenue: 11110, percentage: 24.6, growth: 18.9 },
  ]

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? (
      <TrendingUp className="h-3 w-3 text-green-500" />
    ) : (
      <TrendingDown className="h-3 w-3 text-red-500" />
    )
  }

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
              <p className="text-gray-600 mt-2">Track your business performance and insights</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                  <SelectItem value="1y">1 Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${currentData.revenue.current.toLocaleString()}</div>
              <div className={`flex items-center text-xs ${getGrowthColor(currentData.revenue.growth)}`}>
                {getGrowthIcon(currentData.revenue.growth)}
                <span className="ml-1">
                  {currentData.revenue.growth > 0 ? "+" : ""}
                  {currentData.revenue.growth}% from previous period
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentData.orders.current.toLocaleString()}</div>
              <div className={`flex items-center text-xs ${getGrowthColor(currentData.orders.growth)}`}>
                {getGrowthIcon(currentData.orders.growth)}
                <span className="ml-1">
                  {currentData.orders.growth > 0 ? "+" : ""}
                  {currentData.orders.growth}% from previous period
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentData.customers.current.toLocaleString()}</div>
              <div className={`flex items-center text-xs ${getGrowthColor(currentData.customers.growth)}`}>
                {getGrowthIcon(currentData.customers.growth)}
                <span className="ml-1">
                  {currentData.customers.growth > 0 ? "+" : ""}
                  {currentData.customers.growth}% from previous period
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${currentData.avgOrderValue.current.toFixed(2)}</div>
              <div className={`flex items-center text-xs ${getGrowthColor(currentData.avgOrderValue.growth)}`}>
                {getGrowthIcon(currentData.avgOrderValue.growth)}
                <span className="ml-1">
                  {currentData.avgOrderValue.growth > 0 ? "+" : ""}
                  {currentData.avgOrderValue.growth}% from previous period
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.orders} orders</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${product.revenue.toLocaleString()}</p>
                      <div className={`flex items-center text-xs ${getGrowthColor(product.growth)}`}>
                        {getGrowthIcon(product.growth)}
                        <span className="ml-1">+{product.growth}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sales by Category */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesByCategory.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.category}</span>
                      <div className="text-right">
                        <span className="font-semibold">${category.revenue.toLocaleString()}</span>
                        <div className={`text-xs ${getGrowthColor(category.growth)}`}>+{category.growth}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600">{category.percentage}% of total sales</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">3.2%</div>
              <div className="flex items-center text-sm text-green-600 mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.4% from last period
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">68%</div>
              <div className="flex items-center text-sm text-green-600 mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5% from last period
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Return Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">2.1%</div>
              <div className="flex items-center text-sm text-green-600 mt-2">
                <TrendingDown className="h-3 w-3 mr-1" />
                -0.3% from last period
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
