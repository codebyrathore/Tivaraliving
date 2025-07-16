import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export const metadata: Metadata = {
  title: "Blog - Tivara Living | Wellness & Ayurveda Insights",
  description:
    "Discover ancient wisdom and modern wellness insights through our comprehensive blog on Ayurveda, healing, and spiritual living.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <BlogHeader />
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
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
