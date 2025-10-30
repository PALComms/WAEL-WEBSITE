"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import { icons, industries } from "./data";

export default function Industries() {
  const {
    ref: containerRef,
    isInView,
    animations,
    helpers,
    variants,
  } = useMotionAnimation({
    once: true,
    margin: "-50px",
  });

  return (
    <section ref={containerRef} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-7xl font-bold text-black dark:text-white mb-4"
            whileHover={helpers.conditionalAnimation({
              scale: 1.02,
            //   color: "#113264",
              transition: { duration: 0.3 },
            })}
          >
            Industries <span className="text-[#113264] font-bold"> Served</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trotter is built for operations where safety, compliance, and
            real-time personnel visibility are non-negotiable.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={variants.staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={variants.scaleUp}
              className="group cursor-pointer"
              whileHover={helpers.conditionalAnimation({
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              })}
              custom={index}
            >
              <motion.div
                className="  rounded-xl p-6  transition-all duration-300 h-full text-center"
                whileHover={helpers.conditionalAnimation({
                  backgroundColor: "#113264",
                  color: "#ffffff",
                  scale: 1.02,
                  transition: { duration: 0.3 },
                })}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16  rounded-full flex items-center justify-center text-[#113264] dark:text-[#113264] hover:text-white  mx-auto mb-4"
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
                  className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {industry.title}
                </motion.h3>

                {/* Hover Indicator */}
                {/* <motion.div
                  className="h-1 bg-blue-500 rounded-full mt-3 opacity-0 group-hover:opacity-100 mx-auto"
                  initial={{ width: 0 }}
                  whileHover={{ width: "50%" }}
                  transition={{ duration: 0.3 }}
                /> */}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
