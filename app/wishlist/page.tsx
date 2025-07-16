import type { Metadata } from "next"
import { WishlistPage } from "@/components/wishlist/wishlist-page"

export const metadata: Metadata = {
  title: "Wishlist - Tivara Living",
  description: "Your saved wellness products and favorites.",
}

export default function Wishlist() {
  return <WishlistPage />
}
