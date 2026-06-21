import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { academy } from "../data/academy";

const links = [
  { to: "/", label: "Home" },
  { to: "/school-boards", label: "School Boards" },
  { to: "/skills-programs", label: "Skills Programs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--cream)]/95 backdrop-blur border-b border-[var(--navy)]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt={academy.name} className="h-12 w-auto" />
            <span className="hidden sm:block font-display font-semibold text-lg text-[var(--navy)] leading-tight">
              {academy.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "bg-[var(--navy)] text-white"
                      : "text-[var(--navy)] hover:bg-[var(--navy)]/8"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${academy.phone}`}
              className="flex items-center gap-1.5 text-sm font-mono text-[var(--navy)]"
            >
              <Phone size={14} />
              {academy.phoneDisplay}
            </a>
            <Link
              to="/enroll"
              className="px-5 py-2.5 rounded-full bg-[var(--marigold)] text-[var(--navy-deep)] text-sm font-semibold hover:bg-[var(--amber)] hover:text-white transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[var(--navy)]"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--navy)]/10 bg-[var(--cream)]">
          <nav className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-[var(--navy)]/8 ${
                    isActive ? "text-[var(--amber)]" : "text-[var(--navy)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/enroll"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 text-center px-5 py-3 rounded-full bg-[var(--marigold)] text-[var(--navy-deep)] font-semibold"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
