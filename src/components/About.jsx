import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/projects";
import { GraduationCap, Code, Cpu, Calendar, CheckCircle2 } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#E8E2D2]/80 dark:border-[#26262B] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading Inspired by Reference Poster */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35433]">01 / Overview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#141414] dark:text-[#F3F3F3] lowercase leading-none"
          >
            about<span className="text-[#D35433]">.</span>
          </motion.h2>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio Paragraphs & Core Philosophy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#141414] dark:text-[#EAEAEA] font-normal leading-relaxed"
            >
              {personalInfo.bioParagraphs[0]}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#525252] dark:text-[#A3A3A3] font-normal leading-relaxed"
            >
              {personalInfo.bioParagraphs[1]}
            </motion.p>

            {/* Editorial highlights box */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-[#F4EFE2] dark:bg-[#16161B] border border-[#E5DFCF] dark:border-[#2A2B33] mt-8"
            >
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#8E8E98] mb-3">
                Working Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#141414] dark:text-[#E5E5E5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D35433]" />
                  <span>Responsive & Mobile-First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D35433]" />
                  <span>Component-Driven Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D35433]" />
                  <span>Fast Loading & Accessible UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D35433]" />
                  <span>Clean APIs & Secure Backend</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Minimal Timeline Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6"
          >
            <div className="bg-[#FAF7EE] dark:bg-[#141418] rounded-3xl border border-[#E5DFCF] dark:border-[#26262B] p-6 sm:p-8 shadow-subtle">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5DFCF] dark:border-[#26262B]">
                <h3 className="font-display text-xl font-bold text-[#141414] dark:text-[#F3F3F3]">
                  Timeline & Journey
                </h3>
                <span className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] bg-[#EFE9D7] dark:bg-[#202028] px-2.5 py-1 rounded-full">
                  Education & Focus
                </span>
              </div>

              {/* Minimal Timeline */}
              <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#DED7C4] dark:before:bg-[#2F303B]">
                {personalInfo.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Timeline bullet */}
                    <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full border-2 border-[#FAF7EE] dark:border-[#141418] bg-[#141414] dark:bg-[#E5E5E5] group-hover:bg-[#D35433] dark:group-hover:bg-[#D35433] transition-colors" />

                    {/* Timeline details */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <span className="text-xs font-mono font-semibold tracking-wide text-[#D35433]">
                        {item.period}
                      </span>
                      <span className="text-xs text-[#737373] dark:text-[#8E8E98] font-medium">
                        {item.organization}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-display text-[#141414] dark:text-[#F3F3F3] mb-1">
                      {item.title}
                    </h4>

                    <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
