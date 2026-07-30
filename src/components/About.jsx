import React from "react";
import { GraduationCap, Award, BookOpen, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "B.Tech Information Technology",
    desc: "Thangavelu Engineering College, Chennai (2022 – 2026) | CGPA: 8.2",
  },
  {
    icon: Award,
    title: "Certification",
    subtitle: "Full Stack Java Training",
    desc: "Code 99 IT Academy – Comprehensive training in HTML, CSS, Bootstrap, JavaScript, React, Core Java, Spring Boot, & SQL.",
  },
  {
    icon: BookOpen,
    title: "Academic Honor",
    subtitle: "Department 3rd Rank",
    desc: "Awarded Department-wise 3rd Rank Certificate twice during B.Tech for academic excellence.",
  },
];

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-kicker">About Me</div>
            <h2 className="section-title">
              Passionate Full Stack Java Developer focused on clean code & scalable solutions.
            </h2>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Detailed Bio */}
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5 h-100">
              <h3 className="h4 text-white fw-semibold mb-3">Profile Overview</h3>
              <p className="text-muted leading-relaxed mb-3">
                I am a 2026 B.Tech Information Technology graduate from Thangavelu Engineering College, Chennai with a strong 
                CGPA of 8.2. I have built a solid foundation in both front-end and back-end development through hands-on personal projects 
                and professional internship experience at Felamity Technologies LLP.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                My technical skillset includes crafting responsive React interfaces, designing RESTful web services in Spring Boot and Flask, 
                and managing relational databases with SQL and PostgreSQL. I take pride in clean code structure, quick problem solving, 
                and continuous learning.
              </p>

              <div className="row g-3 pt-3 border-top border-secondary border-opacity-25">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <MapPin className="text-primary" size={18} />
                    <div>
                      <span className="d-block text-muted small text-uppercase">Location</span>
                      <strong className="text-white">Chennai, Tamil Nadu</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <Briefcase className="text-info" size={18} />
                    <div>
                      <span className="d-block text-muted small text-uppercase">Availability</span>
                      <strong className="text-white">Full-Time / Entry-Level</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3">
                <p className="small text-uppercase text-muted tracking-wider mb-2">Key Strengths</p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-dark text-info border border-info border-opacity-25 py-2 px-3">
                    <CheckCircle2 size={12} className="me-1" /> Object-Oriented Java
                  </span>
                  <span className="badge bg-dark text-info border border-info border-opacity-25 py-2 px-3">
                    <CheckCircle2 size={12} className="me-1" /> Spring Boot REST APIs
                  </span>
                  <span className="badge bg-dark text-info border border-info border-opacity-25 py-2 px-3">
                    <CheckCircle2 size={12} className="me-1" /> React & Modern UI
                  </span>
                  <span className="badge bg-dark text-info border border-info border-opacity-25 py-2 px-3">
                    <CheckCircle2 size={12} className="me-1" /> SQL & DB Design
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Academic & Certification Highlights */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3 h-100">
              {cards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="glass-card p-4 flex-fill">
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-3 p-3 text-primary d-flex align-items-center justify-content-center"
                        style={{ background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.2)" }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <span className="text-uppercase small tracking-wider text-muted fw-bold">
                          {item.title}
                        </span>
                        <h4 className="h5 text-white fw-semibold mt-1 mb-1">{item.subtitle}</h4>
                        <p className="text-muted small mb-0 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
