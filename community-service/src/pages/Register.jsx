import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImage from "../assets/login-image.jpeg";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("Customer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (name.trim().length < 3) {
      alert("Please enter a valid name.");
      return;
    }

    if (phone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      registeredUser.email.toLowerCase() === email.trim().toLowerCase()
    ) {
      alert("This email is already registered. Please login.");
      navigate("/login");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        accountType: accountType,
        password: password,
      }),
    );

    alert("Registration successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="register-page">
      <main className="register-container">
        <div className="register-card">
          <div className="register-image-section">
            <img src={loginImage} alt="Register" />
          </div>

          <div className="register-form-section">
            <h1>Create Account</h1>

            <p className="register-subtitle">
              Register to get started with CommunityService
            </p>

            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Account Type</label>

                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="Customer">Customer</option>

                  <option value="Professional">Professional</option>
                </select>
              </div>

              <div className="form-group">
                <label>Password</label>

                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>

                <div className="password-box">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <label className="terms">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />

                <span>
                  I agree to the <a href="#terms">Terms & Conditions</a>
                </span>
              </label>

              <button type="submit" className="register-submit">
                Create Account
              </button>
            </form>

            <p className="login-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <Link to="/" className="back-home">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
