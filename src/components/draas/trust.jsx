"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const list = [
  "15+_ Years in business",
  " 0_ Ransomware attacks",
  " <5_ min Recovery time",
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
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
      duration: 0.8,
    },
  },
};

const numberVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.6,
    },
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

export default function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="bg-[#F0F0F0] py-16 space-y-10 px-4 md:px-8 lg:px-16">
      <motion.h2 
        className="md:text-7xl dark:text-black max-w-3xl text-3xl font-normal text-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Built on a Foundation <br /> of{" "}
        <motion.span 
          className="text-[#113264] font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          Trust
        </motion.span>
      </motion.h2>

      <motion.div 
        className="flex mt-10 gap-8 md:flex-row flex-col justify-around items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {list?.map((item, index) => {
          const [numberPart, textPart] = item.split('_');
          
          return (
            <motion.div 
              key={index}
              className="font-bold md:text-3xl flex  justify-center items-center gap-2 text-2xl text-center md:w-1/4 w-full"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.span 
                className="text-[#113264] dark:text-black block text-4xl md:text-5xl mb-2"
                variants={numberVariants}
              >
                {numberPart.trim()}
              </motion.span>
              <motion.span 
                className="text-gray-800 mt-0 text-lg md:text-xl font-normal block"
                variants={textVariants}
              >
                {textPart.trim()}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}