import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Search, Bell, Play, Star, Settings, LogOut } from 'lucide-react';
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
  const [activeNav, setActiveNav] = useState('Movies');
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navItems = ['Movies', 'TV Shows', 'Events', 'Concerts'];

  const featuredMovie = {
    id: 1,
    title: 'Kaliwaan',
    description: 'A thrilling story of love, betrayal, and redemption set in the heart of Manila.',
    image: movie1,
    rating: 4.8,
    year: '2024',
    duration: '2h 15m',
    genre: 'Drama / Thriller'
  };

  const continueWatching = [
    { id: 1, title: 'Unang Tikim', image: movie3, progress: 65, duration: '1h 45m' },
    { id: 2, title: 'Tayuan', image: movie4, progress: 30, duration: '2h 10m' },
    { id: 3, title: 'Sapul', image: movie5, progress: 80, duration: '1h 55m' },
  ];

  const nowShowing = [
    { id: 7, title: 'Salitan', image: movie7, rating: 4.5, genre: 'Drama' },
    { id: 8, title: 'Paupahan', image: movie8, rating: 4.2, genre: 'Comedy' },
    { id: 9, title: 'Balik Taya', image: movie9, rating: 4.7, genre: 'Thriller' },
    { id: 10, title: 'Cita', image: movie10, rating: 4.3, genre: 'Romance' },
    { id: 11, title: 'Werewo', image: movie11, rating: 4.1, genre: 'Horror' },
    { id: 12, title: 'Pusoy', image: movie12, rating: 4.6, genre: 'Action' },
  ];

  const popular = [
    { id: 2, title: 'EKS', image: movie2, rating: 4.4, genre: 'Romance' },
    { id: 3, title: 'Unang Tikim', image: movie3, rating: 4.8, genre: 'Drama' },
    { id: 4, title: 'Tayuan', image: movie4, rating: 4.2, genre: 'Comedy' },
    { id: 5, title: 'Sapul', image: movie5, rating: 4.5, genre: 'Thriller' },
    { id: 6, title: 'Bugso', image: movie6, rating: 4.3, genre: 'Action' },
  ];

  const handleMovieClick = (movie) => {
    navigate('/seat-selection', { state: { movie } });
  };

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <header className="top-nav">
        <div className="nav-left">
          <h1 className="logo">MOVIX</h1>
          <nav className="main-nav">
            {navItems.map((item) => (
              <button
                key={item}
                className={`nav-item ${activeNav === item ? 'active' : ''}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="nav-right">
          <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)}>
            <Search size={20} />
          </button>
          <button className="icon-btn">
            <Bell size={20} />
          </button>
          <div className="user-menu">
            <div className="user-avatar" onClick={() => setUserMenuOpen(!userMenuOpen)}>
              {userEmail.charAt(0).toUpperCase()}
            </div>
            {userMenuOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <span className="dropdown-email">{userEmail}</span>
                </div>
                <button className="dropdown-item" onClick={() => navigate('/settings')}>
                  <Settings size={16} /> Settings
                </button>
                <button className="dropdown-item logout" onClick={logout}>
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Search Bar (expandable) */}
      {searchOpen && (
        <div className="search-bar-container">
          <input type="text" placeholder="Search movies, shows, events..." className="search-input" />
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Hero/Featured Section */}
        <section className="hero-section">
          <div className="hero-backdrop" style={{ backgroundImage: `url(${featuredMovie.image})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <span className="hero-badge">Featured</span>
              <h2 className="hero-title">{featuredMovie.title}</h2>
              <div className="hero-meta">
                <span className="hero-rating"><Star size={14} fill="#fbbf24" stroke="#fbbf24" /> {featuredMovie.rating}</span>
                <span>{featuredMovie.year}</span>
                <span>{featuredMovie.duration}</span>
                <span>{featuredMovie.genre}</span>
              </div>
              <p className="hero-description">{featuredMovie.description}</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => handleMovieClick(featuredMovie)}>
                  <Play size={18} fill="white" /> Watch Now
                </button>
                <button className="btn-secondary">+ Add to List</button>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Watching */}
        <section className="movie-section">
          <div className="section-header">
            <h3>Continue Watching</h3>
            <button className="see-all">See all →</button>
          </div>
          <div className="movie-row continue-row">
            {continueWatching.map((movie) => (
              <div key={movie.id} className="continue-card" onClick={() => handleMovieClick(movie)}>
                <div className="continue-image">
                  <img src={movie.image} alt={movie.title} />
                  <div className="play-overlay">
                    <Play size={32} fill="white" />
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${movie.progress}%` }}></div>
                </div>
                <div className="continue-info">
                  <p className="continue-title">{movie.title}</p>
                  <span className="continue-duration">{movie.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Now Showing */}
        <section className="movie-section">
          <div className="section-header">
            <h3>Now Showing</h3>
            <button className="see-all">See all →</button>
          </div>
          <div className="movie-row">
            {nowShowing.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
                <div className="card-image">
                  <img src={movie.image} alt={movie.title} />
                  <div className="card-overlay">
                    <Play size={40} fill="white" />
                  </div>
                  <div className="card-rating">
                    <Star size={12} fill="#fbbf24" stroke="#fbbf24" /> {movie.rating}
                  </div>
                </div>
                <div className="card-info">
                  <p className="card-title">{movie.title}</p>
                  <span className="card-genre">{movie.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular */}
        <section className="movie-section">
          <div className="section-header">
            <h3>Popular This Week</h3>
            <button className="see-all">See all →</button>
          </div>
          <div className="movie-row">
            {popular.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
                <div className="card-image">
                  <img src={movie.image} alt={movie.title} />
                  <div className="card-overlay">
                    <Play size={40} fill="white" />
                  </div>
                  <div className="card-rating">
                    <Star size={12} fill="#fbbf24" stroke="#fbbf24" /> {movie.rating}
                  </div>
                </div>
                <div className="card-info">
                  <p className="card-title">{movie.title}</p>
                  <span className="card-genre">{movie.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;