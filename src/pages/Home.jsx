import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, MapPin, Phone } from "lucide-react";
import { boardPrograms, skillPrograms, academy } from "../data/academy";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--navy)]/10">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(0deg, var(--navy) 0px, var(--navy) 1px, transparent 1px, transparent 32px)"
          }} />
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-[var(--amber)] bg-[var(--marigold)]/15 px-3 py-1.5 rounded-full mb-6">
              Kumbakonam · Center & Online
            </span>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl text-[var(--navy)] leading-[1.05] mb-6">
              Where board exams
              <br />
              <span className="text-[var(--amber)]">and real skills</span>
              <br />
              are taught together.
            </h1>
            <p className="text-lg text-[var(--navy)]/70 leading-relaxed mb-8 max-w-lg">
              {academy.name} runs two tracks under one roof: CBSE / ICSE / State
              Board tuition from 6th to 12th, and practical skills programs —
              Spoken English, Aptitude, AI Tools — for students and professionals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--navy)] text-white font-semibold hover:bg-[var(--navy-deep)] transition-colors"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${academy.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[var(--navy)] text-[var(--navy)] font-semibold hover:bg-[var(--navy)]/5 transition-colors"
              >
                <Phone size={18} /> Call {academy.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE: THE LEDGER — two tracks as a noticeboard timetable */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs tracking-wide uppercase text-[var(--amber)]">
              The Academy Ledger
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[var(--navy)] mt-2">
              Two tracks, one academy
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Track 1: School Boards */}
          <div className="bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm overflow-hidden">
            <div className="bg-[var(--navy)] px-6 py-5 flex items-center gap-3">
              <BookOpen size={22} className="text-[var(--marigold)]" />
              <div>
                <h3 className="font-display font-semibold text-xl text-white">School Boards</h3>
                <p className="text-xs font-mono text-white/60">CBSE · ICSE · State Board — Tamil & English</p>
              </div>
            </div>
            <div className="divide-y divide-[var(--navy)]/8">
              {boardPrograms.map((p) => (
                <div key={p.code} className="px-6 py-4 flex items-start gap-4">
                  <span className="font-mono text-xs text-[var(--amber)] bg-[var(--marigold)]/10 px-2 py-1 rounded mt-0.5 shrink-0">
                    {p.code}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--navy)] text-sm">
                      {p.range} <span className="font-normal text-[var(--navy)]/60">— {p.title}</span>
                    </p>
                    <p className="text-sm text-[var(--navy)]/60 mt-0.5">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/school-boards"
              className="flex items-center justify-between px-6 py-4 bg-[var(--paper)] text-[var(--navy)] font-semibold text-sm hover:bg-[var(--marigold)]/15 transition-colors"
            >
              View full board curriculum <ArrowRight size={16} />
            </Link>
          </div>

          {/* Track 2: Skills */}
          <div className="bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm overflow-hidden">
            <div className="bg-[var(--amber)] px-6 py-5 flex items-center gap-3">
              <Sparkles size={22} className="text-white" />
              <div>
                <h3 className="font-display font-semibold text-xl text-white">Skills Programs</h3>
                <p className="text-xs font-mono text-white/70">For students, graduates & professionals</p>
              </div>
            </div>
            <div className="divide-y divide-[var(--navy)]/8">
              {skillPrograms.map((p) => (
                <div key={p.slug} className="px-6 py-4 flex items-start gap-4">
                  <span className="font-mono text-xs text-[var(--navy)] bg-[var(--navy)]/8 px-2 py-1 rounded mt-0.5 shrink-0">
                    {p.code}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--navy)] text-sm">{p.title}</p>
                    <p className="text-sm text-[var(--navy)]/60 mt-0.5">{p.short}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/skills-programs"
              className="flex items-center justify-between px-6 py-4 bg-[var(--paper)] text-[var(--navy)] font-semibold text-sm hover:bg-[var(--marigold)]/15 transition-colors"
            >
              View all skills programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[var(--navy)] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid sm:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl text-[var(--marigold)] mb-2">All Boards</p>
            <p className="text-white/70 text-sm leading-relaxed">
              CBSE, ICSE and State Board — Tamil and English medium, under one roof.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-[var(--marigold)] mb-2">6th to PhD-level Faculty</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Led by {academy.founder} ({academy.founderCreds}), with subject-wise expert teachers.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-[var(--marigold)] mb-2">Center + Online</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Attend in person at Kumbakonam or join live online batches from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="bg-[var(--paper)] rounded-2xl px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-[var(--amber)] mt-1 shrink-0" size={24} />
            <div>
              <p className="font-display font-semibold text-lg text-[var(--navy)]">Visit our center</p>
              <p className="text-[var(--navy)]/70 text-sm mt-1">{academy.address}</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--navy)] text-white font-semibold text-sm hover:bg-[var(--navy-deep)] transition-colors shrink-0"
          >
            Get Directions & Contact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
