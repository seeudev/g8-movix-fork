import React from 'react';
import { Link } from 'react-router-dom';
import '../css/moviedesc.css';

const MovieDesc = () => {
  return (
    <div className="movie-desc-page">
      <header className="header">
        <div className="header-icons">
            <Link to="/" className="icon-circle" style={{ textDecoration: 'none', color: 'white' }}>👤</Link>
            <Link to="/" className="icon-circle" style={{ textDecoration: 'none', color: 'white' }}>🏠</Link>
        </div>
        <div className="header-title">
            now showing <span>🎥</span>
        </div>
        <div style={{ width: '80px' }}></div>
      </header>

      <div className="container">
        <div className="detail-layout">
            <div className="detail-poster">
                <img src="https://image.tmdb.org/t/p/w500/7MRm2g3f9n6m8qK1w9zR5tL2.jpg" alt="anora poster" />
            </div>

            <div className="detail-content">
                <h1>anora</h1>
                <div className="director">directed by sean baker</div>
                <p className="synopsis">
                    a young sex worker from brooklyn gets her chance at a cinderella story when she meets and impulsively marries the son of an oligarch. once the news reaches russia, her fairytale is threatened as his parents set out to get the marriage annulled.
                </p>

                <div className="cast-section">
                    <h2>cast</h2>
                    <div className="cast-list">
                        <p><strong>mikey madison</strong> as anora "ani" mikheeva</p>
                        <p><strong>mark eydelshteyn</strong> as ivan "vanya" zakharov</p>
                        <p><strong>yura borisov</strong> as igor</p>
                        <p><strong>karren karagulian</strong> as toros</p>
                        <p><strong>vache tovmasyan</strong> as garnik</p>
                        <p><strong>aleksei serebryakov</strong> as nikolai zakharov</p>
                        <p><strong>darya ekamasova</strong> as galina zakharova</p>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <h2 className="reviews-header">reviews</h2>
                <p className="review-text">
                    anora is a grittier experience. all the performances are impressive and i will not be surprised if madison receives an oscar nomination.
                </p>
                <span className="review-source">-stephen romei from the australian</span>

                <p className="review-text">
                    it's a rollercoaster ride, yet baker never confuses movement with action. every twist takes you somewhere you hadn't quite expected to be, revealing an emotion you hadn't expected to share.
                </p>
                <span class="review-source">-sandra hall from sydney morning herald</span>
            </div>

            <div className="detail-actions">
                <button className="btn-buy-large">buy tickets</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;