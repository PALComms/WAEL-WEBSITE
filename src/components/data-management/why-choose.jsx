import React from "react";

const list = [
  "End-to-end infrastructure and analytics in one platform",
  "Proven reliability with 99.99% uptime",
  "Purpose-built industries where security and speed matter most",
];
export default function WhyChoose() {
  return (
    <section className="bg-[#F0F0F0] py-16 space-y-10 px-4 md:px-8 lg:px-16">
      <h2 className="md:text-7xl text-3xl dark:text-black font-normal text-center">Why Choose WAEL?</h2>
      <div className="flex mt-10 gap-8 md:flex-row flex-col justify-around items-center  max-w-7xl mx-auto">

      {list?.map((item, idx) => (
        <div key={idx} className="font-bold md:text-3xl dark:text-black text-2xl text-center md:w-1/4 w-full">{item}</div>
      ))}
      </div>
    </section>
  );
}
