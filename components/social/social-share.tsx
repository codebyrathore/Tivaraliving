"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Mail, Link, MessageCircle } from "lucide-react"
import { useState } from "react"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  image?: string
  hashtags?: string[]
}

export function SocialShare({
  url,
  title,
  description = "",
  image = "",
  hashtags = ["TivaraLiving", "Ayurveda", "Wellness"],
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedImage = encodeURIComponent(image)
  const hashtagString = hashtags.map((tag) => `#${tag}`).join(" ")

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtags.join(",")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${url}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, "share", "width=600,height=400,scrollbars=yes,resizable=yes")
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-stone-600 mr-2">Share:</span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.facebook)}
        className="bg-transparent hover:bg-blue-50 hover:text-blue-600"
      >
        <Facebook className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.twitter)}
        className="bg-transparent hover:bg-sky-50 hover:text-sky-600"
      >
        <Twitter className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.linkedin)}
        className="bg-transparent hover:bg-blue-50 hover:text-blue-700"
      >
        <Linkedin className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.whatsapp)}
        className="bg-transparent hover:bg-green-50 hover:text-green-600"
      >
        <MessageCircle className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => (window.location.href = shareLinks.email)}
        className="bg-transparent hover:bg-gray-50 hover:text-gray-600"
      >
        <Mail className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="bg-transparent hover:bg-emerald-50 hover:text-emerald-600"
      >
        <Link className="w-4 h-4" />
        {copied && <span className="ml-1 text-xs">Copied!</span>}
      </Button>
    </div>
  )
}
