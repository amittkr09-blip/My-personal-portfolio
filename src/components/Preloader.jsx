import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7EE] text-[#141414] select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Top decorative micro tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D35433]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373] font-mono">
                Amit's Portfolio 
              </span>
            </motion.div>

            {/* Main monogram / typography reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-5xl sm:text-7xl font-extrabold tracking-tight font-display text-[#141414]"
              >
                AMIT KRISHNAWAT<span className="text-[#D35433]">.</span>
              </motion.h1>
            </div>

            {/* Subtle progress indicator line */}
            <div className="w-32 h-[2px] bg-[#E5DFCF] mt-6 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                className="h-full bg-[#D35433]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
