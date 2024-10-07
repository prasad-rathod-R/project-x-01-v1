import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandlordDashboard.css"; // Make sure to import your CSS file

const LandlordDashboard = () => {
  const userName = localStorage.getItem("userName") || "Guest";
  const navigate = useNavigate();


  const manageTenantRedirect = () => {
    navigate('/manage-tenants');
  };

  const viewRedirect = () => {
    navigate('/view-properties');
  };

  return (
    <div className="wall">
      <div className="wall-in-1">
        <div className="wall-btn">
          <button
          onClick={ manageTenantRedirect}
          >
            Manage Tenants
          </button>
          <button
           onClick={ viewRedirect}
          >
            View Properties
          </button>
        </div>
      </div>
      {/* <div className="wall-in-2"></div>
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
        </div> */}
      </div>
    
  );
};

export default LandlordDashboard;
