import React from "react";

export default function PrimeValues() {
  const values = [
    {
      title: "Passion for Safety",
      description:
        "We place safety above all else. Every action and every decision is guided by our commitment to safeguarding people, assets, and the environment.",
      icon: "🛡️",
    },
    {
      title: "Respect for People",
      description:
        "We value people that matter - from our clients and employees to the communities we serve. We treat everyone with fairness, dignity, and respect.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description:
        "We operate with unwavering integrity in all our choices, building trust and sustaining lasting relationships with our stakeholders.",
      icon: "⭐",
    },
    {
      title: "Mentoring & Motivation",
      description:
        "We grow by helping others through empowering, mentoring, and motivating our teams. We ensure continuous success and development.",
      icon: "📈",
    },
    {
      title: "Excellence in Service Delivery",
      description:
        "We pursue excellence without compromise. From planning to execution, our focus remains on delivering world-class solutions and superior service every time.",
      icon: "🎯",
    },
  ];

  return (
    <section className=" md:px-24 px-4 bg-[#113264] mx-auto py-12">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="md:text-8xl text-4xl font-medium text-white mb-4">
            Our Prime <span className="text-[#FFE629] font-bold">Values</span>
          </h1>
          <p className="text-lg text-[#FCFCFC] max-w-3xl mx-auto">
            At West Atlantic Energy Nigeria Limited (WAEL), our values shape how
            we operate and define the standards we uphold. They are the
            foundation of our culture and the promise we extend to our partners,
            stakeholders, and communities.
          </p>
        </div>
        <div className="block mt-16">
          <div className="space-y-8">
            {values.map((value, index) => {
              const isOdd = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`flex  items-start space-x-6 p-6 transition-shadow duration-300 w-full md:w-[50%] ${
                    isOdd ? "ml-auto" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:w-[45%]">
                    <h3 className="md:text-8xl text-4xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#FCFCFC] md:w-[60%] text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
