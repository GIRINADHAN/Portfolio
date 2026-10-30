import React, { useState } from "react";
import { ExternalLink, Github, FolderGit2, Layers } from "lucide-react";

const allProjects = [
  {
    id: "skillswap",
    category: "personal",
    type: "Final Year Full-Stack Project",
    title: "SkillSwap — Peer to Peer Skill Exchange Platform",
    description: "A full-stack skill exchanging platform that allows users to list skills, match with peers, authenticate securely, and communicate in real time.",
    points: [
      "Built with React.js frontend and Spring Boot REST API backend",
      "Integrated PostgreSQL for user profile, skill matching, & authentication data",
      "Implemented secure JWT authentication and peer-to-peer matching logic"
    ],
    tech: ["React.js", "Spring Boot", "PostgreSQL", "REST APIs", "JWT"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "invoice-automation",
    category: "internship",
    type: "Felamity Internship Project",
    title: "Invoice Automation System",
    description: "Full-stack invoice management system with automated data extraction, multi-currency conversion (USD, INR, SGD), and OAuth authentication.",
    points: [
      "Full-stack development using React.js, Flask, and MySQL",
      "Integrated Google & Microsoft OAuth along with JWT authentication",
      "Automated currency conversion and invoice processing workflows"
    ],
    tech: ["React.js", "Flask", "MySQL", "LLM", "OAuth", "JWT"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "email-automation",
    category: "internship",
    type: "AI-Powered Internship Project",
    title: "Email Automation Platform",
    description: "Built a full-stack email automation platform that connects to Microsoft Outlook through the Graph API and uses LLM-powered triage to automatically classify emails.",
    points: [
      "Integrated Outlook mailboxes using the Microsoft Graph API",
      "Applied LLM-driven triage to automatically classify incoming emails",
      "Developed a full-stack workflow to streamline email management"
    ],
    tech: ["Flsk", "React.js", "Microsoft Graph API", "LLM", "AI Email Triage", "Full-Stack"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "news-categorization",
    category: "internship",
    type: "Internship Project",
    title: "News Categorization",
    description: "An automated Python application that fetches the latest news from the Threadline API every five hours, uses OpenAI GPT-5 via a Django LLM Gateway to refine headlines and content and generate hierarchical categories, news types, and tags, and conditionally creates images with Mistral Pixtral. News is stored in MySQL with duplicate detection and record updates.",
    points: [
      "Automates news fetching and processing on a five-hour schedule",
      "Uses GPT-5 to refine news content and generate primary, secondary, and tertiary categories, news types, and relevant tags"
    ],
    tech: ["Python", "MySQL", "GPT-5", "Threadline API", "Django LLM Gateway", "Mistral Pixtral"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "audio-transcription",
    category: "internship",
    type: "Internship Project",
    title: "Audio Transcription",
    description: "A Microsoft Word-inspired editor for creating professional documents with multilingual speech dictation, reusable templates, autosave, and PDF/DOCX export.",
    points: [
      "Built with React, TypeScript, and the Web Speech API for rich-text editing and multilingual voice input",
      "Created a Flask and SQLite backend for persistent documents and secure API-driven operations",
      "Uses LLM-assisted template heading extraction, autosave, and PDF/DOCX export to streamline document creation"
    ],
    tech: ["React", "TypeScript", "Flask", "SQLite", "Web Speech API", "LLM", "PDF/DOCX"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "food-ordering-backend",
    category: "personal",
    type: "Full-Stack Web Application",
    title: "Food Ordering Web App (Fullstack)",
    description: "Dynamic food ordering web application featuring cart management, order workflow, and OTP-based user registration.",
    points: [
      "Spring Boot backend with SQL database operations",
      "Add to Cart logic, dynamic menu rendering, and order status flow",
      "OTP-based user signup and form validation"
    ],
    tech: ["Spring Boot", "JavaScript", "SQL", "REST APIs", "HTML/CSS"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "ragsuit-dashboard",
    category: "internship",
    type: "Felamity Internship Project",
    title: "Ragsuit Business Analytics Dashboard",
    description: "Interactive business dashboard displaying dynamic charts, analytics, real-time metrics, and super admin control panels.",
    points: [
      "Built with React.js frontend connected to Flask REST APIs",
      "Dynamic charts and real-time metric visualization for business insights",
      "Admin and Super Admin privilege management panels"
    ],
    tech: ["React.js", "Flask", "REST APIs", "Analytics", "Bootstrap"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "task-planner",
    category: "internship",
    type: "Felamity Internship Project",
    title: "Task Planner & Management App",
    description: "Comprehensive task management application supporting full CRUD operations, category filters, and intuitive user interface.",
    points: [
      "Clean UI for creating, editing, categorizing, and completing tasks",
      "RESTful API integration for state persistence and user workflow",
      "Optimized for quick task updates and mobile responsiveness"
    ],
    tech: ["React.js", "JavaScript", "REST APIs", "Bootstrap", "CRUD"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "food-ordering-frontend",
    category: "personal",
    type: "Frontend Web Application",
    title: "Food Ordering Website (frontend)",
    description: "Dynamic front-end web application with rich menu interactions, form validations, and user-friendly order flow.",
    points: [
      "Developed using pure HTML, CSS, and vanilla JavaScript",
      "Implemented form validation and responsive layout across all screen sizes",
      "Interactive cart preview and smooth menu section navigation"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Form Validation"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  },
  {
    id: "blinkit-clone",
    category: "personal",
    type: "Frontend UI Clone",
    title: "Blinkit Grocery Store Clone (frontend)",
    description: "Front-end replica of the Blinkit quick-commerce grocery website featuring product category grids and search UI.",
    points: [
      "Pixel-inspired responsive design built using HTML and CSS",
      "Clean item card components with category banners",
      "Structured CSS layout optimized for both desktop and mobile views"
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "Responsive Layout"],
    github: "https://github.com/GIRINADHAN",
    demo: "#"
  }
];

function Project() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-8">
            <div className="section-kicker">Featured Work</div>
            <h2 className="section-title">
              Projects showcasing full-stack engineering & clean execution.
            </h2>
            <p className="text-muted mb-0">
              A curated collection of full-stack Java/Spring Boot applications, React frontends, and internship projects.
            </p>
          </div>

          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <div className="btn-group p-1 rounded-pill bg-dark border border-secondary border-opacity-25">
              <button
                onClick={() => setFilter("all")}
                className={`btn btn-sm rounded-pill px-3 text-white border-0 ${
                  filter === "all" ? "bg-primary" : "bg-transparent"
                }`}
              >
                All ({allProjects.length})
              </button>
              <button
                onClick={() => setFilter("personal")}
                className={`btn btn-sm rounded-pill px-3 text-white border-0 ${
                  filter === "personal" ? "bg-primary" : "bg-transparent"
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setFilter("internship")}
                className={`btn btn-sm rounded-pill px-3 text-white border-0 ${
                  filter === "internship" ? "bg-primary" : "bg-transparent"
                }`}
              >
                Internship
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="glass-card h-100 p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge-custom text-info border-info border-opacity-25" style={{ fontSize: "0.72rem" }}>
                      {project.type}
                    </span>
                    <FolderGit2 className="text-muted" size={20} />
                  </div>

                  <h3 className="h5 text-white fw-bold mb-2">{project.title}</h3>
                  <p className="text-muted small mb-3 leading-relaxed">{project.description}</p>

                  <ul className="list-unstyled text-muted small mb-4 pe-1">
                    {project.points.map((pt, pIdx) => (
                      <li key={pIdx} className="d-flex align-items-start gap-2 mb-1">
                        <span className="text-primary fw-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="d-flex flex-wrap gap-1 mb-3 pt-3 border-top border-secondary border-opacity-25">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag py-1 px-2" style={{ fontSize: "0.75rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none small d-flex align-items-center gap-1 hover-text-primary"
                    >
                      <Github size={15} /> Code Repository
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
