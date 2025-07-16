import { Users, Award, Globe, Heart, Lightbulb, BookOpen } from "lucide-react"

export function AboutStory() {
  const milestones = [
    {
      year: "2015",
      title: "The Awakening",
      description: "Dr. Priya Sharma's personal healing crisis leads her to rediscover ancient Ayurvedic wisdom.",
      icon: Lightbulb,
    },
    {
      year: "2018",
      title: "The Vision Begins",
      description: "Founding Tivara Living with a mission to bridge ancient wisdom with modern science.",
      icon: BookOpen,
    },
    {
      year: "2020",
      title: "First Products Launch",
      description: "Our inaugural collection of Ayurvedic supplements and wellness tools debuts globally.",
      icon: Heart,
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Tivara Living reaches customers in over 25 countries, building a worldwide wellness community.",
      icon: Globe,
    },
    {
      year: "2024",
      title: "Community of 50,000+",
      description: "Our healing circle grows to transform thousands of lives through holistic wellness.",
      icon: Users,
    },
  ]

  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Lives Transformed",
      color: "emerald",
    },
    {
      icon: Globe,
      number: "35+",
      label: "Countries Served",
      color: "amber",
    },
    {
      icon: Award,
      number: "75+",
      label: "Wellness Awards",
      color: "stone",
    },
    {
      icon: Heart,
      number: "99.2%",
      label: "Satisfaction Rate",
      color: "red",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Founder's Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500&text=Dr.+Priya+Sharma"
              alt="Dr. Priya Sharma, Founder of Tivara Living"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <blockquote className="text-stone-700 italic text-sm leading-relaxed">
                "True healing happens when we honor both the wisdom of our ancestors and the discoveries of modern
                science."
              </blockquote>
              <cite className="text-emerald-600 font-medium text-sm mt-2 block">
                - Dr. Priya Sharma, Founder & Chief Wellness Officer
              </cite>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-6">A Journey Born from Crisis</h2>
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                Tivara Living was born from a deeply personal crisis that became a profound awakening. In 2015, our
                founder Dr. Priya Sharma faced a health challenge that conventional medicine couldn't fully address.
                Despite her background in biochemistry and years in pharmaceutical research, she found herself searching
                for answers beyond the laboratory.
              </p>
              <p>
                This journey led her back to her grandmother's kitchen in Kerala, where she rediscovered the profound
                wisdom of Ayurveda. Combining her scientific training with ancient healing practices, she experienced a
                transformation that went far beyond physical healing - it was a complete rebalancing of body, mind, and
                spirit.
              </p>
              <p>
                "I realized that we had been looking at wellness through a fragmented lens," Dr. Sharma reflects.
                "Ancient systems like Ayurveda and Vastu Shastra understood what modern science is just beginning to
                prove - that everything is interconnected. Our physical health, our environment, our mental state, even
                our spiritual well-being - they're all part of one integrated system."
              </p>
              <p>
                Today, Tivara Living serves a global community of wellness seekers, each on their own unique journey
                toward balance and vitality. Every product we create, every practice we share, carries this intention of
                complete, integrated healing.
              </p>
            </div>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Our Philosophy</h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              We believe that true wellness is not the absence of disease, but the presence of vitality, balance, and
              joy in every aspect of life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-stone-800 mb-3">Ancient Wisdom</h4>
              <p className="text-stone-600 leading-relaxed">
                We honor time-tested traditions like Ayurveda, Vastu Shastra, and Vedic astrology that have guided human
                wellness for millennia.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-stone-800 mb-3">Modern Science</h4>
              <p className="text-stone-600 leading-relaxed">
                Every product is backed by rigorous research, third-party testing, and validation through contemporary
                scientific methods.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-stone-800 mb-3">Community Healing</h4>
              <p className="text-stone-600 leading-relaxed">
                We believe healing happens in community. Our Tivara Healing Circle connects like-minded souls on the
                wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-playfair text-3xl font-bold text-stone-800 text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-amber-500 rounded-full hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center ${index % 2 === 0 ? "md:ml-auto md:mr-0 mr-3" : "md:mr-auto md:ml-0 mr-3"}`}
                        >
                          <milestone.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span
                          className={`font-bold text-2xl text-emerald-600 ${index % 2 === 0 ? "md:mr-3" : "md:ml-3"}`}
                        >
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="font-playfair text-xl font-bold text-stone-800 mb-2">{milestone.title}</h4>
                      <p className="text-stone-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-white border-4 border-emerald-500 rounded-full z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl p-12 text-white">
          <h3 className="font-playfair text-3xl font-bold text-center mb-12">Our Global Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="font-playfair text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
