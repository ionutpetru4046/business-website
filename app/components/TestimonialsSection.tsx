const credibilityItems = [
  {
    number: "01",
    title: "Real-world projects",
    description:
      "Explore web applications and business solutions built with modern frontend and backend technologies.",
  },
  {
    number: "02",
    title: "Full-stack development",
    description:
      "Experience building responsive interfaces, backend APIs, authentication flows, and database integrations.",
  },
  {
    number: "03",
    title: "Continuous improvement",
    description:
      "Focused on clean code, practical problem-solving, maintainable architecture, and improving user experience.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3 text-xs font-semibold">Experience & Trust</p>
        <h2 className="font-display mb-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Built on Practical Experience
        </h2>
        <p className="text-lg leading-8 text-slate-400">
          I focus on building useful web solutions, solving technical
          problems, and delivering projects that address real business needs.
          Explore my work and professional background below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {credibilityItems.map((item) => (
          <article key={item.number} className="card-surface rounded-[28px] p-7">
            <span className="mb-5 block text-sm font-semibold text-amber-200">
              {item.number}
            </span>
            <h3 className="font-display mb-3 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="https://github.com/ionutpetru4046"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost rounded-full px-5 py-3 font-medium"
        >
          View GitHub →
        </a>
        <a
          href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full px-5 py-3 font-semibold"
        >
          Connect on LinkedIn →
        </a>
      </div>
    </div>
  );
}
