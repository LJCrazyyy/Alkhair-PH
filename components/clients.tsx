"use client";
import { useState } from "react";

type Brand = {
  name: string;
  image: string;
  description: string;
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const clientBrands = [
  { name: "Airwell", image: "/Clients/Airwell.png", description: lorem },
  { name: "Banana Sisters", image: "/Clients/Banana-Sisters.png", description: lorem },
  { name: "Best Deals", image: "/Clients/Best-Deals.png", description: lorem },
  { name: "Beauty choice", image: "/Clients/Beauty-Choice.png", description: lorem },
  { name: "Beauty Seoul", image: "/Clients/Beauty-Seoul.png", description: lorem },
  { name: "BREW", image: "/Clients/Brew.png", description: lorem },
  { name: "Choice Beauty Collections", image: "/Clients/Choice-Beauty-Collections.png", description: lorem },
  { name: "CAMOU", image: "/Clients/CAMOU.png", description: lorem },
  { name: "Carpet King", image: "/Clients/Carpet-King.png", description: lorem },
  { name: "Chintan", image: "/Clients/Chintan.png", description: lorem },
  { name: "Deliveryma", image: "/Clients/Deliveryma.png", description: lorem },
  { name: "DRAGON Trading", image: "/Clients/Dragon-Trading.png", description: lorem },
  { name: "DermaBalm", image: "/Clients/DermaBalm.png", description: lorem },
  { name: "euroo", image: "/Clients/euroo.png", description: lorem },
  { name: "Family Fus", image: "/Clients/Family-Fus.png", description: lorem },
  { name: "Goli", image: "/Clients/Goli.png", description: lorem },
  { name: "Gretha Ukay-Ukay", image: "/Clients/Gretha-Ukay-Ukay.png", description: lorem },
  { name: "HARMONY & WELLNESS", image: "/Clients/Harmone-&-Wellness.png", description: lorem },
  { name: "Hey Skin!", image: "/Clients/Hey-Skin!.png", description: lorem },
  { name: "IT LUGGAGE", image: "/Clients/IT-Luggage.png", description: lorem },
  { name: "JPS Philippines", image: "/Clients/JPS.png", description: lorem },
  { name: "KAISAVILLA", image: "/Clients/Kaisavilla.png", description: lorem },
  { name: "KUSH", image: "/Clients/Kush.png", description: lorem },
  { name: "LactaGlow", image: "/Clients/LactaGlow.png", description: lorem },
  { name: "MC PET", image: "/Clients/MC-Pet.png", description: lorem },
  { name: "Momilo Mio", image: "/Clients/Momilo-Mio.png", description: lorem },
  { name: "NEW YORK ARMY", image: "/Clients/Newyork-Army.png", description: lorem },
  { name: "Pariscents", image: "/Clients/Pariscents.png", description: lorem },
  { name: "Perfy", image: "/Clients/Perfy.png", description: lorem },
  { name: "Sakura Beauty", image: "/Clients/Sakura-Beauty.png", description: lorem },
  { name: "Sniff", image: "/Clients/Sniff.png", description: lorem },
  { name: "SQUAD HOUSE", image: "/Clients/Squad-House.png", description: lorem },
  { name: "STAY24", image: "/Clients/Stay24.png", description: lorem },
  { name: "The Sprinkler Cart", image: "/Clients/The-Sprinkle-Cart.png", description: lorem },
  { name: "The Glitter Cart", image: "/Clients/The-Glitter-Cart.png", description: lorem },
  { name: "TOPSHION", image: "/Clients/Topshion.png", description: lorem },
  { name: "TRUE VISION", image: "/Clients/True-Vision.png", description: lorem },
  { name: "Willow PetFood", image: "/Clients/Willow-Petfood.png", description: lorem },
  { name: "USEJ", image: "/Clients/USEJ.png", description: lorem },
  { name: "Wow Happy", image: "/Clients/Wow-Happy.png", description: lorem },
  { name: "YATENG PH", image: "/Clients/Yateng-PH.png", description: lorem },
  { name: "ZONE.", image: "/Clients/Zone.png", description: lorem },
  { name: "You Ling You Shi.", image: "/Clients/Zone.png", description: lorem },
];

export default function Clients() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return (
    <section id="clients" className="py-24 bg-card">
      <div className="container mx-auto px-4">

        <p className="text-center text-gray-500 uppercase tracking-widest mb-12">
          FEATURED CLIENTS
        </p>

        {/* GRID */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
          {clientBrands.map((brand) => (
            <div
              key={brand.name}
              onClick={() => setSelectedBrand(brand)}
              className="cursor-pointer bg-background border border-border rounded-lg p-4 flex items-center justify-center aspect-square hover:border-gray-500 transition-colors"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                <p className="text-gray-400 text-xs font-medium truncate">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* MODAL */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-background max-w-3xl w-full rounded-2xl p-10 relative shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-8 mb-8">
              <div className="w-28 h-28 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={selectedBrand.image}
                  alt={selectedBrand.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {selectedBrand.name}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-base text-gray-300 leading-relaxed">
              {selectedBrand.description}
            </p>

          </div>
        </div>
      )}
    </section>
  );
}
