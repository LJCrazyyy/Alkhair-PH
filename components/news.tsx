import { Button } from "@/components/ui/button"

export function News() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">NEWS AND EVENTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-5xl text-white font-bold">AK</span>
              </div>
              <p className="text-gray-400">Alkhair eCommerce</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                ACCREDITED TSP PROVIDER
              </h3>
              <p className="text-xl text-gray-400">
                FOR LAZADA, SHOPEE AND TIKTOK
              </p>
            </div>

            <blockquote className="text-gray-400 text-lg leading-relaxed border-l-4 border-white pl-4">
              &ldquo;Proud to be an accredited Third Party Service provider enabling brands 
              to maximize their eCommerce potential through professional livestreaming 
              and account management services.&rdquo;
            </blockquote>

            <div className="text-gray-500">
              By <span className="text-white font-semibold">Christian Kitch Marquez</span>
              <br />
              Chief Operating Officer
            </div>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
