import { Zap, Home, Compass, Sparkles } from "lucide-react"

export function TivaraSpaceHeader() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-6 h-6 text-amber-600" />
              <span className="text-amber-600 font-medium">Energy Healing & Vastu</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              <span className="text-gradient">Tivara Space</span>
              <br />
              Harmonize Your Environment
            </h1>

            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Transform your living and working spaces with ancient Vastu principles and modern energy healing tools.
              Create environments that support prosperity, peace, and positive energy flow.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Vastu Compliant</h3>
                <p className="text-xs text-stone-600">Ancient principles</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Energy Cleansing</h3>
                <p className="text-xs text-stone-600">Positive vibes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Compass className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Direction Aligned</h3>
                <p className="text-xs text-stone-600">Proper placement</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Prosperity</h3>
                <p className="text-xs text-stone-600">Abundance flow</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500&text=Space+Healing+Tools"
              alt="Tivara Space Products"
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
