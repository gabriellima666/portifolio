import React from 'react';
import SpotlightCard from './SpotlightCard';

export default function SkillsSection() {
  const skills = [
    {
      name: 'React',
      category: 'Desenvolvimento Web',
      proficiency: 90,
      description: 'Desenvolvimento de SPAs didáticas e simuladores educativos interativos com interfaces reativas e animações fluidas.',
      color: '#00f2fe',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z"/>
        </svg>
      )
    },
    {
      name: 'Angular',
      category: 'Desenvolvimento Web',
      proficiency: 80,
      description: 'Estruturação modular de portais educacionais, trabalhando com TypeScript, controle de rotas e injeção de dependência.',
      color: '#ff2a5f',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 5l1.5 12 8.5 5 8.5-5L22 5z"/>
          <path d="M12 2v20"/>
          <path d="M17 13H7"/>
        </svg>
      )
    },
    {
      name: 'Power BI & Looker Studio',
      category: 'Inteligência de Dados',
      proficiency: 95,
      description: 'Análise de métricas de aprendizagem, evasão e engajamento. Geração de relatórios de impacto social e dashboards corporativos.',
      color: '#f2c811',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      name: 'Node.js & Java',
      category: 'Backend',
      proficiency: 85,
      description: 'APIs seguras e estruturação de bancos de dados para armazenamento de dados acadêmicos e registros administrativos escolares.',
      color: '#39d353',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: 'Python & IA',
      category: 'Backend & Ciência de Dados',
      proficiency: 88,
      description: 'Algoritmos inteligentes aplicados a trilhas de ensino personalizado e automações de rotinas escolares e de TI.',
      color: '#306998',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H9a3 3 0 0 0-3 3v3h6V6h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v3h3a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-3V2z"/>
          <path d="M12 22h3a3 3 0 0 0 3-3v-3h-6v2h-6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3V6h-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v2z"/>
        </svg>
      )
    },
    {
      name: 'Infraestrutura de TI',
      category: 'Redes & Suporte',
      proficiency: 92,
      description: 'Gestão de laboratórios de informática escolares, Active Directory/Office 365 acadêmicos e suporte a professores e alunos.',
      color: '#a18cd1',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      )
    },
    {
      name: 'MySQL & SAP',
      category: 'Bancos de Dados & ERP',
      proficiency: 85,
      description: 'Modelagem relacional de registros acadêmicos e conciliação de faturamentos de projetos sociais integrados via SAP.',
      color: '#00758f',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      )
    },
    {
      name: 'Docker & DevOps',
      category: 'Infraestrutura Ágil',
      proficiency: 80,
      description: 'Containerização de ambientes escolares (Moodle, ferramentas didáticas) e esteiras ágeis para deploy de aplicações didáticas.',
      color: '#2496ed',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="4"/>
          <path d="M6 10h4v4H6zm8 0h4v4h-4zm-8 6h4v4H6zm8 0h4v4h-4zm0-12h4v4h-4z"/>
        </svg>
      )
    }
  ];


  return (
    <section id="skills" className="skills-section">
      <div className="glow-orb" style={{ top: '20%', right: '10%', width: '300px', height: '300px', background: 'rgba(161, 140, 209, 0.08)' }}></div>
      <div className="glow-orb" style={{ bottom: '10%', left: '5%', width: '250px', height: '250px', background: 'rgba(0, 242, 254, 0.05)' }}></div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Competências aplicadas à criação de tecnologias didáticas, gestão de laboratórios e análise de indicadores educacionais.
          </p>
        </div>


        <div className="skills-grid">
          {skills.map((skill) => (
            <SpotlightCard 
              key={skill.name} 
              className="skill-card"
              spotlightColor={`${skill.color}1c`}
            >
              <div className="skill-card-inner">
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-title-block">
                    <span className="skill-category">{skill.category}</span>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                </div>

                <p className="skill-desc">{skill.description}</p>

                <div className="skill-progress-block">
                  <div className="skill-progress-label">
                    <span>Proficiência</span>
                    <span style={{ color: skill.color, fontWeight: '600' }}>{skill.proficiency}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <div 
                      className="skill-progress-fill" 
                      style={{ 
                        width: `${skill.proficiency}%`,
                        background: `linear-gradient(90deg, ${skill.color}, var(--accent-purple))`,
                        boxShadow: `0 0 10px ${skill.color}aa`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 340px));
          gap: 24px;
          justify-content: center;
        }


        .skill-card {
          min-height: 250px;
        }

        .skill-card-inner {
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          background: rgba(255, 255, 255, 0.05);
          transform: scale(1.05);
        }

        .skill-title-block {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skill-category {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-family: var(--font-cyber);
        }

        .skill-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .skill-progress-block {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .skill-progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-card-inner {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
