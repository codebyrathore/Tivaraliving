"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, X } from "lucide-react"
import { useCart } from "./cart-provider"
import Image from "next/image"
import Link from "next/link"

export function CartDrawer() {
  const { state, updateQuantity, removeFromCart } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {state.itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-sage-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {state.itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({state.itemCount} items)</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <Link href="/shop">
                <Button className="mt-4">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-sage-600 font-semibold">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.maxStock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total: ₹{state.total}</span>
            </div>
            <div className="space-y-2">
              <Link href="/cart" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  View Cart
                </Button>
              </Link>
              <Link href="/checkout" className="w-full">
                <Button className="w-full">Checkout</Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
