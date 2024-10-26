import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!role) {
      alert('Please select a role');
      return;
    }

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    const existingUser = users.find(
      (user) => user.username === username || user.email === email
    );

    if (existingUser) {
      alert('Username or Email already exists. Please choose another one.');
      return;
    }

    // Create new user object
    const newUser = {
      username,
      password,
      aadhar,
      phone,
      address,
      email,
      role
    };

    // Add new user to users array
    users.push(newUser);

    // Store updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign-up successful! You can now log in.');
    navigate('/login');
  };

  return (
    // <div className="signup-container">
    //   <div className="signup-box">
    //     <h2>Sign Up</h2>
    //     <form onSubmit={handleSignUp}>
    //       <input
    //         type="text"
    //         placeholder="Username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="text"
    //         placeholder="Aadhar Number"
    //         value={aadhar}
    //         onChange={(e) => setAadhar(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="tel"
    //         placeholder="Phone Number"
    //         value={phone}
    //         onChange={(e) => setPhone(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="text"
    //         placeholder="Address"
    //         value={address}
    //         onChange={(e) => setAddress(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="password"
    //         placeholder="Confirm Password"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //         required
    //       />
    //       <select
    //         value={role}
    //         onChange={(e) => setRole(e.target.value)}
    //         required
    //       >
    //         <option value="" disabled>
    //           Select Role
    //         </option>
    //         <option value="landlord">Landlord</option>
    //         <option value="pgowner">PG Owner</option>
    //         <option value="tenant">Tenant</option> {/* Added a new role */}
    //       </select>
    //       <button type="submit">Sign Up</button>
    //     </form>
    //   </div>
    // </div>

    <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">User Data</div>
      <Input label="First name" placeholder="First Name" />
      <Input label="Last name" placeholder="Last Name" />
      <Input label="User name" placeholder="User Name" />
      <Input label="Company" placeholder="Company Name" />
      <Input label="Email" placeholder="Email Address" />
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Phone Number</div>
      <Input label="Home" placeholder="Home" />
      <Input label="Business" placeholder="Business" />
      <Input label="Fax" placeholder="Fax" />
    </div>
  </Page>
  );
};

export default SignUp;
