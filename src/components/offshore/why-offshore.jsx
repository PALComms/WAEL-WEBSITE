"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { motion } from "framer-motion";

export default function WhyOffshore() {
  const {
    ref: containerRef,
    isInView,
    animations,
    helpers
  } = useMotionAnimation({
    once: true,
    margin: "-50px",
  });

  const benefits = [
    {
      id: 1,
      title: "Personnel Accountability in the Nigerian Oil and Gas Industry.",
      bgColor: "bg-[#E6F4FE]",
      textColor: "text-[#113264]",
      numberColor: "text-gray-400",
      colSpan: "md:col-span-2 col-span-3"
    },
    {
      id: 2,
      title: "Enhanced Safety and Security.",
      bgColor: "bg-[#FFFAB8]",
      textColor: "text-[#473B1F]",
      numberColor: "text-gray-400",
      colSpan: "md:col-span-1 col-span-3"
    },
    {
      id: 3,
      title: "Helps to Enforce Rest Periods",
      bgColor: "bg-[#F0F0F0]",
      textColor: "text-gray-900",
      numberColor: "text-gray-400",
      colSpan: "md:col-span-1 col-span-3"
    },
    {
      id: 4,
      title: "Holds details of persons to contact in case of emergency",
      bgColor: "bg-[#113264]",
      textColor: "text-white",
      numberColor: "text-gray-300",
      colSpan: "md:col-span-2 col-span-3"
    },
    {
      id: 5,
      title: "Enables operators to efficiently plan, monitor and control personnel movement to and from offshore facilities",
      bgColor: "bg-[#DAF1DB]",
      textColor: "text-gray-900",
      numberColor: "text-gray-400",
      colSpan: "col-span-3"
    }
  ];

  return (
    <section ref={containerRef} className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-7xl  text-gray-900 mb-4"
          >
            Why you should have an Offshore Safety Permit
          </motion.h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className={`${benefit.colSpan} ${benefit.bgColor} p-8 rounded-lg shadow-sm`}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={helpers.conditionalAnimation({
                y: -8,
                scale: 1.03,
                rotateZ: benefit.id === 5 ? 0 : 1,
                transition: { type: "spring", stiffness: 400 }
              })}
            >
              <div className="flex flex-col items-start space-x-4">
                {/* Animated Number */}
                <motion.div
                  className={`${benefit.numberColor} font-bold self-end text-2xl md:text-4xl flex-shrink-0`}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }
                  }}
                >
                  {benefit.id}.
                </motion.div>

                {/* Content */}
                <motion.p 
                  className={`${benefit.textColor} font-medium text-sm md:text-4xl leading-relaxed`}
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