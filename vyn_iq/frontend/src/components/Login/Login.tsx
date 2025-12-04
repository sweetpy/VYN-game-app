import React, { useState } from 'react';
import axios from '../axiosConfig';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/token/', { username, password })
      .then(response => {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        // Redirect to the main page or dashboard
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Login failed:', error);
        alert('Login failed!');
      });
  };

  return (
    <div className="login-container">
      <h2>Login to VYN IQ</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
