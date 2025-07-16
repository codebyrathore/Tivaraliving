import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "Tivara Body", href: "/shop/body" },
        { name: "Tivara Space", href: "/shop/space" },
        { name: "Tivara Mind", href: "/shop/mind" },
        { name: "Gift Sets", href: "/shop/gifts" },
        { name: "New Arrivals", href: "/shop/new" },
      ],
    },
    {
      title: "Learn",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Energy Quiz", href: "/quiz" },
        { name: "Wellness Guide", href: "/guide" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Track Order", href: "/track" },
      ],
    },
  ]

  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Tivara Living
              </span>
            </Link>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Bridging ancient Ayurvedic wisdom with modern science for complete holistic wellness and transformation.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/tivaraliving"
                className="text-stone-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-stone-700"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/tivaraliving"
                className="text-stone-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-stone-700"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/tivaraliving"
                className="text-stone-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-stone-700"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/tivaraliving"
                className="text-stone-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-stone-700"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 font-playfair text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-emerald-400 transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="border-t border-stone-700 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <a
                href="mailto:hello@tivaraliving.com"
                className="text-stone-400 hover:text-emerald-400 transition-colors"
              >
                hello@tivaraliving.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400" />
              <a href="tel:+15551234567" className="text-stone-400 hover:text-emerald-400 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-stone-400">Wellness Center, California</span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-700">
            <div className="flex items-center space-x-2 text-stone-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Tivara Living. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for your wellness journey.</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
