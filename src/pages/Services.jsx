import { Link } from 'react-router-dom';
import { Droplet, Fan, Flame, Zap } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'HVAC Execution',
      icon: <Fan size={48} />,
      items: ['Chilled water systems', 'Ducting systems', 'AHU installation', 'Ventilation', 'Refrigeration']
    },
    {
      title: 'Electrical Services',
      icon: <Zap size={48} />,
      items: ['Power distribution', 'Earthing & lightning protection', 'Cable management', 'Wiring', 'Lighting systems']
    },
    {
      title: 'Plumbing Services',
      icon: <Droplet size={48} />,
      items: ['Water supply systems', 'Storm water systems', 'Drainage', 'Water treatment', 'Pumping systems']
    },
    {
      title: 'Fire Fighting Systems',
      icon: <Flame size={48} />,
      items: ['Sprinkler systems', 'Hydrant & hose reel', 'Fire pumps', 'Detection & alarms', 'Suppression systems']
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our MEPF Turnkey Services</h1>
          <p className="page-subtitle">Comprehensive mechanical, electrical, plumbing, and fire fighting solutions.</p>
        </div>
      </div>

      <div className="container services-hero-media">
        <div className="image-frame">
          <img src="/assets/images/services-mepf.png" alt="MEPF services execution" />
        </div>
      </div>

      <section className="section bg-light">
        <div className="container grid grid-2">
          {services.map((service) => (
            <div key={service.title} className="elevated-card service-card">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner text-center">
        <div className="container">
          <h2>Need a comprehensive turnkey solution?</h2>
          <p>Discuss your project requirements with our expert engineers today.</p>
          <Link to="/contact" className="btn btn-primary mt-4">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
