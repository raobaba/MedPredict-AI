"use client";

export default function LoadingSkeleton({ 
  className = "", 
  lines = 1, 
  height = "h-4",
  width = "w-full" 
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-200 dark:bg-gray-700 rounded ${height} ${width} ${
            index < lines - 1 ? "mb-2" : ""
          }`}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg animate-pulse">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 shadow-lg animate-pulse">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
              </div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
