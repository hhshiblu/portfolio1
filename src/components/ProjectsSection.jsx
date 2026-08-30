import React from 'react';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const projects = [
  {
    id: "marjii",
    title: "Multi-Vendor Marketplace (Marjii)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Next.js", "Node.js", "Apache Kafka", "BullMQ", "Redis", "MySQL", "Docker"],
    description: "A scalable microservices-based marketplace to orchestrate product, order, authentication, and multi-vendor workflows across distributed services.",
    longDescription: "Architected a full-featured multi-vendor e-commerce platform designed to eliminate monolithic bottlenecks. Features separate portals for shoppers, sellers, and administrators with resilient asynchronous processing.",
    architecture: "Comprises 5+ containerized microservices communicating via Apache Kafka event streams. Redis caching and BullMQ job queues reduce database load and ensure instantaneous UI response times.",
    details: [
      "Engineered 4 frontends and 5+ containerized backend services using Next.js, Node.js, MySQL, Redis, Kafka, and Docker.",
      "Improved API response performance by 20% through Redis caching and Kafka-based asynchronous event processing.",
      "Implemented Auth, Product Catalog, Order Lifecycle, and Seller Management microservices.",
      "Integrated BullMQ for scheduled invoice generation and real-time email dispatch."
    ],
    impact: "Boosted system throughput by 20% while providing zero-downtime distributed service operations.",
    links: { live: "https://marjii.com" }
  },
  {
    id: "labour-pulse",
    title: "TheLabourPulse Platform",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Redis", "REST APIs"],
    description: "A centralized labour-management platform with labour-related news and role-based access to streamline workforce information and operations.",
    longDescription: "TheLabourPulse is an enterprise-scale content and labour management platform connecting distributed correspondents, editors, and job seekers with streamlined editorial moderation workflows.",
    architecture: "Engineered using Next.js Server Components and Server Actions, combined with Prisma ORM and PostgreSQL. Caching hot queries on Redis reduced repeated database round-trips significantly.",
    details: [
      "Improved platform performance by 30% using Redis-based news caching and reduced redundant database queries.",
      "Implemented with Next.js, Node.js, Prisma, PostgreSQL, Redis, and REST APIs, featuring secure authentication and server-rendered pages.",
      "Built multi-tiered editorial publishing workflows (Correspondents, Sub-Editors, Chief Editors, Admins).",
      "Achieved sub-second page delivery with Next.js ISR (Incremental Static Regeneration)."
    ],
    impact: "Increased overall platform responsiveness by ~30% with smooth, multi-user concurrency.",
    links: { live: "https://thelabourpulse.com" }
  },
  {
    id: "rag-qa",
    title: "RAG-Based Question Answering System",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Python", "LangChain", "Pinecone", "Embeddings", "FastAPI", "Gemini API"],
    description: "Context-aware question answering and summarization pipeline extracting accurate insights from long video transcripts and technical documents.",
    longDescription: "Solved the challenge of querying and synthesizing information from lengthy multimedia transcripts by building a production Retrieval-Augmented Generation (RAG) agent.",
    architecture: "Transcript chunking and dense sentence embeddings indexed into Pinecone Vector Database. Conversational query routing handled via LangChain with semantic similarity ranking.",
    details: [
      "Solved the challenge of extracting and querying information from long video transcripts by enabling context-aware question answering.",
      "Implemented using Python, LangChain, embeddings, and Pinecone vector database with transcript chunking, semantic search, and retrieval-augmented generation.",
      "Built interactive web UI for real-time document search and automated summary synthesis."
    ],
    impact: "Drastically accelerated content analysis time, providing accurate answers with citation context.",
    links: { live: "https://github.com" }
  },
  {
    id: "panmbazar",
    title: "PanmBazar Marketplace",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Next.js", "React", "Server Actions", "MySQL", "Tailwind CSS"],
    description: "Modern high-speed e-commerce marketplace focused on instant client-side interactions and zero-friction checkout.",
    longDescription: "A comprehensive digital store tailored for fast product discovery, frictionless shopping cart handling, and localized payment gateway integration.",
    architecture: "Server-driven UI rendering with Next.js App Router, combining Server Components for speed and Client Components for rich micro-interactions.",
    details: [
      "Dynamic product filtering by price, category, rating, and stock status.",
      "Optimized cart and checkout funnel with instant optimistic UI updates.",
      "Full order tracking history and PDF invoice generation.",
      "Strict data validation with Zod schemas on all server mutations."
    ],
    impact: "Delivered a frictionless shopping experience resulting in zero abandonment due to page load delay.",
    links: { live: "https://panmbazar.com" }
  }
];

export default function ProjectsSection({ onSelectProject }) {
  return (
<section id="projects" className="py-16 md:py-24 bg-[#FAFBFF] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-[99%] md:w-full">
          
          <div
            
            
            
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm inline-block mb-3">
                Featured Projects
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Case Studies & Systems Built
              </h2>
            </div>
            <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1">
              Click any project card for deep case study breakdown <ArrowRight size={16} />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                
                
                
                
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md backdrop-blur-md">
                    Case Study
                  </div>
                </div>

                <div className="p-5 sm:p-7 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100/60">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-500">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  );
}
