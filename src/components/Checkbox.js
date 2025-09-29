"use client";

export default function Checkbox({
  label,
  error,
  className = "",
  wrapperClassName = "",
  ...props
}) {
  return (
    <div className={wrapperClassName}>
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          className={`rounded border-black/10 dark:border-white/15 ${error ? "border-red-500" : ""} ${className}`}
          {...props}
        />
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
