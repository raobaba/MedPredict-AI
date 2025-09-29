"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthContext";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";

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
          <Input label="Full name" value={name} onChange={(e)=>setName(e.target.value)} error={errors.name} wrapperClassName="sm:col-span-1" />
          <Input label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} error={errors.email} wrapperClassName="sm:col-span-1" />

                  <Input label="Date of birth (optional)" type="date" value={dob} onChange={(e)=>setDob(e.target.value)} wrapperClassName="sm:col-span-1" />
                  <Select
                    label="Gender (optional)"
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}
                    wrapperClassName="sm:col-span-1"
                    options={[
                      { value: "", label: "Select…" },
                      { value: "female", label: "Female" },
                      { value: "male", label: "Male" },
                      { value: "nonbinary", label: "Non-binary" },
                      { value: "other", label: "Other" },
                      { value: "prefer_not", label: "Prefer not to say" }
                    ]}
                  />

          <Input label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} error={errors.password} wrapperClassName="sm:col-span-1" />
          <Input label="Confirm password" type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} error={errors.confirm} wrapperClassName="sm:col-span-1" />

          <Input label="Phone (optional)" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} wrapperClassName="sm:col-span-1" />
                  <Select
                    label="Role"
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                    wrapperClassName="sm:col-span-1"
                    options={[
                      { value: "patient", label: "Patient" },
                      { value: "doctor", label: "Doctor" }
                    ]}
                  />

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
              <Input label="Clinic/Organization (optional)" value={clinic} onChange={(e)=>setClinic(e.target.value)} wrapperClassName="sm:col-span-2" />
            </>
          )}

          <div className="sm:col-span-2 mt-2">
            <h4 className="text-sm font-medium">Address (optional)</h4>
          </div>
          <Input label="Address line 1" value={address1} onChange={(e)=>setAddress1(e.target.value)} wrapperClassName="sm:col-span-2" />
          <Input label="Address line 2" value={address2} onChange={(e)=>setAddress2(e.target.value)} wrapperClassName="sm:col-span-2" />
          <Input label="City" value={city} onChange={(e)=>setCity(e.target.value)} wrapperClassName="sm:col-span-2 md:col-span-1" />
          <Input label="State/Province" value={stateProv} onChange={(e)=>setStateProv(e.target.value)} wrapperClassName="sm:col-span-2 md:col-span-1" />
          <Input label="Postal code" value={zip} onChange={(e)=>setZip(e.target.value)} wrapperClassName="sm:col-span-1" />
          <Input label="Country" value={country} onChange={(e)=>setCountry(e.target.value)} wrapperClassName="sm:col-span-1" />

                  <div className="sm:col-span-2">
                    <Checkbox
                      label="I agree to the Terms and Privacy Policy."
                      checked={agree}
                      onChange={(e)=>setAgree(e.target.checked)}
                      error={errors.agree}
                    />
                  </div>

                  <Checkbox
                    label="Send me product updates and clinical insights (optional)"
                    checked={newsletter}
                    onChange={(e)=>setNewsletter(e.target.checked)}
                    wrapperClassName="sm:col-span-2"
                  />

          <div className="sm:col-span-2 flex items-center gap-3">
            <Button type="submit">Create account</Button>
            <a href="/login" className="text-sm underline">Have an account? Log in</a>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}


