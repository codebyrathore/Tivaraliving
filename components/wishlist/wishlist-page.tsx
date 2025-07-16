"use client"

import { Button } from "@/components/ui/button"
import { useWishlist } from "./wishlist-provider"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { Heart, ShoppingCart, Star, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function WishlistPage() {
  const { state, dispatch } = useWishlist()
  const { dispatch: cartDispatch } = useCart()
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin?redirect=/wishlist")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return (
      <div className="container-custom py-16">
        <div className="text-center max-w-md mx-auto">
          <Heart className="w-24 h-24 text-stone-300 mx-auto mb-6" />
          <h1 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Sign in to view wishlist</h1>
          <p className="text-stone-600 mb-8">Create an account or sign in to save your favorite products.</p>
          <Link href="/signin">
            <Button className="btn-primary">Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }

  const removeFromWishlist = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const addToCart = (item: any) => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        image: item.image,
        category: item.category,
        inStock: item.inStock,
        maxQuantity: 10,
      },
    })
  }

  if (state.items.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center max-w-md mx-auto">
          <Heart className="w-24 h-24 text-stone-300 mx-auto mb-6" />
          <h1 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Your wishlist is empty</h1>
          <p className="text-stone-600 mb-8">Save products you love to your wishlist and never lose track of them.</p>
          <Link href="/shop">
            <Button className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Start Shopping
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
        <h1 className="font-playfair text-3xl font-bold text-stone-800">My Wishlist</h1>
        <p className="text-stone-600">{state.itemCount} items saved</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {state.items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden group">
            <div className="relative">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-4 h-4 text-stone-600" />
              </button>
              {!item.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-white text-stone-800 px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            <div className="p-4">
              <p className="text-emerald-600 text-sm font-medium mb-1">{item.category}</p>
              <h3 className="font-semibold text-stone-800 mb-2 line-clamp-2">{item.name}</h3>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-stone-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-stone-600 ml-1">({item.reviews})</span>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-stone-800">₹{item.price}</span>
                {item.originalPrice && (
                  <span className="text-sm text-stone-500 line-through">₹{item.originalPrice}</span>
                )}
              </div>

              <div className="space-y-2">
                <Button onClick={() => addToCart(item)} disabled={!item.inStock} className="w-full btn-primary">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>

                <Link href={`/shop/product/${item.id}`}>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Share Wishlist */}
      <div className="mt-12 text-center">
        <div className="bg-emerald-50 rounded-xl p-8 max-w-md mx-auto">
          <h3 className="font-playfair text-xl font-bold text-stone-800 mb-3">Share Your Wishlist</h3>
          <p className="text-stone-600 mb-4">
            Let friends and family know what wellness products you're interested in.
          </p>
          <Button variant="outline" className="bg-white">
            Share Wishlist
          </Button>
        </div>
      </div>
    </div>
  )
}
