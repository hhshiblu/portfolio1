import React from 'react';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ExperienceSection() {
  return (
<section id="experience" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-[99%] md:w-full">
          
          <div
            
            
            
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm inline-block mb-3">
              Career Path
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Work Experience & Education
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Work Experience Column */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                Work Experience
              </h3>

              <div className="space-y-6 relative pl-6 border-l-2 border-indigo-100 ml-4">
                
                {/* Experience 1: TheLabourPulse */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform" />
                  <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        Full Stack Developer
                      </h4>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                        Jan 2026 — Jul 2026
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      TheLabourPulse • <span className="text-slate-500 font-normal">www.thelabourpulse.com (Mymensingh, Bangladesh)</span>
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc pl-4">
                      <li>Designed and optimized scalable application architecture, focusing on modular system design, efficient data flow, and maintainable code to support the company’s growing platform.</li>
                      <li>Improved development and application performance by approximately 30% through optimized rendering, API workflows, and performance-focused engineering practices.</li>
                    </ul>
                  </div>
                </div>

                {/* Experience 2: Saybriefly */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-purple-600 group-hover:scale-125 transition-transform" />
                  <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        Backend Developer
                      </h4>
                      <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                        Feb 2025 — Sep 2025
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      Saybriefly • <span className="text-slate-500 font-normal">www.saybriefly.com (Remote)</span>
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc pl-4">
                      <li>Engineered and maintained RESTful backend services using Node.js and Express.js, ensuring reliable API communication and smooth integration across the application.</li>
                      <li>Optimized backend workflows and application integration to improve responsiveness by 15%, supporting smooth user interactions and bot-driven platform functionality.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Education & Official Honors Column */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                Education & Achievements
              </h3>

              <div className="space-y-6 relative pl-6 border-l-2 border-purple-100 ml-4">
                
                {/* Degree: Daffodil International University */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform" />
                  <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        B.Sc. in Computer Science & Engineering
                      </h4>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                        Jan 2022 — Dec 2025
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Daffodil International University</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100 mb-2">
                      <Check size={14} /> CGPA: 3.69 / 4.00
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Solid foundation in Data Structures, Algorithms, Software Architecture, Distributed Computing, and Artificial Intelligence.
                    </p>
                  </div>
                </div>

                {/* Competition Award: National Data Analytics Competition 2025 */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-amber-500 group-hover:scale-125 transition-transform" />
                  <div className="bg-amber-50/40 p-5 sm:p-6 rounded-2xl border border-amber-100/80 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Trophy size={16} className="text-amber-500" /> 2nd Runner-up — Data Visionary
                      </h4>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100/60 px-2.5 py-1 rounded-lg border border-amber-200">
                        March 2025
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">National Data Analytics Competition 2025</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Organized by DIU NLP & ML Research Lab competing against 50+ university teams across Bangladesh. Handled end-to-end data cleaning, preprocessing, and ML model evaluation on a 500,000+ railway dataset achieving 94% accuracy.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
  );
}
