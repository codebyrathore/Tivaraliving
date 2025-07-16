import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Home, Brain, ArrowRight } from "lucide-react"

export function ProductHighlights() {
  const categories = [
    {
      icon: Heart,
      title: "Tivara Body",
      subtitle: "Nourish Your Physical Wellness",
      description:
        "Premium Ayurvedic supplements, herbal blends, and body care products crafted to support your unique constitution and promote optimal health from within.",
      image: "/placeholder.svg?height=400&width=600&text=Ayurvedic+Supplements",
      href: "/shop/body",
      color: "emerald",
      features: [
        "Dosha-specific formulations",
        "Organic & sustainably sourced",
        "Third-party lab tested",
        "Traditional recipes with modern science",
      ],
    },
    {
      icon: Home,
      title: "Tivara Space",
      subtitle: "Harmonize Your Environment",
      description:
        "Transform your living and working spaces with Vastu-aligned products, sacred geometry tools, and energy-enhancing elements for optimal flow and balance.",
      image: "/placeholder.svg?height=400&width=600&text=Vastu+Space+Harmony",
      href: "/shop/space",
      color: "amber",
      features: [
        "Vastu Shastra principles",
        "Sacred geometry designs",
        "Natural materials",
        "Energy flow optimization",
      ],
    },
    {
      icon: Brain,
      title: "Tivara Mind",
      subtitle: "Balance Your Mental Wellness",
      description:
        "Meditation tools, aromatherapy blends, and mindfulness accessories designed to calm the mind, enhance focus, and support your spiritual journey.",
      image: "/placeholder.svg?height=400&width=600&text=Meditation+Mindfulness",
      href: "/shop/mind",
      color: "purple",
      features: [
        "Meditation & mindfulness tools",
        "Aromatherapy blends",
        "Sound healing instruments",
        "Stress relief solutions",
      ],
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-stone-800 mb-4">
            Holistic Wellness Collections
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collections designed to support your complete wellness journey - body, space,
            and mind in perfect harmony.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-600`} />
                </div>

                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-3">{category.title}</h3>
                <p className={`text-lg font-medium text-${category.color}-600 mb-4`}>{category.subtitle}</p>
                <p className="text-stone-700 leading-relaxed mb-6 text-lg">{category.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${category.color}-500 rounded-full`}></div>
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={category.href}>
                  <Button className="btn-primary text-lg px-8 py-3">
                    Explore {category.title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Not Sure Where to Start?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Take our personalized wellness quiz to discover which products and practices are perfect for your unique
              constitution and lifestyle.
            </p>
            <Link href="/quiz">
              <Button className="btn-primary text-lg px-8 py-3">
                Take Wellness Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
