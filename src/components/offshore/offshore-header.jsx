"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OffshoreHeader() {
  const {
    ref: containerRef,
    isInView,
    animations,
    helpers,
  } = useMotionAnimation({
    once: true,
    margin: "-50px",
  });
  return (
    <section
      ref={containerRef}
      className="w-full dark:bg-white overflow-hidden"
    >
      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-around py-6 px-4 md:px-8 lg:px-12 gap-8 lg:gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column - Title & Button */}
        <motion.div
          className="w-full lg:w-1/3 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold  text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={helpers.conditionalAnimation({
              scale: 1.02,
              transition: { duration: 0.3 },
            })}
          >
            Offshore safety permit
          </motion.h1>

          <motion.button
            className="bg-[#113264] cursor-pointer w-full md:w-[70%] lg:w-[80%] xl:w-[50%] rounded-full px-6 py-3 md:px-8 md:py-4 text-white font-semibold text-lg md:text-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            onClick={() =>
              window.open(
                "https://osp.nuprc.gov.ng/ospportal/Personnel/Osp.aspx",
                "_blank"
              )
            }
            whileHover={helpers.conditionalAnimation({
              scale: 1.05,
              backgroundColor: "#0a2540",
              boxShadow: "0 10px 25px -5px rgba(17, 50, 100, 0.4)",
              transition: { type: "spring", stiffness: 400 },
            })}
            whileTap={animations.tapScale}
          >
            Get Your OSP Today!
          </motion.button>
        </motion.div>

        {/* Right Column - Description */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.p
            className="text-lg md:text-xl lg:text-2xl  text-gray-700 text-justify leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={helpers.conditionalAnimation({
              scale: 1.01,
              transition: { duration: 0.3 },
            })}
          >
            Appointed by the Nigerian Upstream Petroleum Regulatory Commission
            (NUPRC) to manage the Offshore Safety Permit (OSP), the official
            Personnel Accountability System for Nigeria's oil & gas industry. We
            ensure safe, compliant, and efficient personnel tracking for
            offshore, swamp, and inland waterway operations.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        className="w-full h-[30rem] md:h-[40rem] lg:h-[50rem] relative"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.div
          whileHover={helpers.conditionalAnimation({
            scale: 1.02,
            transition: { duration: 0.5 },
          })}
          className="w-full h-full"
        >
          <Image
            className="w-full h-full object-cover aspect-square"
            src="/images/osp.png"
            alt="Offshore Safety Permit Operations"
            fill
            priority
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </motion.div>

        {/* Overlay Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.div>
    </section>
  );
}
