import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import image from "./image2.jpg"; // Import the image
import "./Home.css"; // Custom CSS for specific styles

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
    <div className="wrapper">
      {/* Full-width image section */}
      <header className="image">
        <img src={image} alt="My Desktop Image" className="img-fluid" />
        <div className="image-tagline">
          <p>Stay Connected, Switch Hassle-Free</p>
        </div>
      </header>

      {/* Cards section */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Switch Networks Seamlessly</h5>
                <p className="card-text">Explore our easy process for transferring your mobile number.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Stay Connected Everywhere</h5>
                <p className="card-text">Enjoy uninterrupted service during and after the switch.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Compliant and Secure</h5>
                <p className="card-text">We ensure regulatory compliance and data security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Contact Information</h5>
              <p>Email: portaflex@gmail.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div className="col-md-3">
              <h5>About Us</h5>
              <p>Join us in simplifying your mobile number porting journey today.</p>
            </div>
            <div className="col-md-3">
              <h5>Privacy Policy</h5>
              <p><a href="/privacy-policy">Privacy Policy</a></p>
            </div>
            <div className="col-md-3">
              <h5>Terms of Service</h5>
              <p><a href="/terms-of-service">Terms of Service</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
