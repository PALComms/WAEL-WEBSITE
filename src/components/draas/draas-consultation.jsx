"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";
import DemoRequestModal from "../demo-request-modal";

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
export default function DraasConsultation() {
  const mainRef = useRef(null);
  const { isOpen, openModal, closeModal } = useModal();

  const mainInView = useInView(mainRef, {
    once: true,
    margin: "-50px",
  });
  return (
    <section
      className="md:min-h-screen relative flex flex-col  md:px-40 items-start  px-4  py-20 "
      style={{
        backgroundImage: "url(/images/draas_consultation.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <motion.div
        ref={mainRef}
        initial="hidden"
        animate={mainInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-3xl relative z-50 my-auto"
      >
        {/* Main heading */}
        <motion.div variants={slideUpVariants}>
          <h1 className="text-xl text-black leading-snug md:text-6xl mb-6">
            Get Your
            <motion.span
              className="text-[#113264] mx-10 font-bold inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Free DRaaS
            </motion.span>{" "}
            Consultation Today{" "}
          </h1>
        </motion.div>

        <motion.div variants={slideUpVariants}>
          <p className="text-md  text-black m-auto md:text-lg mb-8">
            Experience how infrastructure and insight come together to power
            your operations.{" "}
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          variants={slideUpVariants}
          className="flex flex-col md:flex-row  md:items-center items-start gap-4"
        >
          <motion.div
            className="inline-block bg-[#113264] hover:bg-[#113264] text-white px-8 py-3 rounded-full text-lg font-medium cursor-pointer"
            whileHover={{
              scale: 1.05,
            }}
            onClick={openModal}

            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Book a demo{" "}
          </motion.div>
        </motion.div>
      </motion.div>{" "}
      <DemoRequestModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
