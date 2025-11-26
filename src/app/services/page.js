"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "0",
    image: "/images/design-large.jpg",
    title: "Web Design",
    description:
      "Web design is the process of creating visually appealing and user-friendly websites. It involves a combination of graphic design, layout, and user experience (UX) principles. A well-designed website not only looks good, but it also makes it easy for users to find the information they need and complete tasks, such as making a purchase or filling out a contact form.",
    sabTitle: "Our goal for webSite",
    sabdescription:
      "Overall, our goal is to create beautiful and functional websites that meet the needs of our clients and their users. By working closely with our clients and taking into account their goals and target audience, we create websites that are visually appealing, easy to use, and effective at achieving their desired outcomes.",
  },
  {
    id: "1",
    image: "/images/dev-large.jpg",
    title: "Web Development",
    description:
      "Web development is the process of creating, building, and maintaining websites. It involves a combination of technical skills, such as coding and programming, as well as an understanding of user experience (UX) and design principles. A well-developed website not only looks good, but it also functions seamlessly and efficiently, making it easy for users to access information and complete tasks.",
    sabTitle: "develop this project",
    sabdescription:
      "Overall, our goal is to create websites that are not only visually appealing but also functional, efficient, and secure. By working closely with our clients and taking into account their goals and target audience, we create websites that are tailored to their needs and that help them achieve their desired outcomes. We also provide ongoing support and maintenance services to ensure that the website remains up-to-date and secure.",
  },
  {
    id: "2",
    image: "/images/creativity-large.jpg",
    title: "Creativity",
    description:
      "Creativity is an essential aspect of web development, as it allows us to design unique and engaging websites that stand out from the competition. We believe that a website should be more than just a digital brochure; it should be a tool that helps businesses achieve their goals and connect with their target audience.",
    sabTitle: "creative idea genarate",
    sabdescription:
      "Overall, our goal is to help our clients create a website that is not only visually appealing but also effective at achieving their desired outcomes. Whether you're looking to increase sales, generate leads, or build your brand, we have the creativity and expertise to help you achieve your goals. We believe that web design is not just about making a website look good, but about creating an experience that connects with the users and helps businesses achieve their goals.",
  },
  {
    id: "3",
    image: "/images/creativity-large.jpg",
    title: "Social Media",
    description:
      "Social media is an essential part of digital marketing and plays a crucial role in connecting businesses with their target audience. It allows businesses to build and maintain relationships with their customers, generate leads, and drive sales. Social media also helps to increase brand awareness and build trust with potential customers.",
    sabTitle: "goal for clints",
    sabdescription:
      "Overall, our goal is to help our clients leverage the power of social media to connect with their target audience, build their brand, and achieve their desired outcomes. We use a data-driven approach to create social media strategies that are tailored to our clients' needs and that deliver measurable results.",
  },
  {
    id: "4",
    image: "/images/creativity-large.jpg",
    title: "Ux/UI Design",
    description:
      "User Experience (UX) and User Interface (UI) design are essential aspects of web development that focus on creating websites that are easy to use, visually appealing, and effective at achieving their desired outcomes.",
    sabTitle: "mission",
    sabdescription:
      "Overall, our goal is to create websites that are not only visually appealing but also easy to use and effective at achieving their desired outcomes. By using a user-centered approach, we design websites that meet the needs of our clients' target audience and help them achieve their goals.",
  },
  {
    id: "5",
    image: "/images/creativity-large.jpg",
    title: "Communication",
    description:
      "Effective communication is an essential aspect of web development, as it ensures that the client's needs and goals are understood and met throughout the development process. Clear and open communication also helps to avoid misunderstandings and delays, and ensures that the final product is of the highest quality.",
    sabTitle: "creative idea genarate",
    sabdescription:
      "We are transparent and honest in our communication and we always keep clients informed of any potential issues or delays. We also take the time to explain technical details in a way that is easy to understand. We provide after-sales service and support to ensure that clients have a smooth experience after the website is launched.",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section
        className="relative flex h-screen items-center justify-center overflow-hidden bg-[#121212]"
        style={{
          backgroundImage: "url(/images/my service.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <h1 className="relative text-4xl font-bold tracking-[0.3em] sm:text-6xl">
          Services
        </h1>
      </section>

      {/* Services Intro */}
      <section className="border-t border-white/5 bg-[#1b1e24] px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#05d105]">
            What services do I provide!
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Services/features
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-300">
            Most common methods for designing websites that work well on desktop
            is <br /> responsive and adaptive design
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b1014] to-[#05080c] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all hover:border-[#05d105]/30 hover:shadow-[0_20px_60px_rgba(5,209,5,0.15)]"
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#05d105] to-transparent animate-[shimmer_2s_linear_infinite]" />
                  <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#05d105] to-transparent animate-[shimmer_2s_linear_infinite_1s]" />
                  <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-[#05d105] to-transparent animate-[shimmer_2s_linear_infinite]" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-[#05d105] to-transparent animate-[shimmer_2s_linear_infinite_1s]" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#0a1014] transition-transform group-hover:scale-110">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-white transition-colors group-hover:text-[#05d105]">
                    {service.title}
                  </h3>
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-400">
                    {service.description.slice(0, 100)}...
                  </p>
                  <button
                    onClick={() => setActiveService(service)}
                    className="group/btn relative overflow-hidden rounded-full border border-[#05d105] px-8 py-3 text-sm font-semibold text-[#05d105] transition-all hover:border-[#05d105] hover:text-white"
                  >
                    <span className="relative z-10">Learn more</span>
                    <span className="absolute inset-0 bg-[#05d105] transition-transform group-hover/btn:translate-y-0 group-hover/btn:translate-y-full" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Will Help You */}
      <section className="bg-[#101318] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#14212b] to-[#0a1217] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <h3 className="mb-6 text-2xl font-semibold tracking-[0.2em] text-white">
                How I Will Help You
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As a front-end developer, my goal is to help you create visually
                appealing, user-friendly and responsive websites and web
                applications. My services include creating and implementing
                designs, coding and testing, and ensuring that the final product
                meets your needs and expectations. I specialize in using modern
                technologies such as HTML, CSS, JavaScript, and frameworks such
                as React.
                <br />
                <br />
                I can help you create responsive designs that adapt to any
                device, ensuring that your website looks great on desktop,
                tablet, and mobile devices. I will also be responsible for
                testing the website and resolving any issues that may arise
                during the development process. I will ensure that the website is
                compatible with different browsers and devices and that it is
                accessible to users with disabilities.
                <br />
                <br />
                I will work closely with you to understand your target audience,
                their needs and preferences and make sure that the website is
                designed to meet their expectations. I will also be responsible
                for testing the website, resolving any issues that may arise
                during the development process, and providing ongoing maintenance
                and support.
              </p>
            </article>
            <article className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111f11] to-[#0c150c] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <h3 className="mb-6 text-2xl font-semibold tracking-[0.2em] text-white">
                My Service Experience
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Throughout my career, I've had the privilege of working with
                diverse clients, from startups to established businesses. Each
                project has taught me something new about user needs, technical
                constraints, and creative problem-solving.
                <br />
                <br />
                One memorable experience was helping a local restaurant launch
                their online presence. They needed a website that could handle
                online orders, display their menu beautifully, and reflect their
                brand's warmth. By combining clean design with intuitive
                functionality, we created a platform that not only looked great
                but also increased their online orders by 40% within the first
                month.
                <br />
                <br />
                These experiences remind me that going above and beyond for
                clients leads to meaningful outcomes. Whether it's a small
                business or a large enterprise, I approach every project with
                the same dedication to quality, communication, and results.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveService(null)}
        >
          <div
            className="w-full max-w-4xl rounded-[32px] border border-white/10 bg-[#0c1116] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-semibold text-[#05d105]">
                {activeService.title}
              </h3>
              <button
                onClick={() => setActiveService(null)}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <img
              src={activeService.image}
              alt={activeService.title}
              className="mb-6 h-64 w-full rounded-[20px] object-cover"
            />
            <p className="mb-6 text-base leading-relaxed text-gray-300">
              {activeService.description}
            </p>
            <h4 className="mb-3 text-xl font-semibold text-[#05d105]">
              {activeService.sabTitle}
            </h4>
            <p className="text-base leading-relaxed text-gray-300">
              {activeService.sabdescription}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}


