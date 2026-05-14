import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-4">
        <div className="footer-brand">
          <div className="footer-logo">
            <Building2 size={32} color="var(--color-accent)" />
            <div className="logo-text">
              <span className="logo-title">RUDRAKSHA</span>
              <span className="logo-subtitle">ENTERPRISES</span>
            </div>
          </div>
          <p className="footer-mission">
            Delivering integrated MEPF solutions with precision and professionalism through innovation, skilled people, and a commitment to quality.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries We Serve</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>HVAC Execution</li>
            <li>Electrical Services</li>
            <li>Plumbing Services</li>
            <li>Fire Fighting Systems</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Ahmedabad, Gujarat</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>SALESRUDRAKSH08@GMAIL.COM</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 88660 75852<br/>+91 95997 33986</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rudraksha Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
