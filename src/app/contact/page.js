"use client";

import { useState } from "react";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    
    // Show toast
    setShowToast(true);
    
    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section
        className="relative flex h-screen items-center justify-center overflow-hidden bg-[#121212]"
        style={{
          backgroundImage: "url(/images/contact-me.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <h1 className="relative text-4xl font-bold tracking-[0.3em] sm:text-6xl">
          Contact Me
        </h1>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1b1e24] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b1014] to-[#05080c] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <h2 className="mb-8 text-2xl font-semibold text-white">
                Contact Info
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#05d105]" />
                  <span className="text-gray-300">
                    124 madrasha road, <br />
                    20/4 house <br />
                    savar, dhaka
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#05d105]" />
                  <a
                    href="mailto:hhshiblu5555@gmail.com"
                    className="text-gray-300 transition-colors hover:text-[#05d105]"
                  >
                    hhshiblu5555@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#05d105]" />
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] text-xl text-white transition-all hover:border-[#05d105] hover:bg-[#05d105] hover:text-black"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/hasanul-haque-shiblu-323737263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] text-xl text-white transition-all hover:border-[#05d105] hover:bg-[#05d105] hover:text-black"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/hhshiblu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] text-xl text-white transition-all hover:border-[#05d105] hover:bg-[#05d105] hover:text-black"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <h2 className="mb-8 text-2xl font-semibold text-white">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-4 text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      First name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-4 text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      Last name
                    </label>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-4 text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="peer w-full border-b-2 border-white/20 bg-transparent pb-2 pt-4 text-white outline-none transition-colors focus:border-[#05d105]"
                    />
                    <label className="pointer-events-none absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="peer w-full resize-none border-b-2 border-white/20 bg-transparent pb-2 pt-4 text-white outline-none transition-colors focus:border-[#05d105]"
                  />
                  <label className="pointer-events-none absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#05d105] peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-xs">
                    Write your message here
                  </label>
                </div>
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-full border-2 border-[#05d105] bg-transparent px-10 py-3 text-lg font-semibold text-[#05d105] transition-all hover:bg-[#05d105] hover:text-white"
                >
                  <span className="relative z-10">Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Toast */}
      {showToast && (
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

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}


