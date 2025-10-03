"use client";

import { HeartIcon, ShieldIcon, LockIcon, UsersIcon, BrainIcon, CheckIcon } from "./Icon";

export default function AuthLayout({ 
  children, 
  type = "login", // "login" or "signup"
  title,
  subtitle,
  image,
  imageAlt,
  features = []
}) {
  const defaultFeatures = type === "login" 
    ? [
        { icon: ShieldIcon, text: "HIPAA Compliant & Secure" },
        { icon: LockIcon, text: "End-to-End Encryption" }
      ]
    : [
        { icon: BrainIcon, text: "AI-Powered Predictions" },
        { icon: ShieldIcon, text: "HIPAA Compliant Platform" },
        { icon: UsersIcon, text: "Collaborative Care Teams" }
      ];

  const featuresToShow = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="py-10 lg:py-0 lg:min-h-[calc(100vh-100px)] grid lg:grid-cols-2 gap-0 items-stretch bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:block relative overflow-hidden rounded-2xl mx-6 my-3 min-h-[85vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <img
          src={image || (type === "login" 
            ? "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
            : "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop"
          )}
          alt={imageAlt || (type === "login" ? "Hospital corridor" : "Doctor standing in hospital")}
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="relative z-10 h-full p-6 flex items-center">
          <div className="text-white max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-3">
              <HeartIcon />
              <span>{type === "login" ? "Trusted by 500+ Healthcare Organizations" : "Join 500+ Healthcare Organizations"}</span>
            </div>
            <h2 className="text-2xl font-semibold">{title || (type === "login" ? "Welcome Back to MedPredict AI" : "Transform Healthcare with AI")}</h2>
            <p className="mt-2 text-sm opacity-90">
              {subtitle || (type === "login" 
                ? "Secure access to your AI-powered healthcare insights. Join thousands of medical professionals transforming patient care."
                : "Join thousands of healthcare professionals using AI-powered insights to improve patient outcomes."
              )}
            </p>
            
            <div className="mt-4 space-y-2">
              {featuresToShow.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/20">
                    <feature.icon />
                  </div>
                  <span className="text-white/90 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center py-3 px-6">
        <div className="w-full max-w-lg">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-6 min-h-[85vh] flex flex-col justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
