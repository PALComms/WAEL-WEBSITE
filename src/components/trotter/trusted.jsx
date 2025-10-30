"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

const list = [
  {
    id: 1,
    title: "Secure & GDR Compliant",
    bgColor: "bg-[#E6F4FE]",
    textColor: "text-[#113264]",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    title: "ISO ready architecture",
    bgColor: "bg-[#F0F0F0]",
    textColor: "text-[#202020]",
    borderColor: "border-gray-300",
  },
  {
    id: 3,
    title: "Trusted by operators in high-risk environments",
    bgColor: "bg-[#E6F6EB]",
    textColor: "text-[#202020]",
    borderColor: "border-green-200",
  },
];

export default function Trusted() {
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
    <section ref={containerRef} className="py-16 md:px-20 px-4 bg-white dark:bg-gray-900">
      <div className="mx-auto  px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why We Are <span className="text-[#113264]">Trusted</span>
          </motion.h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 h-full justify-center">
          {/* Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={"/images/trusted.png"}
              alt="Trusted by Global Leaders"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* Trust Points */}
          <div className="flex-1 flex h-full flex-col mt-10 gap-6">
            {list.map((item, index) => (
              <motion.div
                key={item.id}
                className={`p-6 flex flex-col h-full rounded-lg ${item.bgColor} ${item.borderColor}  `}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={helpers.conditionalAnimation({
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400 },
                })}
              >
                <div className="flex flex-col   items-start justify-between">
                  {/* Number with enhanced animation */}
                  <motion.div
                    className="relative h-full self-end flex flex-col"
                    whileHover={helpers.conditionalAnimation({
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    })}
                  >
                    <motion.div
                      className={`w-16 h-16   ${item.bgColor} text-4xl  ${item.borderColor} flex  items-center justify-center`}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        },
                      }}
                    >
                      <motion.span
                        className={`text-4xl font-bold ${item.textColor} text-gray-400`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.3 + 0.2,
                        }}
                      >
                        {item.id}
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 w-[70%] ml-6">
                    <motion.h3
                      className={`text-2xl md:text-5xl font-semibold ${item.textColor} mb-2`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
