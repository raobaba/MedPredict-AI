"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";
import AuthLayout from "../../components/AuthLayout";
import { useAuth } from "../../components/AuthContext";
import { HeartIcon, ShieldIcon, LockIcon } from "../../components/Icon";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <AuthLayout 
      type="login"
      title="Welcome Back to MedPredict AI"
      subtitle="Secure access to your AI-powered healthcare insights. Join thousands of medical professionals transforming patient care."
      features={[
        { icon: ShieldIcon, text: "HIPAA Compliant & Secure" },
        { icon: LockIcon, text: "End-to-End Encryption" }
      ]}
    >
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
                name="email"
                value={email} 
                onChange={(e)=>{
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors(prev => ({...prev, email: ""}));
                  }
                }} 
                error={errors.email}
                placeholder="Enter your email"
              />
              
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
                placeholder="Enter your password"
                showPasswordToggle={true}
              />

              <Select
                label="Account Type"
                name="role"
                value={role}
                onChange={(e)=>{
                  setRole(e.target.value);
                  if (errors.role) {
                    setErrors(prev => ({...prev, role: ""}));
                  }
                }}
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
    </AuthLayout>
  );
}


