import ContactForm from "@/components/contact-form";
import React from "react";

export default function page() {
  return (
    <div className="dark:bg-white">
      <h2 className="text-3xl md:text-6xl dark:text-black  font-bold text-center py-10 max-w-xl mx-auto px-4">
        Let’s Discuss <br />
        <span className="text-[#113264] ">Your Next Project.</span>
      </h2>
      <ContactForm />
    </div>
  );
}
