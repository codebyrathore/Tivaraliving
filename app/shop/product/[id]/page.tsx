import type { Metadata } from "next"
import { ProductDetails } from "@/components/shop/product-details"
import { RelatedProducts } from "@/components/shop/related-products"

export const metadata: Metadata = {
  title: "Product Details - Tivara Living",
  description: "Detailed information about our Ayurvedic wellness products.",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <ProductDetails productId={params.id} />
      <RelatedProducts />
    </div>
  )
}
