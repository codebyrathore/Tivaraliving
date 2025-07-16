import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Zap, Compass } from "lucide-react"

export function TivaraSpaceProducts() {
  const products = [
    {
      id: 7,
      name: "Crystal Healing Grid Set",
      description: "Complete set of 7 chakra crystals with sacred geometry grid for energy amplification.",
      price: 3499,
      originalPrice: 4299,
      rating: 4.9,
      reviews: 567,
      image: "/placeholder.svg?height=300&width=300&text=Crystal+Grid",
      badge: "Best Seller",
      benefits: ["Energy amplification", "Chakra balancing", "Meditation support", "Space cleansing"],
      usage: "Place crystals on grid pattern in meditation or living space",
      includes: ["7 Chakra Crystals", "Sacred Geometry Grid", "Cleansing Guide", "Placement Manual"],
    },
    {
      id: 8,
      name: "Vastu Compass & Direction Kit",
      description: "Professional Vastu compass with detailed guidelines for optimal space arrangement.",
      price: 2299,
      rating: 4.8,
      reviews: 423,
      image: "/placeholder.svg?height=300&width=300&text=Vastu+Compass",
      badge: "Professional",
      benefits: ["Accurate directions", "Vastu compliance", "Prosperity enhancement", "Energy optimization"],
      usage: "Use to determine optimal placement of furniture and objects",
      includes: ["Precision Compass", "Vastu Guidelines", "Room Layout Guide", "Consultation Support"],
    },
    {
      id: 9,
      name: "Sage Cleansing Bundle Kit",
      description: "Premium white sage bundles with abalone shell and feather for space purification.",
      price: 1499,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 789,
      image: "/placeholder.svg?height=300&width=300&text=Sage+Bundle",
      benefits: ["Negative energy removal", "Space purification", "Spiritual cleansing", "Fresh energy"],
      usage: "Light sage and let smoke cleanse your space while setting intentions",
      includes: ["3 White Sage Bundles", "Abalone Shell", "Feather", "Cleansing Guide"],
    },
    {
      id: 10,
      name: "Feng Shui Energy Candles",
      description: "Hand-poured candles infused with essential oils for different areas of your home.",
      price: 1799,
      rating: 4.6,
      reviews: 345,
      image: "/placeholder.svg?height=300&width=300&text=Energy+Candles",
      badge: "New",
      benefits: ["Area-specific energy", "Aromatherapy benefits", "Mood enhancement", "Intention setting"],
      usage: "Light appropriate candle in corresponding area of your home",
      includes: ["5 Different Candles", "Placement Guide", "Intention Cards", "Safety Instructions"],
    },
    {
      id: 11,
      name: "Himalayan Salt Lamp Set",
      description: "Authentic Himalayan salt lamps in various sizes for air purification and ambiance.",
      price: 2799,
      originalPrice: 3499,
      rating: 4.8,
      reviews: 612,
      image: "/placeholder.svg?height=300&width=300&text=Salt+Lamps",
      benefits: ["Air purification", "Negative ion generation", "Stress reduction", "Better sleep"],
      usage: "Place in bedroom or living area, keep lit for 4-6 hours daily",
      includes: ["3 Different Sized Lamps", "Wooden Bases", "LED Bulbs", "Care Instructions"],
    },
    {
      id: 12,
      name: "Prosperity Plant Collection",
      description: "Vastu-recommended plants with decorative pots for wealth and positive energy.",
      price: 2199,
      rating: 4.5,
      reviews: 234,
      image: "/placeholder.svg?height=300&width=300&text=Prosperity+Plants",
      benefits: ["Wealth attraction", "Air purification", "Positive energy", "Natural beauty"],
      usage: "Place in wealth corner (southeast) of your home or office",
      includes: ["3 Prosperity Plants", "Decorative Pots", "Plant Care Guide", "Vastu Placement Tips"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Transform Your Space</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Create harmonious environments that support your well-being, prosperity, and spiritual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-spiritual hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-stone-600" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{product.description}</p>
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
                  <span className="text-sm text-stone-600">({product.reviews} reviews)</span>
                </div>

                <div className="bg-amber-50 rounded-lg p-3">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <Zap className="w-3 h-3 text-amber-500" />
                        <span className="text-xs text-amber-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Compass className="w-4 h-4 text-stone-600" />
                    <span className="font-semibold text-stone-800 text-sm">Usage:</span>
                  </div>
                  <p className="text-xs text-stone-600">{product.usage}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-stone-800">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-stone-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button className="btn-primary flex-1" asChild>
                    <Link href={`/shop/product/${product.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 bg-transparent">
                    <ShoppingCart className="w-4 h-4" />
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
