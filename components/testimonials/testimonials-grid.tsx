"use client"

import { useState } from "react"
import { Star, Quote, CheckCircle, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsGrid() {
  const [filter, setFilter] = useState("all")

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      product: "Tivara Body Wellness Kit",
      category: "body",
      rating: 5,
      date: "2024-01-10",
      verified: true,
      image: "/placeholder.svg?height=80&width=80&text=PS",
      text: "The Ayurvedic oils have completely transformed my daily routine. I feel more balanced, energized, and connected to my inner self than ever before. The turmeric blend has helped with my joint pain, and I sleep so much better now.",
      transformation: "Lost 15 lbs, improved energy levels, better sleep quality",
      beforeAfter: {
        before: "Constant fatigue, joint pain, poor sleep",
        after: "High energy, pain-free, restful sleep",
      },
    },
    {
      id: 2,
      name: "David Chen",
      location: "San Francisco, USA",
      product: "Tivara Space Energy Kit",
      category: "space",
      rating: 5,
      date: "2024-01-08",
      verified: true,
      image: "/placeholder.svg?height=80&width=80&text=DC",
      text: "After using the space clearing tools and following the Vastu principles, my home feels completely different. The energy is peaceful and harmonious. My family relationships have improved, and I'm more productive working from home.",
      transformation: "Improved family harmony, increased productivity, peaceful home environment",
      beforeAfter: {
        before: "Stressful home environment, family conflicts",
        after: "Peaceful atmosphere, better relationships",
      },
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "London, UK",
      product: "Tivara Mind Meditation Set",
      category: "mind",
      rating: 5,
      date: "2024-01-05",
      verified: true,
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      text: "The meditation tools and aromatherapy products have helped me develop a consistent practice. My anxiety has significantly reduced and I sleep better. The mindfulness journal has been particularly transformative for my mental clarity.",
      transformation: "Reduced anxiety by 70%, established daily meditation practice",
      beforeAfter: {
        before: "High anxiety, scattered thoughts, insomnia",
        after: "Calm mind, focused thoughts, restful sleep",
      },
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
      product: "Complete Wellness Bundle",
      category: "body",
      rating: 5,
      date: "2024-01-03",
      verified: true,
      image: "/placeholder.svg?height=80&width=80&text=MR",
      text: "I've been following Ayurveda for years, but Tivara's products are exceptional. The quality is outstanding, and the results speak for themselves. My digestion has improved dramatically, and my skin is glowing.",
      transformation: "Improved digestion, clearer skin, increased vitality",
      beforeAfter: {
        before: "Digestive issues, dull skin, low energy",
        after: "Perfect digestion, radiant skin, vibrant energy",
      },
    },
    {
      id: 5,
      name: "James Wilson",
      location: "Toronto, Canada",
      product: "Stress Relief Collection",
      category: "mind",
      rating: 5,
      date: "2023-12-28",
      verified: true,
      image: "/placeholder.svg?height=80&width=80&text=JW",
      text: "As a busy executive, stress was taking a toll on my health. The ashwagandha supplements and meditation tools have been life-changing. I'm calmer, more focused, and my blood pressure has normalized.",
      transformation: "Normalized blood pressure, reduced stress levels, improved focus",
      beforeAfter: {
        before: "High stress, elevated blood pressure, poor focus",
        after: "Calm demeanor, normal BP, laser focus",
      },
    },
    {
      id: 6,
      name: "Anita Patel",
      location: "Delhi, India",
      product: "Tivara Space Harmony Kit",
      category: "space",
      rating: 5,
      date: "2023-12-25",
      verified: true,
      image: "/placeholder.svg?height=80&width=80&text=AP",
      text: "The Vastu consultation and space clearing products have transformed our home's energy. Our business has flourished, and there's so much more positivity in our family life. Highly recommend to everyone!",
      transformation: "Business growth, family harmony, positive energy flow",
      beforeAfter: {
        before: "Business struggles, family tensions, negative energy",
        after: "Thriving business, loving family, positive vibes",
      },
    },
  ]

  const categories = [
    { id: "all", name: "All Stories", count: testimonials.length },
    { id: "body", name: "Body Transformation", count: testimonials.filter((t) => t.category === "body").length },
    { id: "space", name: "Space Harmony", count: testimonials.filter((t) => t.category === "space").length },
    { id: "mind", name: "Mind Wellness", count: testimonials.filter((t) => t.category === "mind").length },
  ]

  const filteredTestimonials = filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter)

  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id ? "btn-primary" : "btn-secondary"}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-spiritual hover:scale-105 transition-all duration-300">
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                {testimonial.verified && (
                  <div className="ml-2 flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Testimonial Text */}
              <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Transformation Highlight */}
              <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-emerald-800 mb-2">Key Transformation:</h4>
                <p className="text-emerald-700 text-sm">{testimonial.transformation}</p>
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <h5 className="font-semibold text-red-600 mb-1">Before:</h5>
                  <p className="text-stone-600">{testimonial.beforeAfter.before}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-green-600 mb-1">After:</h5>
                  <p className="text-stone-600">{testimonial.beforeAfter.after}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center border-t border-stone-200 pt-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-100"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                  <p className="text-sm text-emerald-600 font-medium">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their lives with our Ayurvedic wellness
              products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">Shop Now</Button>
              <Button className="btn-secondary">Take Wellness Quiz</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
