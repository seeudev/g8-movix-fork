import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import {
  ArrowLeft, Moon, Sun, User, Bell, PlayCircle,
  Shield, LogOut, ChevronRight, CreditCard, Globe, Smartphone
} from 'lucide-react';
import '../css/settings.css';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const userEmail = localStorage.getItem('userEmail') || 'guest@movix.com';
  const userInitial = userEmail.charAt(0).toUpperCase();

  const [notifications, setNotifications] = useState(true);
  const [autoplay, setAutoplay] = useState(false);

  return (
    <div className="settings-page">
      <div className="settings-container">

        {/* Header Group */}
        <div className="settings-header-group">
          <button onClick={() => navigate(-1)} className="settings-back-btn">
            <ArrowLeft size={18} /> Back
          </button>
          <h1 className="settings-title">Settings</h1>
        </div>

        {/* Modern Profile Card */}
        <div className="profile-section">
          <div className="profile-avatar-large">{userInitial}</div>
          <div className="profile-info">
            <h2>Movie Buff</h2>
            <p>{userEmail}</p>
            <span className="profile-badge">Premium Member</span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="settings-grid">

          {/* Column 1: Visual & Account */}
          <div className="settings-column">
            <div className="settings-card">
              <div className="card-header">General</div>

              {/* Theme Toggle */}
              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                  </div>
                  <div>
                    <span className="item-text-primary">Dark Mode</span>
                    <span className="item-text-secondary">Adjust app appearance</span>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`toggle-switch ${theme === 'dark' ? 'active' : ''}`}
                >
                  <div className="toggle-knob" />
                </button>
              </div>

              {/* Account Details */}
              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Account Info</span>
                    <span className="item-text-secondary">Personal details</span>
                  </div>
                </div>
                <ChevronRight size={18} color="#444" />
              </div>

              {/* Language */}
              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <Globe size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Language</span>
                    <span className="item-text-secondary">English (US)</span>
                  </div>
                </div>
                <ChevronRight size={18} color="#444" />
              </div>
            </div>
          </div>

          {/* Column 2: Preferences & Playback */}
          <div className="settings-column">
            <div className="settings-card">
              <div className="card-header">Preferences</div>

              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <Bell size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Notifications</span>
                    <span className="item-text-secondary">News & updates</span>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`toggle-switch ${notifications ? 'active' : ''}`}
                >
                  <div className="toggle-knob" />
                </button>
              </div>

              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <PlayCircle size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Autoplay</span>
                    <span className="item-text-secondary">Video previews</span>
                  </div>
                </div>
                <button
                  onClick={() => setAutoplay(!autoplay)}
                  className={`toggle-switch ${autoplay ? 'active' : ''}`}
                >
                  <div className="toggle-knob" />
                </button>
              </div>

              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Stream Quality</span>
                    <span className="item-text-secondary">Automatic (HD)</span>
                  </div>
                </div>
                <ChevronRight size={18} color="#444" />
              </div>
            </div>
          </div>

          {/* Column 3: Security & Danger Zone */}
          <div className="settings-column">
            <div className="settings-card">
              <div className="card-header">Security</div>

              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Subscription</span>
                    <span className="item-text-secondary">Manage plan</span>
                  </div>
                </div>
                <ChevronRight size={18} color="#444" />
              </div>

              <div className="settings-item">
                <div className="item-left">
                  <div className="icon-wrapper">
                    <Shield size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary">Privacy</span>
                    <span className="item-text-secondary">Data & cookies</span>
                  </div>
                </div>
                <ChevronRight size={18} color="#444" />
              </div>

              <div className="settings-item" onClick={logout}>
                <div className="item-left">
                  <div className="icon-wrapper danger">
                    <LogOut size={20} />
                  </div>
                  <div>
                    <span className="item-text-primary danger">Log Out</span>
                    <span className="item-text-secondary">Sign out now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="version-text">
          MOVIX v1.0.0 • Built for Movie Lovers
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;