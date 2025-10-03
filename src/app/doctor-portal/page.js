"use client";
import { useState, useEffect, useRef } from "react";
import RequireAuth from "../../components/RequireAuth";
import { useAuth } from "../../components/AuthContext";
import { useSocket } from "../../components/SocketContext";
import { useNotifications } from "../../components/NotificationContext";
import Button from "../../components/Button";
import Input from "../../components/Input";
import VideoCall from "../../components/VideoCall";
import VitalsMonitor from "../../components/VitalsMonitor";

// Mock data for patients
const mockPatients = [
  {
    id: "1",
    name: "John Smith",
    age: 45,
    gender: "Male",
    lastVisit: "2024-01-15",
    riskScore: 72,
    status: "High Risk",
    vitals: {
      bloodPressure: "140/90",
      heartRate: 95,
      temperature: 98.6,
      oxygenSaturation: 96
    },
    conditions: ["Hypertension", "Diabetes Type 2"],
    lastAlert: "Blood pressure elevated - 2 hours ago"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    lastVisit: "2024-01-14",
    riskScore: 45,
    status: "Moderate Risk",
    vitals: {
      bloodPressure: "120/80",
      heartRate: 72,
      temperature: 98.2,
      oxygenSaturation: 98
    },
    conditions: ["Asthma"],
    lastAlert: "None"
  },
  {
    id: "3",
    name: "Michael Brown",
    age: 58,
    gender: "Male",
    lastVisit: "2024-01-13",
    riskScore: 85,
    status: "Critical",
    vitals: {
      bloodPressure: "160/100",
      heartRate: 110,
      temperature: 99.1,
      oxygenSaturation: 92
    },
    conditions: ["Heart Disease", "Hypertension", "Diabetes Type 2"],
    lastAlert: "Critical vitals detected - 30 minutes ago"
  },
  {
    id: "4",
    name: "Emily Davis",
    age: 28,
    gender: "Female",
    lastVisit: "2024-01-12",
    riskScore: 25,
    status: "Low Risk",
    vitals: {
      bloodPressure: "110/70",
      heartRate: 65,
      temperature: 98.4,
      oxygenSaturation: 99
    },
    conditions: [],
    lastAlert: "None"
  }
];

