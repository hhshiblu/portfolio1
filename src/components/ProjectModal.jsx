"use client";

import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export default function ProjectModal({ isOpen, onClose, project }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div
            className="project-modal relative z-10 flex flex-col max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm sticky top-0 z-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  Featured Case Study
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2.5 rounded-full hover:bg-slate-200/70 transition-colors text-slate-500 hover:text-slate-800"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8 text-slate-800">
              {/* Project Image Banner */}
              {project.image && (
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-100 relative group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium text-slate-200 drop-shadow">{project.description}</p>
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Code2 size={16} className="text-indigo-600" /> Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100/80 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comprehensive Description & Overview */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers size={20} className="text-indigo-600" /> Project Overview & Purpose
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Architecture & Engineering Highlights */}
              {project.architecture && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Cpu size={20} className="text-indigo-600" /> Architecture & Engineering Highlights
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Key Features & Innovations List */}
              {project.details && project.details.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-emerald-600" /> Key Features & Capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                        <span className="text-sm font-medium text-slate-700 leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact / Results if available */}
              {project.impact && (
                <div className="p-5 rounded-2xl bg-linear-to-r from-indigo-50 to-purple-50 border border-indigo-100">
                  <h4 className="text-sm font-bold text-indigo-900 mb-1">Key Impact & Achievements:</h4>
                  <p className="text-sm text-indigo-700">{project.impact}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} /> Live Preview
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <FaGithub size={16} /> GitHub Repository
                    </a>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
