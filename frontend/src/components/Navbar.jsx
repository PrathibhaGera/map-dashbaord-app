import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/"); 
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/mapview">Map View</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
