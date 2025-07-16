import type React from "react"
import { Leaf, Heart, Sparkles, Globe } from "lucide-react"

interface ValueItem {
  icon: React.ElementType
  title: string
  text: string
}

const values: ValueItem[] = [
  {
    icon: Leaf,
    title: "Natural Integrity",
    text: "We use only ethically-sourced, plant-based ingredients—free from synthetic additives or fillers.",
  },
  {
    icon: Sparkles,
    title: "Holistic Harmony",
    text: "Every formula considers body, mind, and space for complete, long-term transformation.",
  },
  {
    icon: Heart,
    title: "Compassion First",
    text: "People, animals, and planet are at the heart of every decision—always cruelty-free and eco-friendly.",
  },
  {
    icon: Globe,
    title: "Wisdom Without Borders",
    text: "Bridging 5,000-year Ayurvedic science with modern research to serve wellness seekers worldwide.",
  },
]

export function AboutValues() {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Our Core Values</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Principles that guide every product we craft and every experience we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="card-spiritual text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <value.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
