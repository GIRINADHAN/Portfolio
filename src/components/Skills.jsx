import React from "react";
import { Code2, Server, Database, Wrench, Award, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frontend",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "Core Java", level: "Advanced" },
      { name: "React.js", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Bootstrap 5", level: "Expert" },
      { name: "Python (Basic)", level: "Intermediate" },
    ]
  },
  {
    icon: Server,
    title: "Backend & Web Services",
    description: "Creating secure, scalable server architecture & REST APIs",
    skills: [
      { name: "Spring Boot", level: "Proficient" },
      { name: "RESTful APIs", level: "Proficient" },
      { name: "Flask (Python)", level: "Intermediate" },
      { name: "JWT Authentication", level: "Proficient" },
      { name: "OAuth Integration", level: "Intermediate" },
    ]
  },
  {
    icon: Database,
    title: "Databases & Storage",
    description: "Relational data modeling, SQL queries & data persistence",
    skills: [
      { name: "SQL", level: "Proficient" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Database Schema Design", level: "Proficient" },
    ]
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    description: "Version control, API testing, and continuous deployment tools",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Jenkins", level: "Intermediate" },
      { name: "n8n Automation", level: "Intermediate" },
      { name: "Postman", level: "Proficient" },
      { name: "VS Code / Eclipse", level: "Proficient" },
    ]
  }
];

const certifications = [
  {
    title: "Full Stack Java Training",
    issuer: "Code 99 IT Academy",
    details: "Completed comprehensive training in HTML, CSS, Bootstrap, JavaScript, React, Core Java, Spring Boot, and SQL. Certified as Full Stack Java Developer."
  },
  {
    title: "Academic Excellence Award",
    issuer: "Thangavelu Engineering College",
    details: "Awarded Department-wise 3rd Rank Certificate twice during B.Tech, recognizing consistent academic performance."
  }
];

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-kicker">Technical Stack</div>
            <h2 className="section-title">
              Skills, Frameworks & Core Capabilities
            </h2>
            <p className="text-muted max-w-xl">
              Technologies and tools I utilize to craft full-stack Java and React applications.
            </p>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="row g-4">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="col-md-6">
                <div className="glass-card h-100 p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div 
                      className="rounded-3 p-2 text-primary"
                      style={{ background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.2)" }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="h5 text-white fw-bold mb-0">{category.title}</h3>
                      <span className="text-muted small">{category.description}</span>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="tech-tag d-inline-flex align-items-center gap-1">
                        <CheckCircle2 size={12} className="text-info" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Banner */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="glass-card p-4 p-md-5">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Award className="text-warning" size={24} />
                <h3 className="h4 text-white fw-bold mb-0">Certifications & Honors</h3>
              </div>

              <div className="row g-4 mt-1">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="col-md-6">
                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100">
                      <span className="badge bg-warning text-dark fw-bold mb-2">
                        {cert.issuer}
                      </span>
                      <h4 className="h6 text-white fw-semibold mb-2">{cert.title}</h4>
                      <p className="text-muted small mb-0 leading-relaxed">{cert.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
