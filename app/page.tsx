"use client";

import { useState, useRef, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";

const NAV_ITEMS = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

// Helper for smooth scrolling
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#") && href.length > 1) {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      (section as HTMLElement).scrollIntoView({ behavior: "smooth" });
      // Focus the first focusable child inside the section for accessibility
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

  // Close menu on navigation or esc press (accessibility)
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileNavOpen]);

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* The nav is outside of the header to ensure 'sticky' on all devices including mobile */}
      <nav
        className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          <a
            href="#"
            className="text-lg font-bold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            tabIndex={0}
          >
            coste<span className="text-cyan-400">.webDev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="transition hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-2 py-1"
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            aria-label={mobileNavOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-menu"
            className="md:hidden relative z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-2"
            onClick={() => setMobileNavOpen((o) => !o)}
            type="button"
          >
            <span className="sr-only">
              {mobileNavOpen ? "Close menu" : "Open menu"}
            </span>
            <div aria-hidden="true" className="h-5 w-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${mobileNavOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-200 ${mobileNavOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${mobileNavOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>

          {/* Mobile nav menu */}
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={`fixed inset-y-0 right-0 z-40 flex w-4/5 max-w-xs flex-col bg-slate-950/98 bg-opacity-95 shadow-2xl transition-transform duration-300 md:hidden focus:outline-none ${mobileNavOpen ? "translate-x-0" : "translate-x-full"
              }`}
            tabIndex={-1}
            aria-hidden={!mobileNavOpen}
            role="menu"
          >
            <nav className="flex flex-col gap-2 mt-24 px-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e);
                    setMobileNavOpen(false);
                  }}
                  className="block rounded px-4 py-3 text-lg font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  tabIndex={mobileNavOpen ? 0 : -1}
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Overlay when mobile menu active */}
          {mobileNavOpen && (
            <button
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ cursor: "pointer" }}
              tabIndex={-1}
              aria-label="Close mobile menu"
              onClick={() => setMobileNavOpen(false)}
            />
          )}
        </div>
      </nav>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 sm:px-6 py-16 sm:py-24">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400 text-center sm:text-left">
          Full-Stack Developer
        </p>

        <h1 className="max-w-4xl text-3xl sm:text-4xl font-bold tracking-tight sm:text-6xl text-center sm:text-left">
          I build web applications that solve real business problems.
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300 text-center sm:text-left">
          I work with React, Next.js, TypeScript, Node.js and modern web
          technologies to build useful, reliable digital products.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start">
          <a
            href="#projects"
            onClick={handleNavClick}
            className="rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-w-[150px] text-center"
          >
            View my projects
          </a>

          <a
            href="mailto:your-email@example.com"
            className="rounded-lg border border-slate-600 px-8 py-3 font-semibold transition hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-w-[150px] text-center"
          >
            Contact me
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-900/50 px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-medium text-cyan-400">MY WORK</p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            A selection of web applications I have built, demonstrating my
            experience with frontend interfaces, backend APIs, authentication
            and database integration.
          </p>
          <ProjectList />
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactForm />

      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-950 px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-medium text-cyan-400">GET IN TOUCH</p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            I help businesses build modern websites, web applications and custom
            software. If you have a project or an opportunity to discuss, I
            would be happy to hear from you.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com?subject=Website%20Enquiry"
            className="mt-8 inline-flex justify-center rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-w-[150px]"
          >
            Contact Me →
          </a>

          <p className="mt-5 text-sm text-slate-400">
            Available for full-stack developer opportunities and selected
            projects.
          </p>
        </div>
      </section>
    </main>
  );
}
