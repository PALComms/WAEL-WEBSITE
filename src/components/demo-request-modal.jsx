import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SuccessModal from "./success-modal";

const DemoRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    companyEmail: "",
    sector: "",
    services: [],
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://wael-server-1.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "demo",
          formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Demo request sent successfully!");
        setFormData({
          fullName: "",
          companyName: "",
          companyEmail: "",
          sector: "",
          services: [],
        });
        setShowSuccess(true);
        onClose();
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("❌ Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    "Trotter – Personnel Onboarding & Tracking",
    "Software Development",
    "OnQ DRaaS – Business Continuity & Disaster Recovery",
    "Data Management & Analysis",
    "Onshore Safety Permit (OSP)",
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4  bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[70vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl text-center md:text-3xl font-semibold text-gray-800">
                  Demo Request Form
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      className="w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                      className="w-full px-3 py-2 border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-black bg-white"
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
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {service}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start pt-4">
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

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        autoCloseDelay={5000}
      />
    </>
  );
};

export default DemoRequestModal;