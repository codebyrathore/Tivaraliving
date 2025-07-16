import { Shield, Truck, RotateCcw, Heart } from "lucide-react"

export function CollectionsBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Curated by Experts",
      description: "Each collection is carefully designed by our Ayurvedic practitioners and wellness experts.",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "All collections include complimentary shipping and premium packaging.",
    },
    {
      icon: RotateCcw,
      title: "60-Day Guarantee",
      description: "Try any collection risk-free with our extended satisfaction guarantee.",
    },
    {
      icon: Heart,
      title: "Personalized Support",
      description: "Get dedicated wellness coaching and guidance with every collection purchase.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Why Choose Our Collections?</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            More than just products - complete wellness experiences designed for transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
