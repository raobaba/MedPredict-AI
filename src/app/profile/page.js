"use client";
import { useState } from "react";
import RequireAuth from "../../components/RequireAuth";
import { useAuth } from "../../components/AuthContext";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

// Doctor-specific initial data
const initialDoctorProfile = {
  name: "",
  email: "",
  phone: "",
  licenseNumber: "",
  specialties: [],
  experience: "",
  education: "",
  certifications: [],
  hospital: "",
  department: "",
  bio: "",
  consultationFee: "",
  languages: [],
  availability: {
    monday: { start: "09:00", end: "17:00", available: true },
    tuesday: { start: "09:00", end: "17:00", available: true },
    wednesday: { start: "09:00", end: "17:00", available: true },
    thursday: { start: "09:00", end: "17:00", available: true },
    friday: { start: "09:00", end: "17:00", available: true },
    saturday: { start: "10:00", end: "14:00", available: false },
    sunday: { start: "10:00", end: "14:00", available: false }
  }
};

// Patient-specific initial data
const initialPatientProfile = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  address: "",
  emergencyContact: "",
  emergencyPhone: "",
  bloodType: "",
  allergies: [],
  currentMedications: [],
  medicalHistory: [],
  familyHistory: {
  diabetes: false,
  heartDisease: false,
  cancer: false,
  hypertension: false,
  stroke: false,
  mentalHealth: false,
    other: ""
  },
  lifestyle: {
  smoking: "",
  alcohol: "",
  exercise: "",
  diet: "",
  sleep: "",
  stress: "",
  occupation: "",
    hobbies: ""
  },
  insurance: {
    provider: "",
    policyNumber: "",
    groupNumber: "",
    expiryDate: ""
  }
};

// Common initial data
const initialPrivacy = {
  shareDemographics: true,
  shareFamily: true,
  shareLifestyle: true,
  shareDocuments: false,
  allowResearch: false,
  dataRetention: "standard",
  communicationPreference: "email",
  emergencyAccess: true,
};

