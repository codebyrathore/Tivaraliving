import { Leaf, Home, Brain, Award, Users, Globe, Heart } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: "Ancient Wisdom",
      description: "5,000-year-old Ayurvedic principles and traditional healing practices.",
      color: "emerald",
      stat: "5000+",
      statLabel: "Years of Wisdom",
    },
    {
      icon: Home,
      title: "Energy Science",
      description: "Harness energy healing and Vastu principles for environmental harmony.",
      color: "amber",
      stat: "25+",
      statLabel: "Countries Served",
    },
    {
      icon: Brain,
      title: "Modern Science",
      description: "Research-backed products with natural ingredients and proven efficacy.",
      color: "purple",
      stat: "100+",
      statLabel: "Studies Referenced",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium ingredients sourced ethically with rigorous quality standards.",
      color: "emerald",
      stat: "99%",
      statLabel: "Purity Guaranteed",
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-amber-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-medium">Trusted by 10,000+ Wellness Seekers</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-8">
            About <span className="text-gradient">Tivara Living</span>
          </h2>

          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between ancient Ayurvedic wisdom and modern scientific understanding, creating products
            and experiences that nurture your complete well-being through the harmony of{" "}
            <span className="font-semibold text-emerald-600">body</span>,{" "}
            <span className="font-semibold text-amber-600">mind</span>, and{" "}
            <span className="font-semibold text-purple-600">environment</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={feature.title} className="group">
              <div className="card-spiritual text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-10 h-10 text-emerald-600" />
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed mb-6">{feature.description}</p>

                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{feature.stat}</div>
                    <div className="text-sm text-emerald-700 font-medium">{feature.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 via-stone-50 to-amber-50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-emerald-300 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-amber-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-stone-300 rounded-full"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Globe className="w-8 h-8 text-emerald-600" />
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800">Our Philosophy</h3>
              <Globe className="w-8 h-8 text-amber-600" />
            </div>

            <p className="text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed mb-8">
              True wellness emerges from the perfect harmony of body, mind, and environment. We believe that by healing
              yourself and your space, you create a foundation for lasting transformation. Our carefully crafted
              products and practices support this holistic journey, combining the timeless wisdom of Ayurveda with
              cutting-edge scientific research.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-bold text-stone-800 mb-2">Heal Your Body</h4>
                <p className="text-stone-600 text-sm">Nourish with Ayurvedic supplements and natural remedies</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-stone-800 mb-2">Harmonize Your Space</h4>
                <p className="text-stone-600 text-sm">Transform energy with Vastu principles and cleansing tools</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-stone-800 mb-2">Elevate Your Mind</h4>
                <p className="text-stone-600 text-sm">Achieve clarity through meditation and mindfulness practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
