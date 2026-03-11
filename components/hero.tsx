"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const slides = [
  { image: "/Clients/Home/Website-Developmet.png" },
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
      className="relative w-full h-[30vh] md:h-screen flex items-center justify-center overflow-hidden mt-15 md:mt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-screen  overflow-hidden">
        <Image
          src={slides[currentSlide].image}
          alt="Hero Slide"
          fill
          sizes="100vw"
          priority
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-10 left-4 sm:left-10 w-32 sm:w-52 md:w-72 h-32 sm:h-52 md:h-72 bg-gray-700/10 rounded-full blur-3xl transition-all duration-1000 ${
            heroVisible ? "animate-float" : ""
          }`}
        />
        <div
          className={`absolute bottom-10 right-4 sm:right-10 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-gray-600/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            heroVisible ? "animate-float" : ""
          }`}
        />
      </div>

      {/* LEFT ARROW */}
      <div className="absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </Button>
      </div>

      {/* RIGHT ARROW */}
      <div className="absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </Button>
      </div>

      {/* Indicators */}
      <div
        className={`absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 transition-all duration-500 ${
          heroVisible ? "animate-scale-in" : ""
        }`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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