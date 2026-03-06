"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react"

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
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Clients/Aklogo.png"
                alt="Alkhair Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-white font-semibold text-lg">
                Alkhair PH
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier live selling agency in the Philippines, driving sales on major platforms 
              like TikTok, Shopee and Lazada through dynamic, interactive events.
            </p>
          </div>

          {/* Contact */}
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
              {/* Social */}
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="https://www.facebook.com/alkhairph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/alkhairph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
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

        {/* Locations */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Our Locations
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/40">
              <iframe
                src="https://www.google.com/maps?q=252-C%20Swiggert%20Parañaque&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/40">
              <iframe
                src="https://www.google.com/maps?q=Malayan%20College%20Laguna&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alkhair PH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}