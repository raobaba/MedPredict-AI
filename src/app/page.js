// Icon components
const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ApiIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const PathIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Home() {
  return (
    <div className="py-8 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-3xl"></div>
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8">
            <HeartIcon />
            <span>Trusted by 500+ Healthcare Organizations</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Predictive Healthcare
            <br />
            <span className="text-4xl sm:text-6xl">Powered by AI</span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
            Transform patient data into proactive care decisions with explainable AI. 
            <br className="hidden sm:block" />
            Reduce readmissions by 25% and improve outcomes with intelligent predictions.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/pricing" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Trial
              <ArrowRightIcon />
            </a>
            <a href="/about" className="group inline-flex items-center gap-2 rounded-2xl border-2 border-black/20 dark:border-white/20 px-8 py-4 text-lg font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200">
              Watch Demo
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Healthcare Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">25%</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Readmission Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">95%</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$2M+</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Cost Savings Generated</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive AI Healthcare Platform
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
            Everything you need to transform patient care with intelligent predictions and actionable insights
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50">
                <HeartIcon />
              </div>
              <h3 className="font-bold text-xl">Clinical Risk Prediction</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Identify high-risk patients early with explainable AI models that provide confidence scores and clinical reasoning.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50">
                <ChartIcon />
              </div>
              <h3 className="font-bold text-xl">Operational Forecasting</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Anticipate admissions, staffing needs, and resource utilization with advanced predictive analytics.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50">
                <ShieldIcon />
              </div>
              <h3 className="font-bold text-xl">Compliance & Security</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              HIPAA-ready encryption, role-based access controls, and comprehensive audit trails for complete security.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50">
                <BellIcon />
              </div>
              <h3 className="font-bold text-xl">Smart Alerts & Dashboards</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Real-time insights and intelligent alerting seamlessly integrated into your EHR and operational systems.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50">
                <ApiIcon />
              </div>
              <h3 className="font-bold text-xl">API & Integrations</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Connect seamlessly via FHIR, HL7, and secure webhooks with comprehensive developer tools and documentation.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50">
                <LockIcon />
              </div>
              <h3 className="font-bold text-xl">Privacy by Design</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Built-in data minimization, end-to-end encryption, and privacy-preserving AI that protects patient information.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70">
            See how leading healthcare organizations are transforming patient care with AI
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-lg text-black/80 dark:text-white/80 mb-6 italic leading-relaxed">
              "MedPredict AI helped us reduce readmissions by 25% within six months. The AI insights are incredibly actionable and have transformed our patient care approach."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                AN
              </div>
              <div>
                <p className="font-semibold">Dr. Anna Nguyen</p>
                <p className="text-sm text-black/60 dark:text-white/60">Chief Medical Officer</p>
                <p className="text-sm text-black/60 dark:text-white/60">Metro Health System</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-lg text-black/80 dark:text-white/80 mb-6 italic leading-relaxed">
              "The operational forecasting has revolutionized our staffing decisions. We've cut overtime costs by 40% while improving patient satisfaction scores."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                JP
              </div>
              <div>
                <p className="font-semibold">Jaya Patel</p>
                <p className="text-sm text-black/60 dark:text-white/60">Operations Director</p>
                <p className="text-sm text-black/60 dark:text-white/60">Regional Medical Center</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-lg text-black/80 dark:text-white/80 mb-6 italic leading-relaxed">
              "The integration with our Epic system was seamless. Our clinical teams now have AI-powered insights directly in their workflow."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div>
                <p className="font-semibold">Dr. Michael Rodriguez</p>
                <p className="text-sm text-black/60 dark:text-white/60">Director of Clinical Informatics</p>
                <p className="text-sm text-black/60 dark:text-white/60">University Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Doctors Section */}
      <section className="mt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Clinicians</h2>
            <p className="text-xl text-black/70 dark:text-white/70">
              AI-powered tools that enhance clinical decision-making without disrupting workflow
            </p>
          </div>
          <a href="/pricing" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Explore Plans
            <ArrowRightIcon />
          </a>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900">
                <UsersIcon />
              </div>
              <h3 className="font-bold text-xl">Patient Risk Stratification</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Panel-wide risk scores with detailed explanations, confidence intervals, and actionable recommendations for each patient.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border border-purple-200 dark:border-purple-800 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900">
                <PathIcon />
              </div>
              <h3 className="font-bold text-xl">Care Pathway Suggestions</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Evidence-based, guideline-compliant recommendations seamlessly integrated into your clinical workflow and EHR.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-green-100 dark:bg-green-900">
                <BellIcon />
              </div>
              <h3 className="font-bold text-xl">Intelligent Alerts</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Smart notifications for patient deterioration, medication adherence issues, and critical follow-ups delivered at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow & Metrics Section */}
      <section className="mt-24 grid gap-12 lg:grid-cols-2">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl border border-indigo-200 dark:border-indigo-800 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Clinical Workflow</h3>
          </div>
          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-sm">1</span>
              <div>
                <h4 className="font-semibold mb-1">Connect EHR Data</h4>
                <p className="text-sm text-black/70 dark:text-white/70">Seamless integration via FHIR/HL7 with your existing systems</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm">2</span>
              <div>
                <h4 className="font-semibold mb-1">AI Analysis & Insights</h4>
                <p className="text-sm text-black/70 dark:text-white/70">Run predictive models and surface actionable insights in patient charts</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 text-white font-bold text-sm">3</span>
              <div>
                <h4 className="font-semibold mb-1">Automated Actions</h4>
                <p className="text-sm text-black/70 dark:text-white/70">Trigger care tasks, referrals, and patient outreach automatically</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 text-white font-bold text-sm">4</span>
              <div>
                <h4 className="font-semibold mb-1">Continuous Learning</h4>
                <p className="text-sm text-black/70 dark:text-white/70">Measure outcomes and continuously improve AI models</p>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 rounded-3xl border border-emerald-200 dark:border-emerald-800 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900">
              <ChartIcon />
            </div>
            <h3 className="text-2xl font-bold">Proven Clinical Impact</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2">25%</div>
              <div className="text-sm font-medium text-black/70 dark:text-white/70">Readmission Reduction</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">30%</div>
              <div className="text-sm font-medium text-black/70 dark:text-white/70">ED Revisit Reduction</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">40%</div>
              <div className="text-sm font-medium text-black/70 dark:text-white/70">No-show Decrease</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">3x</div>
              <div className="text-sm font-medium text-black/70 dark:text-white/70">Care Team Productivity</div>
            </div>
          </div>
        </div>
      </section>

      {/* EHR Integration Section */}
      <section className="mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Seamless EHR Integration</h3>
          <p className="text-xl text-black/70 dark:text-white/70">
            Works with your existing healthcare technology stack
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="group h-20 rounded-2xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Epic
          </div>
          <div className="group h-20 rounded-2xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Cerner
          </div>
          <div className="group h-20 rounded-2xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Athenahealth
          </div>
          <div className="group h-20 rounded-2xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Allscripts
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-black/70 dark:text-white/70">
            Everything you need to know about MedPredict AI
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <details className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-black/10 dark:border-white/10 group">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
              <span>Is MedPredict AI HIPAA compliant?</span>
              <span className="ml-4 transform group-open:rotate-180 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-6 text-black/70 dark:text-white/70 leading-relaxed">
              Yes, absolutely. We maintain full HIPAA compliance with comprehensive administrative, physical, and technical safeguards. We provide signed Business Associate Agreements (BAAs) and undergo regular security audits to ensure your patient data remains protected.
            </p>
          </details>
          
          <details className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-black/10 dark:border-white/10 group">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
              <span>How do you integrate with our existing systems?</span>
              <span className="ml-4 transform group-open:rotate-180 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-6 text-black/70 dark:text-white/70 leading-relaxed">
              We support industry-standard protocols like FHIR R4 and HL7, making integration seamless with major EHR systems. Our platform also provides secure REST APIs, webhooks, and real-time data synchronization capabilities.
            </p>
          </details>
          
          <details className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-black/10 dark:border-white/10 group">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
              <span>Can AI models be customized for our organization?</span>
              <span className="ml-4 transform group-open:rotate-180 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-6 text-black/70 dark:text-white/70 leading-relaxed">
              Absolutely. Our data science team works closely with your clinical experts to adapt and fine-tune AI models for your specific patient populations, clinical workflows, and organizational goals. We ensure models reflect your unique care patterns and outcomes.
            </p>
          </details>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="mt-24">
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Patient Care?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join 500+ healthcare organizations already using AI to improve patient outcomes and reduce costs. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/pricing" className="group inline-flex items-center gap-2 rounded-2xl bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Start Free Trial
              <ArrowRightIcon />
            </a>
            <a href="/about" className="inline-flex items-center gap-2 rounded-2xl border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all duration-200">
              Schedule Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="mt-16">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 rounded-3xl border border-emerald-200 dark:border-emerald-800 p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900">
              <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Smart Specialist Referrals</h3>
              <p className="text-black/70 dark:text-white/70">
                AI-powered recommendations for the right specialist based on patient risk profiles and clinical history.
              </p>
            </div>
          </div>
          <a href="/pricing" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg">
            Get Started
            <ArrowRightIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
