"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Facebook, Instagram, X } from "lucide-react"

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
  const [modalOpen, setModalOpen] = useState(false)
  const [activeFile, setActiveFile] = useState<{
    type: "image"
    src: string
    alt: string
  } | null>(null)

  const files: Array<{ type: "image"; src: string; alt: string }> = [
    { type: "image", src: "/Clients/Needs/CertRegistration.png", alt: "Certificate Registration" },
    { type: "image", src: "/Clients/Needs/RegistrationCert.png", alt: "Registration Certificate" },
    { type: "image", src: "/Clients/Needs/Cert.png", alt: "Certificate Business" },
  ]

  function openModal(file: { type: "image"; src: string; alt: string }) {
    setActiveFile(file)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setActiveFile(null)
  }

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Clients/Aklogo.png"
                alt="Alkhair Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-white font-semibold text-lg">Alkhair PH</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Powering brands with live selling, digital marketing, creative content, and growth-focused ecommerce solutions.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="tel:09173099519"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                09173099519
              </a>
              <a
                href="mailto:info.alkhairph@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info.alkhairph@gmail.com
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="https://www.facebook.com/alkhairph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                >
                  <Facebook className="w-4 h-4 flex-shrink-0" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/alkhairph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                >
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links + Files */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Image thumbnails */}
            <div className="flex justify-start gap-3 mt-4 flex-wrap">
              {files.map((file) => (
                <button
                  key={file.src}
                  onClick={() => openModal(file)}
                  className="cursor-pointer focus:outline-none"
                  aria-label={`Open ${file.alt}`}
                >
                  <img
                    src={file.src}
                    alt={file.alt}
                    className="w-10 h-10 object-contain rounded shadow-md hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Locations / Maps */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Our Locations</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/40">
              <iframe
                src="https://www.google.com/maps?q=252-C%20Swiggert%20Parañaque&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/40">
              <iframe
                src="https://www.google.com/maps?q=Malayan%20College%20Laguna&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && activeFile && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh] bg-white rounded shadow-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <img
                src={activeFile.src}
                alt={activeFile.alt}
                className="max-w-full max-h-[80vh] object-contain rounded"
              />
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alkhair PH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}