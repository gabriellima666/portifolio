import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import DecryptedText from './components/DecryptedText';
import BlurText from './components/BlurText';
import SpotlightCard from './components/SpotlightCard';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import avatarImg from './assets/avatar.jpg';

export default function App() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Background and Nav */}
      <ParticlesBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="glow-orb" style={{ top: '-10%', left: '30%', width: '600px', height: '600px', background: 'rgba(0, 242, 254, 0.08)' }}></div>
        
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-overline">WEB DESIGNER & DEVELOPER</span>
            
            <h1 className="hero-title">
              <DecryptedText 
                text="GABRIEL SOUSA" 
                speed={40} 
                maxIterations={15} 
                animateOn="view"
                revealDirection="center"
                className="glitch-name"
              />
            </h1>

            <div className="hero-subtitle-wrapper">
              <BlurText 
                text="Arquitetando interfaces futuristas e backend resiliente."
                delay={30}
                className="hero-subtitle"
              />
            </div>

            <p className="hero-description">
              Sou um designer web focado em criar experiências digitais estéticas, modernas e interativas. Domino o desenvolvimento frontend com React e Angular, aliado a um ecossistema backend robusto usando Node, Java, Python, Docker e MySQL.
            </p>

            <div className="hero-ctas">
              <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
                Explorar Projetos
              </button>
              <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
                Entrar em Contato
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <SpotlightCard className="avatar-card" spotlightColor="rgba(0, 242, 254, 0.2)">
              <div className="avatar-wrapper">
                <img src={avatarImg} alt="Gabriel Sousa Avatar" className="avatar-image" />
                <div className="avatar-indicator">
                  <span className="pulse-dot"></span>
                  <span className="indicator-text">SYSTEM ACTIVE</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="glow-orb" style={{ top: '40%', right: '5%', width: '450px', height: '450px', background: 'rgba(161, 140, 209, 0.06)' }}></div>
        
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">
              Unindo design refinado e engenharia de software de alto nível para construir soluções web completas.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text-content">
              <h3 className="about-heading">Onde a estética encontra a lógica</h3>
              <p className="about-paragraph">
                Acredito que o bom design não deve apenas ser visualmente impactante, mas também performático, intuitivo e bem estruturado no backend. Minha jornada une a sensibilidade artística de um Web Designer com a precisão técnica de um Desenvolvedor Full-Stack.
              </p>
              <p className="about-paragraph">
                Construo interfaces modernas e reativas usando React e Angular. No lado do servidor, escalo sistemas através de Node.js, Java Spring Boot e Python. Para orquestração e persistência, utilizo Docker e otimizações de banco de dados em MySQL.
              </p>
            </div>

            <div className="about-pillars">
              <SpotlightCard className="pillar-card" spotlightColor="rgba(0, 242, 254, 0.1)">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <polygon points="12 2 2 7 12 12 22 7 12 2 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <h4 className="pillar-title">UI/UX Futurista</h4>
                <p className="pillar-desc">Criação de protótipos de alta fidelidade e interfaces ricas em interações com glassmorphism e animações fluidas.</p>
              </SpotlightCard>

              <SpotlightCard className="pillar-card" spotlightColor="rgba(161, 140, 209, 0.1)">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </div>
                <h4 className="pillar-title">Backend Robusto</h4>
                <p className="pillar-desc">APIs rápidas e serviços resilientes em Node, Java e Python com arquiteturas limpas e organizadas.</p>
              </SpotlightCard>

              <SpotlightCard className="pillar-card" spotlightColor="rgba(79, 172, 254, 0.1)">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="4"/>
                    <path d="M6 10h4v4H6zm8 0h4v4h-4zm-8 6h4v4H6zm8 0h4v4h-4zm0-12h4v4h-4z"/>
                  </svg>
                </div>
                <h4 className="pillar-title">DevOps & Dados</h4>
                <p className="pillar-desc">Deploy simplificado utilizando containers Docker e gerenciamento ágil de bancos relacionais MySQL.</p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <span>GABRIEL SOUSA</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Gabriel Sousa. Desenvolvido com React e estética futurista.
          </p>
        </div>
      </footer>

      {/* App Component Styles */}
      <style>{`
        /* Hero Section Styles */
        .hero-section {
          padding-top: 160px;
          padding-bottom: 120px;
          min-height: 95vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 10% 20%, rgba(3, 7, 18, 0.8) 0%, rgba(1, 2, 6, 0.95) 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-overline {
          font-family: var(--font-cyber);
          font-size: 0.85rem;
          color: var(--accent-cyan);
          letter-spacing: 3px;
          margin-bottom: 16px;
          text-shadow: 0 0 10px rgba(0, 242, 254, 0.3);
          font-weight: 700;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .glitch-name {
          background: linear-gradient(135deg, #fff 0%, var(--accent-cyan) 50%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle-wrapper {
          margin-bottom: 24px;
          min-height: 60px;
        }

        .hero-subtitle {
          font-size: 1.35rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 36px;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
        }

        .hero-ctas .btn {
          min-width: 170px;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar-card {
          max-width: 380px;
          border-radius: 24px;
          padding: 16px;
        }

        .avatar-wrapper {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 1;
          background: rgba(3, 7, 18, 0.4);
          border: 1px solid var(--border-color);
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(15%) contrast(105%);
          transition: transform 0.5s ease;
        }

        .avatar-card:hover .avatar-image {
          transform: scale(1.03);
        }

        .avatar-indicator {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 242, 254, 0.25);
          border-radius: 20px;
          font-family: var(--font-cyber);
          font-size: 0.7rem;
          color: var(--accent-cyan);
          letter-spacing: 1.5px;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.15);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--accent-cyan);
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* About Section Styles */
        .about-section {
          background-color: var(--bg-primary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
          align-items: start;
        }

        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }

        .about-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .about-paragraph {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pillar-card {
          padding: 20px 24px;
        }

        .pillar-card .spotlight-content {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          text-align: left;
        }

        .pillar-icon {
          color: var(--accent-cyan);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .pillar-card:nth-child(2) .pillar-icon {
          color: var(--accent-purple);
        }

        .pillar-card:nth-child(3) .pillar-icon {
          color: var(--accent-blue);
        }

        .pillar-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Footer Styles */
        .footer {
          padding: 40px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-logo {
          font-family: var(--font-cyber);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Responsive Hero & About */
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }

          .hero-content {
            align-items: center;
            text-align: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .hero-ctas .btn {
            width: 100%;
          }
          
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
