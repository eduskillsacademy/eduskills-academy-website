import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { skillPrograms } from "../data/academy";
import SEO from "../components/SEO";

export default function SkillsProgramsList() {
  return (
    <div>
      <SEO
        title="Spoken English, Coding & AI Classes in Kumbakonam | EduSkills"
        description="Explore Spoken English, Speed Maths, Quantitative Aptitude, AI Tools and Computer Coding classes at EduSkills Academy in Kumbakonam."
        path="/skills-programs"
      />
      <section className="bg-[var(--amber)] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
          <span className="font-mono text-xs tracking-wide uppercase text-white/80">
            Track 02
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-3 mb-4">
            Skills Programs
          </h1>
          <p className="text-white/85 max-w-xl leading-relaxed">
            Practical, hands-on programs for students, graduates and working
            professionals — built for confidence in the real world, not just exams.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {skillPrograms.map((p) => (
            <Link
              key={p.slug}
              to={`/skills-programs/${p.slug}`}
              className="group bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm overflow-hidden hover:border-[var(--marigold)] hover:shadow-md transition-all"
            >
              <div className="px-7 py-6">
                <span className="font-mono text-xs text-[var(--amber)] bg-[var(--marigold)]/10 px-2 py-1 rounded">
                  {p.code}
                </span>
                <h2 className="font-display font-semibold text-xl text-[var(--navy)] mt-3 mb-2">
                  {p.title}
                </h2>
                <p className="text-sm text-[var(--navy)]/65 leading-relaxed mb-4">
                  {p.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--navy)] group-hover:text-[var(--amber)] transition-colors">
                  View details <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
