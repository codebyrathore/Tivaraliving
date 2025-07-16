import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Users, Star, ArrowRight } from "lucide-react"

export function CommunityJoin() {
  const upcomingEvents = [
    {
      title: "Full Moon Meditation Circle",
      date: "Jan 25, 2024",
      time: "7:00 PM IST",
      participants: 45,
    },
    {
      title: "Ayurvedic Cooking Workshop",
      date: "Jan 28, 2024",
      time: "11:00 AM IST",
      participants: 32,
    },
    {
      title: "Vastu for Home Office",
      date: "Feb 2, 2024",
      time: "6:00 PM IST",
      participants: 28,
    },
  ]

  const testimonials = [
    {
      name: "Anita Desai",
      text: "This community has been a blessing on my wellness journey. The support and knowledge shared here is incredible.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      text: "Found my tribe here! The live sessions with experts have transformed my understanding of Ayurveda.",
      rating: 5,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Join Community */}
      <div className="card-spiritual bg-gradient-to-br from-emerald-50 to-amber-50">
        <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">Join Our Healing Circle</h3>
        <p className="text-stone-600 mb-6">
          Connect with 12,000+ wellness enthusiasts and start your transformation journey today.
        </p>
        <div className="space-y-4">
          <Input type="email" placeholder="Enter your email address" />
          <Button className="btn-primary w-full">
            Join Community
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <p className="text-xs text-stone-500 mt-3">Free to join • No spam • Unsubscribe anytime</p>
      </div>

      {/* Upcoming Events */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium text-stone-800">{event.title}</h4>
              <p className="text-sm text-stone-600">
                {event.date} • {event.time}
              </p>
              <div className="flex items-center mt-1">
                <Users className="w-4 h-4 text-stone-400 mr-1" />
                <span className="text-xs text-stone-500">{event.participants} joining</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4 bg-transparent">
          View All Events
        </Button>
      </div>

      {/* Community Testimonials */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">What Members Say</h3>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-l-4 border-amber-500 pl-4">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-stone-700 italic mb-2">"{testimonial.text}"</p>
              <p className="text-xs font-medium text-stone-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Community Impact</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="font-playfair text-2xl font-bold text-emerald-600">2,500+</div>
            <div className="text-xs text-stone-600">Success Stories</div>
          </div>
          <div>
            <div className="font-playfair text-2xl font-bold text-amber-600">150+</div>
            <div className="text-xs text-stone-600">Expert Sessions</div>
          </div>
          <div>
            <div className="font-playfair text-2xl font-bold text-purple-600">95%</div>
            <div className="text-xs text-stone-600">Feel Supported</div>
          </div>
          <div>
            <div className="font-playfair text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-xs text-stone-600">Community Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
