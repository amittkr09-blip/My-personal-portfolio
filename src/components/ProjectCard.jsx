import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Play, CheckCircle2, X } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, index, onOpenDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  // Render stylized interactive UI mockups for each project
  const renderPreviewMockup = () => {
    if (project.id === "movie-web-app") {
      return (
        <div className="w-full h-full bg-[#12131A] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative">
          {/* Header mockup */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-bold tracking-wider uppercase text-white/90">CineStream</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md text-[11px] text-white/70">
              <span>🔍 Search movies...</span>
            </div>
          </div>

          {/* Featured banner mockup */}
          <div className="my-3 bg-gradient-to-r from-red-950/60 to-purple-950/40 p-3.5 rounded-xl border border-red-500/20 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase bg-red-600/80 px-2 py-0.5 rounded text-white font-semibold">
                Featured
              </span>
              <h5 className="text-xs sm:text-sm font-bold text-white mt-1">Interstellar (4K HDR)</h5>
              <p className="text-[10px] text-white/60">Sci-Fi • 8.7/10 ★</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
          </div>

          {/* Movie thumbnails row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { title: "Dune: Part Two", genre: "Action", rating: "8.6" },
              { title: "Oppenheimer", genre: "Drama", rating: "8.9" },
              { title: "Spider-Verse", genre: "Animation", rating: "8.7" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/10 hover:border-white/30 transition-colors">
                <div className="h-14 sm:h-16 rounded bg-gradient-to-br from-white/10 to-white/5 mb-1.5 flex items-center justify-center text-white/30 text-xs">
                  🎬
                </div>
                <p className="text-[10px] font-medium text-white truncate">{item.title}</p>
                <div className="flex justify-between items-center text-[9px] text-white/50">
                  <span>{item.genre}</span>
                  <span className="text-amber-400">★ {item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === "employee-dashboard") {
      return (
        <div className="w-full h-full bg-[#18222D] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative">
          {/* Top navigation */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span className="text-xs font-bold tracking-wider uppercase text-white/90">StaffSync Pro</span>
            </div>
            <div className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
              ● 24 Team Members
            </div>
          </div>

          {/* Dashboard metric widgets */}
          <div className="grid grid-cols-3 gap-2 my-2 sm:my-3">
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <p className="text-[9px] text-white/50 font-mono">TOTAL TASKS</p>
              <p className="text-sm font-bold text-white">142</p>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <p className="text-[9px] text-emerald-400 font-mono">COMPLETED</p>
              <p className="text-sm font-bold text-emerald-400">94%</p>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <p className="text-[9px] text-amber-400 font-mono">ON TRACK</p>
              <p className="text-sm font-bold text-amber-400">18</p>
            </div>
          </div>

          {/* Mini Table List */}
          <div className="space-y-1.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
            <div className="flex justify-between text-[9px] text-white/40 font-mono px-1">
              <span>EMPLOYEE</span>
              <span>ROLE</span>
              <span>STATUS</span>
            </div>
            {[
              { name: "Rahul S.", role: "Frontend Dev", status: "Active", bg: "bg-emerald-500" },
              { name: "Priya M.", role: "Product Designer", status: "In Review", bg: "bg-amber-400" },
              { name: "Arjun K.", role: "QA Engineer", status: "Active", bg: "bg-emerald-500" },
            ].map((emp, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] bg-white/5 px-2 py-1.5 rounded">
                <span className="font-medium text-white">{emp.name}</span>
                <span className="text-white/60 text-[9px]">{emp.role}</span>
                <span className="inline-flex items-center gap-1 text-[9px] text-white/80">
                  <span className={`w-1.5 h-1.5 rounded-full ${emp.bg}`} />
                  {emp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Default: E-commerce Frontend
    return (
      <div className="w-full h-full bg-[#1F1E24] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative">
        {/* Top Navbar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D35433] inline-block" />
            <span className="text-xs font-bold tracking-wider uppercase text-white/90">Aura Studio</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/80">
            <span className="bg-white/10 px-2 py-0.5 rounded">Wishlist (4)</span>
            <span className="bg-[#D35433] text-white px-2 py-0.5 rounded font-bold">Cart: $280</span>
          </div>
        </div>

        {/* Product showcase banner */}
        <div className="my-2 bg-gradient-to-r from-orange-950/40 to-stone-900/60 p-3 rounded-xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-mono bg-white/10 text-orange-200 px-1.5 py-0.5 rounded">
              New Arrival
            </span>
            <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Minimal Mechanical Keychron</p>
            <p className="text-[11px] font-semibold text-orange-400">$149.00 <span className="line-through text-white/40 text-[9px]">$189</span></p>
          </div>
          <button className="px-2.5 py-1 rounded bg-[#D35433] text-[10px] font-bold text-white shadow">
            + Add
          </button>
        </div>

        {/* Small products grid */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Leather Tote", price: "$85", icon: "👜" },
            { name: "Nordic Lamp", price: "$64", icon: "💡" },
            { name: "Ergo Mouse", price: "$79", icon: "🖱️" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/10 text-center">
              <div className="text-sm mb-1">{item.icon}</div>
              <p className="text-[9px] font-medium text-white truncate">{item.name}</p>
              <p className="text-[9px] font-bold text-orange-300">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#FAF7EE] dark:bg-[#15151A] rounded-3xl border border-[#E5DFCF] dark:border-[#26262B] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:border-[#141414]/30 dark:hover:border-white/20"
    >
      {/* Top Visual Preview Area */}
      <div
        className="relative w-full aspect-[16/10] overflow-hidden border-b border-[#E5DFCF] dark:border-[#26262B] bg-[#141414] cursor-pointer"
        data-cursor="VIEW"
        onClick={() => onOpenDetails(project)}
      >
        <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          {renderPreviewMockup()}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-[#FAF7EE] dark:bg-[#16161B] text-[#141414] dark:text-[#F3F3F3] text-xs font-bold tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Explore Project
          </span>
        </div>

        {/* Project Number badge */}
        <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-[#FAF7EE]/90 dark:bg-[#15151A]/90 backdrop-blur-sm border border-[#E5DFCF] dark:border-[#2C2C36] text-xs font-mono font-bold text-[#141414] dark:text-[#F3F3F3]">
          {project.number}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtitle / Category */}
          <div className="flex items-center justify-between text-xs font-mono text-[#737373] dark:text-[#8E8E98] mb-2.5">
            <span className="uppercase tracking-wider">{project.category}</span>
            <span>{project.year}</span>
          </div>

          {/* Project Title with Diagonal Arrow */}
          <div
            onClick={() => onOpenDetails(project)}
            className="flex items-start justify-between gap-4 cursor-pointer mb-3"
            data-cursor="VIEW"
          >
            <h3 className="font-display text-2xl font-bold text-[#141414] dark:text-[#F3F3F3] group-hover:text-[#D35433] transition-colors leading-snug">
              {project.title}
            </h3>

            <div className="w-9 h-9 rounded-full bg-[#F4EFE2] dark:bg-[#202028] group-hover:bg-[#141414] dark:group-hover:bg-[#F3F3F3] group-hover:text-[#FAF7EE] dark:group-hover:text-[#141414] text-[#141414] dark:text-[#F3F3F3] flex items-center justify-center shrink-0 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tech Stack & Action Links */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#F4EFE2] dark:bg-[#1F1F26] text-[#525252] dark:text-[#A3A3A3] text-xs font-medium border border-[#E5DFCF] dark:border-[#2C2C36]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#E5DFCF] dark:border-[#26262B]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] text-xs font-semibold hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-colors duration-200"
              data-cursor="OPEN"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-transparent border border-[#D5CDBC] dark:border-[#383844] text-[#141414] dark:text-[#F3F3F3] text-xs font-semibold hover:bg-[#F4EFE2] dark:hover:bg-[#202028] transition-colors duration-200"
              data-cursor="OPEN"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
