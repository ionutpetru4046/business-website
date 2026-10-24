
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    requirements: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporary: inspect submitted values while testing the form.
    console.log("Project enquiry:", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          What do you need?
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData.projectType}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
        >
          <option value="">Select a service</option>
          <option value="Business website">Business website</option>
          <option value="Full-stack application">Full-stack application</option>
          <option value="CRM or booking system">CRM or booking system</option>
          <option value="API integration">API integration</option>
          <option value="Website fixes">Website fixes or improvements</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Estimated budget
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
        >
          <option value="">Select a budget (optional)</option>
          <option value="Under €500">Under €500</option>
          <option value="€500–€1,000">€500–€1,000</option>
          <option value="€1,000–€3,000">€1,000–€3,000</option>
          <option value="€3,000+">€3,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="requirements"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Tell me about your project
        </label>
        <textarea
          id="requirements"
          name="requirements"
          required
          rows={5}
          value={formData.requirements}
          onChange={handleChange}
          className="w-full resize-y rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          placeholder="What are you looking to build or improve?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Submit Enquiry
      </button>

      <p className="text-sm text-slate-500">
        This form is currently a UI prototype. It does not send or save your
        enquiry yet.
      </p>
    </form>
  );
}
