import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../css/global.css';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Logging in...');

    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', { email, password });
      const userData = response.data;
      localStorage.setItem('userToken', userData.token);
      localStorage.setItem('userEmail', userData.email);

      login();
      navigate('/landing');
    } catch (error) {
      setMessage(error.response?.data.message || 'Network error or invalid credentials.');
      console.error(error);
    }
  };

  return (
    <div className="page-wrapper">
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>

        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>

      {message && <p style={{ marginTop: '15px', color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}

      {/* New register redirection section */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>Not signed up yet?</p>
        <button
          onClick={() => navigate('/register')}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Register Here
        </button>
      </div>
    </div>
  );
}

export default Login;