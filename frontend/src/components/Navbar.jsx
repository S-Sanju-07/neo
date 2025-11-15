import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2 className="navbar-title">📚 Smart Study Planner</h2>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>

        {!userInfo ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
