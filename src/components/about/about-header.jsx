"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StatsImageGrid() {
  const {
    ref: containerRef,
    isInView,
    animations,
    helpers,
    animationProps
  } = useMotionAnimation({
    once: true,
    margin: "-50px",
  });

  const stats = [
    {
      number: "2000+",
      label: "Clients",
      description: "Across multiple industries",
      image: "/images/oil-rig.png",
      bgColor: "bg-[#D5EFFF]",
      animationDelay: 0.2
    },
    {
      number: "15+",
      label: "Years",
      description: "Industry experience",
      image: "/images/worker.png",
      bgColor: "bg-[#FFF394]",
      animationDelay: 0.4
    },
  ];

  return (
    <div ref={containerRef} className="md:py-16 py-4 px-4 bg-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex flex-col items-center justify-center my-4 mb-12"
      >
        <motion.h3
          className="text-4xl md:text-6xl text-center font-bold flex md:flex-row flex-col items-center gap-2 mt-10 text-gray-900 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={helpers.conditionalAnimation({
            scale: 1.05,
            // color: "#2563eb",
            transition: { duration: 0.3 }
          })}
        >
          About our
          <motion.span 
            className="font-bold block leading-tight text-[#113264]"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            Company
          </motion.span>
        </motion.h3>
        
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={helpers.conditionalAnimation({
            scale: 1.02,
            color: "#2563eb",
            transition: { duration: 0.3 }
          })}
        >
          Enhancing safety and data resilience in high-impact industries
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* First Column - Image then Stats */}
          <div className="space-y-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={helpers.conditionalAnimation({
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              })}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={stats[0].image}
                alt={stats[0].label}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className={`flex items-start space-x-4 p-6 ${stats[0].bgColor} rounded-lg transition-colors duration-300 shadow-md`}
              whileHover={helpers.conditionalAnimation({
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 400 }
              })}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.h3
                  className="text-xl flex gap-1 items-center font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={helpers.conditionalAnimation({
                    color: "#2563eb",
                    x: 5,
                    transition: { duration: 0.2 }
                  })}
                >
                  <motion.span 
                    className="text-2xl font-bold block leading-tight text-[#113264]"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 0.7 
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {stats[0].number}
                  </motion.span>
                  {stats[0].label}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ color: "#4b5563" }}
                >
                  {stats[0].description}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Middle Column - Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              type: "spring",
              stiffness: 70
            }}
            whileHover={helpers.conditionalAnimation({
              scale: 1.08,
              rotateY: 5,
              transition: { type: "spring", stiffness: 200 }
            })}
            className="rounded-xl h-full overflow-hidden shadow-2xl"
          >
            <Image
              src={"/images/engineers.png"}
              alt="Company Overview"
              width={500}
              height={400}
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>

          {/* Third Column - Stats then Image */}
          <div className="space-y-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: -50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className={`flex items-start space-x-4 p-6 ${stats[1].bgColor} rounded-lg transition-colors duration-300 shadow-md`}
              whileHover={helpers.conditionalAnimation({
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 400 }
              })}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.h3
                  className="text-xl font-bold flex items-center gap-2 text-gray-900 mb-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={helpers.conditionalAnimation({
                    color: "#2563eb",
                    x: -5,
                    transition: { duration: 0.2 }
                  })}
                >
                  <motion.span 
                    className="text-2xl font-bold block leading-tight text-[#113264]"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 0.7 
                    }}
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    {stats[1].number}
                  </motion.span>
                  {stats[1].label}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ color: "#4b5563" }}
                >
                  {stats[1].description}
                </motion.p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={helpers.conditionalAnimation({
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              })}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={stats[1].image}
                alt={stats[1].label}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Decorative Elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-12 space-x-4"
        >
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-[#113264] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}