/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Pacifico, Space_Grotesk } from "next/font/google";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const brandFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const navFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const heroWords = [
  "Web Design",
  "HTML & CSS",
  "C & Java",
  "Web Development",
  "React & Next.js",
  "MERN Stack",
];

const heroImages = [
  "/images/hero1.png",
];

const services = [
  {
    id: 1,
    title: "Software Engineering",
    description:
      "Designing and building reliable software systems with clean architecture, testing, and long‑term maintainability in mind.",
    detail:
      "I follow modern software engineering practices: feature slicing, SOLID principles, meaningful Git history, and code reviews. From planning and breaking down requirements to implementing features with tests and documentation, I focus on code that other developers will enjoy working with. I am comfortable working with REST APIs, authentication/authorization flows, performance profiling, and production debugging.",
    image: "/images/service.jpeg",
  },
  {
    id: 2,
    title: "Full‑Stack Development",
    description:
      "End‑to‑end web development using React/Next.js on the frontend and Node.js / Express / MongoDB on the backend.",
    detail:
      "I can take a product from Figma or a simple idea to a deployed full‑stack application. On the frontend I work with React, Next.js, Tailwind CSS and component‑driven design. On the backend I build secure REST APIs, connect databases (MongoDB / SQL), and handle things like JWT auth, file uploads, and payments. I also set up environment configs and basic CI so the project is easy to deploy and extend later.",
    image: "/images/fullstack.jpeg",
  },
  {
    id: 3,
    title: "Problem Solving & System Design",
    description:
      "Breaking down complex problems using data structures, algorithms, and simple system design that actually fits the project.",
    detail:
      "Competitive programming and contest experience help me write efficient solutions using graphs, DP, and greedy techniques. For larger apps I like to sketch small system diagrams first: what data is needed, where it should live, and how modules talk to each other. This keeps features fast, reduces bugs, and makes the codebase easier to scale when new requirements arrive.",
    image: "/images/problem.webp",
  },
];

const blogs = [
  {
    id: 2,
    category: "Programming Contest",
    title: "National Datathon",
    excerpt:
      "Daffodil International University hosted a national Datathon where we earned 2nd place for our ML-driven insights.",
    author: "Team HasAn",
    date: "Jan 05, 2023",
    image: "/images/data visonary.jpg",
    details:
      "Daffodil International University organized a national Datathon focused on turning raw datasets into actionable stories. Our team built an ML pipeline for cleaning, modeling, and visualizing the data. Judges appreciated that we combined predictive insights with a polished UI, landing us the 2nd position nationwide.",
  },
  {
    id: 1,
    category: "Programming Contest",
    title: "CPC Contest In DIU",
    excerpt:
      "Recently, I had the opportunity to participate in a CPC contest hosted by DIU. It was an exciting and challenging experience.",
    author: "Md Hasanul Haque",
    date: "Dec 12, 2022",
    image: "/images/cpc.jpg",
    details:
      "The CPC contest at Daffodil International University brought together fellow developers who love algorithmic puzzles. I focused on dynamic programming, graph traversal, and problem decomposition to support our team. The event sharpened my competitive coding skills and connected me with other talented programmers.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "I highly recommend Shiblu for any web development and design projects. Their attention to detail exceeded expectations.",
    name: "Ziaul Haque",
    role: "Co-founder, TD",
    image: "/images/man1.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Shiblu on my website was seamless. They brought my vision to life with a polished, modern experience.",
    name: "Sadia Nowshin",
    role: "Student",
    image: "/images/woman1.jpg",
  },
  {
    id: 3,
    quote:
      "Clean code, clear communication, and reliable delivery. Exactly what we needed for our MVP build.",
    name: "Hasan Mahmud",
    role: "Business Owner",
    image: "/images/man2.jpg",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "blog", href: "#blog" },
  { label: "Service", href: "#services" },
  { label: "Contact Me", href: "#contact" },
];

const counters = [
  { id: 1, label: "Happy Clients", value: 200 },
  { id: 2, label: "Projects", value: 100 },
  { id: 3, label: "Years Experience", value: 2, suffix: "+" },
  { id: 4, label: "Live Work", value: 100 },
];

