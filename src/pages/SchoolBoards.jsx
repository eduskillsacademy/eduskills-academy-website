import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { boardPrograms } from "../data/academy";

export default function SchoolBoards() {
  return (
    <div>
      <section className="bg-[var(--navy)] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
          <span className="font-mono text-xs tracking-wide uppercase text-[var(--marigold)]">
            Track 01
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-3 mb-4">
            School Boards
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            CBSE, ICSE and State Board tuition — Tamil and English medium —
            from 6th standard through college-level mathematics support.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-8">
        {boardPrograms.map((p) => (
          <div key={p.code} className="bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm overflow-hidden">
            <div className="px-7 py-6 border-b border-[var(--navy)]/8 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-[var(--amber)]">{p.code}</span>
                <h2 className="font-display font-semibold text-2xl text-[var(--navy)] mt-1">
                  {p.range}
                </h2>
                <p className="text-sm text-[var(--navy)]/60 mt-1">{p.subtitle}</p>
              </div>
              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--marigold)] text-[var(--navy-deep)] font-semibold text-sm hover:bg-[var(--amber)] hover:text-white transition-colors"
              >
                Enroll <ArrowRight size={15} />
              </Link>
            </div>
            <div className="px-7 py-6">
              <p className="text-sm font-semibold text-[var(--navy)]/50 uppercase tracking-wide mb-3 font-mono">
                Subjects Covered
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {p.subjects.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-[var(--navy)]/80 text-sm">
                    <CheckCircle2 size={16} className="text-[var(--sage)] shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="bg-[var(--paper)] rounded-2xl px-8 py-10 text-center">
          <h3 className="font-display font-semibold text-2xl text-[var(--navy)] mb-3">
            Not sure which batch fits your child?
          </h3>
          <p className="text-[var(--navy)]/70 mb-6 max-w-md mx-auto text-sm">
            Call us or send an enrollment enquiry and we'll guide you to the right standard and batch.
          </p>
          <Link
            to="/enroll"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--navy)] text-white font-semibold hover:bg-[var(--navy-deep)] transition-colors"
          >
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
