import type { Metadata } from "next"
import { CollectionsHeader } from "@/components/collections/collections-header"
import { CollectionsGrid } from "@/components/collections/collections-grid"
import { CollectionsBenefits } from "@/components/collections/collections-benefits"

export const metadata: Metadata = {
  title: "Collections - Tivara Living | Curated Wellness Bundles",
  description:
    "Discover our thoughtfully curated wellness collections designed for complete transformation of body, space, and mind.",
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <CollectionsHeader />
      <CollectionsGrid />
      <CollectionsBenefits />
    </div>
  )
}
