"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Shield,
  Truck,
  RotateCcw,
  Award,
  Leaf,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart/cart-provider"
import { useWishlist } from "@/components/wishlist/wishlist-provider"
import { useAuth } from "@/components/auth/auth-provider"

interface ProductDetailsProps {
  productId: string
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState("benefits")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const { dispatch: cartDispatch } = useCart()
  const { dispatch: wishlistDispatch, isInWishlist } = useWishlist()
  const { isAuthenticated } = useAuth()
  const isWishlisted = isInWishlist(productId)

  // Mock product data - in real app, fetch based on productId
  const product = {
    id: productId,
    name: "Turmeric Golden Milk Blend",
    category: "Tivara Body",
    price: 1999,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 127,
    inStock: true,
    stockCount: 45,
    images: [
      "/placeholder.svg?height=500&width=500&text=Turmeric+Golden+Milk+Main",
      "/placeholder.svg?height=500&width=500&text=Ingredients+Close+Up",
      "/placeholder.svg?height=500&width=500&text=Preparation+Process",
      "/placeholder.svg?height=500&width=500&text=Packaging+Details",
    ],
    shortDescription: "Premium organic turmeric blend with ashwagandha and warming spices for daily wellness",
    description:
      "Our premium Turmeric Golden Milk Blend combines organic turmeric with ashwagandha, ginger, and warming spices to create a delicious and nourishing daily wellness ritual. This ancient Ayurvedic formula has been carefully crafted to support your body's natural healing processes while providing a comforting, golden elixir that soothes both body and mind.",

    benefits: [
      {
        title: "Anti-Inflammatory Support",
        description:
          "Curcumin in turmeric helps support the body's natural inflammatory response, promoting joint health and overall comfort.",
      },
      {
        title: "Immune System Boost",
        description:
          "Rich in antioxidants and immune-supporting compounds that help strengthen your body's natural defenses.",
      },
      {
        title: "Stress Relief & Relaxation",
        description: "Ashwagandha helps the body adapt to stress while promoting restful sleep and mental clarity.",
      },
      {
        title: "Digestive Health",
        description: "Ginger and warming spices support healthy digestion and help soothe the digestive system.",
      },
      {
        title: "Enhanced Absorption",
        description: "Black pepper extract (piperine) increases the bioavailability of curcumin by up to 2000%.",
      },
    ],

    ingredients: [
      {
        name: "Organic Turmeric Root Powder",
        percentage: "40%",
        benefits:
          "Contains curcumin, a powerful anti-inflammatory compound. Supports joint health and immune function.",
        source: "Sourced from certified organic farms in Kerala, India",
      },
      {
        name: "Ashwagandha Extract (KSM-66®)",
        percentage: "20%",
        benefits:
          "Clinically proven adaptogen that helps manage stress, improve sleep quality, and enhance mental clarity.",
        source: "Premium root extract with highest concentration of bioactive compounds",
      },
      {
        name: "Organic Ginger Root Powder",
        percentage: "15%",
        benefits: "Supports digestive health, reduces nausea, and provides warming properties.",
        source: "Fresh-dried organic ginger from sustainable farms",
      },
      {
        name: "Ceylon Cinnamon",
        percentage: "10%",
        benefits: "Helps regulate blood sugar levels and adds natural sweetness with warming properties.",
        source: "True Ceylon cinnamon from Sri Lanka, not cassia",
      },
      {
        name: "Black Pepper Extract (Piperine)",
        percentage: "5%",
        benefits: "Enhances absorption of curcumin and other nutrients by up to 2000%.",
        source: "Standardized extract with 95% piperine content",
      },
      {
        name: "Coconut Milk Powder",
        percentage: "10%",
        benefits: "Provides healthy fats for better nutrient absorption and creamy texture.",
        source: "Organic coconut milk powder from sustainable sources",
      },
    ],

    usage: {
      basic: "Mix 1 teaspoon (5g) with 1 cup of warm milk or plant-based alternative. Stir well and enjoy.",
      ritual: [
        "Heat your preferred milk (dairy or plant-based) to a gentle simmer",
        "Add 1 teaspoon of Golden Milk Blend and whisk thoroughly",
        "Add a touch of honey or maple syrup if desired",
        "Sip mindfully, preferably 30 minutes before bedtime",
        "Practice gratitude for the nourishment you're providing your body",
      ],
      timing: "Best consumed in the evening, 30-60 minutes before bedtime for optimal relaxation benefits.",
      dosage: "1 teaspoon daily. Can be increased to 2 teaspoons for enhanced benefits after 2 weeks of regular use.",
    },

    ayurvedicPrinciple: {
      dosha: "This blend primarily balances Vata and Kapha doshas while gently supporting Pitta.",
      energetics: "Warming and grounding, with sweet and pungent tastes that kindle digestive fire (Agni).",
      ojas: "Supports Ojas (vital essence) building, enhancing immunity, vitality, and overall life force.",
      philosophy:
        "Based on the ancient Ayurvedic principle of 'Haldi Doodh' - a time-honored remedy passed down through generations for its healing and nourishing properties.",
    },

    scientificBacking: [
      {
        study: "Curcumin and Inflammation",
        finding:
          "A 2017 study published in Foods journal found that curcumin significantly reduces inflammatory markers in the body.",
        link: "#",
      },
      {
        study: "Ashwagandha and Stress",
        finding:
          "Clinical trials show KSM-66® Ashwagandha reduces cortisol levels by up to 27.9% in chronically stressed adults.",
        link: "#",
      },
      {
        study: "Piperine and Bioavailability",
        finding:
          "Research demonstrates that piperine increases curcumin absorption by 2000%, making it significantly more bioavailable.",
        link: "#",
      },
    ],

    faqs: [
      {
        question: "How long does it take to see results?",
        answer:
          "Many customers report feeling more relaxed and sleeping better within the first week. For anti-inflammatory benefits, consistent use for 2-4 weeks is recommended. Individual results may vary based on constitution and lifestyle factors.",
      },
      {
        question: "Can I take this if I'm pregnant or nursing?",
        answer:
          "While turmeric is generally safe in culinary amounts, we recommend consulting with your healthcare provider before using any supplements during pregnancy or nursing, especially those containing ashwagandha.",
      },
      {
        question: "Is this suitable for vegans?",
        answer:
          "Yes! Our Golden Milk Blend is 100% plant-based. Simply mix with your favorite plant-based milk like almond, oat, or coconut milk for a delicious vegan golden milk.",
      },
      {
        question: "How should I store this product?",
        answer:
          "Store in a cool, dry place away from direct sunlight. Keep the container tightly sealed to maintain freshness. Properly stored, the blend will maintain its potency for 2 years from the manufacture date.",
      },
      {
        question: "Can children consume this blend?",
        answer:
          "For children under 12, we recommend consulting with a pediatrician first. The ashwagandha content makes it more suitable for adults. We have a separate children's turmeric blend without adaptogens.",
      },
    ],

    reviews: [
      {
        id: 1,
        name: "Priya Mehta",
        rating: 5,
        date: "2024-01-15",
        title: "Life-changing for my sleep!",
        content:
          "I've been struggling with insomnia for years. This golden milk blend has completely transformed my bedtime routine. I sleep deeper and wake up more refreshed. The taste is incredible too - not too sweet, perfectly spiced.",
        verified: true,
        helpful: 24,
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        rating: 5,
        date: "2024-01-10",
        title: "Amazing quality and results",
        content:
          "As someone with joint pain from years of running, I was skeptical about natural remedies. But after 3 weeks of daily use, I notice significantly less morning stiffness. The quality is exceptional - you can taste the difference.",
        verified: true,
        helpful: 18,
      },
      {
        id: 3,
        name: "Sarah Johnson",
        rating: 4,
        date: "2024-01-08",
        title: "Great taste, noticeable benefits",
        content:
          "I love the ritual of making this every evening. It's become my favorite way to wind down. The anti-inflammatory benefits are noticeable, and I feel more balanced overall. Only wish the container was larger!",
        verified: true,
        helpful: 12,
      },
    ],

    relatedProducts: ["ashwagandha-stress-relief", "digestive-fire-tea", "immunity-boost-blend"],

    certifications: [
      { name: "USDA Organic", icon: Leaf },
      { name: "Third-Party Tested", icon: Shield },
      { name: "GMP Certified", icon: Award },
      { name: "Ayush Approved", icon: Star },
    ],
  }

