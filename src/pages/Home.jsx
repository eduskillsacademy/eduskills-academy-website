import { Link } from "react-router-dom";
import {
  ArrowUpRight, BookOpen, Brain, Code2, GraduationCap, Languages,
  MapPin, Sparkles, Target, CheckCircle2, ChevronRight
} from "lucide-react";
import { skillPrograms, academy } from "../data/academy";

const pathways = [
  {
    number: "01",
    title: "Academic learning",
    description: "Build strong subject foundations and prepare with confidence for school examinations.",
    meta: "School tuition · Classes 1–12",
    icon: BookOpen,
    tone: "blue",
    href: "/school-boards",
  },
  {
    number: "02",
    title: "Communication",
    description: "Develop everyday English, grammar and the confidence to express ideas clearly.",
    meta: "Spoken English · Grammar",
    icon: Languages,
    tone: "lavender",
    href: "/skills-programs/spoken-english",
  },
  {
    number: "03",
    title: "Logical thinking",
    description: "Strengthen problem-solving through mental mathematics and aptitude practice.",
    meta: "Speed Maths · Aptitude",
    icon: Brain,
    tone: "mint",
    href: "/skills-programs",
  },
  {
    number: "04",
    title: "Digital skills",
    description: "Explore computing, coding and practical AI tools for a changing world.",
    meta: "Coding · AI · Computing",
    icon: Code2,
    tone: "peach",
    href: "/skills-programs",
  },
];

