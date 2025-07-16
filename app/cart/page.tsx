import type { Metadata } from "next"
import { CartPage } from "@/components/cart/cart-page"

export const metadata: Metadata = {
  title: "Shopping Cart - Tivara Living",
  description: "Review your selected wellness products and proceed to checkout.",
}

export default function Cart() {
  return <CartPage />
}
