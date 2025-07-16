import { Home, Zap, Compass, Sparkles } from "lucide-react"

export function TivaraSpaceBenefits() {
  const benefits = [
    {
      icon: Home,
      title: "Harmonious Living",
      description: "Create spaces that support peace, productivity, and positive relationships.",
    },
    {
      icon: Zap,
      title: "Energy Flow",
      description: "Optimize the flow of positive energy throughout your home and workspace.",
    },
    {
      icon: Compass,
      title: "Vastu Compliance",
      description: "Align your space with ancient principles for maximum benefit and prosperity.",
    },
    {
      icon: Sparkles,
      title: "Spiritual Growth",
      description: "Enhance your spiritual practice with properly energized sacred spaces.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Why Transform Your Space?</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Your environment directly impacts your well-being, relationships, and success. Create spaces that support
            your highest potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
