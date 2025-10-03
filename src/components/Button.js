"use client";

import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-black text-white dark:bg-white dark:text-black hover:opacity-90",
  outline: "border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10",
  ghost: "hover:bg-black/5 dark:hover:bg-white/10",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  loading = false,
  loadingText = "Loading...",
  ...props
}) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;
  
  const content = loading ? (
    <>
      <LoadingSpinner size="sm" className="mr-2" />
      {loadingText}
    </>
  ) : children;

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} disabled={loading} {...props}>
      {content}
    </button>
  );
}


