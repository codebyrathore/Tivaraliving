import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Brain, Sparkles } from "lucide-react"

export function TivaraMindProducts() {
  const products = [
    {
      id: 13,
      name: "Premium Meditation Cushion",
      description: "Ergonomically designed meditation cushion filled with organic buckwheat hulls for comfort.",
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 1234,
      image: "/placeholder.svg?height=300&width=300&text=Meditation+Cushion",
      badge: "Best Seller",
      benefits: ["Proper posture", "Extended comfort", "Spinal alignment", "Deep meditation"],
      usage: "Use during meditation practice for optimal comfort and posture",
      features: ["Organic buckwheat hulls", "Removable cover", "Perfect height", "Durable construction"],
    },
    {
      id: 14,
      name: "Essential Oil Meditation Blend",
      description: "Calming blend of lavender, frankincense, and sandalwood for deep relaxation.",
      price: 1899,
      rating: 4.8,
      reviews: 876,
      image: "/placeholder.svg?height=300&width=300&text=Essential+Oils",
      badge: "Aromatherapy",
      benefits: ["Deep relaxation", "Stress relief", "Better sleep", "Mood enhancement"],
      usage: "Diffuse during meditation or apply to pulse points (diluted)",
      features: ["100% pure oils", "Therapeutic grade", "Calming blend", "Long-lasting"],
    },
    {
      id: 15,
      name: "Mindfulness Journal & Planner",
      description: "Beautifully designed journal with guided prompts for mindfulness and self-reflection.",
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 567,
      image: "/placeholder.svg?height=300&width=300&text=Mindfulness+Journal",
      benefits: ["Self-awareness", "Emotional clarity", "Goal tracking", "Gratitude practice"],
      usage: "Write daily reflections, set intentions, and track your mindfulness journey",
      features: ["Guided prompts", "Premium paper", "Durable binding", "Inspirational quotes"],
    },
    {
      id: 16,
      name: "Tibetan Singing Bowl Set",
      description: "Handcrafted singing bowl with wooden striker and cushion for sound meditation.",
      price: 3299,
      rating: 4.9,
      reviews: 445,
      image: "/placeholder.svg?height=300&width=300&text=Singing+Bowl",
      badge: "Handcrafted",
      benefits: ["Sound healing", "Deep meditation", "Chakra balancing", "Stress relief"],
      usage: "Strike gently and let the sound waves wash over you during meditation",
      features: ["Hand-hammered brass", "Perfect pitch", "Wooden striker", "Silk cushion"],
    },
    {
      id: 17,
      name: "Aromatherapy Diffuser & Oils",
      description: "Ultrasonic diffuser with starter set of 6 essential oils for different moods.",
      price: 2799,
      originalPrice: 3499,
      rating: 4.6,
      reviews: 789,
      image: "/placeholder.svg?height=300&width=300&text=Aromatherapy+Diffuser",
      badge: "Complete Set",
      benefits: ["Mood enhancement", "Air purification", "Stress relief", "Better sleep"],
      usage: "Add water and 3-5 drops of oil, run for 1-3 hours",
      features: ["Ultrasonic technology", "LED lights", "Timer function", "6 essential oils"],
    },
    {
      id: 18,
      name: "Meditation Mala Beads",
      description: "108 natural gemstone beads with guru bead for mantra meditation and counting.",
      price: 1799,
      rating: 4.8,
      reviews: 623,
      image: "/placeholder.svg?height=300&width=300&text=Mala+Beads",
      benefits: ["Mantra practice", "Focus enhancement", "Spiritual connection", "Mindful counting"],
      usage: "Hold between thumb and middle finger, move one bead per mantra repetition",
      features: ["Natural gemstones", "Hand-knotted", "Guru bead", "Silk tassel"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Cultivate Your Mind</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Tools and practices to develop mental clarity, emotional balance, and deep inner peace.
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
                  <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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

                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 mb-2 text-sm">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-purple-500" />
                        <span className="text-xs text-purple-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="w-4 h-4 text-stone-600" />
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
