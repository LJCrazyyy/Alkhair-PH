const clientBrands = [
  "Airwell",
  "Banana Sisters",
  "Best Deals",
  "Beauty choice",
  "BREW",
  "Cathy",
  "CAMOU",
  "Carpet King",
  "Chintan",
  "Deliveryma",
  "DRAGON Trading",
  "DermaBalm",
  "euroo",
  "Family Fus",
  "Goli",
  "Gretha Ukay-Ukay",
  "HARMONE & WELLNESS",
  "Hey Skin!",
  "IT LUGGAGE",
  "JPS Philippines",
  "KAISAVILLA",
  "KUSH",
  "LactaGlow",
  "MC PET",
  "Momilo Mio",
  "NEW YORK ARMY",
  "Pariscents",
  "Perfy",
  "Sakura Beauty",
  "Sniff",
  "SQUAD HOUSE",
  "STAY24",
  "The Sprinkler Cart",
  "TOPSHION",
  "TRUE VISION",
  "Unknown",
  "Unknown",
  "USEJ",
  "Wow Happy",
  "YATENG PH",
  "ZONE.",
]

export function Clients() {
  return (
    <section id="clients" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest mb-4">FEATURED CLIENTS</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
          {clientBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-4 flex items-center justify-center aspect-square hover:border-gray-500 transition-colors"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{brand.charAt(0)}</span>
                </div>
                <p className="text-gray-400 text-xs font-medium leading-tight truncate max-w-full">
                  {brand}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
