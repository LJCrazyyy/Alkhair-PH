"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "PREMIER LIVE SELLING AGENCY IN THE PHILIPPINES",
    subtitle:
      "Driving sales on TikTok, Shopee and Lazada through dynamic, interactive events",
    image: "/Clients/live1.png",
  },
  {
    title: "END-TO-END ECOMMERCE & LIVESTREAMING SOLUTIONS",
    subtitle: "Accredited TSP provider for Lazada, Shopee and TikTok",
    image: "/Clients/live2.png",
  },
  {
    title: "TURN VIEWERS INTO LOYAL CUSTOMERS",
    subtitle: "Expertise in storytelling and audience engagement",
    image: "/Clients/live3.png",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length)

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Original Decorative Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-lg"
          >
            LEARN MORE
          </Button>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-white hover:bg-white/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
