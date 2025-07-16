import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Turmeric Golden Milk Blend",
      category: "Tivara Body",
      price: 1999,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=300&width=300&text=Turmeric+Blend",
      badge: "Best Seller",
      description: "Organic turmeric blend with ashwagandha and ginger for daily wellness.",
    },
    {
      id: 2,
      name: "Crystal Healing Set",
      category: "Tivara Space",
      price: 3699,
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300&text=Crystal+Set",
      badge: "New",
      description: "Complete crystal set for energy cleansing and space harmonization.",
    },
    {
      id: 3,
      name: "Meditation Cushion",
      category: "Tivara Mind",
      price: 2699,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300&text=Meditation+Cushion",
      description: "Ergonomic meditation cushion filled with organic buckwheat hulls.",
    },
    {
      id: 4,
      name: "Ashwagandha Capsules",
      category: "Tivara Body",
      price: 1599,
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300&text=Ashwagandha",
      description: "Premium ashwagandha extract for stress relief and energy support.",
    },
    {
      id: 5,
      name: "Sage Cleansing Kit",
      category: "Tivara Space",
      price: 1499,
      rating: 4.6,
      reviews: 74,
      image: "/placeholder.svg?height=300&width=300&text=Sage+Kit",
      description: "White sage bundle with abalone shell and feather for space clearing.",
    },
    {
      id: 6,
      name: "Essential Oil Blend",
      category: "Tivara Mind",
      price: 2299,
      rating: 4.8,
      reviews: 112,
      image: "/placeholder.svg?height=300&width=300&text=Essential+Oils",
      description: "Calming blend of lavender, bergamot, and frankincense oils.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-stone-600">Showing {products.length} of 86 products</p>
        <select className="border border-stone-300 rounded-lg px-3 py-2 text-stone-700">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Customer Rating</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card-spiritual group hover:scale-105 transition-all duration-300">
            <div className="relative mb-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-stone-600" />
              </button>
            </div>

            <div className="space-y-3">
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-stone-800">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
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

      <div className="flex justify-center mt-12">
        <Button className="btn-secondary">Load More Products</Button>
      </div>
    </div>
  )
}
