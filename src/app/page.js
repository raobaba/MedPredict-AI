export default function Home() {
  return (
    <div className="py-16">
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Predictive healthcare insights with MedPredict AI
        </h1>
        <p className="mt-6 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Turn patient data into proactive care decisions. Accurate forecasts, clear dashboards, and secure workflows.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/pricing" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90">
            Get Started
          </a>
          <a href="/about" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">
            Learn More
          </a>
        </div>
      </section>

      <section className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-lg">Clinical Risk Prediction</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Identify high-risk patients early with explainable AI models.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-lg">Operational Forecasting</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Anticipate admissions, staffing needs, and resource utilization.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-lg">Compliance & Security</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">HIPAA-ready encryption, role-based access, and audit trails.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-lg">Dashboards & Alerts</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Real-time insights and alerting into EHR and ops systems.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-lg">API & Integrations</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Connect via FHIR, HL7, and secure webhooks with ease.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-lg">Privacy by Design</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Data minimization, encryption at rest and in transit.</p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">What customers say</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
            <p className="text-sm text-black/80 dark:text-white/80">“MedPredict AI helped reduce readmissions by 12% within a quarter. The insights are actionable and trustworthy.”</p>
            <p className="mt-4 text-sm font-medium">Dr. A. Nguyen, Chief Medical Officer</p>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
            <p className="text-sm text-black/80 dark:text-white/80">“Forecasting bed demand improved staffing decisions and cut overtime spend significantly.”</p>
            <p className="mt-4 text-sm font-medium">J. Patel, Operations Director</p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">For Doctors</h2>
          <a href="/pricing" className="hidden sm:inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">Explore Plans</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-semibold">Patient Risk Stratification</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Panel-wide risk scores with explanations and confidence intervals.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-semibold">Care Pathway Suggestions</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Guideline-based recommendations embedded in clinical workflows.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-semibold">In-basket Alerts</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Timely flags for deterioration, med adherence, and follow-ups.</p>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="text-xl font-semibold">Clinical workflow</h3>
          <ol className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><span className="h-6 w-6 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xs">1</span><span>Connect EHR data via FHIR/HL7</span></li>
            <li className="flex items-start gap-3"><span className="h-6 w-6 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xs">2</span><span>Run risk models and surface insights in the chart</span></li>
            <li className="flex items-start gap-3"><span className="h-6 w-6 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xs">3</span><span>Trigger tasks, referrals, and patient outreach</span></li>
            <li className="flex items-start gap-3"><span className="h-6 w-6 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xs">4</span><span>Measure outcomes, iterate models, close the loop</span></li>
          </ol>
        </div>
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
          <h3 className="text-xl font-semibold">Clinical metrics</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
              <div className="text-3xl font-bold">12%</div>
              <div className="text-xs text-black/70 dark:text-white/70">Readmission reduction</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
              <div className="text-3xl font-bold">18%</div>
              <div className="text-xs text-black/70 dark:text-white/70">ED revisit reduction</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xs text-black/70 dark:text-white/70">No-show decrease</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
              <div className="text-3xl font-bold">3x</div>
              <div className="text-xs text-black/70 dark:text-white/70">Care team productivity</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h3 className="text-xl font-semibold text-center">Integrates with your EHR</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
          <div className="h-12 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center text-xs opacity-70">Epic</div>
          <div className="h-12 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center text-xs opacity-70">Cerner</div>
          <div className="h-12 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center text-xs opacity-70">Athenahealth</div>
          <div className="h-12 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center text-xs opacity-70">Allscripts</div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-black/10 dark:divide-white/10 rounded-2xl border border-black/10 dark:border-white/10">
          <details className="p-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">Is MedPredict AI HIPAA compliant?</span>
              <span className="text-black/60 dark:text-white/60 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-sm text-black/70 dark:text-white/70">Yes. We follow strict administrative, physical, and technical safeguards and will sign BAAs.</p>
          </details>
          <details className="p-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">How do you integrate with our systems?</span>
              <span className="text-black/60 dark:text-white/60 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-sm text-black/70 dark:text-white/70">We support common standards like FHIR/HL7 and provide secure APIs and webhooks.</p>
          </details>
          <details className="p-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">Can models be customized?</span>
              <span className="text-black/60 dark:text-white/60 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-sm text-black/70 dark:text-white/70">Yes, our team collaborates to adapt models for your populations and workflows.</p>
          </details>
        </div>
      </section>

      <section className="mt-20 text-center">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to transform your care delivery?</h2>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70">Start a 14-day free trial. No credit card required.</p>
          <div className="mt-6">
            <a href="/pricing" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90">
              View Plans
            </a>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Refer a patient to a specialist</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">Smart suggestions for the right specialist based on risk and history.</p>
          </div>
          <a href="/pricing" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90">Get Started</a>
        </div>
      </section>
    </div>
  );
}
