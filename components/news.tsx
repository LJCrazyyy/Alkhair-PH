"use client"
import { useState, useCallback, useEffect } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import useEmblaCarousel from "embla-carousel-react"

export function News() {
  const newsData = [
    {
      slug: "join-our-team",
      img: "/Clients/News/hiring.jpg",
      date: "April 1, 2026 (Wednesday)",
      publishDate: "2026-04-01",
      title: "Join Our Team",
      desc: `Join Our Team: E-Commerce Live Seller
Are you confident on camera, love engaging with people, and have a passion for selling? This is your chance to turn your personality into profit.

Alkhair PH is looking for dynamic and driven E-Commerce Live Sellers to join our growing team. Be part of a fast-paced digital environment where creativity, energy, and sales skills come together.

What You’ll Do
As a Live Seller, you’ll be the face of the brand during live sessions showcasing products, engaging with audiences in real time, and driving conversions through authentic and compelling presentations.

What We Offer
Competitive compensation
Attractive incentives and performance bonuses
Flexible setup: Part-time or Full-time opportunities
Opportunity to work with local and international brands
A collaborative and creative work environment

What We’re Looking For
Confident and engaging on camera
Strong communication skills: English / Tagalog
Sales-driven mindset
Experience in live selling or content creation is an advantage but not required
Willing to learn and grow in the e-commerce space

Why Join Us?
At Alkhair PH, we don’t just build sellers. We build personal brands and high-performing creators.

Ready to go live and earn?
Apply now and be part of the next wave of e-commerce success.`
    },
    {
      slug: "ceo-message",
      img: "/Clients/News/ceo.jpg",
      date: "April 5, 2026 (Sunday)",
      publishDate: "2026-04-05",
      title: "CEO Message",
      desc: `Leadership in Vision: A Word From Our CEO
At the heart of Alkhair Philippines is a commitment to redefining how brands navigate and thrive in the modern digital landscape. Leading this mission is our Founder and Chief Executive Officer, Mrs. Alby Abalado.

A Refined Vision for Brand Growth
Mrs. Abalado stands at the helm of Alkhair E-Commerce with a focus that goes beyond standard growth metrics. With an innate sense for strategy and storytelling, she has cultivated a company that delivers curated experiences designed to position brands at the very forefront of their industries.

The Signature Standard
Under her guidance, leadership is defined by:
Precision and Excellence: Bringing together creative direction and strategic digital execution into one seamless ecosystem.
Innovation in Real-Time: Leading the way in live selling innovation to connect brands directly with their audiences.
Intentional Results: Ensuring every collaboration is elevated, results-driven, and meaningful.

Building Legacies
For Mrs. Abalado, success is not just about the numbers; it is about the legacy of the brands she helps shape. Under her direction, Alkhair PH has become a trusted partner for discerning local and international brands seeking to transform their market presence into lasting influence.

"True brand power lies not in being seen everywhere, but in being remembered distinctly, deliberately, and with purpose."

Connect With Us
Learn more about our approach and how we can help your brand thrive at Website: www.alkhairphilippines.com

Follow us on our Socials:
Facebook and Instagram: ALKHAIRPH`
    },
    {
      slug: "office-expansion",
      img: "/Clients/News/office.jpg",
      date: "April 8, 2026 (Wednesday)",
      publishDate: "2026-04-08",
      title: "Office Expansion",
      desc: `Exciting Updates: Alkhair Philippines is Growing to Serve You Better!

New Walls = Better Service
We are thrilled to announce that Alkhair Philippines is officially in a "leveling up" phase!
Our team has some very exciting news that marks a significant milestone in our journey. Due to the incredible trust from our growing list of partners and the influx of new brands joining our portfolio, we have officially begun an expansion of our headquarters.

This isn't just about moving to a new space; it’s a strategic expansion to provide a higher level of dedicated service.

Why We're Expanding:
The construction you see in the photos is the physical manifestation of our commitment to you. The new, larger headquarters will allow us to:
Accommodate a Growing Team
Enhance Operational Efficiency
Host New Brands & Opportunities

Our Promise to Our Partners:
This expansion is for you. We are investing in our physical foundation so that as your business grows, our support improves every step of the way.

Stay Tuned for the Reveal! APRIL 2026!
Website: www.alkhairphilippines.com
Facebook and Instagram: ALKHAIRPH`
    },
    {
      slug: "modelcamp",
      img: "/Clients/News/camp.jpg",
      date: "April 11, 2026 (Saturday)",
      publishDate: "2026-04-11",
      title: "ModelCamp",
      desc: `Unleash Your Potential: LuminoStudios | ModelCamp is Now Scouting!

Are you ready to step into the spotlight? LuminoStudios | ModelCamp, powered by Alkhair Philippines, is officially calling for fresh talent!

We are on the hunt for:
- Aspiring Models
- Content Creators

Why Join LuminoStudios | ModelCamp?
Professional Exposure
Skill Development
Collaborative Environment

This is more than just a casting call. It’s an opportunity to grow under Alkhair Philippines.

Ready to Join Us?
Message us now via AlkhairPH or LuminoStudiosPH.`
    }
  ]

  const today = new Date().toISOString().split("T")[0]

  const filteredNews = newsData.filter(item => {
    return item.publishDate <= today
  })

  filteredNews.sort((a, b) => b.publishDate.localeCompare(a.publishDate))

  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  // ✅ AUTO OPEN FROM LINK (works even for upcoming)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const slug = params.get("news")

    if (slug) {
      const found = newsData.find(n => n.slug === slug)
      if (found) {
        setSelectedNews(found)
      }
    }
  }, [])

  return (
    <section id="news" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest mt-2">Latest News</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Latest News</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6 py-4">
              {filteredNews.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_32%] min-w-0 bg-white/5 border border-white/10 rounded-lg shadow cursor-pointer flex flex-col"
                  onClick={() => {
                    setSelectedNews(item)
                    window.history.pushState(null, "", `?news=${item.slug}`)
                  }}
                >
                  <div className="w-full aspect-[10/12] overflow-hidden rounded-t-lg">
                    <img src={item.img} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-white/70">
                      {item.date}
                      {item.publishDate > today && (
                        <span className="ml-2 text-yellow-400">(Upcoming)</span>
                      )}
                    </p>
                    <h3 className="text-white font-semibold mt-2">{item.title}</h3>
                    <p className="text-sm text-white/80 line-clamp-2 mt-2 whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 text-white text-3xl z-10 bg-transparent p-0 m-0 border-0"
          >
            <FiArrowLeft />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 text-white text-3xl z-10 bg-transparent p-0 m-0 border-0"
          >
            <FiArrowRight />
          </button>
        </div>

        {selectedNews && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg relative">
              <button
                onClick={() => {
                  setSelectedNews(null)
                  window.history.pushState(null, "", window.location.pathname)
                }}
                className="absolute top-3 right-3 text-white text-xl z-10"
              >
                ✕
              </button>

              <div className="w-full bg-black flex items-center justify-center rounded-t-xl p-2">
                <img
                  src={selectedNews.img}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <p className="text-xs text-white/70">{selectedNews.date}</p>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedNews.title}</h3>
                <p className="text-white whitespace-pre-line mt-4">{selectedNews.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}