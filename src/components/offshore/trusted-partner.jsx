"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedPartner() {
  return (
    <section className="relative bg-[#113264] dark:bg-[#0a1b33] md:py-12 py-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        {/* Animated circles */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 dark:bg-blue-300/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-400/10 dark:bg-yellow-200/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 dark:bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-center w-full md:w-[75%] lg:w-[55%] mx-auto text-3xl md:text-6xl lg:text-7xl font-bold text-white py-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          Your Trusted Partner for{" "}
          <motion.span
            className="text-[#FFE629]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 230, 41, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            Offshore Safety Compliance
          </motion.span>{" "}
          in Nigeria
        </motion.h2>

        {/* Body */}
        <div className="flex flex-col lg:flex-row justify-around px-4 md:px-8 lg:px-12 items-center text-white gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="w-full lg:w-auto"
          >
            <Image
              src="/images/ncprc.webp"
              alt="NUPRC Certification"
              width={500}
              height={500}
              className="w-full max-w-md lg:max-w-none rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 70,
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-white/90 dark:text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
            >
              WAEL is appointed by the Nigerian Upstream Petroleum Regulatory
              Commission (NUPRC) to manage the Offshore Safety Permit (OSP) —
              the official Personnel Accountability System for Nigeria's oil and
              gas industry. All companies operating offshore, in swamps, or on
              inland waterways are required to register their personnel. Our
              secure, real-time system tracks workforce movement,
              qualifications, and competences, ensuring safety, compliance, and
              operational efficiency.
            </motion.h3>

            {/* CTA */}
            <motion.button
              className="bg-[#FFE629] cursor-pointer hover:bg-[#FFD700] px-6 md:px-8 py-3 md:py-4 rounded-full text-[#202020] font-semibold text-lg md:text-xl flex items-center gap-3 w-fit shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 230, 41, 0.4)",
                transition: { type: "spring", stiffness: 400 },
              }}
              onClick={() =>
                window.open(
                  "https://osp.nuprc.gov.ng/ospportal/Personnel/Osp.aspx",
                  "_blank"
                )
              }
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              Start Your OSP Registration
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-1"
                initial={{ x: 0 }}
                whileHover={{
                  x: 6,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                  },
                }}
              >
                <path
                  fill="currentColor"
                  d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
