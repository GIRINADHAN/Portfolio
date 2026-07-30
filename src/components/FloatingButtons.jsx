import React from "react";
import { Phone, MessageCircle } from "lucide-react";

function FloatingButtons() {
  return (
    <div className="floating-btn-container">
      <a
        href="tel:+918148852953"
        aria-label="Call Giri Nadhan M"
        title="Call +91 8148852953"
        className="floating-btn btn-phone"
      >
        <Phone size={20} />
      </a>

      <a
        href="https://wa.me/918148852953"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        className="floating-btn btn-whatsapp"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}

export default FloatingButtons;
