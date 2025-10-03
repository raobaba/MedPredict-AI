"use client";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function VitalsMonitor({ patient, onClose }) {
  const [vitalsHistory, setVitalsHistory] = useState([]);
  const [currentVitals, setCurrentVitals] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");

  // Mock vitals data
  useEffect(() => {
    if (patient) {
      // Generate mock historical data
      const now = new Date();
      const history = [];
      
      for (let i = 0; i < 24; i++) {
        const timestamp = new Date(now.getTime() - (i * 60 * 60 * 1000));
        history.push({
          id: i,
          timestamp,
          bloodPressure: {
            systolic: 120 + Math.floor(Math.random() * 40),
            diastolic: 80 + Math.floor(Math.random() * 20)
          },
          heartRate: 70 + Math.floor(Math.random() * 30),
          temperature: 98.0 + Math.random() * 2,
          oxygenSaturation: 95 + Math.floor(Math.random() * 5),
          riskScore: 30 + Math.floor(Math.random() * 70)
        });
      }
      
      setVitalsHistory(history.reverse());
      setCurrentVitals(history[history.length - 1]);
      
      // Generate alerts
      setAlerts([
        {
          id: 1,
          type: "high_blood_pressure",
          severity: "high",
          message: "Blood pressure elevated above normal range",
          timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000),
          value: "150/95",
          threshold: "140/90"
        },
        {
          id: 2,
          type: "low_oxygen",
          severity: "medium",
          message: "Oxygen saturation below recommended level",
          timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000),
          value: "92%",
          threshold: "95%"
        }
      ]);
    }
  }, [patient]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high": return "text-red-600 bg-red-50 border-red-200";
      case "medium": return "text-orange-600 bg-orange-50 border-orange-200";
      case "low": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-yellow-600";
    return "text-green-600";
  };

  const getVitalStatus = (type, value) => {
    // Simple thresholds for demonstration
    switch (type) {
      case "bloodPressure":
        const [systolic, diastolic] = value.split("/").map(Number);
        if (systolic > 140 || diastolic > 90) return "high";
        if (systolic < 90 || diastolic < 60) return "low";
        return "normal";
      case "heartRate":
        if (value > 100) return "high";
        if (value < 60) return "low";
        return "normal";
      case "temperature":
        if (value > 99.5) return "high";
        if (value < 97.5) return "low";
        return "normal";
      case "oxygenSaturation":
        if (value < 95) return "low";
        return "normal";
      default:
        return "normal";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "high":
        return (
          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        );
      case "low":
        return (
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  if (!patient || !currentVitals) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
          <p>Loading vitals data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Vitals Monitor - {patient.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time monitoring and historical data
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2 mb-6">
            {["1h", "6h", "24h", "7d"].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTimeRange === range
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Current Vitals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Blood Pressure</h3>
                {getStatusIcon(getVitalStatus("bloodPressure", `${currentVitals.bloodPressure.systolic}/${currentVitals.bloodPressure.diastolic}`))}
              </div>
              <p className="text-2xl font-bold">
                {currentVitals.bloodPressure.systolic}/{currentVitals.bloodPressure.diastolic}
              </p>
              <p className="text-xs text-gray-500">mmHg</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Heart Rate</h3>
                {getStatusIcon(getVitalStatus("heartRate", currentVitals.heartRate))}
              </div>
              <p className="text-2xl font-bold">{currentVitals.heartRate}</p>
              <p className="text-xs text-gray-500">bpm</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Temperature</h3>
                {getStatusIcon(getVitalStatus("temperature", currentVitals.temperature))}
              </div>
              <p className="text-2xl font-bold">{currentVitals.temperature.toFixed(1)}</p>
              <p className="text-xs text-gray-500">°F</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Oxygen Saturation</h3>
                {getStatusIcon(getVitalStatus("oxygenSaturation", currentVitals.oxygenSaturation))}
              </div>
              <p className="text-2xl font-bold">{currentVitals.oxygenSaturation}</p>
              <p className="text-xs text-gray-500">%</p>
            </div>
          </div>

          {/* Risk Score */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Risk Assessment Score</h3>
              <span className={`text-3xl font-bold ${getRiskScoreColor(currentVitals.riskScore)}`}>
                {currentVitals.riskScore}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${
                  currentVitals.riskScore >= 80 ? 'bg-red-500' :
                  currentVitals.riskScore >= 60 ? 'bg-orange-500' :
                  currentVitals.riskScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${currentVitals.riskScore}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {currentVitals.riskScore >= 80 ? 'Critical Risk' :
               currentVitals.riskScore >= 60 ? 'High Risk' :
               currentVitals.riskScore >= 40 ? 'Moderate Risk' : 'Low Risk'}
            </p>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Active Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{alert.message}</p>
                        <p className="text-sm opacity-75">
                          Value: {alert.value} | Threshold: {alert.threshold}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{formatTime(alert.timestamp)}</p>
                        <p className="text-xs opacity-75">{formatDate(alert.timestamp)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Historical Data Chart */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Vitals History ({selectedTimeRange})</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p>Interactive chart would be implemented here</p>
                <p className="text-sm">Integration with Chart.js or similar library</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              onClick={() => {
                // In real implementation, this would start a video call
                console.log("Starting video call with", patient.name);
              }}
            >
              Start Video Call
            </Button>
            <Button
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              onClick={() => {
                // In real implementation, this would send an alert
                console.log("Sending alert for", patient.name);
              }}
            >
              Send Alert
            </Button>
            <Button
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
