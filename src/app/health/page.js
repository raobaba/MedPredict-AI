"use client";

import { useState, useEffect } from "react";
import RequireAuth from "../../components/RequireAuth";
import { useAuth } from "../../components/AuthContext";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

// Mock static data for demonstration
const mockHealthData = {
  bloodPressure: [
    { date: "2024-01-01", systolic: 120, diastolic: 80, timestamp: "08:00" },
    { date: "2024-01-02", systolic: 118, diastolic: 78, timestamp: "08:15" },
    { date: "2024-01-03", systolic: 122, diastolic: 82, timestamp: "07:45" },
    { date: "2024-01-04", systolic: 119, diastolic: 79, timestamp: "08:30" },
    { date: "2024-01-05", systolic: 121, diastolic: 81, timestamp: "08:00" },
    { date: "2024-01-06", systolic: 117, diastolic: 77, timestamp: "08:20" },
    { date: "2024-01-07", systolic: 123, diastolic: 83, timestamp: "07:50" },
  ],
  glucose: [
    { date: "2024-01-01", value: 95, timestamp: "09:00", type: "fasting" },
    { date: "2024-01-02", value: 140, timestamp: "13:00", type: "post-meal" },
    { date: "2024-01-03", value: 92, timestamp: "09:15", type: "fasting" },
    { date: "2024-01-04", value: 135, timestamp: "13:30", type: "post-meal" },
    { date: "2024-01-05", value: 98, timestamp: "08:45", type: "fasting" },
    { date: "2024-01-06", value: 142, timestamp: "13:15", type: "post-meal" },
    { date: "2024-01-07", value: 94, timestamp: "09:00", type: "fasting" },
  ],
  sleep: [
    { date: "2024-01-01", hours: 7.5, quality: "good" },
    { date: "2024-01-02", hours: 6.8, quality: "fair" },
    { date: "2024-01-03", hours: 8.2, quality: "excellent" },
    { date: "2024-01-04", hours: 7.0, quality: "good" },
    { date: "2024-01-05", hours: 6.5, quality: "poor" },
    { date: "2024-01-06", hours: 7.8, quality: "good" },
    { date: "2024-01-07", hours: 8.0, quality: "excellent" },
  ],
  steps: [
    { date: "2024-01-01", count: 8500 },
    { date: "2024-01-02", count: 12300 },
    { date: "2024-01-03", count: 6800 },
    { date: "2024-01-04", count: 10200 },
    { date: "2024-01-05", count: 9500 },
    { date: "2024-01-06", count: 11800 },
    { date: "2024-01-07", count: 13200 },
  ],
  heartRate: [
    { date: "2024-01-01", resting: 68, max: 145, avg: 82 },
    { date: "2024-01-02", resting: 70, max: 152, avg: 85 },
    { date: "2024-01-03", resting: 66, max: 140, avg: 79 },
    { date: "2024-01-04", resting: 69, max: 148, avg: 83 },
    { date: "2024-01-05", resting: 71, max: 155, avg: 87 },
    { date: "2024-01-06", resting: 67, max: 142, avg: 80 },
    { date: "2024-01-07", resting: 68, max: 150, avg: 84 },
  ]
};

const wearableDevices = [
  { id: 1, name: "Apple Watch Series 9", type: "apple", connected: true, lastSync: "2 mins ago", battery: 85 },
  { id: 2, name: "Fitbit Charge 5", type: "fitbit", connected: true, lastSync: "5 mins ago", battery: 72 },
  { id: 3, name: "Google Fit", type: "google", connected: false, lastSync: "Never", battery: null },
];

// Icon Components
const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SleepIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const DropletIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 14.25c0-1.125.375-2.25 1.125-3 .75-.75 1.875-1.125 3-1.125s2.25.375 3 1.125c.75.75 1.125 1.875 1.125 3 0 1.125-.375 2.25-1.125 3-.75.75-1.875 1.125-3 1.125s-2.25-.375-3-1.125c-.75-.75-1.125-1.875-1.125-3z" />
  </svg>
);

const PressureIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l3-3 3 3v13M9 19h6M9 19l-2 2h10l-2-2" />
  </svg>
);

const DeviceIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const TrendUpIcon = () => (
  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TrendDownIcon = () => (
  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
);

export default function HealthDashboard() {
  const { user } = useAuth();
  const isDoctor = user?.role === "doctor";
  const [activeTab, setActiveTab] = useState("overview");
  const [newVital, setNewVital] = useState({
    type: "bloodPressure",
    systolic: "",
    diastolic: "",
    glucose: "",
    glucoseType: "fasting",
    sleepHours: "",
    sleepQuality: "good",
    steps: "",
    heartRate: "",
  });

  // Calculate trends and averages
  const getLatestValue = (data, key) => {
    if (!data || data.length === 0) return null;
    return data[data.length - 1][key];
  };

  const getAverage = (data, key) => {
    if (!data || data.length === 0) return 0;
    const sum = data.reduce((acc, item) => acc + item[key], 0);
    return (sum / data.length).toFixed(1);
  };

  const getTrend = (data, key) => {
    if (!data || data.length < 2) return "stable";
    const recent = data.slice(-3);
    const avg = recent.reduce((acc, item) => acc + item[key], 0) / recent.length;
    const previous = data.slice(-6, -3);
    if (previous.length === 0) return "stable";
    const prevAvg = previous.reduce((acc, item) => acc + item[key], 0) / previous.length;
    
    if (avg > prevAvg * 1.05) return "up";
    if (avg < prevAvg * 0.95) return "down";
    return "stable";
  };

  const handleVitalSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to MongoDB
    console.log("Saving vital:", newVital);
    // Reset form
    setNewVital({
      type: "bloodPressure",
      systolic: "",
      diastolic: "",
      glucose: "",
      glucoseType: "fasting",
      sleepHours: "",
      sleepQuality: "good",
      steps: "",
      heartRate: "",
    });
  };

  const syncDevice = (deviceId) => {
    // Mock sync function
    console.log(`Syncing device ${deviceId}`);
  };

  return (
    <RequireAuth>
      <div className="py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {isDoctor ? "Patient Health Monitoring" : "Health Tracker Dashboard"}
          </h1>
          <p className="text-black/70 dark:text-white/70">
            {isDoctor 
              ? "Monitor patient vitals, review health trends, and manage patient care"
              : "Monitor your vitals, track trends, and sync with wearable devices"
            }
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            {(isDoctor ? [
              { id: "overview", label: "Patient Overview" },
              { id: "vitals", label: "Patient Vitals" },
              { id: "alerts", label: "Health Alerts" },
              { id: "trends", label: "Health Trends" },
            ] : [
              { id: "overview", label: "Overview" },
              { id: "vitals", label: "Log Vitals" },
              { id: "devices", label: "Devices" },
              { id: "trends", label: "Trends" },
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Blood Pressure */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-xl">
                    <PressureIcon />
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrend(mockHealthData.bloodPressure, "systolic") === "up" && <TrendUpIcon />}
                    {getTrend(mockHealthData.bloodPressure, "systolic") === "down" && <TrendDownIcon />}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Blood Pressure</h3>
                <p className="text-2xl font-bold">
                  {getLatestValue(mockHealthData.bloodPressure, "systolic")}/
                  {getLatestValue(mockHealthData.bloodPressure, "diastolic")}
                </p>
                <p className="text-xs text-gray-500 mt-1">mmHg</p>
              </div>

              {/* Glucose */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                    <DropletIcon />
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrend(mockHealthData.glucose, "value") === "up" && <TrendUpIcon />}
                    {getTrend(mockHealthData.glucose, "value") === "down" && <TrendDownIcon />}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Glucose</h3>
                <p className="text-2xl font-bold">{getLatestValue(mockHealthData.glucose, "value")}</p>
                <p className="text-xs text-gray-500 mt-1">mg/dL</p>
              </div>

              {/* Sleep */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                    <SleepIcon />
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrend(mockHealthData.sleep, "hours") === "up" && <TrendUpIcon />}
                    {getTrend(mockHealthData.sleep, "hours") === "down" && <TrendDownIcon />}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Sleep</h3>
                <p className="text-2xl font-bold">{getLatestValue(mockHealthData.sleep, "hours")}h</p>
                <p className="text-xs text-gray-500 mt-1">Last night</p>
              </div>

              {/* Steps */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl">
                    <ActivityIcon />
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrend(mockHealthData.steps, "count") === "up" && <TrendUpIcon />}
                    {getTrend(mockHealthData.steps, "count") === "down" && <TrendDownIcon />}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Steps</h3>
                <p className="text-2xl font-bold">{getLatestValue(mockHealthData.steps, "count").toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">Today</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                      <PressureIcon />
                    </div>
                    <div>
                      <p className="font-medium">Blood Pressure Logged</p>
                      <p className="text-sm text-gray-500">120/80 mmHg</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                      <ActivityIcon />
                    </div>
                    <div>
                      <p className="font-medium">Steps Goal Reached</p>
                      <p className="text-sm text-gray-500">10,000 steps completed</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <DeviceIcon />
                    </div>
                    <div>
                      <p className="font-medium">Apple Watch Synced</p>
                      <p className="text-sm text-gray-500">Latest data imported</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Log Vitals Tab */}
        {activeTab === "vitals" && (
          <div className="max-w-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
              <h3 className="text-lg font-semibold mb-6">
                {isDoctor ? "Patient Vitals Overview" : "Log New Vital"}
              </h3>
              
              {isDoctor ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Recent Patient Vitals</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">View detailed vitals for all your patients</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Health Trends</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">Monitor patient health patterns over time</p>
                    </div>
                  </div>
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">Select a patient from the Doctor Portal to view their detailed vitals</p>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Go to Doctor Portal
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleVitalSubmit} className="space-y-6">
                <Select
                  label="Vital Type"
                  value={newVital.type}
                  onChange={(e) => setNewVital({ ...newVital, type: e.target.value })}
                  options={[
                    { value: "bloodPressure", label: "Blood Pressure" },
                    { value: "glucose", label: "Blood Glucose" },
                    { value: "sleep", label: "Sleep" },
                    { value: "steps", label: "Steps" },
                    { value: "heartRate", label: "Heart Rate" },
                  ]}
                />

                {newVital.type === "bloodPressure" && (
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Systolic (mmHg)"
                      type="number"
                      value={newVital.systolic}
                      onChange={(e) => setNewVital({ ...newVital, systolic: e.target.value })}
                      placeholder="120"
                    />
                    <Input
                      label="Diastolic (mmHg)"
                      type="number"
                      value={newVital.diastolic}
                      onChange={(e) => setNewVital({ ...newVital, diastolic: e.target.value })}
                      placeholder="80"
                    />
                  </div>
                )}

                {newVital.type === "glucose" && (
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Glucose Level (mg/dL)"
                      type="number"
                      value={newVital.glucose}
                      onChange={(e) => setNewVital({ ...newVital, glucose: e.target.value })}
                      placeholder="95"
                    />
                    <Select
                      label="Measurement Type"
                      value={newVital.glucoseType}
                      onChange={(e) => setNewVital({ ...newVital, glucoseType: e.target.value })}
                      options={[
                        { value: "fasting", label: "Fasting" },
                        { value: "post-meal", label: "Post-meal" },
                        { value: "random", label: "Random" },
                      ]}
                    />
                  </div>
                )}

                {newVital.type === "sleep" && (
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Sleep Hours"
                      type="number"
                      step="0.1"
                      value={newVital.sleepHours}
                      onChange={(e) => setNewVital({ ...newVital, sleepHours: e.target.value })}
                      placeholder="7.5"
                    />
                    <Select
                      label="Sleep Quality"
                      value={newVital.sleepQuality}
                      onChange={(e) => setNewVital({ ...newVital, sleepQuality: e.target.value })}
                      options={[
                        { value: "excellent", label: "Excellent" },
                        { value: "good", label: "Good" },
                        { value: "fair", label: "Fair" },
                        { value: "poor", label: "Poor" },
                      ]}
                    />
                  </div>
                )}

                {newVital.type === "steps" && (
                  <Input
                    label="Step Count"
                    type="number"
                    value={newVital.steps}
                    onChange={(e) => setNewVital({ ...newVital, steps: e.target.value })}
                    placeholder="10000"
                  />
                )}

                {newVital.type === "heartRate" && (
                  <Input
                    label="Heart Rate (BPM)"
                    type="number"
                    value={newVital.heartRate}
                    onChange={(e) => setNewVital({ ...newVital, heartRate: e.target.value })}
                    placeholder="72"
                  />
                )}

                <Button type="submit" className="w-full">
                  Log Vital
                </Button>
              </form>
              )}
            </div>
          </div>
        )}

        {/* Devices Tab - Patient Only */}
        {!isDoctor && activeTab === "devices" && (
          <div className="space-y-6">
            <div className="grid gap-6">
              {wearableDevices.map((device) => (
                <div
                  key={device.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        device.connected 
                          ? "bg-green-100 dark:bg-green-900/50" 
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}>
                        <DeviceIcon />
                      </div>
                      <div>
                        <h3 className="font-semibold">{device.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            device.connected
                              ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400"
                              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          }`}>
                            {device.connected ? "Connected" : "Disconnected"}
                          </span>
                          <span className="text-sm text-gray-500">
                            Last sync: {device.lastSync}
                          </span>
                          {device.battery && (
                            <span className="text-sm text-gray-500">
                              Battery: {device.battery}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {device.connected ? (
                        <Button
                          onClick={() => syncDevice(device.id)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Sync Now
                        </Button>
                      ) : (
                        <Button
                          onClick={() => syncDevice(device.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Connect
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Device */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-dashed border-gray-300 dark:border-gray-600">
              <div className="text-center">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl inline-block mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Add New Device</h3>
                <p className="text-gray-500 mb-4">Connect your wearable device to automatically sync health data</p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Add Device
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Trends Tab */}
        {activeTab === "trends" && (
          <div className="space-y-6">
            {/* Blood Pressure Trend */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Blood Pressure Trend (7 Days)</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Systolic/Diastolic (mmHg)</span>
                  <span>Average: {getAverage(mockHealthData.bloodPressure, "systolic")}/{getAverage(mockHealthData.bloodPressure, "diastolic")}</span>
                </div>
                <div className="space-y-2">
                  {mockHealthData.bloodPressure.map((reading, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm">{reading.date}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono">{reading.systolic}/{reading.diastolic}</span>
                        <span className="text-xs text-gray-500">{reading.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glucose Trend */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Blood Glucose Trend (7 Days)</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Glucose Level (mg/dL)</span>
                  <span>Average: {getAverage(mockHealthData.glucose, "value")} mg/dL</span>
                </div>
                <div className="space-y-2">
                  {mockHealthData.glucose.map((reading, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm">{reading.date}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono">{reading.value}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          reading.type === "fasting" 
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-400"
                        }`}>
                          {reading.type}
                        </span>
                        <span className="text-xs text-gray-500">{reading.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sleep & Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sleep Trend */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Sleep Pattern</h3>
                <div className="space-y-3">
                  {mockHealthData.sleep.map((sleep, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <span className="text-sm">{sleep.date}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{sleep.hours}h</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          sleep.quality === "excellent" 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400"
                            : sleep.quality === "good"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400"
                            : sleep.quality === "fair"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400"
                        }`}>
                          {sleep.quality}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Trend */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Daily Steps</h3>
                <div className="space-y-3">
                  {mockHealthData.steps.map((step, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <span className="text-sm">{step.date}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{step.count.toLocaleString()}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          step.count >= 10000 ? "bg-green-500" : step.count >= 7500 ? "bg-yellow-500" : "bg-red-500"
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health Alerts Tab - Doctor Only */}
        {isDoctor && activeTab === "alerts" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Critical Alerts */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-red-200 dark:border-red-800 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-xl">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">Critical Alerts</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-red-800 dark:text-red-200">High Blood Pressure</p>
                        <p className="text-sm text-red-600 dark:text-red-400">Patient: John Smith • 160/100 mmHg</p>
                      </div>
                      <span className="text-xs text-red-500">2 min ago</span>
                    </div>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-red-800 dark:text-red-200">Low Oxygen Saturation</p>
                        <p className="text-sm text-red-600 dark:text-red-400">Patient: Sarah Johnson • 88% SpO2</p>
                      </div>
                      <span className="text-xs text-red-500">15 min ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Alerts */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl">
                    <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">Warning Alerts</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-yellow-800 dark:text-yellow-200">Elevated Glucose</p>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Patient: Michael Brown • 180 mg/dL</p>
                      </div>
                      <span className="text-xs text-yellow-500">1 hour ago</span>
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-yellow-800 dark:text-yellow-200">Irregular Heart Rate</p>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Patient: Emily Davis • 110 bpm</p>
                      </div>
                      <span className="text-xs text-yellow-500">2 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient List with Health Status */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">All Patients Health Status</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Patient</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Last Vitals</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Last Update</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            JS
                          </div>
                          <div>
                            <p className="font-medium">John Smith</p>
                            <p className="text-sm text-gray-500">ID: 12345</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm">
                          <p>BP: 160/100</p>
                          <p>HR: 95 bpm</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200">
                          Critical
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">2 min ago</td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            SJ
                          </div>
                          <div>
                            <p className="font-medium">Sarah Johnson</p>
                            <p className="text-sm text-gray-500">ID: 12346</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm">
                          <p>BP: 120/80</p>
                          <p>HR: 72 bpm</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200">
                          Stable
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">1 hour ago</td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </RequireAuth>
  );
}
