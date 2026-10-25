const services = [
  {
    number: "01",
    title: "Business Websites & Landing Pages",
    description:
      "Modern, responsive websites that present your business professionally, showcase your services, and help potential customers contact you.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Full-Stack Web Applications",
    description:
      "Custom web applications with interactive interfaces, backend logic, secure authentication, and database integration.",
    technologies: ["React", "Node.js", "TypeScript"],
  },
  {
    number: "03",
    title: "CRM & Booking Systems",
    description:
      "Practical business tools to manage customers, appointments, bookings, and everyday workflows through a central dashboard.",
    technologies: ["Next.js", "Supabase", "Role-based access"],
  },
  {
    number: "04",
    title: "API & Database Integrations",
    description:
      "Connect your frontend to backend APIs, databases, authentication systems, and external services to make your application work seamlessly.",
    technologies: ["REST APIs", "Node.js", "MongoDB"],
  },
  {
    number: "05",
    title: "Website Fixes & Improvements",
    description:
      "Troubleshoot existing websites, fix frontend and API issues, improve responsive layouts, and refine performance and usability.",
    technologies: ["Debugging", "Responsive design", "Performance"],
  },
];

export default function ServicesSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-3 text-xs font-semibold">What I Do</p>
        <h2 className="font-display mb-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Web Development Services
        </h2>
        <p className="text-lg leading-8 text-slate-400">
          I build practical, reliable web solutions for businesses that want
          to improve their online presence, streamline operations, or bring a
          new digital product to life.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.number}
            className="card-surface group rounded-[28px] p-7 transition duration-300 hover:-translate-y-1"
          >
            <span className="mb-6 block text-sm font-semibold text-teal-200">
              {service.number}
            </span>
            <h3 className="font-display mb-4 text-xl font-semibold text-white transition-colors group-hover:text-teal-200">
              {service.title}
            </h3>
            <p className="mb-6 leading-7 text-slate-400">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-5 text-slate-400">
          Have a project in mind? Let&apos;s discuss what you need.
        </p>
        <a
          href="#contact"
          className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold"
        >
          Discuss Your Project
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
