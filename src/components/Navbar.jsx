import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/phorusimg.jpg" alt="Phorus Advisory - Transaction Advisory and Financial Consulting" className="logo-image" />
          <span className=''>Phours Investment & Business Advisory </span>
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
              title="About Phorus Advisory"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={closeMenu}
              title="Professional Financial Services"
            >
              Professional Services
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/sectors" 
              className={`nav-link ${isActive('/sectors') ? 'active' : ''}`}
              onClick={closeMenu}
              title="Industry Sectors We Serve"
            >
              Sectors
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/articles" 
              className={`nav-link ${isActive('/articles') ? 'active' : ''}`}
              onClick={closeMenu}
              title="Articles & Insights"
            >
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/rfq" 
              className={`nav-link ${isActive('/rfq') ? 'active' : ''}`}
              onClick={closeMenu}
              title="Request for Quotation"
            >
              RFQ
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
              title="Contact Phorus Advisory"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/career" 
              className={`nav-link ${isActive('/career') ? 'active' : ''}`}
              onClick={closeMenu}
              title="Career Opportunities"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
