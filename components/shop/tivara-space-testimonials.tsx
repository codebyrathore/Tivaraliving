import { Star, Quote } from "lucide-react"

export function TivaraSpaceTestimonials() {
  const testimonials = [
    {
      name: "Suresh Gupta",
      location: "Pune, India",
      product: "Crystal Healing Grid Set",
      rating: 5,
      text: "After placing the crystal grid in my home office, I've noticed a significant improvement in my focus and productivity. The energy feels much more positive.",
      image: "/placeholder.svg?height=80&width=80&text=SG",
      transformation: "Better focus, increased productivity, positive energy",
    },
    {
      name: "Meera Joshi",
      location: "Jaipur, India",
      product: "Vastu Compass & Direction Kit",
      rating: 5,
      text: "This compass helped me rearrange my entire home according to Vastu principles. My family relationships have improved and we feel more harmonious.",
      image: "/placeholder.svg?height=80&width=80&text=MJ",
      transformation: "Better relationships, family harmony, peaceful home",
    },
    {
      name: "Vikram Singh",
      location: "Chennai, India",
      product: "Sage Cleansing Bundle Kit",
      rating: 5,
      text: "The sage cleansing ritual has become a weekly practice in our home. It removes negative energy and creates such a fresh, peaceful atmosphere.",
      image: "/placeholder.svg?height=80&width=80&text=VS",
      transformation: "Negative energy removal, peaceful atmosphere, spiritual cleansing",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">Space Transformation Stories</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            See how our customers have transformed their homes and offices into harmonious, prosperous spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-spiritual hover:scale-105 transition-all duration-300">
              <Quote className="w-8 h-8 text-amber-200 mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="bg-amber-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-amber-800 mb-2">Transformation:</h4>
                <p className="text-amber-700 text-sm">{testimonial.transformation}</p>
              </div>

              <div className="flex items-center border-t border-stone-200 pt-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-amber-100"
                />
                <div>
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                  <p className="text-sm text-amber-600 font-medium">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