export default function DoctorPortal() {
  const { user } = useAuth();
  const { addNotification } = useNotifications();
  const [patients, setPatients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showVitalsMonitor, setShowVitalsMonitor] = useState(false);
  const notificationsAdded = useRef(false);

  // Add doctor-specific notifications
  useEffect(() => {
    if (user?.role === "doctor" && !notificationsAdded.current) {
      notificationsAdded.current = true;
      
      // Add critical patient alert
      const criticalPatients = patients.filter(p => p.status === "Critical");
      if (criticalPatients.length > 0) {
        addNotification({
          id: Date.now(),
          type: "vital_alert",
          title: "Critical Patient Alert",
          message: `${criticalPatients.length} patient(s) require immediate attention`,
          timestamp: new Date(),
          priority: "high"
        });
      }

      // Add follow-up reminder
      setTimeout(() => {
        addNotification({
          id: Date.now() + 1,
          type: "doctor_followup",
          title: "Follow-up Reminder",
          message: "You have 3 patients scheduled for follow-up this week",
          timestamp: new Date(),
          priority: "medium"
        });
      }, 3000);
    }
  }, [user, patients, addNotification]);

  // Filter patients based on search and status
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.conditions.some(condition => 
                           condition.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesStatus = filterStatus === "all" || 
                         patient.status.toLowerCase().replace(" ", "") === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      case "high risk": return "text-orange-600 bg-orange-50 border-orange-200";
      case "moderate risk": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low risk": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <RequireAuth>
      <div className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Doctor Portal
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Welcome back, {user?.name}. Monitor your patients and provide telemedicine care.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Patients</p>
                <p className="text-2xl font-bold">{patients.length}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Critical Cases</p>
                <p className="text-2xl font-bold text-red-600">
                  {patients.filter(p => p.status === "Critical").length}
                </p>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-xl">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">High Risk</p>
                <p className="text-2xl font-bold text-orange-600">
                  {patients.filter(p => p.status === "High Risk").length}
                </p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Alerts</p>
                <p className="text-2xl font-bold text-purple-600">
                  {patients.filter(p => p.lastAlert !== "None").length}
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5a15 15 0 01-1.44-7.5 15 15 0 011.44-7.5M4.5 19.5L9 15l-4.5-4.5M4.5 19.5L12 12l-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search patients by name or condition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="all">All Status</option>
                <option value="critical">Critical</option>
                <option value="high risk">High Risk</option>
                <option value="moderate risk">Moderate Risk</option>
                <option value="low risk">Low Risk</option>
              </select>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPatient(patient)}
            >
              {/* Patient Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{patient.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {patient.age} years old • {patient.gender}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(patient.status)}`}>
                  {patient.status}
                </div>
              </div>

              {/* Risk Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Risk Score</span>
                  <span className={`text-lg font-bold ${getRiskScoreColor(patient.riskScore)}`}>
                    {patient.riskScore}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      patient.riskScore >= 80 ? 'bg-red-500' :
                      patient.riskScore >= 60 ? 'bg-orange-500' :
                      patient.riskScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${patient.riskScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Vitals */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">BP</p>
                  <p className="text-sm font-semibold">{patient.vitals.bloodPressure}</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">HR</p>
                  <p className="text-sm font-semibold">{patient.vitals.heartRate} bpm</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Temp</p>
                  <p className="text-sm font-semibold">{patient.vitals.temperature}°F</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">SpO2</p>
                  <p className="text-sm font-semibold">{patient.vitals.oxygenSaturation}%</p>
                </div>
              </div>

              {/* Conditions */}
              <div className="mb-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Conditions</p>
                <div className="flex flex-wrap gap-1">
                  {patient.conditions.length > 0 ? (
                    patient.conditions.map((condition, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                      >
                        {condition}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500">No conditions</span>
                  )}
                </div>
              </div>

              {/* Last Alert */}
              {patient.lastAlert !== "None" && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium">Latest Alert</p>
                  <p className="text-sm text-red-800 dark:text-red-200">{patient.lastAlert}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  className="flex-1 px-3 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPatient(patient);
                    setShowVideoCall(true);
                  }}
                >
                  Video Call
                </Button>
                <Button
                  className="flex-1 px-3 py-2 text-xs bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPatient(patient);
                    setShowVitalsMonitor(true);
                  }}
                >
                  Vitals
                </Button>
                <Button
                  className="flex-1 px-3 py-2 text-xs bg-green-600 hover:bg-green-700 text-white rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPatient(patient);
                    setShowNotes(true);
                  }}
                >
                  Notes
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Patient Detail Modal */}
        {selectedPatient && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{selectedPatient.name}</h2>
                  <button
                    onClick={() => setSelectedPatient(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Patient Details Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Patient Information</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Age:</span> {selectedPatient.age} years</p>
                      <p><span className="font-medium">Gender:</span> {selectedPatient.gender}</p>
                      <p><span className="font-medium">Last Visit:</span> {selectedPatient.lastVisit}</p>
                      <p><span className="font-medium">Risk Score:</span> 
                        <span className={`ml-2 font-bold ${getRiskScoreColor(selectedPatient.riskScore)}`}>
                          {selectedPatient.riskScore}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Vitals */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Current Vitals</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Blood Pressure</p>
                        <p className="text-xl font-bold">{selectedPatient.vitals.bloodPressure}</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Heart Rate</p>
                        <p className="text-xl font-bold">{selectedPatient.vitals.heartRate} bpm</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
                        <p className="text-xl font-bold">{selectedPatient.vitals.temperature}°F</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Oxygen Saturation</p>
                        <p className="text-xl font-bold">{selectedPatient.vitals.oxygenSaturation}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <Button
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    onClick={() => {
                      setShowVideoCall(true);
                      setSelectedPatient(null);
                    }}
                  >
                    Start Video Call
                  </Button>
                  <Button
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    onClick={() => {
                      setShowNotes(true);
                      setSelectedPatient(null);
                    }}
                  >
                    View Medical Notes
                  </Button>
                  <Button
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                    onClick={() => setSelectedPatient(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Call Modal */}
        {showVideoCall && selectedPatient && (
          <VideoCall
            patient={selectedPatient}
            onClose={() => setShowVideoCall(false)}
          />
        )}

        {/* Vitals Monitor Modal */}
        {showVitalsMonitor && selectedPatient && (
          <VitalsMonitor
            patient={selectedPatient}
            onClose={() => setShowVitalsMonitor(false)}
          />
        )}

        {/* Notes Modal */}
        {showNotes && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Medical Notes - {selectedPatient?.name}</h2>
                  <button
                    onClick={() => setShowNotes(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold mb-2">Encrypted Notes System</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      This would integrate with MongoDB to store encrypted doctor-patient notes.
                      Notes would be encrypted using AES-256 encryption before storage.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Sample Note Entry</h3>
                    <p className="text-sm">
                      <strong>Date:</strong> 2024-01-15<br/>
                      <strong>Doctor:</strong> Dr. {user?.name}<br/>
                      <strong>Note:</strong> Patient shows elevated blood pressure readings. 
                      Recommended lifestyle changes and follow-up in 2 weeks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    onClick={() => setShowNotes(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </RequireAuth>
  );
}
