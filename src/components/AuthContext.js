"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Default patient user for development
  const [user, setUser] = useState({
    id: "dev-patient",
    email: "patient@medpredict.ai",
    role: "patient",
    name: "John Smith"
  });
  const [token, setToken] = useState("dev-token-123");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("mpai_auth") : null;
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed.user || null);
        setToken(parsed.token || null);
      } catch {}
    }
    setLoading(false);
  }, []);

  function login({ email, role }) {
    const mockToken = `mock-jwt.${btoa(email)}.${Date.now()}`;
    const nextUser = { id: "local", email, role };
    setUser(nextUser);
    setToken(mockToken);
    window.localStorage.setItem("mpai_auth", JSON.stringify({ user: nextUser, token: mockToken }));
  }

  function logout() {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem("mpai_auth");
  }

  function signup({ name, email, role }) {
    // In real app, call API. Here we directly log in.
    login({ email, role });
  }

  function switchRole(role) {
    if (role === "doctor") {
      setUser({
        id: "dev-doctor",
        email: "doctor@medpredict.ai",
        role: "doctor",
        name: "Dr. Sarah Johnson"
      });
    } else if (role === "patient") {
      setUser({
        id: "dev-patient",
        email: "patient@medpredict.ai",
        role: "patient",
        name: "John Smith"
      });
    }
  }

  const value = useMemo(() => ({ user, token, loading, login, logout, signup, switchRole }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


