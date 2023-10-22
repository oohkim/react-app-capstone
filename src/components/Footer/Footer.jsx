import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'boxicons/css/boxicons.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="social-icons">
        <a href="#" className="socials">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="socials">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="socials">
            <i className="bx bxl-instagram"></i>
          </a>
      </div>
      <p className="copyright">
        Copyright © 2023. All rights reserved.
      </p>
      <div className="footer-links">
        <a href="#">Terms & Conditions</a> / <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
