"use client";

import { motion } from "framer-motion";

export default function OffshoreSafetyPermit() {
  const ospServices = [
    {
      title: "First-time Registration",
      description:
        "Your initial OSP registration, including data capture and card issuance for new offshore personnel.",
      cta: "Register for Permit →",
      background: "/images/first-time.svg",
      hasOverlay: false,
    },
    {
      title: "Renewal",
      description:
        "Annual renewal of your OSP to maintain active status and continued offshore access.",
      cta: "Renew Permit →",
      background: "/images/renewal.svg",
      hasOverlay: true,
    },
    {
      title: "One-Time Flyer",
      description:
        "Request access for a single offshore trip without a full annual permit.",
      cta: "Request One-time Flyer →",
      background: "/images/one-time.svg",
      hasOverlay: true,
    },
    {
      title: "OSP Card Reprint",
      description:
        "Replacement card in case of loss, damage, or update to your details.",
      cta: "Reprint Your OSP Card →",
      background: "/images/osp-reprint.svg",
      hasOverlay: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const tapScale = { scale: 0.95 };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            Types Of Offshore Safety Permit
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ospServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="rounded-2xl overflow-hidden shadow-lg relative flex flex-col h-[420px] sm:h-[460px] group"
            >
              {/* Background image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.background})`,
                }}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              {service.hasOverlay && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 text-gray-900 dark:text-gray-100">
                <div>
                  <motion.h3
                    className="text-xl font-bold mb-3"
                    variants={cardVariants}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className={`text-sm leading-relaxed mb-6 ${
                      service.hasOverlay
                        ? "text-gray-200"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                    variants={cardVariants}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full cursor-pointer px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    service.hasOverlay
                      ? "bg-white/20 backdrop-blur-md hover:bg-white/30 text-white"
                      : "bg-[#113264] hover:bg-blue-900 text-white"
                  }`}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  onClick={() =>
                    window.open(
                      "https://osp.nuprc.gov.ng/ospportal/Personnel/Osp.aspx",
                      "_blank"
                    )
                  }
                  whileTap={tapScale}
                >
                  {service.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
