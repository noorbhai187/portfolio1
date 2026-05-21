import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow"></div>
      <div className="hero-inner">
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img
              src="/mine1.jpeg"
              alt="Shaik Noor Aien"
            />
          </div>
          <div className="hero-badge">📍 Hyderabad, India</div>
        </div>

        <div className="hero-text">
          <div className="hero-tag">✨ Available for Opportunities</div>
          <h1 className="hero-name">
            Shaik<br />
            <span>Noor Aien</span>
          </h1>
          <p className="hero-role">
            Junior Data Engineer · DataOps · Web Developer<br />
            Building data pipelines &amp; production-grade systems.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">💬 Get in Touch</a>
            <a
              href="https://www.linkedin.com/in/shaik-noor-aien-08b254293/"
              target="_blank" rel="noreferrer"
              className="btn-outline"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
