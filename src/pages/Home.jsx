import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, Clock, HardHat, ShieldCheck, TrendingUp, Wrench, Zap } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Home.css';

gsap.registerPlugin(useGSAP);

const capabilities = [
  {
    label: 'Mechanical',
    title: 'HVAC, ventilation, ducting, AHU and chilled water execution',
    detail: 'Site installation teams for mechanical packages with coordination across civil, electrical, and fire services.',
  },
  {
    label: 'Electrical',
    title: 'Power distribution, cabling, earthing, panels and lighting systems',
    detail: 'Structured electrical execution with cable routing, panel placement, testing, and safe energization discipline.',
  },
  {
    label: 'Plumbing & Fire',
    title: 'Water supply, drainage, pumps, hydrants, sprinklers and detection',
    detail: 'Integrated plumbing and firefighting delivery aligned to drawings, safety norms, and commissioning requirements.',
  },
];

const workflow = [
  'Drawings review',
  'Material planning',
  'Site execution',
  'Testing',
  'Commissioning',
  'Handover',
];

export default function Home() {
  const pageRef = useRef(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set('.motion-item', { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.from('.hero .motion-item', {
      autoAlpha: 0,
      y: 22,
      duration: 0.75,
      ease: 'power2.out',
      stagger: 0.08,
    });

    gsap.from('.capability-row, .workflow-step, .metric-card, .strength-card', {
      autoAlpha: 0,
      y: 18,
      duration: 0.65,
      ease: 'power2.out',
      stagger: 0.06,
      delay: 0.25,
    });
  }, { scope: pageRef });

  return (
    <div className="home" ref={pageRef}>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow motion-item">MEPF Turnkey Execution Partner</div>
            <h1 className="hero-title motion-item">MEPF execution for industrial and commercial projects.</h1>
            <p className="hero-subtitle motion-item">
              Rudraksha Enterprises handles mechanical, electrical, plumbing, and fire fighting execution from site planning to commissioning.
            </p>
            <div className="hero-ctas motion-item">
              <Link to="/services" className="btn btn-primary">View Capabilities <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-outline">Discuss a Project</Link>
            </div>
            <div className="hero-proof motion-item">
              <span><CheckCircle2 size={18} /> Drawing-led execution</span>
              <span><CheckCircle2 size={18} /> Safety and QA checkpoints</span>
            </div>
          </div>
          <aside className="hero-capability-panel motion-item">
            <span>Execution scope</span>
            <strong>Design coordination, procurement support, installation, testing, commissioning, and handover.</strong>
          </aside>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container overview-grid">
          <div>
            <span className="section-kicker">What we deliver</span>
            <h2 className="section-title">A practical MEPF partner for projects that need disciplined site execution.</h2>
          </div>
          <p className="section-description">
            We focus on converting approved drawings into coordinated, buildable systems. The work is planned around site sequence, manpower, material movement, safety controls, testing, and final handover.
          </p>
        </div>
      </section>

      <section className="capability-section">
        <div className="container">
          <div className="capability-header">
            <span className="section-kicker">Core packages</span>
            <h2>Turnkey scope, broken down clearly.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map((item, index) => (
              <article className="capability-row" key={item.label}>
                <div className="capability-index">0{index + 1}</div>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                </div>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="container">
          <div className="workflow-head">
            <div>
              <span className="section-kicker">Execution workflow</span>
              <h2>Built around coordination, control, and handover.</h2>
            </div>
            <p>Each step is tracked so project progress does not depend on guesswork.</p>
          </div>
          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics-banner">
        <div className="container grid grid-3">
          <div className="metric-card">
            <h3 className="metric-value">100+</h3>
            <p className="metric-label">Expert Team Members</p>
          </div>
          <div className="metric-card">
            <h3 className="metric-value">100+</h3>
            <p className="metric-label">Projects Executed</p>
          </div>
          <div className="metric-card">
            <h3 className="metric-value">1M+</h3>
            <p className="metric-label">Sq. Ft. Executed</p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="strength-layout">
            <div>
              <span className="section-kicker">Operating standards</span>
              <h2 className="section-title">The details that keep site work dependable.</h2>
            </div>
            <div className="strength-grid">
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><ShieldCheck size={30} /></div>
                <h3>Quality Checks</h3>
                <p className="text-muted">Material, installation, and testing checks before handover.</p>
              </div>
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><HardHat size={30} /></div>
                <h3>Site Safety</h3>
                <p className="text-muted">Workfront planning, supervision, and safety-first team discipline.</p>
              </div>
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><Clock size={30} /></div>
                <h3>Schedule Control</h3>
                <p className="text-muted">Execution aligned with dependencies and project milestones.</p>
              </div>
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><ClipboardCheck size={30} /></div>
                <h3>Commissioning</h3>
                <p className="text-muted">Testing records, snag closure, and system readiness support.</p>
              </div>
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><Wrench size={30} /></div>
                <h3>Site Coordination</h3>
                <p className="text-muted">MEPF coordination with drawings, civil constraints, and utilities.</p>
              </div>
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><Zap size={30} /></div>
                <h3>Value Engineering</h3>
                <p className="text-muted">Practical solutions for performance, maintainability, and cost.</p>
              </div>
              <div className="elevated-card strength-card">
                <div className="icon-wrapper"><TrendingUp size={30} /></div>
                <h3>Scalable Teams</h3>
                <p className="text-muted">Manpower planning that scales with site priority and project phase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
