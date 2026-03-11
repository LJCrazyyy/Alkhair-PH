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
      position: "Diretor of Creative Production",
      image: "/Clients/Careers/S1.png",
      description: "Leads the creative team in producing visually compelling marketing assets.",
      bio: "Mr. Vincent leads the creative team in producing visually compelling marketing assets.",
  },
  {
    name: "Ms. Kia Borja",
    position: "Executive Sales and Marketing",
    image: "/Clients/Careers/Kia.png",
    description: "Leads sales and marketing initiatives.",
    bio: "Ms. Kia drives sales and marketing strategies.",
  },
  {
    name: "Mr. Johnro Malitic",
    position: "Web Developer Consultant",
    image: "/Clients/Careers/Johnro.png",
    description: "Provides expert consultation on web development projects.",
    bio: "Mr. Johnro brings extensive experience in web development and digital solutions.",
  },
  {
    name: "Mr. Lawrence Jumamoy",
    position: "Web Developer Consultant",
    image: "/Clients/Careers/Lawrence.png",
    description: "Provides expert consultation on web development projects.",
    bio: "Mr. Lawrence brings extensive experience in web development and digital solutions.",
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
  "/Clients/Careers/Girl1.png",
  "/Clients/Careers/Girl4.png",
  "/Clients/Careers/Girl5.png",
  "/Clients/Careers/Girl7.png",
  "/Clients/Careers/Girl11.png",
];

export function Careers() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

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

        {/* TOP ROW */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-12">

          {/* Mrs Alby */}
          <LeaderCard
            leader={leaders[0]}
            onClick={setSelectedLeader}
            size="large"
          />

          {/* Group Photo
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-gray-600 cursor-pointer"
            onClick={() => setIsGroupModalOpen(true)}
          >
            <Image
              src="/Clients/Careers/"
              alt="Group Photo"
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* Mr Kitch */}
          <LeaderCard
            leader={leaders[1]}
            onClick={setSelectedLeader}
            size="large"
          />

        </div>

        {/* BOTTOM ROW (RESPONSIVE FIX) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 justify-items-center">

          <LeaderCard
            leader={leaders[3]}
            onClick={setSelectedLeader}
            size="medium"
          />

          <LeaderCard
            leader={leaders[2]}
            onClick={setSelectedLeader}
            size="medium"
          />

          <LeaderCard
            leader={leaders[4]}
            onClick={setSelectedLeader}
            size="medium"
          />

          <LeaderCard
            leader={leaders[5]}
            onClick={setSelectedLeader}
            size="medium"
          />

        </div>

        {/* TEAM MEMBERS GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center mt-12">
          {teamMembers.map((img, index) => (
            <div
              key={index}
              className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-600 shadow-md"
            >
              <Image
                src={img}
                alt={`Team Member ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover object-top"
                priority
              />
            </div>
          ))}
        </div>

      </div>

      {/* LEADER MODAL */}
      {selectedLeader && (
        <Modal onClose={() => setSelectedLeader(null)}>
          <ImageModalContent
            src={selectedLeader.image}
            alt={selectedLeader.name}
            name={selectedLeader.name}
            position={selectedLeader.position}
            bio={selectedLeader.bio}
            priority
          />
        </Modal>
      )}

      {/* GROUP PHOTO MODAL */}
      {isGroupModalOpen && (
        <Modal onClose={() => setIsGroupModalOpen(false)}>
          <div className="relative w-full max-w-3xl h-96 rounded-lg overflow-hidden">
            <Image
              src="/Clients/Careers/Group.png"
              alt="Group Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Modal>
      )}

    </section>
  );
}

interface LeaderCardProps {
  leader: Leader;
  onClick: (leader: Leader) => void;
  size?: "medium" | "large";
}

function LeaderCard({ leader, onClick, size = "medium" }: LeaderCardProps) {

  const dimension =
    size === "large"
      ? "w-36 h-36 md:w-40 md:h-40"
      : "w-24 h-24";

  return (
    <div
      onClick={() => onClick(leader)}
      className="cursor-pointer bg-card border border-border rounded-xl p-4 md:p-8 text-center"
    >

      <div className={`relative ${dimension} mx-auto mb-5 rounded-full overflow-hidden border-2 border-gray-600`}>
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <h3 className="text-white font-semibold text-lg md:text-xl">
        {leader.name}
      </h3>

      <p className="text-green-400 text-sm mb-2">
        {leader.position}
      </p>

      <p className="text-gray-400 text-sm">
        {leader.description}
      </p>

    </div>
  );
}

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

      <div className="bg-card rounded-2xl p-6 md:p-12 relative shadow-2xl border border-border w-full max-w-3xl">

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center">
          {children}
        </div>

      </div>

    </div>
  );
}

interface ImageModalContentProps {
  src: string;
  alt: string;
  name?: string;
  position?: string;
  bio?: string;
  priority?: boolean;
}

function ImageModalContent({
  src,
  alt,
  name,
  position,
  bio,
  priority = false,
}: ImageModalContentProps) {

  return (
    <>
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority={priority}
        />
      </div>

      {name && (
        <h3 className="text-white text-3xl font-bold mb-2">
          {name}
        </h3>
      )}

      {position && (
        <p className="text-green-400 text-lg mb-4">
          {position}
        </p>
      )}

      {bio && (
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
          {bio}
        </p>
      )}
    </>
  );
}