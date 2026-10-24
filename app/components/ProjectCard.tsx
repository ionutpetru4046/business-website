
"use client";

import { useState } from "react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  demoUrl: string;
  githubUrl: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  challenge,
  solution,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/30">
      <p className="text-sm font-medium text-cyan-400">{category}</p>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="mt-6 font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        {expanded ? "Hide details −" : "Explore project +"}
      </button>

      {expanded && (
        <div className="mt-5 space-y-4 border-t border-slate-700 pt-5">
          <div>
            <h4 className="font-semibold text-white">Challenge</h4>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              {challenge}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Solution</h4>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              {solution}
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-700 pt-5">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Live demo ↗
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}
