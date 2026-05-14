import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  Zap, 
  Droplet, 
  Flame, 
  HardHat, 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  BellRing,
  Printer
} from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page-new">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-bg">
          <img 
            src="/images/hero-page.png" 
            alt="Hero background" 
            className="services-hero-img"
          />
          <div className="services-hero-overlay"></div>
        </div>
        <div className="container services-hero-content">
          <div className="services-hero-text">
            <h1 className="services-hero-title">Our Services — Rudraksha Enterprises</h1>
            <p className="services-hero-desc">
              At Rudraksha Enterprises, we provide complete MEPF (Mechanical, Electrical, Plumbing, and Firefighting) engineering solutions. We bridge the gap between architectural vision and technical reality with precision, safety, and sustainable innovation.
            </p>
            <div className="services-hero-actions">
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <a href="#projects" className="btn btn-outline-white">View Our Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Category A: HVAC */}
      <section className="service-category bg-surface">
        <div className="container service-grid">
          <div className="service-content order-content">
            <div className="service-badge text-secondary">
              <Wind size={36} />
              <span className="badge-text">Mechanical</span>
            </div>
            <h2 className="service-title">HVAC Systems & Mechanical Services</h2>
            <p className="service-desc">
              Our mechanical engineering division specializes in creating climate-controlled environments that prioritize both occupant comfort and energy efficiency. We design and implement robust HVAC solutions for large-scale commercial complexes, industrial plants, and luxury residential projects.
            </p>
            <div className="service-features-grid">
              <div className="feature-item">
                <CheckCircle className="text-secondary" size={20} />
                <span>Centralized Air Conditioning & VRV Systems</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-secondary" size={20} />
                <span>Industrial Ventilation & Exhaust Management</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-secondary" size={20} />
                <span>Cold Storage & Clean Room Environments</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-secondary" size={20} />
                <span>Ducting Fabrication & Thermal Insulation</span>
              </div>
            </div>
          </div>
          <div className="service-image-box order-image">
            <img 
              src="/images/HVAC Systems & Mechanical Services.png" 
              alt="HVAC systems" 
            />
          </div>
        </div>
      </section>

      {/* Category B: Electrical */}
      <section className="service-category bg-surface-alt">
        <div className="container service-grid">
          <div className="service-image-box">
            <img 
              src="/images/Electrical Services.png" 
              alt="Electrical distribution board" 
            />
          </div>
          <div className="service-content pl-lg">
            <div className="service-badge text-secondary">
              <Zap size={36} />
              <span className="badge-text">Electrical</span>
            </div>
            <h2 className="service-title">Electrical Services</h2>
            <p className="service-desc">
              Powering your infrastructure with uncompromising safety and stability. Our electrical division provides end-to-end solutions from high-tension power distribution to smart building automation systems, ensuring continuous operations for critical facilities.
            </p>
            <div className="numbered-list">
              <div className="numbered-item">
                <span className="item-number">01</span>
                <span className="item-text">HT/LT Power Distribution & Transformer Substations</span>
              </div>
              <div className="numbered-item">
                <span className="item-number">02</span>
                <span className="item-text">Internal Lighting Systems & Smart Controls</span>
              </div>
              <div className="numbered-item">
                <span className="item-number">03</span>
                <span className="item-text">DG Sets & UPS Systems for Power Backup</span>
              </div>
              <div className="numbered-item">
                <span className="item-number">04</span>
                <span className="item-text">Lightning Protection & Earthing Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category C: Plumbing */}
      <section className="service-category bg-surface">
        <div className="container service-grid">
          <div className="service-content order-content">
            <div className="service-badge text-secondary">
              <Droplet size={36} />
              <span className="badge-text">Plumbing</span>
            </div>
            <h2 className="service-title">Plumbing & Water Management Systems</h2>
            <p className="service-desc">
              Advanced hydraulic engineering designed for sustainability and long-term reliability. We implement intelligent water management systems that optimize consumption while maintaining peak performance across complex plumbing networks.
            </p>
            <ul className="bullet-list">
              <li>
                <span className="bullet-dot"></span>
                <span className="bullet-text">Potable Water Supply & Distribution Networks</span>
              </li>
              <li>
                <span className="bullet-dot"></span>
                <span className="bullet-text">Sewage Treatment Plants (STP) & Effluent Treatment</span>
              </li>
              <li>
                <span className="bullet-dot"></span>
                <span className="bullet-text">Rainwater Harvesting & Storm Water Management</span>
              </li>
              <li>
                <span className="bullet-dot"></span>
                <span className="bullet-text">Sanitary Fixture Installation & Leak Detection</span>
              </li>
            </ul>
          </div>
          <div className="service-image-box order-image">
            <img 
              src="/images/Plumbing & Water Management Systems.png" 
              alt="Water pump room" 
            />
          </div>
        </div>
      </section>

      {/* Category D: Fire Fighting */}
      <section className="service-category bg-primary-dark text-white">
        <div className="container service-grid">
          <div className="service-image-box border-white-10">
            <img 
              src="/images/Fire Fighting & Protection Systems.png" 
              alt="Fire safety station" 
            />
          </div>
          <div className="service-content pl-lg">
            <div className="service-badge text-accent">
              <Flame size={36} />
              <span className="badge-text text-white-70">Fire Protection</span>
            </div>
            <h2 className="service-title text-white">Fire Fighting & Protection Systems</h2>
            <p className="service-desc text-white-80">
              Safety is our non-negotiable priority. We provide comprehensive fire protection systems that strictly adhere to international safety standards and local fire codes, ensuring early detection and rapid suppression.
            </p>
            <div className="systems-grid">
              <div className="system-card">
                <BellRing className="text-accent" size={28} />
                <div>
                  <div className="system-title">Detection Systems</div>
                  <div className="system-desc">Addressable Smoke & Heat Detection with Voice Evacuation.</div>
                </div>
              </div>
              <div className="system-card">
                <Printer className="text-accent" size={28} />
                <div>
                  <div className="system-title">Suppression Systems</div>
                  <div className="system-desc">Automatic Sprinkler Networks & Hydrant Systems.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="capabilities-section bg-surface">
        <div className="container">
          <div className="section-header-center">
            <h2 className="service-title">Specialized Technical Capabilities</h2>
            <div className="title-underline"></div>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card">
              <HardHat className="text-primary capability-icon" size={48} />
              <h3 className="capability-title">MEP Engineering & Project Management</h3>
              <p className="capability-desc">
                From conceptual design to on-site execution, our project management team ensures that all MEPF systems are integrated seamlessly. We utilize BIM (Building Information Modeling) for conflict resolution and efficient resource allocation.
              </p>
              <ul className="capability-list">
                <li><ArrowRight size={16} /> Design Verification & Value Engineering</li>
                <li><ArrowRight size={16} /> Cost Estimation & Procurement Planning</li>
              </ul>
            </div>
            <div className="capability-card">
              <Wrench className="text-primary capability-icon" size={48} />
              <h3 className="capability-title">Testing, Commissioning & Maintenance</h3>
              <p className="capability-desc">
                Our commitment doesn't end at installation. We provide rigorous testing and commissioning to ensure systems perform at design parameters, followed by comprehensive maintenance programs to extend equipment life.
              </p>
              <ul className="capability-list">
                <li><ArrowRight size={16} /> Annual Maintenance Contracts (AMC)</li>
                <li><ArrowRight size={16} /> Performance Audits & Safety Inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section bg-surface-alt">
        <div className="container industries-content">
          <h2 className="service-title">Industries We Serve</h2>
          <p className="service-desc industries-desc">
            We provide MEPF solutions across a wide range of industries, delivering customized engineering systems for commercial towers, industrial complexes, healthcare facilities, and luxury hospitality projects.
          </p>
          <div className="industries-tags">
            <span className="industry-tag">Commercial Hubs</span>
            <span className="industry-tag">Industrial Plants</span>
            <span className="industry-tag">Residential Skyscrapers</span>
            <span className="industry-tag">Healthcare & Biotech</span>
            <span className="industry-tag">Luxury Hospitality</span>
          </div>
        </div>
      </section>
    </div>
  );
}
