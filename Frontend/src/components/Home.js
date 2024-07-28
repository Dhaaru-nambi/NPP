import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import image from "./image2.jpg";
import "./Home.css";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="home">
      <header className="hero">
        <img 
          src={image} 
          alt="Network Switch" 
          className="hero-image" 
        />
        <div className="hero-content">
          <h1>Stay Connected, Switch Hassle-Free</h1>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <i className="fas fa-exchange-alt"></i>
          <h3>Switch Networks Seamlessly</h3>
          <p>Transfer your mobile number with ease and speed.</p>
        </div>
        <div className="feature">
          <i className="fas fa-exchange-alt"></i>
          <h3>Stay Connected Everywhere</h3>
          <p>Enjoy uninterrupted service during and after the switch.</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <h3>Compliant and Secure</h3>
          <p>Your data is protected with top-tier security measures.</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h4>Request</h4>
            <p>Submit your porting request online</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h4>Verify</h4>
            <p>We verify your information</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h4>Switch</h4>
            <p>Your number is transferred seamlessly</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Contact Us</h5>
            <p>Email: portaflex@gmail.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Legal</h5>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 PortaFlex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;