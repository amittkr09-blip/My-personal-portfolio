import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Compass } from "lucide-react";
import { useSmoothScroll } from "../context/SmoothScrollContext";

export default function Hero() {
  const { scrollTo } = useSmoothScroll();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
    },
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      {/* Subtle background ambient texture */}
      <div className="absolute top-12 right-0 w-96 h-96 rounded-full bg-[#F5ECBE]/25 dark:bg-[#D35433]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#EBD8C8]/30 dark:bg-[#737373]/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#F7E98D] text-[#2C2915] border border-[#E9DA75]/60 shadow-xs">
                FullStack Developer
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#737373] dark:text-[#A3A3A3] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D35433]" />
                Based in India
              </span>
            </motion.div>

            {/* Large Editorial Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold font-display leading-[1.08] tracking-tight text-[#141414] dark:text-[#F3F3F3] mb-6"
            >
              Building digital <br />
              experiences that <br />
              feel <span className="text-[#D35433] relative inline-block underline decoration-[#D35433]/30 underline-offset-8">effortless.</span>
            </motion.h1>

            {/* Sub-heading / Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#525252] dark:text-[#A3A3A3] font-normal leading-relaxed max-w-xl mb-8"
            >
              Hi, I'm <strong className="font-semibold text-[#141414] dark:text-[#FFFFFF]">Amit</strong> — a full stack developer who builds responsive websites and web apps with React, Node.js and MongoDB. I work with local businesses and startups, from design to database to deployment. BCA student, open to freelance projects.
            </motion.p>

            {/* Call to action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                onClick={() => scrollTo("#work")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] text-sm font-semibold hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                data-cursor="OPEN"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-[#141414] dark:text-[#F3F3F3] text-sm font-semibold border border-[#D8D2C0] dark:border-[#33333A] hover:border-[#141414] dark:hover:border-[#F3F3F3] hover:bg-[#FAF7EE] dark:hover:bg-[#1E1E24] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                data-cursor="OPEN"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3] group-hover:text-[#141414] dark:group-hover:text-[#F3F3F3]" />
              </button>
            </motion.div>

            {/* Availability Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F3EFE3] dark:bg-[#1C1C22] border border-[#E5DFCF] dark:border-[#2A2B33] text-xs text-[#525252] dark:text-[#A3A3A3]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to internships & freelance </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Rounded Editorial Profile Area */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Reference-inspired editorial decoration: 4-pointed sparkle star */}
              <div className="absolute -top-4 -right-2 text-[#D35433] z-20 flex items-center gap-1">
                <span className="text-2xl leading-none">✦</span>
                <span className="text-sm leading-none text-[#F7E98D]">✦</span>
              </div>

              {/* Reference-inspired hatched dashes: ///// */}
              <div className="absolute -bottom-3 left-4 z-20 text-[#737373] dark:text-[#8E8E98] font-mono text-xl sm:text-2xl font-bold tracking-widest opacity-80 select-none">
                /////
              </div>

              {/* Offset decorative outline ring */}
              <div className="absolute inset-0 rounded-full border border-[#D5CDBC] dark:border-[#33333B] -translate-x-2.5 translate-y-2.5 -z-10" />

              {/* Soft warm tinted background behind image */}
              <div className="absolute inset-0 rounded-full bg-[#F4EEDC] dark:bg-[#1E1E24] -z-10" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#141414]/15 dark:border-[#33333D] shadow-card group bg-[#FAF7EE] dark:bg-[#16161B] flex items-center justify-center">
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#F9F5EA] to-[#F1E9D2] dark:from-[#1C1C22] dark:to-[#141418]">
                  {/* Stylized neutral developer avatar */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#FAF7EE] dark:bg-[#22222A] border border-[#E5DFCF] dark:border-[#33333E] flex items-center justify-center shadow-inner overflow-hidden mb-3">
                    <svg
                      viewBox="0 0 120 120"
                      className="w-full h-full text-[#141414] dark:text-[#E8E8E8]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="60" cy="60" r="58" className="fill-[#FBF8F2] dark:fill-[#202028] stroke-[#E2DAC7] dark:stroke-[#353540]" strokeWidth="2" />
                      {/* Stylized hair/cap */}
                      <path
                        d="M38 52C38 38 48 26 60 26C72 26 82 38 82 52C82 54 81 56 80 57C78 52 74 48 68 48C62 48 58 51 52 51C46 51 42 48 38 52Z"
                        className="fill-[#141414] dark:fill-[#ECECEC]"
                      />
                      {/* Face */}
                      <circle cx="60" cy="56" r="18" fill="#F4DECA" />
                      {/* Glasses */}
                      <rect x="47" y="52" width="11" height="8" rx="2" stroke="#141414" strokeWidth="1.75" fill="none" />
                      <rect x="62" y="52" width="11" height="8" rx="2" stroke="#141414" strokeWidth="1.75" fill="none" />
                      <line x1="58" y1="56" x2="62" y2="56" stroke="#141414" strokeWidth="1.75" />
                      {/* Smile */}
                      <path d="M56 65C58 67 62 67 64 65" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Shoulders / hoodie */}
                      <path
                        d="M30 102C30 84 43 78 60 78C77 78 90 84 90 102"
                        fill="#D35433"
                        stroke="#B64324"
                        strokeWidth="1.5"
                      />
                      <path d="M60 78V92" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  </div>

                  <span className="text-xs font-mono font-medium text-[#737373] dark:text-[#A3A3A3]">
                    Amit • FullStack Developer
                  </span>
                  <span className="text-[11px] text-[#A8A196] dark:text-[#6C6C78] mt-0.5">
                    {/* (Ready to swap with your photo) */}
                  </span>
                </div>
              </div>

              {/* Floating micro editorial badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-2 -right-3 sm:bottom-4 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#FAF7EE] dark:bg-[#1B1B20] border border-[#E5DFCF] dark:border-[#2C2C34] shadow-card flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FAF7EE] dark:bg-[#25252C] border border-[#E0D7C2] dark:border-[#33333E] flex items-center justify-center text-[#D35433]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[#737373] dark:text-[#8E8E98]">Core Focus</p>
                  <p className="text-xs font-semibold text-[#141414] dark:text-[#F3F3F3]">React, Node.js & MongoDB</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
