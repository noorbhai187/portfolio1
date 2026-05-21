import React from 'react';
import { AWARDS } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';
import './Awards.css';

export default function Awards() {
  const ref = useScrollFade();
  return (
    <section id="awards" className="awards-section">
      <div className="max-w fade-in" ref={ref}>
        <div className="section-center">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Awards & Achievements</h2>
          <div className="section-line"></div>
        </div>
        <div className="awards-grid">
          {AWARDS.map(a => (
            <div className="award-card" key={a.title}>
              <div className="award-medal">{a.medal}</div>
              <div className="award-title">{a.title}</div>
              <div className="award-org">{a.org}</div>
              <div className="award-desc">{a.desc}</div>
              {a.prize && <span className="award-prize">{a.prize}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
