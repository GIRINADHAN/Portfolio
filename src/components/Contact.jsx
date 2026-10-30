import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle2, Download } from "lucide-react";
import Footer from "./Footer";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "girinadhanmanivel@gmail.com",
    href: "mailto:girinadhanmanivel@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8148852953",
    href: "tel:+918148852953"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: "#"
  },
  {
    icon: Download,
    title: "Resume",
    value: "Download my resume (PDF)",
    href: `${import.meta.env.BASE_URL}Girinadhan_Resume.pdf`,
    download: "Girinadhan_Resume.pdf"
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Open mailto fallback as standard browser behavior
      const mailtoLink = `mailto:girinadhanmanivel@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-kicker">Contact</div>
            <h2 className="section-title">Let's Connect & Work Together</h2>
            <p className="text-muted max-w-xl">
              I am actively seeking full-time Full Stack Java Developer roles, entry-level engineering positions, and project opportunities. Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Details Column */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.href}
                    download={card.download}
                    className="glass-card p-4 text-decoration-none text-white d-flex align-items-center gap-3"
                  >
                    <div 
                      className="rounded-3 p-3 text-primary"
                      style={{ background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.2)" }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-uppercase small tracking-wider text-muted fw-bold d-block">
                        {card.title}
                      </span>
                      <strong className="fs-6">{card.value}</strong>
                    </div>
                  </a>
                );
              })}

              <div className="glass-card p-4 mt-auto">
                <span className="text-uppercase small tracking-wider text-muted fw-bold d-block mb-3">
                  Connect on Social Platforms
                </span>
                <div className="d-flex gap-3">
                  <a
                    href="https://linkedin.com/in/girinadhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3 text-white border-opacity-25 d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/GIRINADHAN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3 text-white border-opacity-25 d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://wa.me/918148852953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3 text-white border-opacity-25 d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h3 className="h4 text-white fw-bold mb-2">Send Me a Message</h3>
              <p className="text-muted small mb-4">
                Fill in your details below and I'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Giri Nadhan"
                      className="form-control form-control-custom"
                      style={{
                        color: "#ffffff",
                        placeholderColor: "#8b9bb5"
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                      className="form-control form-control-custom"
                      style={{
                        color: "#ffffff",
                        placeholderColor: "#8b9bb5"
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted small">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Project Collaboration"
                    className="form-control form-control-custom"
                    style={{
                      color: "#ffffff",
                      placeholderColor: "#8b9bb5"
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted small">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Share the details of your inquiry or job role..."
                    className="form-control form-control-custom"
                    style={{
                      color: "#ffffff",
                      placeholderColor: "#8b9bb5"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-custom w-100 justify-content-center py-3"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>

                {submitted && (
                  <div className="mt-3 p-3 rounded-3 bg-success bg-opacity-25 border border-success text-white small d-flex align-items-center gap-2">
                    <CheckCircle2 size={18} className="text-success" />
                    <span>Thank you! Your message inquiry has been initiated.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}

export default Contact;