  const addToCart = () => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        category: product.category,
        inStock: product.inStock,
        maxQuantity: product.stockCount,
      },
      quantity: quantity,
    })
  }

  const toggleWishlist = () => {
    if (!isAuthenticated) {
      // Redirect to sign in
      window.location.href = "/signin?redirect=" + window.location.pathname
      return
    }

    if (isWishlisted) {
      wishlistDispatch({ type: "REMOVE_ITEM", payload: product.id })
    } else {
      wishlistDispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.images[0],
          category: product.category,
          inStock: product.inStock,
          rating: product.rating,
          reviews: product.reviews.length,
        },
      })
    }
  }

  const buyNow = () => {
    addToCart()
    window.location.href = "/checkout"
  }

  const tabs = [
    { id: "benefits", label: "Benefits" },
    { id: "ingredients", label: "Ingredients" },
    { id: "usage", label: "Usage & Rituals" },
    { id: "ayurveda", label: "Ayurvedic Wisdom" },
    { id: "science", label: "Scientific Research" },
    { id: "reviews", label: `Reviews (${product.reviews.length})` },
    { id: "faq", label: "FAQ" },
  ]

  return (
    <div className="container-custom py-12">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 relative">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.originalPrice && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save ₹{product.originalPrice - product.price}
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? "border-emerald-500" : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-emerald-600 font-medium mb-2">{product.category}</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-4">{product.name}</h1>
            <p className="text-lg text-stone-600 leading-relaxed mb-4">{product.shortDescription}</p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-stone-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-stone-600">
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-stone-800">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-stone-500 line-through">₹{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-medium">In Stock</span>
              <span className="text-stone-500">({product.stockCount} available)</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-4 gap-4 py-4 border-y border-stone-200">
            {product.certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <cert.icon className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-stone-700">{cert.name}</p>
              </div>
            ))}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-stone-800">Quantity:</span>
              <div className="flex items-center border border-stone-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-stone-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-stone-100 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button onClick={addToCart} disabled={!product.inStock} className="btn-primary flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ₹{product.price * quantity}
              </Button>
              <Button
                onClick={toggleWishlist}
                variant="outline"
                size="lg"
                className={`px-4 ${isWishlisted ? "bg-red-50 border-red-200 text-red-600" : "bg-transparent"}`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
            </div>

            <Button onClick={buyNow} disabled={!product.inStock} variant="outline" className="w-full bg-transparent">
              Buy Now - Express Checkout
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-stone-200">
            <div className="text-center">
              <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-stone-800">Quality Assured</p>
              <p className="text-xs text-stone-600">Lab tested & certified</p>
            </div>
            <div className="text-center">
              <Truck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-stone-800">Free Shipping</p>
              <p className="text-xs text-stone-600">Orders over ₹1500</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-stone-800">30-Day Return</p>
              <p className="text-xs text-stone-600">Money back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="border-b border-stone-200 mb-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-stone-500 hover:text-stone-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "benefits" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Key Benefits</h3>
              <div className="space-y-6">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-2">{benefit.title}</h4>
                      <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Why Choose Our Blend?</h3>
              <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-6">
                <p className="text-stone-700 leading-relaxed mb-4">
                  Our Turmeric Golden Milk Blend isn't just another supplement - it's a carefully crafted wellness
                  ritual that honors both ancient wisdom and modern science.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-stone-700">
                      Premium organic ingredients sourced directly from traditional farms
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-stone-700">Clinically proven KSM-66® Ashwagandha for maximum potency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-stone-700">Enhanced with piperine for 2000% better absorption</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-stone-700">Third-party tested for purity and potency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div>
            <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Premium Ingredients</h3>
            <div className="grid gap-6">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-stone-800 text-lg">{ingredient.name}</h4>
                      <span className="text-emerald-600 font-medium">{ingredient.percentage} of blend</span>
                    </div>
                  </div>
                  <p className="text-stone-700 mb-3">{ingredient.benefits}</p>
                  <p className="text-stone-500 text-sm italic">{ingredient.source}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "usage" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">How to Use</h3>
              <div className="bg-stone-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-stone-800 mb-3">Basic Preparation</h4>
                <p className="text-stone-700 leading-relaxed">{product.usage.basic}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-stone-800">Optimal Timing</h4>
                <p className="text-stone-600">{product.usage.timing}</p>

                <h4 className="font-semibold text-stone-800">Recommended Dosage</h4>
                <p className="text-stone-600">{product.usage.dosage}</p>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Sacred Evening Ritual</h3>
              <div className="space-y-4">
                {product.usage.ritual.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "ayurveda" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Ayurvedic Principles</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Dosha Balance</h4>
                  <p className="text-stone-700 leading-relaxed">{product.ayurvedicPrinciple.dosha}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Energetics</h4>
                  <p className="text-stone-700 leading-relaxed">{product.ayurvedicPrinciple.energetics}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Ojas Building</h4>
                  <p className="text-stone-700 leading-relaxed">{product.ayurvedicPrinciple.ojas}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Ancient Wisdom</h3>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                <p className="text-stone-700 leading-relaxed">{product.ayurvedicPrinciple.philosophy}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "science" && (
          <div>
            <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Scientific Research</h3>
            <div className="grid gap-6">
              {product.scientificBacking.map((study, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-xl p-6">
                  <h4 className="font-semibold text-stone-800 mb-3">{study.study}</h4>
                  <p className="text-stone-700 leading-relaxed mb-3">{study.finding}</p>
                  <Link href={study.link} className="text-emerald-600 hover:underline text-sm">
                    Read Full Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-playfair text-2xl font-bold text-stone-800">Customer Reviews</h3>
              <Button variant="outline">Write a Review</Button>
            </div>

            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-stone-800">{review.name}</h4>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-stone-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-stone-500 text-sm">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <h5 className="font-medium text-stone-800 mb-2">{review.title}</h5>
                  <p className="text-stone-700 leading-relaxed mb-4">{review.content}</p>

                  <div className="flex items-center space-x-4 text-sm text-stone-500">
                    <button className="hover:text-stone-700">
                      <Users className="w-4 h-4 inline mr-1" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {product.faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-xl">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h4 className="font-semibold text-stone-800">{faq.question}</h4>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-stone-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
