import React from 'react';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SkillsSection() {
  return (
<section id="skills" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-[99%] md:w-full">
          
          <div
            
            
            
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm inline-block mb-3">
                What I Do
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Turning complex problems into <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">scalable digital products</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm sm:text-base">
              End-to-end development covering modern frontends, high-performance backends, database design, and AI integrations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Frontend Engineering",
                desc: "Fast, responsive web applications built with Next.js, React, and Tailwind CSS with rich user micro-interactions.",
                color: "text-indigo-600",
                bg: "bg-indigo-50 border-indigo-100",
                skills: ["Next.js", "React.js", "Tailwind CSS", "JavaScript ES6+"]
              },
              {
                icon: Database,
                title: "Backend & Microservices",
                desc: "Distributed backend services with Node.js, Express, Apache Kafka, Redis caching, Prisma, and PostgreSQL/MySQL.",
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-100",
                skills: ["Node.js", "Express.js", "Kafka", "Redis", "MySQL", "Prisma"]
              },
              {
                icon: BrainCircuit,
                title: "Applied AI & Analytics",
                desc: "RAG question answering pipelines, vector search with Pinecone, data analysis with Pandas/NumPy, and ML modeling.",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
                skills: ["Python", "LangChain", "Pinecone", "Pandas", "Machine Learning"]
              },
              {
                icon: PenTool,
                title: "System Design & Tools",
                desc: "Scalable architecture planning, containerization with Docker, Git version control, and API optimization.",
                color: "text-orange-600",
                bg: "bg-orange-50 border-orange-100",
                skills: ["System Design", "Docker", "REST APIs", "Git", "DSA"]
              }
            ].map((service, idx) => (
              <div
                key={idx}
                
                
                
                
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {service.skills.map((s, i) => (
                    <span key={i} className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  );
}
