"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import { draasIndustriesData } from "./data";
import Image from "next/image";

export default function DraasIndustries() {
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
      <div className="container mx-auto max-w-7xl px-4">
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
            Industries{" "}
            <span className="text-[#113264] font-bold"> We Serve</span>
          </motion.h2>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={variants.staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center md:flex-row flex-col gap-6 md:gap-4"
        >
          {draasIndustriesData.map((industry, index) => (
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
                className="  rounded-xl p-3  transition-all duration-300 h-full text-center"
            
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
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    width={40}
                    height={40}
                  />
                  {/* {industry.icon} */}
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
                <motion.p
                  className="text-md font-bold text-white dark:text-white group-hover:text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {industry.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
