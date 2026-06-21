import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { academy } from "../data/academy";

export default function Contact() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <span className="font-mono text-xs tracking-wide uppercase text-[var(--amber)]">
          Get in Touch
        </span>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--navy)] mt-3 mb-4">
          We're here to help
        </h1>
        <p className="text-[var(--navy)]/70 max-w-xl">
          Have a question about a batch, fee, or which program fits best? Reach us any of these ways.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 grid sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <a href={`tel:${academy.phone}`} className="flex items-center gap-4 bg-white rounded-xl border border-[var(--navy)]/10 px-6 py-5 hover:border-[var(--marigold)] transition-colors">
            <div className="w-11 h-11 rounded-full bg-[var(--navy)]/8 flex items-center justify-center shrink-0">
              <Phone size={19} className="text-[var(--navy)]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[var(--navy)]/50">Call</p>
              <p className="font-semibold text-[var(--navy)]">{academy.phoneDisplay}</p>
            </div>
          </a>

          <a href={academy.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white rounded-xl border border-[var(--navy)]/10 px-6 py-5 hover:border-[var(--marigold)] transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
              <MessageCircle size={19} className="text-[#25D366]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[var(--navy)]/50">WhatsApp</p>
              <p className="font-semibold text-[var(--navy)]">Chat with us instantly</p>
            </div>
          </a>

          <a href={`mailto:${academy.email}`} className="flex items-center gap-4 bg-white rounded-xl border border-[var(--navy)]/10 px-6 py-5 hover:border-[var(--marigold)] transition-colors">
            <div className="w-11 h-11 rounded-full bg-[var(--navy)]/8 flex items-center justify-center shrink-0">
              <Mail size={19} className="text-[var(--navy)]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[var(--navy)]/50">Email</p>
              <p className="font-semibold text-[var(--navy)] text-sm break-all">{academy.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white rounded-xl border border-[var(--navy)]/10 px-6 py-5">
            <div className="w-11 h-11 rounded-full bg-[var(--navy)]/8 flex items-center justify-center shrink-0">
              <Clock size={19} className="text-[var(--navy)]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[var(--navy)]/50">Hours</p>
              <p className="font-semibold text-[var(--navy)] text-sm">
                Mon – Sat: 6:00 PM – 9:30 PM
                <br />
                Sunday: Morning batch
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[var(--navy)]/10 px-6 py-6 flex flex-col">
          <div className="flex items-start gap-3 mb-4">
            <MapPin size={19} className="text-[var(--amber)] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-mono uppercase text-[var(--navy)]/50">Visit Us</p>
              <p className="font-semibold text-[var(--navy)] text-sm mt-1">{academy.address}</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden min-h-[260px] border border-[var(--navy)]/10">
            <iframe
              title="EduSkills Academy location"
              className="w-full h-full min-h-[260px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(academy.address)}&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
