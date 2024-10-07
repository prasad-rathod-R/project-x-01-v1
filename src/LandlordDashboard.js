import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandlordDashboard.css"; // Make sure to import your CSS file

const LandlordDashboard = () => {
  const userName = localStorage.getItem("userName") || "Guest";
  const navigate = useNavigate();

  return (
    <div className="wall">
      <div className="wall-in-1">
        <div className="wall-btn">
          <button
          // href="/manage-tenants"
          >
            Manage Tenants
          </button>
          <button
          // href="/view-properties"
          >
            View Properties
          </button>
        </div>
      </div>
      <div className="wall-in-2"></div>
      <div className="container">
        <div class="row">
          <div class="col-sm-2 md-2 lg-2">
            <div class="card">
              <div class="card-body"><i class="bi bi-people-fill"></i></div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body"><i class="bi bi-people-fill"></i></div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body"><i class="bi bi-people-fill"></i></div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body"><i class="bi bi-people-fill"></i></div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body"><i class="bi bi-people-fill"></i></div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body"><i class="bi bi-people-fill"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
