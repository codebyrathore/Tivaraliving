import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function RelatedProducts() {
  const relatedProducts = [
    {
      id: 2,
      name: "Ashwagandha Capsules",
      price: 1599,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200&text=Ashwagandha",
    },
    {
      id: 3,
      name: "Herbal Sleep Tea",
      price: 1399,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200&text=Sleep+Tea",
    },
    {
      id: 4,
      name: "Immunity Booster",
      price: 1899,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200&text=Immunity",
    },
    {
      id: 5,
      name: "Digestive Support",
      price: 1499,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200&text=Digestive",
    },
  ]

  return (
    <section className="bg-stone-50 py-16">
      <div className="container-custom">
        <h2 className="font-playfair text-3xl font-bold text-stone-800 text-center mb-12">You Might Also Like</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="card-spiritual hover:scale-105 transition-all duration-300">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-playfair text-lg font-bold text-stone-800 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-3">
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
                <span className="text-sm text-stone-600">({product.rating})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-800">₹{product.price}</span>
                <Button className="btn-primary" size="sm" asChild>
                  <Link href={`/shop/product/${product.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
