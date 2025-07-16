import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Zap, ArrowDown, Play, Star, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50 overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-stone-200/20 rounded-full blur-2xl"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-stone-700">4.9/5 from 2,000+ reviews</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-stone-700">10,000+ Happy Customers</span>
              </div>
            </div>

            {/* Main headline with enhanced typography */}
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6 leading-tight">
              Heal Your Self.
              <br />
              <span className="relative">
                <span className="text-gradient">Heal Your Space.</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
              </span>
            </h1>

            {/* Enhanced subheadline with icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-amber-600 block">Ayurveda</span>
                  <span className="text-sm text-stone-500">Ancient Wisdom</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-emerald-600 block">Energy Healing</span>
                  <span className="text-sm text-stone-500">Space Harmony</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-stone-600 block">Science</span>
                  <span className="text-sm text-stone-500">Modern Research</span>
                </div>
              </div>
            </div>

            {/* Enhanced description */}
            <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Transform your life through the perfect harmony of{" "}
              <span className="font-semibold text-emerald-600">ancient wisdom</span> and{" "}
              <span className="font-semibold text-amber-600">modern science</span>. Discover products and practices that
              heal your body, harmonize your space, and elevate your mind.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-slide-up mb-12">
              <Button
                className="btn-primary text-lg px-10 py-4 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/shop" className="flex items-center space-x-2">
                  <span>Explore Products</span>
                  <Sparkles className="w-5 h-5" />
                </Link>
              </Button>

              <Button className="btn-secondary text-lg px-10 py-4 group" asChild>
                <Link href="/quiz" className="flex items-center space-x-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Take Wellness Quiz</span>
                </Link>
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-medium text-stone-700 text-sm">5,000 Years of Wisdom</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-200"></div>
                <span className="font-medium text-stone-700 text-sm">Scientifically Backed</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="w-3 h-3 bg-stone-400 rounded-full animate-pulse delay-400"></div>
                <span className="font-medium text-stone-700 text-sm">Holistic Approach</span>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-emerald-600 mx-auto lg:mx-0" />
            </div>
          </div>

          {/* Right side - Enhanced visual */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10">
              {/* Main hero image */}
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500&text=Wellness+Transformation"
                  alt="Wellness transformation journey"
                  className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay elements */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-stone-700">Live Wellness Coaching</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-stone-800">30 Days</div>
                    <div className="text-sm text-stone-600">Transformation Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Leaf className="w-12 h-12 text-white" />
            </div>

            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-stone-300 to-stone-500 rounded-full flex items-center justify-center shadow-xl animate-spin-slow">
              <Heart className="w-8 h-8 text-white" />
            </div>

            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-amber-200/20 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
