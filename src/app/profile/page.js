"use client";

import RequireAuth from "../../components/RequireAuth";
import { useAuth } from "../../components/AuthContext";
import { useState } from "react";

export default function ProfilePage() {
  return (
    <RequireAuth>
      <ProfileInner />
    </RequireAuth>
  );
}

function ProfileInner() {
  const { user } = useAuth();
  const [demographics, setDemographics] = useState({ name: "", dob: "", gender: "", phone: "" });
  const [familyHistory, setFamilyHistory] = useState("");
  const [lifestyle, setLifestyle] = useState({ smoking: "no", alcohol: "no", exercise: "moderate" });
  const [photo, setPhoto] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [privacy, setPrivacy] = useState({ shareDemographics: true, shareFamily: false, shareLifestyle: true, shareDocuments: false });

  function handleDocChange(e) {
    const files = Array.from(e.target.files || []);
    setDocuments((prev) => [...prev, ...files]);
  }

  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">Logged in as {user?.email} · Role: {user?.role}</p>

      <div className="mt-8 grid gap-8">
        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Demographics</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Full name</label>
              <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={demographics.name} onChange={(e)=>setDemographics({...demographics, name:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Date of birth</label>
              <input type="date" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={demographics.dob} onChange={(e)=>setDemographics({...demographics, dob:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={demographics.gender} onChange={(e)=>setDemographics({...demographics, gender:e.target.value})}>
                <option value="">Select…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="nonbinary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input className="mt-1 w-full rounded-md border border-black/10 dark:border_white/15 bg-transparent px-3 py-2" value={demographics.phone} onChange={(e)=>setDemographics({...demographics, phone:e.target.value})} />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Family history</h2>
          <textarea className="mt-4 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" rows={4} value={familyHistory} onChange={(e)=>setFamilyHistory(e.target.value)} placeholder="e.g., diabetes, heart disease" />
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Lifestyle</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Smoking</label>
              <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={lifestyle.smoking} onChange={(e)=>setLifestyle({...lifestyle, smoking:e.target.value})}>
                <option value="no">No</option>
                <option value="former">Former</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Alcohol</label>
              <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={lifestyle.alcohol} onChange={(e)=>setLifestyle({...lifestyle, alcohol:e.target.value})}>
                <option value="no">No</option>
                <option value="social">Social</option>
                <option value="regular">Regular</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Exercise</label>
              <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={lifestyle.exercise} onChange={(e)=>setLifestyle({...lifestyle, exercise:e.target.value})}>
                <option value="none">None</option>
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="intense">Intense</option>
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Profile photo</h2>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden flex items-center justify-center">
              {photo ? <img src={URL.createObjectURL(photo)} alt="avatar" className="h-full w-full object-cover" /> : <span className="text-xs opacity-60">No photo</span>}
            </div>
            <label className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
              Upload
              <input type="file" accept="image/*" className="hidden" onChange={(e)=>setPhoto(e.target.files?.[0] || null)} />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Medical documents</h2>
          <div className="mt-4">
            <label className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
              Upload PDFs or images
              <input type="file" multiple accept=".pdf,image/*" className="hidden" onChange={handleDocChange} />
            </label>
            <ul className="mt-4 space-y-2 text-sm">
              {documents.map((f, idx) => (
                <li key={idx} className="flex items-center justify-between rounded-md border border-black/10 dark:border-white/15 px-3 py-2">
                  <span className="truncate max-w-[70%]">{f.name}</span>
                  <span className="opacity-60 text-xs">{Math.round((f.size || 0)/1024)} KB</span>
                </li>
              ))}
              {documents.length === 0 && <li className="text-black/60 dark:text-white/60">No documents uploaded.</li>}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Privacy settings</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={privacy.shareDemographics} onChange={(e)=>setPrivacy({...privacy, shareDemographics:e.target.checked})} />
              Share demographics with doctors
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={privacy.shareFamily} onChange={(e)=>setPrivacy({...privacy, shareFamily:e.target.checked})} />
              Share family history
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={privacy.shareLifestyle} onChange={(e)=>setPrivacy({...privacy, shareLifestyle:e.target.checked})} />
              Share lifestyle data
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={privacy.shareDocuments} onChange={(e)=>setPrivacy({...privacy, shareDocuments:e.target.checked})} />
              Share uploaded documents
            </label>
          </div>
          <p className="mt-3 text-xs text-black/60 dark:text-white/60">These preferences control visibility to your assigned doctors only.</p>
        </section>

        <div className="flex justify-end gap-3">
          <button className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 text-sm">Save draft</button>
          <button className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm">Save changes</button>
        </div>
      </div>
    </div>
  );
}


