import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, Clock, HardHat, ShieldCheck, TrendingUp, Wrench, Settings, Power, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Home.css';

gsap.registerPlugin(useGSAP);

const capabilities = [
  {
    icon: <Settings size={32} strokeWidth={1.5} />,
    label: 'Mechanical',
    title: 'HVAC & Ventilation',
    detail: 'Complete ducting, AHU, and chilled water execution coordinated with site constraints.',
  },
  {
    icon: <Power size={32} strokeWidth={1.5} />,
    label: 'Electrical',
    title: 'Power & Lighting',
    detail: 'Robust power distribution, cable routing, and panel placement with strict safety norms.',
  },
  {
    icon: <Droplets size={32} strokeWidth={1.5} />,
    label: 'Plumbing & Fire',
    title: 'Water & Safety Systems',
    detail: 'Integrated plumbing, hydrants, sprinklers, and detection aligned to drawings.',
  },
];

const workflow = [
  { step: '01', title: 'Drawings Review', desc: 'Clash detection and constructability checks.' },
  { step: '02', title: 'Material Planning', desc: 'Procurement aligned with sequence.' },
  { step: '03', title: 'Site Execution', desc: 'Disciplined, safety-first installation.' },
  { step: '04', title: 'Testing', desc: 'Rigorous checks for system integrity.' },
  { step: '05', title: 'Commissioning', desc: 'Performance validation against design.' },
  { step: '06', title: 'Handover', desc: 'Documentation and operational training.' },
];

export default function Home() {
  const pageRef = useRef(null);

  // Hero animations with GSAP (no ScrollTrigger needed)
  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.from('.hero-content .motion-item', {
      autoAlpha: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
    });

    gsap.from('.hero-capability-panel', {
      autoAlpha: 0,
      x: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.4,
    });
  }, { scope: pageRef });

  // Scroll reveal via IntersectionObserver (no GSAP ScrollTrigger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const items = document.querySelectorAll('.reveal-item');
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home" ref={pageRef}>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge motion-item">MEPF Turnkey Execution Partner</div>
            <h1 className="hero-title motion-item">Industrial scale.<br/>Technical precision.</h1>
            <p className="hero-subtitle motion-item">
              Rudraksha Enterprises handles mechanical, electrical, plumbing, and fire fighting execution from site planning to final commissioning.
            </p>
            <div className="hero-ctas motion-item">
              <Link to="/services" className="btn btn-primary btn-lg">Explore Capabilities <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Discuss Your Project</Link>
            </div>
            <div className="hero-proof motion-item">
              <div className="proof-item"><CheckCircle2 size={18} /> <span>Drawing-led execution</span></div>
              <div className="proof-item"><CheckCircle2 size={18} /> <span>Safety & QA checkpoints</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <aside className="hero-capability-panel">
              <div className="panel-header">Execution Scope</div>
              <p className="panel-body">
                Design coordination, procurement support, installation, testing, commissioning, and handover.
              </p>
              <div className="panel-footer">
                <span>100+ Projects</span>
                <span className="dot">•</span>
                <span>1M+ Sq. Ft.</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section overview-section">
        <div className="container overview-grid">
          <div className="overview-text">
            <span className="section-kicker reveal-item">What We Deliver</span>
            <h2 className="section-title reveal-item">A practical MEPF partner for projects that demand disciplined site execution.</h2>
          </div>
          <div className="overview-desc reveal-item">
            <p>
              We focus on converting approved drawings into coordinated, buildable systems. The work is planned around site sequence, manpower, material movement, safety controls, testing, and final handover.
            </p>
            <Link to="/about" className="link-arrow">Learn about our approach <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="section capability-section">
        <div className="container">
          <div className="section-header text-center reveal-item">
            <span className="section-kicker">Core Packages</span>
            <h2 className="section-title">Turnkey scope, executed with clarity.</h2>
          </div>
          <div className="capability-cards">
            {capabilities.map((item, index) => (
              <div className="cap-card reveal-item" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="cap-card-icon">{item.icon}</div>
                <div className="cap-card-content">
                  <div className="cap-label">{item.label}</div>
                  <h3 className="cap-title">{item.title}</h3>
                  <p className="cap-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS BANNER */}
      <section className="metrics-banner">
        <div className="container metrics-grid">
          <div className="metric-item reveal-item">
            <h3 className="metric-value">100+</h3>
            <p className="metric-label">Expert Team Members</p>
          </div>
          <div className="metric-item reveal-item" style={{ transitionDelay: '0.1s' }}>
            <h3 className="metric-value">100+</h3>
            <p className="metric-label">Projects Executed</p>
          </div>
          <div className="metric-item reveal-item" style={{ transitionDelay: '0.2s' }}>
            <h3 className="metric-value">1M+</h3>
            <p className="metric-label">Sq. Ft. Executed</p>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="section workflow-section">
        <div className="container">
          <div className="workflow-layout">
            <div className="workflow-intro reveal-item">
              <span className="section-kicker">Execution Workflow</span>
              <h2 className="section-title">Built around coordination, control, and handover.</h2>
              <p className="section-description">Each step is tracked so project progress does not depend on guesswork. We bring predictability to complex sites.</p>
            </div>
            <div className="workflow-steps">
              {workflow.map((item, index) => (
                <div className="step-card reveal-item" key={index} style={{ transitionDelay: `${index * 0.08}s` }}>
                  <div className="step-number">{item.step}</div>
                  <div className="step-content">
                    <h4 className="step-title">{item.title}</h4>
                    <p className="step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS SECTION */}
      <section className="section standards-section">
        <div className="container">
          <div className="section-header text-center reveal-item">
            <span className="section-kicker">Operating Standards</span>
            <h2 className="section-title">The details that keep site work dependable.</h2>
          </div>
          <div className="standards-grid">
            {[
              { icon: <ShieldCheck size={26} />, title: 'Quality Checks', desc: 'Material, installation, and testing checks before handover.' },
              { icon: <HardHat size={26} />, title: 'Site Safety', desc: 'Workfront planning, supervision, and safety-first team discipline.' },
              { icon: <Clock size={26} />, title: 'Schedule Control', desc: 'Execution aligned with dependencies and project milestones.' },
              { icon: <ClipboardCheck size={26} />, title: 'Commissioning', desc: 'Testing records, snag closure, and system readiness support.' },
              { icon: <Wrench size={26} />, title: 'Site Coordination', desc: 'MEPF coordination with drawings, civil constraints, and utilities.' },
              { icon: <TrendingUp size={26} />, title: 'Scalable Teams', desc: 'Manpower planning that scales with site priority and project phase.' },
            ].map((item, index) => (
              <div className="standard-card reveal-item" key={index} style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="std-icon">{item.icon}</div>
                <h4 className="std-title">{item.title}</h4>
                <p className="std-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
