"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
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

  const value = useMemo(() => ({ user, token, loading, login, logout, signup }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


