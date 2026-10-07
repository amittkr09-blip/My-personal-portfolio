import React, { useState } from "react";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Sleek initial editorial reveal */}
        <Preloader onComplete={() => setLoadingComplete(true)} />

        {/* Main Portfolio Layout */}
        <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#0E0E10] text-[#141414] dark:text-[#F3F3F3] font-sans selection:bg-[#D35433] selection:text-white flex flex-col justify-between transition-colors duration-300">
          <Navbar />

          <main id="main-content" tabIndex="-1" className="outline-none">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
