import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth/auth-provider"
import { CartProvider } from "@/components/cart/cart-provider"
import { WishlistProvider } from "@/components/wishlist/wishlist-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tivara Living - Holistic Wellness & Ayurvedic Products",
  description:
    "Discover authentic Ayurvedic products, wellness solutions, and holistic living essentials at Tivara Living. Transform your mind, body, and space naturally.",
    generator: 'v0.dev'
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
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <Navigation />
                <main>{children}</main>
                <Footer />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
