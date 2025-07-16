import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Zap, Shield } from "lucide-react"

export function TivaraBodyProducts() {
  const products = [
    {
      id: 1,
      name: "Golden Turmeric Milk Blend",
      description: "Premium organic turmeric with ashwagandha, ginger, and warming spices for daily wellness.",
      price: 1999,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 1247,
      image: "/placeholder.svg?height=300&width=300&text=Turmeric+Blend",
      badge: "Best Seller",
      benefits: ["Anti-inflammatory", "Immune support", "Better sleep", "Joint health"],
      dosage: "1 tsp with warm milk before bedtime",
      ingredients: ["Organic Turmeric", "Ashwagandha", "Ginger", "Black Pepper", "Coconut Milk Powder"],
    },
    {
      id: 2,
      name: "Ashwagandha Premium Capsules",
      description: "High-potency ashwagandha extract for stress relief, energy, and hormonal balance.",
      price: 1599,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 892,
      image: "/placeholder.svg?height=300&width=300&text=Ashwagandha",
      badge: "Most Popular",
      benefits: ["Stress relief", "Energy boost", "Better focus", "Hormonal balance"],
      dosage: "2 capsules daily with meals",
      ingredients: ["Ashwagandha Root Extract", "Black Pepper Extract", "Organic Capsule Shell"],
    },
    {
      id: 3,
      name: "Ayurvedic Digestive Tea",
      description: "Herbal blend of digestive spices to improve gut health and metabolism.",
      price: 899,
      rating: 4.7,
      reviews: 634,
      image: "/placeholder.svg?height=300&width=300&text=Digestive+Tea",
      benefits: ["Better digestion", "Metabolism boost", "Bloating relief", "Gut health"],
      dosage: "1 cup after meals, 2-3 times daily",
      ingredients: ["Fennel", "Cumin", "Coriander", "Ginger", "Mint", "Ajwain"],
    },
    {
      id: 4,
      name: "Herbal Body Massage Oil",
      description: "Therapeutic oil blend for muscle relief, circulation, and skin nourishment.",
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 456,
      image: "/placeholder.svg?height=300&width=300&text=Body+Oil",
      badge: "New",
      benefits: ["Muscle relief", "Better circulation", "Skin nourishment", "Stress relief"],
      dosage: "Massage gently on body before bath",
      ingredients: ["Sesame Oil", "Eucalyptus", "Lavender", "Rosemary", "Vitamin E"],
    },
    {
      id: 5,
      name: "Immunity Booster Powder",
      description: "Powerful blend of Ayurvedic herbs to strengthen natural immunity and vitality.",
      price: 1799,
      rating: 4.8,
      reviews: 723,
      image: "/placeholder.svg?height=300&width=300&text=Immunity+Booster",
      benefits: ["Stronger immunity", "Increased vitality", "Antioxidant rich", "Energy support"],
      dosage: "1 tsp with honey or warm water daily",
      ingredients: ["Amla", "Giloy", "Tulsi", "Ginger", "Turmeric", "Ashwagandha"],
    },
    {
      id: 6,
      name: "Triphala Detox Capsules",
      description: "Traditional three-fruit formula for gentle detoxification and digestive health.",
      price: 1199,
      rating: 4.6,
      reviews: 389,
      image: "/placeholder.svg?height=300&width=300&text=Triphala",
      benefits: ["Gentle detox", "Digestive health", "Regular bowel movement", "Antioxidants"],
      dosage: "2 capsules before bedtime with warm water",
      ingredients: ["Amalaki", "Bibhitaki", "Haritaki", "Organic Capsule Shell"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Our Body Wellness Collection</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Carefully formulated Ayurvedic products to nourish, heal, and strengthen your body naturally.
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
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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

                <div className="bg-emerald-50 rounded-lg p-3">
                  <h4 className="font-semibold text-emerald-800 mb-2 text-sm">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <Zap className="w-3 h-3 text-emerald-500" />
                        <span className="text-xs text-emerald-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-stone-600" />
                    <span className="font-semibold text-stone-800 text-sm">Usage:</span>
                  </div>
                  <p className="text-xs text-stone-600">{product.dosage}</p>
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
