"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout, loading, switchRole } = useAuth();
  const initials = user?.email ? user.email[0]?.toUpperCase() : "";
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-blue-50/60 supports-[backdrop-filter]:via-purple-50/60 supports-[backdrop-filter]:to-pink-50/60 supports-[backdrop-filter]:dark:from-blue-950/40 supports-[backdrop-filter]:dark:via-purple-950/40 supports-[backdrop-filter]:dark:to-pink-950/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg inline-flex items-center gap-2"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-bold shadow-lg">
            MP
          </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            MedPredict AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {/* Main Navigation Links - Only show when not logged in */}
          {mounted && !loading && !user && (
            <>
              <Link
                href="/"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                About
              </Link>
            </>
          )}

          {/* Auth Section */}
          {mounted && !loading && user ? (
            <div className="flex items-center gap-3">
              {/* Role Switcher - Compact */}
              <div className="flex items-center gap-2">
                <select
                  value={user.role}
                  onChange={(e) => switchRole(e.target.value)}
                  className="appearance-none bg-transparent border border-black/10 dark:border-white/15 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              
              {/* Profile Link */}
              <Link
                href="/profile"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                Profile
              </Link>
              
              {/* Doctor Portal Link - Only for doctors */}
              {user?.role === "doctor" && (
                <Link
                  href="/doctor-portal"
                  className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                  dark:focus-visible:ring-white/20"
                >
                  Portal
                </Link>
              )}
              
              {/* Health Tracker Link */}
              <Link
                href="/health"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                {user?.role === "doctor" ? "Patient Health" : "Health"}
              </Link>
              
              {/* Health Tips Link */}
              <Link
                href="/health-tips"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                Tips
              </Link>
              
              {/* Profile Dropdown */}
              <ProfileDropdown />
            </div>
          ) : mounted && !loading ? (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2" aria-hidden>
              <span className="h-8 w-16 rounded-md bg-black/5 dark:bg-white/10" />
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/15 px-3 py-2 bg-gradient-to-r from-blue-50/60 to-purple-50/60 dark:from-blue-950/20 dark:to-purple-950/20 backdrop-blur hover:from-blue-100/60 hover:to-purple-100/60 transition-all duration-200"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-current"
          >
            {open ? (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-pink-50/90 dark:from-blue-950/60 dark:via-purple-950/60 dark:to-pink-950/60 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
            {/* Show main nav only when not logged in */}
            {mounted && !loading && !user && (
              <>
                <Link href="/" className="block hover:underline" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/pricing" className="block hover:underline" onClick={() => setOpen(false)}>
                  Pricing
                </Link>
                <Link href="/about" className="block hover:underline" onClick={() => setOpen(false)}>
                  About
                </Link>
              </>
            )}

            {/* Auth Section */}
            {mounted && !loading && user ? (
              <div className="space-y-3">
                {/* Role Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-sm opacity-70">Role:</span>
                  <select
                    value={user.role}
                    onChange={(e) => switchRole(e.target.value)}
                    className="bg-transparent border border-black/10 dark:border-white/15 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>
                
                {/* Navigation Links */}
                <Link href="/profile" className="block hover:underline" onClick={() => setOpen(false)}>
                  Profile
                </Link>
                {user?.role === "doctor" && (
                  <Link href="/doctor-portal" className="block hover:underline" onClick={() => setOpen(false)}>
                    Portal
                  </Link>
                )}
                <Link href="/health" className="block hover:underline" onClick={() => setOpen(false)}>
                  {user?.role === "doctor" ? "Patient Health" : "Health"}
                </Link>
                <Link href="/health-tips" className="block hover:underline" onClick={() => setOpen(false)}>
                  Tips
                </Link>
                
                {/* Profile Dropdown for Mobile */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <ProfileDropdown />
                </div>
              </div>
            ) : mounted && !loading ? (
              <Link
                href="/login"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            ) : (
              <span className="h-9 w-full rounded-md bg-black/5 dark:bg-white/10" />
            )}
          </div>
        </div>
      )}
    </header>
  );
}
