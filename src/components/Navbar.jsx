import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, Briefcase } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed-top px-3 py-3">
      <div className="container max-w-6xl">
        <nav className="custom-navbar d-flex align-items-center justify-content-between">
          <button
            onClick={() => scrollTo("home")}
            className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-2 border-0 bg-transparent text-start"
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
              style={{
                width: "42px",
                height: "42px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                fontSize: "1rem"
              }}
            >
              GN
            </div>
            <div className="d-none d-sm-block">
              <span className="d-block fw-bold text-white fs-6 leading-tight">
                Giri Nadhan M
              </span>
              <span className="d-block text-muted small" style={{ fontSize: "0.75rem" }}>
                Full Stack Java Developer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="d-none d-md-flex align-items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link-custom border-0 bg-transparent ${
                  activeSection === link.id ? "active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="d-none d-md-flex align-items-center gap-2">
            <a
              href="https://github.com/GIRINADHAN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-white d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                padding: "0",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                background: "transparent"
              }}
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href="https://linkedin.com/in/girinadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-white d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                padding: "0",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                background: "transparent"
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="mailto:girinadhanmanivel@gmail.com"
              className="btn text-white d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                padding: "0",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                background: "transparent"
              }}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary-custom py-2 px-3 ms-2 fs-7"
            >
              <Briefcase size={16} />
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-outline-secondary d-md-none text-white rounded-circle p-2 border-opacity-25"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="glass-card mt-2 p-3 d-md-none shadow-lg">
            <div className="d-flex flex-column gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`btn text-start text-white p-2 border-0 rounded-3 ${
                    activeSection === link.id
                      ? "bg-primary bg-opacity-25 text-white fw-semibold"
                      : "bg-transparent"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top border-secondary border-opacity-25">
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/GIRINADHAN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    padding: "0",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    background: "transparent"
                  }}
                >
                  <Github size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/girinadhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    padding: "0",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    background: "transparent"
                  }}
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="mailto:girinadhanmanivel@gmail.com"
                  className="btn btn-sm text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    padding: "0",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    background: "transparent"
                  }}
                >
                  <Mail size={14} />
                </a>
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary-custom py-2 px-3 fs-7"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;