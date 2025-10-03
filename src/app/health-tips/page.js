"use client";
import { useState, useEffect } from "react";
import RequireAuth from "../../components/RequireAuth";
import RequireRole from "../../components/RequireRole";
import { useAuth } from "../../components/AuthContext";
import { useNotifications } from "../../components/NotificationContext";
import Button from "../../components/Button";

export default function HealthTips() {
  const { user } = useAuth();
  const { healthTip, dismissHealthTip } = useNotifications();
  const [tips, setTips] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const isDoctor = user?.role === "doctor";

  const categories = isDoctor ? [
    { id: "all", name: "All Tips", icon: "🌟" },
    { id: "clinical", name: "Clinical Care", icon: "🏥" },
    { id: "patient", name: "Patient Management", icon: "👥" },
    { id: "diagnosis", name: "Diagnosis", icon: "🔍" },
    { id: "treatment", name: "Treatment", icon: "💊" },
    { id: "prevention", name: "Prevention", icon: "🛡️" }
  ] : [
    { id: "all", name: "All Tips", icon: "🌟" },
    { id: "nutrition", name: "Nutrition", icon: "🥗" },
    { id: "exercise", name: "Exercise", icon: "🏃‍♂️" },
    { id: "mental", name: "Mental Health", icon: "🧠" },
    { id: "sleep", name: "Sleep", icon: "😴" },
    { id: "prevention", name: "Prevention", icon: "🛡️" }
  ];

  const predefinedTips = isDoctor ? [
    {
      id: 1,
      category: "clinical",
      title: "Effective Patient Communication",
      content: "Use clear, jargon-free language when explaining medical conditions to patients. Ask open-ended questions and actively listen to build trust and improve patient outcomes.",
      difficulty: "Moderate",
      duration: "Every consultation",
      benefits: ["Better patient compliance", "Improved outcomes", "Stronger relationships"]
    },
    {
      id: 2,
      category: "patient",
      title: "Comprehensive Health History",
      content: "Always take a thorough medical history including family history, lifestyle factors, and social determinants of health. This comprehensive approach leads to better diagnoses and treatment plans.",
      difficulty: "Moderate",
      duration: "Initial consultation",
      benefits: ["Accurate diagnosis", "Personalized care", "Risk assessment"]
    },
    {
      id: 3,
      category: "diagnosis",
      title: "Differential Diagnosis Approach",
      content: "Always consider multiple possible diagnoses and systematically rule them out. Use evidence-based guidelines and clinical decision support tools to ensure comprehensive evaluation.",
      difficulty: "Advanced",
      duration: "Every case",
      benefits: ["Reduced misdiagnosis", "Better patient safety", "Improved accuracy"]
    },
    {
      id: 4,
      category: "treatment",
      title: "Evidence-Based Medicine",
      content: "Stay updated with the latest medical research and guidelines. Use evidence-based treatment protocols and regularly review your practice against current best practices.",
      difficulty: "Advanced",
      duration: "Ongoing",
      benefits: ["Better outcomes", "Reduced errors", "Professional growth"]
    },
    {
      id: 5,
      category: "prevention",
      title: "Preventive Care Focus",
      content: "Emphasize preventive care and early intervention. Screen for common conditions based on age, gender, and risk factors. Educate patients about lifestyle modifications.",
      difficulty: "Moderate",
      duration: "Regular check-ups",
      benefits: ["Early detection", "Cost-effective care", "Better long-term outcomes"]
    },
    {
      id: 6,
      category: "clinical",
      title: "Cultural Competency",
      content: "Develop cultural awareness and sensitivity when treating patients from diverse backgrounds. Understand how cultural beliefs may affect health behaviors and treatment adherence.",
      difficulty: "Moderate",
      duration: "Ongoing",
      benefits: ["Better patient care", "Reduced disparities", "Improved communication"]
    },
    {
      id: 7,
      category: "patient",
      title: "Patient-Centered Care",
      content: "Involve patients in their care decisions. Explain treatment options, risks, and benefits clearly. Respect patient autonomy and preferences while providing expert medical guidance.",
      difficulty: "Moderate",
      duration: "Every consultation",
      benefits: ["Patient satisfaction", "Better adherence", "Improved outcomes"]
    },
    {
      id: 8,
      category: "diagnosis",
      title: "Red Flag Recognition",
      content: "Learn to quickly identify 'red flag' symptoms that require immediate attention. Develop systematic approaches to distinguish between urgent and non-urgent presentations.",
      difficulty: "Advanced",
      duration: "Every consultation",
      benefits: ["Patient safety", "Timely intervention", "Risk reduction"]
    }
  ] : [
    {
      id: 1,
      category: "nutrition",
      title: "Eat the Rainbow",
      content: "Include fruits and vegetables of different colors in your daily meals. Each color provides unique nutrients and antioxidants that support different aspects of your health.",
      difficulty: "Easy",
      duration: "Daily",
      benefits: ["Better immune system", "Reduced inflammation", "Improved digestion"]
    },
    {
      id: 2,
      category: "exercise",
      title: "10,000 Steps Daily",
      content: "Aim to walk at least 10,000 steps each day. This simple activity can significantly improve cardiovascular health, boost mood, and help maintain a healthy weight.",
      difficulty: "Moderate",
      duration: "Daily",
      benefits: ["Heart health", "Weight management", "Mental clarity"]
    },
    {
      id: 3,
      category: "mental",
      title: "5-Minute Meditation",
      content: "Practice mindfulness meditation for just 5 minutes daily. Focus on your breathing and let thoughts pass without judgment to reduce stress and improve focus.",
      difficulty: "Easy",
      duration: "5 minutes",
      benefits: ["Stress reduction", "Better focus", "Emotional balance"]
    },
    {
      id: 4,
      category: "sleep",
      title: "Consistent Sleep Schedule",
      content: "Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock and improves sleep quality.",
      difficulty: "Moderate",
      duration: "Daily",
      benefits: ["Better sleep quality", "Improved energy", "Enhanced mood"]
    },
    {
      id: 5,
      category: "prevention",
      title: "Regular Health Check-ups",
      content: "Schedule annual health check-ups even when you feel healthy. Early detection of potential health issues can lead to better outcomes and treatment options.",
      difficulty: "Easy",
      duration: "Annual",
      benefits: ["Early detection", "Preventive care", "Peace of mind"]
    },
    {
      id: 6,
      category: "nutrition",
      title: "Stay Hydrated",
      content: "Drink at least 8 glasses of water daily. Proper hydration supports all bodily functions, improves skin health, and helps maintain energy levels.",
      difficulty: "Easy",
      duration: "Daily",
      benefits: ["Better skin", "Improved energy", "Proper organ function"]
    },
    {
      id: 7,
      category: "exercise",
      title: "Strength Training",
      content: "Include strength training exercises 2-3 times per week. Building muscle mass helps maintain bone density, improves metabolism, and supports overall health.",
      difficulty: "Moderate",
      duration: "2-3x weekly",
      benefits: ["Stronger bones", "Better metabolism", "Improved posture"]
    },
    {
      id: 8,
      category: "mental",
      title: "Gratitude Practice",
      content: "Write down three things you're grateful for each day. This simple practice can improve mood, reduce stress, and enhance overall life satisfaction.",
      difficulty: "Easy",
      duration: "5 minutes",
      benefits: ["Better mood", "Reduced stress", "Positive outlook"]
    }
  ];

  const [aiGeneratedTips, setAiGeneratedTips] = useState([]);

  useEffect(() => {
    setTips(predefinedTips);
  }, []);

  const generateAITip = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiTips = [
      {
        id: Date.now(),
        category: "ai",
        title: "Personalized Health Insight",
        content: `Based on your profile, consider incorporating more ${user?.age > 50 ? 'calcium-rich foods' : 'antioxidant-rich foods'} into your diet to support ${user?.age > 50 ? 'bone health' : 'cellular health'}.`,
        difficulty: "Easy",
        duration: "Daily",
        benefits: ["Personalized nutrition", "Age-appropriate guidance", "Optimized health outcomes"],
        isAI: true
      },
      {
        id: Date.now() + 1,
        category: "ai",
        title: "Smart Exercise Recommendation",
        content: `Your activity level suggests you would benefit from ${user?.role === 'doctor' ? 'stress-reducing activities like yoga' : 'moderate cardio exercises like brisk walking'} to maintain optimal health.`,
        difficulty: "Moderate",
        duration: "30 minutes",
        benefits: ["Role-specific guidance", "Stress management", "Improved fitness"],
        isAI: true
      }
    ];
    
    setAiGeneratedTips(prev => [...prev, aiTips[Math.floor(Math.random() * aiTips.length)]]);
    setIsGenerating(false);
  };

  const filteredTips = tips.filter(tip => 
    selectedCategory === "all" || tip.category === selectedCategory
  );

  const allTips = [...filteredTips, ...aiGeneratedTips];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200";
      case "Moderate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200";
      case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200";
    }
  };

  const getCategoryIcon = (category) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.icon : "💡";
  };

  return (
    <RequireAuth>
      <RequireRole allowedRoles={["doctor", "patient"]}>
        <div className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {isDoctor ? "Clinical Best Practices" : "Health Tips & Insights"}
          </h1>
          <p className="text-black/70 dark:text-white/70">
            {isDoctor 
              ? "Professional guidance and best practices for patient care and clinical excellence"
              : "Discover personalized health tips and AI-generated insights to improve your well-being"
            }
          </p>
        </div>

        {/* Current Health Tip */}
        {healthTip && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 p-6 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                    {healthTip.title}
                    {healthTip.isAI && (
                      <span className="ml-2 px-2 py-1 text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full">
                        AI Generated
                      </span>
                    )}
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300 mt-2">
                    {healthTip.message}
                  </p>
                </div>
              </div>
              <button
                onClick={dismissHealthTip}
                className="text-purple-400 hover:text-purple-600 dark:hover:text-purple-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* AI Generation Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                AI-Powered Health Insights
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mt-1">
                Get personalized health recommendations based on your profile and preferences.
              </p>
            </div>
            <Button
              onClick={generateAITip}
              disabled={isGenerating}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </div>
              ) : (
                isDoctor ? "Generate Clinical Insight" : "Generate AI Tip"
              )}
            </Button>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getCategoryIcon(tip.category)}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{tip.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(tip.difficulty)}`}>
                        {tip.difficulty}
                      </span>
                      {tip.isAI && (
                        <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full">
                          AI
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tip.content}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Duration: {tip.duration}
                </span>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Benefits:
                </h4>
                <ul className="space-y-1">
                  {tip.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                onClick={() => {
                  // In a real app, this would add to user's health plan
                  console.log(`Added tip: ${tip.title}`);
                }}
              >
                Add to My Health Plan
              </Button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {allTips.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No tips found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category or generate an AI tip.
            </p>
          </div>
        )}
        </div>
      </RequireRole>
    </RequireAuth>
  );
}
