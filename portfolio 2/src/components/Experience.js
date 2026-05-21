import React from 'react';
import { EXPERIENCE } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';
import './Experience.css';

export default function Experience() {
  const ref = useScrollFade();
  return (
    <section id="experience" className="exp-section">
      <div className="max-w fade-in" ref={ref}>
        <span className="section-label">My Journey</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot-col">
                <div className="t-dot"></div>
                {i < EXPERIENCE.length - 1 && <div className="t-line"></div>}
              </div>
              <div className="timeline-card">
                <div className="tc-header">
                  <div className="tc-title">{e.title}</div>
                  <span className="tc-date">{e.date}</span>
                </div>
                <div className="tc-org">{e.org}</div>
                <div className="tc-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
