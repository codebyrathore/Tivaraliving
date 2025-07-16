"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { ArrowLeft, Shield, CreditCard, Smartphone, Building2, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  country: string
}

interface PaymentInfo {
  method: "card" | "upi" | "netbanking"
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  upiId?: string
  bankName?: string
}

export function CheckoutPage() {
  const { state: cartState, dispatch: cartDispatch } = useCart()
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  const [currentStep, setCurrentStep] = useState(1)
  const [isGuestCheckout, setIsGuestCheckout] = useState(!isAuthenticated)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  })
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: "card",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (cartState.items.length === 0) {
      router.push("/cart")
    }
  }, [cartState.items.length, router])

  const shippingCost = cartState.total >= 1500 ? 0 : 99
  const tax = cartState.total * 0.18 // 18% GST
  const finalTotal = cartState.total + shippingCost + tax

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success
    cartDispatch({ type: "CLEAR_CART" })
    router.push("/checkout/success")
  }

  const steps = [
    { number: 1, title: "Shipping Information", completed: currentStep > 1 },
    { number: 2, title: "Payment Information", completed: false },
    { number: 3, title: "Order Review", completed: false },
  ]

  if (cartState.items.length === 0) {
    return null // Will redirect via useEffect
  }

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <Link href="/cart" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>
        <h1 className="font-playfair text-3xl font-bold text-stone-800">Checkout</h1>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                step.completed
                  ? "bg-emerald-600 text-white"
                  : currentStep === step.number
                    ? "bg-emerald-100 text-emerald-600 border-2 border-emerald-600"
                    : "bg-stone-200 text-stone-600"
              }`}
            >
              {step.completed ? <Check className="w-5 h-5" /> : step.number}
            </div>
            <span className={`ml-3 font-medium ${currentStep === step.number ? "text-emerald-600" : "text-stone-600"}`}>
              {step.title}
            </span>
            {index < steps.length - 1 && <div className="w-16 h-px bg-stone-300 mx-6" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          {/* Step 1: Shipping Information */}
          {currentStep === 1 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <h2 className="font-playfair text-xl font-bold text-stone-800 mb-6">Shipping Information</h2>

              {!isAuthenticated && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                  <p className="text-emerald-800 mb-3">
                    Already have an account?{" "}
                    <Link href="/signin" className="font-medium underline">
                      Sign in
                    </Link>{" "}
                    for faster checkout
                  </p>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={!isGuestCheckout}
                      onChange={(e) => setIsGuestCheckout(!e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Create an account for future orders</span>
                  </label>
                </div>
              )}

              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    required
                    placeholder="Street address, apartment, suite, etc."
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      required
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input
                      id="pincode"
                      required
                      value={shippingInfo.pincode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      required
                      value={shippingInfo.country}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" className="btn-primary w-full">
                  Continue to Payment
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: Payment Information */}
          {currentStep === 2 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <h2 className="font-playfair text-xl font-bold text-stone-800 mb-6">Payment Information</h2>

              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Select Payment Method</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentInfo({ ...paymentInfo, method: "card" })}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                        paymentInfo.method === "card"
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <CreditCard className="w-6 h-6" />
                      <span className="text-sm font-medium">Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentInfo({ ...paymentInfo, method: "upi" })}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                        paymentInfo.method === "upi"
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <Smartphone className="w-6 h-6" />
                      <span className="text-sm font-medium">UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentInfo({ ...paymentInfo, method: "netbanking" })}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                        paymentInfo.method === "netbanking"
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <Building2 className="w-6 h-6" />
                      <span className="text-sm font-medium">Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Card Payment Form */}
                {paymentInfo.method === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={paymentInfo.cardNumber || ""}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          required
                          placeholder="MM/YY"
                          value={paymentInfo.expiryDate || ""}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          required
                          placeholder="123"
                          value={paymentInfo.cvv || ""}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI Payment Form */}
                {paymentInfo.method === "upi" && (
                  <div>
                    <Label htmlFor="upiId">UPI ID *</Label>
                    <Input
                      id="upiId"
                      required
                      placeholder="yourname@upi"
                      value={paymentInfo.upiId || ""}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, upiId: e.target.value })}
                    />
                  </div>
                )}

                {/* Net Banking Form */}
                {paymentInfo.method === "netbanking" && (
                  <div>
                    <Label htmlFor="bankName">Select Bank *</Label>
                    <select
                      id="bankName"
                      required
                      className="w-full p-3 border border-stone-300 rounded-lg"
                      value={paymentInfo.bankName || ""}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, bankName: e.target.value })}
                    >
                      <option value="">Select your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="kotak">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                    Back to Shipping
                  </Button>
                  <Button type="submit" disabled={isProcessing} className="btn-primary flex-1">
                    {isProcessing ? "Processing..." : `Pay ₹${finalTotal.toFixed(2)}`}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 sticky top-24">
            <h2 className="font-playfair text-xl font-bold text-stone-800 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartState.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-stone-800 text-sm truncate">{item.name}</p>
                    <p className="text-stone-600 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-stone-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-medium">₹{cartState.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Shipping</span>
                <span className="font-medium">{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Tax (GST 18%)</span>
                <span className="font-medium">₹{tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center space-x-2 text-emerald-600 bg-emerald-50 rounded-lg p-3">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Secure SSL Encrypted Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
