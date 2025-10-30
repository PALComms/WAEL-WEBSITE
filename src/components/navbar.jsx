"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions/osp",
    dropdown: [
      { label: "OSP", href: "/solutions/osp" },
      { label: "Data Management", href: "/solutions/data-management" },
      { label: "OnQ DRaaS", href: "/solutions/draas" },
    ],
  },
  {
    label: "Softwares",
    href: "/softwares/trotter",
    dropdown: [{ label: "Trotter", href: "/softwares/trotter" }],
  },
  {
    label: "Resources",
    href: "/resources/news",
    dropdown: [
      { label: "News", href: "/resources/news" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const mobileMenuVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20 },
  },
  exit: { y: -20, opacity: 0 },
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeItem, setActiveItem] = useState("Home");
  const [isSmallLaptop, setIsSmallLaptop] = useState(false);

  // Check screen size for smaller laptops
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallLaptop(window.innerWidth >= 1024 && window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Update active item based on current path
  useEffect(() => {
    const currentNavItem = navItems.find((item) => {
      if (item.href === pathname) return true;

      if (item.dropdown) {
        return item.dropdown.some(
          (dropdownItem) => dropdownItem.href === pathname
        );
      }

      return false;
    });

    if (currentNavItem) {
      setActiveItem(currentNavItem.label);
    } else {
      const matchingItem = navItems.find(
        (item) => pathname.startsWith(item.href) && item.href !== "/"
      );
      if (matchingItem) {
        setActiveItem(matchingItem.label);
      } else {
        setActiveItem("Home");
      }
    }
  }, [pathname]);

  const handleItemClick = (label) => {
    setActiveItem(label);
    setMenuOpen(false);
  };

  const isActiveLink = (item) => {
    if (item.href === pathname) return true;

    if (item.dropdown) {
      return item.dropdown.some(
        (dropdownItem) => dropdownItem.href === pathname
      );
    }

    return false;
  };
  const { push } = useRouter();

  // Determine which logo to use based on current path
  const getLogoPath = () => {
    if (pathname.includes("/softwares/trotter")) {
      return "/trotter_logo.png";
    }
    return "/wael_logo.png";
  };

  const getLogoAlt = () => {
    if (pathname.includes("/softwares/trotter")) {
      return "Trotter Logo";
    }
    return "WAEL Logo";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full lg:px-16 xl:px-24 px-4 py-4 flex items-center justify-between bg-white sticky top-0 z-[10000]"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => push("/")}
        className="flex cursor-pointer items-center flex-shrink-0"
      >
        <Image
          src={getLogoPath()}
          alt={getLogoAlt()}
          width={isSmallLaptop ? 90 : 100}
          height={isSmallLaptop ? 28 : 30}
          className="w-auto h-7 md:h-8 lg:h-9 object-contain"
        />
      </motion.div>

      {/* Desktop Nav - Adjusted for smaller laptops */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hidden lg:flex flex-1 justify-center"
      >
        <motion.ul
          variants={containerVariants}
          className={`flex items-center ${
            isSmallLaptop ? "gap-3 px-6 py-3" : "gap-6 px-10 py-4"
          }`}
        >
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() =>
                item.dropdown && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className={`font-[verdana] ${
                    isSmallLaptop ? "text-lg" : "text-xl"
                  } font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActiveLink(item)
                      ? "text-[#113264] font-bold"
                      : "text-gray-600 hover:text-[#113264]"
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ChevronDown
                    size={isSmallLaptop ? 14 : 16}
                    className={`transition-transform text-black duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-50 ${
                      isSmallLaptop ? "w-40" : "w-48"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        href={dropdownItem.href}
                        className={`block px-4 py-2 transition-colors duration-200 ${
                          isSmallLaptop ? "text-sm" : "text-base"
                        } ${
                          pathname === dropdownItem.href
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                        onClick={() => {
                          handleItemClick(item.label);
                          setActiveDropdown(null);
                        }}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Contact Button - Adjusted for smaller laptops */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="hidden lg:flex flex-shrink-0"
      >
        <Link
          href="/contact"
          className={`bg-[#113264] text-white rounded-full flex items-center ${
            isSmallLaptop ? "px-6 py-2 text-xs" : "px-6 py-2 text-md"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            Contact us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={isSmallLaptop ? 14 : 16}
              height={isSmallLaptop ? 14 : 16}
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <g clipPath="url(#SVGbDH6ubpA)">
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    d="m6.5 8.5l-5-2l11-4l-4 11zm0 0L9 6"
                    strokeWidth="1"
                  />
                </g>
                <defs>
                  <clipPath id="SVGbDH6ubpA">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile Menu Button - Show on tablets and smaller */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="lg:hidden dark:text-black"
      >
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Drawer - Enhanced for tablets */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed top-16 left-0 right-0 bg-white z-50 shadow-lg py-6 px-8 flex flex-col gap-5 lg:hidden max-h-[80vh] overflow-y-auto"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative"
                >
                  {item.dropdown ? (
                    <div className="flex flex-col">
                      <button
                        className={`flex items-center justify-between text-lg w-full text-left py-2 ${
                          isActiveLink(item)
                            ? "text-[#113264] font-bold"
                            : "text-gray-600"
                        }`}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="ml-4 mt-1 flex flex-col gap-3 border-l-2 border-gray-200 pl-4"
                          >
                            {item.dropdown.map((dropdownItem, index) => (
                              <Link
                                key={index}
                                href={dropdownItem.href}
                                className={`block py-2 transition-colors duration-200 text-base ${
                                  pathname === dropdownItem.href
                                    ? "text-[#113264] font-bold"
                                    : "text-gray-600 hover:text-[#113264]"
                                }`}
                                onClick={() => handleItemClick(item.label)}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block text-lg py-2 ${
                        isActiveLink(item)
                          ? "text-[#113264] font-bold"
                          : "text-gray-600 hover:text-[#113264]"
                      }`}
                      onClick={() => handleItemClick(item.label)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Contact Button */}
              <motion.div
                variants={itemVariants}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 bg-[#113264] text-white text-center py-3 px-6 rounded-full w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex text-md items-center gap-2"
                  >
                    Contact us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                    >
                      <g fill="none">
                        <g clipPath="url(#SVGbDH6ubpA)">
                          <path
                            stroke="currentColor"
                            strokeLinejoin="round"
                            d="m6.5 8.5l-5-2l11-4l-4 11zm0 0L9 6"
                            strokeWidth="1"
                          />
                        </g>
                        <defs>
                          <clipPath id="SVGbDH6ubpA">
                            <path fill="#fff" d="M0 0h16v16H0z" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
