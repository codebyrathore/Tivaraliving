import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"

export function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      product: "Tivara Body Wellness Kit",
      rating: 5,
      text: "The Ayurvedic oils have completely transformed my daily routine. I feel more balanced, energized, and connected to my inner self than ever before.",
      image: "/placeholder.svg?height=80&width=80&text=PS",
      verified: true,
    },
    {
      name: "David Chen",
      location: "San Francisco, USA",
      product: "Tivara Space Energy Kit",
      rating: 5,
      text: "After using the space clearing tools and following the Vastu principles, my home feels completely different. The energy is peaceful and harmonious.",
      image: "/placeholder.svg?height=80&width=80&text=DC",
      verified: true,
    },
    {
      name: "Sarah Johnson",
      location: "London, UK",
      product: "Tivara Mind Meditation Set",
      rating: 5,
      text: "The meditation tools and aromatherapy products have helped me develop a consistent practice. My anxiety has significantly reduced and I sleep better.",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      verified: true,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-6">Transformation Stories</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover how Tivara Living has helped thousands of people on their wellness journey toward complete healing
            and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-spiritual hover:scale-105 transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-sage-200" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
                )}
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-sage-100"
                />
                <div>
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                  <p className="text-sm text-sage-600 font-medium">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-sage-50 to-turmeric-50 rounded-2xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">Join 10,000+ Happy Customers</h3>
          <p className="text-stone-600 mb-6">Experience the transformation that thousands have already discovered.</p>
          <Button className="btn-secondary" asChild>
            <Link href="/testimonials">
              Read More Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
