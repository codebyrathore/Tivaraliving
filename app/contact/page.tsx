import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us - Tivara Living | Get in Touch",
  description:
    "Contact Tivara Living for wellness consultations, product inquiries, or support. We're here to guide your holistic health journey.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <ContactHeader />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
            <div className="mt-8">
              <ContactMap />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
