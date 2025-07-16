import type { Metadata } from "next"
import { CheckoutSuccessPage } from "@/components/checkout/checkout-success-page"

export const metadata: Metadata = {
  title: "Order Confirmed - Tivara Living",
  description: "Your wellness product order has been successfully placed.",
}

export default function CheckoutSuccess() {
  return <CheckoutSuccessPage />
}
