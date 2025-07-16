import { Users, Heart, MessageCircle, Calendar } from "lucide-react"

export function CommunityHeader() {
  const stats = [
    { icon: Users, number: "12,000+", label: "Active Members" },
    { icon: MessageCircle, number: "500+", label: "Daily Discussions" },
    { icon: Calendar, number: "50+", label: "Monthly Events" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" },
  ]

  return (
    <section className="bg-gradient-to-br from-emerald-600 to-amber-600 text-white section-padding">
      <div className="container-custom text-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">Tivara Healing Circle</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Join our vibrant community of wellness seekers, healers, and conscious living enthusiasts. Share your journey,
          learn from others, and grow together.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="font-playfair text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
