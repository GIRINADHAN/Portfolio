import React, { useState, useEffect } from "react";
import { ArrowUpRight, Download, MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";

const typewriterPhrases = [
  "Full Stack Java Developer",
  "Spring Boot & React Specialist",
  "Entry-level Engineer",
  "REST API & SQL Developer",
];

const techPills = [
  "Java", "Spring Boot", "React.js", "SQL", "JavaScript", 
  "HTML5 & CSS3", "Bootstrap", "REST APIs", "Git", "Jenkins"
];

function useTypewriter(phrases, speed = 80, delay = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, phrases, speed, delay]);

  return text;
}

function Home() {
  const typewriterText = useTypewriter(typewriterPhrases);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="position-relative min-vh-100 d-flex align-items-center pt-5 pb-5">
      <div className="bg-gradient-glow" />

      <div className="container position-relative z-1 pt-5 mt-4">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-9">
            
            {/* Badges */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              <span className="badge-custom d-inline-flex align-items-center gap-1">
                <span className="spinner-grow spinner-grow-sm text-primary me-1" style={{ width: "8px", height: "8px" }} />
                Open to Opportunities
              </span>
              <span className="badge-custom bg-dark text-secondary border-secondary border-opacity-25 d-inline-flex align-items-center gap-1">
                <MapPin size={12} /> Chennai, India
              </span>
              <span className="badge-custom bg-dark text-secondary border-secondary border-opacity-25 d-inline-flex align-items-center gap-1">
                <GraduationCap size={12} /> B.Tech IT (CGPA 8.2)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-3 fw-bold text-white mb-3">
              Hi, I'm{" "}
              <span style={{
                background: "linear-gradient(135deg, #ffffff 30%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Giri Nadhan M
              </span>
            </h1>

            {/* Dynamic Subtitle / Typewriter */}
            <div className="fs-4 text-info fw-semibold mb-4 d-flex align-items-center justify-content-center gap-2">
              <span className="text-uppercase tracking-wider">
                {typewriterText}
              </span>
              <span className="typewriter-cursor" />
            </div>

            {/* Summary */}
            <p className="lead text-muted max-w-2xl mx-auto mb-4 fs-6 leading-relaxed">
              Motivated Full Stack Java Developer with hands-on experience in building responsive web applications using 
              React, Spring Boot, Core Java, SQL, and Flask. Passionate about clean code, scalable architecture, and problem-solving.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <button onClick={() => scrollTo("projects")} className="btn-primary-custom">
                Explore My Work <ArrowUpRight size={18} />
              </button>

              <button onClick={() => scrollTo("contact")} className="btn-secondary-custom">
                <Mail size={18} /> Get in Touch
              </button>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-top border-secondary border-opacity-25">
              <p className="small text-uppercase text-muted tracking-widest mb-3">
                Core Technical Stack
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {techPills.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
