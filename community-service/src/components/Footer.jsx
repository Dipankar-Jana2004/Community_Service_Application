import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-brand">
          <h2>
            Community<span>Service</span>
          </h2>

          <p>
            Connecting you with trusted local professionals for reliable and
            quality services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>For Customers</h3>

          <Link to="/services">Find Services</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-column">
          <h3>For Professionals</h3>

          <Link to="/register">Join as Professional</Link>
          <Link to="/login">Professional Login</Link>
        </div>

        <div className="footer-column">
          <h3>Support</h3>

          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Help</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CommunityService. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
