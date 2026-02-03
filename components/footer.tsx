import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "CHANNEL PARTNERS", href: "#partners" },
  { label: "OUR CLIENTS", href: "#clients" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT US", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">AK</span>
              </div>
              <span className="text-white font-semibold text-lg">Alkhair eCommerce</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier live selling agency in the Philippines, driving sales on major platforms 
              like TikTok, Shopee and Lazada through dynamic, interactive events.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:09173099519"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                09173099519
              </a>
              <a
                href="mailto:alkhair.live@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                alkhair.live@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <p className="text-sm">
                  252-C Swiggert Street &<br />
                  349 Armstrong Ave<br />
                  Moonwalk Paranaque
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alkhair eCommerce Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
