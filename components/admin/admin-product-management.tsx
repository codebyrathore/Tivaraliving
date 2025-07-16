"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Download, Eye, Edit, Trash2, ArrowLeft, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AdminProductManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock products data
  const products = [
    {
      id: "PROD-001",
      name: "Turmeric Golden Milk",
      category: "body",
      price: 24.99,
      stock: 45,
      status: "active",
      image: "/placeholder.svg?height=60&width=60&text=Product",
      sales: 145,
    },
    {
      id: "PROD-002",
      name: "Meditation Cushion",
      category: "mind",
      price: 89.99,
      stock: 12,
      status: "active",
      image: "/placeholder.svg?height=60&width=60&text=Product",
      sales: 89,
    },
    {
      id: "PROD-003",
      name: "Ayurvedic Tea Blend",
      category: "body",
      price: 18.5,
      stock: 0,
      status: "out_of_stock",
      image: "/placeholder.svg?height=60&width=60&text=Product",
      sales: 156,
    },
    {
      id: "PROD-004",
      name: "Sacred Space Candle",
      category: "space",
      price: 32.0,
      stock: 28,
      status: "active",
      image: "/placeholder.svg?height=60&width=60&text=Product",
      sales: 67,
    },
    {
      id: "PROD-005",
      name: "Wellness Journal",
      category: "mind",
      price: 15.99,
      stock: 78,
      status: "active",
      image: "/placeholder.svg?height=60&width=60&text=Product",
      sales: 234,
    },
    {
      id: "PROD-006",
      name: "Himalayan Salt Lamp",
      category: "space",
      price: 45.0,
      stock: 5,
      status: "low_stock",
      image: "/placeholder.svg?height=60&width=60&text=Product",
      sales: 23,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "out_of_stock":
        return "bg-red-100 text-red-800"
      case "low_stock":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "body":
        return "Tivara Body"
      case "mind":
        return "Tivara Mind"
      case "space":
        return "Tivara Space"
      default:
        return category
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

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
              <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
              <p className="text-gray-600 mt-2">Manage your product catalog and inventory</p>
            </div>
            <Button className="mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products by name or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="body">Tivara Body</SelectItem>
                  <SelectItem value="mind">Tivara Mind</SelectItem>
                  <SelectItem value="space">Tivara Space</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Products ({filteredProducts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Product</th>
                    <th className="text-left py-3 px-4 font-medium">Category</th>
                    <th className="text-left py-3 px-4 font-medium">Price</th>
                    <th className="text-left py-3 px-4 font-medium">Stock</th>
                    <th className="text-left py-3 px-4 font-medium">Sales</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-600">{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{getCategoryName(product.category)}</td>
                      <td className="py-3 px-4 font-semibold">${product.price}</td>
                      <td className="py-3 px-4">
                        <span className={`${product.stock <= 10 ? "text-red-600" : "text-gray-900"}`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="py-3 px-4">{product.sales}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(product.status)}>{product.status.replace("_", " ")}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
