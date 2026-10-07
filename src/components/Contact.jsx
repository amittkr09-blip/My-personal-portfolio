import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/projects";
import { Mail, ArrowUpRight, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Frontend-only simulation of message submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[#E8E2D2]/80 dark:border-[#26262B] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35433]">04 / Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tighter text-[#141414] dark:text-[#F3F3F3] lowercase leading-tight max-w-2xl"
          >
            let's build something<span className="text-[#D35433]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#525252] dark:text-[#A3A3A3] max-w-xl mt-4"
          >
            I'm currently looking for frontend development opportunities, internships and freelance projects.
          </motion.p>
        </div>

        {/* Large Editorial CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 sm:p-12 rounded-3xl bg-[#F5EEDC] dark:bg-[#1A1A20] border border-[#E3D9C4] dark:border-[#2C2C36] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#D35433] font-semibold">
              Get In Touch Directly
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#141414] dark:text-[#F3F3F3] mt-1">
              Have a project in mind? <br className="hidden sm:inline" />
              Let's talk →
            </h3>
          </div>

          <a
            href={personalInfo.links.email}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] text-sm font-semibold hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-colors shadow-sm hover:shadow-md cursor-pointer shrink-0"
            data-cursor="OPEN"
          >
            <Mail className="w-4 h-4" />
            <span>Say Hello</span>
          </a>
        </motion.div>

        {/* Two Column Grid: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Links & Presence */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl font-bold text-[#141414] dark:text-[#F3F3F3]">
              Connect Directly
            </h3>

            <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
              Feel free to drop an email or reach out on social channels. Whether you have an internship opening, freelance inquiry, or just want to discuss frontend architecture, my inbox is open.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <a
                href={personalInfo.links.email}
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#FAF7EE] dark:bg-[#15151A] border border-[#E5DFCF] dark:border-[#26262B] hover:border-[#D35433] dark:hover:border-[#D35433] hover:shadow-sm transition-all"
                data-cursor="OPEN"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFE2] dark:bg-[#202028] flex items-center justify-center text-[#141414] dark:text-[#F3F3F3] group-hover:text-[#D35433] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] dark:text-[#8E8E98]">Email</span>
                    <p className="text-sm font-semibold text-[#141414] dark:text-[#F3F3F3]">{personalInfo.links.emailAddress}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] dark:text-[#8E8E98] group-hover:text-[#D35433] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#FAF7EE] dark:bg-[#15151A] border border-[#E5DFCF] dark:border-[#26262B] hover:border-[#D35433] dark:hover:border-[#D35433] hover:shadow-sm transition-all"
                data-cursor="OPEN"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFE2] dark:bg-[#202028] flex items-center justify-center text-[#141414] dark:text-[#F3F3F3] group-hover:text-[#D35433] transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] dark:text-[#8E8E98]">GitHub</span>
                    <p className="text-sm font-semibold text-[#141414] dark:text-[#F3F3F3]">github.com/amitt</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] dark:text-[#8E8E98] group-hover:text-[#D35433] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#FAF7EE] dark:bg-[#15151A] border border-[#E5DFCF] dark:border-[#26262B] hover:border-[#D35433] dark:hover:border-[#D35433] hover:shadow-sm transition-all"
                data-cursor="OPEN"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFE2] dark:bg-[#202028] flex items-center justify-center text-[#141414] dark:text-[#F3F3F3] group-hover:text-[#D35433] transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] dark:text-[#8E8E98]">LinkedIn</span>
                    <p className="text-sm font-semibold text-[#141414] dark:text-[#F3F3F3]">linkedin.com/in/amit</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] dark:text-[#8E8E98] group-hover:text-[#D35433] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7EE] dark:bg-[#15151A] rounded-3xl border border-[#E5DFCF] dark:border-[#26262B] p-7 sm:p-9 shadow-subtle">
              <h3 className="font-display text-xl font-bold text-[#141414] dark:text-[#F3F3F3] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#737373] dark:text-[#8E8E98] mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center bg-[#F4EFE2] dark:bg-[#1E1E26] rounded-2xl p-6 border border-[#E5DFCF] dark:border-[#2D2D38]">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#141414] dark:text-[#F3F3F3] mb-1">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-sm text-[#525252] dark:text-[#A3A3A3] max-w-sm">
                    Your message has been recorded. I look forward to connecting with you.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold text-[#D35433] underline hover:text-[#B64324]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-[#737373] dark:text-[#8E8E98] mb-1.5">
                      Name <span className="text-[#D35433]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1E1E26] border border-[#D8D2C0] dark:border-[#33333E] text-sm text-[#141414] dark:text-[#F3F3F3] placeholder:text-[#A8A196] dark:placeholder:text-[#5E5E6B] focus:outline-none focus:border-[#141414] dark:focus:border-[#FAF7EE] focus:ring-1 focus:ring-[#141414] dark:focus:ring-[#FAF7EE] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-[#737373] dark:text-[#8E8E98] mb-1.5">
                      Email <span className="text-[#D35433]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1E1E26] border border-[#D8D2C0] dark:border-[#33333E] text-sm text-[#141414] dark:text-[#F3F3F3] placeholder:text-[#A8A196] dark:placeholder:text-[#5E5E6B] focus:outline-none focus:border-[#141414] dark:focus:border-[#FAF7EE] focus:ring-1 focus:ring-[#141414] dark:focus:ring-[#FAF7EE] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-[#737373] dark:text-[#8E8E98] mb-1.5">
                      Message <span className="text-[#D35433]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or role..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1E1E26] border border-[#D8D2C0] dark:border-[#33333E] text-sm text-[#141414] dark:text-[#F3F3F3] placeholder:text-[#A8A196] dark:placeholder:text-[#5E5E6B] focus:outline-none focus:border-[#141414] dark:focus:border-[#FAF7EE] focus:ring-1 focus:ring-[#141414] dark:focus:ring-[#FAF7EE] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#141414] dark:bg-[#F3F3F3] text-[#FAF7EE] dark:text-[#141414] text-sm font-semibold hover:bg-[#D35433] dark:hover:bg-[#D35433] dark:hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-70"
                    data-cursor="OPEN"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
