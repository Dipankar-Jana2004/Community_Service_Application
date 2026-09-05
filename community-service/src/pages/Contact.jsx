import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import loginImage from "../assets/login-image.jpeg";

import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Your message has been sent successfully!");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-container">
        <section className="contact-hero">
          <span className="contact-badge">💬 We're here to help</span>

          <h1>
            Get in <span>Touch</span>
          </h1>

          <p>
            Have a question, need support, or want to work with us? We would
            love to hear from you.
          </p>
        </section>

        <section className="contact-card">
          <div className="contact-image-section">
            <img src={loginImage} alt="CommunityService Support" />

            <div className="image-overlay">
              <p>Better Services</p>
              <p>Brighter Communities</p>

              <span>♡</span>
            </div>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h2>
                Let's Connect <span>👋</span>
              </h2>

              <p className="contact-description">
                We're here to help you with bookings, services and any questions
                you may have.
              </p>

              <div className="contact-item">
                <div className="contact-icon">✉</div>

                <div>
                  <h3>Email Us</h3>
                  <p>support@communityservice.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">☎</div>

                <div>
                  <h3>Call Us</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>

                <div>
                  <h3>Our Location</h3>
                  <p>Kolkata, West Bengal</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">◷</div>

                <div>
                  <h3>Support Hours</h3>
                  <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>

                <div className="social-links">
                  <a href="#" aria-label="Facebook">
                    f
                  </a>

                  <a href="#" aria-label="Instagram">
                    ◎
                  </a>

                  <a href="#" aria-label="Twitter">
                    𝕏
                  </a>

                  <a href="#" aria-label="LinkedIn">
                    in
                  </a>

                  <a href="#" aria-label="YouTube">
                    ▶
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>

              <p>We'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form-group">
                  <label>Subject</label>

                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="contact-form-group">
                  <label>Message</label>

                  <textarea
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="contact-submit">
                  Send Message
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="support-section">
          <div className="support-card">
            <div className="support-icon">📅</div>

            <div className="support-text">
              <h3>Booking Help</h3>

              <p>Need help with a booking or appointment?</p>
            </div>

            <Link to="/services" className="support-arrow">
              →
            </Link>
          </div>

          <div className="support-card">
            <div className="support-icon">👤</div>

            <div className="support-text">
              <h3>Account Support</h3>

              <p>Having trouble with your account or login?</p>
            </div>

            <Link to="/login" className="support-arrow">
              →
            </Link>
          </div>

          <div className="support-card">
            <div className="support-icon">💼</div>

            <div className="support-text">
              <h3>Join as a Professional</h3>

              <p>Want to offer your services on our platform?</p>
            </div>

            <Link to="/register" className="support-arrow">
              →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
