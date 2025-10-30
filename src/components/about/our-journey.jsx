"use client";
import { motion } from "framer-motion";

export default function OurJourney() {
  const values = [
    {
      title: "The Foundation",
      description:
        " West Atlantic Energy Nigeria Limited (WAEL) is a service company established in 2010, dedicated to providing technology-driven solutions that enhance safety and operational resilience across Nigeria’s high-impact industries",
      icon: "🛡️",
    },
    {
      title: "A Key Milestone",
      description:
        "WAEL was appointed by the Department of Petroleum Resources (DPR), now known as Nigerian Upstream Petroleum Regulatory Commission (NUPRC), to manage the Offshore Safety Permit (OSP), the official Personnel Accountability System for Nigeria's oil and gas industry. This appointment solidified our role as a trusted partner in ensuring safety and compliance offshore, in swamps, and on inland waterways.",
      icon: "🤝",
    },
    {
      title: "Expanding Our Reach",
      description:
        "Building on the success of the OSP system, we expanded our service portfolio to include advanced personnel tracking (Trotter), robust Data Management solutions, and enterprise-grade Disaster Recovery as a Service (DRaaS), serving a wider range of sectors from oil and gas to finance, telecommunications, and logistics, while also delivering solutions for small to medium-sized organizations.",
      icon: "⭐",
    },
    {
      title: "Today & The Future",
      description:
        "WAEL continues to deliver intelligent, scalable solutions that help businesses operate more efficiently, securely, and in full compliance with industry regulations, upholding our core values of Integrity, Innovation, and Customer-centricity.",
      icon: "📈",
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-24 mx-auto py-12 bg-white dark:bg-white transition-colors duration-300">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-medium text-black mb-4"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            Our <span className="text-[#113264] font-bold">Journey</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600  max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Appointed by Nigerian Upstream Petroleum Regulatory
              Commission (NUPRC) for OSP compliance, we've grown to become
            Nigeria's trusted partner for safety and operational excellence.
          </motion.p>
        </motion.div>

        {/* Timeline for Desktop */}
        <div className="hidden lg:block mt-16">
          <div className="relative">
            {/* Center Dots */}
            {values.map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#113264] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                style={{
                  top: `${10 + index * 25}%`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.5,
                  backgroundColor: "#FFE629",
                  transition: { duration: 0.3 },
                }}
              />
            ))}

            {/* Timeline Items */}
            <div className="space-y-8">
              {values.map((value, index) => {
                const isOdd = index % 2 === 1;
                return (
                  <motion.div
                    key={index}
                    className={`flex items-start p-6 transition-shadow duration-300 w-[50%] ${
                      isOdd ? "ml-auto" : ""
                    }`}
                    initial={{ opacity: 0, x: isOdd ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                      type: "spring",
                      stiffness: 80,
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <div
                      className={`flex-1 w-[45%] ${
                        isOdd ? "text-right" : "text-left"
                      }`}
                    >
                      <motion.h3
                        className="text-4xl lg:text-6xl font-bold text-[#113264] mb-3"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {value.title}
                      </motion.h3>
                      <motion.p
                        className="text-[#113264]  w-full lg:w-[90%] text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                      >
                        {value.description}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mt-10">
          <div className="relative">
            {/* Dots for Mobile */}
            {values.map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-6 w-6 h-6 bg-[#113264] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                style={{
                  top: `${20 + index * 25}%`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              />
            ))}

            {/* Timeline Items */}
            <div className="space-y-8 ml-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="relative p-4 bg-white  rounded-lg shadow-sm"
                  style={{
                    marginTop: index === 0 ? "0" : "4rem",
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                >
                  <motion.h3 className="text-2xl font-bold text-[#113264] mb-3">
                    {value.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#113264] dark:text-gray-200 text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
