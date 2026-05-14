import { CheckCircle2, Compass, Lightbulb, SearchCheck, Target, Wrench } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Bridging the gap between design intent and on-ground reality.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container grid grid-2 align-center">
          <div className="about-image-wrapper image-frame">
            <img src="/assets/images/about-engineers.png" alt="Engineers reviewing blueprints" />
          </div>
          <div className="about-content">
            <span className="section-kicker">Who we are</span>
            <h2 className="section-title">A site-focused engineering partner for complex MEPF delivery.</h2>
            <p className="section-description">
              Rudraksha Enterprises is a premier engineering firm focused on end-to-end MEPF (Mechanical, Electrical, Plumbing, and Fire Fighting) turnkey execution. From concept to commissioning, we bring blueprints to life with precision and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container grid grid-2">
          <div className="elevated-card vision-card">
            <div className="card-icon"><Lightbulb size={40} /></div>
            <h2>Our Vision</h2>
            <p>
              To be a leading MEPF solutions provider, recognized for engineering excellence, sustainable practices, and delivering world-class infrastructure that empowers businesses and enriches communities.
            </p>
          </div>
          <div className="elevated-card mission-card">
            <div className="card-icon"><Target size={40} /></div>
            <h2>Our Mission</h2>
            <p>
              To deliver integrated MEPF solutions with precision and professionalism through innovation, skilled people, and a commitment to quality, safety, and timely execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center section-heading">
            <span className="section-kicker">Execution framework</span>
            <h2 className="section-title">Our Approach</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"><Compass size={24} /></div>
              <div className="timeline-content elevated-card">
                <h3>1. Planning & Strategy</h3>
                <p>Detailed project planning, resource allocation, and timeline definition.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><Wrench size={24} /></div>
              <div className="timeline-content elevated-card">
                <h3>2. Execution & Implementation</h3>
                <p>On-ground execution with strict adherence to design and quality standards.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><SearchCheck size={24} /></div>
              <div className="timeline-content elevated-card">
                <h3>3. Monitoring & Control</h3>
                <p>Continuous progress tracking, safety audits, and quality control.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><CheckCircle2 size={24} /></div>
              <div className="timeline-content elevated-card">
                <h3>4. Testing, Commissioning & Handover</h3>
                <p>Rigorous system testing, final commissioning, and seamless client handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