const principles = [
  "Personal attention and structured learning",
  "Academic support alongside practical skills",
  "Learning pathways for different stages of life",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-shell">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="eyebrow-dot" />
              LEARN WITH PURPOSE · GROW WITH CONFIDENCE
            </div>
            <h1>
              A brighter way
              <br />
              to <span className="text-gradient">learn, grow</span>
              <br />
              and move forward.
            </h1>
            <p className="hero-description">
              From strong academic foundations to future-ready skills,
              EduSkills Academy helps learners take their next step with
              clarity and confidence.
            </p>
            <div className="hero-actions">
              <Link to="/skills-programs" className="button-primary">
                Explore programmes <ArrowUpRight size={18} />
              </Link>
              <Link to="/about" className="button-secondary">
                Discover the academy <ChevronRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <div className="proof-icon"><GraduationCap size={19} /></div>
              <div>
                <strong>One place. More ways to grow.</strong>
                <span>Academic learning and practical skills in one academy.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                alt="University students celebrating their learning journey"
                fetchPriority="high"
              />
              <div className="hero-image-wash" />
              <div className="image-caption">
                <span className="caption-kicker">THE NEXT CHAPTER</span>
                <strong>Make learning<br />your advantage.</strong>
              </div>
            </div>
            <div className="floating-note floating-note-top">
              <span className="floating-note-icon"><Sparkles size={17} /></span>
              <span><strong>Curiosity first</strong><small>Confidence follows</small></span>
            </div>
            <div className="floating-note floating-note-bottom">
              <span className="floating-note-icon note-icon-blue"><Target size={18} /></span>
              <span><strong>Skills for tomorrow</strong><small>Learn by doing</small></span>
            </div>
            <div className="hero-stamp">EDU<br /><span>+</span><br />SKILLS</div>
          </div>
        </div>
        <div className="hero-bottom-line">
          <div className="site-container hero-bottom-inner">
            <span>ACADEMIC EXCELLENCE</span><i />
            <span>PERSONAL DEVELOPMENT</span><i />
            <span>FUTURE-READY SKILLS</span>
          </div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="site-container intro-grid">
          <div>
            <span className="section-kicker">THE EDUSKILLS APPROACH</span>
            <h2 className="section-heading">
              Education should prepare you for <span className="text-gradient">more.</span>
            </h2>
          </div>
          <div className="intro-aside">
            <p>
              Learning is more than completing a syllabus. It is about asking
              better questions, communicating clearly and building the
              confidence to take on what comes next.
            </p>
            <Link to="/about" className="text-link">Get to know us <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="pathways-section section-pad">
        <div className="site-container">
          <div className="section-topline">
            <div>
              <span className="section-kicker">EXPLORE YOUR PATH</span>
              <h2 className="section-heading">Find the space to <span className="text-gradient">level up.</span></h2>
            </div>
            <p className="section-side-copy">
              Thoughtfully designed learning experiences for school students,
              college learners and those building new skills.
            </p>
          </div>

          <div className="pathway-grid">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <Link to={item.href} className={`pathway-card pathway-${item.tone}`} key={item.number}>
                  <div className="pathway-card-top">
                    <span className="pathway-number">{item.number} / 04</span>
                    <span className="pathway-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  </div>
                  <div className="pathway-card-content">
                    <span className="pathway-meta">{item.meta}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="pathway-arrow"><ArrowUpRight size={20} /></span>
                </Link>
              );
            })}
          </div>
          <div className="all-programmes-row">
            <span>Explore all learning programmes</span>
            <Link to="/skills-programs" className="text-link">View programmes <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="academic-section section-pad">
        <div className="site-container academic-panel">
          <div className="academic-copy">
            <span className="section-kicker section-kicker-light">A STRONG FOUNDATION</span>
            <h2>Make every subject a step forward.</h2>
            <p>
              Supportive school tuition designed to help learners understand
              concepts, practise with purpose and approach examinations with
              greater confidence.
            </p>
            <div className="academic-tags">
              <span>Classes 1–10 · All subjects</span>
              <span>Classes 11–12 · Selected subjects</span>
              <span>CBSE · ICSE · State Board</span>
            </div>
            <Link to="/school-boards" className="button-light">
              Explore academic tuition <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="academic-art">
            <div className="academic-photo">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
                alt="Students learning together in a classroom"
                loading="lazy"
              />
            </div>
            <div className="academic-orbit orbit-one" />
            <div className="academic-orbit orbit-two" />
            <div className="academic-floating-card">
              <BookOpen size={19} />
              <span><strong>Learn deeply</strong><small>Build lasting understanding</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-pad">
        <div className="site-container">
          <div className="section-topline">
            <div>
              <span className="section-kicker">BEYOND THE CLASSROOM</span>
              <h2 className="section-heading">Skills that stay <span className="text-gradient">with you.</span></h2>
            </div>
            <Link to="/skills-programs" className="text-link desktop-only">See all programmes <ArrowUpRight size={17} /></Link>
          </div>
          <div className="skills-list">
            {skillPrograms.slice(0, 5).map((program, index) => (
              <Link to={`/skills-programs/${program.slug}`} className="skill-row" key={program.slug}>
                <span className="skill-index">0{index + 1}</span>
                <span className="skill-name">{program.title}</span>
                <span className="skill-description">{program.short}</span>
                <ArrowUpRight className="skill-arrow" size={20} />
              </Link>
            ))}
          </div>
          <Link to="/skills-programs" className="text-link mobile-only">See all programmes <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="why-section section-pad">
        <div className="site-container why-grid">
          <div>
            <span className="section-kicker">WHY EDUSKILLS</span>
            <h2 className="section-heading">A thoughtful approach to <span className="text-gradient">every learner.</span></h2>
            <p className="why-intro">
              A learning environment that brings academic support and
              practical development together, with room for every learner
              to progress at their own pace.
            </p>
          </div>
          <div className="principles-list">
            {principles.map((principle, index) => (
              <div className="principle-item" key={principle}>
                <span>0{index + 1}</span>
                <p><CheckCircle2 size={18} />{principle}</p>
              </div>
            ))}
            <div className="delivery-note">
              <MapPin size={19} />
              <div><strong>Learn your way</strong><span>At our Kumbakonam centre or through online classes.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="closing-glow" />
            <span className="section-kicker section-kicker-light">YOUR NEXT STEP STARTS HERE</span>
            <h2>Ready to make<br /><span>progress?</span></h2>
            <p>Tell us what you want to learn. We'll help you find the right programme.</p>
            <div className="hero-actions">
              <Link to="/enroll" className="button-light">Make an enquiry <ArrowUpRight size={18} /></Link>
              <a href={academy.whatsappLink} target="_blank" rel="noreferrer" className="closing-whatsapp">Chat on WhatsApp <ArrowUpRight size={17} /></a>
            </div>
            <div className="closing-mark">E.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
