import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Get notified about new listings and campus deals</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your university email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-links-container">
          <div className="footer-links-column">
            <h4>Marketplace</h4>
            <ul className="footer-links">
              <li>
                <a href="/categories">Browse Categories</a>
              </li>
              <li>
                <a href="/featured">Featured Items</a>
              </li>
              <li>
                <a href="/deals">Student Deals</a>
              </li>
              <li>
                <a href="/sell">Sell an Item</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Account</h4>
            <ul className="footer-links">
              <li>
                <a href="/login">Sign In</a>
              </li>
              <li>
                <a href="/register">Create Account</a>
              </li>
              <li>
                <a href="/profile">My Profile</a>
              </li>
              <li>
                <a href="/orders">My Orders</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <a href="/help">Help Center</a>
              </li>
              <li>
                <a href="/safety">Safety Tips</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/report">Report an Issue</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>About</h4>
            <ul className="footer-links">
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/press">Press</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <h2>GBIGEBEYA</h2>
          <p>
            The premier digital marketplace where university students connect,
            trade, and thrive together
          </p>
        </div>

        <div className="footer-info">
          <div className="legal-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookie Policy</a>
          </div>

          <div className="social-links">
            <a
              href="https://facebook.com"
              className="social-icon"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="social-icon"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} GBIGEBEYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
