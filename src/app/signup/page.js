"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthContext";

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
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
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [timezone, setTimezone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [stateProv, setStateProv] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [insuranceMemberId, setInsuranceMemberId] = useState("");
  const [occupation, setOccupation] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [practiceWebsite, setPracticeWebsite] = useState("");
  const [commPref, setCommPref] = useState("email");
  const [newsletter, setNewsletter] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";
    if (password.length < 6) next.password = "Password must be at least 6 characters";
    if (confirm !== password) next.confirm = "Passwords do not match";
    if (role === "doctor" && !specialization.trim()) next.specialization = "Specialization is required";
    if (role === "doctor" && !licenseId.trim()) next.licenseId = "Medical license ID is required";
    if (!agree) next.agree = "You must accept the terms";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    signup({ name, email, role });
    router.push("/profile");
  }

  return (
    <div className="py-10 lg:py-0 lg:min-h-[calc(100vh-64px)] grid lg:grid-cols-2 gap-0 items-stretch">
      <div className="hidden lg:block relative overflow-hidden rounded-2xl ml-6 my-6">
        <img
          src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop"
          alt="Doctor standing in hospital"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full p-10 flex items-end">
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-semibold">Join MedPredict AI</h2>
            <p className="mt-2 text-sm opacity-90">Patients and doctors collaborate with secure, predictive insights.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Doctors can add specialization.</p>

          <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 p-6">
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Full name</label>
            <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.name ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Email</label>
            <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.email ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Date of birth (optional)</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" type="date" value={dob} onChange={(e)=>setDob(e.target.value)} />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Gender (optional)</label>
            <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select…</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="nonbinary">Non-binary</option>
              <option value="other">Other</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Password</label>
            <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.password ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Confirm password</label>
            <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.confirm ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
            {errors.confirm && <p className="mt-1 text-xs text-red-600">{errors.confirm}</p>}
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Role</label>
            <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={role} onChange={(e)=>setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {role === "doctor" && (
            <>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium">Specialization</label>
                <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.specialization ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="text" placeholder="e.g., Cardiology, Oncology" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} />
                {errors.specialization && <p className="mt-1 text-xs text-red-600">{errors.specialization}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium">Medical license ID</label>
                <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.licenseId ? "border-red-500" : "border-black/10 dark:border-white/15"}`} type="text" placeholder="e.g., NPI / State license" value={licenseId} onChange={(e)=>setLicenseId(e.target.value)} />
                {errors.licenseId && <p className="mt-1 text-xs text-red-600">{errors.licenseId}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Clinic/Organization (optional)</label>
                <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" type="text" placeholder="Clinic name" value={clinic} onChange={(e)=>setClinic(e.target.value)} />
              </div>
            </>
          )}

          <div className="sm:col-span-2 mt-2">
            <h4 className="text-sm font-medium">Address (optional)</h4>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm">Address line 1</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={address1} onChange={(e)=>setAddress1(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm">Address line 2</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={address2} onChange={(e)=>setAddress2(e.target.value)} />
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <label className="block text-sm">City</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={city} onChange={(e)=>setCity(e.target.value)} />
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <label className="block text-sm">State/Province</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={stateProv} onChange={(e)=>setStateProv(e.target.value)} />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm">Postal code</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={zip} onChange={(e)=>setZip(e.target.value)} />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm">Country</label>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2" value={country} onChange={(e)=>setCountry(e.target.value)} />
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
              I agree to the <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </label>
            {errors.agree && <p className="mt-1 text-xs text-red-600">{errors.agree}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={newsletter} onChange={(e)=>setNewsletter(e.target.checked)} />
              Send me product updates and clinical insights (optional)
            </label>
          </div>

          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium">Create account</button>
            <a href="/login" className="text-sm underline">Have an account? Log in</a>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}


