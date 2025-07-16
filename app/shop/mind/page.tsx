import type { Metadata } from "next"
import { TivaraMindHeader } from "@/components/shop/tivara-mind-header"
import { TivaraMindProducts } from "@/components/shop/tivara-mind-products"
import { TivaraMindBenefits } from "@/components/shop/tivara-mind-benefits"
import { TivaraMindTestimonials } from "@/components/shop/tivara-mind-testimonials"

export const metadata: Metadata = {
  title: "Tivara Mind - Meditation & Mindfulness Products | Tivara Living",
  description:
    "Discover meditation tools, aromatherapy, and mindfulness products for mental clarity, emotional balance, and inner peace.",
}

export default function TivaraMindPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <TivaraMindHeader />
      <TivaraMindProducts />
      <TivaraMindBenefits />
      <TivaraMindTestimonials />
    </div>
  )
}
