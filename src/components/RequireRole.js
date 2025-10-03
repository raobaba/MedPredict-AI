"use client";

import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RequireRole({ allowedRoles, children, redirectTo = "/" }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      if (!allowedRoles.includes(user.role)) {
        // Redirect to appropriate page based on role
        if (user.role === "doctor") {
          router.push("/doctor-portal");
        } else {
          router.push("/health");
        }
      }
    }
  }, [user, loading, allowedRoles, router]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    router.push("/login");
    return null;
  }

  // If user role is not allowed, show access denied
  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You don't have permission to access this page. This page is restricted to {allowedRoles.join(" or ")} users only.
          </p>
          <button
            onClick={() => router.push(user.role === "doctor" ? "/doctor-portal" : "/health")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to {user.role === "doctor" ? "Doctor Portal" : "Health Dashboard"}
          </button>
        </div>
      </div>
    );
  }

  return children;
}
