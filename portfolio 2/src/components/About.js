import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './About.css';

const stats = [
  { num: '3+', label: 'Projects' },
  { num: '4', label: 'Awards' },
  { num: '2+', label: 'Years Exp.' },
  { num: '2027', label: 'Graduating' },
];

const info = [
  { icon: '🎓', strong: 'B.Tech – Computer Science & Business Systems', sub: 'B V Raju Institute of Technology, Narsapur · Jul 2023 – May 2027' },
  { icon: '📧', strong: '23211A3249@gmail.com', sub: 'Primary Email' },
  { icon: '📱', strong: '+91-9492861786', sub: 'Phone' },
  { icon: '🌐', strong: 'Open to Remote · Hybrid · On-Site', sub: 'Work Preferences' },
  { icon: '⚽', strong: 'Football (Goalkeeper)', sub: 'Inter-College Winner & Runner-up' },
];

export default function About() {
  const ref = useScrollFade();
  return (
    <section id="about" className="about-section">
      <div className="max-w fade-in" ref={ref}>
        <span className="section-label">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a <strong>Junior Data Engineer / DataOps Engineer</strong> with hands-on experience building Python-based data pipelines and automated production deployments. I'm passionate about transforming raw data into reliable, scalable systems.</p>
            <p>Skilled in ETL and streaming concepts, SQL-backed data modelling, API integration, and Git-driven CI/CD workflows. I've delivered production-grade services with emphasis on performance monitoring, reliability, and clear documentation.</p>
            <p>Beyond tech, I'm a <strong>football enthusiast</strong> — Winner &amp; Runner-up (Team Goalkeeper) at Inter-College Sports. I believe the teamwork and discipline from the field translate perfectly into engineering work.</p>
            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-box" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-info-list">
            {info.map(i => (
              <div className="info-item" key={i.strong}>
                <span className="info-icon">{i.icon}</span>
                <div>
                  <strong>{i.strong}</strong>
                  <p>{i.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
