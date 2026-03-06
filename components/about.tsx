"use client"

import { VideoCarousel } from "@/components/ui/video-carousel"
import { useState } from "react"

interface AboutProps {
  mediaType?: "image" | "video"
  mediaSrc?: string
}

export function About({
  mediaType = "video",
  mediaSrc = "/Clients/Videos/Intro.mp4",
}: AboutProps) {
  const items = [
    { src: mediaSrc, title: 'AIRWELL', description: 'Sample Airwell Product Shoot.' },
    { src: '/Clients/Videos/Camou.mp4', title: 'Camou', description: 'Product shoot highlights and lighting setups.' },
    { src: '/Clients/Videos/Momilo.mp4', title: 'Momilo Mio', description: 'Behind the scenes footage and team workflow.' },
    { src: '/Clients/Videos/Pariscents.mp4', title: 'Pariscents', description: 'Innovative creative production and storytelling.' },
    { src: '/Clients/Videos/Topshion.mp4', title: 'Topshion', description: 'Comprehensive brand showcase and portfolio.' },
  ]

  const [active, setActive] = useState(0)

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* === TEXT & HEADING SECTION === */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-24">

          {/* LEFT: Body text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              <span className="text-white font-semibold">Alkhair PH</span> helps brands grow, sell smarter, and scale online. We build digital systems that turn attention into real sales.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              From Live Selling & Streaming, high-converting Websites, and strategic Social Media & Paid Ads, to Creative Content, Product Shoots, Fulfillment, and Analytics. We provide complete solutions designed to drive measurable results.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Professional photos and videos that showcase your brand, build credibility, and drive engagement and conversions. From front-end visibility to backend operations, we handle the full ecosystem helping you scale efficiently and sustainably.
            </p>
          </div>

          {/* RIGHT: Big heading */}
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              CREATIVE<br />
              PRODUCTION<br />
              & PRODUCT<br />
              SHOOT
            </h2>
          </div>

        </div>

        {/* === VIDEO / INNOVATION SECTION === */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white">
              Where Technology meets <span className="italic">Innovation</span>
            </h3>
          </div>

          {/* Video Carousel */}
          <div className="relative overflow-hidden border border-white/10 rounded-3xl shadow-2xl">
            <div className="w-full bg-black aspect-video">
              {mediaType === "image" ? (
                <img
                  src={mediaSrc}
                  alt="About Media"
                  className="w-full h-full object-cover"
                />
              ) : (
                <VideoCarousel
                  videos={items}
                  onSlideChange={(i) => setActive(i)}
                />
              )}
            </div>
          </div>

          {/* Active slide info */}
          <div className="text-center">
            <p className="text-white font-semibold text-xl md:text-2xl">
              {items[active]?.title}
            </p>
            <p className="text-gray-400 text-base md:text-lg mt-2">
              {items[active]?.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}