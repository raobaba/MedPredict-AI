"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const initials = user?.email ? user.email[0]?.toUpperCase() : "";
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-lg inline-flex items-center gap-2"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black text-xs">
            MP
          </span>
          MedPredict AI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
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
          <Link
            href="#contact"
            className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black 
            px-3 py-1.5 text-sm font-medium hover:opacity-90 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
            dark:focus-visible:ring-white/20"
          >
            Contact
          </Link>

          {/* Auth Section */}
          {mounted && !loading && user ? (
            <div className="flex items-center gap-3 ml-2">
              <span className="hidden lg:inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1">
                <span className="text-xs opacity-70">
                  {user.role === "doctor" ? "Doctor" : "Patient"}
                </span>
              </span>
              <Link
                href="/profile"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                My Profile
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-3 py-1.5 
                hover:bg-black/5 dark:hover:bg-white/10"
              >
                Sign out
              </button>
              <div className="h-8 w-8 rounded-full bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center text-xs font-medium">
                {initials}
              </div>
            </div>
          ) : mounted && !loading ? (
            <div className="flex items-center gap-2 ml-2">
              <Link
                href="/login"
                className="px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 
                dark:focus-visible:ring-white/20"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2 ml-2" aria-hidden>
              <span className="h-8 w-16 rounded-md bg-black/5 dark:bg-white/10" />
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-3 py-2 bg-white/60 dark:bg-black/20 backdrop-blur"
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
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur">
            <div className="mx-auto max-w-7xl px-6 py-4 grid gap-4 text-sm">
             <Link href="/" className="hover:underline" onClick={() => setOpen(false)}>
              Home
             </Link>
             <Link
               href="/pricing"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              Pricing
             </Link>
             <Link
               href="/about"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              About
             </Link>
             <Link
               href="#contact"
              className="inline-flex w-fit items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm font-medium hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Contact
             </Link>

            {mounted && !loading && user ? (
              <>
                 <Link
                   href="/profile"
                  className="hover:underline"
                  onClick={() => setOpen(false)}
                >
                  My Profile
                 </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="justify-self-start inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-3 py-1.5"
                >
                  Sign out
                </button>
              </>
            ) : mounted && !loading ? (
              <>
                 <Link
                   href="/login"
                  className="hover:underline"
                  onClick={() => setOpen(false)}
                >
                  Login
                 </Link>
              </>
            ) : (
              <>
                <span className="h-9 w-full rounded-md bg-black/5 dark:bg-white/10" />
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
