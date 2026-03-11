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
    name: "Mrs. Alby Abalado",
    position: "Founder & CEO",
    image: "/Clients/Careers/S3.png",
    description: "Leads the company with a vision for innovation and growth.",
    bio: "Mrs. Alby is the visionary behind our success, driving innovation and fostering key relationships.",
  },
  {
    name: "Mr. Christian Kitch Marquez",
    position: "Chief Operating Officer",
    image: "/Clients/Careers/S2.png",
    description: "Oversees daily operations and internal processes.",
    bio: "Mr. Christian ensures that all departments work efficiently and meet business goals.",
  },
  {
    name: "Mr. Vincent Sapurco",
    position: "Creative Content Producer",
    image: "/Clients/Careers/S1.png",
    description: "Heads branding, design, and creative content.",
    bio: "Mr. Vincent leads the creative team in producing visually compelling marketing assets.",
  },
  {
    name: "Ms. Kia Borja",
    position: "Sales & Marketing Officer",
    image: "/Clients/Careers/S4.png",
    description: "Manages teams and ensures performance targets.",
    bio: "Ms. Kia mentors team members and drives performance excellence.",
  },
];

const teamMembers: string[] = [
  "/Clients/Careers/Live1.png",
  "/Clients/Careers/Live2.png",
  "/Clients/Careers/Live3.png",
  "/Clients/Careers/Live4.png",
  "/Clients/Careers/Live5.png",
  "/Clients/Careers/Live6.png",
  "/Clients/Careers/Girl1.png",
  "/Clients/Careers/Girl2.png",
  "/Clients/Careers/Girl3.png",
  "/Clients/Careers/Girl4.png",
  "/Clients/Careers/Girl5.png",
  "/Clients/Careers/Girl6.png",
  "/Clients/Careers/Girl7.png",
  "/Clients/Careers/Girl8.png",
  "/Clients/Careers/Girl9.png",
  "/Clients/Careers/Girl10.png",
  "/Clients/Careers/Girl11.png",
];

export function Careers() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const ceo = leaders[0];
  const managers = leaders.slice(1);

  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
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

        {/* CEO */}
        <div className="flex justify-center mb-20">
          <div
            onClick={() => setSelectedLeader(ceo)}
            className="cursor-pointer group bg-card border border-border rounded-xl p-8 text-center
            hover:border-gray-400 transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-2 border-gray-600">
              <Image
                src={ceo.image}
                alt={ceo.name}
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>

            <h3 className="text-white font-semibold text-xl">{ceo.name}</h3>

            <p className="text-green-400 text-sm mb-2">{ceo.position}</p>

            <p className="text-gray-400 text-sm">{ceo.description}</p>
          </div>
        </div>

        {/* MANAGERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center mb-20">
          {managers.map((person, index) => (
            <div
              key={index}
              onClick={() => setSelectedLeader(person)}
              className="cursor-pointer group bg-card border border-border rounded-xl p-6 text-center
              hover:border-gray-400 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-gray-600">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-white font-semibold text-lg">
                {person.name}
              </h3>

              <p className="text-green-400 text-sm mb-2">
                {person.position}
              </p>

              <p className="text-gray-400 text-sm">
                {person.description}
              </p>
            </div>
          ))}
        </div>

        {/* TEAM MEMBERS */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
          {teamMembers.map((img, index) => (
            <div
              key={index}
              className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-600 shadow-md
              transition duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <Image
                src={img}
                alt={`Team Member ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">

          <div className="bg-card rounded-2xl p-12 max-w-3xl w-full relative shadow-2xl border border-border">

            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-6 right-6 text-white hover:text-red-400 transition"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center text-center">

              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-white text-3xl font-bold mb-2">
                {selectedLeader.name}
              </h3>

              <p className="text-green-400 text-lg mb-4">
                {selectedLeader.position}
              </p>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {selectedLeader.bio}
              </p>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}