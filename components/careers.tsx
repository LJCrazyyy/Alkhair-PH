"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  description: string;
  bio: string;
  email: string;
  image?: string;
}

const leaders: Leader[] = [
  {
    name: "Alby Abalado",
    position: "Founder & CEO",
    image: "/Clients/Careers/Alby.png",
    description: "Leads the company with a vision for innovation and growth.",
    bio: "Mrs. Alby is the visionary behind our success, driving innovation and fostering key relationships.",
    email: "alby@gmail.com",
  },
  {
    name: "Christian Kitch Marquez",
    position: "Chief Operating Officer",
    image: "/Clients/Careers/Kitch.png",
    description: "Oversees daily operations and internal processes.",
    bio: "Mr. Christian ensures that all departments work efficiently and meet business goals.",
    email: "christian@gmail.com",
  },
  {
    name: "Vincent Sapurco",
    position: "Creative Content Producer",
    image: "/Clients/Careers/Vince.png",
    description: "Heads branding, design, and creative content.",
    bio: "Mr. Vincent leads the creative team in producing visually compelling marketing assets.",
    email: "vincent@gmail.com",
  },
  {
    name: "Kia Borja",
    position: "Sales & Marketing Officer",
    image: "/Clients/Careers/Pia.png",
    description: "Manages teams and ensures performance targets.",
    bio: "Ms. Kia mentors team members and drives performance excellence.",
    email: "kia@gmail.com",
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
        <div className="text-center mb-16">
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
        <div className="flex justify-center mb-16">
          <div
            onClick={() => setSelectedLeader(ceo)}
            className="cursor-pointer group bg-card border border-border rounded-xl p-8 text-center
            hover:border-gray-400 transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-600">
              <img
                src={ceo.image || "/Clients/icons.png"}
                alt={ceo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-white font-semibold text-xl">{ceo.name}</h3>
            <p className="text-green-400 text-sm mb-2">{ceo.position}</p>
            <p className="text-gray-400 text-sm">{ceo.description}</p>
          </div>
        </div>

        {/* MANAGERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center mb-16">
          {managers.map((person, index) => (
            <div
              key={index}
              onClick={() => setSelectedLeader(person)}
              className="cursor-pointer group bg-card border border-border rounded-xl p-6 text-center
              hover:border-gray-400 transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-gray-600">
                <img
                  src={person.image || "/Clients/icons.png"}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">{person.name}</h3>
              <p className="text-green-400 text-sm mb-2">{person.position}</p>
              <p className="text-gray-400 text-sm">{person.description}</p>
            </div>
          ))}
        </div>

        {/* TEAM MEMBERS */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
          {teamMembers.map((img, index) => (
            <div
              key={index}
              className="w-20 h-20 rounded-full overflow-hidden border border-gray-600 shadow-md
              transition transform hover:scale-110 hover:shadow-xl"
            >
              <img
                src={img}
                alt={`Team Member ${index + 1}`}
                className="w-full h-full object-cover object-top"
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
              className="absolute top-6 right-6 text-white hover:text-red-400"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center text-center">

              <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
                <img
                  src={selectedLeader.image || "/Clients/icons.png"}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="text-white text-3xl font-bold mb-2">
                {selectedLeader.name}
              </h3>

              <p className="text-green-400 text-lg mb-4">
                {selectedLeader.position}
              </p>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-6">
                {selectedLeader.bio}
              </p>

              <p className="text-white text-base">
                📧 {selectedLeader.email}
              </p>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}