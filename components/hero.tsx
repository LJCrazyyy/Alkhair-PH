"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const slides = [
  {
    title: "ECOMMERCE & DIGITAL SOLUTIONS",
    subtitle:
      "Powering brands with live selling, digital marketing, creative content, and growth-focused ecommerce solutions.",
    image: "/Clients/Home/WebsiteDesign.png",
  },
  {
    title: "ONLINE SELLING / STREAMING SOLUTIONS",
    subtitle: "Interactive live selling that boosts engagement, drives instant purchases, and turns viewers into loyal customers.",
    image: "/Clients/Home/OnlineStreaming.png",
  },
  {
    title: "WEBSITE DESIGN & DEVELOPMENT",
    subtitle: "High-converting, mobile-friendly websites with sleek design and seamless UX that turn visitors into customers.",
    image: "/Clients/Home/WebsiteDesign.png",
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT & PAID ADS (DIGITAL MANAGEMENT)",
    subtitle: "Scroll-stopping content and targeted ads that increase engagement, generate leads, and drive more sales.",
    image: "/Clients/Home/Ads.png",
  },
  {
    title: "FULFILLMENT & CUSTOMER SUPPORT",
    subtitle: "Efficient order processing and responsive support for a seamless customer experience that builds trust and loyalty.",
    image: "/Clients/Home/CustomerSupport.png",
  },
  {
    title: "CREATIVE CONTENT & PRODUCT SHOOTS",
    subtitle: "Professional photos and videos that showcase your brand, build credibility, and drive engagement and conversions.",
    image: "/Clients/Home/CreativeContent.png",
  },
  {
    title: "ANALYTICS, INSIGHTS & BUSINESS INTELLIGENCE (DIGITAL MANAGEMENT)",
    subtitle: "Data-driven insights that reveal opportunities, improve performance, and help you scale with confidence.",
    image: "/Clients/Home/Analytics.png",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

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
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/60" />

      {/* Decorative blur */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-40 md:w-72 h-40 md:h-72 bg-gray-700/10 rounded-full blur-3xl transition-all duration-1000 ${heroVisible ? 'animate-float' : ''}`} />
        <div className={`absolute bottom-20 right-10 w-60 md:w-96 h-60 md:h-96 bg-gray-600/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${heroVisible ? 'animate-float' : ''}`} />
      </div>

      {/* Content */}
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${heroVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="text-center max-w-4xl mx-auto">

          {/* Slides */}
          <div className="relative min-h-[200px] md:min-h-[250px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0"
                }`}
              >
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-500 ${heroVisible ? 'animate-fade-in-up' : ''}`}>
                  {slide.title}
                </h1>

                <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 transition-all duration-500 delay-200 ${heroVisible ? 'animate-fade-in-up' : ''}`}>
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className={`flex items-center justify-center gap-6 mt-12 md:mt-16 transition-all duration-500 delay-400 ${heroVisible ? 'animate-scale-in' : ''}`}>

            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide
                      ? "bg-white scale-110"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}