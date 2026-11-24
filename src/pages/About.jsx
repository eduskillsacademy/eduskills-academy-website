import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { academy } from "../data/academy";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div>
      <SEO
  title="About EduSkills Academy | Tuition & Skills Centre in Kumbakonam"
  description="Learn about EduSkills Academy in Kumbakonam, a tuition and skills centre combining school subject support with Spoken English, Aptitude, AI and practical learning."
  path="/about"
/>
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <span className="font-mono text-xs tracking-wide uppercase text-[var(--amber)]">
          About Us
        </span>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--navy)] mt-3 mb-6">
          Built on one idea: exams and real skills shouldn't be separate.
        </h1>
        <p className="text-[var(--navy)]/70 leading-relaxed text-lg max-w-2xl">
          {academy.name} is a tuition and skills centre in Kumbakonam, teaching
          school board curriculum alongside practical, hands-on skills like
          spoken English, aptitude and AI tools — so students leave ready for
          both their exams and what comes after them.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-10">
        <div className="bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm px-8 py-9 flex flex-col sm:flex-row gap-7 items-start">
          <div className="w-16 h-16 rounded-full bg-[var(--navy)] flex items-center justify-center shrink-0">
            <GraduationCap size={28} className="text-[var(--marigold)]" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-[var(--navy)]/50 mb-1">Founder</p>
            <h2 className="font-display font-semibold text-2xl text-[var(--navy)] mb-1">
              {academy.founder}
            </h2>
            <p className="text-sm text-[var(--amber)] font-medium mb-4">{academy.founderCreds}</p>
            <p className="text-[var(--navy)]/70 text-sm leading-relaxed">
                R. Mahesh Priya is a Mathematics Research Scholar and the
                Founder of {academy.name}, with 7 years of tutoring experience
                in Mathematics, Aptitude, and Spoken English. She is
                passionate about empowering students through personalized
                learning, skill development, and practical teaching methods
                that help learners achieve academic and career success.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-10">
        <h2 className="font-display font-semibold text-2xl text-[var(--navy)] mb-6">
          What makes us different
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { title: "Two tracks, one centre", body: "Board exam tuition and practical skills programs, taught under one roof so students don't need to look elsewhere." },
            { title: "Bilingual instruction", body: "Classes available in both Tamil and English medium across CBSE, ICSE and State Board." },
            { title: "Center & online", body: "Join in person at our Kumbakonam centre, or attend live online from anywhere." },
            { title: "Beyond the syllabus", body: "Spoken English, aptitude and AI tools training give students skills the classroom alone doesn't cover." },
          ].map((f) => (
            <div key={f.title} className="bg-[var(--paper)] rounded-xl px-6 py-5">
              <h3 className="font-display font-semibold text-[var(--navy)] mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--navy)]/65 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-14">
        <div className="bg-[var(--navy)] rounded-2xl px-8 py-10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-[var(--marigold)] mt-1 shrink-0" size={22} />
            <div>
              <p className="font-display font-semibold text-lg">Visit us in Kumbakonam</p>
              <p className="text-white/70 text-sm mt-1">{academy.address}</p>
            </div>
          </div>
          <Link
            to="/enroll"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--marigold)] text-[var(--navy-deep)] font-semibold text-sm hover:bg-white transition-colors shrink-0"
          >
            Enroll Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
