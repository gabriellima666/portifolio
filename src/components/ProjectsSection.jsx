import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import projectUi from '../assets/project-ui.png';
import projectApi from '../assets/project-api.png';
import projectDb from '../assets/project-db.png';
import projectSenha from '../assets/project-senha.png';
import projectCyber from '../assets/project-cyber.png';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Red Team OSINT Simulator',
      subtitle: 'SIMULAÇÃO DE ENGENHARIA SOCIAL E OSINT',
      description: 'Jogo educativo interativo e dinâmico que simula uma estação de trabalho hacker de elite ("Red Team"). Com uma interface de comando retro cyberpunk, scanlines CRT, beeps sintetizados e terminal interativo, o jogador aprende conceitos práticos de segurança da informação, análise de dados e conscientização de senhas.',
      whyCreated: 'Desenvolvido como uma ferramenta educacional prática para a conscientização de segurança da informação. O objetivo é demonstrar, de forma dinâmica e gamificada, como técnicas de inteligência de fontes abertas (OSINT) e engenharia social são usadas por agentes maliciosos para comprometer credenciais baseadas em informações públicas (como posts em redes sociais). É uma ferramenta excelente para treinamentos corporativos e acadêmicos.',
      image: projectCyber,
      tags: ['React 19', 'Vite', 'Tailwind CSS v4', 'Web Audio API', 'Vercel'],
      demoLink: 'https://jogo-engenharia-social.vercel.app/',
      githubLink: 'https://github.com/gabriellima666/jogo-engenharia-social',
      color: 'rgba(0, 242, 254, 0.15)'
    },
    {
      id: 2,
      title: 'Password Rules Game',
      subtitle: 'DESAFIO DE CRIAÇÃO E VALIDAÇÃO DE SENHA',
      description: 'Um jogo interativo de criação de senhas desafiador baseado em regras progressivas, dinâmicas e lógicas. O jogador precisa construir uma senha que atenda a requisitos cada vez mais complexos e divertidos.',
      whyCreated: 'Criado com fins educacionais para desafiar e conscientizar os usuários sobre a importância de criar senhas fortes e complexas, porém de uma forma lúdica. O jogo desconstrói a ideia tradicional e entediante de requisitos de senha ao transformá-los em um quebra-cabeça progressivo e divertido, ensinando a necessidade de resiliência digital de maneira interativa.',
      image: projectSenha,
      tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Vercel'],
      demoLink: 'https://gabriel-senha.vercel.app/',
      githubLink: 'https://github.com/gabriellima666/password-game',
      color: 'rgba(242, 200, 17, 0.15)'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="glow-orb" style={{ top: '30%', left: '15%', width: '400px', height: '400px', background: 'rgba(0, 242, 254, 0.04)' }}></div>
      <div className="glow-orb" style={{ bottom: '15%', right: '5%', width: '350px', height: '350px', background: 'rgba(161, 140, 209, 0.05)' }}></div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Uma seleção de sistemas desenvolvidos de ponta a ponta, demonstrando o equilíbrio entre design visual de interfaces e robustez técnica no backend.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="project-card"
              spotlightColor={project.color}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay"></div>
                <span className="project-subtitle-tag">{project.subtitle}</span>
              </div>

              <div className="project-content-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions-wrapper">
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="btn btn-secondary project-btn-more"
                  >
                    Saber Mais
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginLeft: '6px' }}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </button>
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                      Ver Demo
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginLeft: '6px' }}>
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-btn">
                      GitHub
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginLeft: '6px' }}>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <div className="project-modal-grid">
              <div className="project-modal-image-sec">
                <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-image" />
                <div className="project-modal-actions">
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary modal-action-btn">
                    Ver Demo Online
                  </a>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary modal-action-btn">
                    Código GitHub
                  </a>
                </div>
              </div>
              <div className="project-modal-info-sec">
                <span className="project-modal-subtitle">{selectedProject.subtitle}</span>
                <h2 className="project-modal-title">{selectedProject.title}</h2>
                
                <div className="project-modal-divider"></div>
                
                <div className="project-modal-section">
                  <h3>Sobre o Projeto</h3>
                  <p>{selectedProject.description}</p>
                </div>
                
                <div className="project-modal-section">
                  <h3>Por Que Foi Criado?</h3>
                  <p>{selectedProject.whyCreated}</p>
                </div>
                
                <div className="project-modal-section">
                  <h3>Tecnologias Utilizadas</h3>
                  <div className="project-modal-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="badge project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 360px));
          gap: 32px;
          justify-content: center;
        }


        .project-card {
          display: flex;
          flex-direction: column;
          height: 600px;
        }

        .project-card .spotlight-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.08);
        }

        .project-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 40%, rgba(3, 7, 18, 0.85) 100%);
          z-index: 1;
        }

        .project-subtitle-tag {
          position: absolute;
          bottom: 16px;
          left: 20px;
          font-family: var(--font-cyber);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          text-shadow: 0 0 8px rgba(0, 242, 254, 0.5);
          z-index: 2;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .project-content-details {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .project-tag {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
        }

        .project-actions-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }

        .project-btn-more {
          width: 100%;
          padding: 10px 16px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-color: rgba(0, 242, 254, 0.2);
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.02);
        }

        .project-btn-more:hover {
          background: rgba(0, 242, 254, 0.08);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.2);
        }

        .project-links {
          display: flex;
          gap: 12px;
        }

        .project-btn {
          flex: 1;
          padding: 10px 16px;
          font-size: 0.8rem;
        }

        /* Modal Styles */
        .project-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-modal-content {
          position: relative;
          background: rgba(10, 15, 30, 0.95);
          border: 1px solid rgba(0, 242, 254, 0.25);
          box-shadow: 0 0 40px rgba(0, 242, 254, 0.15);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(3, 7, 18, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          z-index: 100;
        }

        .project-modal-close:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: rotate(90deg);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
        }

        .project-modal-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }

        .project-modal-image-sec {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-modal-image {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          object-fit: cover;
          height: 250px;
        }

        .project-modal-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-action-btn {
          padding: 12px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .project-modal-info-sec {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }

        .project-modal-subtitle {
          font-family: var(--font-cyber);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          letter-spacing: 2px;
          text-shadow: 0 0 8px rgba(0, 242, 254, 0.3);
          font-weight: 700;
        }

        .project-modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .project-modal-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, rgba(0, 242, 254, 0.3), transparent);
        }

        .project-modal-section h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .project-modal-section p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Modal & Grid */
        @media (max-width: 768px) {
          .project-modal-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .project-modal-content {
            padding: 30px 20px;
            max-height: 95vh;
          }

          .project-modal-close {
            top: 12px;
            right: 12px;
            width: 36px;
            height: 36px;
            font-size: 1.25rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .project-card {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
