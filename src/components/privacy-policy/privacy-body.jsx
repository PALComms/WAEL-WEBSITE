"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Simple animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PrivacyBody() {
  return (
    <div className=" px-6 md:px-12 space-y-8 lg:px-24">
      {/* Section 1 */}
      <motion.div
        className="py-24 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-2xl dark:text-black max-w-3xl text-wrap md:text-3xl lg:text-7xl font-semibold mb-4"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          What is this
          <br />
          <span className="text-[#113264] font-bold">Privacy</span> Notice for?
        </motion.h2>
        <motion.p
          className="text-lg mt-10 md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          West Atlantic Energy Nigeria Limited (jointly referred to in this
          document as 'WAEL or 'the Company', or 'We') values your Personal Data
          and we are committed to protecting your privacy whenever you interact
          with us. Please read this Privacy Notice (Notice) to understand our
          policies, processes, and procedures regarding the processing of your
          personal data. By this Notice, We explain to you how your Personal
          Data is collected, used, managed and transferred by WAEL and also
          explains how you can update your Personal Data with us and exercise
          your rights in respect of the Personal Data provided to us.
        </motion.p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="py-10 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <motion.h2
          className="text-2xl dark:text-black max-w-3xl text-wrap md:text-3xl lg:text-7xl font-semibold mb-4"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          The <span className="text-[#113264] font-bold">Personal Data</span>{" "}
          <br />
          that We Collect
        </motion.h2>
        <motion.p
          className="text-lg mt-10 md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          We collect Personal Data that you give to us, (for example your name,
          email address, telephone number), when you create an account with us,
          request for further information about our product, fill a form, apply
          for a job through our website or you subscribe to newsletters on our
          website. We may also automatically collect some technical information
          when you visit our website such as your IP address, and information
          about your visit, such as the pages that you viewed. This information
          helps us understand customer interests and helps us improve our
          website. When you visit our site, the pages that you look at, and a
          short text file called a cookie, are downloaded to your computer. By
          visiting and using our website, you agree to our use of cookies in
          line with West Atlantic Energy Nigeria Limited policies. For more
          details about Cookies, please read our Cookies Policy available
          through this link.
        </motion.p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="my-24 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl dark:text-black max-w-4xl  text-wrap md:text-3xl lg:text-7xl font-semibold mb-4"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          What
          <span className="text-[#113264] mx-3 font-bold">Purpose</span>do We
          use <br /> your Personal Data?{" "}
        </motion.h2>
        <motion.p
          className="text-lg mt-10 md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          We may process your Personal Data to communicate with you (including
          sending marketing or promotional materials to you), provide you with
          further information about our products and how we can serve you
          better, respond to your purchase orders or requests, process your
          application for employment with any of the companies under Prime
          Atlantic Group or to fulfil our contractual obligations with you. We
          may also process your Personal Data to comply with provisions of
          applicable laws.
        </motion.p>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        className="my-24 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <motion.h2
          className="text-2xl dark:text-black max-w-3xl flex gap-2 md:text-3xl lg:text-7xl font-semibold mb-4"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          Your
          <span className="text-[#113264] mx-2 font-bold">Rights</span>
        </motion.h2>

        <motion.p
          className="text-lg mt-10 md:text-xl lg:text-2xl font-bold text-gray-700 text-justify leading-relaxed mb-6"
          variants={fadeIn}
          transition={{ delay: 0.7 }}
        >
          You can exercise the following rights with respect to your Personal
          Data with West Atlantic Energy Nigeria Limited:
        </motion.p>

        <motion.ul
          className="list-decimal space-y-4 pl-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "Request for and access your Personal Data collected and stored by WAEL",
            "Withdraw consent at any time (if applicable). For example, you can withdraw your consent to receipt of our marketing or promotional materials or unsubscribe to our newsletters",
            "Object to automated decision making",
            "Request rectification and modification of Personal Data kept by West Atlantic Energy Nigeria Limited",
            "Request for deletion of your Personal Data (if applicable)",
            "Be informed of and entitled to provide consent prior to the processing of Personal Data for purposes other than that for which the Personal Data were collected",
            "Request that WAEL restricts processing of your Personal Data (if applicable)",
            "And request for information regarding any specific processing of your personal data.",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed"
              variants={listItem}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          If you wish to exercise any of these rights, you may contact our Data
          Protection Officer (DPO) using the contact details provided below. You
          also have the right to complain to the Nigeria Data Protection
          Commission (NDPC) if you believe that we have violated your privacy
          rights.
        </motion.p>
      </motion.div>

      {/* Section 5 */}
      <motion.div
        className="py-24 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="text-2xl dark:text-black max-w-5xl  flex gap-2 md:text-3xl lg:text-7xl font-semibold mb-4"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <span className="text-[#113264] font-bold">Contact</span> &
          Communication
        </motion.h2>

        <motion.p
          className="text-lg mt-10 md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          If you would like further information on this Notice, or to contact
          our DPO, you may contact us at West Atlantic Energy Nigeria Limited
          Limited, 1st/2nd Floor TCF Tower, 33 Adeola Hopewell Street, Victoria
          Island, Lagos, Nigeria or at{" "}
          <Link
            href="mailto:pagdpo@primeatlanticnigeria.com"
            className="text-[#113264] font-semibold hover:underline transition-all duration-300 hover:text-blue-700"
            target="_blank"
          >
            pagdpo@primeatlanticnigeria.com
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
