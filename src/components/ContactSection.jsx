import React from 'react';
import SpotlightCard from './SpotlightCard';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="glow-orb" style={{ bottom: '10%', right: '15%', width: '300px', height: '300px', background: 'rgba(0, 242, 254, 0.05)' }}></div>
      <div className="glow-orb" style={{ top: '20%', left: '5%', width: '250px', height: '250px', background: 'rgba(161, 140, 209, 0.06)' }}></div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Iniciar Conexão</h2>
          <p className="section-subtitle">
            Interessado em desenvolver projetos educacionais, dinâmicas interativas ou trocar ideias sobre tecnologia aplicada ao ensino e à matemática? Conecte-se comigo.
          </p>
        </div>


        <div className="contact-card-container">
          <SpotlightCard className="contact-info-card" spotlightColor="rgba(0, 242, 254, 0.12)">
            <div className="contact-info-header">
              <h3 className="info-title">CANAIS DE COMUNICAÇÃO</h3>
              <p className="info-intro">Escolha um dos canais abaixo para estabelecer contato direto:</p>
            </div>
            
            <div className="contact-grid">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">E-mail</span>
                  <a href="mailto:gabriellimadesousa0@gmail.com" className="info-value" title="gabriellimadesousa0@gmail.com">gabriellimadesousa0@gmail.com</a>
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
                  <a href="https://github.com/gabriellima666" target="_blank" rel="noopener noreferrer" className="info-value">gabriellima666</a>
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
                  <a href="https://www.linkedin.com/in/gabriel-lima-sousa" target="_blank" rel="noopener noreferrer" className="info-value">Gabriel Lima Sousa</a>
                </div>
              </div>
            </div>
            
            <div className="cyber-status-box">
              <div className="status-indicator"></div>
              <span>Disponível para novos projetos de design & desenvolvimento</span>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 100px 0;
        }

        .contact-card-container {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }

        .contact-info-card {
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-info-header {
          text-align: left;
        }

        .info-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 8px;
          position: relative;
          display: inline-block;
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

        .info-intro {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 12px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr;
          gap: 24px;
        }


        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
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
          flex-shrink: 0;
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
          min-width: 0;
        }

        .info-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 0.9rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.2s ease;
          word-break: break-word;
        }

        .info-value:hover {
          color: var(--accent-cyan);
        }

        .cyber-status-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(0, 242, 254, 0.03);
          border: 1px solid rgba(0, 242, 254, 0.15);
          border-radius: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          align-self: flex-start;
          margin-top: 24px;
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

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 480px) {
          .contact-info-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
