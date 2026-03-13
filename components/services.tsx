"use client"

import { useState } from "react"
import {
  Video,
  Globe,
  User,
  Warehouse,
  Film,
  BarChart3,
  X,
  type LucideIcon
} from "lucide-react"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

type Service = {
  icon: LucideIcon
  title: string
  description: string
  image?: string
}

const mainServices: Service[] = [
  {
    icon: Video,
    title: "ONLINE SELLING / STREAMING SOLUTIONS",
    description: `Our Live Selling / Streaming service brings your brand to life in real time! We turn ordinary product showcases into exciting,
    interactive shopping experiences where customers can watch, engage, ask questions, and buy instantly.
    It’s fast, dynamic, and built to capture attention helping you boost sales, grow your online presence, and turn viewers into loyal fans.`,
    image: "/Clients/Services/Selling.png"
  },
  {
    icon: Globe,
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description: `We build powerful, high-converting websites that don’t just look good, they work hard for your business.`,
    image: "/Clients/Services/Web.png"
  },
  {
    icon: User,
    title: "SOCIAL MEDIA MANAGEMENT & PAID ADS (DIGITAL MANAGEMENT)",
    description: `We create scroll-stopping content, manage your platforms strategically, and run high-performing paid ads that reach the right audience at the right time. 
    More engagement, more leads, more sales that’s the goal.`,
    image: "/Clients/Services/Ads.png"
  },
  {
    icon: Warehouse,
    title: "FULFILLMENT & CUSTOMER SUPPORT",
    description: `We handle order processing, coordination, and responsive customer support to ensure every buyer has a seamless experience.
    Fast, reliable, and customer-focused we help you build trust and repeat business.`,
    image: "/Clients/Services/Support.png"
  },
  {
    icon: Film,
    title: "CREATIVE CONTENT & PRODUCT SHOOTS",
    description: `Bring your brand to life with Alkhair PH’s creative content and professional product shoots.
    From eye-catching visuals to engaging videos, we produce high-quality content that captures attention, builds credibility, and drives conversions.`,
    image: "/Clients/Services/Content.png"
  },
  {
    icon: BarChart3,
    title: "ANALYTICS, INSIGHTS & BUSINESS INTELLIGENCE (DIGITAL MANAGEMENT)",
    description: `We turn data into direction. Our analytics and business intelligence solutions help you understand performance, identify opportunities, and make smarter decisions. Clear insights, measurable growth, and strategies backed by real numbers so you can scale with confidence.`,
    image: "/Clients/Services/Analytics.png"
  }
]

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const { containerRef, visibleItems } = useStaggeredAnimation(mainServices.length, 0.15)

  return (
    <section id="services" className="py-24 bg-background">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-widest mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer group bg-card border border-border rounded-xl overflow-hidden hover:bg-accent transition-all duration-500 hover:border-gray-600 hover:scale-105 hover:shadow-2xl ${
                visibleItems.has(index) ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: visibleItems.has(index) ? `${index * 0.15}s` : '0s'
              }}
            >
              {/* Image */}
              <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden mb-6 bg-white/5 rounded-lg">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Icon fallback */}
              {!service.image && (
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              )}

              <h3 className="text-white font-semibold text-base leading-tight px-4 pb-6">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-card border border-border rounded-2xl 
                        w-full max-w-3xl 
                        max-h-[85vh] overflow-y-auto
                        p-12 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>

              {/* Image */}
              {selectedService.image ? (
                <div className="w-full h-64 mb-8 overflow-hidden rounded-xl">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 mb-8 bg-white/10 rounded-full flex items-center justify-center">
                  <selectedService.icon className="w-10 h-10 text-white" />
                </div>
              )}

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedService.title}
              </h3>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {selectedService.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}