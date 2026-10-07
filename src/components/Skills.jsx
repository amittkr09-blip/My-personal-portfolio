import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/projects";
import { Layout, Wrench, Server, Sparkles, CheckCircle } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      id: "frontend",
      badge: "01 / Frontend",
      title: "Frontend Development",
      description: "Crafting modern, accessible, and high-performance user interfaces with clean state and fluid styling.",
      icon: Layout,
      skills: personalInfo.skills.frontend,
      primary: true,
    },
    {
      id: "tools",
      badge: "02 / Workflow & Tools",
      title: "Tooling & Environment",
      description: "Version control, build engines, inspection tooling, and API testing suites.",
      icon: Wrench,
      skills: personalInfo.skills.tools,
      primary: false,
    },
    {
      id: "backend",
      badge: "03 / Backend",
      title: "Backend Familiarity",
      description: "Foundational backend knowledge to collaborate seamlessly with APIs and data layers.",
      icon: Server,
      skills: personalInfo.skills.backendKnowledge,
      primary: false,
      isSecondary: true,
    },
    {
      id: "other",
      badge: "04 / Core Practices",
      title: "Engineering Concepts",
      description: "Foundational software engineering principles, algorithms, and architectural methods.",
      icon: Sparkles,
      skills: personalInfo.skills.other,
      primary: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#E8E2D2]/80 dark:border-[#26262B] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#D35433]">02 / Capabilities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#141414] dark:text-[#F3F3F3] lowercase leading-none"
            >
              skills<span className="text-[#D35433]">.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-md"
          >
            A full stack developer with hands-on practice in React, Node.js and MongoDB, building responsive interfaces backed by clean APIs and databases.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className={`relative rounded-3xl p-7 sm:p-9 transition-all duration-300 border flex flex-col justify-between ${
                  cat.primary
                    ? "bg-[#FAF7EE] dark:bg-[#15151A] border-[#141414]/20 dark:border-[#33333E] shadow-card ring-1 ring-[#D35433]/20"
                    : cat.isSecondary
                    ? "bg-[#F5EFE1]/70 dark:bg-[#131317]/80 border-[#E2D8C3] dark:border-[#26262D]"
                    : "bg-[#FAF7EE] dark:bg-[#15151A] border-[#E5DFCF] dark:border-[#26262B]"
                } hover:shadow-elevated hover:-translate-y-1`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                        cat.primary
                          ? "bg-[#F7E98D] text-[#2C2915] font-semibold"
                          : cat.isSecondary
                          ? "bg-[#ECE4D0] dark:bg-[#1F1F26] text-[#737373] dark:text-[#9E9E9E]"
                          : "bg-[#EFE9D7] dark:bg-[#1F1F26] text-[#525252] dark:text-[#A3A3A3]"
                      }`}
                    >
                      {cat.badge}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        cat.primary
                          ? "bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414]"
                          : "bg-[#FAF7EE] dark:bg-[#202028] text-[#141414] dark:text-[#F3F3F3] border border-[#E5DFCF] dark:border-[#2E2E36]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#141414] dark:text-[#F3F3F3] mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5DFCF]/80 dark:border-[#26262B]">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-default ${
                        skill.highlight
                          ? "bg-[#FAF7EE] dark:bg-[#1C1C22] text-[#141414] dark:text-[#F3F3F3] border border-[#141414]/25 dark:border-[#3A3A46] shadow-2xs hover:border-[#D35433] hover:text-[#D35433]"
                          : "bg-[#F4EFE2] dark:bg-[#1A1A20] text-[#525252] dark:text-[#A3A3A3] border border-[#E5DFCF] dark:border-[#26262E] hover:bg-[#FAF7EE] dark:hover:bg-[#22222A] hover:text-[#141414] dark:hover:text-[#F3F3F3]"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D35433]" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
