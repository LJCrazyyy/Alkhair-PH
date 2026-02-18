"use client"

interface AboutProps {
  mediaType?: "image" | "video"
  mediaSrc?: string
}

export function About({
  mediaType = "image",
  mediaSrc = "/Clients/Alkhair.png",
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
            WHY CHOOSE ALKHAIR ECOMMERCE SERVICES?
          </h2>

          <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              <span className="text-white font-semibold">Alkhair PH</span> is a
              results-driven digital solutions company built to help brands
              scale faster, sell smarter, and dominate online. We don’t just
              offer services — we build revenue-generating digital systems that
              transform attention into sales and businesses into powerful brands.
            </p>

            <p>
              We lead with our{" "}
              <span className="text-white font-semibold">
                Live Selling & Streaming Solutions
              </span>
              , transforming ordinary product showcases into high-energy,
              interactive shopping experiences that drive real-time engagement
              and instant conversions.
            </p>

            <p>
              Our{" "}
              <span className="text-white font-semibold">
                Website Design & Development
              </span>{" "}
              services deliver fast, mobile-optimized, and conversion-focused
              websites engineered to work 24/7 generating leads and revenue.
            </p>

            <p>
              Through strategic{" "}
              <span className="text-white font-semibold">
                Social Media Management & Paid Ads
              </span>
              , we position your brand in front of the right audience at the
              right time — combining scroll-stopping content with data-backed
              targeting to drive measurable growth.
            </p>

            <p>
              We strengthen your backend with{" "}
              <span className="text-white font-semibold">
                Fulfillment & Customer Support
              </span>
              , ensuring seamless order processing and responsive care that
              builds trust and long-term loyalty.
            </p>

            <p>
              Our{" "}
              <span className="text-white font-semibold">
                Creative Content & Product Shoots
              </span>{" "}
              elevate your brand through premium visuals and compelling videos
              designed to attract, engage, and convert.
            </p>

            <p>
              And because growth without data is guesswork, our{" "}
              <span className="text-white font-semibold">
                Analytics, Insights & Business Intelligence
              </span>{" "}
              services turn numbers into strategy — delivering actionable
              insights that fuel scalable success.
            </p>

            <p className="text-white font-semibold text-xl pt-4">
              Systems that sell. Strategies that scale. Partnerships that last.
            </p>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CARD (MEDIA) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-video bg-black w-full h-full">
            {mediaType === "image" ? (
              <img
                src={mediaSrc}
                alt="About Media"
                className="absolute top-0 left-0 w-full h-full object-contain bg-black"
              />
            ) : (
              <video
                src={mediaSrc}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}

            {/* Optional overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              End-to-End Digital Growth Solutions
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              We provide complete livestreaming, eCommerce management, and
              digital growth solutions by strategically bridging brands to
              online marketplaces such as TikTok, Shopee, and Lazada.
              <br />
              <br />
              From front-end visibility to backend operations, we handle the
              full ecosystem — helping you scale efficiently and sustainably.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
