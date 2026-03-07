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
    {
      src: mediaSrc,
      title: "AIRWELL",
      description: "Sample Airwell Product Shoot.",
    },
    {
      src: "/Clients/Videos/Camou.mp4",
      title: "Camou",
      description: "Product shoot highlights and lighting setups.",
    },
    {
      src: "/Clients/Videos/Momilo.mp4",
      title: "Momilo Mio",
      description: "Behind the scenes footage and team workflow.",
    },
    {
      src: "/Clients/Videos/Pariscents.mp4",
      title: "Pariscents",
      description: "Innovative creative production and storytelling.",
    },
    {
      src: "/Clients/Videos/Topshion.mp4",
      title: "Topshion",
      description: "Comprehensive brand showcase and portfolio.",
    },
  ]

  const [active, setActive] = useState(0)

  return (
    <section id="about" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* ABOUT LABEL */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
            OUR ABOUT US
          </p>
        </div>

        {/* TEXT + HEADING */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-14 md:mb-20">

          {/* LEFT TEXT */}
          <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">

            <p>
              <span className="text-white font-semibold">Alkhair PH</span> helps
              brands grow, sell smarter, and scale online. We build digital
              systems that turn attention into real sales.
            </p>

            <p>
              From Live Selling & Streaming, high-converting Websites, and
              strategic Social Media & Paid Ads, to Creative Content, Product
              Shoots, Fulfillment, and Analytics.
            </p>

            <p>
              Professional photos and videos that showcase your brand,
              build credibility, and drive engagement and conversions.
            </p>

          </div>

          {/* RIGHT HEADING */}
          <div className="flex items-center md:justify-end">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              CREATIVE<br />
              PRODUCTION<br />
              & PRODUCT<br />
              SHOOT
            </h2>
          </div>

        </div>

        {/* INNOVATION TITLE */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl font-black text-white">
            Where Technology meets <span className="italic">Innovation</span>
          </h3>
        </div>

        {/* VIDEO CAROUSEL */}
        <div className="relative overflow-hidden border border-white/10 rounded-3xl shadow-xl mb-6">

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

        {/* ACTIVE VIDEO INFO */}
        <div className="text-center">

          <p className="text-white font-semibold text-lg md:text-2xl">
            {items[active]?.title}
          </p>

          <p className="text-gray-400 text-sm md:text-lg mt-2 max-w-xl mx-auto">
            {items[active]?.description}
          </p>

        </div>

      </div>
    </section>
  )
}