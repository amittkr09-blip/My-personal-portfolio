import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { X, ExternalLink, CheckCircle, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 sm:py-32 border-t border-[#E8E2D2]/80 dark:border-[#26262B] relative"
    >
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#D35433]">
                03 / Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#141414] dark:text-[#F3F3F3] lowercase leading-none"
            >
              selected work<span className="text-[#D35433]">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-md"
          >
            A curated collection of full stack applications highlighting state
            management, API development, database integration, and responsive
            design.{" "}
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-[#737373] dark:text-[#8E8E98]">
            More open-source repositories & experiments available on{" "}
            <a
              href="https://github.com/amittkr09-blip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#141414] dark:text-[#F3F3F3] underline decoration-[#D35433] hover:text-[#D35433] dark:hover:text-[#D35433] transition-colors font-medium"
            >
              GitHub / amitt
            </a>
          </p>
        </div>
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141414]/60 dark:bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#FAF7EE] dark:bg-[#141418] rounded-3xl border border-[#E5DFCF] dark:border-[#26262B] p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F4EFE2] dark:bg-[#202028] hover:bg-[#EAE4D2] dark:hover:bg-[#2A2A35] text-[#141414] dark:text-[#F3F3F3] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#D35433]">
                  Project {selectedProject.number}
                </span>
                <span className="text-xs text-[#737373] dark:text-[#8E8E98]">
                  •
                </span>
                <span className="text-xs font-mono uppercase text-[#737373] dark:text-[#8E8E98]">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#141414] dark:text-[#F3F3F3] mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-base text-[#525252] dark:text-[#A3A3A3] leading-relaxed mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Highlights */}
              {selectedProject.highlights && (
                <div className="mb-6 bg-[#F4EFE2] dark:bg-[#1A1A20] rounded-2xl p-5 border border-[#E5DFCF] dark:border-[#26262E]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#8E8E98] mb-3">
                    Key Implementation Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-[#141414] dark:text-[#EAEAEA]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#D35433] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#8E8E98] mb-2.5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#F4EFE2] dark:bg-[#1F1F26] text-xs font-semibold text-[#141414] dark:text-[#F3F3F3] border border-[#E5DFCF] dark:border-[#2C2C36]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E5DFCF] dark:border-[#26262B]">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] text-sm font-semibold hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-colors"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent border border-[#D5CDBC] dark:border-[#383844] text-[#141414] dark:text-[#F3F3F3] text-sm font-semibold hover:bg-[#F4EFE2] dark:hover:bg-[#1E1E26] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
