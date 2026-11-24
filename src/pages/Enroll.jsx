import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2, Send, CreditCard, Info, AlertCircle, Loader2 } from "lucide-react";
import { boardPrograms, skillPrograms, academy } from "../data/academy";
import SEO from "../components/SEO";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqevzqgl";

const allProgramNames = [
  ...boardPrograms.map((p) => `${p.range} — ${p.title}`),
  ...skillPrograms.map((p) => p.title),
];

export default function Enroll() {
  const location = useLocation();
  const preselected = location.state?.program || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: preselected,
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div 
        return (
  <div>
    <SEO
      title="Enquire About Classes | EduSkills Academy Kumbakonam"
      description="Send an admission enquiry to EduSkills Academy in Kumbakonam for school tuition, higher secondary coaching and skill development programmes."
      path="/enroll"
    />
    <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-8">
      className="max-w-xl mx-auto px-5 sm:px-8 py-24 text-center">
        <CheckCircle2 size={52} className="text-[var(--sage)] mx-auto mb-5" />
        <h1 className="font-display font-semibold text-3xl text-[var(--navy)] mb-3">
          Enquiry received
        </h1>
        <p className="text-[var(--navy)]/70 mb-2">
          Thanks, {form.name || "there"}! Your enquiry has been sent to our
          team — we'll reach out shortly to confirm your batch and fees.
        </p>
        <p className="text-[var(--navy)]/50 text-sm">
          In the meantime, reach us directly at{" "}
          <a href={`tel:${academy.phone}`} className="underline">{academy.phoneDisplay}</a> or{" "}
          <a href={academy.whatsappLink} className="underline">WhatsApp</a>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <span className="font-mono text-xs tracking-wide uppercase text-[var(--amber)]">
          Enroll
        </span>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--navy)] mt-3 mb-4">
          Let's get you started
        </h1>
        <p className="text-[var(--navy)]/70">
          Fill in your details and the program you're interested in. We'll
          reach out to confirm your batch and fees.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm px-7 py-8 space-y-5">
          <input type="hidden" name="_subject" value="New Enrollment Enquiry — EduSkills Academy" />
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                Student name
              </label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-lg border border-[var(--navy)]/15 focus:border-[var(--marigold)] outline-none text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                Phone number
              </label>
              <input
                id="phone" name="phone" type="tel" required
                value={form.phone} onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-lg border border-[var(--navy)]/15 focus:border-[var(--marigold)] outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
              Email <span className="font-normal text-[var(--navy)]/40">(optional)</span>
            </label>
            <input
              id="email" name="email" type="email"
              value={form.email} onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-[var(--navy)]/15 focus:border-[var(--marigold)] outline-none text-sm"
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
              Program interested in
            </label>
            <select
              id="program" name="program" required
              value={form.program} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[var(--navy)]/15 focus:border-[var(--marigold)] outline-none text-sm bg-white"
            >
              <option value="">Select a program</option>
              {allProgramNames.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
              Anything else we should know? <span className="font-normal text-[var(--navy)]/40">(optional)</span>
            </label>
            <textarea
              id="message" name="message" rows={3}
              value={form.message} onChange={handleChange}
              placeholder="Preferred batch timing, board, standard, etc."
              className="w-full px-4 py-3 rounded-lg border border-[var(--navy)]/15 focus:border-[var(--marigold)] outline-none text-sm resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2.5 bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>
                Something went wrong sending your enquiry. Please try again,
                or contact us directly at{" "}
                <a href={`tel:${academy.phone}`} className="underline">{academy.phoneDisplay}</a>.
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--navy)] text-white font-semibold hover:bg-[var(--navy-deep)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                Sending <Loader2 size={17} className="animate-spin" />
              </>
            ) : (
              <>
                Submit Enquiry <Send size={17} />
              </>
            )}
          </button>
        </form>

        {/* Payment-ready section, clearly marked as not yet connected */}
        <div className="mt-8 bg-[var(--paper)] rounded-2xl px-7 py-6">
          <div className="flex items-start gap-3 mb-3">
            <CreditCard size={20} className="text-[var(--amber)] mt-0.5 shrink-0" />
            <h2 className="font-display font-semibold text-lg text-[var(--navy)]">
              Paying for a course?
            </h2>
          </div>
          <p className="text-sm text-[var(--navy)]/65 leading-relaxed mb-3">
            Online fee payment isn't connected yet. Once we set up a payment
            gateway (Razorpay or similar — needs your business KYC and bank
            details), this section becomes a real checkout. For now, please
            pay fees directly at the centre or as guided by our team after
            your enquiry.
          </p>
          <div className="flex items-start gap-2 text-xs text-[var(--navy)]/45 bg-white rounded-lg px-4 py-3">
            <Info size={14} className="mt-0.5 shrink-0" />
            <span>This is a placeholder area for the team building this site — wire up a payment gateway here before launch.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
