"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthContext";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";

// Icon components
const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("patient");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [clinic, setClinic] = useState("");
  const [dob, setDob] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const totalSteps = role === "doctor" ? 6 : 5;

  function validateCurrentStep() {
    const next = {};
    
    if (currentStep === 1) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";
    }
    
    if (currentStep === 2) {
      if (password.length < 6) next.password = "Password must be at least 6 characters";
      if (confirm !== password) next.confirm = "Passwords do not match";
    }
    
    if (currentStep === 3) {
      if (!name.trim()) next.name = "Name is required";
    }
    
    if (currentStep === 4) {
      if (!role) next.role = "Please select your role";
    }
    
    if (currentStep === 5 && role === "doctor") {
      if (!specialization.trim()) next.specialization = "Specialization is required";
    }
    
    if (currentStep === 6 && role === "doctor") {
      if (!licenseId.trim()) next.licenseId = "Medical license ID is required";
    }
    
    if (currentStep === totalSteps) {
      if (!agree) next.agree = "You must accept the terms";
    }
    
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleNext() {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  }

  function handlePrevious() {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentStep < totalSteps) {
      handleNext();
    } else {
      if (validateCurrentStep()) {
        signup({ name, email, role });
        router.push("/profile");
      }
    }
  }

  function renderStepContent() {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Let's start with your email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We'll use this to create your account</p>
            </div>
            <Input 
              label="Email Address" 
              type="email" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              error={errors.email}
              placeholder="Enter your email address"
            />
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Create a secure password</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Choose a strong password to protect your account</p>
            </div>
            <div className="space-y-4">
              <Input 
                label="Password" 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                error={errors.password}
                placeholder="Create a password"
              />
              <Input 
                label="Confirm Password" 
                type="password" 
                value={confirm} 
                onChange={(e)=>setConfirm(e.target.value)} 
                error={errors.confirm}
                placeholder="Confirm your password"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">What's your name?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Help us personalize your experience</p>
            </div>
            <Input 
              label="Full Name" 
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
              error={errors.name}
              placeholder="Enter your full name"
            />
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Choose your account type</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">This helps us customize your dashboard</p>
            </div>
            <Select
              label="Account Type"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              error={errors.role}
              options={[
                { value: "patient", label: "Patient" },
                { value: "doctor", label: "Healthcare Professional" }
              ]}
            />
          </div>
        );
      
      case 5:
        if (role === "doctor") {
          return (
            <div className="space-y-6 text-center">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Your specialization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">What's your medical specialty?</p>
              </div>
              <Input 
                label="Specialization" 
                value={specialization} 
                onChange={(e)=>setSpecialization(e.target.value)} 
                error={errors.specialization}
                placeholder="e.g., Cardiology, Oncology"
              />
            </div>
          );
        } else {
          return (
            <div className="space-y-6 text-center">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Almost done!</h3>
              </div>
              <div className="space-y-4">
                <Input 
                  label="Phone (optional)" 
                  type="tel" 
                  value={phone} 
                  onChange={(e)=>setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
                <div className="space-y-3 pt-2">
                  <Checkbox
                    label="I agree to the Terms and Privacy Policy."
                    checked={agree}
                    onChange={(e)=>setAgree(e.target.checked)}
                    error={errors.agree}
                  />
                  <Checkbox
                    label="Send me product updates and clinical insights (optional)"
                    checked={newsletter}
                    onChange={(e)=>setNewsletter(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          );
        }
      
      case 6:
        return (
          <div className="space-y-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Medical license information</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We need to verify your credentials</p>
            </div>
            <div className="space-y-4">
              <Input 
                label="Medical License ID" 
                value={licenseId} 
                onChange={(e)=>setLicenseId(e.target.value)} 
                error={errors.licenseId}
                placeholder="e.g., NPI / State license"
              />
              <Input 
                label="Clinic/Organization (optional)" 
                value={clinic} 
                onChange={(e)=>setClinic(e.target.value)}
                placeholder="Enter your clinic or organization"
              />
              <div className="space-y-3 pt-2">
                <Checkbox
                  label="I agree to the Terms and Privacy Policy."
                  checked={agree}
                  onChange={(e)=>setAgree(e.target.checked)}
                  error={errors.agree}
                />
                <Checkbox
                  label="Send me product updates and clinical insights (optional)"
                  checked={newsletter}
                  onChange={(e)=>setNewsletter(e.target.checked)}
                />
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  }


  return (
    <div className="py-10 lg:py-0 lg:min-h-[calc(100vh-100px)] grid lg:grid-cols-2 gap-0 items-stretch bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:block relative overflow-hidden rounded-2xl mx-6 my-3 min-h-[85vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop"
            alt="Doctor standing in hospital"
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-20"
          />
          <div className="relative z-10 h-full p-6 flex items-center">
            <div className="text-white max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-3">
                <HeartIcon />
                <span>Join 500+ Healthcare Organizations</span>
              </div>
              <h2 className="text-2xl font-semibold">Transform Healthcare with AI</h2>
              <p className="mt-2 text-sm opacity-90">
                Join thousands of healthcare professionals using AI-powered insights to improve patient outcomes.
              </p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/20">
                    <BrainIcon />
                  </div>
                  <span className="text-white/90 text-sm">AI-Powered Predictions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/20">
                    <ShieldIcon />
                  </div>
                  <span className="text-white/90 text-sm">HIPAA Compliant Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/20">
                    <UsersIcon />
                  </div>
                  <span className="text-white/90 text-sm">Collaborative Care Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex items-center justify-center py-3 px-6">
          <div className="w-full max-w-lg">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-6 h-[85vh] flex flex-col">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Create Your Account
                </h1>
                <p className="text-black/70 dark:text-white/70 text-sm">
                  Step {currentStep} of {totalSteps}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  {Array.from({ length: totalSteps }, (_, i) => (
                    <div key={i} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                          i + 1 <= currentStep
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < totalSteps - 1 && (
                        <div 
                          className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                            i + 1 < currentStep
                              ? "bg-gradient-to-r from-blue-600 to-purple-600"
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 flex flex-col justify-center min-h-[200px]">
                    {renderStepContent()}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-6">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2.5 px-6 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                      >
                        Previous
                      </button>
                    )}
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {currentStep === totalSteps ? "Create Account" : "Next"}
                    </button>
                  </div>
                </form>

                <div className="mt-4 space-y-3">
                  <div className="text-center">
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Already have an account?
                      <a href="/login" className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        Sign in here
                      </a>
                    </p>
                  </div>

                  <div className=" dark:border-white/10">
                    <div className="flex items-center justify-center gap-4 text-xs text-black/60 dark:text-white/60">
                      <span className="flex items-center gap-1">
                        <CheckIcon />
                        Free 14-day trial
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckIcon />
                        No credit card
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}


