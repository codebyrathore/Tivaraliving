import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth/auth-provider"
import { CartProvider } from "@/components/cart/cart-provider"
import { WishlistProvider } from "@/components/wishlist/wishlist-provider"
import { LanguageProvider } from "@/components/i18n/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { LiveChatWidget } from "@/components/support/live-chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tivara Living - Holistic Wellness & Ayurvedic Products",
  description:
    "Discover authentic Ayurvedic products, wellness solutions, and holistic living essentials at Tivara Living. Transform your mind, body, and space naturally.",
  generator: "v0.dev",
  keywords:
    "ayurveda, wellness, holistic health, natural products, meditation, yoga, herbs, essential oils, dosha, chakra",
  authors: [{ name: "Tivara Living" }],
  creator: "Tivara Living",
  publisher: "Tivara Living",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tivaraliving.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "hi-IN": "/hi-IN",
      "ta-IN": "/ta-IN",
      "te-IN": "/te-IN",
      "bn-IN": "/bn-IN",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tivaraliving.com",
    title: "Tivara Living - Holistic Wellness & Ayurvedic Products",
    description:
      "Discover authentic Ayurvedic products, wellness solutions, and holistic living essentials at Tivara Living. Transform your mind, body, and space naturally.",
    siteName: "Tivara Living",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Tivara+Living",
        width: 1200,
        height: 630,
        alt: "Tivara Living - Holistic Wellness Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tivara Living - Holistic Wellness & Ayurvedic Products",
    description:
      "Discover authentic Ayurvedic products, wellness solutions, and holistic living essentials at Tivara Living.",
    site: "@tivaraliving",
    creator: "@tivaraliving",
    images: ["/placeholder.svg?height=630&width=1200&text=Tivara+Living"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AuthProvider>
              <CartProvider>
                <WishlistProvider>
                  <Navigation />
                  <main>{children}</main>
                  <Footer />
                  <LiveChatWidget />
                </WishlistProvider>
              </CartProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
