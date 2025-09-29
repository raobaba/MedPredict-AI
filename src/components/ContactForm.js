"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (!values.message.trim()) next.message = "Message is required";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    // Demo submit: simulate API call
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-black/10 dark:border-white/15 p-4 text-sm">
        Thanks! We received your message and will reply soon.
      </div>
    );
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
      <div className="sm:col-span-1">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-300" : "border-black/10 dark:border-white/15 focus:ring-black/20 dark:focus:ring-white/20"}`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div className="sm:col-span-1">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-300" : "border-black/10 dark:border-white/15 focus:ring-black/20 dark:focus:ring-white/20"}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 ${errors.message ? "border-red-500 focus:ring-red-300" : "border-black/10 dark:border-white/15 focus:ring-black/20 dark:focus:ring-white/20"}`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90">Send message</button>
      </div>
    </form>
  );
}


