export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-widest mb-4">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            WHY CHOOSE ALKHAIR ECOMMERCE SERVICES?
          </h2>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
            Alkhair eCommerce Marketing is an agency that enables eCommerce and livestreaming 
            Commerce initiatives for multiple brands as accredited TSP (Third Party Service) provider 
            in eCommerce marketplace platforms Lazada, Shopee and TikTok for store creation, revamp, 
            account management including livestreaming and liveselling services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-4xl text-white font-bold">AK</span>
              </div>
              <p className="text-gray-400">eCommerce & Livestreaming Solutions</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              We offer end to end service
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Providing premier livestreaming and account management services by bridging 
              brands to online markets through TikTok, Shopee, and Lazada in the best possible way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
