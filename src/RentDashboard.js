// RentDashboard.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RentDashboard.css'; // Ensure you import your custom CSS

const initialRents = [
  { id: 1, tenantName: 'John Doe', rentAmount: 1200, dueDate: '2024-09-01', depositPaid:'30000'},
  { id: 2, tenantName: 'Jane Smith', rentAmount: 1500, dueDate: '2024-09-01' ,depositPaid:'20000'},
  // Add more dummy data as needed
];

const RentDashboard = () => {
  const [rents, setRents] = useState(initialRents);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRents = rents.filter(rent =>
    rent.tenantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Rent Dashboard</h2>
      
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by tenant name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tenant Name</th>
            <th>Rent Amount</th>
            <th>Due Date</th>
            <th>Deposit Paid</th>
          </tr>
        </thead>
        <tbody>
          {filteredRents.length > 0 ? (
            filteredRents.map(rent => (
              <tr key={rent.id}>
                <td>{rent.tenantName}</td>
                <td>${rent.rentAmount}</td>
                <td>{rent.dueDate}</td>
                <td>{rent.depositPaid}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No rents found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RentDashboard;
