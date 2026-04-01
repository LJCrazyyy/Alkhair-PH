"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function News() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const [filteredNews, setFilteredNews] = useState<any[]>([])

  // 👉 helper: get YYYY-MM-DD
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const today = new Date()

  // 👉 next Wednesday
  const getNextWednesday = () => {
    const d = new Date()
    const day = d.getDay()
    const diff = (3 - day + 7) % 7 || 7 // 3 = Wednesday
    d.setDate(d.getDate() + diff)
    return formatDate(d)
  }

  const newsData = [
    {
      date: formatDate(today), // ✅ today (Wednesday hiring)
      img: "/Clients/News/hiring.jpg",
      title: "Join Our Team: E-Commerce Live Sellers",
      desc: "We are looking for confident and driven live sellers who are passionate about engaging audiences and driving sales.",
    },
    {
      date: formatDate(new Date(today.setDate(today.getDate() + (7 - today.getDay())))), // Sunday
      img: "/Clients/News/ceo.jpg",
      title: "Word from the CEO",
      desc: "Led by Founder and CEO Mrs. Alby Abalado, Alkhair PH focuses on strategy and growth.",
    },
    {
      date: getNextWednesday(), // ❗ next Wednesday only
      img: "/Clients/News/office.jpg",
      title: "Expansion & Growth",
      desc: "Alkhair Philippines is expanding its headquarters to support a growing team.",
    },
    {
      date: formatDate(new Date(today.setDate(today.getDate() + (6 - today.getDay())))), // Saturday
      img: "/Clients/News/camp.jpg",
      title: "LuminoStudios | ModelCamp",
      desc: "Scouting aspiring models and content creators.",
    },
  ]

  useEffect(() => {
    const todayStr = formatDate(new Date())

    const todayNews = newsData.filter(item => item.date === todayStr)

    setFilteredNews(todayNews)
  }, [])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="news" className="py-16 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            TODAY'S NEWS
          </h2>
        </div>

        {filteredNews.length === 0 ? (
          <p className="text-center text-gray-400">
            No news scheduled for today.
          </p>
        ) : (
          <div className="max-w-lg mx-auto">

            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent>
                {filteredNews.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card border border-border rounded-xl overflow-hidden">

                      <div className="w-full bg-black/10 flex justify-center items-center p-2">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>

                      <div className="p-4 space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="flex justify-center gap-2 mt-4">
              {filteredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index
                      ? "w-6 bg-white"
                      : "w-2 bg-gray-500"
                  }`}
                />
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  )
}