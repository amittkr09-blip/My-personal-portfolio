import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useSmoothScroll } from "../context/SmoothScrollContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href);
  };

  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7EE]/90 dark:bg-[#0E0E10]/90 backdrop-blur-md py-3.5 border-b border-[#E5DFCF]/80 dark:border-[#26262B]/80 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-5 sm:py-7 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#root"
            onClick={(e) => handleNavClick(e, "#root")}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Amit - Home"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#141414] dark:text-[#F3F3F3] transition-colors group-hover:text-[#D35433]">
              Amit  Krishnawat<span className="text-[#D35433]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7EE] dark:bg-[#16161A] border border-[#E5DFCF] dark:border-[#2A2B33] text-xs font-medium text-[#525252] dark:text-[#A3A3A3]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for roles</span>
            </div>

            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative text-sm font-medium text-[#525252] dark:text-[#A3A3A3] hover:text-[#141414] dark:hover:text-[#F3F3F3] transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D35433] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              type="button"
              className="p-2 rounded-full border border-[#E5DFCF] dark:border-[#2A2B33] bg-[#FAF7EE] dark:bg-[#16161A] text-[#141414] dark:text-[#F3F3F3] hover:border-[#D35433] dark:hover:border-[#D35433] hover:text-[#D35433] dark:hover:text-[#D35433] transition-all cursor-pointer shadow-xs focus:outline-none"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 animate-[spin_10s_linear_infinite] pointer-events-none" />
              ) : (
                <Moon className="w-4 h-4 text-[#525252] pointer-events-none" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-colors duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Actions: Dark Mode Toggle & Menu Button */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              type="button"
              className="p-2 rounded-full border border-[#E5DFCF] dark:border-[#2A2B33] bg-[#FAF7EE] dark:bg-[#16161A] text-[#141414] dark:text-[#F3F3F3] hover:border-[#D35433] focus:outline-none cursor-pointer"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 pointer-events-none" />
              ) : (
                <Moon className="w-4 h-4 text-[#525252] pointer-events-none" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#141414] dark:text-[#F3F3F3] hover:bg-[#EAE4D2] dark:hover:bg-[#1E1E24] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#141414]/50 dark:bg-black/70 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#FAF7EE] dark:bg-[#141418] border-l border-[#E5DFCF] dark:border-[#26262B] p-8 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-16">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#9E9E9E]">
                    Navigation
                  </p>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7EE] dark:bg-[#1C1C22] border border-[#E5DFCF] dark:border-[#2A2B33] text-[11px] font-medium text-[#525252] dark:text-[#A3A3A3]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span>Available</span>
                  </div>
                </div>

                <ul className="space-y-5">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="font-display text-2xl font-semibold text-[#141414] dark:text-[#F3F3F3] hover:text-[#D35433] dark:hover:text-[#D35433] transition-colors block"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-[#E5DFCF] dark:border-[#26262B] space-y-4">
                {/* Mobile Drawer Theme Toggle */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F4EFE2] dark:bg-[#1E1E26] border border-[#E5DFCF] dark:border-[#2C2C36]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#525252] dark:text-[#A3A3A3]">
                    Appearance: <strong className="text-[#141414] dark:text-[#F3F3F3]">{isDark ? "Dark" : "Light"}</strong>
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleTheme();
                    }}
                    type="button"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF7EE] dark:bg-[#141418] border border-[#DCD5C4] dark:border-[#383844] text-xs font-semibold text-[#141414] dark:text-[#F3F3F3] cursor-pointer"
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-400 pointer-events-none" />
                        <span className="pointer-events-none">Light</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3.5 h-3.5 text-[#525252] pointer-events-none" />
                        <span className="pointer-events-none">Dark</span>
                      </>
                    )}
                  </button>
                </div>

                <div>
                  <p className="text-xs text-[#737373] dark:text-[#9E9E9E] mb-3">Looking for a frontend dev?</p>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] text-sm font-semibold hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-colors"
                  >
                    <span>Let's talk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
