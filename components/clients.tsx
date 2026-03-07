"use client";
import { useState } from "react";

type Brand = {
  name: string;
  image: string;
  description: string;
};

const topshion = "TOPSHION is a leading e-commerce brand specializing in trendy fashion and lifestyle products. With a commitment to quality and customer satisfaction, TOPSHION offers a wide range of stylish apparel, accessories, and home goods. The brand is known for its unique designs, affordable prices, and excellent customer service, making it a favorite among fashion-forward shoppers worldwide.";
const bestDeals = "Best Deals is a premier online shopping destination that offers unbeatable discounts on a wide variety of products. From electronics and fashion to home essentials and beauty products, Best Deals provides customers with access to high-quality items at significantly reduced prices. With a user-friendly interface, secure payment options, and fast shipping, Best Deals is the go-to platform for savvy shoppers looking to save big on their purchases."
const newyorkArmy = "NEW YORK ARMY is a dynamic e-commerce brand that caters to the urban fashion scene. Known for its edgy and contemporary designs, NEW YORK ARMY offers a diverse range of clothing and accessories that resonate with the modern consumer. The brand emphasizes quality craftsmanship and innovative styles, making it a popular choice for those seeking to express their individuality through fashion. With a strong online presence and a commitment to customer satisfaction, NEW YORK ARMY continues to grow its loyal customer base worldwide.";
const wowHappy = "Wow Happy is a vibrant e-commerce brand that specializes in fun and unique products designed to bring joy to everyday life. From quirky home decor and playful accessories to innovative gadgets, Wow Happy offers a wide range of items that cater to those with a love for creativity and whimsy. The brand is dedicated to providing high-quality products that not only brighten up spaces but also make great gifts for friends and family. With a focus on customer satisfaction and a commitment to delivering happiness, Wow Happy has become a beloved destination for shoppers looking to add a touch of fun to their lives."; 
const airwell = "Airwell is a leading e-commerce brand specializing in high-quality air purifiers and wellness products. With a commitment to improving indoor air quality, Airwell offers a range of innovative solutions designed to create healthier living environments. The brand is known for its cutting-edge technology, sleek designs, and exceptional performance, making it a trusted choice for customers seeking to enhance their well-being. Airwell's dedication to customer satisfaction and environmental sustainability has solidified its position as a top player in the wellness industry.";
const theglitterCart = "The Glitter Cart is a vibrant e-commerce brand that specializes in providing high-quality glitter and craft supplies. With a commitment to creativity and self-expression, The Glitter Cart offers a wide range of products that cater to artists, crafters, and DIY enthusiasts. The brand is known for its extensive selection of glitter colors, sizes, and types, as well as its dedication to customer satisfaction and exceptional service. Whether you're looking to add sparkle to your projects or find the perfect glitter for your next creation, The Glitter Cart has you covered.";
const theSprinklerCart = "The Sprinkler Cart is a unique e-commerce brand that offers a wide variety of gardening and outdoor products. From innovative watering solutions to stylish planters and garden accessories, The Sprinkler Cart caters to gardening enthusiasts and outdoor lovers alike. The brand is committed to providing high-quality products that enhance the gardening experience while promoting sustainability and eco-friendly practices. With a focus on customer satisfaction and a passion for all things green, The Sprinkler Cart has become a go-to destination for those looking to cultivate their outdoor spaces with style and functionality.";
const lactaGlow = "LactaGlow is a premium e-commerce brand that specializes in skincare products infused with the nourishing benefits of lactobacillus. With a focus on promoting healthy and radiant skin, LactaGlow offers a range of innovative skincare solutions designed to enhance the skin's natural glow. The brand is known for its commitment to quality, using carefully selected ingredients to create effective and gentle products suitable for all skin types. LactaGlow's dedication to customer satisfaction and skin health has made it a trusted name in the beauty industry.";
const mcPetBotique = "MC Pet Botique is a leading e-commerce brand that specializes in providing high-quality pet products and accessories. With a commitment to enhancing the lives of pets and their owners, MC Pet Botique offers a wide range of items, including stylish pet apparel, durable toys, comfortable bedding, and nutritious food options. The brand is known for its dedication to customer satisfaction, offering exceptional service and a seamless shopping experience. With a focus on quality and innovation, MC Pet Botique has established itself as a trusted destination for pet lovers seeking the best for their furry friends.";
const momiloMio = "Momilo Mio is a charming e-commerce brand that offers a delightful selection of baby and children's products. From adorable clothing and accessories to essential baby gear, Momilo Mio caters to parents seeking high-quality items for their little ones. The brand is dedicated to providing safe, comfortable, and stylish products that make parenting easier and more enjoyable. With a focus on customer satisfaction and a passion for creating memorable moments, Momilo Mio has become a beloved destination for families looking to spoil their children with the best in baby care and fashion.";
const camou = "CAMOU is a cutting-edge e-commerce brand that specializes in innovative camouflage-inspired products. From stylish apparel and accessories to functional outdoor gear, CAMOU offers a unique blend of fashion and practicality. The brand is committed to providing high-quality items that cater to individuals who appreciate both style and functionality. With a focus on customer satisfaction and a passion for creativity, CAMOU has established itself as a go-to destination for those seeking distinctive products that stand out from the crowd.";
const jpsPhilippines = "JPS Philippines is a leading e-commerce brand that offers a wide range of products catering to the diverse needs of Filipino consumers. From electronics and fashion to home essentials and beauty products, JPS Philippines provides customers with access to high-quality items at competitive prices. The brand is known for its user-friendly online platform, secure payment options, and efficient delivery services, making it a preferred choice for shoppers across the country. With a commitment to customer satisfaction and a focus on providing value, JPS Philippines continues to grow its loyal customer base and solidify its position in the e-commerce market.";
const pariscents = "Pariscents is a luxurious e-commerce brand that specializes in high-end fragrances and scented products. With a commitment to quality and elegance, Pariscents offers a curated selection of perfumes, candles, and home fragrances that evoke the essence of Parisian sophistication. The brand is known for its exquisite scents, beautifully designed packaging, and exceptional customer service, making it a favorite among fragrance enthusiasts and those seeking to add a touch of luxury to their lives. Pariscents' dedication to providing an unforgettable olfactory experience has solidified its position as a top player in the luxury fragrance market.";
const stay24 = "STAY24 is a dynamic e-commerce brand that specializes in providing high-quality travel and lifestyle products. From stylish luggage and travel accessories to comfortable apparel and gadgets, STAY24 caters to modern travelers seeking both functionality and style. The brand is committed to offering innovative solutions that enhance the travel experience while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, STAY24 has become a go-to destination for those looking to elevate their travel game with reliable and fashionable gear.";
const heySkin = "Hey Skin! is a vibrant e-commerce brand that specializes in fun and effective skincare products designed to bring joy to your beauty routine. From playful face masks and colorful serums to innovative skincare tools, Hey Skin! offers a wide range of items that cater to those with a love for creativity and self-care. The brand is dedicated to providing high-quality products that not only enhance your skin's health but also make your skincare routine enjoyable and exciting. With a focus on customer satisfaction and a commitment to delivering happiness, Hey Skin! has become a beloved destination for skincare enthusiasts looking to add a touch of fun to their beauty regimen.";
const bananaSisters = "Banana Sisters is a delightful e-commerce brand that offers a wide range of products inspired by the fun and playful nature of bananas. From quirky home decor and accessories to unique fashion items, Banana Sisters caters to those who appreciate a touch of whimsy in their lives. The brand is committed to providing high-quality products that bring joy and laughter to customers, making it a go-to destination for those looking to add a bit of fun to their everyday lives. With a focus on customer satisfaction and a passion for creativity, Banana Sisters has become a beloved name in the world of e-commerce.";
const beautyChoice = "Beauty Choice is a premier e-commerce brand that offers a curated selection of high-quality beauty products. From skincare and makeup to haircare and wellness items, Beauty Choice caters to customers seeking effective and luxurious solutions for their beauty needs. The brand is known for its commitment to quality, using carefully selected ingredients and partnering with reputable brands to provide an exceptional shopping experience. With a focus on customer satisfaction and a passion for enhancing natural beauty, Beauty Choice has established itself as a trusted destination for beauty enthusiasts worldwide.";
const beautySeoul = "Beauty Seoul is a vibrant e-commerce brand that specializes in Korean beauty products, offering a wide range of skincare, makeup, and wellness items inspired by the latest trends from Seoul. With a commitment to quality and innovation, Beauty Seoul provides customers with access to cutting-edge products that cater to diverse skin types and beauty preferences. The brand is known for its dedication to customer satisfaction, offering exceptional service and a seamless shopping experience. With a strong online presence and a passion for Korean beauty, Beauty Seoul has become a go-to destination for beauty enthusiasts looking to elevate their skincare and makeup routines with the best from Seoul.";
const brew = "BREW is a dynamic e-commerce brand that specializes in providing high-quality coffee and tea products. From premium coffee beans and artisanal teas to stylish brewing equipment, BREW caters to coffee and tea enthusiasts seeking both flavor and functionality. The brand is committed to sourcing the finest ingredients and offering innovative brewing solutions that enhance the beverage experience. With a focus on customer satisfaction and a passion for delivering exceptional products, BREW has become a go-to destination for those looking to elevate their coffee and tea rituals.";
const choiceBeautyCollections = "Choice Beauty Collections is a premier e-commerce brand that offers a curated selection of high-quality beauty products. From skincare and makeup to haircare and wellness items, Choice Beauty Collections caters to customers seeking effective and luxurious solutions for their beauty needs. The brand is known for its commitment to quality, using carefully selected ingredients and partnering with reputable brands to provide an exceptional shopping experience. With a focus on customer satisfaction and a passion for enhancing natural beauty, Choice Beauty Collections has established itself as a trusted destination for beauty enthusiasts worldwide.";
const carpetKing = "Carpet King is a leading e-commerce brand that specializes in providing high-quality carpets and rugs for homes and businesses. With a commitment to quality craftsmanship and exceptional customer service, Carpet King offers a wide range of stylish and durable flooring solutions that cater to diverse tastes and preferences. The brand is known for its extensive selection of designs, materials, and sizes, making it easy for customers to find the perfect carpet to enhance their living spaces. With a focus on customer satisfaction and a dedication to delivering exceptional products, Carpet King has established itself as a trusted name in the flooring industry.";
const chintan = "Chintan is a dynamic e-commerce brand that specializes in providing high-quality home and lifestyle products. From stylish furniture and decor to innovative gadgets and accessories, Chintan caters to customers seeking both functionality and aesthetics for their living spaces. The brand is committed to offering unique and thoughtfully designed products that enhance the home environment while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, Chintan has become a go-to destination for those looking to elevate their home with distinctive and practical items.";
const deliveryma = "Deliveryma is a leading e-commerce brand that specializes in providing fast and reliable delivery services for a wide range of products. With a commitment to customer satisfaction and efficient logistics, Deliveryma offers a seamless shopping experience by ensuring that orders are delivered promptly and securely. The brand is known for its user-friendly platform, real-time tracking, and exceptional customer service, making it a preferred choice for shoppers seeking convenience and reliability in their online purchases. With a focus on innovation and continuous improvement, Deliveryma continues to set new standards in the e-commerce delivery industry.";
const dragonTrading = "DRAGON Trading is a dynamic e-commerce brand that specializes in providing high-quality products across various categories, including electronics, fashion, home goods, and more. With a commitment to customer satisfaction and competitive pricing, DRAGON Trading offers a wide range of items that cater to diverse consumer needs. The brand is known for its user-friendly online platform, secure payment options, and efficient delivery services, making it a preferred choice for shoppers looking for a convenient and reliable online shopping experience. With a focus on quality and customer service, DRAGON Trading continues to grow its loyal customer base and establish itself as a trusted name in the e-commerce market.";
const dermaBalm = "DermaBalm is a premium e-commerce brand that specializes in providing high-quality skincare products designed to soothe and nourish the skin. With a commitment to using natural and effective ingredients, DermaBalm offers a range of products that cater to various skin concerns, including dryness, irritation, and sensitivity. The brand is known for its dedication to customer satisfaction, offering exceptional service and a seamless shopping experience. With a focus on promoting healthy skin and enhancing natural beauty, DermaBalm has established itself as a trusted destination for skincare enthusiasts worldwide.";
const euroo = "euroo is a vibrant e-commerce brand that specializes in providing high-quality fashion and lifestyle products. From trendy apparel and accessories to innovative gadgets and home decor, euroo caters to customers seeking both style and functionality. The brand is committed to offering unique and thoughtfully designed products that enhance everyday life while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, euroo has become a go-to destination for those looking to elevate their lifestyle with distinctive and practical items.";
const familyFus = "Family Fus is a dynamic e-commerce brand that specializes in providing high-quality products for families. From baby essentials and children's toys to home goods and wellness items, Family Fus caters to the diverse needs of modern families. The brand is committed to offering safe, functional, and stylish products that enhance family life while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, Family Fus has become a trusted destination for families seeking quality and convenience in their shopping experience.";
const goli = "Goli is a leading e-commerce brand that specializes in providing high-quality health and wellness products. From dietary supplements and vitamins to fitness accessories and wellness gadgets, Goli caters to customers seeking effective solutions for their health needs. The brand is committed to using natural and scientifically backed ingredients to create products that promote overall well-being. With a focus on customer satisfaction and a dedication to delivering exceptional products, Goli has established itself as a trusted name in the health and wellness industry.";
const grethaUkayUkay = "Gretha Ukay-Ukay is a unique e-commerce brand that specializes in providing high-quality second-hand clothing and accessories. With a commitment to sustainability and affordable fashion, Gretha Ukay-Ukay offers a wide range of stylish and gently used items that cater to eco-conscious consumers. The brand is known for its curated selection of trendy and timeless pieces, making it a go-to destination for those looking to refresh their wardrobe while reducing their environmental impact. With a focus on customer satisfaction and a passion for sustainable fashion, Gretha Ukay-Ukay has become a beloved name in the world of online thrift shopping.";
const harmonyAndWellness = "HARMONY & WELLNESS is a premier e-commerce brand that specializes in providing high-quality products designed to promote holistic health and well-being. From natural supplements and wellness gadgets to self-care essentials and fitness accessories, HARMONY & WELLNESS caters to customers seeking effective solutions for their health and lifestyle needs. The brand is committed to using natural and scientifically backed ingredients to create products that enhance overall wellness. With a focus on customer satisfaction and a dedication to delivering exceptional products, HARMONY & WELLNESS has established itself as a trusted name in the health and wellness industry.";
const itLuggage = "IT LUGGAGE is a leading e-commerce brand that specializes in providing high-quality luggage and travel accessories. With a commitment to quality craftsmanship and innovative design, IT LUGGAGE offers a wide range of stylish and durable travel solutions that cater to diverse tastes and preferences. The brand is known for its extensive selection of luggage styles, materials, and sizes, making it easy for customers to find the perfect travel companion for their adventures. With a focus on customer satisfaction and a dedication to delivering exceptional products, IT LUGGAGE has established itself as a trusted name in the travel industry.";
const kaisavilla = "KAISAVILLA is a dynamic e-commerce brand that specializes in providing high-quality fashion and lifestyle products. From trendy apparel and accessories to innovative gadgets and home decor, KAISAVILLA caters to customers seeking both style and functionality. The brand is committed to offering unique and thoughtfully designed products that enhance everyday life while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, KAISAVILLA has become a go-to destination for those looking to elevate their lifestyle with distinctive and practical items.";
const kush = "KUSH is a vibrant e-commerce brand that specializes in providing high-quality cannabis-related products. From premium cannabis strains and edibles to stylish accessories and wellness items, KUSH caters to customers seeking both recreational and medicinal cannabis solutions. The brand is committed to using natural and scientifically backed ingredients to create products that promote overall well-being and enhance the cannabis experience. With a focus on customer satisfaction and a dedication to delivering exceptional products, KUSH has established itself as a trusted name in the cannabis industry.";
const perfy = "Perfy is a leading e-commerce brand that specializes in providing high-quality perfumes and fragrances. With a commitment to quality and elegance, Perfy offers a curated selection of scents that cater to diverse preferences and occasions. The brand is known for its exquisite fragrances, beautifully designed packaging, and exceptional customer service, making it a favorite among fragrance enthusiasts worldwide. Perfy's dedication to providing an unforgettable olfactory experience has solidified its position as a top player in the perfume market.";
const sniff = "Sniff is a dynamic e-commerce brand that specializes in providing high-quality pet products designed to enhance the lives of pets and their owners. From premium pet food and treats to stylish accessories and wellness items, Sniff caters to customers seeking effective solutions for their furry friends. The brand is committed to using natural and scientifically backed ingredients to create products that promote overall pet health and happiness. With a focus on customer satisfaction and a dedication to delivering exceptional products, Sniff has established itself as a trusted name in the pet care industry.";
const squadHouse = "SQUAD HOUSE is a vibrant e-commerce brand that specializes in providing high-quality products designed to enhance social gatherings and group activities. From stylish apparel and accessories to innovative gadgets and home decor, SQUAD HOUSE caters to customers seeking both style and functionality for their social events. The brand is committed to offering unique and thoughtfully designed products that enhance the experience of spending time with friends and loved ones while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, SQUAD HOUSE has become a go-to destination for those looking to elevate their social gatherings with distinctive and practical items.";
const sakuraBeauty = "Sakura Beauty is a premier e-commerce brand that specializes in providing high-quality beauty products inspired by the delicate and enchanting essence of cherry blossoms. From skincare and makeup to haircare and wellness items, Sakura Beauty caters to customers seeking effective and luxurious solutions for their beauty needs. The brand is known for its commitment to quality, using carefully selected ingredients and partnering with reputable brands to provide an exceptional shopping experience. With a focus on customer satisfaction and a passion for enhancing natural beauty, Sakura Beauty has established itself as a trusted destination for beauty enthusiasts worldwide.";
const trueVision = "TRUE VISION is a leading e-commerce brand that specializes in providing high-quality eyewear and vision care products. With a commitment to quality craftsmanship and innovative design, TRUE VISION offers a wide range of stylish and durable eyewear solutions that cater to diverse tastes and preferences. The brand is known for its extensive selection of frames, lenses, and vision care products, making it a go-to destination for those looking to enhance their vision while expressing their personal style. With a focus on customer satisfaction and a dedication to delivering exceptional products, TRUE VISION has established itself as a trusted name in the eyewear industry.";
const willowPetFood = "Willow PetFood is a premium e-commerce brand that specializes in providing high-quality pet food and nutrition products. With a commitment to using natural and wholesome ingredients, Willow PetFood offers a range of nutritious options designed to promote the health and well-being of pets. The brand is known for its dedication to customer satisfaction, offering exceptional service and a seamless shopping experience. With a focus on providing the best for pets, Willow PetFood has established itself as a trusted destination for pet owners seeking high-quality nutrition for their furry friends.";
const usej = "USEJ is a dynamic e-commerce brand that specializes in providing high-quality products across various categories, including electronics, fashion, home goods, and more. With a commitment to customer satisfaction and competitive pricing, USEJ offers a wide range of items that cater to diverse consumer needs. The brand is known for its user-friendly online platform, secure payment options, and efficient delivery services, making it a preferred choice for shoppers looking for a convenient and reliable online shopping experience. With a focus on quality and customer service, USEJ continues to grow its loyal customer base and establish itself as a trusted name in the e-commerce market.";
const yatengPH = "YATENG PH is a leading e-commerce brand that specializes in providing high-quality products across various categories, including electronics, fashion, home goods, and more. With a commitment to customer satisfaction and competitive pricing, YATENG PH offers a wide range of items that cater to diverse consumer needs. The brand is known for its user-friendly online platform, secure payment options, and efficient delivery services, making it a preferred choice for shoppers looking for a convenient and reliable online shopping experience. With a focus on quality and customer service, YATENG PH continues to grow its loyal customer base and establish itself as a trusted name in the e-commerce market.";
const zone = "ZONE. is a vibrant e-commerce brand that specializes in providing high-quality products designed to enhance everyday life. From trendy apparel and accessories to innovative gadgets and home decor, ZONE. caters to customers seeking both style and functionality. The brand is committed to offering unique and thoughtfully designed products that enhance the lifestyle of its customers while maintaining a focus on customer satisfaction. With a strong online presence and a dedication to delivering exceptional products, ZONE. has become a go-to destination for those looking to elevate their lifestyle with distinctive and practical items.";
const youLingYouShi = "You Ling You Shi is a dynamic e-commerce brand that specializes in providing high-quality products across various categories, including electronics, fashion, home goods, and more. With a commitment to customer satisfaction and competitive pricing, You Ling You Shi offers a wide range of items that cater to diverse consumer needs. The brand is known for its user-friendly online platform, secure payment options, and efficient delivery services, making it a preferred choice for shoppers looking for a convenient and reliable online shopping experience. With a focus on quality and customer service, You Ling You Shi continues to grow its loyal customer base and establish itself as a trusted name in the e-commerce market.";


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
  { name: "Family Fus", image: "/Clients/Family-Fus.png", description: familyFus },
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
  { name: "You Ling You Shi.", image: "/Clients/Zone.png", description: zone },
];


