"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ✅ Icon mapping
const icons = {
  person: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M11.45 7.75a1 1 0 0 1 1-1h5.25a1 1 0 1 1 0 2h-5.25a1 1 0 0 1-1-1" />
        <path d="M15 11.5a1 1 0 0 1-1-1V5.25a1 1 0 1 1 2 0v5.25a1 1 0 0 1-1 1M7 5c-.792 0-1.5.679-1.5 1.6S6.208 8.2 7 8.2s1.5-.679 1.5-1.6S7.792 5 7 5M3.5 6.6C3.5 4.65 5.03 3 7 3s3.5 1.65 3.5 3.6s-1.53 3.6-3.5 3.6s-3.5-1.65-3.5-3.6" />
        <path d="M1 14.833c0-3.295 2.79-5.766 6.013-5.766c3.232 0 5.987 2.478 5.987 5.766V17a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766c-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002z" />
      </g>
    </svg>
  ),
  map: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
      <path
        fill="currentColor"
        d="M128 68a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0-112a84.09 84.09 0 0 0-84 84c0 30.42 14.17 62.79 41 93.62a250 250 0 0 0 40.73 37.66a4 4 0 0 0 4.58 0A250 250 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84.09 84.09 0 0 0-84-84"
      />
    </svg>
  ),
  emergency: (
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <path
        fill="currentColor"
        d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18"
      />
    </svg>
  ),
  messaging: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        d="m174.72 855.68l135.296-45.12l23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160S128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8l-46.272 115.584z"
      />
    </svg>
  ),
  tracking: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <rect width="9" height="6" x="6" y="14" rx="2" />
      <rect width="16" height="6" x="6" y="4" rx="2" />
      <path d="M2 2v20" />
    </svg>
  ),
};

const features = [
  {
    title: "Onboarding & Clearance",
    description:
      "Streamline the onboarding process with digital forms, document management, and training modules to ensure personnel are ready for deployment.",
    icon: "person",
    list: [
      "Digital pre-deployment onboarding for all personnel.",
      "Streamlined document and certification uploads and verification.",
      "Automated clearance rules based on medical status, training completion, and site-specific induction requirements.",
    ],
  },
  {
    title: "Real-Time Site Presence (SISO)",
    description:
      "Live tracking and management of personnel movement across sites with real-time visibility.",
    icon: "map",
    list: [
      "Live tracking of personnel sign-in and sign-out (SISO) status.",
      "Site- or zone-based visibility for precise location management.",
      "Support for mobile devices, on-site kiosks, and RFID technology.",
    ],
  },
  {
    title: "Compliance & Status Verification",
    icon: "emergency",
    list: [
      "Monitor personnel clearance and training status in real time.",
      "Automated alerts for compliance breaches or expirations.",
      "Custom rules for safety, training, and clearance verification.",
    ],
  },
  {
    title: "Automated Messaging",
    icon: "messaging",
    list: [
      "Broadcast critical communications instantly via SMS, email, and in-app notifications.",
      "Event-triggered alerts for incidents such as failed clearance checks or unauthorized entry attempts.",
    ],
  },
  {
    title: "Reporting Analytics",
    icon: "tracking",
    list: [
      "Customizable site usage dashboards for real-time insights.",
      "Comprehensive audit trails for full activity history and compliance reporting.",
      "Exportable reports in multiple formats (PDF, Excel) and API access for integration.",
    ],
  },
];

export default function PlatformFeatures() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section ref={containerRef} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            whileHover={{ scale: 1.02, color: "#113264", transition: { duration: 0.3 } }}
          >
            Platform Features
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete personnel management solution from onboarding to emergency response
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 dark:group-hover:border-blue-400 transition-all duration-300 h-full"
                whileHover={{
                  backgroundColor: "#113264",
                  color: "#ffffff",
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-[#113264] dark:text-blue-400 group-hover:text-white"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {icons[feature.icon]}
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#113264] dark:text-white group-hover:text-white">
                    {feature.title}
                  </h3>
                </div>

                {feature.description && (
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-200 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                )}

                <ul className="space-y-2">
                  {feature.list.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-[#113264] rounded-full mt-2 flex-shrink-0 group-hover:bg-white" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="h-1 bg-blue-500 rounded-full mt-4 opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
