import React from 'react';
import { SKILLS } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';
import './Skills.css';

export default function Skills() {
  const ref = useScrollFade();
  return (
    <section id="skills" className="skills-section">
      <div className="max-w fade-in" ref={ref}>
        <div className="section-center">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div className="skill-card" key={s.category}>
              <div className="skill-card-title">{s.category}</div>
              <div className="skill-pills">
                {s.items.map(item => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
