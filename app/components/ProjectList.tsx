"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BusinessFlow CRM",
    category: "SaaS",
    description:
      "A CRM concept for automotive garages to organise customer records, leads and business workflows.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    challenge:
      "Garage businesses need a clear way to organise customer information and sales leads.",
    solution:
      "A CRM interface designed to bring customer records and lead management into one place.",
    demoUrl: "https://business-flow-neon.vercel.app/",
    githubUrl: "https://github.com/ionutpetru4046/business-flow",
  },
  {
    title: "Mechanic Booking Website",
    category: "Full Stack",
    description:
      "A garage website with authentication, booking functionality and separate user and admin roles.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    challenge:
      "Customers need to book services online, while administrators need to manage bookings.",
    solution:
      "A full-stack application combining a React frontend with an Express API and MongoDB.",
    demoUrl: "https://mechanic-website-tau.vercel.app/",
    githubUrl: "YOUR_MECHANIC_GITHUB_URL",
  },
  {
    title: "Document Reminder Portal",
    category: "SaaS",
    description:
      "A portal concept for organising documents and tracking expiration dates and reminders.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    challenge:
      "Users need a convenient way to organise documents and keep track of expiration dates.",
    solution:
      "A document portal designed around document organisation and expiration reminders.",
    demoUrl: "https://my-portal-documents.vercel.app/",
    githubUrl: "YOUR_DOCUMENT_PORTAL_GITHUB_URL",
  },
];

const filters = ["All", "SaaS", "Full Stack", "Frontend"] as const;

type Filter = (typeof filters)[number];

export default function ProjectList() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") {
      return true;
    }

    return project.category === activeFilter;
  });

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-3" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "border-transparent bg-gradient-to-r from-teal-300 to-amber-200 text-slate-950"
                : "border-white/10 text-slate-300 hover:border-teal-300 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-400" aria-live="polite">
        Showing {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>
    </div>
  );
}
