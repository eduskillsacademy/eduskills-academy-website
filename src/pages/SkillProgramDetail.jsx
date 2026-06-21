import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, MapPinned, IndianRupee } from "lucide-react";
import { skillPrograms } from "../data/academy";

export default function SkillProgramDetail() {
  const { slug } = useParams();
  const program = skillPrograms.find((p) => p.slug === slug);

  if (!program) return <Navigate to="/skills-programs" replace />;

  const isPlaceholder = (val) => typeof val === "string" && val.startsWith("PLACEHOLDER");

  return (
    <div>
      <section className="bg-[var(--navy)] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-14 pb-12">
          <Link to="/skills-programs" className="text-white/60 text-sm hover:text-white transition-colors">
            ← All Skills Programs
          </Link>
          <span className="font-mono text-xs tracking-wide uppercase text-[var(--marigold)] block mt-4">
            {program.code}
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-2 mb-4">
            {program.title}
          </h1>
          <p className="text-white/75 max-w-lg leading-relaxed">{program.short}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-white rounded-xl border border-[var(--navy)]/10 px-5 py-5">
            <Users size={18} className="text-[var(--amber)] mb-2" />
            <p className="text-xs font-mono uppercase text-[var(--navy)]/50 mb-1">Who it's for</p>
            <p className={`text-sm font-medium ${isPlaceholder(program.audience) ? "text-[var(--navy)]/40 italic" : "text-[var(--navy)]"}`}>
              {program.audience}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[var(--navy)]/10 px-5 py-5">
            <MapPinned size={18} className="text-[var(--amber)] mb-2" />
            <p className="text-xs font-mono uppercase text-[var(--navy)]/50 mb-1">Format</p>
            <p className="text-sm font-medium text-[var(--navy)]">{program.format}</p>
          </div>
        </div>

        <h2 className="font-display font-semibold text-2xl text-[var(--navy)] mb-5">
          What you'll cover
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {program.highlights.map((h) => (
            <div key={h} className="flex items-start gap-3 bg-white rounded-xl border border-[var(--navy)]/10 px-5 py-4">
              <CheckCircle2 size={18} className="text-[var(--sage)] shrink-0 mt-0.5" />
              <span className="text-sm text-[var(--navy)]/80">{h}</span>
            </div>
          ))}
        </div>

        <div className="bg-[var(--paper)] rounded-2xl px-7 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <IndianRupee size={22} className="text-[var(--amber)]" />
            <div>
              <p className="text-xs font-mono uppercase text-[var(--navy)]/50">Fees & Batch Timing</p>
              <p className="font-medium text-sm text-[var(--navy)]">
                Contact us for current fees and available batches
              </p>
            </div>
          </div>
          <Link
            to="/enroll"
            state={{ program: program.title }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--navy)] text-white font-semibold hover:bg-[var(--navy-deep)] transition-colors w-full sm:w-auto justify-center"
          >
            Enroll in {program.title} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
