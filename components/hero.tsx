"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const slides = [
  { image: "/Clients/Home/Website-Developmet.png", width: 1920, height: 1080 },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length)

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full flex items-center justify-center overflow-hidden mt-16 md:mt-0"
    >
      {/* Responsive Image */}
      <div className="w-full max-w-[1920px]">
        <Image
          src={slides[currentSlide].image}
          alt="Hero Slide"
          width={slides[currentSlide].width}
          height={slides[currentSlide].height}
          sizes="100vw"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Decorative Blur Effects */}
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
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 p-0 outline-none bg-transparent border-none"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 p-0 outline-none bg-transparent border-none"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

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
            aria-current={index === currentSlide ? "true" : undefined}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
          />
        ))}
      </div>
    </section>
  )
}