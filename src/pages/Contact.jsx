import { useState } from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const message = formData.get('message');
    const subject = encodeURIComponent(`Project enquiry from ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@rudrakshsmartmep.com?subject=${subject}&body=${body}`;
    setStatus('Opening your email app...');
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Let's build better infrastructure together.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container grid grid-2">
          
          {/* Contact Form */}
          <div className="elevated-card contact-form-card">
            <h2 className="mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="input-field" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="company" className="input-field" placeholder="Your Company" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="input-field" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" className="input-field" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" className="input-field" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'Sending...'}>
                Send Message
              </button>
              {status && <p className="mt-4 text-center" style={{ color: '#173456', fontWeight: 'bold' }}>{status}</p>}
            </form>
          </div>

          {/* Contact Details */}
          <div className="elevated-card contact-details-card">
            <h2 className="mb-4">Contact Information</h2>
            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Location</h3>
                  <p className="text-muted">Ahmedabad, Gujarat</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email</h3>
                  <p className="text-muted">info@rudrakshsmartmep.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p className="text-muted">+91 88660 75852<br/>+91 95997 33986</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Globe size={24} />
                </div>
                <div>
                  <h3>Website</h3>
                  <p className="text-muted">www.rudrakshaenterprises.com</p>
                </div>
              </div>
            </div>
            
            <div className="map-wrapper mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.1143438145!2d72.5797426!3d23.0201818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715150000000!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
