"use client";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import { color, motion } from "framer-motion";

export default function MissionVision() {
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

  const cards = [
    {
      type: "mission",
      title: "Our",
      colorPart: "Mission",
      description: "Our mission is to provide unparalleled services and world-class solutions to the oil and gas industry, ensuring the overwhelming satisfaction of valued clients through our robust knowledge and application of technologies.",
      background: "url('/images/mission.svg')",
      hasOverlay: false,
      textColor: "text-gray-900",
      bgColor: "bg-white",
      color: "#113264"
    },
    {
      type: "vision",
      title: "Our",
      colorPart: "Vision",
      description: "Our vision is to be the leading provider of innovative safety and compliance solutions in the energy sector, driving industry standards and creating safer working environments through cutting-edge technology and expertise.",
      background: "url('/images/vision.svg')",
      hasOverlay: true,
      textColor: "text-white",
      bgColor: "bg-transparent",
      color: "#FFF394"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#F0F0F0] py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={card.type}
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={helpers.conditionalAnimation({
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              })}
            >
              <div 
                className={`h-[500px] lg:h-[800px] relative ${card.bgColor} p-8 flex flex-col `}
                style={{
                  backgroundImage: card.background,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Overlay for vision card */}
                {card.hasOverlay && (
                  <div className="absolute inset-0 bg-black/60 z-0"></div>
                )}
                
                {/* Content */}
                <div className={`relative z-10 ${card.textColor} max-w-md mx-auto text-center`}>
                  <motion.h2 
                    className="text-3xl md:text-4xl flex gap-2 justify-center font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    whileHover={helpers.conditionalAnimation({
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    })}
                  >
                    {card.title}
                    <span  style={{color:card.color}}>{card.colorPart}</span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    whileHover={helpers.conditionalAnimation({
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    })}
                  >
                    {card.description}
                  </motion.p>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-1 ${
                    card.hasOverlay ? 'bg-yellow-400' : 'bg-blue-600'
                  } rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "4rem" } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                  whileHover={helpers.conditionalAnimation({
                    width: "6rem",
                    transition: { duration: 0.3 }
                  })}
                />
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}