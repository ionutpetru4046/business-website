const plans = [
  {
    name: "Landing Page",
    price: "From €350",
    description: "A professional landing page for your business or service.",
    features: [
      "Responsive mobile-friendly design",
      "Modern UI",
      "Contact section",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Website",
    price: "From €800",
    description: "A complete website designed to present your business.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form integration",
      "SEO fundamentals",
      "Performance optimisation",
    ],
    popular: true,
  },
  {
    name: "Full-Stack Application",
    price: "From €1,500",
    description: "A custom application built around your business needs.",
    features: [
      "Custom frontend and backend",
      "Database integration",
      "Authentication when required",
      "API integration",
      "Deployment support",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-xs font-semibold">Pricing</p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-5xl">
          Choose the Right Solution
        </h2>
        <p className="mt-5 leading-7 text-slate-300">
          Transparent starting prices for business websites
          and custom web applications.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`card-surface flex flex-col rounded-[28px] p-8 ${
              plan.popular ? "ring-2 ring-teal-300/70" : ""
            }`}
          >
            {plan.popular ? (
              <span className="mb-4 w-fit rounded-full bg-gradient-to-r from-teal-300 to-amber-200 px-3 py-1 text-xs font-semibold text-slate-950">
                POPULAR
              </span>
            ) : null}

            <h3 className="font-display text-2xl font-semibold text-white">
              {plan.name}
            </h3>
            <p className="mt-4 font-display text-3xl font-semibold text-teal-200">
              {plan.price}
            </p>
            <p className="mt-4 leading-7 text-slate-300">{plan.description}</p>
            <ul className="mt-6 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-slate-300">
                  <span className="text-teal-300">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:costewebdev@gmail.com?subject=${encodeURIComponent(
                `Enquiry: ${plan.name}`
              )}`}
              className={`mt-8 rounded-full px-5 py-3 text-center font-semibold transition ${
                plan.popular ? "btn-primary" : "btn-ghost"
              }`}
            >
              Discuss Your Project
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-400">
        Prices are starting estimates. Final costs depend on
        project requirements and scope.
      </p>
    </div>
  );
}
