import React from 'react';
import {
  Code2, Database, BrainCircuit, PenTool, Download, ArrowRight, Mail,
  Briefcase, GraduationCap, Sparkles, Trophy, Award, TerminalSquare,
  CheckCircle, ExternalLink, Cpu, Layers, Zap, Globe, Check
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="py-8 bg-white border-t border-slate-100 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <div className="w-5 h-5 rounded-md bg-linear-to-tr from-indigo-500 to-purple-500"></div>
            Md Hasanul Haque Shiblu
          </div>
          <p>© {new Date().getFullYear()} Shiblu. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </footer>
  );
}
