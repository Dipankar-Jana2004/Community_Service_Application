import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const professionals = [
    {
      name: "John Smith",
      role: "Plumber",
      rating: "4.9",
      reviews: "100",
      image: "👨🏻‍🔧",
    },
    {
      name: "David Wilson",
      role: "Electrician",
      rating: "4.8",
      reviews: "95",
      image: "👨🏻‍🔧",
    },
    {
      name: "Sarah Johnson",
      role: "Cook",
      rating: "4.9",
      reviews: "86",
      image: "👩🏻‍🍳",
    },
  ];

  const services = [
    {
      name: "Plumber",
      icon: "🔧",
      description: "Pipe, fittings\n& more",
    },
    {
      name: "Electrician",
      icon: "⚡",
      description: "Wiring, installation\n& repair",
    },
    {
      name: "Cook",
      icon: "👨🏻‍🍳",
      description: "Home cook, chefs\n& more",
    },
    {
      name: "Welder",
      icon: "🛠️",
      description: "Welding & metal\nworks",
    },
    {
      name: "Carpenter",
      icon: "🪚",
      description: "Furniture, repair\n& more",
    },
    {
      name: "Cleaner",
      icon: "🧹",
      description: "Home & office\ncleaning",
    },
  ];

  return (
    <div className="home-page">
      <Navbar />

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="trusted-badge">
              <span>@</span>
              Trusted Local Professionals
            </div>

            <h1>
              Find the Right
              <span> Professional</span>
              <br />
              for Your Job
            </h1>

            <p className="hero-description">
              Connect with trusted professionals in your community.
            </p>

            <div className="search-container">
              <div className="search-input-box">
                <span>⌕</span>

                <input type="text" placeholder="What service do you need?" />
              </div>

              <button className="search-button">Search</button>
            </div>

            <div className="hero-buttons">
              <Link to="/services" className="primary-button">
                Find a Professional
              </Link>

              <Link to="/register" className="secondary-button">
                Join as Professional
              </Link>
            </div>
          </div>

          <div className="professionals-box">
            <div className="professionals-title">
              <h3>Professionals Near You</h3>

              <span className="online-dot"></span>
            </div>

            {professionals.map((person) => (
              <div className="professional-item" key={person.name}>
                <div className="professional-image">{person.image}</div>

                <div className="professional-info">
                  <h4>
                    {person.name}

                    <span className="verified">✓</span>
                  </h4>

                  <p>{person.role}</p>

                  <span className="rating">
                    ★ {person.rating}
                    <small>({person.reviews})</small>
                  </span>
                </div>
              </div>
            ))}

            <Link to="/services" className="view-all">
              View All Professionals →
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <strong>500+</strong>
            <span>Professionals</span>
          </div>

          <div className="stat-item">
            <strong>50+</strong>
            <span>Services</span>
          </div>

          <div className="stat-item">
            <strong>2,000+</strong>
            <span>Happy Customers</span>
          </div>

          <div className="stat-item">
            <strong>4.8/5</strong>
            <span>Average Rating</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <p className="services-small-title">OUR SERVICES</p>

        <h2>What Service Do You Need?</h2>

        <div className="services-grid">
          {services.map((service) => (
            <Link to="/services" className="service-card" key={service.name}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.name}</h3>

              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
