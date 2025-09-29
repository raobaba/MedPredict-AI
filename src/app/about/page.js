import ContactForm from "../../components/ContactForm";

export default function AboutPage() {
  return (
    <div className="py-16">
      <section>
        <h1 className="text-3xl sm:text-5xl font-bold">About MedPredict AI</h1>
        <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl">
          We build predictive AI tools that empower clinicians and administrators to make proactive, data-driven decisions. Our mission is to improve outcomes while reducing costs across the continuum of care.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-medium">Alex Rivera</h3>
            <p className="text-sm text-black/70 dark:text-white/70">CEO • 10+ years in health tech strategy</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-medium">Dr. Priya Shah</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Chief Clinical Scientist • MD, MPH</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-medium">Evan Lee</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Head of Engineering • ML & infra</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-16">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-8">
          <h2 className="text-2xl font-semibold">Contact us</h2>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">We’ll get back to you within 1–2 business days.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}


