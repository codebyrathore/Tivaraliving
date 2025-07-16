import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Users, Gift, Sparkles } from "lucide-react"

export function CollectionsGrid() {
  const collections = [
    {
      id: 1,
      name: "Complete Wellness Journey",
      description:
        "Everything you need for holistic transformation - body, space, and mind products in one comprehensive bundle.",
      price: 149.99,
      originalPrice: 199.99,
      savings: 50,
      rating: 4.9,
      reviews: 234,
      image: "/placeholder.svg?height=400&width=600&text=Complete+Wellness",
      badge: "Most Popular",
      products: ["Turmeric Golden Milk", "Crystal Healing Set", "Meditation Kit", "Space Clearing Bundle"],
      benefits: ["Full body detox", "Energy harmonization", "Mental clarity", "Spiritual alignment"],
      bestFor: "Beginners starting their wellness journey",
    },
    {
      id: 2,
      name: "Sacred Space Transformation",
      description:
        "Transform your living environment with Vastu principles, energy clearing tools, and harmonizing elements.",
      price: 89.99,
      originalPrice: 119.99,
      savings: 30,
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=600&text=Sacred+Space",
      badge: "New",
      products: ["Crystal Grid Set", "Sage Cleansing Kit", "Vastu Compass", "Energy Candles"],
      benefits: ["Positive energy flow", "Stress reduction", "Better relationships", "Increased prosperity"],
      bestFor: "Home and office energy optimization",
    },
    {
      id: 3,
      name: "Inner Peace & Clarity",
      description: "Meditation tools, aromatherapy, and mindfulness products for deep mental and emotional healing.",
      price: 69.99,
      originalPrice: 89.99,
      savings: 20,
      rating: 4.9,
      reviews: 189,
      image: "/placeholder.svg?height=400&width=600&text=Inner+Peace",
      products: ["Meditation Cushion", "Essential Oil Blend", "Mindfulness Journal", "Singing Bowl"],
      benefits: ["Reduced anxiety", "Better sleep", "Enhanced focus", "Emotional balance"],
      bestFor: "Stress relief and mental wellness",
    },
    {
      id: 4,
      name: "Ayurvedic Body Revival",
      description: "Traditional Ayurvedic supplements and oils for physical healing, vitality, and immune support.",
      price: 79.99,
      originalPrice: 99.99,
      savings: 20,
      rating: 4.7,
      reviews: 167,
      image: "/placeholder.svg?height=400&width=600&text=Body+Revival",
      products: ["Ashwagandha Capsules", "Herbal Body Oil", "Digestive Tea", "Immunity Booster"],
      benefits: ["Increased energy", "Better digestion", "Stronger immunity", "Balanced hormones"],
      bestFor: "Physical health and vitality",
    },
    {
      id: 5,
      name: "Seasonal Detox Bundle",
      description: "Quarterly cleansing program with seasonal herbs, teas, and purification practices.",
      price: 59.99,
      originalPrice: 79.99,
      savings: 20,
      rating: 4.6,
      reviews: 98,
      image: "/placeholder.svg?height=400&width=600&text=Seasonal+Detox",
      badge: "Limited Time",
      products: ["Detox Tea Blend", "Cleansing Herbs", "Purification Guide", "Seasonal Recipes"],
      benefits: ["Deep cleansing", "Renewed energy", "Clear skin", "Mental clarity"],
      bestFor: "Seasonal wellness reset",
    },
    {
      id: 6,
      name: "Couples Harmony Set",
      description: "Strengthen relationships and create deeper connection through shared wellness practices.",
      price: 119.99,
      originalPrice: 149.99,
      savings: 30,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=400&width=600&text=Couples+Harmony",
      badge: "Perfect Gift",
      products: ["Partner Meditation Kit", "Relationship Tea", "Harmony Crystals", "Connection Journal"],
      benefits: ["Better communication", "Deeper intimacy", "Shared growth", "Emotional bonding"],
      bestFor: "Couples seeking deeper connection",
    },
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="card-spiritual overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                {collection.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {collection.badge}
                  </span>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{collection.rating}</span>
                    <span className="text-xs text-stone-500">({collection.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-2">{collection.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{collection.description}</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">What's Included:</h4>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    {collection.products.map((product, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-amber-700">
                    {collection.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-stone-800">${collection.price}</span>
                    {collection.originalPrice && (
                      <span className="text-lg text-stone-500 line-through">${collection.originalPrice}</span>
                    )}
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      Save ${collection.savings}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-stone-600 bg-stone-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-stone-500" />
                    <span className="font-medium">Best for:</span>
                    <span>{collection.bestFor}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="btn-primary flex-1" asChild>
                    <Link href={`/collections/${collection.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" className="px-4 bg-transparent">
                    <Gift className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
