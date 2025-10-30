"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const slideUpVariants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
export default function Ransomware() {
  const mainRef = useRef(null);

  const mainInView = useInView(mainRef, {
    once: true,
    margin: "-50px",
  });
  return (
    <section
      className="md:min-h-screen flex flex-col  md:px-40 items-start  px-2  py-20 bg-gray-50"
      style={{
        backgroundImage: "url(/images/qorum_bg_2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
      <motion.div
        ref={mainRef}
        initial="hidden"
        animate={mainInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-3xl my-auto"
      >
        {/* Main heading */}
        <motion.div variants={slideUpVariants}>
          <p className="text-4xl text-white">Did you know?</p>
          <h1 className="text-xl text-white leading-snug md:text-6xl mb-6">
            <motion.span
              className="text-[#FFE629] font-bold inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Quorum
            </motion.span>{" "}
            has never lost a customer to Ransomware. 
          </h1>
        </motion.div>

        <motion.div variants={slideUpVariants}>
          <p className="text-md  text-white m-auto md:text-lg mb-8">
            Secure your infrastructure with us today.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          variants={slideUpVariants}
          className="flex flex-col md:flex-row  items-center gap-4"
        >
          <Link href="https://v4c2s15ufwd.typeform.com/to/Zv3iFqSp" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="inline-block bg-[#FFE629] hover:bg-[#FFE629] text-black md:px-8 px-3 py-3 rounded-full md:text-lg md:text-md text-xs font-medium cursor-pointer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Conduct a Risk Assessment to test your vulnerability{" "}
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>{" "}
    </section>
  );
}
