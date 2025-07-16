import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FeaturedCategories() {
  const categories = [
    {
      title: "Tivara Body",
      description: "Ayurvedic supplements, oils, and wellness products to nourish your physical being.",
      image: "/placeholder.svg?height=400&width=600",
      color: "sage",
      href: "/shop/body",
    },
    {
      title: "Tivara Space",
      description: "Energy cleansing tools, crystals, and Vastu products to harmonize your environment.",
      image: "/placeholder.svg?height=400&width=600",
      color: "turmeric",
      href: "/shop/space",
    },
    {
      title: "Tivara Mind",
      description: "Meditation tools, aromatherapy, and mindfulness products for mental clarity.",
      image: "/placeholder.svg?height=400&width=600",
      color: "lavender",
      href: "/shop/mind",
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-6">Featured Collections</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our carefully curated products designed to support your holistic wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={category.title} className="group">
              <div className="card-spiritual overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-${category.color}-900/50 to-transparent`}
                  ></div>
                </div>

                <div className="p-2">
                  <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">{category.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">{category.description}</p>

                  <Button
                    variant="ghost"
                    className={`text-${category.color}-600 hover:text-${category.color}-700 p-0 h-auto font-medium group`}
                    asChild
                  >
                    <Link href={category.href}>
                      Explore Collection
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
