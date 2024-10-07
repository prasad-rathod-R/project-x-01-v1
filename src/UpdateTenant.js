import React, { useState } from 'react';

const UpdateTenant = () => {
  const [tenant, setTenant] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    roomNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating tenant:', tenant);
    // Add logic to update tenant
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenant({ ...tenant, [name]: value });
  };

  return (
    <div className="update-tenant">
      <h2>Update Tenant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Tenant ID" value={tenant.id} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={tenant.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={tenant.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={tenant.phone} onChange={handleChange} />
        <input type="text" name="roomNumber" placeholder="Room Number" value={tenant.roomNumber} onChange={handleChange} />
        <button type="submit">Update Tenant</button>
      </form>
    </div>
  );
};

export default UpdateTenant;
