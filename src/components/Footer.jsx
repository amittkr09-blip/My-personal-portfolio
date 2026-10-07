import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "../data/projects";
import { useSmoothScroll } from "../context/SmoothScrollContext";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="border-t border-[#E8E2D2] dark:border-[#26262B] bg-[#F5EEDC]/60 dark:bg-[#121216]/80 py-12 sm:py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5DFCF] dark:border-[#26262B]">
          {/* Logo & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-tight text-[#141414] dark:text-[#F3F3F3]">
              Amit<span className="text-[#D35433]">.</span>
            </span>
            <p className="text-xs text-[#737373] dark:text-[#8E8E98] mt-1 font-mono">
              Full Stack Developer • BCA @ Amity University Online
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#525252] dark:text-[#A3A3A3]">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D35433] dark:hover:text-[#D35433] transition-colors"
              data-cursor="OPEN"
            >
              GitHub
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D35433] dark:hover:text-[#D35433] transition-colors"
              data-cursor="OPEN"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.links.email}
              className="hover:text-[#D35433] dark:hover:text-[#D35433] transition-colors"
              data-cursor="OPEN"
            >
              Email
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => scrollTo("#root")}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#141414] dark:text-[#F3F3F3] hover:text-[#D35433] dark:hover:text-[#D35433] transition-colors cursor-pointer"
            data-cursor="OPEN"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-[#FAF7EE] dark:bg-[#1E1E26] border border-[#E0D8C3] dark:border-[#33333E] flex items-center justify-center text-[#141414] dark:text-[#F3F3F3]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Copyright & Tech Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373] dark:text-[#8E8E98]">
          <p>Amit © 2026. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed & built with React, Node.js, Express & MongoDB</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
