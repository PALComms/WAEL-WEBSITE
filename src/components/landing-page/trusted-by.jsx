"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMotionAnimation } from "@/hooks/useMotionAnimation";
import Image from "next/image";

export function TrustedByMarquee() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const { ref, isInView, animations } = useMotionAnimation({
    once: true,
    margin: "-50px",
  });

  const [marqueeWidth, setMarqueeWidth] = useState(0);

  const companies = [
    "/images/total.svg",
    "/images/chevron.svg",
    "/images/shell.svg",
    "/images/halliburton.svg",
    "/images/agip.svg",
    "/images/oando.svg",
    "/images/seplat.svg",
    "/images/mobil.svg",
    "/images/conoil.svg",
    "/images/slb.png",
    "/images/shell_drilling.png",
    "/images/nlng.png",
    "/images/renaissance.svg",
    "/images/nnpc.svg",
  ];

  // Calculate marquee width based on parent container
  useEffect(() => {
    if (typeof window === "undefined") return; // ⛔ skip on server

    const updateWidth = () => {
      if (containerRef.current) {
        setMarqueeWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Create 4 rows with different company distributions
  const createMarqueeRows = () => {
    const rows = [];
    const companiesPerRow = Math.ceil(companies.length / 4);

    for (let i = 0; i < 4; i++) {
      const start = i * companiesPerRow;
      const end = start + companiesPerRow;
      const rowCompanies = [
        ...companies.slice(start, end),
        ...companies.slice(start, end),
      ];
      rows.push(rowCompanies);
    }

    return rows;
  };

  const marqueeRows = createMarqueeRows();

  return (
    <section ref={ref} className="py-16 bg-[#F0F0F0] overflow-hidden">
      <div className="md:pl-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Header Section */}
          <div className="lg:w-1/3 md:space-y-4 p-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:text-5xl text-2xl font-bold text-gray-900 "
            >
              Trusted by
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:text-5xl text-3xl font-bold text-blue-900 "
            >
              Global Leaders
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:text-5xl text-3xl text-gray-700 mb-4"
            >
              Across Industries
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600"
            >
              Leading energy and industrial companies trust WAEL for their most
              critical operations
            </motion.p>
          </div>

          {/* Marquee Section */}
          <div ref={containerRef} className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 4.8, delay: 0.8 }}
              className="relative w-full space-y-4"
            >
              {marqueeRows.map((rowCompanies, rowIndex) => (
                <div
                  key={rowIndex}
                  className="relative overflow-hidden"
                  style={{ height: "120px" }}
                >
                  <motion.div
                    ref={marqueeRef}
                    className="flex absolute top-0 left-0"
                    animate={
                      isInView
                        ? animations.marqueeAnimation(
                            20 + rowIndex * 8, // ⬅️ Increased duration for slower speed
                            rowIndex % 2 === 0 ? "left" : "right"
                          )
                        : {}
                    }
                    style={{ width: marqueeWidth * 2 }}
                  >
                    {rowCompanies.map((company, companyIndex) => (
                      <motion.div
                        key={`${rowIndex}-${companyIndex}`}
                        className="flex-shrink-0   border-gray-100 mx-2"
                        whileHover={animations.hoverLift}
                        style={{
                          minWidth: "140px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={company}
                          alt="icon"
                          width={100}
                          height={100}
                          className="mix-blend-multiply brightness-110 contrast-125 object-contain"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}