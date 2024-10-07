import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with matching credentials
    const user = users.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === role
    );

    if (user) {
      onLogin(user); // Pass the entire user object to App.js
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // Redirect based on role
      if (user.role === 'landlord') {
        navigate('/landlord-dashboard');
      } else if (user.role === 'pgowner') {
        navigate('/pgowner-dashboard');
      } else if (user.role === 'tenant') {
        navigate('/tenant-dashboard');
      } else {
        navigate('/'); // Default redirection
      }
    } else {
      alert('Invalid credentials. Please check your username, password, and role.');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {/* <form onSubmit={handleLogin}> */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="landlord">Landlord</option>
            <option value="pgowner">PG Owner</option>
            <option value="tenant">Tenant</option>
            <option value="login">Login</option>
          </select>
          <button type="submit" onClick={(e) => handleLogin()}>Login</button>
        {/* </form> */}
        <div className="signup-link">
          <p>Don't have an account?</p>
          <button onClick={handleSignUpRedirect}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
