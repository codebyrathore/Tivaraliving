import { Target, Eye, Heart } from "lucide-react"

/**
 * Explains Tivara’s mission, vision, and impact.
 * Renders three info cards inside a gradient section.
 */
export function AboutMission() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      copy:
        "Bridge 5 000-year-old Ayurvedic wisdom with modern science, delivering transformative " +
        "products that heal the body, harmonise the space, and elevate the mind.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      copy:
        "Create a global community living in balance with nature—where holistic wellness is " +
        "the everyday standard, not a luxury.",
    },
    {
      icon: Heart,
      title: "Positive Impact",
      copy:
        "Every purchase supports ethical farming, cruelty-free research, and sustainability " +
        "initiatives that nurture people and planet.",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-emerald-50 to-amber-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Mission &amp; Vision</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ancient wisdom, modern research, one shared purpose—your complete well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="card-spiritual text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">{title}</h3>
              <p className="text-stone-600 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
