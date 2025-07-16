import { Sparkles, Heart, Leaf } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-stone-200/40 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-emerald-600" />
                <span className="text-emerald-600 font-medium">Ancient Wisdom</span>
              </div>
              <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-amber-600" />
                <span className="text-amber-600 font-medium">Modern Science</span>
              </div>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6 leading-tight">
              Healing Through
              <br />
              <span className="text-gradient">Harmony</span>
            </h1>

            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We believe true wellness emerges when ancient Ayurvedic wisdom meets modern scientific understanding,
              creating a bridge between timeless healing traditions and contemporary life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-stone-800">Founded with Love</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-stone-800">10,000+ Lives Transformed</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500&text=Wellness+Journey"
                alt="Our wellness philosophy"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <Leaf className="w-12 h-12 text-white" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
