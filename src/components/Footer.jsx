import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Section */}
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-title">FilmFlux</h3>
            <p className="footer-description">
              Your ultimate destination for discovering the world's finest cinema. 
              From blockbusters to hidden gems, we bring you the best movies from around the globe.
            </p>
            <div className="social-links">
              <a href="/" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/favorite" className="footer-link">Favorites</Link></li>
              <li><a href="/" className="footer-link">Trending</a></li>
              <li><a href="/" className="footer-link">New Releases</a></li>
              <li><a href="/" className="footer-link">Coming Soon</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Action</a></li>
              <li><a href="/" className="footer-link">Drama</a></li>
              <li><a href="/" className="footer-link">Comedy</a></li>
              <li><a href="/" className="footer-link">Sci-Fi</a></li>
              <li><a href="/" className="footer-link">Thriller</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">
              Stay updated with the latest movie releases and exclusive content!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className="success-message">🎉 Successfully subscribed!</p>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 FilmFlux. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/" className="footer-bottom-link">Privacy Policy</a>
              <a href="/" className="footer-bottom-link">Terms of Service</a>
              <a href="/" className="footer-bottom-link">Contact Us</a>
              <a href="/" className="footer-bottom-link">About</a>
            </div>
          </div>
          <div className="developer-signature">
            <p className="made-with-love">
              Made with <span className="heart">❤️</span> by <span className="developer-name">AJ</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 