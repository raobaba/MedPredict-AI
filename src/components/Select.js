"use client";

export default function Select({
  label,
  error,
  options = [],
  className = "",
  wrapperClassName = "",
  id,
  required = false,
  ...props
}) {
  const selectId = id || `select-${props.name || 'default'}`;
  const errorId = `${selectId}-error`;
  
  const base = "w-full rounded-md border px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-900";
  const normal = "border-black/10 dark:border-white/15";
  const invalid = "border-red-500 focus:ring-red-500/20 focus:border-red-500";
  
  return (
    <div className={wrapperClassName}>
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
        </label>
      )}
      <select 
        id={selectId}
        className={`${base} ${error ? invalid : normal} mt-1 ${className}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        required={required}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
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
