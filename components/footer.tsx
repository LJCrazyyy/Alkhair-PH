"use client"

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
              <span className="text-white font-semibold text-lg">Alkhair PH</span>
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
                href="mailto:info.alkhairph@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                info.alkhairph@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <p className="text-sm">
                  252-C Swiggert Parañaque,<br />
                  1709 Metro Manila,<br />
                  Manila, Philippines
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

        {/* Locations Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Locations</h3>
          
          {/* Two Maps Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* First Location */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.9408063789433!2d120.98765!3d14.357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a10e1a0001%3A0x1234567890abc!2s252-C%20Swiggert%20Paran%CC%83aque%2C%201709%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Second Location */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.5!2d121.0!3d14.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b!2sNear%20Malayan%20College%20Cabuyao!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Address Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Address */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border/40">
              <h4 className="text-white font-semibold mb-4">Main Office</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="text-sm text-gray-400">
                    252-C Swiggert Parañaque<br />
                    1709 Metro Manila<br />
                    Manila, Philippines
                  </p>
                </div>
                <a href="tel:09173099519" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  09173099519
                </a>
                <a href="mailto:info.alkhairph@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  info.alkhairph@gmail.com
                </a>
              </div>
            </div>

            {/* Second Address */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border/40">
              <h4 className="text-white font-semibold mb-4">Secondary Office</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="text-sm text-gray-400">
                    Near Malayan College of Cabuyao<br />
                    Cabuyao, Laguna<br />
                    Philippines
                  </p>
                </div>
                <a href="tel:09173099519" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  09173099519
                </a>
                <a href="mailto:info.alkhairph@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  info.alkhairph@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alkhair eCommerce Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
