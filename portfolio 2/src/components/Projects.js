import React from 'react';
import { PROJECTS } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';
import './Projects.css';

export default function Projects() {
  const ref = useScrollFade();
  return (
    <section id="projects" className="projects-section">
      <div className="max-w fade-in" ref={ref}>
        <div className="section-center">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div className="project-card" key={p.title}>
              <div className="project-icon">{p.icon}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              {p.prize && <span className="award-prize" style={{display:'inline-block',marginTop:'14px'}}>{p.prize}</span>}
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  🔗 Visit {p.link.replace('https://','')} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
