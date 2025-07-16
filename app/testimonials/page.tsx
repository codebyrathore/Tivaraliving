import type { Metadata } from "next"
import { TestimonialsHeader } from "@/components/testimonials/testimonials-header"
import { TestimonialsStats } from "@/components/testimonials/testimonials-stats"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"

export const metadata: Metadata = {
  title: "Testimonials - Tivara Living | Customer Stories & Reviews",
  description:
    "Read authentic testimonials from our customers who have transformed their lives with Tivara Living's Ayurvedic products and wellness solutions.",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <TestimonialsHeader />
      <TestimonialsStats />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <TestimonialsGrid />
      </div>
    </div>
  )
}
