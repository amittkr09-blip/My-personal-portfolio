import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  // Mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer & hover capability
    const mediaFine = window.matchMedia("(pointer: fine)");
    const mediaHover = window.matchMedia("(hover: hover)");

    const checkEnabled = () => {
      setIsEnabled(mediaFine.matches && mediaHover.matches && window.innerWidth >= 768);
    };

    checkEnabled();
    window.addEventListener("resize", checkEnabled);

    if (!mediaFine.matches) return () => window.removeEventListener("resize", checkEnabled);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const cursorTarget = target.closest("[data-cursor]");
      const buttonTarget = target.closest("button, a, [role='button'], input, textarea");

      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "VIEW") {
          setCursorText("VIEW");
          setCursorVariant("project");
        } else if (type === "OPEN") {
          setCursorText("OPEN");
          setCursorVariant("link");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else if (buttonTarget) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("resize", checkEnabled);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  const { isDark } = useTheme();

  if (!isEnabled) return null;

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(211, 84, 51, 0)",
      borderColor: isDark ? "rgba(240, 240, 240, 0.45)" : "rgba(22, 22, 22, 0.4)",
      borderWidth: "1.5px",
    },
    hover: {
      width: 52,
      height: 52,
      backgroundColor: "rgba(211, 84, 51, 0.15)",
      borderColor: "rgba(211, 84, 51, 0.9)",
      borderWidth: "1.5px",
    },
    project: {
      width: 76,
      height: 76,
      backgroundColor: isDark ? "#F3F3F3" : "#161616",
      borderColor: isDark ? "#F3F3F3" : "#161616",
      borderWidth: "0px",
    },
    link: {
      width: 60,
      height: 60,
      backgroundColor: "#D35433",
      borderColor: "#D35433",
      borderWidth: "0px",
    },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner precise dot */}
      <motion.div
        className={`fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none ${
          isDark ? "bg-[#F3F3F3]" : "bg-charcoal"
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible && cursorVariant === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Smooth outer ring / pill */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center pointer-events-none transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className={`text-[11px] font-semibold tracking-widest uppercase ${
              cursorVariant === "project"
                ? isDark
                  ? "text-[#141414]"
                  : "text-[#FAF7EE]"
                : cursorVariant === "link"
                ? "text-white"
                : isDark
                ? "text-[#F3F3F3]"
                : "text-charcoal"
            }`}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
