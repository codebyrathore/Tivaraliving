import type { Metadata } from "next"
import { TivaraBodyHeader } from "@/components/shop/tivara-body-header"
import { TivaraBodyProducts } from "@/components/shop/tivara-body-products"
import { TivaraBodyBenefits } from "@/components/shop/tivara-body-benefits"
import { TivaraBodyTestimonials } from "@/components/shop/tivara-body-testimonials"

export const metadata: Metadata = {
  title: "Tivara Body - Ayurvedic Wellness Products | Tivara Living",
  description:
    "Discover our premium Ayurvedic supplements, oils, and wellness products designed to nourish your body from within and restore natural vitality.",
}

export default function TivaraBodyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <TivaraBodyHeader />
      <TivaraBodyProducts />
      <TivaraBodyBenefits />
      <TivaraBodyTestimonials />
    </div>
  )
}
