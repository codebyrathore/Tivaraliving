import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, User, Key, Database, BarChart3, Package, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"

export default function AdminGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin CRM Access Guide</h1>
          <p className="text-xl text-gray-600">How to access and use the Tivara Living admin dashboard</p>
        </div>

        {/* Login Credentials */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="h-5 w-5 mr-2 text-emerald-600" />
              Login Credentials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4 bg-emerald-50 border-emerald-200">
              <Shield className="h-4 w-4 text-emerald-600" />
              <AlertDescription className="text-emerald-800">
                <strong>Admin Access:</strong>
                <div className="mt-2 font-mono bg-emerald-100 p-3 rounded">
                  <div>Email: admin@tivara.com</div>
                  <div>Password: admin123</div>
                </div>
              </AlertDescription>
            </Alert>

            <Alert className="bg-blue-50 border-blue-200">
              <User className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Customer Demo:</strong>
                <div className="mt-2 font-mono bg-blue-100 p-3 rounded">
                  <div>Email: customer@tivara.com</div>
                  <div>Password: customer123</div>
                </div>
              </AlertDescription>
            </Alert>

            <div className="mt-6 flex space-x-4">
              <Link href="/signin">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Shield className="h-4 w-4 mr-2" />
                  Go to Login
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline" className="bg-transparent">
                  <Database className="h-4 w-4 mr-2" />
                  Direct to Admin (if logged in)
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Steps to Access */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Access Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Go to Sign In Page</h3>
                  <p className="text-gray-600">Navigate to /signin or click the "Sign In" button in the navigation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Use Admin Credentials</h3>
                  <p className="text-gray-600">Enter admin@tivara.com and admin123, or click the "Admin Demo" button</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Access Admin Dashboard</h3>
                  <p className="text-gray-600">You'll be redirected to /admin with full CRM access</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Admin Features */}
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Analytics & Reports</h3>
                  <p className="text-gray-600 text-sm">Sales metrics, growth tracking, and performance insights</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShoppingCart className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Order Management</h3>
                  <p className="text-gray-600 text-sm">View, update, and track customer orders</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Package className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Product Management</h3>
                  <p className="text-gray-600 text-sm">Manage inventory, pricing, and product details</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Customer Management</h3>
                  <p className="text-gray-600 text-sm">Customer profiles, purchase history, and support</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
