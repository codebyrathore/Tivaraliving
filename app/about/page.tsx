import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"

export const metadata: Metadata = {
  title: "About Us - Tivara Living | Our Story & Mission",
  description:
    "Learn about Tivara Living's mission to bridge ancient Ayurvedic wisdom with modern science for holistic wellness transformation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </div>
  )
}
