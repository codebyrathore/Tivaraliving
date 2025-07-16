import type { Metadata } from "next"
import { TestimonialsHeader } from "@/components/testimonials/testimonials-header"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"
import { TestimonialsStats } from "@/components/testimonials/testimonials-stats"

export const metadata: Metadata = {
  title: "Testimonials - Tivara Living | Customer Success Stories",
  description:
    "Read authentic stories from our customers who have transformed their lives through Ayurvedic wellness and holistic healing.",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <TestimonialsHeader />
      <TestimonialsStats />
      <TestimonialsGrid />
    </div>
  )
}
