import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Home, Film } from 'lucide-react';
import '../css/moviedetails.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie || {
    title: 'Unknown Movie',
    image: '',
    genre: 'Drama',
    rating: 4.5,
  };

  // Movie details (you can customize these or fetch from backend)
  const movieDetails = {
    title: movie.title || 'Wicked for Good',
    director: 'Jon M. Chu',
    year: '2024',
    description: '"Wicked: For Good" is the second of a two-part musical fantasy film that concludes the story of Elphaba (Cynthia Erivo) and Glinda (Ariana Grande), detailing their transformation into the Wicked Witch of the West and Glinda the Good, the political turmoil in Oz, and their eventual fates.',
    cast: [
      { actor: 'Cynthia Erivo', role: 'Elphaba' },
      { actor: 'Ariana Grande', role: 'Glinda' },
      { actor: 'Jonathan Bailey', role: 'Fiyero' },
      { actor: 'Jeff Goldblum', role: 'The Wonderful Wizard of Oz' },
      { actor: 'Michelle Yeoh', role: 'Madame Morrible' },
    ],
    reviews: [
      {
        text: 'A gripping tale that keeps you on the edge of your seat. The performances are outstanding and the cinematography is breathtaking.',
        reviewer: 'rubyjinx3'
      },
      {
        text: 'It\'s a rollercoaster ride of emotions. Every scene is crafted with care, revealing layers of the characters you didn\'t expect.',
        reviewer: 'jinni'
      }
    ]
  };

  const handleBuyTickets = () => {
    navigate('/seat-selection', { state: { movie } });
  };

  return (
    <div className="movie-details-page">
      {/* Header */}
      <header className="details-header">
        <div className="header-left">
          <button className="header-icon" onClick={() => navigate('/landing')}>
            <User size={24} />
          </button>
          <button className="header-icon" onClick={() => navigate('/landing')}>
            <Home size={24} />
          </button>
        </div>
        <h1 className="header-title">
          NOW SHOWING <Film size={28} />
        </h1>
        <div className="header-right"></div>
      </header>

      {/* Main Content */}
      <main className="details-content">
        {/* Left - Movie Poster */}
        <div className="details-poster">
          <img src={movie.image} alt={movie.title} />
        </div>

        {/* Middle - Movie Info */}
        <div className="details-info">
          <h2 className="movie-title">
            {movieDetails.title.toUpperCase()}
            <span className="director">directed by {movieDetails.director.toUpperCase()}</span>
          </h2>

          <p className="movie-description">{movieDetails.description}</p>

          <div className="cast-section">
            <h3>CAST</h3>
            <div className="cast-list">
              {movieDetails.cast.map((member, index) => (
                <p key={index}>
                  <strong>{member.actor}</strong> as {member.role}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Reviews */}
        <div className="details-reviews">
          <h3>Reviews</h3>
          {movieDetails.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">-{review.reviewer}</p>
            </div>
          ))}

          <button className="buy-tickets-btn" onClick={handleBuyTickets}>
            Buy Tickets
          </button>
        </div>
      </main>
    </div>
  );
};

export default MovieDetailsPage;