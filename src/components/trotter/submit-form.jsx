"use client";
import { useState } from "react";

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.industry.trim()) newErrors.industry = "Industry is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      try {
        const res = await fetch("/api/send-mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "trotter",
            formData,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setStatus("✅ Demo request sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            industry: "",
            message: "",
          });
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
    }
  };

  return (
    <div className="flex flex-col  dark:text-white md:flex-row dark:bg-white  justify-center py-10 px-6 md:px-20">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-between h-full  ">
        <div className="">
          <h1 className="text-6xl font-semibold dark:text-black text-black mb-4">
            Request a <span className="text-[#113260]">Demo</span>
          </h1>
          <p className="text-[#202020] dark:text-gray-700 mb-6 text-2xl max-w-md">
            See how Trotter can enhance safety and accountability in your
            operations. Our experts will demonstrate the platform's capabilities
            tailored to your industry needs.
          </p>
        </div>

        <div className="text-2xl mt-10 space-y-3">
          <p className="font-semibold">Contact:</p>
          <p className="font-bold dark:text-gray-700 text-black">
            +2349071004503 
            <br /> 
            +2349011702518
          </p>
          <p className="text-gray-800 dark:text-gray-700 font-bold">
            infotrotter@waelng.com
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-3 md:mt-0 bg-[#F0F0F0] rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl dark:text-black font-semibold mb-2">
          Get Your Demo
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "email", "phone", "industry", "message"].map((field) => (
            <div key={field}>
              <label className="block font-bold text-gray-700 capitalize mb-1">
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  className={`w-full border-b outline-none bg-transparent p-2 focus:border-blue-700 transition ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="3"
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  className={`w-full border-b outline-none bg-transparent p-2 focus:border-blue-700 transition ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              )}
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-[#113264] px-4 text-white py-3 rounded-full font-semibold text-sm hover:bg-blue-900 transition"
          >
            Request Demo
          </button>

          {submitted && (
            <p className="text-green-600 text-center text-sm mt-3">
              ✅ Thank you! We’ll reach out within 24 hours.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
