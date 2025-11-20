import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/global.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Registering...');

    const API_URL = 'http://localhost:8081/api/auth/register';

    try {
      const response = await axios.post(API_URL, { email, password });
      setMessage('Registration successful! Check your email to confirm your account.');
      console.log('Backend response:', response.data);
    } catch (error) {
      const errorMessage = error.response ? error.response.data || 'Registration failed' : 'Network error or CORS issue.';
      setMessage(`Error: ${errorMessage}`);
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="page-wrapper">
      <h2>Register for Movix</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Register
        </button>
      </form>

      {message && <p style={{ marginTop: '15px', color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}

      {/* Already have an account redirection */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>Already have an account?</p>
        <button
          onClick={() => navigate('/login')}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Login Here
        </button>
      </div>
    </div>
  );
}

export default Register;