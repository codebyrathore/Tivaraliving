import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductHighlights } from "@/components/product-highlights"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Featured Categories */}
      <ProductHighlights />

      {/* Testimonials Preview */}
      <TestimonialsPreview />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  )
}
