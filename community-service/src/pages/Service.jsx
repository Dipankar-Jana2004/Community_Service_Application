import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Service.css";

function Service() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const [search, setSearch] = useState("");

  const categories = [
    "All Services",
    "Plumber",
    "Electrician",
    "Cook",
    "Welder",
    "Carpenter",
    "Cleaner",
  ];

  const professionals = [
    {
      name: "John Smith",
      role: "Plumber",
      rating: 4.9,
      reviews: 100,
      price: "$30 - $40 / hour",
      image: "👨🏻‍🔧",

      experience: "8 Years",
      jobsCompleted: "320+",
      location: "New York, USA",
      responseTime: "30 mins",

      about:
        "Experienced plumber providing reliable plumbing services including pipe installation, leak repair, bathroom fitting and water heater repair.",

      skills: [
        "Pipe Installation",
        "Bathroom Fitting",
        "Leak Repair",
        "Water Heater Repair",
        "Drain Cleaning",
        "And more...",
      ],
    },

    {
      name: "David Wilson",
      role: "Electrician",
      rating: 4.8,
      reviews: 95,
      price: "$25 - $45 / hour",
      image: "👨🏻‍🔧",

      experience: "7 Years",
      jobsCompleted: "280+",
      location: "New York, USA",
      responseTime: "25 mins",

      about:
        "Professional electrician experienced in home wiring, electrical installation, maintenance and repair services.",

      skills: [
        "Home Wiring",
        "Electrical Installation",
        "Repair",
        "Lighting Setup",
        "Maintenance",
        "And more...",
      ],
    },

    {
      name: "Sarah Johnson",
      role: "Cook",
      rating: 4.9,
      reviews: 86,
      price: "$15 - $30 / hour",
      image: "👩🏻‍🍳",

      experience: "6 Years",
      jobsCompleted: "240+",
      location: "New York, USA",
      responseTime: "20 mins",

      about:
        "Experienced home cook specializing in healthy meals, traditional dishes and customized food preparation.",

      skills: [
        "Home Cooking",
        "Healthy Meals",
        "Traditional Food",
        "Meal Preparation",
        "Party Catering",
        "And more...",
      ],
    },

    {
      name: "Michael Brown",
      role: "Welder",
      rating: 4.7,
      reviews: 70,
      price: "$20 - $35 / hour",
      image: "👨🏻‍🏭",

      experience: "9 Years",
      jobsCompleted: "350+",
      location: "New York, USA",
      responseTime: "35 mins",

      about:
        "Skilled welder providing professional metal fabrication, repair and welding services for residential and commercial needs.",

      skills: [
        "Metal Welding",
        "Fabrication",
        "Metal Repair",
        "Gate Welding",
        "Steel Works",
        "And more...",
      ],
    },

    {
      name: "Robert Davis",
      role: "Carpenter",
      rating: 4.6,
      reviews: 80,
      price: "$18 - $32 / hour",
      image: "👨🏻‍🔨",

      experience: "7 Years",
      jobsCompleted: "260+",
      location: "New York, USA",
      responseTime: "30 mins",

      about:
        "Professional carpenter specializing in furniture making, wood repair, installation and customized woodworking.",

      skills: [
        "Furniture Making",
        "Wood Repair",
        "Door Installation",
        "Cabinet Work",
        "Woodworking",
        "And more...",
      ],
    },

    {
      name: "Lisa Martinez",
      role: "Cleaner",
      rating: 4.8,
      reviews: 90,
      price: "$12 - $30 / hour",
      image: "👩🏻‍🔧",

      experience: "5 Years",
      jobsCompleted: "300+",
      location: "New York, USA",
      responseTime: "15 mins",

      about:
        "Reliable cleaning professional providing home, office and deep cleaning services with attention to detail.",

      skills: [
        "Home Cleaning",
        "Office Cleaning",
        "Deep Cleaning",
        "Kitchen Cleaning",
        "Bathroom Cleaning",
        "And more...",
      ],
    },
  ];

  const filteredProfessionals = professionals.filter((professional) => {
    const categoryMatch =
      selectedCategory === "All Services" ||
      professional.role === selectedCategory;

    const searchMatch =
      professional.name.toLowerCase().includes(search.toLowerCase()) ||
      professional.role.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="service-page">
      <Navbar />

      <div className="service-container">
        <aside className="service-categories">
          <h3>Categories</h3>

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        <main className="service-content">
          <div className="service-filters">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search professionals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select className="location-select">
              <option>Location</option>

              <option>New York, USA</option>

              <option>Kolkata, India</option>

              <option>Delhi, India</option>
            </select>

            <select className="sort-select">
              <option>Sort by</option>

              <option>Rating</option>

              <option>Price Low to High</option>

              <option>Price High to Low</option>
            </select>

            <select className="rating-select">
              <option>Rating High to Low</option>

              <option>Rating Low to High</option>
            </select>
          </div>

          <div className="professionals-grid">
            {filteredProfessionals.length > 0 ? (
              filteredProfessionals.map((professional) => (
                <div className="professional-card" key={professional.name}>
                  <div className="professional-top">
                    <div className="professional-image">
                      {professional.image}
                    </div>

                    <div className="professional-info">
                      <h3>{professional.name}</h3>

                      <p>{professional.role}</p>

                      <div className="rating">
                        <span>⭐</span>

                        <strong>{professional.rating}</strong>

                        <span>({professional.reviews})</span>
                      </div>
                    </div>

                    <button className="favorite-btn" type="button">
                      ♡
                    </button>
                  </div>

                  <p className="professional-price">{professional.price}</p>

                  <Link
                    to="/about"
                    state={{
                      professional: professional,
                    }}
                    className="profile-btn"
                  >
                    View Details
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-professional">
                <h3>No professionals found</h3>

                <p>Try another service or search keyword.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Service;
