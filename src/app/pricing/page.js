"use client";

import { useState } from "react";

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const isAnnual = billing === "annual";

  return (
    <div className="py-16">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">Pricing</h1>
      <p className="mt-4 text-center text-black/70 dark:text-white/70 max-w-2xl mx-auto">
        Simple plans that scale with your organization.
      </p>

      <div className="mt-8 flex items-center justify-center gap-2 text-sm">
        <button
          className={`px-3 py-1.5 rounded-md border ${!isAnnual ? "bg-black text-white dark:bg-white dark:text-black border-transparent" : "border-black/10 dark:border-white/15"}`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-3 py-1.5 rounded-md border ${isAnnual ? "bg-black text-white dark:bg-white dark:text-black border-transparent" : "border-black/10 dark:border-white/15"}`}
          onClick={() => setBilling("annual")}
        >
          Annual <span className="ml-1 opacity-70">(save 15%)</span>
        </button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Ideal for pilots and small teams.</p>
          <p className="mt-6 text-4xl font-bold">{isAnnual ? "$25" : "$29"}<span className="text-base font-medium">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Up to 5 users</li>
            <li>Core prediction models</li>
            <li>Email support</li>
          </ul>
          <a href="#" className="mt-8 inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90">
            Choose Starter
          </a>
        </div>

        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 relative">
          <span className="absolute -top-3 right-4 rounded-full bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-xs font-medium">Popular</span>
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Best for growing departments.</p>
          <p className="mt-6 text-4xl font-bold">{isAnnual ? "$85" : "$99"}<span className="text-base font-medium">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Up to 25 users</li>
            <li>Advanced forecasting</li>
            <li>Role-based access</li>
            <li>Priority support</li>
          </ul>
          <a href="#" className="mt-8 inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90">
            Choose Pro
          </a>
        </div>

        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Custom solutions and SLAs.</p>
          <p className="mt-6 text-4xl font-bold">Custom</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Unlimited users</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
            <li>HIPAA & security reviews</li>
          </ul>
          <a href="#contact" className="mt-8 inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}


