"use client";

import RequireAuth from "../../components/RequireAuth";
import { useAuth } from "../../components/AuthContext";

export default function ProfilePage() {
  const [demographics, setDemographics] = useState(initialDemographics);
  const [familyHistory, setFamilyHistory] = useState(initialFamilyHistory);
  const [lifestyle, setLifestyle] = useState(initialLifestyle);
  const [photo, setPhoto] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [privacy, setPrivacy] = useState(initialPrivacy);

  function handleDocChange(e) {
    const files = Array.from(e.target.files || []);
    setDocuments((prev) => [...prev, ...files]);
  }
  const { user } = useAuth();
  return (
    <RequireAuth>
       <div className="py-16">
      <h1 className="text-3xl font-bold">Profile</h1>
      {userEmail && userRole && (
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">Logged in as {userEmail} · Role: {userRole}</p>
      )}

      <div className="mt-8 grid gap-8">
        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Demographics</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <Input label="Full name" value={demographics.name} onChange={(e)=>setDemographics({ ...demographics, name: e.target.value })} />
            <div>
              <label className="block text-sm font-medium">Date of birth</label>
              <input type="date" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={demographics.dob} onChange={(e)=>setDemographics({ ...demographics, dob: e.target.value })} />
            </div>
            <Select
              label="Gender"
              value={demographics.gender}
              onChange={(e)=>setDemographics({ ...demographics, gender: e.target.value })}
              options={[
                { value: "", label: "Select…" },
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "nonbinary", label: "Non-binary" },
                { value: "other", label: "Other" }
              ]}
            />
            <Input label="Phone" value={demographics.phone} onChange={(e)=>setDemographics({ ...demographics, phone: e.target.value })} />
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Family history</h2>
          <Input as="textarea" rows={4} value={familyHistory} onChange={(e)=>setFamilyHistory(e.target.value)} wrapperClassName="mt-4" />
        </section>

        <section className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Lifestyle</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <Select
              label="Smoking"
              value={lifestyle.smoking}
              onChange={(e)=>setLifestyle({ ...lifestyle, smoking: e.target.value })}
              options={[
                { value: "no", label: "No" },
                { value: "former", label: "Former" },
                { value: "yes", label: "Yes" }
              ]}
            />
            <Select
              label="Alcohol"
              value={lifestyle.alcohol}
              onChange={(e)=>setLifestyle({ ...lifestyle, alcohol: e.target.value })}
              options={[
                { value: "no", label: "No" },
                { value: "social", label: "Social" },
                { value: "regular", label: "Regular" }
              ]}
            />
            <Select
              label="Exercise"
              value={lifestyle.exercise}
              onChange={(e)=>setLifestyle({ ...lifestyle, exercise: e.target.value })}
              options={[
                { value: "none", label: "None" },
                { value: "light", label: "Light" },
                { value: "moderate", label: "Moderate" },
                { value: "intense", label: "Intense" }
              ]}
            />
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
            <Checkbox
              label="Share demographics with doctors"
              checked={privacy.shareDemographics}
              onChange={(e)=>setPrivacy({ ...privacy, shareDemographics: e.target.checked })}
            />
            <Checkbox
              label="Share family history"
              checked={privacy.shareFamily}
              onChange={(e)=>setPrivacy({ ...privacy, shareFamily: e.target.checked })}
            />
            <Checkbox
              label="Share lifestyle data"
              checked={privacy.shareLifestyle}
              onChange={(e)=>setPrivacy({ ...privacy, shareLifestyle: e.target.checked })}
            />
            <Checkbox
              label="Share uploaded documents"
              checked={privacy.shareDocuments}
              onChange={(e)=>setPrivacy({ ...privacy, shareDocuments: e.target.checked })}
            />
          </div>
          <p className="mt-3 text-xs text-black/60 dark:text-white/60">These preferences control visibility to your assigned doctors only.</p>
        </section>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onSaveDraft?.({ demographics, familyHistory, lifestyle, privacy, photo, documents })}>Save draft</Button>
          <Button onClick={() => onSave?.({ demographics, familyHistory, lifestyle, privacy, photo, documents })}>Save changes</Button>
        </div>
      </div>
    </div>
    </RequireAuth>
  );
}


