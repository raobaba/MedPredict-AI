"use client";

export default function ProgressBar({ currentStep, totalSteps, className = "" }) {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                i + 1 <= currentStep
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500"
              }`}
            >
              {i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div 
                className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                i + 1 < currentStep
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
