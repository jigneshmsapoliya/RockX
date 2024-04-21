// Developed by Jignesh Sapoliya
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer-container">
    <footer>
      <h4>Developed by Team RockX</h4>
      <h4>Copyright &copy; {currentYear}</h4>
      <div className="footerLinks">
        <a href="https://github.com/jigneshmsapoliya/RockX" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jignesh-sapoliya/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;