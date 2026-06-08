import React from 'react';
import SpotlightCard from './SpotlightCard';
import projectUi from '../assets/project-ui.png';
import projectApi from '../assets/project-api.png';
import projectDb from '../assets/project-db.png';
import projectSenha from '../assets/project-senha.png';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Password Rules Game',
      subtitle: 'DESAFIO DE CRIAÇÃO E VALIDAÇÃO DE SENHA',
      description: 'Um jogo interativo de criação de senhas desafiador baseado em regras progressivas, dinâmicas e lógicas. O jogador precisa construir uma senha que atenda a requisitos cada vez mais complexos e divertidos.',
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
            </SpotlightCard>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 32px;
        }

        .project-card {
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

        .project-links {
          display: flex;
          gap: 12px;
        }

        .project-btn {
          flex: 1;
          padding: 10px 16px;
          font-size: 0.8rem;
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
