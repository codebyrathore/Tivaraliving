import { Star, Quote } from "lucide-react"

export function TivaraMindTestimonials() {
  const testimonials = [
    {
      name: "Kavya Reddy",
      location: "Hyderabad, India",
      product: "Premium Meditation Cushion",
      rating: 5,
      text: "This cushion has transformed my meditation practice. I can sit comfortably for longer periods and my focus has improved dramatically.",
      image: "/placeholder.svg?height=80&width=80&text=KR",
      transformation: "Longer meditation sessions, better focus, improved posture",
    },
    {
      name: "Arjun Mehta",
      location: "Mumbai, India",
      product: "Essential Oil Meditation Blend",
      rating: 5,
      text: "The aromatherapy blend creates such a peaceful atmosphere. My stress levels have reduced significantly and I sleep much better now.",
      image: "/placeholder.svg?height=80&width=80&text=AM",
      transformation: "Reduced stress, better sleep, peaceful mind",
    },
    {
      name: "Deepika Sharma",
      location: "Bangalore, India",
      product: "Mindfulness Journal & Planner",
      rating: 5,
      text: "This journal has helped me develop self-awareness and emotional clarity. The guided prompts are incredibly insightful and transformative.",
      image: "/placeholder.svg?height=80&width=80&text=DS",
      transformation: "Increased self-awareness, emotional clarity, personal growth",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Mind Transformation Stories</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover how our customers have achieved mental clarity, emotional balance, and inner peace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-spiritual hover:scale-105 transition-all duration-300">
              <Quote className="w-8 h-8 text-purple-200 mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-purple-800 mb-2">Transformation:</h4>
                <p className="text-purple-700 text-sm">{testimonial.transformation}</p>
              </div>

              <div className="flex items-center border-t border-stone-200 pt-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-100"
                />
                <div>
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                  <p className="text-sm text-purple-600 font-medium">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
