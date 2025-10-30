"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    title: "Offshore Safety Permit",
    description: "24/7 technical expertise for continuous operations",
    image: "/images/offshore.png",
  },
  {
    title: "Onboard Personnel Tracking",
    description: "Innovative solutions for complex energy challenges",
    image: "/images/focus.svg",
  },
  {
    title: "OnQ Business Continuity and Disaster Recovery (DRaaS)",
    description: "End-to-end project execution with precision",
    image: "/images/onboard.svg",
  },
  {
    title: "Bespoke Application Development",
    description: "24/7 technical expertise for continuous operations",
    image: "/images/app-development.png",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const slideUpVariants = {
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
    },
  },
};

export default function Header() {
  const mainRef = useRef(null);
  const marqueeRef = useRef(null);

  const mainInView = useInView(mainRef, {
    once: true,
    margin: "-50px",
  });

  const marqueeInView = useInView(marqueeRef, {
    once: true,
    margin: "-100px",
  });
  const [width, setWidth] = useState(1440); // default fallback

  useEffect(() => {
    if (typeof window === "undefined") return; // ⛔ skip on server

    // Use ResizeObserver to track window size
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // set initial width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Duplicate items for seamless loop
  const marqueeItems = [...capabilities, ...capabilities];

  return (
    <section className="relative py-10 px-4 bg-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto relative z-20">
        {/* Main content section */}
        <motion.div
          ref={mainRef}
          initial="hidden"
          animate={mainInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={slideUpVariants}
            className="flex items-center justify-center dark:text-black border w-fit px-6 p-2 rounded-full m-auto gap-2 mb-8"
          >
            <span className="text-sm">NUPRC Licensed & ISO Certified</span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={slideUpVariants}>
            <h1 className="text-xl leading-snug md:text-6xl dark:text-black mb-6">
              Secure Data. Safer People.{" "}
              <motion.span
                className="text-[#223E81] font-bold inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Stronger Operations.
              </motion.span>{" "}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={slideUpVariants}>
            <p className="text-md max-w-3xl m-auto dark:text-black md:text-lg mb-8">
              WAEL delivers the technology and protection that keep businesses
              moving
            </p>
          </motion.div>

          {/* Button */}
          <motion.div variants={slideUpVariants}>
            <Link href="/contact">
              <motion.div
                className="inline-block bg-[#223E81] hover:bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-medium cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1a4b8c",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Find Your Solution
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          ref={marqueeRef}
          initial="hidden"
          animate={marqueeInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-12 w-full overflow-hidden"
        >
          <motion.div
            className="flex w-full space-x-6 py-4"
            animate={{
              x: [0, -width || -1440],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((capability, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 md:w-[50%] w-full rounded-xl overflow-hidden  group"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="relative w-full md:h-[30rem] h-[15rem]">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#113264] mb-2">
                    {capability.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
