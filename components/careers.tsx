"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  description: string;
  bio: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "Alby Abalado",
    position: "Founder & CEO",
    image: "/Clients/Careers/S3.png",
    description: "Leads the company with a vision for innovation and growth.",
    bio: "Alby is the visionary behind our success, driving innovation and fostering key relationships.",
  },
  {
    name: "Kitch Marquez",
    position: "Chief Operating Officer",
    image: "/Clients/Careers/S2.png",
    description: "Oversees daily operations and internal processes.",
    bio: "Christian ensures that all departments work efficiently and meet business goals.",
  },
  
  // {
  //   name: "Kia Borja",
  //   position: "Executive Sales and Marketing Director",
  //   image: "/Clients/Careers/Kia.png",
  //   description: "Leads sales and marketing initiatives.",
  //   bio: "Kia drives sales and marketing strategies, she has a proven track record of success in the industry.",
  // },
  
  {
    name: "Johnro Malitic",
    position: "Web Developer / Account Manager",
    image: "/Clients/Careers/Johnro.png",
    description: "Manages client accounts while delivering cutting-edge web development solutions.",
    bio: "Johnro combines technical expertise in web development with strategic account management to deliver exceptional results and drive client success.",
  },
  {
    name: "Vincent Sapurco",
    position: "Director of Creative Production",
    image: "/Clients/Careers/S1.png",
    description: "Leads the creative team in producing visually compelling marketing assets.",
    bio: "Vincent leads the creative team in producing visually compelling marketing assets.",
  },
  {
    name: "Lawrence Jumamoy",
    position: "Web Developer / Account Manager",
    image: "/Clients/Careers/Lawrence.png",
    description: "Manages client accounts while delivering cutting-edge web development solutions.",
    bio: "Lawrence combines technical expertise in web development with strategic account management to deliver exceptional results and drive client success.",
  },
];

const teamMembers: string[] = [
  "/Clients/Careers/Live4.png",
  "/Clients/Careers/Girl9.png",
  "/Clients/Careers/Live5.png",
  "/Clients/Careers/Girl3.png",
  "/Clients/Careers/Live6.png",
  "/Clients/Careers/Girl10.png",
  "/Clients/Careers/Live1.png",
  "/Clients/Careers/Girl6.png",
  "/Clients/Careers/Girl8.png",
  "/Clients/Careers/Live2.png",
  "/Clients/Careers/Girl2.png",
  "/Clients/Careers/Live3.png",
  "/Clients/Careers/Girl12.png",
  "/Clients/Careers/Girl4.png",
  "/Clients/Careers/Girl5.png",
  "/Clients/Careers/Girl7.png",
  "/Clients/Careers/Girl11.png",
];
const teamLaguna: string[] = [

  "/Clients/Careers/Jerwin.png",
  "/Clients/Careers/Brea.png",
  "/Clients/Careers/Jholan.png",
  "/Clients/Careers/Miriam.png",
  "/Clients/Careers/Rozz.png",
  "/Clients/Careers/Rose.png",
  "/Clients/Careers/Rob.png",
  "/Clients/Careers/Stefh.png",
  "/Clients/Careers/Patrick.png",
  "/Clients/Careers/Glayze.png",
  "/Clients/Careers/Ara.png",
  "/Clients/Careers/Liezel.png",
];

export function Careers() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <section id="careers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-gray-500 uppercase tracking-widest mb-4">
            JOIN OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MEET OUR TEAM
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bring the Drive. We'll Provide the Platform.
          </p>
        </div>

        {/* TOP ROW */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10 md:mb-12">
          <LeaderCard
            leader={leaders[0]}
            onClick={setSelectedLeader}
            size="large"
            priority
          />
          <LeaderCard
            leader={leaders[1]}
            onClick={setSelectedLeader}
            size="large"
            priority
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
          {leaders.slice(2, 6).map((leader) => (
            <LeaderCard key={leader.name} leader={leader} onClick={setSelectedLeader} />
          ))}
        </div>

        {/* TEAM MEMBERS GRID - Left: Team, Right: Laguna */}
        <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-12">
          <div className="flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-items-start">
              {teamMembers.map((img, index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-gray-600 shadow-md"
                >
                  <Image
                    src={img}
                    alt={`Team Member ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-items-start">
              {teamLaguna.map((img, index) => (
                <div
                  key={`laguna-${index}`}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-gray-600 shadow-md"
                >
                  <Image
                    src={img}
                    alt={`Laguna Member ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedLeader && (
        <Modal onClose={() => setSelectedLeader(null)}>
          <ImageModalContent
            src={selectedLeader.image}
            alt={selectedLeader.name}
            name={selectedLeader.name}
            position={selectedLeader.position}
            bio={selectedLeader.bio}
          />
        </Modal>
      )}
    </section>
  );
}

interface LeaderCardProps {
  leader: Leader;
  onClick: (leader: Leader) => void;
  size?: "medium" | "large";
  priority?: boolean;
}

function LeaderCard({
  leader,
  onClick,
  size = "medium",
  priority = false,
}: LeaderCardProps) {
  const dimension =
    size === "large" ? "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40" : "w-20 h-20 sm:w-24 sm:h-24";

  return (
    <div
      onClick={() => onClick(leader)}
      className="w-full max-w-xs cursor-pointer bg-card border border-border rounded-xl p-4 sm:p-5 md:p-8 text-center"
    >
      <div
        className={`relative ${dimension} mx-auto mb-5 rounded-full overflow-hidden border-2 border-gray-600`}
      >
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          sizes="(max-width:768px) 96px, 160px"
          className="object-cover object-top"
          priority={priority}
          quality={90}    // High quality
        />
      </div>
      <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl">
        {leader.name}
      </h3>
      <p className="text-green-400 text-sm mb-2">{leader.position}</p>
      <p className="text-gray-400 text-sm">{leader.description}</p>
    </div>
  );
}

function Modal({ children, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-12 relative shadow-2xl border border-border w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white">
          <X size={24} />
        </button>
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
}

function ImageModalContent({ src, alt, name, position, bio }: any) {
  return (
    <>
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-5 sm:mb-6 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="160px"
          className="object-cover object-top"
          quality={90}   // High quality for modal
        />
      </div>
      {name && (
        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center">{name}</h3>
      )}
      {position && (
        <p className="text-green-400 text-base sm:text-lg mb-4 text-center">{position}</p>
      )}
      {bio && (
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl text-center">{bio}</p>
      )}
    </>
  );
}