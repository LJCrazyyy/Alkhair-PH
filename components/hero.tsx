"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const slides = [
  { image: "/Clients/Home/WebsiteDesign.png" },
  { image: "/Clients/Home/OnlineStreaming.png" },
  { image: "/Clients/Home/Website-Developmet.png" },
  { image: "/Clients/Home/Ads.png" },
  { image: "/Clients/Home/CustomerSupport.png" },
  { image: "/Clients/Home/CreativeContent.png" },
  { image: "/Clients/Home/Analytics.png" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={slides[currentSlide].image}
          alt="Hero Slide"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-40 md:w-72 h-40 md:h-72 bg-gray-700/10 rounded-full blur-3xl transition-all duration-1000 ${
            heroVisible ? "animate-float" : ""
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-60 md:w-96 h-60 md:h-96 bg-gray-600/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            heroVisible ? "animate-float" : ""
          }`}
        />
      </div>

      {/* LEFT ARROW */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>

      {/* RIGHT ARROW */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Indicators bottom */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 transition-all duration-500 ${
          heroVisible ? "animate-scale-in" : ""
        }`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}