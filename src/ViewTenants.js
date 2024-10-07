import React, { useEffect, useState } from 'react';

const ViewTenants = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Fetch tenant list from backend or use dummy data
    const dummyTenants = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', roomNumber: '101' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', roomNumber: '102' }
    ];
    setTenants(dummyTenants);
  }, []);

  return (
    <div className="view-tenants">
      <h2>Tenant List</h2>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>
            <p>Name: {tenant.name}</p>
            <p>Email: {tenant.email}</p>
            <p>Phone: {tenant.phone}</p>
            <p>Room: {tenant.roomNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTenants;
