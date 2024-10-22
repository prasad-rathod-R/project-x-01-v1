import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageTenants.css';

// Dummy data
const initialTenants = [
  { id: 1, name: 'John Doe', phone: '1234567890' },
  { id: 2, name: 'Jane Smith', phone: '0987654321' }
];

// AddTenant Component
const AddTenant = ({ onAdd }) => {
  const [newTenant, setNewTenant] = useState({ name: '', phone: '' , adharNum: ''});

  const handleAdd = () => {
    if (newTenant.name && newTenant.phone) {
      onAdd(newTenant);
      setNewTenant({ name: '', phone: '' });
    }
  };

  return (
    <div className="form-container">
      <h4>Add Tenant</h4>
      <input
        type="text"
        placeholder="Name"
        value={newTenant.name}
        onChange={(e) => setNewTenant({ ...newTenant, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={newTenant.phone}
        onChange={(e) => setNewTenant({ ...newTenant, phone: e.target.value })}
      />
       <input
        type="text"
        placeholder="Adhar Number"
        value={newTenant.phone}
        onChange={(e) => setNewTenant({ ...newTenant, adharNum: e.target.value })}
      />
      
      <button onClick={handleAdd}>Add Tenant</button>
    </div>
  );
};

// UpdateTenant Component
const UpdateTenant = ({ tenant, onUpdate }) => {
  const [updatedTenant, setUpdatedTenant] = useState(tenant);

  const handleUpdate = () => {
    if (updatedTenant.name && updatedTenant.phone) {
      onUpdate(updatedTenant);
    }
  };

  return (
    <div className="form-container">
      <h4>Update Tenant</h4>
      <input
        type="text"
        placeholder="Name"
        value={updatedTenant.name}
        onChange={(e) => setUpdatedTenant({ ...updatedTenant, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={updatedTenant.phone}
        onChange={(e) => setUpdatedTenant({ ...updatedTenant, phone: e.target.value })}
      />
       <input
        type="text"
        placeholder="Adhar Number"
        value={updatedTenant.name}
        onChange={(e) => setUpdatedTenant({ ...updatedTenant, name: e.target.value })}
      />
      <button onClick={handleUpdate}>Update Tenant</button>
    </div>
  );
};

// ManageTenants Component
const ManageTenants = () => {
  const [tenants, setTenants] = useState(initialTenants);
  const [editingTenant, setEditingTenant] = useState(null);

  const handleAddTenant = (tenant) => {
    setTenants([...tenants, { ...tenant, id: tenants.length + 1 }]);
  };

  const handleUpdateTenant = (updatedTenant) => {
    setTenants(tenants.map((tenant) =>
      tenant.id === updatedTenant.id ? updatedTenant : tenant
    ));
    setEditingTenant(null);
  };

  const handleDeleteTenant = (id) => {
    setTenants(tenants.filter((tenant) => tenant.id !== id));
  };

  return (
    <div className="container">
      <header className="container-header">
        <h2 style={{ marginTop: "40px" }}>Manage Tenants</h2>
        <div className="buttons">
          <Link to="/manage-tenants" className="btn btn-primary">Manage Tenants</Link>
          <Link to="/rent-dashboard" className="btn btn-primary">Rent Dashboard</Link>
        </div>
      </header>

      <div className="content">
        {/* Add Tenant */}
        <AddTenant onAdd={handleAddTenant} />

        {/* Update Tenant */}
        {editingTenant && (
          <UpdateTenant tenant={editingTenant} onUpdate={handleUpdateTenant} />
        )}

        {/* View Tenants */}
        <div className="tenant-list">
          <h4>All Tenants</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id}>
                  <td>{tenant.name}</td>
                  <td>{tenant.phone}</td>
                  <td>
                    <div className='buttonCss'>
                    <button className="btn btn-warning btn-sm" onClick={() => setEditingTenant(tenant)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTenant(tenant.id)}>Delete</button>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTenants;
