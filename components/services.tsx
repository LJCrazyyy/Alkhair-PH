import {
  Video,
  Globe,
  User,
  Warehouse,
  Film,
  BarChart3
} from "lucide-react"

const mainServices = [
  { icon: Video, title: "ONLINE SELLING / STREAMING" },
  { icon: Globe, title: "WEBSITE DEVELOPMENT" },
  { icon: User, title: "SOCIAL MEDIA MANAGEMENT & PAID ADS" },
  { icon: Warehouse, title: "FULFILLMENT & CUSTOMER SUPPORT" },
  { icon: Film, title: "CREATIVE CONTENT & PRODUCT SHOOTS" },
  { icon: BarChart3, title: "ANALYTICS, INSIGHTS & BUSINESS INTELLIGENCE" },
]

export function Services() {
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

        {/* CLEAN 3x2 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 hover:border-gray-600"
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

      </div>
    </section>
  )
}
