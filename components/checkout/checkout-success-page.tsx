"use client"

import { Button } from "@/components/ui/button"
import { Check, Package, Mail, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CheckoutSuccessPage() {
  const [orderNumber] = useState(`TL${Date.now().toString().slice(-6)}`)
  const [estimatedDelivery] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() + 5)
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  })

  useEffect(() => {
    // Send order confirmation email (simulate)
    console.log("Order confirmation email sent")
  }, [])

  return (
    <div className="container-custom py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-10 h-10 text-emerald-600" />
        </div>

        {/* Success Message */}
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-4">Order Confirmed!</h1>
        <p className="text-xl text-stone-600 mb-8">
          Thank you for choosing Tivara Living. Your wellness journey continues with this order.
        </p>

        {/* Order Details */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Package className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-stone-800 mb-1">Order Number</h3>
              <p className="text-stone-600 font-mono">{orderNumber}</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-stone-800 mb-1">Confirmation Sent</h3>
              <p className="text-stone-600">Check your email</p>
            </div>
            <div>
              <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-stone-800 mb-1">Estimated Delivery</h3>
              <p className="text-stone-600">{estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-emerald-50 rounded-xl p-8 mb-8">
          <h2 className="font-playfair text-2xl font-bold text-stone-800 mb-4">What's Next?</h2>
          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <p className="text-stone-700">We'll prepare your order with love and care</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-stone-700">You'll receive tracking information via email</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-stone-700">Your wellness products will arrive at your doorstep</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button className="btn-primary">
              Track Your Order
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
        </div>

        {/* Support */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-stone-600 mb-4">Questions about your order? We're here to help.</p>
          <Link href="/contact" className="text-emerald-600 hover:underline font-medium">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
