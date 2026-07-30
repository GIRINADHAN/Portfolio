import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Java Developer Intern (Remote)",
    company: "Felamity Technologies LLP",
    period: "Jan 2026 – June 2026",
    location: "Remote",
    highlights: [
      "Developed full stack web applications using Java, Spring Boot, React.js, Python, Flask, and SQL.",
      "Built robust REST APIs and implemented secure database operations with MySQL & PostgreSQL.",
      "Fixed critical bugs and improved application performance, security, and UI responsiveness.",
      "Architected backend modules for key projects including Invoice Automation, Business Analytics Dashboard, and Task Planner."
    ],
    tags: ["Java", "Spring Boot", "React.js", "Python", "Flask", "SQL", "REST APIs", "JWT", "OAuth"]
  }
];

function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-kicker">Experience</div>
            <h2 className="section-title">
              Professional & Industry Experience
            </h2>
            <p className="text-muted max-w-xl">
              Gaining hands-on development experience in building full-stack applications and solving real-world software problems.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="col-12">
              <div className="glass-card p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-3 gap-2">
                  <div>
                    <span className="badge-custom bg-dark text-info border-info border-opacity-25 mb-2 d-inline-block">
                      {exp.company}
                    </span>
                    <h3 className="h3 text-white fw-bold mb-1">{exp.role}</h3>
                  </div>

                  <div className="d-flex align-items-center gap-3 text-muted small">
                    <span className="d-flex align-items-center gap-1">
                      <Calendar size={14} className="text-primary" /> {exp.period}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-info" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="list-unstyled text-muted my-4 pe-md-4">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="d-flex align-items-start gap-2 mb-2">
                      <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-25">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
