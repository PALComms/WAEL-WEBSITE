"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    companyEmail: "",
    sector: "",
    services: []
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const sectorOptions = [
    "Technology",
    "Healthcare",
    "Finance & Banking",
    "Education",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Construction & Engineering",
    "Government & Public Sector",
    "Non-profit & NGOs",
    "Hospitality & Tourism",
    "Agriculture",
    "Pharmaceuticals",
    "Telecommunications",
    "Media & Entertainment",
    "Real Estate",
    "Professional Services",
    "Other",
  ];

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Services",
    "Cloud Solutions",
    "Data Analytics",
    "AI & Machine Learning",
    "IT Consulting",
    "Software Maintenance",
    "E-commerce Solutions",
    "Custom Software Development"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://wael-server-1.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          formType: "contact", 
          ...formData 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setPopup({
          show: true,
          type: "success",
          message: "✅ Message sent successfully!",
        });
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          companyEmail: "",
          sector: "",
          services: []
        });
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message: "❌ Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup({ show: false, type: "", message: "" }), 3000);
    }
  };

  return (
    <section className="relative flex flex-col justify-center w-full h-screen overflow-hidden">
      {/* Background Static Map */}
      <div className="absolute inset-0">
        <Image
          src="/images/map_bg.jpg"
          alt="Map background"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

      {/* Contact Card */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] py-12 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-6xl p-6 space-y-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
        <h3 className="text-[#113264] font-bold text-lg md:text-3xl uppercase mb-10">
          Contact Form
        </h3>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Email Address
              </label>
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sector Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What sector does your organization operate in?
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-0 border-b-2 dark:bg-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
              >
                <option value="">Select a sector</option>
                {sectorOptions.map((sector, index) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            {/* Services Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Which service(s) are you interested in?
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {serviceOptions.map((service, i) => (
                  <motion.label
                    key={i}
                    className="flex items-center space-x-3 cursor-pointer group py-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 accent-[#113264]"
                    />
                    <span className="text-sm  text-gray-700 group-hover:text-gray-900">
                      {service}
                    </span>
                  </motion.label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-6">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-fit py-3 px-8 rounded-full font-medium text-white transition-colors duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#113264] hover:bg-[#0d254c]"
              }`}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit →"
              )}
            </motion.button>
          </div>
        </form>
      </div>

      {/* ✅ Animated Popup */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`fixed bottom-6 right-6 px-5 py-3 rounded-xl text-white shadow-lg ${
              popup.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {popup.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}