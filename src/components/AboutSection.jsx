import React from 'react';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutSection() {
  return (
<section id="about" className="py-16 md:py-24 bg-linear-to-b from-[#FAFBFF] via-white to-[#FAFBFF] relative overflow-hidden">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-purple-100/60 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-[99%] md:w-full">
          
          <div
            
            
            
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm inline-block mb-3">
              My Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineering with <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600">Passion & Purpose</span>
            </h2>
            <p className="text-slate-500 mt-4 text-base sm:text-lg">
              From competitive problem-solving and ML data modeling to architecting resilient distributed systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Story Card (5 cols) */}
            <div
              
              
              
              
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group aspect-4/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/data visonary.jpg"
                  alt="My Story"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Data & Scalability</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    &quot;Turning complex datasets and high-traffic bottlenecks into seamless digital experiences.&quot;
                  </h3>
                </div>
              </div>

              {/* Exact Datathon Achievement Badge (500k+ railway dataset, 94% accuracy) */}
              <div
                
                className="absolute -top-6 -left-4 sm:-left-8 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10 max-w-[280px]"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">2nd Runner-up • Datathon</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Cleaned 500k+ dataset & built ML model with 94% accuracy</p>
                </div>
              </div>

              {/* CP Milestone */}
              <div
                
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <TerminalSquare size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Competitive Programmer</p>
                  <p className="text-[10px] text-slate-500">Problem Solving with C++ & DSA</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Pillars Story Cards (7 cols) */}
            <div
              
              
              
              
              className="lg:col-span-7 space-y-6"
            >
              {[
                {
                  step: "01",
                  title: "Algorithmic Foundations & Problem Solving",
                  icon: Code2,
                  iconColor: "text-blue-600 bg-blue-50 border-blue-100",
                  desc: "My software journey started with intense problem solving in C++, mastering data structures and algorithmic complexity. This deep foundation allows me to write highly optimized, clean, and maintainable code."
                },
                {
                  step: "02",
                  title: "Microservices & Scalable Backends",
                  icon: Layers,
                  iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
                  desc: "Specializing in event-driven architectures with Apache Kafka, Node.js, Next.js Server Actions, and Redis caching. I architect platforms with separated services to ensure high concurrency and fault tolerance."
                },
                {
                  step: "03",
                  title: "Data Analytics & Applied AI",
                  icon: BrainCircuit,
                  iconColor: "text-purple-600 bg-purple-50 border-purple-100",
                  desc: "Recognized as 2nd Runner-up at the National Data Analytics Competition by DIU NLP & ML Lab. I processed an extensive 500k+ railway dataset through end-to-end cleaning, feature engineering, and modeling to achieve 94% evaluation accuracy. Today I build production RAG systems with LangChain and vector databases."
                }
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  
                  className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
                >
                  <div className="flex items-center sm:items-start gap-4 sm:gap-0 w-full sm:w-auto">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${pillar.iconColor} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <pillar.icon size={24} />
                    </div>
                    <div className="sm:hidden flex flex-col">
                      <span className="text-xs font-extrabold text-indigo-600 tracking-wider uppercase mb-1">Pillar {pillar.step}</span>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="hidden sm:block">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-extrabold text-indigo-600 tracking-wider uppercase">Pillar {pillar.step}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2 sm:mt-0">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  View full work experience & timeline <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
