export function ContactMap() {
  return (
    <div className="card-spiritual">
      <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6">Find Us</h3>
      <div className="aspect-video bg-stone-200 rounded-xl overflow-hidden">
        <img
          src="/placeholder.svg?height=300&width=500&text=Wellness+Center+Map"
          alt="Tivara Living Wellness Center Location"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 space-y-2">
        <p className="font-semibold text-stone-800">Tivara Living Wellness Center</p>
        <p className="text-stone-600">123 Wellness Way, Suite 100</p>
        <p className="text-stone-600">California, CA 90210</p>
        <div className="flex space-x-4 mt-4">
          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">Get Directions</button>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">Schedule Visit</button>
        </div>
      </div>
    </div>
  )
}
