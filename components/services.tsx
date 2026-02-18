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

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

const mainServices: Service[] = [
  {
    icon: Video,
    title: "ONLINE SELLING / STREAMING",
    description: `Our Live Selling / Streaming service brings your brand to life in real time.

We turn ordinary product showcases into exciting, interactive shopping experiences where customers can watch, engage, ask questions, and buy instantly.

Interactive live selling that boosts engagement, drives instant purchases, and turns viewers into loyal customers.`
  },
  {
    icon: Globe,
    title: "WEBSITE DEVELOPMENT",
    description: `We build powerful, high-converting websites that don’t just look good — they work hard for your business.

Fast, mobile-friendly, and sales-driven websites that turn visitors into customers and elevate your brand online.`
  },
  {
    icon: User,
    title: "SOCIAL MEDIA MANAGEMENT & PAID ADS",
    description: `We create scroll-stopping content, manage your platforms strategically, and run high-performing paid ads.

More engagement. More leads. More sales.`
  },
  {
    icon: Warehouse,
    title: "FULFILLMENT & CUSTOMER SUPPORT",
    description: `We handle order processing, coordination, and responsive customer support to ensure every buyer has a seamless experience.

Fast, reliable, and customer-focused service that builds trust and repeat business.`
  },
  {
    icon: Film,
    title: "CREATIVE CONTENT & PRODUCT SHOOTS",
    description: `Professional product photography and engaging videos that capture attention, build credibility, and drive conversions.`
  },
  {
    icon: BarChart3,
    title: "ANALYTICS, INSIGHTS & BUSINESS INTELLIGENCE",
    description: `We turn data into direction.

Clear insights, measurable growth, and smarter decisions backed by real numbers so you can scale with confidence.`
  }
]

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">

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
              className="cursor-pointer group bg-card border border-border rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 hover:border-gray-600"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-white font-semibold text-base leading-tight">
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

              {/* Icon */}
              <div className="w-20 h-20 mb-8 bg-white/10 rounded-full flex items-center justify-center">
                <selectedService.icon className="w-10 h-10 text-white" />
              </div>

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
