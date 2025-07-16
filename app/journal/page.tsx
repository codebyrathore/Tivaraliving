import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export const metadata: Metadata = {
  title: "Journal - Tivara Living",
  description: "Explore wellness wisdom, Ayurvedic insights, and holistic living tips from our expert contributors.",
}

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <BlogHeader />
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
