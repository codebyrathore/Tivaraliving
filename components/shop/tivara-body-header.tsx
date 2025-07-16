import { Heart, Leaf, Shield, Award } from "lucide-react"

export function TivaraBodyHeader() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Ayurvedic Body Wellness</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              <span className="text-gradient">Tivara Body</span>
              <br />
              Nourish From Within
            </h1>

            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Discover the power of 5,000-year-old Ayurvedic wisdom combined with modern science. Our premium
              supplements, oils, and wellness products are crafted to restore your body's natural balance and vitality.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">100% Natural</h3>
                <p className="text-xs text-stone-600">Pure ingredients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Lab Tested</h3>
                <p className="text-xs text-stone-600">Quality assured</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Certified</h3>
                <p className="text-xs text-stone-600">Ayush approved</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">Trusted</h3>
                <p className="text-xs text-stone-600">5000+ customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500&text=Ayurvedic+Body+Products"
              alt="Tivara Body Products"
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
