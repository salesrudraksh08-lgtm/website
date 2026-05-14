import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Rudraksha Enterprises" className="navbar-logo-img" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/industries" className="nav-link" onClick={closeMenu}>Industries</NavLink>
          <NavLink to="/contact" className="btn btn-primary nav-btn" onClick={closeMenu}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}
