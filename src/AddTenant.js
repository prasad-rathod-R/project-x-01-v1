import React, { useState } from 'react';

const AddTenant = () => {
  const [tenant, setTenant] = useState({
    name: '',
    email: '',
    phone: '',
    roomNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding tenant:', tenant);
    // Add logic to add tenant to the list or backend
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenant({ ...tenant, [name]: value });
  };

  return (
    <div className="add-tenant">
      <h2>Add Tenant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={tenant.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={tenant.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={tenant.phone} onChange={handleChange} required />
        <input type="text" name="roomNumber" placeholder="Room Number" value={tenant.roomNumber} onChange={handleChange} required />
        <button type="submit">Add Tenant</button>
      </form>
    </div>
  );
};

export default AddTenant;
