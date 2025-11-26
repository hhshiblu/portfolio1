"use client";

import { useState } from "react";
import Link from "next/link";

const skills = [
  { label: "Data Structures & Algorithms", value: 92 },
  {
    label: "Problem Solving",
    value: 88,
    link: "https://leetcode.com/",
  },
  { label: "Next.js Engineering", value: 82 },
  { label: "C++ & Python", value: 78 },
];

const socialActivities = [
  {
    id: 0,
    date_day: 16,
    month_name: "Nov",
    title: "Our Team",
    subtitle: "A Team's Journey to Assist the Poor",
    short:
      "Empowering communities through innovative solutions and collaboration.",
    long: "Our team is a group of dedicated individuals committed to making a positive impact on the lives of those in need. We develop sustainable programs in partnership with local organizations so that communities can take ownership of the change. Inclusivity and long-term support are at the heart of every initiative.",
    image: "/images/social1.png",
  },
  {
    id: 1,
    date_day: 28,
    month_name: "Jun",
    title: "Support For Humanity",
    subtitle: "Helping People In Need",
    short:
      "Volunteer drives, charity events, and community projects focused on dignity.",
    long: "We volunteer our time, skills, and resources to non-profits who work directly with vulnerable people. From building websites for awareness to mentoring entrepreneurs, we focus on giving people the tools they need to become financially self-sufficient.",
    image: "/images/social2.png",
  },
  {
    id: 2,
    date_day: 23,
    month_name: "Dec",
    title: "Poverty in Bangladesh",
    subtitle: "Community-Centered Solutions",
    short:
      "Education, clean water, and microfinance initiatives for rural areas.",
    long: "We believe education and access to basic necessities can break the cycle of poverty. By supporting microfinance programs, teacher training, and infrastructure projects, we make sure the most marginalized voices are heard.",
    image: "/images/social3.jpg",
  },
];

const rings = (value) => ({
  background: `conic-gradient(#05d105 ${value * 3.6}deg, rgba(255,255,255,0.07) 0deg)`,
});

export default function AboutPage() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section
        className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[#121212]"
        style={{ backgroundImage: "url(/images/about_svg.svg)", backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl font-semibold tracking-[0.6em] sm:text-5xl">
          MY STORY
        </h1>
      </section>

      {/* Story */}
      <section className="border-t border-white/5 bg-[#1b1e24]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:w-7/12">
            <p className="text-sm uppercase tracking-[0.5em] text-[#05d105]">
              My Story
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              <span className="text-4xl text-[#05d105]">H</span>ello, I&apos;m Hasanul Haque
              Shiblu. Currently I am studying Computer Science and Engineering at Daffodil International University. Computer science has always been my dream subject, and programming contests, embedded systems research, and community work keep pushing me toward that dream. I love collaborative problem solving, mentoring teammates, and turning complex ideas into simple products. I stay calm, stay curious, and try to help people wherever I go.
            </p>
            <Link
              href="/resume.pdf"
              className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#05d105] px-10 py-3 text-lg font-semibold text-white"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">
                Download C.V
              </span>
              <span className="absolute inset-0 bg-[#05d105] transition duration-300 group-hover:-translate-y-full" />
            </Link>
          </div>
          <div className="lg:w-5/12">
            <img
              src="/images/about.gif"
              alt="About illustration"
              className="mx-auto w-11/12 rounded-[32px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-black px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-[#05d105]">My Expertise</h2>
          <p className="mt-4 text-gray-400">
            Numbers don&apos;t define me, but they show how much time I&apos;ve invested in mastering the craft.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.label} className="flex flex-col items-center gap-4">
                <div
                  className="flex h-36 w-36 items-center justify-center rounded-full border border-white/5 bg-[#0a1014]"
                  style={rings(skill.value)}
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black text-3xl font-bold text-[#05d105]">
                    {skill.value}%
                  </div>
                </div>
                {skill.link ? (
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-[#05d105] transition hover:text-white"
                  >
                    {skill.label}
                  </a>
                ) : (
                  <p className="text-lg font-semibold">{skill.label}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life story */}
      <section className="bg-[#101318] px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <article className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#14212b] to-[#0a1217] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] lg:-translate-x-6">
            <h3 className="text-2xl font-semibold tracking-[0.4em] text-white">
              Childhood Life
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Growing up in a small village meant endless adventures across rice fields, annual fairs, and river swims with cousins. Those memories taught me resilience, teamwork, and the importance of community.
            </p>
          </article>
          <article className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111f11] to-[#0c150c] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] lg:translate-x-6">
            <h3 className="text-2xl font-semibold tracking-[0.4em] text-white">
              Becoming a Web Developer
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              My first lines of HTML sparked a decade-long obsession with building products. Today I blend React, Next.js, Node, and UI systems to ship apps that feel effortless and accessible.
            </p>
          </article>
        </div>
      </section>

      {/* Social activities */}
      <section className="bg-black px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h4 className="text-3xl font-semibold text-[#05d105]">Social Activities</h4>
            <p className="mt-3 text-gray-400">
              I founded <strong>The Donors</strong> to support local communities with pragmatic help and digital tools.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socialActivities.map((activity) => (
              <article
                key={activity.id}
                className="cursor-pointer rounded-[28px] border border-white/10 bg-[#12161c] shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
                onClick={() => setActiveCard(activity)}
              >
                <div className="relative overflow-hidden rounded-t-[28px]">
                  <img src={activity.image} alt={activity.title} className="h-56 w-full object-cover" />
                  <span className="absolute right-4 top-4 rounded-full bg-[#05d105] px-4 py-1 text-sm font-semibold text-black">
                    {activity.date_day} {activity.month_name}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#05d105]">
                    {activity.subtitle}
                  </p>
                  <h5 className="mt-2 text-xl font-semibold">{activity.title}</h5>
                  <p className="mt-3 text-sm text-gray-400">{activity.short}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Modal */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#0c1116] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-semibold text-[#05d105]">{activeCard.title}</h3>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row">
              <img
                src={activeCard.image}
                alt={activeCard.title}
                className="h-60 w-full rounded-[20px] object-cover lg:w-1/2"
              />
              <div className="flex-1 text-gray-300">
                <p className="text-sm uppercase tracking-[0.3em] text-[#05d105]">
                  {activeCard.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed">{activeCard.long}</p>
                <p className="mt-6 text-right text-sm text-gray-400">
                  date: {activeCard.date_day} {activeCard.month_name}
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setActiveCard(null)}
                className="rounded-full border border-white px-6 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

