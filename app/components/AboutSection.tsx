export default function AboutSection() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
      <div>
        <p className="eyebrow text-xs font-semibold">About me</p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-5xl">
          Full-Stack Developer focused on real-world solutions
        </h2>
        <p className="mt-6 leading-7 text-slate-300">
          I am a full-stack developer with experience building
          modern web applications using React, Next.js,
          TypeScript, Node.js and database technologies.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          I enjoy turning business requirements into practical
          software, from responsive user interfaces to backend
          APIs, authentication and database integration.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          I focus on writing maintainable code, solving problems
          methodically and continuously improving my technical
          skills.
        </p>
      </div>

      <div className="card-surface rounded-[28px] p-8">
        <h3 className="font-display text-xl font-semibold text-white">
          Technical Skills
        </h3>
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl bg-white/4 p-4">
            <h4 className="font-medium text-teal-200">Frontend</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              React, Next.js, TypeScript, JavaScript,
              Tailwind CSS, HTML and CSS
            </p>
          </div>
          <div className="rounded-2xl bg-white/4 p-4">
            <h4 className="font-medium text-violet-200">Backend</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Node.js, Express.js, REST APIs,
              authentication and authorization
            </p>
          </div>
          <div className="rounded-2xl bg-white/4 p-4">
            <h4 className="font-medium text-amber-200">Data and Tools</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              MongoDB, Supabase, Git, GitHub,
              Postman and Vercel
            </p>
          </div>
        </div>
        <a
          href="#projects"
          className="mt-8 inline-flex font-semibold text-teal-200 transition hover:text-teal-100"
        >
          Explore my projects →
        </a>
      </div>
    </div>
  );
}
