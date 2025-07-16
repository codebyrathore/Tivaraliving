"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Eye, Edit, Mail, ArrowLeft, Users } from "lucide-react"
import Link from "next/link"

export function AdminCustomerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock customers data
  const customers = [
    {
      id: "CUST-001",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1 (555) 123-4567",
      totalOrders: 8,
      totalSpent: 567.89,
      status: "active",
      joinDate: "2023-08-15",
      lastOrder: "2024-01-15",
    },
    {
      id: "CUST-002",
      name: "Michael Chen",
      email: "michael@example.com",
      phone: "+1 (555) 234-5678",
      totalOrders: 12,
      totalSpent: 1234.56,
      status: "active",
      joinDate: "2023-06-22",
      lastOrder: "2024-01-14",
    },
    {
      id: "CUST-003",
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+1 (555) 345-6789",
      totalOrders: 3,
      totalSpent: 189.75,
      status: "active",
      joinDate: "2023-11-08",
      lastOrder: "2024-01-10",
    },
    {
      id: "CUST-004",
      name: "David Wilson",
      email: "david@example.com",
      phone: "+1 (555) 456-7890",
      totalOrders: 1,
      totalSpent: 67.25,
      status: "new",
      joinDate: "2024-01-12",
      lastOrder: "2024-01-12",
    },
    {
      id: "CUST-005",
      name: "Lisa Anderson",
      email: "lisa@example.com",
      phone: "+1 (555) 567-8901",
      totalOrders: 15,
      totalSpent: 2156.78,
      status: "vip",
      joinDate: "2023-03-14",
      lastOrder: "2024-01-13",
    },
    {
      id: "CUST-006",
      name: "James Brown",
      email: "james@example.com",
      phone: "+1 (555) 678-9012",
      totalOrders: 0,
      totalSpent: 0,
      status: "inactive",
      joinDate: "2023-12-01",
      lastOrder: "Never",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "new":
        return "bg-blue-100 text-blue-800"
      case "vip":
        return "bg-purple-100 text-purple-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    return matchesSearch && matchesStatus
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
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-2">Manage customer accounts and view purchase history</p>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search customers by name, email, or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Customers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Customers ({filteredCustomers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Customer</th>
                    <th className="text-left py-3 px-4 font-medium">Contact</th>
                    <th className="text-left py-3 px-4 font-medium">Orders</th>
                    <th className="text-left py-3 px-4 font-medium">Total Spent</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Last Order</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-gray-600">{customer.id}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm">{customer.email}</p>
                          <p className="text-sm text-gray-600">{customer.phone}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold">{customer.totalOrders}</td>
                      <td className="py-3 px-4 font-semibold">${customer.totalSpent.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(customer.status)}>{customer.status.toUpperCase()}</Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{customer.lastOrder}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredCustomers.length === 0 && (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No customers found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
