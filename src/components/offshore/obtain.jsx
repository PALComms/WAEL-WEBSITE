"use client";
import React from "react";

function PermitSteps() {
  const steps = [
    {
      step: "Step 1 -",
      title: "Registration",
      description: (
        <>
          Register as an individual or as a company (IOC or service provider)
          and upload your offshore personnel details into our system. <br />
          {/* <br /> */}
          Ensure you have:
          <ul className="list-disc pl-6 font-bold text-[#202020] ">
            <li>An active Medical Fitness Certificate</li>
            <li>A valid Safety Training Certificate</li>
          </ul>
        </>
      ),
    },
    {
      step: "Step 2 -",
      title: "Validation Check",
      description:
        "For company registrations, your organization verifies and confirms the accuracy of uploaded personnel data. For individuals, we conduct the validation directly.",
    },
    {
      step: "Step 3 -",
      title: "Payment",
      description:
        "Pay the applicable permit fees for each registered personnel or individual.",
    },
    {
      step: "Step 4 -",
      title: "Image Capture",
      description:
        "You can proceed for image capturing at personnel designated verification point.",
    },
    {
      step: "Step 5 -",
      title: "Permit Issuance",
      description:
        "Receive a notification to collect your OSP card(s) at designated pick-up point.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {steps.map((item, index) => (
            <div key={index} className="text-gray-900">
              <h3 className="text-lg md:text-4xl font-bold text-[#113264] mb-1">
                <span className="text-[#0A2046] font-bold">{item.step}</span>{" "}
                <br />
                {item.title}
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Obtain() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-center dark:text-black max-w-6xl mx-auto md:text-6xl text-3xl ">
        How to Obtain an Offshore Safety Permit (OSP) in <span className="text-[#113264] font-bold"> 5 Simple Steps </span> 
      </h2>
      <PermitSteps />
    </section>
  );
}
