import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Search, Bell, Play, Star, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/landingpage.css';
import ff from '../assets/movies/ff.jpeg';
import superman from '../assets/movies/superman.jpeg';
import conjuring from '../assets/movies/conjuring.jpeg';
import dwp2 from '../assets/movies/dwp2.jpg';
import frankenstein from '../assets/movies/frankenstein.jpeg';
import spiderman from '../assets/movies/spiderman.jpg';
import odyssey from '../assets/movies/odyssey.jpeg';
import doomsday from '../assets/movies/doomsday.jpg';
import thg from '../assets/movies/thg.jpeg';
import jjk from '../assets/movies/jjk.jpg';
import avatar from '../assets/movies/avatar.jpeg';
import nowyouseeme from '../assets/movies/nowyouseeme.png';
import wicked from '../assets/movies/wicked.jpg';
 

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
        title: 'Wicked for Good',
        description: 'Elphaba, the future Wicked Witch of the West and her relationship with Glinda, the Good Witch of the North. The second of a two-part feature film adaptation of the Broadway musical.',
        image: wicked,
        rating: 4.8,
        year: '2024',
        duration: '2h 18m',
        genre: 'Drama / Musical'
    };

  const continueWatching = [
        { id: 1, title: "Now You See Me, Now You Don't", image: nowyouseeme, progress: 65, duration: '1h 52m' },
        { id: 2, title: 'Avatar: Fire and Ash', image: avatar, progress: 30, duration: '3h 15m' },
        { id: 3, title: 'JUJUTSU KAISEN: Shibuya Incident×The Culling Game', image: jjk, progress: 80, duration: '1h 55m' },
    ];

  const nowShowing = [
        { id: 7, title: 'The Devil Wears Prada 2', image: dwp2, rating: 4.5, genre: 'Comedy' },
        { id: 8, title: 'Frankenstein', image: frankenstein, rating: 4.2, genre: 'Horror' },
        { id: 9, title: 'The Odyssey', image: odyssey, rating: 4.7, genre: 'Epic' },
        { id: 10, title: 'Spiderman: Brand New Day', image: spiderman, rating: 4.3, genre: 'Action' },
        { id: 11, title: 'The Hunger Games: Sunrise on the Reaping', image: thg, rating: 4.1, genre: 'Drama' },
        { id: 12, title: 'Avengers: Doomsday', image: doomsday, rating: 4.6, genre: 'Action' },
    ];

  const popular = [
        { id: 2, title: 'Wicked for Good', image: wicked, rating: 4.8, genre: 'Musical' },
        { id: 3, title: 'Frankenstein', image: frankenstein, rating: 4.8, genre: 'Horror' },
        { id: 4, title: 'The Conjuring: Last Rites', image: conjuring, rating: 4.2, genre: 'Horror' },
        { id: 5, title: 'Superman', image: superman, rating: 4.5, genre: 'Action' },
        { id: 6, title: 'Freakier Friday', image: ff, rating: 4.3, genre: 'Comedy' },
    ];

  const handleMovieClick = (movie) => {
    navigate('/movie-details', { state: { movie } });
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