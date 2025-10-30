"use client";

import { motion } from "framer-motion";

export default function DataSolutions() {
  const benefits = [
    {
      id: 1,
      title: "Data Management",
      desc: "Simplify operations with centralized cloud storage, real-time analytics, automated reporting, and seamless integration with your existing tools.",
      bgColor: "bg-[#D5EFFF] dark:bg-[#1E3A5F]",
      textColor: "text-[#113264] dark:text-white",
    },
    {
      id: 2,
      title: "Business Intelligence (BI)",
      desc: "Unlock smarter decision-making through real-time dashboards, trend analysis, and actionable insights.",
      bgColor: "bg-[#F0F0F0] dark:bg-[#1C1C1C]",
      textColor: "text-[#202020] dark:text-gray-200",
    },
    {
      id: 3,
      title: "Business Analysis",
      desc: "Achieve accuracy and efficiency with data cleaning, transformation, and warehousing designed to scale with your business.",
      bgColor: "bg-[#F0F0F0] dark:bg-[#2A2A2A]",
      textColor: "text-[#202020] dark:text-gray-200",
    },
    {
      id: 4,
      title: "Data Integrity & Security",
      desc: "Safeguard sensitive information with built-in protection and compliance-ready frameworks.",
      bgColor: "bg-[#FFFAB8] dark:bg-[#3A3500]",
      textColor: "text-[#202020] dark:text-yellow-200",
    },
    {
      id: 5,
      title: "Scalable Infrastructure",
      desc: "Enterprise-grade systems that grow with your business needs.",
      bgColor: "bg-[#E6F6EB] dark:bg-[#1C3525]",
      textColor: "text-[#193B2D] dark:text-green-100",
    },
    {
      id: 6,
      desc: "With WAEL: No more guesswork—just reliable data, smarter decisions, and stronger performance.",
      bgColor: "bg-transparent",
      textColor: "text-[#000] dark:text-gray-100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            All-in-One Data Solutions
          </motion.h2>
          <motion.p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
            We provide the backbone and the brain of modern data operations.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className={`${benefit.bgColor} p-8 rounded-lg shadow-sm ${
                benefit.id === 6 ? "shadow-none rounded-none" : ""
              }`}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                rotateZ: benefit.id === 5 ? 0 : 0.8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col space-y-4">
                {benefit.title && (
                  <motion.h3
                    className={`${benefit.textColor} font-bold text-xl md:text-3xl`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    {benefit.title}
                  </motion.h3>
                )}
                <motion.p
                  className={`${benefit.textColor} ${
                    benefit.id === 6
                      ? "text-xl md:text-3xl leading-snug font-medium"
                      : "text-sm md:text-lg leading-relaxed font-normal"
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                  }}
                  viewport={{ once: true }}
                >
                  {benefit.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
