"use client"

import { VideoCarousel } from "@/components/ui/video-carousel"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AboutProps {
  mediaType?: "image" | "video"
  mediaSrc?: string
}

export function About({
  mediaType = "video",
  mediaSrc = "/Clients/Videos/Intro.mp4",
}: AboutProps) {

  const items = [
    { src: mediaSrc, title: "AIRWELL", description: "Sample Airwell Product Shoot." },
    { src: "/Clients/Videos/Camou.mp4", title: "Camou", description: "Product shoot highlights and lighting setups." },
    { src: "/Clients/Videos/Momilo.mp4", title: "Momilo Mio", description: "Behind the scenes footage and team workflow." },
    { src: "/Clients/Videos/Pariscents.mp4", title: "Pariscents", description: "Innovative creative production and storytelling." },
    { src: "/Clients/Videos/Topshion.mp4", title: "Topshion", description: "Comprehensive brand showcase and portfolio." },
  ]

  const files: Array<{ type: "image"; src: string; alt: string }> = [
    { type: "image", src: "/Clients/Needs/CertRegistration.png", alt: "Certificate Registration" },
    { type: "image", src: "/Clients/Needs/RegistrationCert.png", alt: "Registration Certificate" },
    { type: "image", src: "/Clients/Needs/Cert.png", alt: "Certificate Business" },
  ]

  const [active, setActive] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const { ref: aboutRef } = useScrollAnimation()

  const openModal = (src: string) => {
    setModalImage(src)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage(null)
  }

  return (
    <section ref={aboutRef} id="about" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* ABOUT LABEL */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">ABOUT US</p>
        </div>

        {/* TEXT + IMAGES GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-14 md:mb-20">

          {/* LEFT TEXT */}
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed md:leading-loose">
            <p>
              <span className="text-white font-semibold text-xl md:text-2xl">Alkhair PH</span> helps
              brands grow, sell smarter, and scale online. We build digital
              systems that turn attention into real sales.
            </p>
            <p className="text-lg md:text-xl">
              From Live Selling & Streaming, high-converting Websites, and
              strategic Social Media & Paid Ads, to Creative Content, Product
              Shoots, Fulfillment, and Analytics.
            </p>
            <p className="text-lg md:text-xl">
              Professional photos and videos that showcase your brand,
              build credibility, and drive engagement and conversions.
            </p>
          </div>

          {/* RIGHT SIDE - 3 COLUMNS IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {files.map(({ src, alt }, idx) => (
              <img
                key={idx}
                src={src}
                alt={alt}
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer max-h-65"
                onClick={() => openModal(src)}
              />
            ))}
          </div>
        </div>

        {/* CREATIVE PRODUCTION & PRODUCT SHOOT */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            CREATIVE PRODUCTION & PRODUCT SHOOT
          </h3>
        </div>

        {/* VIDEO CAROUSEL */}
        <div className="relative overflow-hidden border border-white/10 rounded-3xl shadow-xl mb-6">
          <div className="w-full bg-black aspect-video rounded-3xl">
            {mediaType === "image" ? (
              <img src={mediaSrc} alt="About Media" className="w-full h-full object-cover rounded-3xl" />
            ) : (
              <VideoCarousel videos={items} onSlideChange={(i) => setActive(i)} />
            )}
          </div>
        </div>

        {/* ACTIVE VIDEO INFO */}
        <div className="text-center">
          <p className="text-white font-semibold text-lg md:text-2xl">{items[active]?.title}</p>
          <p className="text-gray-400 text-sm md:text-lg mt-2 max-w-xl mx-auto">{items[active]?.description}</p>
        </div>

        {/* MODAL */}
        {modalOpen && modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <img src={modalImage} alt="Modal" className="max-h-full max-w-full rounded-lg shadow-lg" />
          </div>
        )}

      </div>
    </section>
  )
}