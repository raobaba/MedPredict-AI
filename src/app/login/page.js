"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [role, setRole] = useState("patient");
  const [mode, setMode] = useState("login");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (mode === "login") {
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
    } else {
      // Link to signup page instead of local form to keep logic single-source
      router.push("/signup");
    }
  }

  return (
    <div className="py-10 lg:py-0 lg:min-h-[calc(100vh-64px)] grid lg:grid-cols-2 gap-0 items-stretch">
      <div className="hidden lg:block relative overflow-hidden rounded-2xl ml-6 my-6">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
          alt="Hospital corridor"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full p-10 flex items-end">
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-semibold">Welcome back</h2>
            <p className="mt-2 text-sm opacity-90">Secure login for patients and doctors to access MedPredict AI.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-10">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{mode === "login" ? "Login" : "Sign up"}</h1>
            <div className="ml-auto text-sm">
              <button type="button" onClick={()=> setMode(mode === "login" ? "signup" : "login")} className="underline">
                {mode === "login" ? "Create account" : "Have an account? Log in"}
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.email ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="mt-1 relative">
                <input
                  className={`w-full rounded-md border px-3 py-2 pr-10 ${errors.password ? "border-red-500" : "border-black/10 dark:border-white/15"}`}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={()=>setShowPassword(v=>!v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              <div className="mt-2 flex items-center justify-between text-xs">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
                  Remember me
                </label>
                <a href="#" className="underline">Forgot password?</a>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Role</label>
              <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <button type="submit" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium w-fit">{mode === "login" ? "Login" : "Continue to Signup"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}


