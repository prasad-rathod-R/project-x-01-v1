// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <button className="back-btn" onClick={handleBack}>
      Back
    </button>
  );
};

export default BackButton;
