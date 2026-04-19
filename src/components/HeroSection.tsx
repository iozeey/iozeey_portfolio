import React from 'react';

const capabilities = [
  'AI Strategy',
  'Agentic Workflows',
  'Automation',
  'LLM Integrations',
  'Web Platforms',
  'Data Intelligence',
];

const metrics = [
  { value: '8+', label: 'Years building digital products' },
  { value: '20+', label: 'AI, web, and automation solutions delivered' },
  { value: 'UK', label: 'Based and available for global clients' },
];

const deliveryStages = [
  { label: 'Discover', detail: 'Identify the highest-value AI use cases' },
  { label: 'Prototype', detail: 'Validate fast with focused workflows and demos' },
  { label: 'Scale', detail: 'Launch reliable systems with maintainable architecture' },
];

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section hero-ai">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid-overlay" />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content animate-fadeInUp">
            <span className="hero-eyebrow">AI solution provider</span>
            <h1 className="hero-title">
              I design and deliver <span className="text-gradient">AI-powered products</span>
              <br />
              that turn complex workflows into measurable growth.
            </h1>
            <p className="hero-subtitle">
              From AI assistants and automation layers to scalable web platforms, I help teams move from idea to production with speed, clarity, and architecture that lasts.
            </p>

            <div className="hero-pill-row" aria-label="Core capabilities">
              {capabilities.map((capability) => (
                <span key={capability} className="hero-pill">
                  {capability}
                </span>
              ))}
            </div>

            <div className="hero-buttons">
              <a href="mailto:asif.zshan@gmail.com" className="btn btn-primary">
                Book a Strategy Call
              </a>
              <a
                href="/images/Zeeshan_Ahmad_Full_Stack_Web_Dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download CV
              </a>
            </div>

            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual animate-slideInRight">
            <div className="hero-panel">
              <div className="hero-panel-header">
                <div>
                  <span className="panel-label">AI delivery engine</span>
                  <h2>Research to production</h2>
                </div>
                <span className="panel-status">Live</span>
              </div>

              <div className="hero-dashboard">
                <div className="dashboard-card dashboard-card-accent">
                  <span>Active workflow</span>
                  <strong>AI Assistant Rollout</strong>
                  <p>Discovery, prompt design, integration, launch.</p>
                </div>

                <div className="dashboard-grid">
                  {deliveryStages.map((stage, index) => (
                    <div key={stage.label} className={`dashboard-card dashboard-card-${index + 1}`}>
                      <span>{stage.label}</span>
                      <p>{stage.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="dashboard-card dashboard-card-outline">
                  <span>Delivery focus</span>
                  <div className="dashboard-tags">
                    <span>Automation</span>
                    <span>Productization</span>
                    <span>Deployment</span>
                  </div>
                </div>
              </div>

              <div className="hero-floats">
                <div className="float-chip float-chip-top">LLM integration</div>
                <div className="float-chip float-chip-middle">Automation</div>
                <div className="float-chip float-chip-bottom">AI insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
