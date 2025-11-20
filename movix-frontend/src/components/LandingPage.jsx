import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/landingpage.css';
import movie1 from '../assets/covers/movie1.jpg';
import movie2 from '../assets/covers/movie2.jpg';
import movie3 from '../assets/covers/movie3.jpg';
import movie4 from '../assets/covers/movie4.jpg';
import movie5 from '../assets/covers/movie5.jpg';
import movie6 from '../assets/covers/movie6.jpg';
import movie7 from '../assets/covers/movie7.jpg';
import movie8 from '../assets/covers/movie8.jpg';
import movie9 from '../assets/covers/movie9.jpg';
import movie10 from '../assets/covers/movie10.jpg';
import movie11 from '../assets/covers/movie11.jpg';
import movie12 from '../assets/covers/movie12.jpg';

const LandingPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'Guest User';

  // Categories
  const categories = ['Genre', 'Showing', 'Events', 'Concerts'];

  // Movies per category
  const moviesByCategory = {
    Genre: [
      { id: 1, title: '', image: movie1 },
      { id: 2, title: '', image: movie2 },
      { id: 3, title: '', image: movie3 },
      { id: 4, title: '', image: movie4 },
      { id: 5, title: '', image: movie5 },
      { id: 6, title: '', image: movie6 },
    ],
    Showing: [
      { id: 7, title: '', image: movie7 },
      { id: 8, title: '', image: movie8 },
      { id: 9, title: '', image: movie9 },
      { id: 10, title: '', image: movie10 },
      { id: 11, title: '', image: movie11 },
      { id: 12, title: '', image: movie12 },
    ],
    Events: [
    ],
    Concerts: [
    ],
  };

  const handleMovieClick = (movie) => {
  // Pass the movie object in state
  navigate('/seat-selection', { state: { movie } });
};

  return (
    <div className="landing-page-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <User className="profile-icon" />
          <p>{userEmail}</p>
        </div>

        <nav className="sidebar-nav">
          {categories.map((cat) => (
            <button key={cat} className="sidebar-btn">
              {cat}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-btn flex items-center" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
          <button className="sidebar-btn flex items-center">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="landing-main">
        {categories.map((cat) => (
          <section key={cat} className="movie-section">
            <h2>{cat}</h2>
            <div className="movie-row">
              {moviesByCategory[cat].map((item) => (
                <div
                  key={item.id}
                  className="movie-card"
                  onClick={() => handleMovieClick(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default LandingPage;
