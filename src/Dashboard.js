// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Landlord Dashboard</h1>
      <p>Here you can manage your properties, tenants, and more.</p>
      
      {/* Dummy Content */}
      <div className="dashboard-content">
        <h2>Dashboard Overview</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      {/* Buttons to navigate */}
      <div className="dashboard-actions">
        <Link to="/manage-tenants" className="dashboard-button">Manage Tenants</Link>
        <Link to="/view-properties" className="dashboard-button">View Properties</Link>
      </div>
    </div>
  );
};

export default Dashboard;
