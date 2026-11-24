import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { academy } from "../data/academy";

const links = [
  { to: "/", label: "Home" },
  { to: "/school-boards", label: "Academics" },
  { to: "/skills-programs", label: "Skills" },
  { to: "/about", label: "Our story" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="premium-header">
      <div className="site-container nav-inner">
        <Link to="/" className="brand-lockup" onClick={() => setOpen(false)} aria-label={academy.name}>
          <span className="brand-symbol">E<span>.</span></span>
          <span className="brand-name">eduskills<span>academy</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav-link${isActive ? " nav-link-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${academy.phone}`}>{academy.phoneDisplay}</a>
          <Link to="/enroll" className="nav-cta">Enquire now <ArrowUpRight size={16} /></Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav-panel">
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/enroll" onClick={() => setOpen(false)} className="nav-cta mobile-nav-cta">
              Enquire now <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
