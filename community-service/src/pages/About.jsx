import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  const location = useLocation();
  const navigate = useNavigate();

  const professional = location.state?.professional;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const today = new Date().toISOString().split("T")[0];

  if (!professional) {
    return (
      <div className="about-page">
        <Navbar />

        <main className="about-container">
          <div className="no-professional">
            <h2>Professional Not Found</h2>

            <p>Please select a professional from the Services page.</p>

            <Link to="/services" className="back-services">
              ← Back to Services
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    if (!date) {
      alert("Please select a date.");
      return;
    }

    if (!time) {
      alert("Please select a time.");
      return;
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please login or register before booking.");

      navigate("/login", {
        state: {
          professional,
          date,
          time,
          fromBooking: true,
        },
      });

      return;
    }

    navigate("/Booking", {
      state: {
        professional,
        date,
        time,
      },
    });
  };

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-container">
        <Link to="/services" className="back-services">
          ← Back to Services
        </Link>

        <div className="about-layout">
          <section className="about-left">
            <div className="profile-header">
              <div className="profile-image">{professional.image}</div>

              <div className="profile-info">
                <h1>
                  {professional.name}
                  <span className="verified">✓</span>
                </h1>

                <p>{professional.role}</p>

                <div className="profile-rating">
                  ⭐<strong>{professional.rating}</strong>
                  <span>({professional.reviews} Reviews)</span>
                </div>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-card">
                <span>◉</span>

                <p>Experience</p>

                <strong>{professional.experience}</strong>
              </div>

              <div className="stat-card">
                <span>♙</span>

                <p>Jobs Completed</p>

                <strong>{professional.jobsCompleted}</strong>
              </div>

              <div className="stat-card">
                <span>⌖</span>

                <p>Location</p>

                <strong>{professional.location}</strong>
              </div>

              <div className="stat-card">
                <span>◷</span>

                <p>Response Time</p>

                <strong>{professional.responseTime}</strong>
              </div>
            </div>

            <div className="about-me">
              <h2>About Me</h2>

              <p>{professional.about}</p>

              <div className="skills">
                {professional.skills.map((skill, index) => (
                  <div key={index}>
                    <span>✓</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="booking-card">
            <h2>Book This Professional</h2>

            <div className="booking-group">
              <label>Date</label>

              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="booking-group">
              <label>Time</label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <button className="book-button" onClick={handleBooking}>
              Book Now
            </button>

            <div className="reviews">
              <div className="reviews-title">
                <h2>Reviews</h2>

                <div>
                  ⭐<strong>{professional.rating}</strong>
                  <span> ({professional.reviews} Reviews)</span>
                </div>
              </div>

              <div className="review-item">
                <p>
                  Excellent service! Very professional and on time. Highly
                  recommended.
                </p>

                <div className="review-user">
                  <span>- Mike Johnson</span>

                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>

              {/* REVIEW 2 */}

              <div className="review-item">
                <p>Great work and very friendly professional.</p>

                <div className="review-user">
                  <span>- Sarah Wilson</span>

                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
