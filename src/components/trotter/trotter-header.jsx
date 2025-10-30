"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function TrotterHeader() {
  const mainRef = useRef(null);
  const { isOpen, openModal, closeModal } = useModal();

  const mainInView = useInView(mainRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section className="relative py-10 px-4 bg-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto relative z-20">
        {/* Main content section */}
        <motion.div
          ref={mainRef}
          initial="hidden"
          animate={mainInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Main heading */}
          <motion.div variants={slideUpVariants}>
            <h1 className="text-3xl dark:text-black leading-snug md:text-6xl mb-6">
              Personal Accountability. Total Control{" "}
              <motion.span
                className="text-[#113264] font-bold inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                One Platform
              </motion.span>{" "}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={slideUpVariants}>
            <p className="text-md max-w-3xl dark:text-black m-auto md:text-lg mb-8">
              Streamline personnel onboarding, site access, accountability, and
              reporting across complex operations, all from a single platform.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <motion.div
              onClick={openModal}
              className="inline-block bg-[#113264] cursor-pointer hover:bg-[#113264] text-white px-8 py-3 rounded-full text-lg font-medium cursor-pointer"
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
                className="inline-block border-[#113264] border  text-[#113264] px-8 py-3 rounded-full text-lg font-medium cursor-pointer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Explore Solutions
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <Image
          src={"/images/trotter-header.png"}
          className="w-full rounded-xl mt-10"
          alt=""
          width={500}
          height={500}
        />
      </div>

      <DemoRequestModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
