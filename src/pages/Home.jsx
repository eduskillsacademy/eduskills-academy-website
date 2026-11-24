import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, BookOpen, Brain, Code2, GraduationCap,
  Languages, Sparkles, Star, Zap, CheckCircle2
} from "lucide-react";
import { academy, skillPrograms } from "../data/academy";
import "./Home.css";

const tracks = [
  {
    tag: "01 / ACADEMICS",
    title: "Learn it. Understand it. Own it.",
    description: "Strong subject foundations, clear explanations and focused practice for every school milestone.",
    detail: "Classes 1–10 · All subjects",
    icon: BookOpen,
    color: "blue",
    href: "/school-boards",
    symbol: "A+",
  },
  {
    tag: "02 / BOARD EXAMS",
    title: "Your goals deserve a game plan.",
    description: "Focused subject support for senior students preparing for important board examinations.",
    detail: "Classes 11–12 · Maths, Science & more",
    icon: GraduationCap,
    color: "purple",
    href: "/school-boards",
    symbol: "12",
  },
  {
    tag: "03 / COMMUNICATION",
    title: "Find your voice. Make it count.",
    description: "Build practical English, grammar and communication skills through active practice.",
    detail: "Spoken English · Grammar",
    icon: Languages,
    color: "orange",
    href: "/skills-programs/spoken-english",
    symbol: "Hi!",
  },
  {
    tag: "04 / FUTURE SKILLS",
    title: "Get ready for what’s next.",
    description: "Explore coding, AI tools, computing and aptitude with hands-on learning.",
    detail: "Coding · AI · Aptitude · Speed Maths",
    icon: Code2,
    color: "green",
    href: "/skills-programs",
    symbol: "01",
  },
];

const benefits = [
  "Concept-first teaching, not rote learning",
  "Academic support and practical skills in one place",
  "Learning options for school, college and beyond",
];

