"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DataHeader() {
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
const {push} = useRouter()
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
            className="text-4xl lg:text-5xl font-normal  text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={helpers.conditionalAnimation({
              scale: 1.02,
              transition: { duration: 0.3 },
            })}
          >
            {/* Powerful Infrastructure. Smarter Data. */}
            Data Management & Analysis:
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
             push('/contact')
            }
            whileHover={helpers.conditionalAnimation({
              scale: 1.05,
              backgroundColor: "#0a2540",
              boxShadow: "0 10px 25px -5px rgba(17, 50, 100, 0.4)",
              transition: { type: "spring", stiffness: 400 },
            })}
            whileTap={animations.tapScale}
          >
            Speak to our team
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
            {/* From world-class data centers to advanced data management tools,
            evreything you need to store, protect, and use your data efficiently */}
            WAEL delivers end-to-end data solutions that transform how
            businesses collect, secure, and leverage information. We make your
            data reliable, accessible, and actionable—helping you move
            confidently from guesswork to growth.
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
            className="w-full h-full object-cover"
            src="/images/data-bg.svg"
            alt="Data Management and Analysis"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
