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
            <span className="hero-overline">TECNOLOGIA, DADOS & INCLUSÃO DIGITAL</span>
            
            <h1 className="hero-title">
              <DecryptedText 
                text="GABRIEL LIMA DE SOUSA" 
                speed={40} 
                maxIterations={15} 
                animateOn="view"
                revealDirection="center"
                className="glitch-name"
              />
            </h1>

            <div className="hero-subtitle-wrapper">
              <BlurText 
                text="Liderando iniciativas de inclusão, análise de Business Intelligence e soluções de tecnologia."
                delay={30}
                className="hero-subtitle"
              />
            </div>

            <p className="hero-description">
              Auxiliar de Tecnologia no Instituto Cacau Show, profissional de ADS, pós-graduando em Inteligência Artificial e licenciando em Matemática. Desenvolvo interfaces modernas (React, Angular), estruturo dados complexos (Power BI, Looker Studio, MySQL) e administro infraestrutura corporativa de TI.
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
                <img src={avatarImg} alt="Gabriel Lima de Sousa Avatar" className="avatar-image" />
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
              <h3 className="about-heading">Onde a tecnologia e a educação se conectam</h3>
              <p className="about-paragraph">
                Acredito no poder transformador da tecnologia quando aplicada à educação e à inclusão social. Atuando na interseção entre suporte de TI, ciência de dados e desenvolvimento de software, busco otimizar processos analíticos e capacitar pessoas por meio de metodologias digitais inovadoras.
              </p>
              <p className="about-paragraph">
                Como Auxiliar de Tecnologia no Instituto Cacau Show, lidero laboratórios educacionais e facilito workshops sobre ferramentas digitais e Inteligência Artificial. Possuo formação em ADS, MBA em IA em andamento, e combinando lógica matemática, construo soluções robustas ponta a ponta.
              </p>
            </div>

            <div className="about-pillars">
              <SpotlightCard className="pillar-card" spotlightColor="rgba(0, 242, 254, 0.1)">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <h4 className="pillar-title">Inteligência de Dados</h4>
                <p className="pillar-desc">Criação de dashboards no Power BI e Looker Studio para monitoramento de indicadores de desempenho e impacto social.</p>
              </SpotlightCard>

              <SpotlightCard className="pillar-card" spotlightColor="rgba(161, 140, 209, 0.1)">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                  </svg>
                </div>
                <h4 className="pillar-title">Desenvolvimento & IA</h4>
                <p className="pillar-desc">Construção de aplicações reativas em React/Angular e soluções automatizadas integradas com Python e IA.</p>
              </SpotlightCard>

              <SpotlightCard className="pillar-card" spotlightColor="rgba(79, 172, 254, 0.1)">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </div>
                <h4 className="pillar-title">Infraestrutura & Suporte</h4>
                <p className="pillar-desc">Configuração de SOs (Windows/macOS), suporte remoto via SysAid/AnyDesk e gerenciamento de Active Directory/Office 365.</p>
              </SpotlightCard>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="timeline-container">
            <h3 className="timeline-section-title">Trajetória Profissional & Acadêmica</h3>
            <div className="timeline-grids">
              {/* Experiência */}
              <div className="timeline-column">
                <h4 className="timeline-column-title">Experiência</h4>
                <div className="timeline-items">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">MAR 2023 - PRESENTE</span>
                    <h5 className="timeline-role">Auxiliar de Tecnologia</h5>
                    <span className="timeline-company">Instituto Cacau Show</span>
                    <p className="timeline-text">
                      Lidero projetos de inclusão digital e docência de informática (cidadania digital e ferramentas de escritório) para jovens. Crio dashboards pedagógicos e financeiros com Power BI e Looker Studio, além de realizar a manutenção dos laboratórios.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">JUL 2022 - MAR 2023</span>
                    <h5 className="timeline-role">Assistente Financeiro</h5>
                    <span className="timeline-company">Cacau Show</span>
                    <p className="timeline-text">
                      Geração de boletos e conciliação financeira via SAP e Bradesco Net Empresa. Resolução de chamados administrativos e gestão de contas a receber.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">JUL 2021 - JUL 2022</span>
                    <h5 className="timeline-role">Jovem Aprendiz de Suporte de TI</h5>
                    <span className="timeline-company">Cacau Show</span>
                    <p className="timeline-text">
                      Suporte de TI presencial e remoto via SysAid/AnyDesk. Configuração de máquinas Windows e macOS, além do controle de inventário de equipamentos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Educação */}
              <div className="timeline-column">
                <h4 className="timeline-column-title">Educação</h4>
                <div className="timeline-items">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">JAN 2026 - DEZ 2026</span>
                    <h5 className="timeline-role">MBA em Inteligência Artificial</h5>
                    <span className="timeline-company">Estácio</span>
                    <p className="timeline-text">
                      Pós-graduação Lato Sensu focada em algoritmos inteligentes, aprendizado de máquina e tomada de decisões corporativas com inteligência de dados.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">JUL 2025 - JUN 2029</span>
                    <h5 className="timeline-role">Licenciatura em Matemática</h5>
                    <span className="timeline-company">UNIASSELVI</span>
                    <p className="timeline-text">
                      Graduação focada em fundamentação analítica, lógica computacional e capacitação pedagógica acadêmica.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">JUL 2022 - DEZ 2024</span>
                    <h5 className="timeline-role">Análise e Desenvolvimento de Sistemas</h5>
                    <span className="timeline-company">UNINOVE</span>
                    <p className="timeline-text">
                      Curso tecnológico focado em arquitetura de software, programação orientada a objetos (Java/JavaScript), modelagem de banco de dados e engenharia de requisitos.
                    </p>
                  </div>
                </div>
              </div>
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
            <span>GABRIEL LIMA</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Gabriel Lima de Sousa. Desenvolvido com React e estética futurista.
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

        /* Timeline Styles */
        .timeline-container {
          margin-top: 80px;
          border-top: 1px solid var(--border-color);
          padding-top: 60px;
          text-align: left;
        }

        .timeline-section-title {
          font-family: var(--font-cyber);
          font-size: 1.5rem;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 40px;
          text-align: center;
          text-transform: uppercase;
        }

        .timeline-grids {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .timeline-column-title {
          font-family: var(--font-cyber);
          font-size: 1.1rem;
          color: var(--accent-cyan);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
          position: relative;
          padding-left: 12px;
          border-left: 3px solid var(--accent-cyan);
        }

        .timeline-column:nth-child(2) .timeline-column-title {
          color: var(--accent-purple);
          border-left-color: var(--accent-purple);
        }

        .timeline-items {
          position: relative;
          padding-left: 20px;
          border-left: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: -25px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .timeline-column:nth-child(2) .timeline-dot {
          background: var(--accent-purple);
          box-shadow: 0 0 8px var(--accent-purple);
        }

        .timeline-date {
          font-family: var(--font-cyber);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 1px;
          display: block;
          margin-bottom: 4px;
        }

        .timeline-role {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .timeline-company {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          display: block;
          margin-bottom: 8px;
        }

        .timeline-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
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

          .timeline-grids {
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
