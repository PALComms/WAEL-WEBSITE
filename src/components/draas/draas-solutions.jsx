import React from "react";
import { draasSolutionsData } from "./data";
import Link from "next/link";

export default function DraasSolutions() {
  return (
    <section className="md:px-24 px-4  mx-auto py-12">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="md:text-8xl text-4xl font-medium dark:text-white text-black mb-4">
            Our DRaaS{" "}
            <span className="text-[#113264] font-bold">Solutions</span>
          </h1>
          <p className="text-lg dark:text-gray-400 text-[#202020] max-w-3xl mx-auto">
            Real-Time Recovery, Ready When You Need It Most.
          </p>
        </div>
        <div className="block mt-16">
          <div className="space-y-12">
            {draasSolutionsData.map((value, index) => {
              const isOdd = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`flex items-start gap-8 p-8 transition-all duration-300 text-black rounded-2xl ${
                    isOdd ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-col`}
                >
                  {/* Blue rounded div with icon - larger version */}

                  {/* Content */}
                  <div className="flex md:flex-row flex-col md:w-2/4 w-full gap-16">
                    <div className="flex-shrink-0 hidden dark:border-white  border h-26 w-26 md:flex items-center justify-center rounded-full ">
                      <div className="w-22 h-22  rounded-full bg-[#113264]  flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl"></span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="md:text-5xl text-3xl font-bold dark:text-white text-black mb-4">
                        {value.title}
                      </h3>
                      <p className="text-[#000] dark:text-gray-400 text-lg leading-relaxed md:pr-8">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-full">
            <Link
              className="dark:bg-white bg-[#113264] py-4 w-fit text-white cursor-pointer mx-auto px-6 rounded-full dark:text-[#113264] font-bold"
              href="/contact"
            >
              Find Your Perfect Protection Plan
            </Link>
          </div>
        </div>
      </div>

      <div className="text-3xl w-[60%] text-gray-400 mx-auto mt-24 ">
        <span className="font-bold dark:text-white  text-[#113264]">
          {" "}
          Partnership with Quorum (USA) -
        </span>{" "}
        bringing world class disaster recovery and business continuity solutions
        to Nigeria and beyond
      </div>
    </section>
  );
}
