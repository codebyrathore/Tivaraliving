import type { Metadata } from "next"
import { CollectionsHeader } from "@/components/collections/collections-header"
import { CollectionsGrid } from "@/components/collections/collections-grid"
import { CollectionsBenefits } from "@/components/collections/collections-benefits"

export const metadata: Metadata = {
  title: "Collections - Tivara Living | Curated Wellness Collections",
  description:
    "Explore our carefully curated collections of Ayurvedic products designed for specific wellness goals and lifestyle needs.",
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <CollectionsHeader />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <CollectionsGrid />
        <div className="mt-16">
          <CollectionsBenefits />
        </div>
      </div>
    </div>
  )
}
