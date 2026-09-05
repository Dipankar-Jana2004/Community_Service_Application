import { useLocation, Link } from "react-router-dom";
import './Booking.css';

function Booking() {
  const location = useLocation();

  const { professional, date, time } = location.state || {};

  if (!professional) {
    return (
      <div>
        <h2>Booking not found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed</h1>

        <div className="booking-details">
          <p>Professional: {professional.name}</p>
          <p>Service: {professional.role}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
        </div>

        <Link to="/services" className="booking-home">
          Back to Services
        </Link>
      </div>
    </div>
  );
}

export default Booking;
