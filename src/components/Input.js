"use client";

export default function Input({
  label,
  error,
  as = "input",
  className = "",
  wrapperClassName = "",
  ...props
}) {
  const Field = as;
  const base = "w-full rounded-md border px-3 py-2";
  const normal = "border-black/10 dark:border-white/15";
  const invalid = "border-red-500";
  return (
    <div className={wrapperClassName}>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <Field className={`${base} ${error ? invalid : normal} mt-1 ${className}`} {...props} />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}


