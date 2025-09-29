"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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
      <Input label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} wrapperClassName="sm:col-span-1" />
      <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} error={errors.email} wrapperClassName="sm:col-span-1" />
      <Input label="Message" as="textarea" rows={5} name="message" value={form.message} onChange={handleChange} error={errors.message} wrapperClassName="sm:col-span-2" />
      <div className="sm:col-span-2">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}


