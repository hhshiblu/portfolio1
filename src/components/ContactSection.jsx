import React from 'react';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
<section id="contact" className="py-16 md:py-32 bg-[#FAFBFF] relative overflow-hidden">
        {/* Background Art Layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/40 to-white/10 -z-20" />
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-lavender-100/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Subtle Orbit Lines */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-slate-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] border border-slate-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-[99%] md:w-full relative z-10">
          
          {/* Main Contact Composition */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center mb-24">
            
            {/* Left Side: Text & CTAs */}
            <div
              
              
              
              
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              {/* Label */}
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50/80 px-4 py-2 rounded-full border border-indigo-100 mb-6 backdrop-blur-sm shadow-sm">
                Let's Connect
              </span>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-[1.1] tracking-tight">
                Have a project <br className="hidden sm:inline" />
                in mind?
              </h2>
              
              {/* Highlighted Statement */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-linear-to-r from-violet-600 via-blue-600 to-cyan-500">
                Let's build something <br className="hidden sm:inline" />
                extraordinary.
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg max-w-lg mb-12 leading-relaxed font-light">
                Whether you need scalable microservices, a high-performance web platform, or AI/ML/RAG integration, let's turn your idea into a real product.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                {/* Email Card CTA */}
                <a
                  href="mailto:hasanulhaqueshiblu@gmail.com"
                  className="group relative flex flex-col items-start w-full sm:w-auto px-8 py-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Mail size={16} />
                    </div>
                    <span className="text-sm font-semibold text-slate-500">hasanulhaqueshiblu@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Send me an email <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* CV CTA */}
                <a
                  href="/shiblu_CV.pdf"
                  download="Md_Hasanul_Haque_Shiblu_CV.pdf"
                  className="group flex flex-col items-start w-full sm:w-auto px-8 py-5 rounded-3xl bg-transparent border border-slate-200/80 hover:border-indigo-200 hover:bg-white/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Download size={16} />
                    </div>
                    <span className="text-sm font-semibold text-slate-500">Download CV</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                    Get my resume <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: 3D Communication Visual */}
            <div
              
              
              
              
              className="relative flex justify-center items-center h-[350px] sm:h-[450px]"
            >
              {/* Static Background Blobs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-linear-to-br from-indigo-300/40 to-purple-300/40 blur-2xl" />
                <div className="absolute w-60 h-60 sm:w-[300px] sm:h-[300px] bg-linear-to-tr from-cyan-300/40 to-blue-300/40 blur-2xl" />
              </div>

              {/* Decorative Floating Spheres & Elements */}
              <div className="absolute top-[10%] left-[15%] w-8 h-8 rounded-full bg-linear-to-br from-violet-400 to-indigo-500 shadow-lg shadow-indigo-200 blur-[1px]" />
              <div className="absolute bottom-[20%] right-[10%] w-12 h-12 rounded-full bg-linear-to-br from-cyan-300 to-blue-500 shadow-lg shadow-blue-200 blur-[1px]" />
              <div className="absolute top-[30%] right-[20%] w-3 h-3 rounded-full bg-pink-400 opacity-80" />
              <div className="absolute bottom-[40%] left-[25%] w-2 h-2 rounded-full bg-indigo-400 opacity-60" />

              {/* Static 3D Glass Envelope Object */}
              <div
                className="relative z-10 w-64 h-48 sm:w-72 sm:h-56 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-4xl shadow-[0_30px_60px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center p-6 group cursor-pointer hover:shadow-[0_40px_80px_rgba(99,102,241,0.15)] transition-all duration-500"
              >
                {/* Inner Card Depth */}
                <div className="absolute inset-2 bg-linear-to-br from-white/60 to-white/10 rounded-3xl -z-10" />
                
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center shadow-inner border border-white mb-4 group-hover:scale-105 transition-transform duration-500">
                  <Mail className="text-indigo-600 w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 text-center leading-tight">
                  Let's work<br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">together.</span>
                </h3>
              </div>
            </div>

          </div>

          {/* Secondary Information Strip */}
          <div
            
            
            
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 py-12 border-y border-slate-200/60"
          >
            {/* Section 1 */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 mb-5 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> I'm open for
              </h4>
              <ul className="space-y-3 text-slate-600 font-medium text-sm sm:text-base">
                <li>• Freelance Projects</li>
                <li>• Full-time Opportunities</li>
                <li>• Part-time Collaborations</li>
                <li>• Technical Discussions</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 mb-5 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> What I can help with
              </h4>
              <ul className="space-y-3 text-slate-600 font-medium text-sm sm:text-base">
                <li>• Full Stack Web Development</li>
                <li>• Backend & API Development</li>
                <li>• Microservices Architecture</li>
                <li>• AI / ML / RAG Integration</li>
                <li>• Performance & Scalability</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-sm font-extrabold text-slate-900 mb-5 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" /> Let's build the future
              </h4>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-6">
                Great ideas deserve the right technology. Let's turn your vision into a powerful digital product.
              </p>
              {/* Handwritten Signature styling using a serif italic font to simulate signature */}
              <div className="text-4xl text-indigo-900/60 font-serif italic tracking-wide">
                Shiblu
              </div>
            </div>
          </div>

          {/* Social Connection at the bottom */}
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-6">
              Connect with me
            </h4>
            <div className="flex items-center gap-4">
              {[
                { icon: FaGithub, link: "https://github.com", label: "GitHub" },
                { icon: FaLinkedin, link: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, link: "mailto:hasanulhaqueshiblu@gmail.com", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
  );
}
