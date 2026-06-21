import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { academy } from "../data/academy";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-[var(--cream)]/90 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt={academy.name} className="h-10 w-auto" />
            <span className="font-display font-semibold text-base text-white">
              {academy.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--cream)]/70">
            {academy.tagline} — CBSE / ICSE / State Board, plus practical skills
            programs for school, college and working professionals.
          </p>
          <p className="text-xs font-mono mt-4 text-[var(--cream)]/50">
            Founder: {academy.founder}, {academy.founderCreds}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-wide uppercase text-[var(--marigold)] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/school-boards" className="hover:text-[var(--marigold)] transition-colors">School Boards (6th–12th)</Link></li>
            <li><Link to="/skills-programs" className="hover:text-[var(--marigold)] transition-colors">Skills Programs</Link></li>
            <li><Link to="/about" className="hover:text-[var(--marigold)] transition-colors">About the Academy</Link></li>
            <li><Link to="/enroll" className="hover:text-[var(--marigold)] transition-colors">Enroll Now</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-wide uppercase text-[var(--marigold)] mb-4">
            Reach Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--marigold)]" />
              <span>{academy.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-[var(--marigold)]" />
              <a href={`tel:${academy.phone}`} className="font-mono hover:text-[var(--marigold)] transition-colors">
                {academy.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle size={16} className="shrink-0 text-[var(--marigold)]" />
              <a href={academy.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-[var(--marigold)] transition-colors">
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-[var(--marigold)]" />
              <a href={`mailto:${academy.email}`} className="hover:text-[var(--marigold)] transition-colors break-all">
                {academy.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-xs text-[var(--cream)]/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {academy.name}. All rights reserved.</span>
          <span>Center & Online batches — Kumbakonam</span>
        </div>
      </div>
    </footer>
  );
}
