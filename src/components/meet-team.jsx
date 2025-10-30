"use client";
// import { StaggeredChildren, StaggerItem } from '@/components/StaggeredChildren';
import Image from "next/image";
import { StaggeredChildren, StaggerItem } from "./staggered-children-animation";

const teamMembers = [
  { name: "Lajen Kyle", position: "Director", img: "/kyle.svg" },
  { name: "Alexander", position: "Manager", img: "/alex.svg" },
  { name: "", position: "", img: "/grace.svg" },
  { name: "", position: "", img: "/daniel.svg" },
];

export default function MeetTheTeam() {
  return (
    <section className="relative py-20">
      {/* Background image with dark overlay */}

      <div className="container mx-auto px-4 relative z-20 text-black">
        <StaggeredChildren stagger={0.15}>
          {/* Heading */}
          <StaggerItem yOffset={30}>
            <h2 className="text-3xl md:text-[2.5rem] text-center text-black font-bold mb-4">
              Meet The <span className="text-[#223E81] font-semibold">Expert Team </span> 
            </h2>
          </StaggerItem>

          {/* Subheading */}
          <StaggerItem yOffset={30} delay={0.1}>
            <p className="text-md mx-auto text-center md:text-lg mb-12 max-w-2xl">
              Industry veterans with decades of combined experience driving
              innovation and excellence
            </p>
          </StaggerItem>

          {/* Team members grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <StaggerItem key={index} yOffset={40} delay={0.2 + index * 0.1}>
                <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="aspect-square w-full h-[45vh] relative rounded-lg overflow-hidden">
                    {/* Team member image */}
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                      <h3 className="text-xl font-bold drop-shadow-md">
                        {member.name}
                      </h3>
                      <p className="text-white/90 drop-shadow-md">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggeredChildren>
      </div>
    </section>
  );
}
