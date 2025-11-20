import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import LandingPage from './components/LandingPage.jsx';
import SeatSelectionPage from './components/SeatSelectionPage.jsx';

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col font-sans items-center">
      <main className="flex flex-col flex-grow w-full items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-5xl">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Protected landing page */}
            <Route
              path="/landing"
              element={
                <ProtectedRoute>
                  <LandingPage />
                </ProtectedRoute>
              }
            />

            {/* Protected seat selection page */}
            <Route
              path="/seat-selection"
              element={
                <ProtectedRoute>
                  <SeatSelectionPage />
                </ProtectedRoute>
              }
            />

            {/* Default redirect based on login status */}
            <Route
              path="/"
              element={<Navigate to={localStorage.getItem('userToken') ? "/landing" : "/login"} replace />}
            />

            {/* Catch-all for unknown routes */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;