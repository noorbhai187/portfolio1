import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './Contact.css';

const links = [
  { icon: '📧', label: 'Email', val: '23211A3249@gmail.com', href: 'mailto:23211A3249@gmail.com' },
  { icon: '📱', label: 'Phone', val: '+91-9492861786', href: 'tel:+919492861786' },
  { icon: '🔗', label: 'LinkedIn', val: 'shaik-noor-aien', href: 'https://www.linkedin.com/in/shaik-noor-aien-08b254293/' },
  { icon: '📍', label: 'Location', val: 'Hyderabad, Telangana, India', href: '#' },
];

const quickPills = ['Data Engineering','Python','Web Dev','IEEE','Football ⚽','IIT Madras Finalist'];

export default function Contact() {
  const ref = useScrollFade();
  return (
    <section id="contact" className="contact-section">
      <div className="max-w fade-in" ref={ref}>
        <span className="section-label">Let's Talk</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line"></div>
        <div className="contact-inner">
          <div className="contact-info">
            <p>I'm currently open to new opportunities — whether it's a full-time role, internship, or collaborative project. Feel free to reach out through any of the channels below!</p>
            <div className="contact-links">
              {links.map(l => (
                <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-link" key={l.label}>
                  <span>{l.icon}</span>
                  <div>
                    <div className="cl-label">{l.label}</div>
                    <div className="cl-val">{l.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-card">
            <h3>Quick Summary</h3>
            <p>A passionate Data Engineer & Web Developer from Hyderabad, combining technical excellence with creativity. Always learning, always building.</p>
            <div className="quick-pills">
              {quickPills.map(p => <span className="pill" key={p}>{p}</span>)}
            </div>
            <p className="chat-hint">💬 Try the AI chatbot (bottom-right) to ask about my background!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