export default function ProfilePage() {
  const { user } = useAuth();
  const isDoctor = user?.role === "doctor";
  
  // Doctor state
  const [doctorProfile, setDoctorProfile] = useState(initialDoctorProfile);
  const [doctorPhoto, setDoctorPhoto] = useState(null);
  const [doctorDocuments, setDoctorDocuments] = useState([]);
  
  // Patient state
  const [patientProfile, setPatientProfile] = useState(initialPatientProfile);
  const [patientPhoto, setPatientPhoto] = useState(null);
  const [patientDocuments, setPatientDocuments] = useState([]);
  
  // Common state
  const [privacy, setPrivacy] = useState(initialPrivacy);

  function handleDocChange(e) {
    const files = Array.from(e.target.files || []);
    if (isDoctor) {
      setDoctorDocuments((prev) => [...prev, ...files]);
    } else {
      setPatientDocuments((prev) => [...prev, ...files]);
    }
  }

  // Doctor Profile Component
  const DoctorProfile = () => (
    <div className="mt-8 grid gap-8">
      {/* Basic Information */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Basic Information</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input 
            label="Full Name" 
            value={doctorProfile.name} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, name: e.target.value })} 
          />
          <Input 
            label="Email" 
            type="email"
            value={doctorProfile.email} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, email: e.target.value })} 
          />
          <Input 
            label="Phone" 
            value={doctorProfile.phone} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, phone: e.target.value })} 
          />
          <Input 
            label="License Number" 
            value={doctorProfile.licenseNumber} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, licenseNumber: e.target.value })} 
          />
        </div>
      </section>

      {/* Professional Information */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Professional Information</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input 
            label="Hospital/Clinic" 
            value={doctorProfile.hospital} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, hospital: e.target.value })} 
          />
          <Input 
            label="Department" 
            value={doctorProfile.department} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, department: e.target.value })} 
          />
          <Input 
            label="Years of Experience" 
            type="number"
            value={doctorProfile.experience} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, experience: e.target.value })} 
          />
          <Input 
            label="Consultation Fee ($)" 
            type="number"
            value={doctorProfile.consultationFee} 
            onChange={(e) => setDoctorProfile({ ...doctorProfile, consultationFee: e.target.value })} 
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Specialties</label>
          <div className="flex flex-wrap gap-2">
            {['Cardiology', 'Neurology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Psychiatry', 'Oncology', 'Gastroenterology'].map(specialty => (
              <label key={specialty} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={doctorProfile.specialties.includes(specialty)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDoctorProfile({ ...doctorProfile, specialties: [...doctorProfile.specialties, specialty] });
                    } else {
                      setDoctorProfile({ ...doctorProfile, specialties: doctorProfile.specialties.filter(s => s !== specialty) });
                    }
                  }}
                  className="rounded"
                />
                <span className="text-sm">{specialty}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea 
            rows={4}
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
            value={doctorProfile.bio}
            onChange={(e) => setDoctorProfile({ ...doctorProfile, bio: e.target.value })}
            placeholder="Tell patients about your background and approach..."
          />
        </div>
      </section>

      {/* Availability Schedule */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Availability Schedule</h2>
        </div>
        <div className="space-y-4">
          {Object.entries(doctorProfile.availability).map(([day, schedule]) => (
            <div key={day} className="flex items-center gap-4">
              <div className="w-24">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={schedule.available}
                    onChange={(e) => setDoctorProfile({
                      ...doctorProfile,
                      availability: {
                        ...doctorProfile.availability,
                        [day]: { ...schedule, available: e.target.checked }
                      }
                    })}
                    className="rounded"
                  />
                  <span className="text-sm font-medium capitalize">{day}</span>
                </label>
              </div>
              {schedule.available && (
                <div className="flex items-center gap-2">
                  <input 
                    type="time" 
                    value={schedule.start}
                    onChange={(e) => setDoctorProfile({
                      ...doctorProfile,
                      availability: {
                        ...doctorProfile.availability,
                        [day]: { ...schedule, start: e.target.value }
                      }
                    })}
                    className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
                  />
                  <span className="text-sm">to</span>
                  <input 
                    type="time" 
                    value={schedule.end}
                    onChange={(e) => setDoctorProfile({
                      ...doctorProfile,
                      availability: {
                        ...doctorProfile.availability,
                        [day]: { ...schedule, end: e.target.value }
                      }
                    })}
                    className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Profile Photo */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden flex items-center justify-center">
            {doctorPhoto ? (
              <img src={URL.createObjectURL(doctorPhoto)} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs opacity-60">No photo</span>
            )}
          </div>
          <label className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
            Upload
            <input type="file" accept="image/*" className="hidden" onChange={(e) => setDoctorPhoto(e.target.files?.[0] || null)} />
          </label>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl">
            <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Professional Documents</h2>
        </div>
        <div>
          <label className="inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 px-4 py-3 text-sm cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-400 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Upload Certificates & Documents
            <input type="file" multiple accept=".pdf,image/*" className="hidden" onChange={handleDocChange} />
          </label>
          <ul className="mt-4 space-y-2 text-sm">
            {doctorDocuments.map((f, idx) => (
              <li key={idx} className="flex items-center justify-between rounded-md border border-black/10 dark:border-white/15 px-3 py-2">
                <span className="truncate max-w-[70%]">{f.name}</span>
                <span className="opacity-60 text-xs">{Math.round((f.size || 0)/1024)} KB</span>
              </li>
            ))}
            {doctorDocuments.length === 0 && <li className="text-black/60 dark:text-white/60">No documents uploaded.</li>}
          </ul>
        </div>
      </section>
    </div>
  );

  // Patient Profile Component
  const PatientProfile = () => (
      <div className="mt-8 grid gap-8">
      {/* Demographics */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Demographics</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
          <Input 
            label="Full Name" 
            value={patientProfile.name} 
            onChange={(e) => setPatientProfile({ ...patientProfile, name: e.target.value })} 
          />
            <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input 
              type="date" 
              className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" 
              value={patientProfile.dob} 
              onChange={(e) => setPatientProfile({ ...patientProfile, dob: e.target.value })} 
            />
            </div>
            <Select
              label="Gender"
            value={patientProfile.gender}
            onChange={(e) => setPatientProfile({ ...patientProfile, gender: e.target.value })}
              options={[
                { value: "", label: "Select…" },
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "nonbinary", label: "Non-binary" },
                { value: "other", label: "Other" }
              ]}
            />
          <Input 
            label="Phone" 
            value={patientProfile.phone} 
            onChange={(e) => setPatientProfile({ ...patientProfile, phone: e.target.value })} 
          />
          <Input 
            label="Address" 
            value={patientProfile.address} 
            onChange={(e) => setPatientProfile({ ...patientProfile, address: e.target.value })} 
          />
          <Select
            label="Blood Type"
            value={patientProfile.bloodType}
            onChange={(e) => setPatientProfile({ ...patientProfile, bloodType: e.target.value })}
            options={[
              { value: "", label: "Select…" },
              { value: "A+", label: "A+" },
              { value: "A-", label: "A-" },
              { value: "B+", label: "B+" },
              { value: "B-", label: "B-" },
              { value: "AB+", label: "AB+" },
              { value: "AB-", label: "AB-" },
              { value: "O+", label: "O+" },
              { value: "O-", label: "O-" }
            ]}
          />
          </div>
        </section>

      {/* Emergency Contact */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-xl">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Emergency Contact</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input 
            label="Emergency Contact Name" 
            value={patientProfile.emergencyContact} 
            onChange={(e) => setPatientProfile({ ...patientProfile, emergencyContact: e.target.value })} 
          />
          <Input 
            label="Emergency Contact Phone" 
            value={patientProfile.emergencyPhone} 
            onChange={(e) => setPatientProfile({ ...patientProfile, emergencyPhone: e.target.value })} 
          />
        </div>
      </section>

      {/* Medical History */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Medical History</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Allergies</label>
            <textarea 
              rows={3}
              className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
              value={patientProfile.allergies.join(', ')}
              onChange={(e) => setPatientProfile({ ...patientProfile, allergies: e.target.value.split(',').map(a => a.trim()).filter(a => a) })}
              placeholder="List any allergies (comma separated)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Current Medications</label>
            <textarea 
              rows={3}
              className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
              value={patientProfile.currentMedications.join(', ')}
              onChange={(e) => setPatientProfile({ ...patientProfile, currentMedications: e.target.value.split(',').map(m => m.trim()).filter(m => m) })}
              placeholder="List current medications (comma separated)"
            />
          </div>
        </div>
      </section>

      {/* Family History */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Family History</h2>
          </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(patientProfile.familyHistory).map(([condition, hasCondition]) => (
            <Checkbox
              key={condition}
              label={condition.charAt(0).toUpperCase() + condition.slice(1).replace(/([A-Z])/g, ' $1')}
              checked={hasCondition}
              onChange={(e) => setPatientProfile({
                ...patientProfile,
                familyHistory: { ...patientProfile.familyHistory, [condition]: e.target.checked }
              })}
            />
          ))}
        </div>
        </section>

      {/* Lifestyle Factors */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
            <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Lifestyle Factors</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Select
              label="Smoking"
            value={patientProfile.lifestyle.smoking}
            onChange={(e) => setPatientProfile({ ...patientProfile, lifestyle: { ...patientProfile.lifestyle, smoking: e.target.value } })}
              options={[
              { value: "", label: "Select…" },
              { value: "never", label: "Never" },
                { value: "former", label: "Former" },
              { value: "current", label: "Current" }
              ]}
            />
            <Select
              label="Alcohol"
            value={patientProfile.lifestyle.alcohol}
            onChange={(e) => setPatientProfile({ ...patientProfile, lifestyle: { ...patientProfile.lifestyle, alcohol: e.target.value } })}
              options={[
              { value: "", label: "Select…" },
              { value: "never", label: "Never" },
                { value: "social", label: "Social" },
                { value: "regular", label: "Regular" }
              ]}
            />
            <Select
              label="Exercise"
            value={patientProfile.lifestyle.exercise}
            onChange={(e) => setPatientProfile({ ...patientProfile, lifestyle: { ...patientProfile.lifestyle, exercise: e.target.value } })}
              options={[
              { value: "", label: "Select…" },
                { value: "none", label: "None" },
                { value: "light", label: "Light" },
                { value: "moderate", label: "Moderate" },
                { value: "intense", label: "Intense" }
              ]}
            />
          </div>
        </section>

      {/* Insurance Information */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Insurance Information</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input 
            label="Insurance Provider" 
            value={patientProfile.insurance.provider} 
            onChange={(e) => setPatientProfile({ 
              ...patientProfile, 
              insurance: { ...patientProfile.insurance, provider: e.target.value } 
            })} 
          />
          <Input 
            label="Policy Number" 
            value={patientProfile.insurance.policyNumber} 
            onChange={(e) => setPatientProfile({ 
              ...patientProfile, 
              insurance: { ...patientProfile.insurance, policyNumber: e.target.value } 
            })} 
          />
          <Input 
            label="Group Number" 
            value={patientProfile.insurance.groupNumber} 
            onChange={(e) => setPatientProfile({ 
              ...patientProfile, 
              insurance: { ...patientProfile.insurance, groupNumber: e.target.value } 
            })} 
          />
          <div>
            <label className="block text-sm font-medium">Expiry Date</label>
            <input 
              type="date" 
              className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" 
              value={patientProfile.insurance.expiryDate} 
              onChange={(e) => setPatientProfile({ 
                ...patientProfile, 
                insurance: { ...patientProfile.insurance, expiryDate: e.target.value } 
              })} 
            />
          </div>
        </div>
      </section>

      {/* Profile Photo */}
      <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden flex items-center justify-center">
            {patientPhoto ? (
              <img src={URL.createObjectURL(patientPhoto)} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs opacity-60">No photo</span>
            )}
            </div>
            <label className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
              Upload
            <input type="file" accept="image/*" className="hidden" onChange={(e) => setPatientPhoto(e.target.files?.[0] || null)} />
            </label>
          </div>
        </section>

      {/* Medical Documents */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl">
            <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Medical Documents</h2>
          </div>
          <div>
            <label className="inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 px-4 py-3 text-sm cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-400 transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            Upload Medical Records & Documents
              <input type="file" multiple accept=".pdf,image/*" className="hidden" onChange={handleDocChange} />
            </label>
            <ul className="mt-4 space-y-2 text-sm">
            {patientDocuments.map((f, idx) => (
                <li key={idx} className="flex items-center justify-between rounded-md border border-black/10 dark:border-white/15 px-3 py-2">
                  <span className="truncate max-w-[70%]">{f.name}</span>
                  <span className="opacity-60 text-xs">{Math.round((f.size || 0)/1024)} KB</span>
                </li>
              ))}
            {patientDocuments.length === 0 && <li className="text-black/60 dark:text-white/60">No documents uploaded.</li>}
            </ul>
          </div>
        </section>

      {/* Privacy Settings */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Privacy Settings</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <Checkbox
              label="Share demographics with doctors"
              checked={privacy.shareDemographics}
            onChange={(e) => setPrivacy({ ...privacy, shareDemographics: e.target.checked })}
            />
            <Checkbox
              label="Share family history"
              checked={privacy.shareFamily}
            onChange={(e) => setPrivacy({ ...privacy, shareFamily: e.target.checked })}
            />
            <Checkbox
              label="Share lifestyle data"
              checked={privacy.shareLifestyle}
            onChange={(e) => setPrivacy({ ...privacy, shareLifestyle: e.target.checked })}
            />
            <Checkbox
              label="Share uploaded documents"
              checked={privacy.shareDocuments}
            onChange={(e) => setPrivacy({ ...privacy, shareDocuments: e.target.checked })}
            />
          </div>
          <p className="mt-3 text-xs text-black/60 dark:text-white/60">These preferences control visibility to your assigned doctors only.</p>
        </section>
    </div>
  );

  return (
    <RequireAuth>
      <div className="py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {isDoctor ? "Doctor Profile" : "Patient Profile"}
          </h1>
          {user?.email && user?.role && (
            <p className="text-black/70 dark:text-white/70">
              Logged in as {user.email} · Role: <span className="capitalize">{user.role}</span>
            </p>
          )}
        </div>

        {/* Role-specific profile content */}
        {isDoctor ? <DoctorProfile /> : <PatientProfile />}

        {/* Save buttons */}
        <div className="flex justify-end gap-4 pt-8">
          <Button 
            variant="outline" 
            className="px-6 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            onClick={() => {
              const data = isDoctor 
                ? { doctorProfile, doctorPhoto, doctorDocuments, privacy }
                : { patientProfile, patientPhoto, patientDocuments, privacy };
              console.log("Save Draft:", data);
            }}
          >
            Save Draft
          </Button>
          <Button 
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => {
              const data = isDoctor 
                ? { doctorProfile, doctorPhoto, doctorDocuments, privacy }
                : { patientProfile, patientPhoto, patientDocuments, privacy };
              console.log("Save Changes:", data);
            }}
          >
            Save Changes
          </Button>
      </div>
    </div>
    </RequireAuth>
  );
}