const biggestLogos = [
  "CAMOU",
  "Momilo Mio",
];

const bigLogos = [
  "Best Deals",
  "TOPSHION",
  "The Glitter Cart",
  "MC PET BOTIQUE",
  "Wow Happy",
  "NEW YORK ARMY",
  "Airwell",
  "The Sprinkler Cart",
  "LactaGlow",
  "JPS Philippines",  
  "Pariscents",
  "STAY24",
  "Hey Skin!",
];

const isBiggestLogo = (name: string) => biggestLogos.includes(name);
const isBigLogo = (name: string) => bigLogos.includes(name);

export default function Clients() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const biggestBrandItems = clientBrands.filter(brand => isBiggestLogo(brand.name));
  const bigBrandItems = clientBrands.filter(brand => isBigLogo(brand.name) && !isBiggestLogo(brand.name));
  const normalBrandItems = clientBrands.filter(brand => !isBigLogo(brand.name) && !isBiggestLogo(brand.name));

  return (
    <section id="clients" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 uppercase tracking-widest mb-12">
          OUR CLIENTS
        </p>

        {/* BIGGEST LOGOS - SUPER LARGE CENTER TOP */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-12">
          {biggestBrandItems.map(brand => (
            <div
              key={brand.name}
              onClick={() => setSelectedBrand(brand)}
              className="cursor-pointer flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60"
            >
              <div className="w-52 h-52 rounded-lg bg-white flex items-center justify-center overflow-hidden mb-2 shadow-md">
                <img src={brand.image} loading="lazy" alt={brand.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-400 text-lg font-medium text-center truncate">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* BIG LOGOS - SLIGHTLY LARGER */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mb-12">
          {bigBrandItems.map(brand => (
            <div
              key={brand.name}
              onClick={() => setSelectedBrand(brand)}
              className="cursor-pointer flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
            >
              <div className="w-28 h-28 rounded-lg bg-white flex items-center justify-center overflow-hidden mb-2 shadow-md">
                <img src={brand.image} loading="lazy" alt={brand.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-400 text-sm font-medium text-center truncate">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* NORMAL LOGOS - GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          {normalBrandItems.map(brand => (
            <div
              key={brand.name}
              onClick={() => setSelectedBrand(brand)}
              className="cursor-pointer bg-background border border-border rounded-lg p-4 flex items-center justify-center aspect-square hover:border-gray-500 transition-colors"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <img src={brand.image} loading="lazy" alt={brand.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-background max-w-3xl w-full rounded-2xl p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <div className="flex items-center gap-8 mb-8">
              <div className="w-28 h-28 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md">
                <img src={selectedBrand.image} alt={selectedBrand.name} className="w-full h-full object-contain" />
              </div>

              <h3 className="text-2xl font-bold text-white">{selectedBrand.name}</h3>
            </div>

            <p className="text-base text-gray-300 leading-relaxed">{selectedBrand.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}