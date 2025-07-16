import { Brain, Sparkles, Heart, Zap } from "lucide-react"

export function TivaraMindHeader() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-6 h-6 text-purple-600" />
              <span className="text-purple-600 font-medium">Meditation & Mindfulness</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              <span className="text-gradient">Tivara Mind</span>
              <br />
              Cultivate Inner Peace
            </h1>

            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Discover tools and practices for mental clarity, emotional balance, and spiritual growth. Create a
              peaceful mind that supports your highest potential and deepest well-being.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Mental Clarity</h3>
                <p className="text-xs text-stone-600">Clear thinking</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Emotional Balance</h3>
                <p className="text-xs text-stone-600">Inner harmony</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Stress Relief</h3>
                <p className="text-xs text-stone-600">Deep relaxation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Focus Power</h3>
                <p className="text-xs text-stone-600">Enhanced concentration</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500&text=Mind+Wellness+Products"
              alt="Tivara Mind Products"
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
