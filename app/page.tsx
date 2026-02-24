import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import  Clients  from "@/components/clients"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { Careers } from "@/components/careers"  
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Clients />
      <News />
      <Partners />
      <Careers />
      <Contact />
      <Footer />
    </main>
  )
}
