import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear status banner after 5s
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-orb" style={{ bottom: '10%', right: '15%', width: '300px', height: '300px', background: 'rgba(0, 242, 254, 0.05)' }}></div>
      <div className="glow-orb" style={{ top: '20%', left: '5%', width: '250px', height: '250px', background: 'rgba(161, 140, 209, 0.06)' }}></div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Iniciar Conexão</h2>
          <p className="section-subtitle">
            Interessado em colaborar em um projeto inovador, contratar meus serviços ou apenas trocar ideias sobre tecnologia? Preencha o formulário abaixo.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info Details */}
          <div className="contact-info">
            <h3 className="info-title">CONTATOS</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">E-mail</span>
                <a href="mailto:gabriellimadesousa0@gmail.com" className="info-value">gabriellimadesousa0@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">GitHub</span>
                <a href="https://github.com/gabriellima666" target="_blank" rel="noopener noreferrer" className="info-value">github.com/gabriellima666</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/gabriel-lima-sousa" target="_blank" rel="noopener noreferrer" className="info-value">linkedin.com/in/gabriel-lima-sousa</a>
              </div>
            </div>
            
            <div className="cyber-status-box">
              <div className="status-indicator"></div>
              <span>Disponível para novos projetos de design & desenvolvimento</span>
            </div>
          </div>

          {/* Form Card */}
          <SpotlightCard className="contact-form-card" spotlightColor="rgba(0, 242, 254, 0.1)">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="name" className="field-label">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nome Completo"
                    className="glass-input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="field-label">Seu E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="exemplo@email.com"
                    className="glass-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="field-label">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Novo projeto ou parceria"
                  className="glass-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="field-label">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Descreva seu projeto ou mensagem..."
                  className="glass-input textarea-field"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Transmitindo...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" style={{ marginLeft: '8px' }}>
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success-banner">
                  <div className="banner-glow"></div>
                  <span>Mensagem transmitida com sucesso! Retornarei em breve.</span>
                </div>
              )}
            </form>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .info-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 8px;
          position: relative;
        }

        .info-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-cyan);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--accent-cyan);
          transition: all 0.3s ease;
        }

        .info-item:hover .info-icon {
          background: rgba(0, 242, 254, 0.08);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .info-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .info-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .info-value:hover {
          color: var(--accent-cyan);
        }

        .cyber-status-box {
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(0, 242, 254, 0.03);
          border: 1px solid rgba(0, 242, 254, 0.15);
          border-radius: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #39d353;
          box-shadow: 0 0 10px #39d353;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        /* Form Styling */
        .contact-form-card {
          padding: 36px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-label {
          font-family: var(--font-cyber);
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          letter-spacing: 1px;
        }

        .glass-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          outline: none;
        }

        .glass-input::placeholder {
          color: var(--text-muted);
        }

        .glass-input:focus {
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.02);
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.12);
        }

        .textarea-field {
          resize: vertical;
        }

        .submit-btn {
          padding: 14px;
          font-size: 0.9rem;
          align-self: flex-start;
          width: 220px;
        }

        .spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-top-color: currentColor;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .submit-success-banner {
          position: relative;
          padding: 12px 20px;
          background: rgba(57, 211, 83, 0.08);
          border: 1px solid rgba(57, 211, 83, 0.3);
          border-radius: 8px;
          font-size: 0.85rem;
          color: #39d353;
          overflow: hidden;
        }

        .banner-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 0 15px rgba(57, 211, 83, 0.1);
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .submit-btn {
            width: 100%;
          }
        }
        
        @media (max-width: 500px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
