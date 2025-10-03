"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // In a real implementation, this would connect to Socket.io server
    // For now, we'll simulate the connection
    if (user) {
      // Simulate socket connection
      const mockSocket = {
        id: `mock-socket-${Date.now()}`,
        connected: true,
        emit: (event, data) => {
          console.log(`Socket emit: ${event}`, data);
        },
        on: (event, callback) => {
          console.log(`Socket listener added: ${event}`);
        },
        off: (event, callback) => {
          console.log(`Socket listener removed: ${event}`);
        },
        disconnect: () => {
          console.log("Socket disconnected");
        }
      };

      setSocket(mockSocket);
      setIsConnected(true);

      // Simulate receiving notifications
      const interval = setInterval(() => {
        if (Math.random() > 0.8) { // 20% chance every 5 seconds
          const newNotification = {
            id: Date.now(),
            type: "vital_alert",
            message: "Patient vitals require attention",
            timestamp: new Date(),
            patientId: "1",
            severity: "high"
          };
          setNotifications(prev => [newNotification, ...prev.slice(0, 9)]); // Keep last 10
        }
      }, 5000);

      return () => {
        clearInterval(interval);
        mockSocket.disconnect();
        setSocket(null);
        setIsConnected(false);
      };
    }
  }, [user]);

  const joinRoom = (roomId) => {
    if (socket) {
      socket.emit("join_room", { roomId, userId: user?.id, role: user?.role });
    }
  };

  const leaveRoom = (roomId) => {
    if (socket) {
      socket.emit("leave_room", { roomId, userId: user?.id });
    }
  };

  const sendMessage = (roomId, message) => {
    if (socket) {
      socket.emit("send_message", {
        roomId,
        message,
        userId: user?.id,
        timestamp: new Date()
      });
    }
  };

  const sendVitalAlert = (patientId, vitals) => {
    if (socket) {
      socket.emit("vital_alert", {
        patientId,
        vitals,
        doctorId: user?.id,
        timestamp: new Date()
      });
    }
  };

  const clearNotification = (notificationId) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const value = {
    socket,
    isConnected,
    notifications,
    joinRoom,
    leaveRoom,
    sendMessage,
    sendVitalAlert,
    clearNotification,
    clearAllNotifications
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within SocketProvider");
  }
  return context;
}
