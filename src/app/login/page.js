"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";
import { useAuth } from "../../components/AuthContext";

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

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [role, setRole] = useState("patient");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";
    if (password.length < 6) next.password = "Password must be at least 6 characters";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // In this demo, password is not used by the auth mock
    login({ email, role });
    if (remember) {
      try { localStorage.setItem("mpai_login_email", email); } catch {}
    }
    router.push("/profile");
  }

  return (
    <div className="py-10 lg:py-0 lg:min-h-[calc(100vh-100px)] grid lg:grid-cols-2 gap-0 items-stretch bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
      <div className="hidden lg:block relative overflow-hidden rounded-2xl mx-6 my-3 min-h-[85vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
          alt="Hospital corridor"
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="relative z-10 h-full p-6 flex items-center">
          <div className="text-white max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-3">
              <HeartIcon />
              <span>Trusted by 500+ Healthcare Organizations</span>
            </div>
            <h2 className="text-2xl font-semibold">Welcome Back to MedPredict AI</h2>
            <p className="mt-2 text-sm opacity-90">Secure access to your AI-powered healthcare insights. Join thousands of medical professionals transforming patient care.</p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-white/20">
                  <ShieldIcon />
                </div>
                <span className="text-white/90 text-sm">HIPAA Compliant & Secure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-white/20">
                  <LockIcon />
                </div>
                <span className="text-white/90 text-sm">End-to-End Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-3 px-6">
        <div className="w-full max-w-lg">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-6 min-h-[85vh] flex flex-col justify-center">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Sign In
              </h1>
              <p className="text-black/70 dark:text-white/70 text-sm">
                Access your healthcare dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                label="Email Address" 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                error={errors.email}
                placeholder="Enter your email"
              />
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    className={`w-full rounded-xl border px-3 py-2.5 pr-12 transition-all duration-200 ${
                      errors.password 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                        : "border-black/10 dark:border-white/15 focus:border-blue-500 focus:ring-blue-500/20"
                    } focus:ring-2 focus:outline-none`}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={()=>setShowPassword(v=>!v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              <Select
                label="Account Type"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                options={[
                  { value: "patient", label: "Patient" },
                  { value: "doctor", label: "Healthcare Professional" }
                ]}
              />

              <div className="flex items-center justify-between text-sm">
                <Checkbox
                  label="Remember me"
                  checked={remember}
                  onChange={(e)=>setRemember(e.target.checked)}
                />
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-black/60 dark:text-white/60">
                Don't have an account?
                <a 
                  href="/signup" 
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Create account
                </a>
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center justify-center gap-4 text-xs text-black/60 dark:text-white/60">
                <span className="flex items-center gap-1">
                  <ShieldIcon />
                  HIPAA Secure
                </span>
                <span className="flex items-center gap-1">
                  <LockIcon />
                  256-bit SSL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


