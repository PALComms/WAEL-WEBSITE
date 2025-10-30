"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import DemoRequestModal from "../demo-request-modal";
import { useModal } from "@/hooks/useModal";

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
export default function DraasHeader() {
  const mainRef = useRef(null);
  const { isOpen, openModal, closeModal } = useModal();

  const mainInView = useInView(mainRef, {
    once: true,
    margin: "-50px",
  });
  return (
    <header
      className="md:h-[75vh] flex flex-col py-24 justify-end"
      style={{
        backgroundImage: "url(/images/qorum_bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        ref={mainRef}
        initial="hidden"
        animate={mainInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Main heading */}
        <motion.div variants={slideUpVariants}>
          <h1 className="text-3xl text-white leading-snug md:text-6xl mb-6">
            Never Let Downtime Stop Your{" "}
            <motion.span
              className="text-[#FFE629] font-bold inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Business
            </motion.span>{" "}
          </h1>
        </motion.div>

        <motion.div variants={slideUpVariants}>
          <p className="text-md max-w-3xl text-white m-auto md:text-lg mb-8">
            In partnership with Quorum USA we provide Enterprise-grade Disaster
            Recovery as a Service (DRaaS) with instant recovery, immutable
            backups, and compliance-ready protection.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          variants={slideUpVariants}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <motion.div
            onClick={openModal}
            className="inline-block bg-[#FFE629] hover:bg-[#FFE629] text-black px-8 py-3 rounded-full text-lg font-medium cursor-pointer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Request a Demo
          </motion.div>
          <Link href="/contact">
            <motion.div
              className="inline-block border-[#FFE629] border  text-[#fff] px-8 py-3 rounded-full text-lg font-medium cursor-pointer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Download Brochure
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <DemoRequestModal isOpen={isOpen} onClose={closeModal} />
    </header>
  );
}
