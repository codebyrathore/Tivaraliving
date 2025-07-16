import type { Metadata } from "next"
import { ProductDetails } from "@/components/shop/product-details"
import { RelatedProducts } from "@/components/shop/related-products"

export const metadata: Metadata = {
  title: "Turmeric Golden Milk Blend - Premium Ayurvedic Wellness | Tivara Living",
  description:
    "Experience the healing power of our organic Turmeric Golden Milk Blend. Crafted with ashwagandha, ginger, and warming spices for daily wellness and vitality.",
}

export default function TurmericGoldenMilkPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProductDetails productId="turmeric-golden-milk" />
      <RelatedProducts />
    </div>
  )
}
