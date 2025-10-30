"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const list = [
  {
    title: "Business Continuity",
    description: " Keep operations running even during outages.",
    buttonText: "Learn More",
  },
  {
    title: "Backup & Instant Recovery",
    description: "Fast recovery of business-critical systems.",
    buttonText: "Learn More",
  },
  {
    title: "Immutable & Air-Gapped Protection",
    description: "Ransomware-proof backups.",
    buttonText: "Learn More",
  },
];

// Animation variants for list items only
const listItemVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function QorumOffers() {
  const listRef = useRef(null);
  const listInView = useInView(listRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section className="relative py-10 px-4 dark:bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading */}
        <div>
          <h1 className="text-xl text-black leading-snug md:text-7xl mb-6">
            Offers{" "}
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="text-md max-w-3xl text-black m-auto md:text-lg mb-8">
            A paragraph on tailored solutions for Nigeria.
          </p>
        </div>
      </div>

      {/* Animated List Items Only */}
      <motion.div
        ref={listRef}
        variants={staggerContainer}
        initial="hidden"
        animate={listInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row justify-around items-center gap-4"
      >
        {list.map((item, index) => (
          <motion.div
            key={index}
            variants={listItemVariants}
            className="p-4 max-w-sm space-y-4 text-center m-2 rounded-lg flex-1 "
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-2 text-gray-900"
              whileHover={{ color: "#113264" }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-md mb-4 text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              {item.description}
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-[#113264] rounded-full px-8 py-3 text-white font-medium inline-block"
              >
                {item.buttonText}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
