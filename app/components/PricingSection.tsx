
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
      <section
        id="pricing"
        className="border-t border-slate-800 bg-slate-950 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-medium text-cyan-400">
              PRICING
            </p>
  
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
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
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-cyan-400 bg-slate-900"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                {plan.popular && (
                  <span className="mb-4 w-fit rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
                    POPULAR
                  </span>
                )}
  
                <h3 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
  
                <p className="mt-4 text-3xl font-bold text-cyan-400">
                  {plan.price}
                </p>
  
                <p className="mt-4 leading-7 text-slate-300">
                  {plan.description}
                </p>
  
                <ul className="mt-6 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-slate-300"
                    >
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
  
                <a
                  href={`mailto:YOUR_EMAIL@example.com?subject=${encodeURIComponent(
                    `Enquiry: ${plan.name}`
                  )}`}
                  className={`mt-8 rounded-lg px-5 py-3 text-center font-semibold transition ${
                    plan.popular
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-slate-600 text-white hover:border-cyan-400"
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
      </section>
    );
  }
  