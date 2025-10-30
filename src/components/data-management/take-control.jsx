"use client";
import { useModal } from "@/hooks/useModal";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import DemoRequestModal from "../demo-request-modal";

export default function TakeControl() {
  const {
    ref: containerRef,
    isInView,
    animations,
    helpers,
    animationProps,
  } = useMotionAnimation({
    once: true,
    margin: "-50px",
  });
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <section
      ref={containerRef}
      className="relative min-h-[700px] flex items-center  py-4 px-4 overflow-hidden"
      style={{
        backgroundImage: " url('/images/expert-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#113264]/90 to-[#1e4a8e]/80"></div> */}

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 -mt-24 text-center text-white max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={helpers.conditionalAnimation({
            scale: 1.02,
            transition: { duration: 0.3 },
          })}
        >
          Ready to Take Control of Your Data?{" "}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed  mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          whileHover={helpers.conditionalAnimation({
            scale: 1.01,
            transition: { duration: 0.3 },
          })}
        >
          Experience how infrastructure and insight come together to power your
          operations.{" "}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-[#FFE629] cursor-pointer text-[#202020] px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg group relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          onClick={openModal}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={helpers.conditionalAnimation({
            scale: 1.05,
            backgroundColor: "#FFD700",
            boxShadow: "0 15px 30px -5px rgba(255, 230, 41, 0.4)",
            transition: { type: "spring", stiffness: 400 },
          })}
          whileTap={animations.tapScale}
        >
          {/* Button shine effect */}
          <motion.span
            className="absolute inset-0 bg-white/30"
            initial={{ x: "-100%", skewX: "-20deg" }}
            whileHover={{ x: "200%", skewX: "-20deg" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <span className="relative z-10 flex items-center gap-2">
            Request a demo
          </span>
        </motion.button>
      </div>
      <DemoRequestModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
