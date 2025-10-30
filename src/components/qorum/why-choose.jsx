"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyChoose() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const benefits = [
    {
      id: 1,
      title: "Quorum partnership & global DRaaS tech.",
      bgColor: "bg-[#E6F4FE] dark:bg-[#1E3A5F]",
      textColor: "text-[#113264] dark:text-white",
      numberColor: "text-gray-400 dark:text-gray-500",
      colSpan: "md:col-span-2 col-span-3",
    },
    {
      id: 2,
      title: "Compliance-ready (NUPRC, ISO 22301)",
      bgColor: "bg-[#F0F0F0] dark:bg-[#2E2E2E]",
      textColor: "text-[#202020] dark:text-gray-100",
      numberColor: "text-gray-400 dark:text-gray-500",
      colSpan: "md:col-span-1 col-span-3",
    },
    {
      id: 3,
      title: "Local expertise & 24/7 support.",
      bgColor: "bg-[#FFFAB8] dark:bg-[#4A431A]",
      textColor: "text-[#473B1F] dark:text-white",
      numberColor: "text-gray-400 dark:text-gray-500",
      colSpan: "md:col-span-1 col-span-3",
    },
    {
      id: 4,
      title: "Flexible pricing & scalable architecture",
      bgColor: "bg-[#E6F6EB] dark:bg-[#1E3A2A]",
      textColor: "text-[#193B2D] dark:text-white",
      numberColor: "text-gray-400 dark:text-gray-500",
      colSpan: "md:col-span-2 col-span-3",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-7xl text-gray-900 dark:text-white mb-4"
            whileHover={{
              scale: 1.03,
              color: "#113264",
              transition: { duration: 0.3 },
            }}
          >
            What Sets Us Apart
          </motion.h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className={`${benefit.colSpan} ${benefit.bgColor} p-8 rounded-lg shadow-sm`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                rotateZ: 0.5,
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{
                scale: 0.96,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <div className="flex flex-col h-full space-x-4">
                {/* Animated Number */}
                <motion.div
                  className={`${benefit.numberColor} font-bold self-end text-2xl md:text-4xl`}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    },
                  }}
                >
                  {benefit.id}.
                </motion.div>

                {/* Content */}
                <motion.p
                  className={`${benefit.textColor} font-medium mt-auto text-lg md:text-[28px] leading-relaxed`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  {benefit.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
