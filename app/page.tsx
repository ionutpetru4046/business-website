"use client";

import { useState, useRef, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";

// Professional Nav Items
const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

// Smooth Scroll Handler
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
    <main className="min-h-screen bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-950 text-white overflow-x-hidden transition-colors duration-300">

      {/* Professional Fixed Nav */}
      <nav
        className="fixed top-0 left-0 z-50 w-full bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl shadow-lg"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tight focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            tabIndex={0}
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-.03em",
            }}
          >
            coste<span className="text-cyan-400">.webDev</span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="transition px-3 py-1 rounded-md hover:text-cyan-400 hover:bg-cyan-400/10 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none"
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Hamburger - Modern animated */}
          <button
            aria-label={mobileNavOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-menu"
            className="md:hidden z-50 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-2"
            onClick={() => setMobileNavOpen((o) => !o)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <div className="h-6 w-6 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileNavOpen ? "transform rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileNavOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileNavOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
          {/* Mobile Nav Menu */}
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={`fixed inset-y-0 right-0 z-40 w-4/5 max-w-xs flex flex-col bg-slate-900/98 shadow-2xl transition-transform duration-300 md:hidden focus:outline-none
              ${mobileNavOpen ? "translate-x-0" : "translate-x-full"}`}
            tabIndex={-1}
            aria-hidden={!mobileNavOpen}
            role="menu"
          >
            <nav className="flex flex-col gap-2 mt-28 px-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e);
                    setMobileNavOpen(false);
                  }}
                  className="block rounded-lg px-4 py-3 text-lg font-semibold text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none"
                  tabIndex={mobileNavOpen ? 0 : -1}
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Mobile overlay */}
          {mobileNavOpen && (
            <button
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              tabIndex={-1}
              aria-label="Close mobile menu"
              onClick={() => setMobileNavOpen(false)}
            />
          )}
        </div>
      </nav>

      {/* Homepage Hero */}
      <section
        id="home"
        className="pt-28 lg:pt-32 pb-12 mx-auto max-w-7xl flex flex-col justify-center items-center min-h-[75vh] px-6 relative"
      >
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Subtle gradient lights */}
          <div className="absolute top-[-140px] left-[-180px] w-[410px] h-[410px] bg-cyan-400/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-100px] right-[-150px] w-[340px] h-[340px] bg-fuchsia-400/10 rounded-full blur-[90px]" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Creative Solutions & Reliable Delivery
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-br from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent drop-shadow-lg tracking-[-.03em] max-w-4xl">
            Full-Stack Development <br className="hidden sm:inline" />for Ambitious Companies
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 font-medium leading-8">
            I build high-impact web products with Next.js, React, TypeScript, and Node.js.<br className="hidden md:inline" /> <span className="text-cyan-400">Let’s take your business further with modern technology.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-cyan-400 text-slate-950 font-bold text-lg shadow-md hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 transition min-w-[160px] justify-center"
            >
              <svg width={20} height={20} fill="none" className="mr-1" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth={2} d="M4 10h12m0 0-4-4m4 4-4 4" /></svg>
              View Projects
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-slate-600 bg-slate-950/80 text-slate-200 text-lg font-semibold hover:bg-slate-900 hover:border-cyan-400 transition focus-visible:ring-2 focus-visible:ring-cyan-400 min-w-[160px] justify-center"
            >
              <svg width={20} height={20} fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth={2} d="M2.75 6.75 10 11.75l7.25-5" /><rect x={2.75} y={6.75} width={14.5} height={6.5} rx={2} stroke="currentColor" strokeWidth={2}/></svg>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Show divider */}
      <div className="w-full flex justify-center">
        <span className="h-0.5 rounded bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent w-3/4 md:w-2/3 mb-2" />
      </div>

      {/* Projects */}
      <section
        id="projects"
        className="relative border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900/60 to-slate-950 px-4 sm:px-8 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 text-lg font-semibold mb-1">My Work</span>
            <span className="h-1 w-5 bg-cyan-400/50 rounded-full" />
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-1">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-slate-400 leading-7 mb-8">
            A showcase of applications I’ve built for innovative teams & clients — with pixel-perfect UIs, robust backends, and seamless integration.
          </p>
          <ProjectList />
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-800 bg-slate-950 px-4 sm:px-8 py-20 relative">
        <AboutSection />
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-800 bg-slate-900 px-4 sm:px-8 py-20 relative">
        <ServicesSection />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-8 py-20">
        <TestimonialsSection />
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-slate-800 bg-slate-950 px-4 sm:px-8 py-20">
        <PricingSection />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-gradient-to-bl from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-8 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-cyan-400 text-lg font-semibold tracking-[.13em] mb-2 block">Let’s Collaborate</span>
          <h2 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to build something exceptional?
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg font-medium text-slate-300 leading-8">
            Whether you’re a startup ready to launch, a business modernizing, or need technical guidance, I’m here to help. Let’s start a conversation!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:YOUR_EMAIL@example.com?subject=Web%20Project%20Enquiry"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-slate-950 text-lg shadow hover:bg-cyan-300 transition focus-visible:ring-2 focus-visible:ring-cyan-400 min-w-[170px]"
            >
              <svg width={22} height={22} fill="none" viewBox="0 0 22 22" className="mr-2"><path stroke="currentColor" strokeWidth={2} d="M3.75 5.75 11 10.75l7.25-5" /><rect x={3.75} y={5.75} width={14.5} height={8.5} rx={2} stroke="currentColor" strokeWidth={2}/></svg>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-950/70 px-8 py-3 font-semibold text-slate-200 text-lg hover:bg-slate-900 hover:border-cyan-400 transition focus-visible:ring-2 focus-visible:ring-cyan-400 min-w-[170px]"
            >
              <svg width={20} height={20} fill="currentColor" className="mr-2" viewBox="0 0 20 20"><path d="M5 7.75A1.75 1.75 0 1 0 5 4.25a1.75 1.75 0 0 0 0 3.5ZM2.75 8.72c0-.69.56-1.25 1.25-1.25h.02c.69 0 1.25.56 1.25 1.25v7.03c0 .69-.56 1.25-1.25 1.25h-.02a1.25 1.25 0 0 1-1.25-1.25V8.72Zm7.38 0c0-.69.56-1.25 1.25-1.25h.02c.69 0 1.25.56 1.25 1.25v7.03c0 .69-.56 1.25-1.25 1.25h-.02c-.69 0-1.25-.56-1.25-1.25V8.72Zm-4.07 0v7.03h-2.2c-.69 0-1.25-.56-1.25-1.25V8.72c0-.69.56-1.25 1.25-1.25h2.2ZM12.35 15.77h2.21c.69 0 1.25-.56 1.25-1.25V8.72c0-.69-.56-1.25-1.25-1.25h-2.21v8.3Zm2.95-10.5a1.82 1.82 0 0 0-1.822 1.82c0 1.002.82 1.82 1.822 1.82s1.822-.818 1.822-1.82A1.82 1.82 0 0 0 15.3 5.27Z"/></svg>
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-slate-400 text-base">
            Currently available for new full-stack projects & select consulting — let's connect!
          </p>
        </div>
        <div className="mx-auto max-w-2xl mt-14">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-6 border-t border-slate-900 text-center text-sm text-slate-500 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col gap-2 items-center justify-center">
          <span className="font-medium">
          &copy; 2026 coste<span className="text-cyan-400">.webDev</span>          </span>
          <div className="text-xs space-x-2">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <span>|</span>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <span>|</span>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <span>|</span>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
