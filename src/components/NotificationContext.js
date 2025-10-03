"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const NotificationContext = createContext(null);

// Predefined health tips
const healthTips = [
  "Stay hydrated! Aim for 8 glasses of water daily to maintain optimal body function.",
  "Regular exercise can reduce the risk of chronic diseases by up to 30%.",
  "Get 7-9 hours of quality sleep each night for better mental and physical health.",
  "Eat a rainbow of fruits and vegetables to get diverse nutrients and antioxidants.",
  "Take breaks from screens every 20 minutes to protect your eye health.",
  "Practice deep breathing exercises for 5 minutes daily to reduce stress.",
  "Limit processed foods and focus on whole, natural ingredients.",
  "Wash your hands frequently to prevent the spread of germs and infections.",
  "Schedule regular health check-ups even when you feel healthy.",
  "Maintain good posture to prevent back and neck problems.",
  "Spend time outdoors daily to get natural vitamin D from sunlight.",
  "Practice mindfulness or meditation for 10 minutes daily to improve mental health.",
  "Limit alcohol consumption to moderate levels for better liver health.",
  "Quit smoking to significantly reduce your risk of heart disease and cancer.",
  "Include omega-3 fatty acids in your diet through fish, nuts, or supplements.",
  "Stretch regularly to maintain flexibility and prevent muscle stiffness.",
  "Keep your living space clean and well-ventilated for better air quality.",
  "Manage stress through hobbies, social connections, or professional help.",
  "Wear sunscreen daily to protect your skin from harmful UV rays.",
  "Practice good dental hygiene by brushing twice daily and flossing regularly."
];

// AI-generated health tips (simulated)
const generateAITip = (userProfile) => {
  const tips = [
    `Based on your ${userProfile?.age || 'age group'}, consider adding more calcium-rich foods to support bone health.`,
    `Your activity level suggests you might benefit from 30 minutes of moderate exercise daily.`,
    `Given your medical history, staying consistent with your medication schedule is crucial.`,
    `Your stress levels might be improved with 10 minutes of daily meditation practice.`,
    `Consider scheduling your next check-up within the next 3 months for optimal health monitoring.`,
    `Your sleep pattern could be optimized by maintaining a consistent bedtime routine.`,
    `Based on your lifestyle, increasing fiber intake could improve your digestive health.`,
    `Your heart health could benefit from reducing sodium intake and increasing potassium-rich foods.`,
    `Consider incorporating more anti-inflammatory foods like berries and leafy greens.`,
    `Your mental health could be enhanced with regular social interactions and outdoor activities.`
  ];
  
  return tips[Math.floor(Math.random() * tips.length)];
};

export function NotificationProvider({ children }) {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [healthTip, setHealthTip] = useState(null);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);

  // Initialize health tip
  useEffect(() => {
    if (user) {
      // Show a random predefined tip
      const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
      setHealthTip({
        id: Date.now(),
        type: "health_tip",
        title: "Daily Health Tip",
        message: randomTip,
        timestamp: new Date(),
        isAI: false
      });
    }
  }, [user]);

  // Simulate AI-generated tips every 24 hours
  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        const aiTip = generateAITip(user);
        setHealthTip({
          id: Date.now(),
          type: "health_tip",
          title: "AI Health Insight",
          message: aiTip,
          timestamp: new Date(),
          isAI: true
        });
      }, 24 * 60 * 60 * 1000); // 24 hours

      return () => clearInterval(interval);
    }
  }, [user]);

  // Simulate medication reminders
  useEffect(() => {
    if (user) {
      const medicationReminders = [
        {
          id: Date.now() + 1,
          type: "medication_reminder",
          title: "Medication Reminder",
          message: "Time to take your morning medication",
          timestamp: new Date(),
          priority: "high",
          action: "mark_taken"
        },
        {
          id: Date.now() + 2,
          type: "medication_reminder",
          title: "Medication Reminder",
          message: "Don't forget your evening dose",
          timestamp: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours later
          priority: "high",
          action: "mark_taken"
        }
      ];

      // Add medication reminders
      setNotifications(prev => [...prev, ...medicationReminders]);

      // Simulate doctor follow-up reminders
      const followUpReminder = {
        id: Date.now() + 3,
        type: "doctor_followup",
        title: "Doctor Follow-up",
        message: "You have an upcoming appointment with Dr. Smith tomorrow at 2:00 PM",
        timestamp: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours later
        priority: "medium",
        action: "view_appointment"
      };

      setTimeout(() => {
        setNotifications(prev => [...prev, followUpReminder]);
      }, 5000);
    }
  }, [user]);

  const addNotification = (notification) => {
    setNotifications(prev => [notification, ...prev]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const dismissHealthTip = () => {
    setHealthTip(null);
  };

  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "medication_reminder":
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "doctor_followup":
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "health_tip":
        return (
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "vital_alert":
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5a15 15 0 01-1.44-7.5 15 15 0 011.44-7.5M4.5 19.5L9 15l-4.5-4.5M4.5 19.5L12 12l-7.5-7.5" />
          </svg>
        );
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50 dark:bg-red-900/20";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20";
      case "low":
        return "border-l-blue-500 bg-blue-50 dark:bg-blue-900/20";
      default:
        return "border-l-gray-500 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  const value = {
    notifications,
    healthTip,
    showNotificationPanel,
    setShowNotificationPanel,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAllNotifications,
    dismissHealthTip,
    getUnreadCount,
    getNotificationIcon,
    getPriorityColor
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within NotificationProvider");
  }
  return context;
}
