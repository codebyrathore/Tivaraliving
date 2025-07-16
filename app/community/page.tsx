import type { Metadata } from "next"
import { CommunityHeader } from "@/components/community/community-header"
import { CommunityFeatures } from "@/components/community/community-features"
import { CommunityFeed } from "@/components/community/community-feed"
import { CommunityJoin } from "@/components/community/community-join"

export const metadata: Metadata = {
  title: "Tivara Healing Circle - Community | Tivara Living",
  description:
    "Join our vibrant community of wellness seekers. Share experiences, learn from experts, and connect with like-minded individuals on your healing journey.",
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <CommunityHeader />
      <CommunityFeatures />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <CommunityFeed />
          </div>
          <div className="lg:col-span-1">
            <CommunityJoin />
          </div>
        </div>
      </div>
    </div>
  )
}
