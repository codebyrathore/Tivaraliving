"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Package, Users, DollarSign, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"

export function AdminDashboard() {
  // Mock data - in real app this would come from API
  const stats = {
    totalSales: 45230,
    salesGrowth: 12.5,
    newOrders: 23,
    ordersGrowth: 8.2,
    totalProducts: 156,
    productsGrowth: 3.1,
    totalCustomers: 1247,
    customersGrowth: 15.8,
  }

  const recentOrders = [
    { id: "ORD-001", customer: "Sarah Johnson", amount: 89.99, status: "pending", date: "2024-01-15" },
    { id: "ORD-002", customer: "Michael Chen", amount: 156.5, status: "processing", date: "2024-01-15" },
    { id: "ORD-003", customer: "Emily Davis", amount: 234.0, status: "shipped", date: "2024-01-14" },
    { id: "ORD-004", customer: "David Wilson", amount: 67.25, status: "delivered", date: "2024-01-14" },
    { id: "ORD-005", customer: "Lisa Anderson", amount: 198.75, status: "pending", date: "2024-01-13" },
  ]

  const topProducts = [
    { name: "Turmeric Golden Milk", sales: 145, revenue: 2175.0, growth: 23.5 },
    { name: "Meditation Cushion", sales: 89, revenue: 4450.0, growth: 18.2 },
    { name: "Ayurvedic Tea Blend", sales: 156, revenue: 1872.0, growth: 15.8 },
    { name: "Sacred Space Candle", sales: 67, revenue: 1340.0, growth: 12.4 },
    { name: "Wellness Journal", sales: 234, revenue: 3510.0, growth: 8.9 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalSales.toLocaleString()}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{stats.salesGrowth}% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.newOrders}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{stats.ordersGrowth}% from last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProducts}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{stats.productsGrowth}% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCustomers}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{stats.customersGrowth}% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link href="/admin/orders">
            <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-700">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Manage Orders
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button className="w-full h-12 bg-transparent" variant="outline">
              <Package className="h-4 w-4 mr-2" />
              Manage Products
            </Button>
          </Link>
          <Link href="/admin/customers">
            <Button className="w-full h-12 bg-transparent" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Manage Customers
            </Button>
          </Link>
          <Link href="/admin/analytics">
            <Button className="w-full h-12 bg-transparent" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{order.id}</span>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${order.amount}</p>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/admin/orders">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Orders
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

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
                        <p className="text-sm text-gray-600">{product.sales} sales</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${product.revenue.toLocaleString()}</p>
                      <div className="flex items-center text-xs text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />+{product.growth}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/admin/products">
                  <Button variant="outline" className="w-full bg-transparent">
                    Manage Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
