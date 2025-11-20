import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/seatselection.css';

const SeatSelectionPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the movie from state
  const movie = location.state?.movie || {
    title: 'Unknown Movie',
    image: 'https://via.placeholder.com/250x350.png?text=Movie+Poster'
  };

  const rows = 5;
  const cols = 8;

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId) 
        : [...prev, seatId]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Select at least one seat!');
      return;
    }
    alert(`You booked seats: ${selectedSeats.join(', ')} for ${movie.title}`);
  };

  const renderSeats = () => {
    const seatButtons = [];
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= cols; c++) {
        const seatId = `${r}-${c}`;
        seatButtons.push(
          <button
            key={seatId}
            className={`seat-button ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
            onClick={() => toggleSeat(seatId)}
          >
            {seatId}
          </button>
        );
      }
    }
    return seatButtons;
  };

  return (
    <div className="seat-page-wrapper">
      <div className="poster-section">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-poster"
        />
        <h2 className="movie-title">{movie.title}</h2>
      </div>

      <div className="seats-section">
        <h2>Select Your Seats</h2>
        <div className="seats-grid">
          {renderSeats()}
        </div>

        <button className="book-button" onClick={handleBooking}>
          Book Seats
        </button>

        <p 
          className="return-link"
          onClick={() => navigate('/landing')}
        >
          &larr; Return
        </p>
      </div>
    </div>
  );
};

export default SeatSelectionPage;