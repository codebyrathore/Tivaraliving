import type { Metadata } from "next"
import { ShopHeader } from "@/components/shop/shop-header"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShopFilters } from "@/components/shop/shop-filters"

export const metadata: Metadata = {
  title: "Shop - Tivara Living | Ayurvedic Wellness Products",
  description:
    "Discover our complete collection of Ayurvedic wellness products for body, space, and mind transformation.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <ShopHeader />
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ShopFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
