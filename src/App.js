import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import LandlordDashboard from "./LandlordDashboard";
import Dashboard from "./Dashboard";
import ViewProperties from "./ViewProperties";
import ManageTenants from "./ManageTenants";
import ViewTenants from "./ViewTenants";
import UpdateTenant from "./UpdateTenant";
import DeleteTenant from "./DeleteTenant";
import RentDashboard from "./RentDashboard";
import LandingPage  from "./LandingPage";


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUser(null);
    window.location.href = "/login"; // Redirect to login page
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("userName"),"nulllll");
  }, [localStorage]);

  return (
 <div><LandingPage /></div>
  );
};

export default App;
