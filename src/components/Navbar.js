"use client";

import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg">MedPredict AI</a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/pricing" className="hover:underline">Pricing</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="#contact" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm font-medium hover:opacity-90">Contact</a>
          {user ? (
            <div className="flex items-center gap-3">
              <a href="/profile" className="hover:underline">My Profile</a>
              <button onClick={logout} className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-3 py-1.5">Sign out</button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <a href="/login" className="hover:underline">Login</a>
              <a href="/signup" className="hover:underline">Signup</a>
            </div>
          )}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-current">
            {open ? (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 grid gap-4 text-sm">
            <a href="/" className="hover:underline" onClick={() => setOpen(false)}>Home</a>
            <a href="/pricing" className="hover:underline" onClick={() => setOpen(false)}>Pricing</a>
            <a href="/about" className="hover:underline" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="inline-flex w-fit items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm font-medium hover:opacity-90" onClick={() => setOpen(false)}>Contact</a>
            {user ? (
              <>
                <a href="/profile" className="hover:underline" onClick={() => setOpen(false)}>My Profile</a>
                <button onClick={()=>{logout(); setOpen(false);}} className="justify-self-start inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-3 py-1.5">Sign out</button>
              </>
            ) : (
              <>
                <a href="/login" className="hover:underline" onClick={() => setOpen(false)}>Login</a>
                <a href="/signup" className="hover:underline" onClick={() => setOpen(false)}>Signup</a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}


