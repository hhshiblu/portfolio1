"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FAFBFF] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
