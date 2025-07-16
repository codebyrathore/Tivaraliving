import { Brain, Heart, Sparkles, Zap } from "lucide-react"

export function TivaraMindBenefits() {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Develop clear thinking, improved focus, and enhanced cognitive function.",
    },
    {
      icon: Heart,
      title: "Emotional Balance",
      description: "Cultivate emotional stability, resilience, and inner peace in daily life.",
    },
    {
      icon: Sparkles,
      title: "Stress Relief",
      description: "Release tension, anxiety, and mental fatigue through mindful practices.",
    },
    {
      icon: Zap,
      title: "Spiritual Growth",
      description: "Deepen your connection to inner wisdom and spiritual understanding.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Transform Your Mind</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Develop mental strength, emotional resilience, and spiritual awareness through proven mindfulness practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-purple-600" />
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
