import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import  Clients  from "@/components/clients"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { Careers } from "@/components/careers"  
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Clients />
      <News />
      <Partners />
      <Careers />
      <Contact />
    </main>
  )
}
