"use client"
import { useState } from "react"

export function News() {

  const featured = {
    img: "/Clients/News/hiring.jpg",
    date: "April 1, 2026 (Wednesday)",
    publishDate: "2026-04-01",
    title: "We're Hiring!",
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
  }

  const newsData = [

    {
      img: "/Clients/News/ceo.jpg",
      date: "April 5, 2026 (Sunday)",
      publishDate: "2026-04-05",
      title: "A Message From Our CEO",
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
      img: "/Clients/News/office.jpg",
      date: "April 8, 2026 (Wednesday)",
      publishDate: "2026-04-08",
      title: "New Headquarters Expansion",
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
      img: "/Clients/News/camp.jpg",
      date: "April 11, 2026 (Saturday)",
      publishDate: "2026-04-11",
      title: "LuminoStudios | ModelCamp is Now Scouting!",
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

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const publishedNews = newsData
    .filter(item => {
      const itemDate = new Date(item.publishDate)
      itemDate.setHours(0, 0, 0, 0)
      return itemDate <= today
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

  const [selectedNews, setSelectedNews] = useState<typeof featured | typeof newsData[0] | null>(null)

  return (
    <section id="news" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">News</h2>
        </div>

        {/* FEATURED */}
        <div className="relative mb-14">
          <img src={featured.img} className="w-full aspect-[16/9] object-contain" />

          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 p-6 max-w-md">
            <p className="text-xs text-white/70">{featured.date}</p>
            <h3 className="text-3xl text-white font-bold leading-tight">
              {featured.title}
            </h3>

            <p className="text-sm text-white whitespace-pre-line line-clamp-2 mt-2">
              {featured.desc}
            </p>

            <button
              onClick={() => setSelectedNews(featured)}
              className="text-xs text-white underline mt-3"
            >
              See more
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {publishedNews.map((item, index) => (
            <div key={index} onClick={() => setSelectedNews(item)} className="cursor-pointer">

              <img src={item.img} className="w-full aspect-[3/4] object-contain" />

              <p className="text-xs text-white/70 mt-2">{item.date}</p>
              <h3 className="text-white font-semibold">{item.title}</h3>

              <p className="text-sm text-white/80 line-clamp-2 whitespace-pre-line">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* MODAL */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">

            <div className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg relative">

              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-3 right-3 text-white text-xl z-10"
              >
                ✕
              </button>

              <div className="w-full h-[250px] md:h-[350px] overflow-hidden rounded-t-xl">
                <img src={selectedNews.img} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <p className="text-xs text-white/70">{selectedNews.date}</p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {selectedNews.title}
                </h3>

                <p className="text-white whitespace-pre-line mt-4">
                  {selectedNews.desc}
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  )
}