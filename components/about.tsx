"use client"

import { VideoCarousel } from "@/components/ui/video-carousel"

interface AboutProps {
  mediaType?: "image" | "video"
  mediaSrc?: string
}

export function About({
  mediaType = "video",
  mediaSrc = "/Clients/Intro.mp4",
}: AboutProps) {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-gray-500 uppercase tracking-[0.3em] mb-4">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            WHY CHOOSE ALKHAIR PH?
          </h2>

          <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              <span className="text-white font-semibold">Alkhair PH </span> 
              helps brands grow, sell smarter, and scale online. We build digital systems that turn attention into real sales.

From Live Selling & Streaming, high-converting Websites, and strategic Social Media & Paid Ads, to Creative Content, Product Shoots, Fulfillment, and Analytics. We provide complete solutions designed to drive measurable results.

We focus on one thing: building systems that sell and strategies that scale.
            </p>

            <p className="text-white font-semibold text-xl pt-4">
              Systems that sell. Strategies that scale. Partnerships that last.
            </p>
          </div>
        </div>

          {/* LOWER GRID */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CARD (MEDIA) */}
          <div>
            {mediaType === "image" ? (
              <img
                src={mediaSrc}
                alt="About Media"
                className="rounded-3xl shadow-2xl border border-white/5 w-full h-auto object-contain"
              />
            ) : (
              <VideoCarousel
                videos={[
                  mediaSrc,
                  "/Clients/Video2.mp4",
                  "/Clients/Video3.mp4",
                ]}
              />
            )}
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              CREATIVE PRODUCTION & PRODUCT SHOOT
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
             Professional photos and videos that showcase your brand, build credibility, and drive engagement and conversions.
              From front-end visibility to backend operations, we handle the
              full ecosystem helping you scale efficiently and sustainably.
              <br />
              <br />
              Sample Airwell Product Shootw
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
