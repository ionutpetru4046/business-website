
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
      <section
        id="testimonials"
        className="border-t border-slate-800 bg-slate-900/50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Experience & Trust
            </p>
  
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
              <article
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7"
              >
                <span className="mb-5 block text-sm font-semibold text-cyan-400">
                  {item.number}
                </span>
  
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
  
                <p className="leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
  
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/ionutpetru4046"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View GitHub →
            </a>
  
            <a
              href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>
      </section>
    );
  }
  