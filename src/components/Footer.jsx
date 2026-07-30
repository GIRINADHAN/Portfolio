import React from "react";

function Footer() {
  return (
    <footer className="container border-top border-secondary border-opacity-25 mt-5 py-4 text-center">
      <p className="small text-muted mb-0">
        &copy; {new Date().getFullYear()} Giri Nadhan M. Built with React and Bootstrap.
      </p>
    </footer>
  );
}

export default Footer;
