"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthContext";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";
import AuthLayout from "../../components/AuthLayout";
import ProgressBar from "../../components/ProgressBar";
import { HeartIcon, ShieldIcon, UsersIcon, BrainIcon, CheckIcon } from "../../components/Icon";

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
              onChange={(e)=>{
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors(prev => ({...prev, email: ""}));
                }
              }} 
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
                name="password"
                value={password} 
                onChange={(e)=>{
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors(prev => ({...prev, password: ""}));
                  }
                }} 
                error={errors.password}
                placeholder="Create a password"
                showPasswordToggle={true}
              />
              <Input 
                label="Confirm Password" 
                type="password" 
                name="confirm"
                value={confirm} 
                onChange={(e)=>{
                  setConfirm(e.target.value);
                  if (errors.confirm) {
                    setErrors(prev => ({...prev, confirm: ""}));
                  }
                }} 
                error={errors.confirm}
                placeholder="Confirm your password"
                showPasswordToggle={true}
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
              onChange={(e)=>{
                setName(e.target.value);
                if (errors.name) {
                  setErrors(prev => ({...prev, name: ""}));
                }
              }} 
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
              onChange={(e)=>{
                setRole(e.target.value);
                if (errors.role) {
                  setErrors(prev => ({...prev, role: ""}));
                }
              }}
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
                onChange={(e)=>{
                  setSpecialization(e.target.value);
                  if (errors.specialization) {
                    setErrors(prev => ({...prev, specialization: ""}));
                  }
                }} 
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
                  onChange={(e)=>{
                    setPhone(e.target.value);
                    if (errors.phone) {
                      setErrors(prev => ({...prev, phone: ""}));
                    }
                  }}
                  placeholder="Enter your phone number"
                />
                <div className="space-y-3 pt-2">
                  <Checkbox
                    label="I agree to the Terms and Privacy Policy."
                    checked={agree}
                    onChange={(e)=>{
                      setAgree(e.target.checked);
                      if (errors.agree) {
                        setErrors(prev => ({...prev, agree: ""}));
                      }
                    }}
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
                onChange={(e)=>{
                  setLicenseId(e.target.value);
                  if (errors.licenseId) {
                    setErrors(prev => ({...prev, licenseId: ""}));
                  }
                }} 
                error={errors.licenseId}
                placeholder="e.g., NPI / State license"
              />
              <Input 
                label="Clinic/Organization (optional)" 
                value={clinic} 
                onChange={(e)=>{
                  setClinic(e.target.value);
                  if (errors.clinic) {
                    setErrors(prev => ({...prev, clinic: ""}));
                  }
                }}
                placeholder="Enter your clinic or organization"
              />
              <div className="space-y-3 pt-2">
                <Checkbox
                  label="I agree to the Terms and Privacy Policy."
                  checked={agree}
                  onChange={(e)=>{
                    setAgree(e.target.checked);
                    if (errors.agree) {
                      setErrors(prev => ({...prev, agree: ""}));
                    }
                  }}
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
    <AuthLayout 
      type="signup"
      title="Transform Healthcare with AI"
      subtitle="Join thousands of healthcare professionals using AI-powered insights to improve patient outcomes."
      features={[
        { icon: BrainIcon, text: "AI-Powered Predictions" },
        { icon: ShieldIcon, text: "HIPAA Compliant Platform" },
        { icon: UsersIcon, text: "Collaborative Care Teams" }
      ]}
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Create Your Account
        </h1>
        <p className="text-black/70 dark:text-white/70 text-sm">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

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

          <div className="border-t border-black/10 dark:border-white/10">
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
    </AuthLayout>
  );
}


