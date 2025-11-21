import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import LandingPage from './components/LandingPage.jsx';
import SeatSelectionPage from './components/SeatSelectionPage.jsx';
import Settings from './components/Settings.jsx';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const { isLoggedIn } = useAuth();

  return (
    // 1. Wrap everything in ThemeProvider so settings works
    <ThemeProvider>
      <div className="min-h-screen w-full bg-black flex flex-col font-sans">
        <main className="flex flex-col flex-grow w-full bg-black">
          <div className="w-full h-full">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/landing"
                element={
                  <ProtectedRoute>
                    <LandingPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/seat-selection"
                element={
                  <ProtectedRoute>
                    <SeatSelectionPage />
                  </ProtectedRoute>
                }
              />

              {/* 2. THIS WAS MISSING - Add the Settings Route */}
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/"
                element={<Navigate to={isLoggedIn ? "/landing" : "/login"} replace />}
              />

              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;