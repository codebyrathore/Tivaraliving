import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us - Tivara Living | Get in Touch",
  description:
    "Connect with our wellness experts. Get personalized guidance, ask questions, or schedule a consultation.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <ContactHeader />
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}
