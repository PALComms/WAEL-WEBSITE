"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Osp() {
  const ospRequirements = [
    {
      id: 1,
      title: "Nigerian Offshore Workers",
      description:
        "All Nigerian nationals working in offshore oil & gas operations.",
      icon: "/images/workers.svg",
    },
    {
      id: 2,
      title: "Expatriate Offshore Workers",
      description: "Foreign nationals employed in Nigerian offshore facilities.",
      icon: "/images/web.svg",
    },
    {
      id: 3,
      title: "State Dignitaries Visiting an Offshore Location",
      description: "Government officials visiting offshore installations.",
      icon: "/images/bank.svg",
    },
    {
      id: 4,
      title: "State VIPs Visiting an Offshore Location",
      description: "Very Important Persons requiring offshore access.",
      icon: "/images/crown.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="bg-[#F0F0F0] dark:bg-gray-900 transition-colors duration-300 px-4 md:px-8 lg:px-40 py-12 lg:py-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          whileHover={{ scale: 1.05, color: "#113264", transition: { duration: 0.3 } }}
        >
          Who Requires An OSP
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Comprehensive coverage for all personnel involved in Nigeria's
          offshore oil & gas operations.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {ospRequirements.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6 gap-4"
          >
            {/* Icon */}
            <motion.div
              className="w-full flex items-center justify-center h-[10rem] bg-[#F0F0F0] dark:bg-gray-700 rounded-xl p-4 group-hover:bg-blue-50 transition-colors duration-300"
              whileHover={{
                rotate: [0, -4, 4, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mt-2"
              whileHover={{ color: "#113264", transition: { duration: 0.2 } }}
            >
              {item.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {item.description}
            </motion.p>

            {/* Hover Indicator */}
            <motion.div
              className="w-0 h-1 bg-[#113264] rounded-full mt-2"
              whileHover={{ width: 48 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
