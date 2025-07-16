"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  doshaMatch: string[]
  benefits: string[]
  isBundle?: boolean
  bundleDiscount?: number
}

interface PersonalizedRecommendationsProps {
  quizResults: {
    primaryDosha: string
    secondaryDosha?: string
    constitution: string
    recommendations: string[]
  }
}

export function PersonalizedRecommendations({ quizResults }: PersonalizedRecommendationsProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [wishlistItems, setWishlistItems] = useState<string[]>([])

  // Mock personalized products based on quiz results
  const personalizedProducts: Product[] = [
    {
      id: "vata-starter-kit",
      name: "Vata Balancing Starter Kit",
      price: 89,
      originalPrice: 120,
      image: "/placeholder.svg?height=300&width=300&text=Vata+Kit",
      rating: 4.8,
      reviews: 124,
      category: "Bundle",
      doshaMatch: ["Vata"],
      benefits: ["Grounding", "Nourishing", "Calming"],
      isBundle: true,
      bundleDiscount: 25,
    },
    {
      id: "ashwagandha-premium",
      name: "Premium Ashwagandha Capsules",
      price: 34,
      image: "/placeholder.svg?height=300&width=300&text=Ashwagandha",
      rating: 4.9,
      reviews: 89,
      category: "Herbs",
      doshaMatch: ["Vata", "Pitta"],
      benefits: ["Stress Relief", "Energy", "Sleep"],
    },
    {
      id: "sesame-oil-organic",
      name: "Organic Sesame Oil for Abhyanga",
      price: 28,
      image: "/placeholder.svg?height=300&width=300&text=Sesame+Oil",
      rating: 4.7,
      reviews: 156,
      category: "Oils",
      doshaMatch: ["Vata"],
      benefits: ["Moisturizing", "Warming", "Grounding"],
    },
    {
      id: "meditation-cushion",
      name: "Organic Meditation Cushion",
      price: 45,
      image: "/placeholder.svg?height=300&width=300&text=Meditation+Cushion",
      rating: 4.6,
      reviews: 78,
      category: "Accessories",
      doshaMatch: ["Vata", "Pitta", "Kapha"],
      benefits: ["Comfort", "Posture", "Focus"],
    },
  ]

  const addToCart = (productId: string) => {
    setSelectedProducts((prev) => [...prev, productId])
    // Here you would integrate with your cart system
  }

  const toggleWishlist = (productId: string) => {
    setWishlistItems((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const isPerfectMatch = (product: Product) => {
    return product.doshaMatch.includes(quizResults.primaryDosha)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-6 w-6 text-sage-600" />
          <h2 className="text-3xl font-bold text-stone-900">Your Personalized Recommendations</h2>
        </div>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Based on your {quizResults.primaryDosha} constitution, we've curated these products specifically for you
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-sage-100 text-sage-800">
            Primary: {quizResults.primaryDosha}
          </Badge>
          {quizResults.secondaryDosha && <Badge variant="outline">Secondary: {quizResults.secondaryDosha}</Badge>}
        </div>
      </div>

      {/* Recommended Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {personalizedProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {isPerfectMatch(product) && (
                  <Badge className="absolute top-2 left-2 bg-sage-600 hover:bg-sage-700">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Perfect Match
                  </Badge>
                )}
                {product.isBundle && (
                  <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">
                    Save {product.bundleDiscount}%
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      wishlistItems.includes(product.id) ? "fill-red-500 text-red-500" : "text-white"
                    }`}
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-stone-900 line-clamp-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-stone-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {product.benefits.slice(0, 2).map((benefit) => (
                    <Badge key={benefit} variant="outline" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-stone-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-stone-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    onClick={() => addToCart(product.id)}
                    disabled={selectedProducts.includes(product.id)}
                    className="bg-sage-600 hover:bg-sage-700"
                  >
                    {selectedProducts.includes(product.id) ? (
                      "Added"
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Personalized Tips */}
      <Card className="bg-sage-50 border-sage-200">
        <CardHeader>
          <CardTitle className="text-sage-800">Your Wellness Tips</CardTitle>
          <CardDescription>
            Personalized recommendations based on your {quizResults.primaryDosha} constitution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {quizResults.recommendations.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-sage-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-stone-700">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
