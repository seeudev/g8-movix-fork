import React, { useState } from 'react';
import axios from 'axios'; 

function Login() {
    // 1. State variables to hold the form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Logging in...');
        
        // **This is the critical link to your Spring Boot API on port 8081**
        const API_URL = 'http://localhost:8081/api/auth/login'; 

        try {
            // 2. Send the POST request with the user's email and password
            const response = await axios.post(API_URL, {
                email,
                password
            });

            const userData = response.data;
            
            // 3. Handle a successful response: Save the access token for future API calls
            localStorage.setItem('access_token', userData.access_token);

            setMessage('Login successful!');
            console.log('User logged in:', userData);

        } catch (error) {
            // 4. Handle errors (e.g., wrong password, user not found)
            const errorMessage = error.response 
                ? error.response.data || 'Login failed' 
                : 'Network error or CORS issue.';
            
            setMessage(`Error: ${errorMessage}`);
            console.error('Login error:', error);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc' }}>
            <h2>Login to Movix</h2>
            <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                {/* Password Input */}
                <div style={{ marginBottom: '15px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
            {message && <p style={{ marginTop: '15px', color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
        </div>
    );
}

export default Login;