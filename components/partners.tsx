"use client"

import Image from "next/image"

const partners = [
  { name: "Lazada", type: "Marketplace", logo: "/Clients/lazada.png" },
  { name: "Shopee", type: "Marketplace", logo: "/Clients/Shopee.png" },
  { name: "TikTok", type: "Social Commerce", logo: "/Clients/TikTok.png" },
]

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest mb-4">CHANNEL PARTNERS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">OUR PARTNERS</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-xl p-8 text-center hover:border-gray-500 transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl flex items-center justify-center overflow-hidden">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <span className="text-3xl font-bold text-white">
                    {partner.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-white font-semibold text-xl mb-1">{partner.name}</h3>
              <p className="text-gray-400 text-sm">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
