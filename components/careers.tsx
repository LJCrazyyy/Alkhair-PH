"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, X } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  description: string;
  bio: string;
  email: string;
}

const leaders: Leader[] = [
  {
    name: "Juan Dela Cruz",
    position: "Founder & CEO",
    description: "Leads company vision, growth, and strategic partnerships.",
    bio: "Juan founded the company with a passion for building high-performing digital commerce teams and scalable brands.",
    email: "juan@company.com",
  },
  {
    name: "Christian Kitch Marquez",
    position: "Chief Operating Officer",
    description: "Oversees daily operations and internal processes.",
    bio: "Christian ensures that all departments work efficiently and meet business goals.",
    email: "christian@company.com",
  },
  {
    name: "Carlos Reyes",
    position: "Creative Director",
    description: "Heads branding, design, and creative content.",
    bio: "Carlos leads the creative team in producing visually compelling marketing assets.",
    email: "carlos@company.com",
  },
  {
    name: "Angela Lopez",
    position: "Team Supervisor",
    description: "Manages teams and ensures performance targets.",
    bio: "Angela mentors team members and drives performance excellence.",
    email: "angela@company.com",
  },
];

const teamMembers: string[] = [
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
  "/Clients/icons.png",
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
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <Users className="w-10 h-10 text-gray-600" />
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-white font-semibold text-lg">{person.name}</h3>
              <p className="text-green-400 text-sm mb-2">{person.position}</p>
              <p className="text-gray-400 text-sm">{person.description}</p>
            </div>
          ))}
        </div>

        {/* TEAM MEMBERS */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Team Member"
              className="w-16 h-16 rounded-full object-cover border border-border
                transition transform hover:scale-110 hover:shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-card rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X />
            </button>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <Users className="w-6 h-6 text-white-600" />
            </div>
            <h3 className="text-white text-xl font-semibold text-center">{selectedLeader.name}</h3>
            <p className="text-purple-400 text-center mb-2">{selectedLeader.position}</p>
            <p className="text-white-400 text-center mb-4">{selectedLeader.bio}</p>
            <p className="text-white text-center text-sm">📧 {selectedLeader.email}</p>
          </div>
        </div>
      )}
    </section>
  );
}