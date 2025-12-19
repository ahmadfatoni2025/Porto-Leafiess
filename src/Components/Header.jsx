import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Start Here");

  const navLinks = [
    { name: "Start Here" },
    { name: "Galery" },
    { name: "Process" },
    { name: "Compare" },
    { name: "Pricing" },
    { name: "FAQs" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-full flex items-center justify-between px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 w-full max-w-[900px] backdrop-blur-sm bg-white/90"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="pl-6 flex items-center cursor-pointer group"
        >
          <span className="font-black text-2xl tracking-tighter text-black select-none group-hover:text-neutral-700 transition-colors">
            looo
          </span>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="relative px-4 py-2"
            >
              <button
                onClick={() => {
                  setActiveTab(link.name);
                  if (link.name === "Pricing") {
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`relative z-10 text-[13px] font-semibold transition-colors duration-300 cursor-pointer ${activeTab === link.name ? "text-black" : "text-neutral-500 hover:text-black"
                  }`}
              >
                {link.name}
              </button>

              {/* Hover Effect Background */}
              <motion.div
                className="absolute inset-0 z-0 bg-neutral-50 rounded-full opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Active Indicator (Dot) with Animation */}
              <AnimatePresence mode="wait">
                {activeTab === link.name && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="pr-1"
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#262626" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-black text-white text-[13px] font-bold px-7 py-3 rounded-full transition-shadow hover:shadow-lg cursor-pointer"
          >
            View Plans
          </motion.button>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Header;
