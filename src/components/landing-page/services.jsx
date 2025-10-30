"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  StaggeredChildren,
  StaggerItem,
} from "../staggered-children-animation";
import Link from "next/link";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Nigerian Upstream Petroleum Regulatory Commission (NUPRC) - Offshore Safety Permit",
      mainTitle: "Offshore Safety Permit Systems",
      description:
        "Appointed by the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) to manage and issue Offshore Permits, the mandatory identity for every offshore worker in Nigeria's oil and gas industry. We ensure safe, compliant, and efficient personnel tracking across offshore, swamp, and inland waterway operations.",
      buttonText: "Learn More",
      buttonLink: "/solutions/osp",
      image: "/images/offshore_safety_permit.svg",
    },
    {
      id: 1,
      title: "OnQ DRaaS",
      mainTitle: "DRaaS (Disaster Recovery as a Service)",
      description:
        "In partnership with Quorum US, WAEL delivers Business continuity and Diaster recovery service for enterprises that can’t afford downtime. Powered by OnQ high availability, your systems stay online, even during hardware failures or complete site outages. With one-click recovery, you’re back in business in under 5 minutes, ensuring customers never notice disruption. Flexible by design, OnQ integrates seamlessly with your infrastructure,  whether on-premise, cloud, or hybrid.",
      buttonText: "Learn More",
      buttonLink: "/solutions/draas",
      image: "/images/drass.png",
    },
    {
      id: 2,
      title: "Personnel Onboard Tracking & Access Control (Trotter)",
      mainTitle: "Personnel Onboard Tracking & Access Control (Trotter)",
      description:
        "Streamline personnel onboarding, site access, accountability, and reporting across complex operations—all from a single platform. Offers real-time visibility, compliance checks, and emergency roll-call features.",
      buttonText: "Learn More",
      buttonLink: "/softwares/trotter",
      image: "/images/trotter.png",
    },
    {
      id: 3,
      title: "Data management and Analysis",
      mainTitle: "Data management and Analysis",
      description:
        "We help businesses store, protect, and transform their data into actionable insights. From enterprise-grade infrastructure to real-time analytics, we ensure your information is always secure, accessible, and ready to drive smarter decisions.",
      buttonText: "Learn More",
      buttonLink: "/solutions/data-management",
      image: "/images/data-bg.svg",
    },
  ];

  return (
    <section className="md:px-12 dark:bg-white px-4">
      <div className="flex md:flex-row flex-col min-h-screen py-20 px-4">
        {/* Left Section - Services List */}
        <div className="md:w-1/2 w-full md:pr-12">
          <StaggeredChildren stagger={0.1}>
            <StaggerItem yOffset={20}>
              <h2 className="md:text-4xl  text-3xl font-medium text-gray-900 mb-4">
                Our Core{" "}
                <span className="text-[#113264] font-bold"> Services</span>
              </h2>
            </StaggerItem>

            <StaggerItem yOffset={20} delay={0.1}>
              <p className="md:text-4xl text-2xl md:w-2/3 w-full leading-snug text-gray-600 mb-12">
                Comprehensive Solutions for Your Industry
              </p>
            </StaggerItem>
          </StaggeredChildren>

          {/* Services List */}
          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`border-b  py-6 cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "border-black border-b-2 "
                    : "hover:border-gray-300 border-gray-200"
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Service Title */}
                <motion.h3
                  className={`md:text-3xl text-xl  font-bold transition-colors duration-300 pl-4 ${
                    activeService === index
                      ? "text-black font-semibold "
                      : "text-gray-300  hover:text-gray-900 "
                  }`}
                  // whileHover={{ color: activeService === index ? "#2563eb" : "#1f2937" }}
                >
                  {service.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section - Active Service Content */}
        <div className="md:w-1/2 w-full md:pl-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-full flex flex-col justify-center"
            >
              {/* Service Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  width={500}
                  height={400}
                  className="rounded-lg  h-[20rem] w-full object-cover"
                />
              </motion.div>

              {/* Service Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                {services[activeService].mainTitle}
              </motion.h3>

              {/* Service Description */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                {services[activeService].description}
              </motion.p>

              {/* CTA Button */}
              <Link
                href={services[activeService].buttonLink}
                target={
                  services[activeService].buttonLink.startsWith("http")
                    ? "_blank"
                    : "_self"
                }
              >
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="bg-[#113264] hover:bg-[#113264] cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-lg w-fit transition-colors duration-300"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#113264",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {services[activeService].buttonText}
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
