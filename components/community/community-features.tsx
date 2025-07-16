import { BookOpen, Video, Users2, Calendar, MessageSquare, Award } from "lucide-react"

export function CommunityFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Engage in meaningful conversations about Ayurveda, wellness practices, and spiritual growth.",
      color: "emerald",
    },
    {
      icon: Video,
      title: "Live Sessions",
      description: "Join weekly live sessions with Ayurvedic doctors, wellness coaches, and spiritual teachers.",
      color: "amber",
    },
    {
      icon: Users2,
      title: "Support Groups",
      description: "Connect with others on similar healing journeys through our specialized support circles.",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Participate in virtual and in-person workshops, retreats, and wellness events.",
      color: "blue",
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access exclusive content, guides, and resources curated by our wellness experts.",
      color: "red",
    },
    {
      icon: Award,
      title: "Wellness Challenges",
      description: "Join monthly challenges to build healthy habits and celebrate achievements together.",
      color: "green",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-4">Community Features</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Discover all the ways you can connect, learn, and grow within our healing community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-spiritual hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
