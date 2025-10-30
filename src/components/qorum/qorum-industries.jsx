"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import { icons, industries } from "./data";

export default function QorumIndustries() {
  const { ref: containerRef, isInView, helpers, variants } =
    useMotionAnimation({
      once: true,
      margin: "-50px",
    });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight"
            whileHover={helpers.conditionalAnimation({
              scale: 1.02,
              transition: { duration: 0.3 },
            })}
          >
            Industries{" "}
            <span className="text-[#113264] dark:text-[#6CA0DC] font-extrabold">
              We Serve
            </span>
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Empowering businesses across diverse industries with modern digital
            solutions and strategic innovation.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={variants.staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={variants.scaleUp}
              className="group cursor-pointer"
              whileHover={helpers.conditionalAnimation({
                y: -6,
                transition: { type: "spring", stiffness: 300 },
              })}
              custom={index}
            >
              <motion.div
                className="rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-[#113264] dark:hover:bg-[#113264] p-6 transition-all duration-300 h-full flex flex-col items-center justify-center text-center"
                whileHover={helpers.conditionalAnimation({
                  scale: 1.04,
                  transition: { duration: 0.3 },
                })}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[#113264] dark:text-[#6CA0DC] bg-white dark:bg-gray-700 shadow-md mb-4 group-hover:bg-[#113264] group-hover:text-white transition-colors duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={helpers.conditionalAnimation({
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  })}
                >
                  {icons[industry.icon]}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {industry.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-sm md:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  {industry.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