export default function Home() {
  return (
    <div className="mv-home">
      <section className="mv-hero">
        <div className="mv-hero-blob mv-blob-a" />
        <div className="mv-hero-blob mv-blob-b" />
        <div className="mv-container mv-hero-layout">
          <div className="mv-hero-content">
            <div className="mv-kicker"><span className="mv-kicker-dot" /> LEARN BOLDLY. GROW LIMITLESSLY.</div>
            <h1>Big dreams need<br /><span className="mv-gradient-text">bright beginnings.</span></h1>
            <p className="mv-hero-lead">
              More than tuition. More than skills. A place where curious minds
              build strong foundations, discover their strengths and get ready
              for what comes next.
            </p>
            <div className="mv-hero-buttons">
              <Link to="/enroll" className="mv-btn mv-btn-primary">Start your learning journey <ArrowUpRight size={18} /></Link>
              <Link to="/school-boards" className="mv-btn mv-btn-quiet">Explore academics <ArrowRight size={17} /></Link>
            </div>
            <div className="mv-hero-footnote">
              <span className="mv-footnote-icon"><Sparkles size={17} /></span>
              <span><strong>One academy. Many possibilities.</strong><small>Academic excellence meets future-ready skills.</small></span>
            </div>
          </div>

          <div className="mv-hero-art" aria-label="Learning and creativity illustration">
            <div className="mv-art-backdrop" />
            <div className="mv-art-card mv-art-main">
              <div className="mv-art-topline"><span>YOUR NEXT CHAPTER</span><span className="mv-art-live"><i /> LET'S GO</span></div>
              <div className="mv-art-illustration">
                <div className="mv-sun" />
                <div className="mv-book book-one" />
                <div className="mv-book book-two" />
                <div className="mv-pencil" />
                <div className="mv-star star-one">✦</div>
                <div className="mv-star star-two">✳</div>
                <div className="mv-orbit-label">IDEAS<br />IN MOTION</div>
              </div>
              <div className="mv-art-bottom"><strong>Think curious.</strong><span>Learn with confidence.</span></div>
            </div>
            <div className="mv-float-card mv-float-top"><span className="mv-float-icon purple"><Brain size={18} /></span><span><b>Think smarter</b><small>Build problem-solving skills</small></span></div>
            <div className="mv-float-card mv-float-bottom"><span className="mv-float-icon orange"><Zap size={18} /></span><span><b>Grow every day</b><small>Small steps. Big progress.</small></span></div>
            <div className="mv-round-sticker"><span>LEARN</span><b>+</b><span>CREATE</span></div>
          </div>
        </div>
        <div className="mv-hero-ribbon">
          <div className="mv-container mv-ribbon-inner">
            <span>ACADEMIC SUPPORT</span><i /><span>COMMUNICATION</span><i /><span>CREATIVE THINKING</span><i /><span>DIGITAL SKILLS</span>
          </div>
        </div>
      </section>

      <section className="mv-intro mv-section">
        <div className="mv-container mv-intro-grid">
          <div><span className="mv-label">WELCOME TO EDUSKILLS ACADEMY</span><h2>Make room for <span className="mv-gradient-text">what you can become.</span></h2></div>
          <div className="mv-intro-copy"><p>Every learner has a different starting point and a bigger possibility ahead. We bring school learning and real-world skills together, so progress feels clear, practical and exciting.</p><Link to="/about" className="mv-inline-link">Meet the academy <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="mv-tracks mv-section">
        <div className="mv-container">
          <div className="mv-section-head"><div><span className="mv-label">FIND YOUR PATH</span><h2>Choose your next <span className="mv-gradient-text">big move.</span></h2></div><p>Explore learning pathways designed to build confidence today and open doors tomorrow.</p></div>
          <div className="mv-track-grid">
            {tracks.map((track) => {
              const Icon = track.icon;
              return <Link to={track.href} className={`mv-track-card ${track.color}`} key={track.tag}>
                <div className="mv-track-top"><span>{track.tag}</span><span className="mv-track-symbol">{track.symbol}</span></div>
                <div className="mv-track-icon"><Icon size={23} /></div>
                <h3>{track.title}</h3><p>{track.description}</p>
                <div className="mv-track-bottom"><span>{track.detail}</span><span className="mv-track-arrow"><ArrowUpRight size={18} /></span></div>
              </Link>;
            })}
          </div>
        </div>
      </section>

      <section className="mv-feature mv-section">
        <div className="mv-container">
          <div className="mv-feature-panel">
            <div className="mv-feature-copy"><span className="mv-label mv-label-light">STRONG FOUNDATIONS START HERE</span><h2>School learning,<br /><em>made clearer.</em></h2><p>Understand concepts, practise with purpose and prepare for exams with steady guidance and support.</p><div className="mv-feature-pills"><span>Classes 1–10 · All subjects</span><span>Classes 11–12 · Core subjects</span><span>CBSE · ICSE · State Board</span></div><Link to="/school-boards" className="mv-btn mv-btn-white">Explore tuition <ArrowUpRight size={18} /></Link></div>
            <div className="mv-feature-visual"><div className="mv-feature-shape shape-one" /><div className="mv-feature-shape shape-two" /><div className="mv-feature-sheet"><div className="mv-sheet-head"><span>LEARNING MODE</span><span>✦</span></div><div className="mv-sheet-title">Progress<br />looks good<br /><b>on you.</b></div><div className="mv-sheet-lines"><i /><i /><i /></div><div className="mv-sheet-stamp">KEEP<br />GOING!</div></div><div className="mv-feature-bubble"><CheckCircle2 size={17} /><span><b>Concepts first</b><small>Confidence follows</small></span></div></div>
          </div>
        </div>
      </section>

      <section className="mv-skills mv-section">
        <div className="mv-container">
          <div className="mv-section-head"><div><span className="mv-label">SKILLS FOR REAL LIFE</span><h2>Make your curiosity <span className="mv-gradient-text">useful.</span></h2></div><Link to="/skills-programs" className="mv-inline-link mv-desktop-link">Explore all skills <ArrowUpRight size={17} /></Link></div>
          <div className="mv-skill-grid">
            {skillPrograms.slice(0, 5).map((program, index) => <Link to={`/skills-programs/${program.slug}`} className={`mv-skill-card skill-${index + 1}`} key={program.slug}><span className="mv-skill-number">0{index + 1}</span><span className="mv-skill-mark">{["Aa", "×", "↗", "AI", "</>"][index]}</span><h3>{program.title}</h3><p>{program.short}</p><span className="mv-skill-link">Discover programme <ArrowUpRight size={15} /></span></Link>)}
          </div>
          <Link to="/skills-programs" className="mv-inline-link mv-mobile-link">Explore all skills <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="mv-why mv-section">
        <div className="mv-container mv-why-grid">
          <div><span className="mv-label">THE EDUSKILLS DIFFERENCE</span><h2>Progress that feels <span className="mv-gradient-text">personal.</span></h2><p className="mv-why-lead">A supportive learning environment where every question matters, every effort counts and every learner gets room to grow.</p></div>
          <div className="mv-benefits">{benefits.map((benefit, i) => <div className="mv-benefit" key={benefit}><span>0{i + 1}</span><p><CheckCircle2 size={18} />{benefit}</p></div>)}<div className="mv-location"><span className="mv-location-icon">✦</span><div><b>Find us in Kumbakonam</b><small>Visit our centre or ask about online learning.</small></div></div></div>
        </div>
      </section>

      <section className="mv-cta-section"><div className="mv-container"><div className="mv-cta"><div className="mv-cta-spark">✳</div><span className="mv-label mv-label-light">YOUR NEXT STEP STARTS HERE</span><h2>Ready when<br /><em>you are.</em></h2><p>Tell us what you want to learn. We’ll help you find the right programme.</p><div className="mv-cta-actions"><Link to="/enroll" className="mv-btn mv-btn-white">Make an enquiry <ArrowUpRight size={18} /></Link><a href={academy.whatsappLink} target="_blank" rel="noreferrer" className="mv-cta-whatsapp">Chat on WhatsApp <ArrowUpRight size={17} /></a></div><div className="mv-cta-word">E!</div></div></div></section>
    </div>
  );
}
