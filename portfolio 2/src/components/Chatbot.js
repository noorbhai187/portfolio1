import React, { useState, useRef, useEffect } from 'react';
import { RESUME_CONTEXT } from '../data';
import './Chatbot.css';

const SUGGESTIONS = [
  "What are Noor's skills?",
  "Tell me about his projects",
  "What awards has he won?",
  "Is he open to work?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! 👋 I'm Noor Aien's AI assistant. Ask me anything about his skills, projects, awards, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSugs, setShowSugs] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput('');
    setShowSugs(false);
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 400,
          system: RESUME_CONTEXT,
          messages: [{ role: 'user', content: msg }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "I'm having trouble connecting. Please email Noor at 23211A3249@gmail.com!";
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting right now. Please reach out to Noor at 23211A3249@gmail.com!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(o => !o)} title="Chat with AI">
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-avatar">🤖</div>
            <div className="chat-header-info">
              <strong>Noor's AI Assistant</strong>
              <p>Ask me anything about Noor!</p>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
            {loading && <div className="msg bot typing">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          {showSugs && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map(s => (
                <button key={s} className="sug-btn" onClick={() => sendMessage(s)}>{s.split(' ').slice(0,2).join(' ')}</button>
              ))}
            </div>
          )}

          <div className="chat-input-row">
            <input
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Noor..."
            />
            <button className="chat-send" onClick={() => sendMessage()}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
