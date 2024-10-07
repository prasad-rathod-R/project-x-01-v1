import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const userName = localStorage.getItem("userName") || "Guest";

  console.log("userName: from header" + userName, user);
  const navigate = useNavigate();

  const logout = () => {
    // Clear user authentication data
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("loggedInUser");
    console.log("removing data");

    // Redirect to login page
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="header-content">
        <h1>ProjectX01</h1>

        <nav>
          <div className="thr-buttons">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {localStorage.getItem("loggedInUser") ? (
           <>
           <div className="goback-to-dashboard">
              <Link to="/landlord-dashboard">GO Back to Dashboard</Link>
              <div className="user-menu">
                <button onClick={logout}>Logout</button>
              </div>
              </div>
            </>
          ) : (
            <div className="auth-buttons">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
