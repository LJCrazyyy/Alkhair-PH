import { 
  Camera, 
  Clock, 
  Monitor, 
  Video, 
  Megaphone, 
  FileEdit, 
  BarChart3, 
  Headphones 
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Camera,
    title: "CONTENT AND PRODUCTION",
  },
  {
    icon: Clock,
    title: "CUSTOMER SUPPORT",
  },
  {
    icon: Monitor,
    title: "ACCOUNT MANAGEMENT",
  },
  {
    icon: Video,
    title: "LIVESTREAMING AND LIVESELLING",
  },
  {
    icon: Megaphone,
    title: "DIGITAL CAMPAIGN COORDINATION",
  },
  {
    icon: FileEdit,
    title: "STORE CREATION AND REVAMP",
  },
  {
    icon: BarChart3,
    title: "ANALYTICS, INSIGHTS AND BUSINESS INTELLIGENCE",
  },
  {
    icon: Headphones,
    title: "PHOTOSHOOT AND CONTENT CREATION",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:bg-accent transition-all duration-300 hover:border-gray-600"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            SEE ALL SERVICES
          </Button>
        </div>
      </div>
    </section>
  )
}
