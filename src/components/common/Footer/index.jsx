import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="Cred Logo" className="cred-logo" />
        </div>
        <div className="footer-section social-section">
          <h2>Follow Us</h2>
          <ul className="social-icons">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaYoutube /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
        <div className="footer-section links-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Upgrades</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Offers & Discounts</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
        <div className="footer-section contact-section">
          <h2>Contact Us</h2>
          <p>123 Vivek Nagar, Pratapgarh, India</p>
          <p>Email: sumitsharma7624@gmail.com</p>
          <p>Phone: +91 8115180228</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sumit Sharma Cred Clone. All rights reserved. | Privacy Policy | Terms and Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
