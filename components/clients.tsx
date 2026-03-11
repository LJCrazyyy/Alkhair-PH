"use client";
import { useState } from "react";

type Brand = {
  name: string;
  image: string;
  description: string;
};

const topshion = "TOPSHION is a leading e-commerce brand specializing in trendy fashion and lifestyle products. With a commitment to quality and customer satisfaction, TOPSHION offers a wide range of stylish apparel, accessories, and home goods.";
const bestDeals = "Best Deals is a premier online shopping destination that offers unbeatable discounts on a wide variety of products.";
const newyorkArmy = "NEW YORK ARMY is a dynamic e-commerce brand that caters to the urban fashion scene.";
const wowHappy = "Wow Happy is a vibrant e-commerce brand that specializes in fun and unique products.";
const airwell = "Airwell is a leading e-commerce brand specializing in high-quality air purifiers and wellness products.";
const theglitterCart = "The Glitter Cart is a vibrant e-commerce brand that specializes in providing high-quality glitter and craft supplies.";
const theSprinklerCart = "The Sprinkler Cart offers a wide variety of gardening and outdoor products.";
const lactaGlow = "LactaGlow is a premium e-commerce brand that specializes in skincare products.";
const mcPetBotique = "MC Pet Botique is a leading e-commerce brand that specializes in high-quality pet products.";
const momiloMio = "Momilo Mio offers a delightful selection of baby and children's products.";
const camou = "CAMOU is a cutting-edge e-commerce brand that specializes in camouflage-inspired products.";
const jpsPhilippines = "JPS Philippines is a leading e-commerce brand that offers a wide range of products.";
const pariscents = "Pariscents is a luxurious e-commerce brand that specializes in high-end fragrances.";
const stay24 = "STAY24 provides high-quality travel and lifestyle products.";
const heySkin = "Hey Skin! specializes in fun and effective skincare products.";

const bananaSisters = "Banana Sisters offers quirky lifestyle and fashion items.";
const beautyChoice = "Beauty Choice provides high-quality beauty products.";
const beautySeoul = "Beauty Seoul specializes in Korean beauty products.";
const brew = "BREW provides premium coffee and tea products.";
const choiceBeautyCollections = "Choice Beauty Collections offers curated beauty items.";
const carpetKing = "Carpet King provides high-quality carpets and rugs.";
const chintan = "Chintan offers stylish home and lifestyle products.";
const deliveryma = "Deliveryma provides fast and reliable delivery services.";
const dragonTrading = "Dragon Trading offers various electronics, fashion, and home goods.";
const dermaBalm = "DermaBalm specializes in soothing skincare products.";
const euroo = "Euroo offers fashion and lifestyle products.";
const familyFus = "Family Fus provides products designed for families.";
const goli = "Goli focuses on health and wellness products.";
const grethaUkayUkay = "Gretha Ukay-Ukay sells sustainable second-hand clothing.";
const harmonyAndWellness = "Harmony & Wellness promotes holistic health.";
const itLuggage = "IT LUGGAGE provides travel luggage and accessories.";
const kaisavilla = "Kaisavilla offers fashion and lifestyle items.";
const kush = "KUSH sells cannabis-inspired lifestyle products.";
const perfy = "Perfy specializes in perfumes and fragrances.";
const sniff = "Sniff offers high-quality pet products.";
const squadHouse = "Squad House provides products for social gatherings.";
const sakuraBeauty = "Sakura Beauty offers premium beauty products.";
const trueVision = "True Vision sells eyewear and vision products.";
const willowPetFood = "Willow PetFood provides premium pet nutrition.";
const usej = "USEJ sells electronics, fashion, and home products.";
const yatengPH = "YATENG PH offers various e-commerce products.";
const zone = "ZONE. provides stylish lifestyle products.";

