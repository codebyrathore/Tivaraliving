"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Package, Sparkles } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart/cart-provider"
import { useWishlist } from "@/components/wishlist/wishlist-provider"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  doshaMatch: string[]
  benefits: string[]
  description: string
  inStock: boolean
}

interface PersonalizedRecommendationsProps {
  primaryDosha: string
  secondaryDosha: string
  scores: { [key: string]: number }
}

export function PersonalizedRecommendations({
  primaryDosha,
  secondaryDosha,
  scores,
}: PersonalizedRecommendationsProps) {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null)
  const { dispatch: cartDispatch } = useCart()
  const { dispatch: wishlistDispatch, isInWishlist } = useWishlist()

  // Personalized product recommendations based on dosha
  const getPersonalizedProducts = () => {
    const allProducts: Product[] = [
      // Vata Products
      {
        id: "vata-golden-milk",
        name: "Vata Balancing Golden Milk",
        price: 2499,
        originalPrice: 2999,
        rating: 4.9,
        reviews: 156,
        image: "/placeholder.svg?height=300&width=300&text=Vata+Golden+Milk",
        category: "Tivara Body",
        doshaMatch: ["vata"],
        benefits: ["Calms nervous system", "Improves sleep", "Reduces anxiety"],
        description: "Specially formulated with warming spices to balance Vata dosha",
        inStock: true,
      },
      {
        id: "vata-meditation-oil",
        name: "Grounding Meditation Oil",
        price: 1899,
        rating: 4.8,
        reviews: 89,
        image: "/placeholder.svg?height=300&width=300&text=Meditation+Oil",
        category: "Tivara Mind",
        doshaMatch: ["vata"],
        benefits: ["Grounds scattered energy", "Enhances focus", "Promotes stability"],
        description: "Sesame oil blend with sandalwood and vetiver for Vata grounding",
        inStock: true,
      },
      // Pitta Products
      {
        id: "pitta-cooling-tea",
        name: "Pitta Cooling Herbal Tea",
        price: 1699,
        rating: 4.7,
        reviews: 203,
        image: "/placeholder.svg?height=300&width=300&text=Cooling+Tea",
        category: "Tivara Body",
        doshaMatch: ["pitta"],
        benefits: ["Cools internal heat", "Reduces inflammation", "Calms mind"],
        description: "Cooling herbs like mint, fennel, and rose to pacify Pitta",
        inStock: true,
      },
      {
        id: "pitta-crystal-set",
        name: "Cooling Crystal Collection",
        price: 3299,
        rating: 4.6,
        reviews: 67,
        image: "/placeholder.svg?height=300&width=300&text=Cooling+Crystals",
        category: "Tivara Space",
        doshaMatch: ["pitta"],
        benefits: ["Reduces anger", "Promotes peace", "Cools environment"],
        description: "Moonstone, aquamarine, and rose quartz for Pitta balance",
        inStock: true,
      },
      // Kapha Products
      {
        id: "kapha-energizing-blend",
        name: "Kapha Energizing Spice Blend",
        price: 1999,
        rating: 4.8,
        reviews: 134,
        image: "/placeholder.svg?height=300&width=300&text=Energizing+Blend",
        category: "Tivara Body",
        doshaMatch: ["kapha"],
        benefits: ["Boosts metabolism", "Increases energy", "Reduces sluggishness"],
        description: "Warming spices like ginger, black pepper, and cinnamon for Kapha",
        inStock: true,
      },
      {
        id: "kapha-motivation-incense",
        name: "Motivation Incense Sticks",
        price: 899,
        rating: 4.5,
        reviews: 78,
        image: "/placeholder.svg?height=300&width=300&text=Motivation+Incense",
        category: "Tivara Space",
        doshaMatch: ["kapha"],
        benefits: ["Stimulates action", "Clears mental fog", "Energizes space"],
        description: "Eucalyptus and rosemary blend to activate Kapha energy",
        inStock: true,
      },
    ]

    // Filter products based on primary and secondary dosha
    return allProducts
      .filter((product) => product.doshaMatch.includes(primaryDosha) || product.doshaMatch.includes(secondaryDosha))
      .sort((a, b) => {
        // Prioritize primary dosha matches
        const aMatchesPrimary = a.doshaMatch.includes(primaryDosha)
        const bMatchesPrimary = b.doshaMatch.includes(primaryDosha)
        if (aMatchesPrimary && !bMatchesPrimary) return -1
        if (!aMatchesPrimary && bMatchesPrimary) return 1
        return b.rating - a.rating
      })
  }

  const personalizedProducts = getPersonalizedProducts()

  // Create curated bundles
  const bundles = [
    {
      id: "starter-bundle",
      name: `${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} Starter Bundle`,
      products: personalizedProducts.slice(0, 3),
      discount: 20,
      description: `Perfect introduction to ${primaryDosha} balancing products`,
    },
    {
      id: "complete-bundle",
      name: `Complete ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} Wellness Kit`,
      products: personalizedProducts.slice(0, 4),
      discount: 25,
      description: `Comprehensive kit for complete ${primaryDosha} balance`,
    },
  ]

  const addToCart = (product: Product) => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
        inStock: product.inStock,
        maxQuantity: 50,
      },
      quantity: 1,
    })
  }

  const addBundleToCart = (bundle: any) => {
    bundle.products.forEach((product: Product) => {
      const discountedPrice = Math.round(product.price * (1 - bundle.discount / 100))
      cartDispatch({
        type: "ADD_ITEM",
        payload: {
          id: `${bundle.id}-${product.id}`,
          name: `${product.name} (Bundle)`,
          price: discountedPrice,
          originalPrice: product.price,
          image: product.image,
          category: product.category,
          inStock: product.inStock,
          maxQuantity: 50,
        },
        quantity: 1,
      })
    })
  }

  const toggleWishlist = (product: Product) => {
    const isWished = isInWishlist(product.id)
    if (isWished) {
      wishlistDispatch({ type: "REMOVE_ITEM", payload: product.id })
    } else {
      wishlistDispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          category: product.category,
          inStock: product.inStock,
          rating: product.rating,
          reviews: product.reviews,
        },
      })
    }
  }

  return (
    <div className="space-y-8">
      {/* Curated Bundles */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="w-6 h-6 text-emerald-600" />
          <h2 className="font-playfair text-2xl font-bold text-stone-800">Curated Bundles for You</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {bundles.map((bundle) => {
            const totalPrice = bundle.products.reduce((sum, product) => sum + product.price, 0)
            const discountedPrice = Math.round(totalPrice * (1 - bundle.discount / 100))
            const savings = totalPrice - discountedPrice

            return (
              <Card key={bundle.id} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save {bundle.discount}%
                </div>

                <CardHeader>
                  <CardTitle className="font-playfair text-xl">{bundle.name}</CardTitle>
                  <p className="text-stone-600">{bundle.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {bundle.products.map((product, index) => (
                      <div key={product.id} className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>{product.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-stone-600">Total Value:</span>
                      <span className="line-through text-stone-500">₹{totalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold">Bundle Price:</span>
                      <span className="text-2xl font-bold text-emerald-600">₹{discountedPrice}</span>
                    </div>
                    <div className="text-center text-sm text-emerald-600 font-medium mb-4">You save ₹{savings}!</div>

                    <Button onClick={() => addBundleToCart(bundle)} className="w-full btn-primary">
                      <Package className="w-4 h-4 mr-2" />
                      Add Bundle to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Individual Recommendations */}
      <div>
        <h2 className="font-playfair text-2xl font-bold text-stone-800 mb-6">
          Recommended Products for Your Constitution
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalizedProducts.map((product) => {
            const isWished = isInWishlist(product.id)
            const matchesPrimary = product.doshaMatch.includes(primaryDosha)

            return (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {matchesPrimary && <Badge className="absolute top-2 left-2 bg-emerald-600">Perfect Match</Badge>}
                  {product.originalPrice && <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isWished ? "fill-red-500 text-red-500" : "text-stone-600"}`} />
                  </button>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div>
                    <p className="text-sm text-emerald-600 font-medium">{product.category}</p>
                    <h3 className="font-playfair text-lg font-bold text-stone-800">{product.name}</h3>
                    <p className="text-sm text-stone-600">{product.description}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-stone-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-stone-600">({product.reviews})</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-stone-800">Key Benefits:</div>
                    <div className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-stone-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-stone-800">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-stone-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={() => addToCart(product)} className="btn-primary flex-1">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" className="px-3 bg-transparent" asChild>
                      <Link href={`/shop/product/${product.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
