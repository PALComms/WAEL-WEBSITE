"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";
import DemoRequestModal from "./demo-request-modal";

export default function Footer() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const companyLinks = [
    // { name: "Quorum", href: "/solutions/quorum" },
    { name: "Trotter", href: "/softwares/trotter" },
    { name: "OSP", href: "/solutions/osp" },
    { name: "Data Management", href: "/solutions/data-management" },
    { name: "DRaaS", href: "/solutions/draas" },
    { name: "Blog", href: "/resources/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Request a Demo", action: "demo" },
  ];

  const policyLinks = [{ name: "Privacy Policy", href: "/privacy-policy" }];

  const handleLinkClick = (link) => {
    if (link.action === "demo") {
      setIsDemoModalOpen(true);
      return;
    }

    if (link.href) {
      if (link.href.startsWith("/")) {
        // Internal navigation - Next.js will handle this
        return;
      } else {
        // External link or other actions can be handled here
        window.open(link.href, "_blank");
      }
    }
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61582423214634",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/prime.atlantic?igsh=MWp6ajY2b2V3cjkxMQ==",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/west-atlantic-energy-nigeria-ltd/",
      label: "Linkedin",
    },
  ];

  return (
    <>
      <footer className="bg-[#122A5C] text-white py-10 relative overflow-hidden">
        {/* Faint background text */}
        <div className="absolute inset-0 flex items-end justify-center text-6xl sm:text-8xl md:text-[10rem] font-extrabold text-[#1A3D7A]/10 select-none tracking-widest pointer-events-none animate-fade-in">
          WAELNG
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            {/* Left Section - Social Icons */}
            <div className="flex flex-col items-start justify-center space-y-6">
              <div className="w-[2px] h-12 bg-yellow-500 animate-grow" />
              <div className="flex flex-col space-y-5 text-lg">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition transform hover:scale-110 hover:-translate-y-1 duration-300"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Middle Section - Links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm flex-1 md:justify-between max-w-4xl">
              {/* Company Links */}
              <div className="min-w-[200px]">
                <h4 className="text-yellow-400 font-semibold uppercase mb-3 text-xs">
                  West Atlantic Energy Nigeria Limited (WAEL)
                </h4>
                <ul className="space-y-2">
                  {companyLinks.map((item, index) => (
                    <li key={index}>
                      {item.action === "demo" ? (
                        <button
                          onClick={() => handleLinkClick(item)}
                          className="block py-1 hover:text-yellow-400 transition transform hover:translate-x-1 duration-200 text-left w-full"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-1 hover:text-yellow-400 transition transform hover:translate-x-1 duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Privacy Policy */}
              <div className="min-w-[150px]">
                <h4 className="text-gray-400 uppercase mb-3 text-xs tracking-wide">
                  Compliance & Legal
                </h4>
                <ul className="space-y-2">
                  {policyLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block py-1 hover:text-yellow-400 transition transform hover:translate-x-1 duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="min-w-[150px]">
                <h4 className="text-gray-400 uppercase mb-3 text-xs tracking-wide">
                  Contact
                </h4>
                <p className="text-sm leading-relaxed mb-4">
                  <Link
                    href="tel:+2349071004503 "
                    className=" hover:underline text-sm mt-3 inline-block transition transform hover:translate-x-1"
                  >
                    +2349071004503
                  </Link>
                   <br />
                  <Link
                    href="tel:+2349011702518 "
                    className=" hover:underline text-sm mt-3 inline-block transition transform hover:translate-x-1"
                  >
                    +2349011702518 
                  </Link>
                   <br />
                  <Link
                    href="mailto:info@waelng.com"
                    className=" hover:underline text-sm mt-3 inline-block transition transform hover:translate-x-1"
                  >
                    info@waelng.com
                  </Link>
                </p>
                <Link
                  href="/contact"
                  className="text-yellow-400 hover:underline text-sm mt-3 inline-block transition transform hover:translate-x-1"
                >
                  Contact us
                </Link>
              </div>

              {/* Address */}
              <div className="min-w-[200px]">
                <h4 className="text-gray-400 uppercase mb-3 text-xs tracking-wide">
                  Address
                </h4>
                <p className="text-sm leading-relaxed">
                  1st Floor, TCF Tower, <br />
                  33, Adeola Hopewell Street, <br />
                  Victoria Island, Lagos, Nigeria
                </p>
                <Link
                  href="https://maps.google.com/?q=TCF+Tower+Adeola+Hopewell+Street+Victoria+Island+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline text-sm mt-3 inline-block transition transform hover:translate-x-1"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#1F3B7A] mt-12 pt-4 text-xs text-gray-400 flex flex-col sm:flex-row justify-between gap-4">
            <p className="hover:text-yellow-400 transition duration-300">
              © 2025 West Atlantic Energy Nigeria Limited. All rights reserved.
            </p>
            <p className="hover:text-yellow-400 transition duration-300">
              © 2025 — Copyright
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
