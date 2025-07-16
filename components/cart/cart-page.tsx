"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { Plus, Minus, X, ShoppingBag, ArrowLeft, Shield, Truck } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"

export function CartPage() {
  const { state, dispatch } = useCart()
  const { isAuthenticated } = useAuth()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const shippingThreshold = 1500
  const shippingCost = state.total >= shippingThreshold ? 0 : 99
  const finalTotal = state.total + shippingCost

  if (state.items.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-24 h-24 text-stone-300 mx-auto mb-6" />
          <h1 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Your cart is empty</h1>
          <p className="text-stone-600 mb-8">
            Discover our wellness products and start your journey to holistic health.
          </p>
          <Link href="/shop">
            <Button className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <Link href="/shop" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>
        <h1 className="font-playfair text-3xl font-bold text-stone-800">Shopping Cart</h1>
        <p className="text-stone-600">{state.itemCount} items in your cart</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-stone-800 text-lg">{item.name}</h3>
                        <p className="text-emerald-600 text-sm font-medium">{item.category}</p>

                        <div className="flex items-center space-x-2 mt-2">
                          <span className="font-bold text-stone-800 text-lg">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-stone-500 line-through">₹{item.originalPrice}</span>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-700 text-sm font-medium">In Stock</span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
                          disabled={item.quantity >= item.maxQuantity}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-stone-800 text-lg">₹{(item.price * item.quantity).toFixed(2)}</p>
                        {item.originalPrice && (
                          <p className="text-sm text-green-600">
                            Save ₹{((item.originalPrice - item.price) * item.quantity).toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 sticky top-24">
            <h2 className="font-playfair text-xl font-bold text-stone-800 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-stone-600">Subtotal ({state.itemCount} items)</span>
                <span className="font-medium">₹{state.total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-stone-600">Shipping</span>
                <span className="font-medium">{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
              </div>

              {state.total < shippingThreshold && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-amber-800 text-sm">
                    Add ₹{(shippingThreshold - state.total).toFixed(2)} more for free shipping
                  </p>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/checkout">
                <Button className="btn-primary w-full text-lg py-3">Proceed to Checkout</Button>
              </Link>

              {!isAuthenticated && (
                <p className="text-center text-sm text-stone-600">
                  <Link href="/signin" className="text-emerald-600 hover:underline">
                    Sign in
                  </Link>{" "}
                  for faster checkout
                </p>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
              <div className="text-center">
                <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs text-stone-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs text-stone-600">Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
