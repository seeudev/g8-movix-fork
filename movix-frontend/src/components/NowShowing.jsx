import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nowshowing.css';

const NowShowing = () => {
  return (
    <div className="now-showing-page">
      <header className="header">
        <div className="header-icons">
            <div className="icon-circle">👤</div>
            <div className="icon-circle">🏠</div>
        </div>
        <div className="header-title">
            now showing <span>🎥</span>
        </div>
        <div style={{ width: '80px' }}></div>
      </header>

      <div className="container">
        <div className="date-header">
            august 22, 2025 📅
        </div>

        <div className="movie-grid">
            <div className="movie-col">
                <div className="poster-wrapper">
                    <span className="rank-number">1</span>
                    <img src="https://image.tmdb.org/t/p/w500/3Rk72nJuxL3jYfFj9qH2mYqJ8xM.jpg" alt="the outrun" className="poster-img" />
                </div>
                <div className="movie-info">
                    <h3 className="movie-title">the outrun</h3>
                    <ul className="showtimes">
                        <li>10:30 am</li>
                        <li>12:45 pm</li>
                        <li>3:15 pm</li>
                        <li>5:00 pm</li>
                        <li>7:30 pm</li>
                    </ul>
                    <div className="price">php 340</div>
                    <button className="btn-buy">buy tickets</button>
                </div>
            </div>

            <div className="movie-col">
                <div className="poster-wrapper">
                    <span className="rank-number">2</span>
                    <img src="https://image.tmdb.org/t/p/w500/r3pPehX4ik8p5kQ9yF9qK8z3mZ.jpg" alt="l'avenir" className="poster-img" />
                </div>
                <div className="movie-info">
                    <h3 className="movie-title">l'avenir</h3>
                    <ul className="showtimes">
                        <li>10:30 am</li>
                        <li>12:45 pm</li>
                        <li>3:15 pm</li>
                        <li>5:00 pm</li>
                        <li>7:30 pm</li>
                    </ul>
                    <div className="price">php 340</div>
                    <button className="btn-buy">buy tickets</button>
                </div>
            </div>

            <div className="movie-col">
                <div className="poster-wrapper">
                    <span className="rank-number">3</span>
                    <img src="https://image.tmdb.org/t/p/w500/c5Tqxeo1UpBvnAc3csUm7j3y8q.jpg" alt="wicked" className="poster-img" />
                </div>
                <div className="movie-info">
                    <h3 className="movie-title">wicked</h3>
                    <ul className="showtimes">
                        <li>10:30 am</li>
                        <li>12:45 pm</li>
                        <li>3:15 pm</li>
                        <li>5:00 pm</li>
                        <li>7:30 pm</li>
                    </ul>
                    <div className="price">php 280</div>
                    <button className="btn-buy">buy tickets</button>
                </div>
            </div>

            <div className="movie-col">
                <div className="poster-wrapper">
                    <span className="rank-number">4</span>
                    <img src="https://image.tmdb.org/t/p/w500/z8qJ9y5k3mF7rL1nO6pQ2sT4u.jpg" alt="i'm still here" className="poster-img" />
                </div>
                <div className="movie-info">
                    <h3 className="movie-title">i'm still here</h3>
                    <ul className="showtimes">
                        <li>10:30 am</li>
                        <li>12:45 pm</li>
                        <li>3:15 pm</li>
                        <li>5:00 pm</li>
                        <li>7:30 pm</li>
                    </ul>
                    <div className="price">php 230</div>
                    <button className="btn-buy">buy tickets</button>
                </div>
            </div>

            <div className="movie-col">
                <Link to="/movie/anora" className="poster-wrapper">
                    <span className="rank-number">5</span>
                    <img src="https://image.tmdb.org/t/p/w500/7MRm2g3f9n6m8qK1w9zR5tL2.jpg" alt="anora" className="poster-img" />
                </Link>
                <div className="movie-info">
                    <h3 className="movie-title">anora</h3>
                    <ul className="showtimes">
                        <li>10:30 am</li>
                        <li>12:45 pm</li>
                        <li>3:15 pm</li>
                        <li>5:00 pm</li>
                        <li>7:30 pm</li>
                    </ul>
                    <div className="price">php 575</div>
                    <Link to="/movie/anora">
                        <button className="btn-buy">buy tickets</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NowShowing;