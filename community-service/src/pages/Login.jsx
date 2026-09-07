import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import loginImage from "../assets/login-image.jpeg";

import "./Login.css";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      alert("Please register first before login.");
      navigate("/register");
      return;
    }

    if (
      email !== registeredUser.email ||
      password !== registeredUser.password
    ) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    if (location.state?.fromBooking) {
      navigate("/booking-confirmation", {
        state: {
          professional: location.state.professional,
          date: location.state.date,
          time: location.state.time,
        },
      });

      return;
    }

    navigate("/");
  };

  return (
    <div className="login-page">

      <main className="login-container">
        <div className="login-card">
          <div className="login-image-section">
            <img src={loginImage} alt="Login" />
          </div>

          <div className="login-form-section">
            <h1>
              Welcome Back
              <span className="hello-icon">👋</span>
            </h1>

            <p className="login-subtitle">
              Login to continue to CommunityService
            </p>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>

                <div className="input-icon-box">
                  <span className="input-icon">✉</span>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>

                <div className="password-box">
                  <span className="input-icon">🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              <div className="login-options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />

                  <span>Remember me</span>
                </label>

                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              <button type="submit" className="login-submit">
                Login
              </button>
            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <button type="button" className="google-button">
              <span className="google-icon">G</span>

              <span className="google-text">Continue with Google</span>
            </button>

            <p className="register-text">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
