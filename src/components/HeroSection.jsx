import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
<section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#f8f9ff] via-[#fdfdff] to-[#f0f4ff] -z-20" />
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10 animate-pulse-glow" />
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-[99%] md:w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
          
          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left z-20"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-indigo-100 shadow-sm text-indigo-700 font-medium text-xs sm:text-sm mb-8 backdrop-blur-md">
              <span className="text-base animate-bounce">👋</span>
              <span>Hello, I'm Md Hasanul Haque Shiblu</span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight">
              I build digital <br className="hidden sm:inline" />
              products that <br className="hidden sm:inline" />
              make an <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-blue-500">impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light">
              Full Stack Developer & Machine Learning Enthusiast who loves building scalable web applications, intelligent systems and delightful user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-slate-900 hover:bg-indigo-600 text-white font-medium shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="/shiblu_CV.pdf"
                download="Md_Hasanul_Haque_Shiblu_CV.pdf"
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all shadow-sm flex items-center justify-center gap-2 transform hover:-translate-y-1 group"
              >
                Download CV <Download size={18} className="text-indigo-600 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200/60 w-full justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:hasanulhaqueshiblu@gmail.com"
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Emerging Portrait & Blobs (6 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0 h-[450px] sm:h-[550px] lg:h-[650px] w-full"
          >
            {/* Animated Organic Liquid Blobs (Behind the person) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              {/* Blob 1 */}
              <div className="absolute w-[80%] h-[75%] bg-linear-to-br from-violet-400/40 to-indigo-300/40 blur-xl animate-fluid-blob-1 mix-blend-multiply" />
              
              {/* Blob 2 */}
              <div className="absolute w-[70%] h-[80%] bg-linear-to-tr from-cyan-300/40 to-blue-400/40 blur-xl animate-fluid-blob-2 mix-blend-multiply" style={{ animationDelay: '-4s' }} />
              
              {/* Blob 3 */}
              <div className="absolute w-[85%] h-[65%] bg-linear-to-bl from-purple-300/30 to-fuchsia-300/30 blur-2xl animate-fluid-blob-3 mix-blend-multiply" style={{ animationDelay: '-8s' }} />
            </div>

            {/* Static Developer Portrait (In front of blobs) */}
            <div className="relative w-full h-full max-w-[400px] z-10 pointer-events-none">
              {/* Masked image container to blend the bottom naturally into the scene */}
              <div 
                className="w-full h-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/remove_bg_shiblu.png"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover object-top drop-shadow-[0_15px_40px_rgba(99,102,241,0.15)]"
                />
              </div>
            </div>

            {/* Floating Card: Available */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -right-2 sm:-right-8 lg:-right-12 scale-90 sm:scale-95 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 flex items-center gap-3 z-20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-sm font-semibold text-slate-800">Available</p>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-6 sm:-left-12 lg:-left-20 bg-white/70 backdrop-blur-xl p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 flex flex-col gap-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 leading-none">2+</div>
                  <div className="text-xs font-medium text-slate-500">Years Experience</div>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200/60"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Layers size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 leading-none">9+</div>
                  <div className="text-xs font-medium text-slate-500">Projects</div>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200/60"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <Cpu size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 leading-none">10+</div>
                  <div className="text-xs font-medium text-slate-500">Technologies</div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
  );
}
