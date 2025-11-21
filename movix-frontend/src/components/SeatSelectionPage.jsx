import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, ChevronLeft } from 'lucide-react';
import '../css/seatselection.css';

const SeatSelectionPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie || { title: 'Unknown Movie', image: '' };

    const dates = [
        { day: 9, month: 'NOV' },
        { day: 10, month: 'NOV' },
        { day: 11, month: 'NOV' },
        { day: 12, month: 'NOV' },
        { day: 13, month: 'NOV' },
        { day: 14, month: 'NOV' },
    ];

    const cinemas = ['CINEMA1', 'CINEMA2', 'CINEMA3'];

    const [selectedDate, setSelectedDate] = useState(3);
    const [selectedCinema, setSelectedCinema] = useState('CINEMA1');
    const [selectedSeats, setSelectedSeats] = useState([]);

    const [seats, setSeats] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    const handleSeatClick = (rowIndex, seatIndex) => {
        if (seats[rowIndex][seatIndex] === 1) return;

        const newSeats = [...seats];
        const seatId = `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`;

        if (newSeats[rowIndex][seatIndex] === 2) {
            newSeats[rowIndex][seatIndex] = 0;
            setSelectedSeats(selectedSeats.filter(s => s !== seatId));
        } else {
            newSeats[rowIndex][seatIndex] = 2;
            setSelectedSeats([...selectedSeats, seatId]);
        }
        setSeats(newSeats);
    };

    const getSeatClass = (status) => {
        switch (status) {
            case 1: return 'seat booked';
            case 2: return 'seat selected';
            default: return 'seat available';
        }
    };

    const handleSelect = () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat');
            return;
        }
        alert(`Selected seats: ${selectedSeats.join(', ')}\nDate: ${dates[selectedDate].day} ${dates[selectedDate].month}\nCinema: ${selectedCinema}`);
    };

    return (
        <div className="seat-page">
            <div className="seat-poster">
                <button className="back-btn" onClick={() => navigate('/landing')}>
                    <ChevronLeft size={24} />
                </button>
                <img src={movie.image} alt={movie.title} />
                <div className="poster-gradient"></div>
                <div className="cinema-info">
                    <MapPin size={18} />
                    <div>
                        <p className="cinema-name">Movix Cinema</p>
                        <p className="cinema-address">123 Main St, Your City</p>
                    </div>
                </div>
            </div>

            <div className="seat-selection">
                <h1>MOVIX SEAT SELECTION</h1>

                <div className="movie-select">
                    <label>Choose your movie</label>
                    <div className="movie-dropdown">
                        {movie.title} ({new Date().getFullYear()})
                    </div>
                </div>

                <div className="date-picker">
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            className={`date-btn ${selectedDate === index ? 'active' : ''}`}
                            onClick={() => setSelectedDate(index)}
                        >
                            <span className="date-day">{date.day}</span>
                            <span className="date-month">{date.month}</span>
                        </button>
                    ))}
                </div>

                <div className="cinema-select">
                    {cinemas.map((cinema) => (
                        <button
                            key={cinema}
                            className={`cinema-btn ${selectedCinema === cinema ? 'active' : ''}`}
                            onClick={() => setSelectedCinema(cinema)}
                        >
                            {cinema}
                        </button>
                    ))}
                </div>

                <div className="seat-section">
                    <h3>Choose your seats</h3>
                    <div className="screen">SCREEN</div>
                    <div className="seat-grid">
                        {seats.map((row, rowIndex) => (
                            <div key={rowIndex} className="seat-row">
                                <span className="row-label">{String.fromCharCode(65 + rowIndex)}</span>
                                <div className="seats-container">
                                    <div className="seat-group">
                                        {row.slice(0, 5).map((seat, seatIndex) => (
                                            <div
                                                key={seatIndex}
                                                className={getSeatClass(seat)}
                                                onClick={() => handleSeatClick(rowIndex, seatIndex)}
                                            />
                                        ))}
                                    </div>
                                    <div className="seat-group">
                                        {row.slice(5, 10).map((seat, seatIndex) => (
                                            <div
                                                key={seatIndex + 5}
                                                className={getSeatClass(seat)}
                                                onClick={() => handleSeatClick(rowIndex, seatIndex + 5)}
                                            />
                                        ))}
                                    </div>
                                    <div className="seat-group">
                                        {row.slice(10, 15).map((seat, seatIndex) => (
                                            <div
                                                key={seatIndex + 10}
                                                className={getSeatClass(seat)}
                                                onClick={() => handleSeatClick(rowIndex, seatIndex + 10)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="seat-legend">
                        <div className="legend-item">
                            <div className="seat available"></div>
                            <span>Available</span>
                        </div>
                        <div className="legend-item">
                            <div className="seat booked"></div>
                            <span>Booked</span>
                        </div>
                        <div className="legend-item">
                            <div className="seat selected"></div>
                            <span>Your Seat</span>
                        </div>
                    </div>
                </div>

                <button className="select-btn" onClick={handleSelect}>
                    SELECT {selectedSeats.length > 0 && `(${selectedSeats.length})`}
                </button>
            </div>
        </div>
    );
};

export default SeatSelectionPage;