import { Heart, Zap, Shield, Leaf } from "lucide-react"

export function TivaraBodyBenefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Holistic Healing",
      description: "Address root causes, not just symptoms, for lasting wellness transformation.",
    },
    {
      icon: Zap,
      title: "Natural Energy",
      description: "Boost vitality and stamina without artificial stimulants or side effects.",
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Strengthen your body's natural defense system with powerful adaptogens.",
    },
    {
      icon: Leaf,
      title: "Pure Ingredients",
      description: "Ethically sourced, organic herbs processed using traditional methods.",
    },
  ]

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "25+", label: "Ayurvedic Herbs" },
    { number: "100%", label: "Natural Products" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Why Choose Tivara Body?</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Experience the transformative power of authentic Ayurvedic wellness backed by modern quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-playfair text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-stone-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
