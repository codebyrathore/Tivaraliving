import type { Metadata } from "next"
import { TivaraSpaceHeader } from "@/components/shop/tivara-space-header"
import { TivaraSpaceProducts } from "@/components/shop/tivara-space-products"
import { TivaraSpaceBenefits } from "@/components/shop/tivara-space-benefits"
import { TivaraSpaceTestimonials } from "@/components/shop/tivara-space-testimonials"

export const metadata: Metadata = {
  title: "Tivara Space - Energy Healing & Vastu Products | Tivara Living",
  description:
    "Transform your living space with our energy cleansing tools, crystals, and Vastu products for harmony and positive energy flow.",
}

export default function TivaraSpacePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <TivaraSpaceHeader />
      <TivaraSpaceProducts />
      <TivaraSpaceBenefits />
      <TivaraSpaceTestimonials />
    </div>
  )
}