const homeSkills = [
  { label: "Data Structures & Algorithms", value: 92 },
  {
    label: "Problem Solving",
    value: 88,
    link: "https://leetcode.com/",
  },
  { label: "Next.js Engineering", value: 82 },
  { label: "C++ & Python", value: 78 },
];

const skillRing = (value) => ({
  background: `conic-gradient(#05d105 ${value * 3.6}deg, rgba(255,255,255,0.07) 0deg)`,
});

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [counterOn, setCounterOn] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const counterRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeBlog, setActiveBlog] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showContactToast, setShowContactToast] = useState(false);
  const accentColor = "#07c064";
  const accentSoft = "#0f8f55";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounterOn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const heroDescription =
    "Web developer and Computer Science student at Daffodil International University, Bangladesh, skilled in JavaScript and modern web frameworks.";

  const handleContactChange = (e) => {
    setContactForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // here you can later connect to API / email service
    console.log("Home contact form submitted:", contactForm);

    setShowContactToast(true);
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setShowContactToast(false), 3000);
  };

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-[60] border-b border-white/5 bg-gradient-to-r from-[#090d11]/95 via-[#0f141a]/90 to-[#090d11]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
          <Link
            href="/"
            className={`${brandFont.className} text-3xl text-white drop-shadow-[0_2px_8px_rgba(5,209,5,0.25)]`}
          >
            <span style={{ color: accentColor }}>H</span>as
            <span style={{ color: accentColor }}>A</span>n
          </Link>
          <nav
            className={`${navFont.className} hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.25em] text-white md:flex`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative transition hover:text-[#05D105]"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#05D105] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="mailto:hello@shibludev.com"
              className="rounded-full border border-[#05D105]/40 px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#05D105] hover:text-black"
            >
              Hire me
            </a>
          </div>
          <button
            className="relative z-[65] flex flex-col gap-1.5 rounded-full bg-white/5 p-2 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {[1, 2, 3].map((bar) => (
              <span
                key={bar}
                className={`h-1 w-8 origin-center rounded-full bg-white transition ${
                  menuOpen && bar === 1
                    ? "translate-y-[10px] rotate-45 bg-[#05D105]"
                    : ""
                } ${menuOpen && bar === 2 ? "opacity-0" : ""} ${
                  menuOpen && bar === 3
                    ? "-translate-y-[10px] -rotate-45 bg-[#05D105]"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`fixed inset-y-0 right-0 z-50 h-screen w-[60%] max-w-sm overflow-y-auto bg-gradient-to-b from-[#050b0f] via-[#0f1c24] to-[#050b0f] px-10 py-16 text-white shadow-[-20px_0_60px_rgba(0,0,0,0.45)] transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Navigate</p>
          <nav className={`${navFont.className} mt-6 flex flex-col gap-6 text-lg font-semibold`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/5 px-4 py-3 transition hover:border-[#05D105]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-gray-400">Need a project?</p>
            <a
              href="mailto:hello@shibludev.com"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#05D105] to-[#19ff56] px-6 py-3 text-sm font-bold text-black shadow-lg"
            >
              Start a project
            </a>
          </div>
        </aside>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-[80vh] overflow-hidden bg-[#101416] flex items-center"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60 sm:opacity-80">
          <div className="absolute -top-1/3 left-1/4 h-96 w-96 rounded-full bg-[#0cf574]/40 blur-[140px]" />
          <div className="absolute -bottom-1/2 right-1/4 h-[420px] w-[420px] rounded-full bg-[#12a86f]/30 blur-[160px]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-12 sm:px-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <p className="text-lg font-semibold text-gray-300">Hello, it&apos;s me</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Hasanul Haque Shiblu
            </h1>
            <div className="text-2xl font-medium text-gray-100 sm:text-3xl">
              I&apos;m an Expert in
              <br />
              <span className="relative mt-2 block h-12 text-4xl font-bold text-[#05D105] sm:h-14">
                <span className="absolute inset-0 rounded-xl bg-black/40 blur-lg" />
                <span className="relative inline-flex min-w-[240px] items-center">
                  <Typewriter
                    words={heroWords}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </span>
            </div>
            <p className="max-w-xl text-gray-300 mx-auto lg:mx-0">{heroDescription}</p>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start">
              <button className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-[#05D105] px-10 py-3 text-lg font-semibold text-[#05D105] transition-colors">
                <span className="relative z-10 transition-colors group-hover:text-black">
                  Contact Me
                </span>
                <span className="absolute inset-0 translate-y-[110%] bg-[#05D105] transition duration-300 ease-out group-hover:translate-y-0" />
              </button>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                    Recent Project
                  </p>
                  <p className="font-semibold text-white">Multi-vendor marketplace</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto flex h-[520px] w-full max-w-xl items-center justify-center">
              <div className="pointer-events-none absolute inset-0 blur-[120px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(5,209,5,0.45),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.15),transparent)]" />
              </div>
              <div className="relative w-full px-4 pb-6 pt-4">
                <div className="pointer-events-none absolute -inset-6 rounded-[52px] border border-white/5" />
                <div className="relative w-full rounded-[46px] bg-gradient-to-br from-white/15 to-transparent p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.7)] transition-transform duration-500">
                  <div className="rounded-[44px] bg-[#05080c] p-8">
                    <div className="absolute -top-6 right-10 h-12 w-12 rounded-full border border-white/15" />
                    <div className="absolute -bottom-8 left-5 h-16 w-16 rounded-full border border-[#05D105]/40" />
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b1117] via-[#05080c] to-[#0b1117] p-6">
                      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top,rgba(5,209,5,.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(255,255,255,.25),transparent_70%)]" />
                      <img
                        src="/images/hero1.png"
                        alt="Hero"
                        className="relative z-10 mx-auto h-[360px] w-auto object-contain transition duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.35em] text-gray-400">
          <a href="#about" className="flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <span className="h-10 w-[1px] bg-gradient-to-b from-transparent via-[#05D105] to-transparent" />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#20262E]">
        <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-8 lg:flex-row">
          <div className="flex-1 space-y-6">
            <p className="text-xl font-semibold text-white">I&apos;m a designer</p>
            <h2 className="text-3xl font-bold text-[#05D105] sm:text-4xl">
              I Can Design Anything You Want
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Hi, I&apos;m Shiblu, an undergraduate student of Daffodil International University,
              Dhaka. I&apos;m highly proficient in Java, JavaScript, C and other programming
              languages. I&apos;m also a MERN stack developer capable of crafting web experiences
              using HTML5, CSS, JavaScript, Bootstrap, and React.
            </p>
            <button
              onClick={() => setAboutOpen(true)}
              className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-[#05D105] bg-white/5 px-10 py-3 text-lg font-semibold text-white transition"
            >
              <span className="relative z-10 transition-colors text-black group-hover:text-white">
                Learn More
              </span>
              <span className="absolute inset-0 bg-[#05D105] transition duration-300 group-hover:-translate-y-full" />
            </button>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto h-[420px] w-full max-w-md">
              <div className="absolute -left-6 top-6 h-64 w-60 rounded-3xl bg-gradient-to-br from-[#0f1c24] to-[#05080c] opacity-80" />
              <div className="absolute -right-4 bottom-4 h-64 w-56 rounded-3xl border border-[#05D105]/30 opacity-70" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#0b1117] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top,rgba(5,209,5,.5),transparent_60%)]" />
                <img
                  src="/images/sabout.png"
                  alt="About Illustration"
                  className="relative z-10 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills / My Expertise */}
      <section className="bg-gradient-to-b from-black via-[#050910] to-black px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-[#05d105] sm:text-4xl">My Expertise</h2>
          <p className="mt-4 text-sm text-gray-400 sm:text-base">
            Numbers don&apos;t define me, but they show how much time I&apos;ve invested in mastering
            the craft.
          </p>
          {/* Mobile / tablet: grid, all cards same width and level */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
            {homeSkills.map((skill) => (
              <div
                key={skill.label}
                className="group w-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#050b10] via-[#050910] to-[#020305] px-6 py-5 text-left shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#05d105]/60"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Skill Level</p>
                <p className="mt-1 text-2xl font-bold text-[#05d105] sm:text-3xl">
                  {skill.value}%
                </p>
                {skill.link ? (
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-sm font-semibold text-[#05d105] transition group-hover:text-white sm:text-base"
                  >
                    {skill.label}
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-semibold text-gray-200 sm:text-base">
                    {skill.label}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: vertical line + two sides */}
          <div className="mt-12 hidden items-stretch gap-10 lg:flex lg:justify-center">
            {/* Left skills */}
            <div className="flex flex-1 flex-col items-end gap-6">
              {homeSkills.slice(0, 2).map((skill) => (
                <div
                  key={skill.label}
                  className="group w-full max-w-xs rounded-2xl border border-white/10 bg-gradient-to-br from-[#050b10] via-[#050910] to-[#020305] px-6 py-5 text-right shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#05d105]/60"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Skill Level</p>
                  <p className="mt-1 text-2xl font-bold text-[#05d105] sm:text-3xl">
                    {skill.value}%
                  </p>
                  {skill.link ? (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 block text-sm font-semibold text-[#05d105] transition group-hover:text-white sm:text-base"
                    >
                      {skill.label}
                    </a>
                  ) : (
                    <p className="mt-3 text-sm font-semibold text-gray-200 sm:text-base">
                      {skill.label}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Middle vertical line */}
            <div className="h-64 w-px bg-gradient-to-b from-transparent via-[#05d105] to-transparent" />

            {/* Right skills */}
            <div className="flex flex-1 flex-col items-start gap-6">
              {homeSkills.slice(2).map((skill) => (
                <div
                  key={skill.label}
                  className="group w-full max-w-xs rounded-2xl border border-white/10 bg-gradient-to-br from-[#050b10] via-[#050910] to-[#020305] px-6 py-5 text-left shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#05d105]/60"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Skill Level</p>
                  <p className="mt-1 text-2xl font-bold text-[#05d105] sm:text-3xl">
                    {skill.value}%
                  </p>
                  {skill.link ? (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 block text-sm font-semibold text-[#05d105] transition group-hover:text-white sm:text-base"
                    >
                      {skill.label}
                    </a>
                  ) : (
                    <p className="mt-3 text-sm font-semibold text-gray-200 sm:text-base">
                      {skill.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#121212]">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8">
          <div className="text-center text-white">
            <h3 className="text-3xl font-semibold text-[#05D105]">What I Do for Clients</h3>
            <p className="text-gray-300">Services / features</p>
            <p className="mt-3 text-gray-400">
              Most common methods for designing websites that work well on desktop is responsive
              and adaptive design.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="relative rounded-3xl border border-[#0ead52] bg-gradient-to-b from-[#1b2b1d] to-[#0c130d] p-6 text-white shadow-xl"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <h4 className="mt-6 text-2xl font-semibold">{service.title}</h4>
                <p className="mt-3 text-gray-300">{service.description}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 inline-flex items-center rounded-full border border-[#05D105] px-5 py-2 text-sm font-semibold text-[#05D105] transition hover:bg-[#05D105] hover:text-black"
                >
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blog" className="bg-[#272829]">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8">
          <div className="text-center">
            <span className="text-lg font-semibold text-white">From My Blog</span>
            <h3 className="mt-2 text-3xl font-semibold text-[#05D105]">
              Our Recent Updates, Blog, Tips, Tricks &amp; More
            </h3>
          </div>
          <div className="mt-12 space-y-10">
            {blogs.map((blog, idx) => (
              <div
                key={blog.id}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-3xl bg-black/20 px-6 py-8 text-white">
                    <p className="text-sm uppercase tracking-[0.3em]">{blog.category}</p>
                    <h4 className="mt-2 text-2xl font-semibold text-[#2fb02f]">{blog.title}</h4>
                    <p className="mt-3 text-gray-200">{blog.excerpt}</p>
                    <button
                      onClick={() => setActiveBlog(blog)}
                      className="mt-3 text-sm text-white underline transition hover:text-red-400"
                    >
                      learn more
                    </button>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
                      <span className="font-semibold text-[#2fb02f]">{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full max-h-[320px] object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1f232b]">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-300">Testimonials</p>
            <h3 className="mt-2 text-3xl font-semibold text-[#05D105]">What My Clients Say</h3>
            <p className="mt-3 text-gray-300">
              Most common methods for designing websites that work well on desktop is responsive
              and adaptive design.
            </p>
          </div>
          <div className="mt-12">
            <article
              key={testimonials[currentTestimonial].id}
              className="flex flex-col-reverse gap-8 rounded-[40px] border border-white/10 bg-[#10171f] p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-opacity duration-500 lg:flex-row lg:items-center lg:gap-12"
            >
              <div className="flex-1 rounded-[32px] border border-white/15 bg-gradient-to-br from-[#0b2a12] to-[#0f381c] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
                <div className="text-4xl text-[#1ec256] sm:text-5xl">“</div>
                <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="mt-6 flex items-center gap-4 lg:hidden">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-[#28dd66] sm:text-2xl">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-200">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
                <div className="mt-6 hidden lg:block">
                  <h4 className="text-2xl font-semibold text-[#28dd66]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-200">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <div className="hidden flex-1 overflow-hidden rounded-[32px] bg-[#0b1117] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.35)] lg:block">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="h-full w-full max-h-[360px] rounded-[24px] object-cover"
                />
              </div>
            </article>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2.5 rounded-full transition ${
                    idx === currentTestimonial
                      ? "w-8 bg-[#05D105]"
                      : "w-3 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="bg-[#121212]">
        <div
          ref={counterRef}
          className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8"
        >
          <div className="grid grid-cols-2 gap-6 text-center text-white sm:grid-cols-4">
            {counters.map((counter) => (
              <div key={counter.id} className="rounded-2xl border border-[#0ead52] p-6">
                <h4 className="text-3xl font-bold text-[#05D105]">
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={counter.value}
                      duration={2}
                      delay={0}
                      suffix={counter.suffix || "+"}
                    />
                  ) : (
                    `0${counter.suffix || "+"}`
                  )}
                </h4>
                <p className="mt-2 text-gray-200">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me (under happy clients) */}
      <section id="contact" className="bg-[#1b1e24] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#05D105]">Let&apos;s Work Together</h2>
            <p className="mt-4 text-sm text-gray-300">
              Tell me about your project or idea and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="relative flex flex-col gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#05080c] via-[#050b10] to-[#05080c] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)] lg:flex-row lg:p-10">
            {/* middle vertical line */}
            <div className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0dfd68] to-transparent lg:block" />

            {/* Left: contact info */}
            <div className="flex-1 rounded-[24px] bg-black/40 px-6 py-6 sm:px-8">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">Contact Info</h3>
              <ul className="mt-6 space-y-6 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#05d105]" />
                  <span>
                    124 madrasha road,
                    <br />
                    20/4 house
                    <br />
                    savar, dhaka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#05d105]" />
                  <a
                    href="mailto:hhshiblu5555@gmail.com"
                    className="text-gray-300 transition-colors hover:text-[#05d105]"
                  >
                    hhshiblu5555@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#05d105]" />
                  <a
                    href="tel:+8801782572426"
                    className="text-gray-300 transition-colors hover:text-[#05d105]"
                  >
                    (+880) 1782572426
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100085191756581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] text-lg text-white transition-all hover:border-[#05d105] hover:bg-[#05d105] hover:text-black"
                >
                  fb
                </a>
                <a
                  href="https://www.linkedin.com/in/hasanul-haque-shiblu-323737263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] text-lg text-white transition-all hover:border-[#05d105] hover:bg-[#05d105] hover:text-black"
                >
                  in
                </a>
                <a
                  href="https://github.com/hhshiblu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] text-lg text-white transition-all hover:border-[#05d105] hover:bg-[#05d105] hover:text-black"
                >
                  gh
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="flex-1 rounded-[24px] bg-black/40 px-6 py-6 sm:px-8">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="mt-6 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={contactForm.firstName}
                      onChange={handleContactChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-5 text-sm text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-3 text-sm text-gray-300 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      First name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={contactForm.lastName}
                      onChange={handleContactChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-5 text-sm text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-3 text-sm text-gray-300 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      Last name
                    </label>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-5 text-sm text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-3 text-sm text-gray-300 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-5 text-sm text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-3 text-sm text-gray-300 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows="4"
                    className="peer w-full resize-none border-b-2 border-white/20 bg-transparent pb-2 pt-5 text-sm text-white outline-none transition-colors focus:border-[#05d105]"
                  />
                  <label className="pointer-events-none absolute left-0 top-3 text-sm text-gray-300 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                    Write your message here
                  </label>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center rounded-full border border-[#05d105] bg-transparent px-10 py-2.5 text-sm font-semibold text-[#05d105] transition hover:bg-[#05d105] hover:text-black"
                  >
                    <span className="relative z-10">Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#0b0f13]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 text-white text-center sm:px-8 md:text-left lg:grid-cols-3">
          <div>
            <h4 className="text-3xl font-semibold">
              <span className="text-[#05D105]">H</span>as
              <span className="text-[#05D105]">A</span>n
            </h4>
            <p className="mt-4 text-gray-300">
              20/40 Joship Road, Dhaka, Kalabari <br />
              (+880)1782572426
            </p>
            <div className="mt-4 flex justify-center gap-4 text-2xl text-[#05D105] md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100085191756581"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05D105]/40 bg-black/40 transition hover:bg-[#05D105] hover:text-black"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/hasanul-haque-shiblu-323737263/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05D105]/40 bg-black/40 transition hover:bg-[#05D105] hover:text-black"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/hhshiblu"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05D105]/40 bg-black/40 transition hover:bg-[#05D105] hover:text-black"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#05D105]">SiteMap</h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-[#05D105]">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#blog" className="transition hover:text-[#05D105]">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#05D105]">
              Want my best marketing tips?
            </h5>
            <p className="mt-4 text-gray-300">
              Subscribe for product ideas, performance fixes, and design inspiration.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your e-mail"
                className="flex-1 rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="rounded-full bg-[#05D105] px-6 py-2 text-sm font-semibold text-black transition hover:bg-white">
                Send me
              </button>
            </form>
          </div>
        </div>
        <p className="bg-black py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Hasanul Haque Shiblu. All rights reserved.
        </p>
      </footer>

      {/* About Modal */}
      {aboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#1b1e24] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-2xl font-semibold text-[#05d105]">More About Me</h4>
              <button
                onClick={() => setAboutOpen(false)}
                className="rounded-full border border-white/30 px-4 py-1 text-sm font-semibold hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <p className="text-base leading-relaxed text-gray-200">
              <span className="text-2xl text-[#05d105]">H</span>ello, I&apos;m Hasanul Haque
              Shiblu. Currently I am studying Computer Science and Engineering at Daffodil
              International University. Computer science has always been my dream subject, and
              programming contests, embedded systems research, and community work keep pushing me
              toward that dream. I love collaborative problem solving, mentoring teammates, and
              turning complex ideas into simple products. I stay calm, stay curious, and try to help
              people wherever I go.
            </p>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-[#121212] p-8 text-white shadow-2xl">
            <h4 className="text-2xl font-semibold text-[#05D105]">{selectedService.title}</h4>
            <p className="mt-4 text-gray-300">{selectedService.detail}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-2xl rounded-3xl bg-[#10171f] p-8 text-white shadow-2xl">
            <h4 className="text-2xl font-semibold text-[#05D105]">{activeBlog.title}</h4>
            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-gray-400">
              {activeBlog.category}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              {activeBlog.author} — {activeBlog.date}
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-200">{activeBlog.details}</p>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setActiveBlog(null)}
                className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact toast */}
      {showContactToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-[slideUp_0.3s_ease-out]">
          <div className="flex items-center gap-4 rounded-[20px] border border-[#05d105]/30 bg-gradient-to-br from-[#0a1b11] to-[#05080c] px-6 py-4 shadow-[0_15px_40px_rgba(5,209,5,0.2)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#05d105]">
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">Message Sent!</p>
              <p className="text-sm text-gray-400">
                Thank you for contacting me. I&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

