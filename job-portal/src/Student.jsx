import React, { useState } from 'react';
import  './home.css';
import './style.css';
import myImage from './images/studentimg2.jpg';

const Student = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login successful!');
  };

  return (
    <div>
      <img src={myImage}  class="studentimg" alt="My Image" />
      <h2>Student Login Page:</h2>
      <p>Would you like to log in?</p>
      <button onClick={handleShowLoginForm}>Yes</button>
      <a href="home.html"><button>No</button></a>
      {showLoginForm && (
        <div id="loginForm">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
      <h2>Want to Register?</h2>
      <a href="registration.html"><button>Register</button></a>
    </div>
  );
}

export default Student;