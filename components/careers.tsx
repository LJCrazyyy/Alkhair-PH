"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, X } from "lucide-react"

interface Leader {
  name: string
  position: string
  description: string
  bio: string
  email: string
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
    name: "Maria Santos",
    position: "Operations Manager",
    description: "Oversees daily operations and internal processes.",
    bio: "Maria ensures that all departments work efficiently and meet business goals.",
    email: "maria@company.com",
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
]

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
]

export function Careers() {

  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null)

  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-white-500 uppercase tracking-widest mb-4">
            JOIN OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MEET OUR TEAM
          </h2>
          <p className="text-white-400 max-w-2xl mx-auto">
            Bring the Drive. We'll Provide the Platform.
          </p>
        </div>

        {/* LEADERS */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {leaders.map((person, index) => (
              <div
                key={index}
                onClick={() => setSelectedLeader(person)}
                className="cursor-pointer group bg-card border border-border rounded-xl p-6 text-center
                hover:border-gray-400 transition transform hover:scale-105 hover:shadow-xl"
              >

                {/* ICON */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full
                  bg-gradient-to-br from-purple-500 to-pink-500
                  flex items-center justify-center
                  shadow-lg group-hover:shadow-purple-500/50 transition"
                >
                  <Users className="w-8 h-8 text-white" />
                </div>

                {/* NAME */}
                <h3 className="text-white font-semibold text-lg">
                  {person.name}
                </h3>

                {/* POSITION */}
                <p className="text-purple-400 text-sm mb-2">
                  {person.position}
                </p>

                {/* DESCRIPTION */}
                <p className="text-white-400 text-sm">
                  {person.description}
                </p>

                {/* CONNECTOR */}
                <div className="hidden md:block w-px h-10 bg-border mx-auto mt-6"></div>

              </div>
            ))}

          </div>
        </div>

        {/* TEAM MEMBERS */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {teamMembers.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Team Member"
              className="w-16 h-16 rounded-full object-cover
              border border-border
              transition transform hover:scale-110 hover:shadow-lg"
            />
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            VIEW ALL OPENINGS
          </Button>
        </div>

      </div>

      {/* MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-card rounded-xl p-8 max-w-md w-full relative">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X />
            </button>

            {/* ICON */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full
              bg-gradient-to-br from-purple-500 to-pink-500
              flex items-center justify-center"
            >
              <Users className="w-10 h-10 text-white" />
            </div>

            {/* INFO */}
            <h3 className="text-white text-xl font-semibold text-center">
              {selectedLeader.name}
            </h3>

            <p className="text-purple-400 text-center mb-2">
              {selectedLeader.position}
            </p>

            <p className="text-white-400 text-center mb-4">
              {selectedLeader.bio}
            </p>

            <p className="text-white text-center text-sm">
              📧 {selectedLeader.email}
            </p>

          </div>
        </div>
      )}

    </section>
  )
}


