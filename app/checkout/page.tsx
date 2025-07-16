import type { Metadata } from "next"
import { CheckoutPage } from "@/components/checkout/checkout-page"

export const metadata: Metadata = {
  title: "Checkout - Tivara Living",
  description: "Complete your wellness product purchase securely.",
}

export default function Checkout() {
  return <CheckoutPage />
}
