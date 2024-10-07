// ViewProperties.js
import React from 'react';
import './ViewProperties.css';
import BackButton from './BackButton'; // Import the BackButton component


const ViewProperties = () => {
  const properties = [
    { id: 1, type: '1BHK', location: 'New York', status: 'Available' },
    { id: 2, type: '2BHK', location: 'San Francisco', status: 'Occupied' },
  ];

  return (
    <div className="view-properties-container">
      <h2>View Properties</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.type}</td>
              <td>{property.location}</td>
              <td>{property.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackButton /> 
    </div>
          

  );
};

export default ViewProperties;
