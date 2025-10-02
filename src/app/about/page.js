import ContactForm from "../../components/ContactForm";

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

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="py-8 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-3xl"></div>
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8">
            <HeartIcon />
            <span>Transforming Healthcare with AI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
            About MedPredict AI
          </h1>
          <p className="text-xl sm:text-2xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
            We build predictive AI tools that empower clinicians and administrators to make proactive, data-driven decisions. 
            <br className="hidden sm:block" />
            Our mission is to improve patient outcomes while reducing costs across the continuum of care.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2019</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">500+</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Healthcare Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">50+</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">95%</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/60">Customer Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mt-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-3xl border border-blue-200 dark:border-blue-800 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900">
                <TargetIcon />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg">
              To democratize predictive healthcare analytics by making advanced AI accessible to healthcare organizations of all sizes. We believe every patient deserves the benefit of data-driven, proactive care.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-3xl border border-purple-200 dark:border-purple-800 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900">
                <LightbulbIcon />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg">
              A future where AI-powered insights enable healthcare providers to predict, prevent, and treat conditions before they become critical, ultimately saving lives and reducing healthcare costs globally.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-black/70 dark:text-white/70">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50">
                <HeartIcon />
              </div>
              <h3 className="font-bold text-xl">Patient-First</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Every decision we make is guided by what's best for patient outcomes and safety.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50">
                <ShieldIcon />
              </div>
              <h3 className="font-bold text-xl">Privacy & Security</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              We maintain the highest standards of data protection and regulatory compliance.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50">
                <LightbulbIcon />
              </div>
              <h3 className="font-bold text-xl">Innovation</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              We continuously push the boundaries of what's possible with healthcare AI.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50">
                <UsersIcon />
              </div>
              <h3 className="font-bold text-xl">Collaboration</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              We work closely with healthcare professionals to build solutions that truly work.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50">
                <StarIcon />
              </div>
              <h3 className="font-bold text-xl">Excellence</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              We strive for the highest quality in our products, services, and customer relationships.
            </p>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50">
                <BrainIcon />
              </div>
              <h3 className="font-bold text-xl">Transparency</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Our AI models are explainable and our processes are open to scrutiny and improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-black/70 dark:text-white/70">
            Experienced leaders driving innovation in healthcare AI
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                AR
              </div>
              <h3 className="text-xl font-bold mb-2">Alex Rivera</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
                10+ years in health tech strategy. Former VP at Epic Systems. Stanford MBA with focus on healthcare innovation.
              </p>
              <div className="flex gap-3 mt-6">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <UsersIcon />
                </div>
              </div>
            </div>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                PS
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Priya Shah</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Chief Clinical Scientist</p>
              <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
                MD, MPH from Johns Hopkins. 15+ years in clinical research and AI applications in medicine. Published author on predictive analytics.
              </p>
              <div className="flex gap-3 mt-6">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <AcademicCapIcon />
                </div>
              </div>
            </div>
          </div>
          
          <div className="group rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                EL
              </div>
              <h3 className="text-xl font-bold mb-2">Evan Lee</h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-4">Head of Engineering</p>
              <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
                ML & infrastructure expert. Former Principal Engineer at Google Health. PhD in Computer Science from MIT specializing in healthcare AI.
              </p>
              <div className="flex gap-3 mt-6">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                  <CodeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-24">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl border border-indigo-200 dark:border-indigo-800 p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Our Team</h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              Ready to transform your healthcare organization with AI? We'll get back to you within 1–2 business days.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Our Office</h3>
                  <p className="text-black/70 dark:text-white/70">
                    123 Healthcare Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone & Email</h3>
                  <p className="text-black/70 dark:text-white/70">
                    +1 (555) 123-4567<br />
                    hello@medpredict.ai<br />
                    support@medpredict.ai
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday: 10:00 AM - 2:00 PM PST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-indigo-200 dark:border-indigo-800">
            <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


