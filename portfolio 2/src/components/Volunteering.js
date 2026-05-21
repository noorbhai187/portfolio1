import React from 'react';
import { VOLUNTEERING } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';
import './Volunteering.css';

export default function Volunteering() {
  const ref = useScrollFade();
  return (
    <section id="volunteering" className="vol-section">
      <div className="max-w fade-in" ref={ref}>
        <div className="section-center">
          <span className="section-label">Community</span>
          <h2 className="section-title">Volunteering</h2>
          <div className="section-line"></div>
        </div>
        <div className="vol-grid">
          {VOLUNTEERING.map(v => (
            <div className="vol-card" key={v.role + v.org}>
              <div className="vol-role">{v.role}</div>
              <div className="vol-org">{v.org}</div>
              <div className="vol-date">{v.date}</div>
              <div className="vol-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
