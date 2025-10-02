"use client";

import { useState } from "react";

// Icon components
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const isAnnual = billing === "annual";

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small clinics and individual practitioners",
      monthlyPrice: 29,
      annualPrice: 25,
      icon: <UsersIcon />,
      features: [
        "Up to 5 users",
        "Core prediction models",
        "Basic analytics dashboard",
        "Email support",
        "Standard security",
        "Mobile app access"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
    },
    {
      name: "Professional",
      description: "Ideal for growing medical departments and practices",
      monthlyPrice: 99,
      annualPrice: 85,
      icon: <BrainIcon />,
      popular: true,
      features: [
        "Up to 25 users",
        "Advanced AI forecasting",
        "Custom prediction models",
        "Role-based access control",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Data export tools"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large healthcare organizations",
      price: "Custom",
      icon: <ShieldIcon />,
      features: [
        "Unlimited users",
        "Custom AI model training",
        "Dedicated support team",
        "Custom integrations",
        "HIPAA compliance audit",
        "Advanced security features",
        "On-premise deployment",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "Metro Health System",
      content: "MedPredict AI has revolutionized our patient care predictions. We've seen a 40% improvement in early diagnosis accuracy.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Director of Analytics",
      company: "Regional Medical Center",
      content: "The AI insights have helped us reduce readmission rates by 25%. The ROI has been exceptional.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Emergency Medicine",
      company: "City General Hospital",
      content: "Real-time predictions have transformed our emergency department efficiency. Highly recommended!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How accurate are the AI predictions?",
      answer: "Our AI models achieve 95%+ accuracy rates across various medical prediction tasks, continuously improving through machine learning."
    },
    {
      question: "Is my patient data secure?",
      answer: "Yes, we maintain HIPAA compliance with end-to-end encryption, regular security audits, and strict access controls."
    },
    {
      question: "Can I integrate with existing EMR systems?",
      answer: "Absolutely! We support integration with major EMR systems including Epic, Cerner, and Allscripts through our API."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, dedicated account managers for Enterprise clients, and comprehensive training resources."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans so you can experience the full capabilities of our platform."
    }
  ];

  const features = [
    { name: "Users Included", starter: "5 users", pro: "25 users", enterprise: "Unlimited" },
    { name: "AI Prediction Models", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
    { name: "Analytics Dashboard", starter: "✓", pro: "✓", enterprise: "✓" },
    { name: "Mobile App", starter: "✓", pro: "✓", enterprise: "✓" },
    { name: "API Access", starter: "✗", pro: "✓", enterprise: "✓" },
    { name: "Custom Integrations", starter: "✗", pro: "Limited", enterprise: "Unlimited" },
    { name: "Priority Support", starter: "✗", pro: "✓", enterprise: "✓" },
    { name: "Dedicated Support", starter: "✗", pro: "✗", enterprise: "✓" },
    { name: "HIPAA Compliance", starter: "Standard", pro: "Enhanced", enterprise: "Full Audit" },
    { name: "Data Export", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
    { name: "Training & Onboarding", starter: "Self-service", pro: "Guided", enterprise: "White-glove" }
  ];

  return (
    <div className="py-16 overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 -skew-y-1 transform origin-top-left"></div>
        <div className="relative py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Choose the perfect plan for your healthcare organization. All plans include our core AI prediction capabilities with 14-day free trial.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mt-12 flex items-center justify-center">
            <div className="relative bg-white dark:bg-gray-800 p-1 rounded-xl border border-black/10 dark:border-white/10 shadow-lg">
              <button
                className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  !isAnnual 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md" 
                    : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                }`}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isAnnual 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md" 
                    : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                }`}
                onClick={() => setBilling("annual")}
              >
                Annual
                <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              plan.popular
                ? "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-2 border-blue-200 dark:border-blue-800 shadow-xl"
                : "bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 shadow-lg"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${plan.popular ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
            </div>

            <p className="text-black/70 dark:text-white/70 mb-6">{plan.description}</p>

            <div className="mb-8">
              {plan.price === "Custom" ? (
                <div className="text-4xl font-bold">Custom</div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-lg text-black/60 dark:text-white/60">/month</span>
                </div>
              )}
              {plan.price !== "Custom" && isAnnual && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                </p>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Features Comparison Table */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
          <p className="text-black/70 dark:text-white/70">
            Detailed comparison of what's included in each plan
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Features</th>
                <th className="px-6 py-4 text-center font-semibold">Starter</th>
                <th className="px-6 py-4 text-center font-semibold">Professional</th>
                <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">{feature.name}</td>
                  <td className="px-6 py-4 text-center">{feature.starter}</td>
                  <td className="px-6 py-4 text-center">{feature.pro}</td>
                  <td className="px-6 py-4 text-center">{feature.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
          <p className="text-black/70 dark:text-white/70">
            See what medical professionals are saying about MedPredict AI
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-black/10 dark:border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-black/80 dark:text-white/80 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-black/60 dark:text-white/60">{testimonial.role}</p>
                <p className="text-sm text-black/60 dark:text-white/60">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-black/70 dark:text-white/70">
            Everything you need to know about our pricing and features
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-black/10 dark:border-white/10 group">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                {faq.question}
                <span className="ml-4 transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of healthcare professionals already using MedPredict AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
}


