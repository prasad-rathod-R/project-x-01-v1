import React, { useState } from 'react';

const DeleteTenant = () => {
  const [tenantId, setTenantId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('Deleting tenant with ID:', tenantId);
    // Add logic to delete tenant
  };

  return (
    <div className="delete-tenant">
      <h2>Delete Tenant</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Enter Tenant ID"
          value={tenantId}
          onChange={(e) => setTenantId(e.target.value)}
          required
        />
        <button type="submit">Delete Tenant</button>
      </form>
    </div>
  );
};

export default DeleteTenant;
