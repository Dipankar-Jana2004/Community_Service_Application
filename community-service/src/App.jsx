import { HashRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