const clientBrands = [
  { name: "CAMOU", image: "/Clients/CAMOU.png", description: camou },
  { name: "Momilo Mio", image: "/Clients/Momilo-Mio.png", description: momiloMio },

  { name: "Best Deals", image: "/Clients/Best-Deals.png", description: bestDeals },
  { name: "TOPSHION", image: "/Clients/Topshion.png", description: topshion },
  { name: "The Glitter Cart", image: "/Clients/The-Glitter-Cart.png", description: theglitterCart },
  { name: "NEW YORK ARMY", image: "/Clients/Newyork-Army.png", description: newyorkArmy },
  { name: "MC PET BOTIQUE", image: "/Clients/MC-Pet.png", description: mcPetBotique },
  { name: "Wow Happy", image: "/Clients/Wow-Happy.png", description: wowHappy },
  { name: "Airwell", image: "/Clients/Airwell.png", description: airwell },
  { name: "The Sprinkler Cart", image: "/Clients/The-Sprinkle-Cart.png", description: theSprinklerCart },
  { name: "LactaGlow", image: "/Clients/LactaGlow.png", description: lactaGlow },
  { name: "JPS Philippines", image: "/Clients/JPS.png", description: jpsPhilippines },
  { name: "Pariscents", image: "/Clients/Pariscents.png", description: pariscents },
  { name: "STAY24", image: "/Clients/Stay24.png", description: stay24 },
  { name: "Hey Skin!", image: "/Clients/Hey-Skin!.png", description: heySkin },

  { name: "Banana Sisters", image: "/Clients/Banana-Sisters.png", description: bananaSisters },
  { name: "Beauty choice", image: "/Clients/Beauty-Choice.png", description: beautyChoice },
  { name: "Beauty Seoul", image: "/Clients/Beauty-Seoul.png", description: beautySeoul },
  { name: "BREW", image: "/Clients/Brew.png", description: brew },
  { name: "Choice Beauty Collections", image: "/Clients/Choice-Beauty-Collections.png", description: choiceBeautyCollections },
  { name: "Carpet King", image: "/Clients/Carpet-King.png", description: carpetKing },
  { name: "Chintan", image: "/Clients/Chintan.png", description: chintan },
  { name: "Deliveryma", image: "/Clients/Deliveryma.png", description: deliveryma },
  { name: "DRAGON Trading", image: "/Clients/Dragon-Trading.png", description: dragonTrading },
  { name: "DermaBalm", image: "/Clients/DermaBalm.png", description: dermaBalm },
  { name: "euroo", image: "/Clients/euroo.png", description: euroo },
  { name: "Family Fus", image: "/Clients/Family-fus.png", description: familyFus },
  { name: "Goli", image: "/Clients/Goli.png", description: goli },
  { name: "Gretha Ukay-Ukay", image: "/Clients/Gretha-Ukay-Ukay.png", description: grethaUkayUkay },
  { name: "HARMONY & WELLNESS", image: "/Clients/Harmone-&-Wellness.png", description: harmonyAndWellness },
  { name: "IT LUGGAGE", image: "/Clients/IT-Luggage.png", description: itLuggage },
  { name: "KAISAVILLA", image: "/Clients/Kaisavilla.png", description: kaisavilla },
  { name: "KUSH", image: "/Clients/Kush.png", description: kush },
  { name: "Perfy", image: "/Clients/Perfy.png", description: perfy },
  { name: "Sniff", image: "/Clients/Sniff.png", description: sniff },
  { name: "SQUAD HOUSE", image: "/Clients/Squad-House.png", description: squadHouse },
  { name: "Sakura Beauty", image: "/Clients/Sakura-Beauty.png", description: sakuraBeauty },
  { name: "TRUE VISION", image: "/Clients/True-Vision.png", description: trueVision },
  { name: "Willow PetFood", image: "/Clients/Willow-Petfood.png", description: willowPetFood },
  { name: "USEJ", image: "/Clients/USEJ.png", description: usej },
  { name: "YATENG PH", image: "/Clients/Yateng-PH.png", description: yatengPH },
  { name: "ZONE.", image: "/Clients/Zone.png", description: zone },
];

const bigLogos = [
  "CAMOU","Momilo Mio","Best Deals","TOPSHION","The Glitter Cart","MC PET BOTIQUE","Wow Happy",
  "NEW YORK ARMY","Airwell","The Sprinkler Cart","LactaGlow","JPS Philippines","Pariscents","STAY24","Hey Skin!"
];

const isBigLogo = (name: string) => bigLogos.includes(name);

export default function Clients() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const bigBrandItems = clientBrands.filter(b => isBigLogo(b.name));
  const normalBrandItems = clientBrands.filter(b => !isBigLogo(b.name));

  const topBigLogos = bigBrandItems.slice(0,7);
  const bottomBigLogos = bigBrandItems.slice(7);

  return (
    <section id="clients" className="py-24 bg-card">
      <div className="container mx-auto px-4">

        <p className="text-center text-gray-500 uppercase tracking-widest mb-12">
          OUR TRUSTED CLIENTS
        </p>

        {/* TOP BIG LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 justify-items-center mb-10">
          {topBigLogos.map(brand => (
            <div key={brand.name} onClick={()=>setSelectedBrand(brand)} className="cursor-pointer flex flex-col items-center w-32">
              <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md mb-2">
                <img src={brand.image} className="w-full h-full object-contain"/>
              </div>
              <p className="text-gray-400 text-sm text-center">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM BIG LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 justify-items-center mb-16">
          {bottomBigLogos.map(brand => (
            <div key={brand.name} onClick={()=>setSelectedBrand(brand)} className="cursor-pointer flex flex-col items-center w-32">
              <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md mb-2">
                <img src={brand.image} className="w-full h-full object-contain"/>
              </div>
              <p className="text-gray-400 text-sm text-center">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* NORMAL LOGOS */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          {normalBrandItems.map(brand => (
            <div key={brand.name} onClick={()=>setSelectedBrand(brand)} className="cursor-pointer p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={brand.image} className="w-full h-full object-contain"/>
                </div>
                <p className="text-gray-400 text-xs truncate">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedBrand && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-background max-w-3xl w-full rounded-2xl p-8 relative">
            <button onClick={()=>setSelectedBrand(null)} className="absolute top-4 right-4 text-gray-400 text-2xl">✕</button>

            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img src={selectedBrand.image} className="w-full h-full object-contain"/>
              </div>
              <h3 className="text-2xl font-bold">{selectedBrand.name}</h3>
            </div>

            <p className="text-gray-300">{selectedBrand.description}</p>
          </div>
        </div>
      )}

    </section>
  );
}