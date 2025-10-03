"use client";

import { useState } from "react";

// Icon components for password toggle
const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
  </svg>
);

export default function Input({
  label,
  error,
  as = "input",
  className = "",
  wrapperClassName = "",
  id,
  required = false,
  type = "text",
  showPasswordToggle = false,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const Field = as;
  const inputId = id || `input-${props.name || 'default'}`;
  const errorId = `${inputId}-error`;
  
  const base = "w-full rounded-md border px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500";
  const normal = "border-black/10 dark:border-white/15 bg-white dark:bg-gray-900";
  const invalid = "border-red-500 focus:ring-red-500/20 focus:border-red-500";
  
  // Handle password input with toggle
  const isPassword = type === "password" && showPasswordToggle;
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
  
  return (
    <div className={wrapperClassName}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
        </label>
      )}
      
      {isPassword ? (
        <div className="relative">
          <Field 
            id={inputId}
            type={inputType}
            className={`${base} ${error ? invalid : normal} mt-1 pr-10 ${className}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? errorId : undefined}
            required={required}
            {...props} 
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      ) : (
        <Field 
          id={inputId}
          type={inputType}
          className={`${base} ${error ? invalid : normal} mt-1 ${className}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          required={required}
          {...props} 
        />
      )}
      
      {error && (
        <p 
          id={errorId}
          className="mt-1 text-xs text-red-600 dark:text-red-400"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}


