"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"
import { CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function News() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState<number>(0)

  const newsData = [
    {
      img: "/Clients/News/ceo.jpg",
      title: "Leadership in Vision",
      desc: "Led by Founder and CEO Mrs. Alby Abalado, Alkhair PH focuses on strategy, storytelling, and building strong brand presence in the digital landscape."
    },
    {
      img: "/Clients/News/office.jpg",
      title: "Expansion & Growth",
      desc: "Alkhair Philippines is currently expanding its headquarters to support a growing team and improve service delivery for partners and brands."
    },
    {
      img: "/Clients/News/camp.jpg",
      title: "LuminoStudios | ModelCamp",
      desc: "Powered by Alkhair Philippines, LuminoStudios | ModelCamp is scouting aspiring models and content creators."
    },
    {
      img: "/Clients/News/hiring.jpg",
      title: "Join Our Team: E-Commerce Live Sellers",
      desc: "We are looking for confident and driven live sellers who are passionate about engaging audiences and driving sales."
    }
  ]

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
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            NEWS AND EVENTS
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="max-w-md mx-auto">

          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >

            <CarouselContent>

              {newsData.map((item, index) => (
                <CarouselItem key={index}>

                  <div className="bg-card border border-border rounded-lg overflow-hidden">

                    {/* IMAGE */}
                    <div className="w-full flex justify-center bg-black/5">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-auto max-w-full h-auto"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="p-3 space-y-1.5">

                      <h3 className="text-sm md:text-base font-semibold text-white leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </CarouselItem>
              ))}

            </CarouselContent>

            <CarouselPrevious className="left-1 scale-75" />
            <CarouselNext className="right-1 scale-75" />

          </Carousel>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-3">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-white"
                    : "w-2 bg-gray-500"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

