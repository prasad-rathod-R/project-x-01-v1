// AllRents.js
import React from 'react';
import './AllRents.css'; // Create a separate CSS file for styling

const RentMaster = () => {
  const rents = [
    // Sample rent data
    { id: 1, tenantName: 'John Doe', amount: 5000, date: '2024-09-01' },
    { id: 2, tenantName: 'Jane Smith', amount: 6000, date: '2024-09-01' },
  ];

  return (
    <div className="rents-container">
      <h2>All Rents</h2>
      <table className="rents-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tenant Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rents.map(rent => (
            <tr key={rent.id}>
              <td>{rent.id}</td>
              <td>{rent.tenantName}</td>
              <td>{rent.amount}</td>
              <td>{rent.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentMaster;
