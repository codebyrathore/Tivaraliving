import { Users, Star, Heart, Award } from "lucide-react"

export function TestimonialsStats() {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
      description: "Worldwide community",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "From verified reviews",
    },
    {
      icon: Heart,
      number: "95%",
      label: "Satisfaction Rate",
      description: "Customer happiness",
    },
    {
      icon: Award,
      number: "500+",
      label: "Success Stories",
      description: "Life transformations",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="font-playfair text-3xl font-bold text-stone-800 mb-2">{stat.number}</div>
              <div className="font-semibold text-stone-800 mb-1">{stat.label}</div>
              <div className="text-sm text-stone-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
