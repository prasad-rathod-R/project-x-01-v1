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
import AddTenant from "./AddTenant";
import ViewTenants from "./ViewTenants";
import UpdateTenant from "./UpdateTenant";
import DeleteTenant from "./DeleteTenant";
import RentDashboard from "./RentDashboard";

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
    <Router>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route
          path="/landlord-dashboard"
          element={<LandlordDashboard />}
        ></Route>
        <Route path="/manage-tenants" element={<ManageTenants />}></Route>
        <Route path="/view-properties" element={<ViewProperties />}></Route>
        <Route path="/add-tenant" element={<AddTenant />} />
        <Route path="/view-tenants" element={<ViewTenants />} />
        <Route path="/update-tenant" element={<UpdateTenant />} />
        <Route path="/delete-tenant" element={<DeleteTenant />} />
        <Route path="/rent-dashboard" element={<RentDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
