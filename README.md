# Cyberpunk Portfolio - Gabriel Lima de Sousa

Este é um portfólio profissional moderno, altamente interativo e dinâmico, desenvolvido com a estética retro-futurista **Cyberpunk/Red Team**. O projeto é focado em **Tecnologia Educacional e Matemática**, destacando o desenvolvimento de simuladores educativos, jogos didáticos, análise de indicadores pedagógicos e gestão de laboratórios digitais.


🌐 **Demonstração Online**: [https://www.glstech.online/](https://www.glstech.online/)

---


## 🚀 Funcionalidades Principais

### 1. Hero Area & Profile Card 3D
* **Efeito de Decodificação**: Textos de apresentação que se auto-reconstroem dinamicamente via efeito de descriptografia cibergráfica.
* **Componente Profile Card 3D**: Implementação customizada do `TiltedCard` (inspirado no React Bits) que acompanha a movimentação do cursor do usuário para rotacionar a foto de perfil nos eixos X e Y.
* **Status Ativo Flutuante (Paralaxe)**: O indicador verde `SYSTEM ACTIVE` flutua acima da foto de perfil através de um plano de profundidade Z independente (`translateZ(30px)`), criando uma sensação de profundidade tridimensional holográfica.
* **Fundo de Partículas**: Grid de partículas flutuantes no plano de fundo simulando um fluxo contínuo de dados.

### 2. Habilidades Técnicas
* **Cards Estilizados**: Apresentação de competências segmentadas por categorias (Desenvolvimento Web, Engenharia de Dados, Infraestrutura Corporativa de TI e Inteligência Artificial).
* **Efeito Spotlight**: Os cartões utilizam o componente `SpotlightCard` para iluminar as bordas de forma reativa conforme a posição do mouse sobre o card.
* **Layout Responsivo**: Grid centralizado que se adapta de forma fluida de resoluções Ultra-Wide para telas de celulares sem transbordar.

### 3. Projetos em Destaque com Modal de Saber Mais
* **Consistência Visual**: Grid de tamanho fixo para cartões de projeto, evitando quebras ou alinhamentos assimétricos.
* **Botão "Saber Mais"**: Abre uma janela de modal cyberpunk com efeito de overlay de desfoque de fundo (`backdrop-filter: blur(12px)`).
* **Detalhes Contextuais**: Apresenta por que o projeto foi criado, a importância educacional/corporativa e as tags tecnológicas associadas.
* **Projetos Inclusos**:
  * **Red Team OSINT Simulator**: Jogo educativo interativo simulando um sistema operacional hacker retro cyberpunk para conscientização de segurança da informação.
  * **Senha Segura Game**: Jogo simulador de força de senhas e ataques de força bruta.
  * E projetos corporativos de desenvolvimento e engenharia de dados (APIs, BI, Gestão de Estoques e Portais).

### 4. Canais de Comunicação Otimizados
* **Layout Assimétrico Inteligente**: Grid configurado com proporção de colunas otimizada (`1.4fr 0.8fr 0.8fr`) que impede que o e-mail longo sofra quebras de linha indesejadas no desktop.
* **Integração Social**: Acesso direto ao GitHub, LinkedIn e E-mail com feedbacks visuais de hover que brilham em neon ciano.
* **Caixa de Status do Operador**: Indicador pulsante informando a disponibilidade para novas parcerias e projetos.

---

## 🛠️ Stack Tecnológica

* **Core**: [React 19](https://react.dev/) e [Vite](https://vite.dev/) (para bundling rápido e Hot Module Replacement).
* **Animações**: [Framer Motion](https://www.framer.com/motion/) (gerenciamento das físicas de mola e transições nos efeitos de tilt 3D e renderização de modais).
* **Estilização**: Vanilla CSS (variáveis customizadas de tema dark, sombras projetadas em neon e media queries fluidas).
* **Elementos Interativos**: Componentes customizados (`DecryptedText`, `BlurText`, `SpotlightCard`, `TiltedCard`).

---

## 📁 Estrutura do Projeto

```text
├── src/
│   ├── assets/             # Arquivos de mídia, logo e imagens de projetos
│   ├── components/         # Componentes dinâmicos reutilizáveis
│   │   ├── BlurText.jsx
│   │   ├── ContactSection.jsx
│   │   ├── DecryptedText.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── SpotlightCard.jsx
│   │   ├── TiltedCard.jsx  # Componente do Profile Card 3D
│   │   └── TiltedCard.css  # Estilo responsivo e neon do Profile Card
│   ├── App.jsx             # Orquestrador central de seções e dados
│   ├── App.css             # Estilos globais adicionais e transições
│   ├── index.css           # Variáveis do sistema de design (Cores e Fontes)
│   └── main.jsx            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts de execução
├── vite.config.js          # Configurações do Vite
└── README.md               # Documentação do projeto
```

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18+) e o **npm** instalados.

### Passos para Inicialização

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/gabriellima666/portif-lio.git
   cd portif-lio
   ```

2. **Instalar as Dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   *O projeto iniciará por padrão em: `http://localhost:5173/` (ou na porta configurada pelo Vite).*

4. **Gerar a Build de Produção**:
   ```bash
   npm run build
   ```
   *Os arquivos compilados de alta performance serão gerados dentro da pasta `/dist`.*
