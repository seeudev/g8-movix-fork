import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', backgroundColor: '#333' }}>
          <Link to="/register" style={{ color: 'white', marginRight: '20px' }}>Register</Link>
          <Link to="/login" style={{ color: 'white' }}>Login</Link>
        </nav>
        
        {/* Define Routes */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Default route for the homepage */}
          <Route path="/" element={<h1>Welcome to Movix App! Choose Register or Login.</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;