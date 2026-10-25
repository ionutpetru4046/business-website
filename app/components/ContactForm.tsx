"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    >,
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: [
            `Project type: ${formData.projectType}`,
            `Budget: ${formData.budget || "Not specified"}`,
            "",
            "Project requirements:",
            formData.requirements,
          ].join("\n"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      toast.success("Enquiry sent successfully!", {
        description: "Thank you. I'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        requirements: "",
      });
    } catch (error) {
      toast.error("Your enquiry could not be sent.", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          className="input-field w-full rounded-xl px-4 py-3"
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
          className="input-field w-full rounded-xl px-4 py-3"
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
          className="input-field w-full rounded-xl px-4 py-3"
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
          className="input-field w-full rounded-xl px-4 py-3"
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
          className="input-field w-full resize-y rounded-xl px-4 py-3"
          placeholder="What are you looking to build or improve?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full rounded-full px-6 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>

      <p className="text-sm text-slate-500">
        Your project details will be sent by email so I can respond to your
        enquiry.
      </p>
    </form>
  );
}
