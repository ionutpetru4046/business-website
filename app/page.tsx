"use client";

import { useState, useRef, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#") && href.length > 1) {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      (section as HTMLElement).scrollIntoView({ behavior: "smooth" });
      const focusable = (section as HTMLElement).querySelector<HTMLElement>(
        "a, button, input, [tabindex]:not([tabindex='-1'])"
      );
      if (focusable) focusable.focus();
    }
  }
}

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileNavOpen]);

  return (
    <main className="site-shell relative min-h-screen overflow-x-hidden text-white">
      <div className="site-grid pointer-events-none absolute inset-0" />

      <nav
        className="fixed top-0 left-0 z-50 w-full px-4 pt-4"
        aria-label="Main navigation"
      >
        <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
          <a
            href="#home"
            className="font-display text-xl font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg"
            tabIndex={0}
          >
            coste<span className="text-teal-300">.webDev</span>
          </a>
          <div className="hidden items-center gap-0.5 text-[13px] font-medium text-slate-300 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-full px-2.5 py-2 transition hover:bg-white/5 hover:text-teal-200 focus-visible:ring-2 focus-visible:ring-teal-300 outline-none"
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="btn-primary ml-2 hidden rounded-full px-4 py-2 text-sm font-semibold xl:inline-flex"
            >
              Start a project
            </a>
          </div>
          <button
            aria-label={mobileNavOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-menu"
            className="z-50 rounded-lg p-2 focus-visible:ring-2 focus-visible:ring-teal-300 lg:hidden"
            onClick={() => setMobileNavOpen((o) => !o)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <div className="flex h-6 w-6 flex-col justify-between">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileNavOpen ? "translate-y-2.5 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileNavOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileNavOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={`fixed inset-y-0 right-0 z-40 flex w-4/5 max-w-xs flex-col border-l border-white/10 bg-[#07141c]/98 shadow-2xl transition-transform duration-300 focus:outline-none lg:hidden ${
              mobileNavOpen ? "translate-x-0" : "translate-x-full"
            }`}
            tabIndex={-1}
            aria-hidden={!mobileNavOpen}
            role="menu"
          >
            <nav className="mt-28 flex flex-col gap-2 px-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e);
                    setMobileNavOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-100 transition hover:bg-teal-400/10 hover:text-teal-200 focus-visible:ring-2 focus-visible:ring-teal-300 outline-none"
                  tabIndex={mobileNavOpen ? 0 : -1}
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          {mobileNavOpen ? (
            <button
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
              tabIndex={-1}
              aria-label="Close mobile menu"
              onClick={() => setMobileNavOpen(false)}
            />
          ) : null}
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-32"
      >
        <div className="orb left-[-80px] top-20 h-72 w-72 bg-teal-400/25" />
        <div className="orb right-[-40px] top-40 h-80 w-80 bg-violet-500/20" style={{ animationDelay: "1.4s" }} />
        <div className="orb bottom-10 left-1/3 h-56 w-56 bg-orange-400/15" style={{ animationDelay: "2.2s" }} />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-400/10 px-4 py-2 text-[11px] font-semibold">
              <span className="h-2 w-2 rounded-full bg-teal-300" />
              Full-stack developer · Dublin, Ireland
            </span>
            <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Building Modern Web Applications
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                That Solve Real Problems
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m a full-stack developer with 4 years of experience building web applications using React, Next.js, TypeScript, Node.js, and MongoDB.
              <span className="text-teal-200"> From responsive interfaces to backend APIs, I turn ideas into practical digital products.</span>
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                onClick={handleNavClick}
                className="btn-primary inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full px-7 py-3 text-lg font-semibold transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="btn-ghost inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full px-7 py-3 text-lg font-semibold transition focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <aside className="card-surface relative overflow-hidden rounded-[28px] p-7">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-400/20 blur-2xl" />
            <p className="text-sm font-medium text-teal-200">Currently available</p>
            <h2 className="font-display mt-2 text-2xl font-semibold">Let’s build something exceptional</h2>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Experience</dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-amber-200">4 yrs</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Focus</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-violet-200">Full-stack</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="relative px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-xs font-semibold">My Work</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A showcase of applications I’ve built for innovative teams & clients — with pixel-perfect UIs, robust backends, and seamless integration.
          </p>
          <ProjectList />
        </div>
      </section>

      <section id="about" className="relative px-4 py-8 sm:px-8">
        <AboutSection />
      </section>

      <section id="services" className="relative px-4 py-8 sm:px-8">
        <ServicesSection />
      </section>

      <section id="testimonials" className="relative px-4 py-8 sm:px-8">
        <TestimonialsSection />
      </section>

      <section id="pricing" className="relative px-4 py-8 sm:px-8">
        <PricingSection />
      </section>

      <section id="contact" className="relative px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow text-xs font-semibold">Let’s Collaborate</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to build something exceptional?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you’re a startup ready to launch, a business modernizing, or need technical guidance, I’m here to help. Let’s start a conversation!
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:costewebdev@gmail.com?subject=Web%20Project%20Enquiry"
              className="btn-primary inline-flex min-w-[170px] items-center justify-center rounded-full px-8 py-3 text-lg font-semibold"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex min-w-[170px] items-center justify-center rounded-full px-8 py-3 text-lg font-semibold"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-base text-slate-400">
            Currently available for new full-stack projects & select consulting — let&apos;s connect!
          </p>
        </div>
        <div className="card-surface mx-auto mt-14 max-w-2xl rounded-[28px] p-6 sm:p-8">
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/8 px-6 pb-8 pt-8 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2">
          <span className="font-medium text-slate-300">
            &copy; 2026 coste<span className="text-teal-300">.webDev</span>
          </span>
          <div className="space-x-2 text-xs">
            <a href="#home" className="transition hover:text-teal-200">Home</a>
            <span>|</span>
            <a href="#projects" className="transition hover:text-teal-200">Projects</a>
            <span>|</span>
            <a href="#about" className="transition hover:text-teal-200">About</a>
            <span>|</span>
            <a href="#contact" className="transition hover:text-teal-200">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
