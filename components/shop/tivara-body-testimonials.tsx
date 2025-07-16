import { Star, Quote } from "lucide-react"

export function TivaraBodyTestimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      product: "Golden Turmeric Milk Blend",
      rating: 5,
      text: "This turmeric blend has completely transformed my sleep and energy levels. I feel more balanced and my joint pain has significantly reduced.",
      image: "/placeholder.svg?height=80&width=80&text=PS",
      transformation: "Better sleep, reduced joint pain, increased energy",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      product: "Ashwagandha Premium Capsules",
      rating: 5,
      text: "As a working professional, stress was affecting my health. These capsules have helped me manage stress naturally and improved my focus.",
      image: "/placeholder.svg?height=80&width=80&text=RK",
      transformation: "Reduced stress, better focus, improved mood",
    },
    {
      name: "Anita Patel",
      location: "Bangalore, India",
      product: "Immunity Booster Powder",
      rating: 5,
      text: "Since starting this immunity booster, I haven't fallen sick once. My energy levels are through the roof and I feel more vibrant.",
      image: "/placeholder.svg?height=80&width=80&text=AP",
      transformation: "Stronger immunity, increased vitality, better health",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Real Transformations</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover how Tivara Body products have helped thousands achieve better health and vitality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-spiritual hover:scale-105 transition-all duration-300">
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-emerald-800 mb-2">Transformation:</h4>
                <p className="text-emerald-700 text-sm">{testimonial.transformation}</p>
              </div>

              <div className="flex items-center border-t border-stone-200 pt-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-100"
                />
                <div>
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                  <p className="text-sm text-emerald-600 font-medium">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
