import { useState, useEffect } from "react";
import "./App.css";
import cafe1 from "./assets/IMG/cafe1.png";
import cafe2 from "./assets/IMG/cafe2.png";
import cafe3 from "./assets/IMG/cafe3.png";
import dent1 from "./assets/IMG/dent1.png";
import dent2 from "./assets/IMG/dent2.png";
import dent3 from "./assets/IMG/dent3.png";
import minhaFoto from "./assets/IMG/foto-perfil11.jpg";
import embreve from "./assets/IMG/emBreve.png";

const projects = [
  {
    title: "CAFETERIA",
    description:
      "Landing page moderna para cafeteria.",
    tech: "HTML / CSS / JAVASCRIPT",
    images: [
      cafe1,
      cafe2,
      cafe3
    ],
    link: "#",
  },
  {
    title: "CONULTÓRIO ODONTOLÓGICO",
    description:
      "Aplicação web com interface interativa e responsiva.",
    tech: "HTML / CSS / JAVASCRIPT",
    images: [
      dent1,
      dent2,
      dent3
    ],
    link: "#",
  },
  {
    title: "PROJECT_03",
    description:
      "Em andamento.",
    tech: "HTML / CSS / JS",
    images: [
     embreve
    ],
    link: "#",
  }
];


function ProjectCard({ project, number }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Se o projeto tiver apenas uma imagem, não inicia o carrossel
    if (project.images.length <= 1) {
      return;
    }

    // Troca a imagem automaticamente a cada 3 segundos
    const interval = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % project.images.length;
      });
    }, 3000);

    // Limpa o temporizador quando o componente é desmontado
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <article className="project-card">
      <div className="project-topbar">
        <span className="window-dots">● ● ●</span>

        <span>
          PROJECT_{String(number).padStart(2, "0")}.EXE
        </span>

        <span>◈</span>
      </div>

      <div className="project-image-area">
        {project.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} preview ${index + 1}`}
            className={`project-image ${
              currentImage === index ? "active" : ""
            }`}
          />
        ))}

        <div className="scanlines" />

        <div className="project-index">
          IMG_0{currentImage + 1}
        </div>

        <div className="hover-hint">
          AUTO PREVIEW ↻
        </div>
      </div>

      <div className="project-info">
        <div className="project-number">
          #{String(number).padStart(2, "0")}
        </div>

        <div>
          <p className="project-tech">{project.tech}</p>

          <h3>{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>

          <a href={project.link} className="project-link">
            OPEN PROJECT <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}


function App() {
  return (
    <div className="portfolio">
      <div className="noise" />
      <div className="grid-bg" />

      {/* NAVBAR */}

      <header className="navbar">
        <a href="#home" className="logo">
          <span>&lt;</span>
          MY
          <span>_</span>
          PORTFOLIO
          <span>/&gt;</span>
        </a>

        <nav>
          <a href="#home">HOME</a>
          <a href="#sobre">ABOUT</a>
          <a href="#projetos">WORK</a>
          <a href="#contato">CONTACT</a>
        </nav>

        <a href="#contato" className="status-pill">
          <i />
          online
        </a>
      </header>

      <main>

        {/* HERO */}

        <section id="home" className="hero section">

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-main">

            <div className="mini-window">
              <span>WELCOME.TXT</span>

              <div className="window-buttons">
                _ □ ×
              </div>
            </div>

            <p className="eyebrow">
              // WEB DESIGNER & DEVELOPER
            </p>

            <h1>
              <span className="silver-text">
                HELLO,
              </span>

              <br />

              I'M{" "}
              <span className="purple-text">
                MELYSSA
              </span>

              <br />

              <span className="chrome-text">
                DANIELLE.
              </span>
            </h1>

            <p className="hero-description">
              Desenvolvedor apaixonado por criar experiências
              digitais
              <span> diferentes.</span>
            </p>

            <div className="hero-buttons">

              <a
                href="#projetos"
                className="y2k-button primary"
              >
                ENTER PORTFOLIO
                <span>→</span>
              </a>

              <a
                href="#sobre"
                className="y2k-button secondary"
              >
                ABOUT ME
              </a>

            </div>
          </div>

          {/* ELEMENTO CROMADO */}

          <div className="hero-widget">

  {/* Órbitas */}
  <div className="orbit orbit-1">
    <span className="planet planet-1">✦</span>
  </div>

  <div className="orbit orbit-2">
    <span className="planet planet-2">✧</span>
  </div>

  <div className="orbit orbit-3">
    <span className="planet planet-3">✦</span>
  </div>

  <div className="orbit orbit-4">
    <span className="planet planet-4">●</span>
  </div>

  {/* Centro */}
  <div className="world-center">

    <div className="world-star">
      ✦
    </div>

    <span className="world-small">
      WELCOME
    </span>

    <strong>
      TO MY
      <br />
      WORLD
    </strong>

    <span className="world-small bottom">
      ✧ EST. 2000 ✧
    </span>

  </div>

  {/* Textos externos */}

  <span className="orbit-label label-top">
    DREAM
  </span>

  <span className="orbit-label label-right">
    CREATE
  </span>

  <span className="orbit-label label-bottom">
    EXPLORE
  </span>

</div>

          <div className="floating-star star-one">
            ✦
          </div>

          <div className="floating-star star-two">
            ✧
          </div>

          <div className="floating-star star-three">
            ✦
          </div>

          <a
            href="#sobre"
            className="scroll-y2k"
          >
            <span>SCROLL DOWN</span>
            <b>↓</b>
          </a>

        </section>

        {/* SOBRE */}

        <section
          id="sobre"
          className="section about-section"
        >

          <div className="section-label">
            <span>01</span>
            <p>ABOUT_ME.EXE</p>
            <span>///</span>
          </div>

          <div className="about-layout">

            <div className="about-photo-wrap">

              <div className="photo-label top-label">
                USER_PROFILE.jpg
              </div>

              <div className="profile-photo">

                <img
                  src={minhaFoto}
                  alt="Minha foto"
                />

                <div className="photo-shine" />

              </div>

              <div className="photo-label bottom-label">
                STATUS: ONLINE
              </div>

              <div className="corner corner-tl" />
              <div className="corner corner-br" />

            </div>

            <div className="about-panel">

              <div className="panel-title">
                <span>WHO AM I?</span>
                <span>01/03</span>
              </div>

              <h2>
                NICE TO
                <br />
                <span>MEET YOU.</span>
              </h2>

              <p>
                Oi! Eu sou{" "}
                <strong>Melysa Danielle ♡.</strong>
              </p>

              <p>
                Sou Desenvolvedor Web & Designer Digital,
                apaixonado por criatividade, tecnologia e por transformar ideias em experiências 
                digitais únicas.
              </p>

              <p>
                Gosto de pensar que um site pode ser muito mais do que apenas uma página: ele pode ser uma experiência,
                um lugar para explorar e, principalmente, uma extensão de quem o criou.

                Então... você chegou ao meu cantinho da internet.
              </p>

              <p><strong>Sinta-se em casa. ✦</strong></p>

              <div className="skills-grid">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVACRIPT</span>
                <span>FIGMA</span>
              </div>

            </div>

          </div>

        </section>

        {/* PROJETOS */}

        <section
          id="projetos"
          className="section projects-section"
        >

          <div className="section-label">
            <span>02</span>
            <p>MY_WORK.EXE</p>
            <span>///</span>
          </div>

          <div className="projects-intro">

            <div>

              <p className="eyebrow">
                SELECTED WORK
              </p>

              <h2>
                THINGS I'VE
                <br />
                <span>CREATED.</span>
              </h2>

            </div>

            <div className="system-message">

              <span>
                SYS.MSG_2000
              </span>

              <p>
                02 PROJECTS FOUND_
              </p>

              <small>
                HOVER TO EXPLORE
              </small>

            </div>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                number={index + 1}
              />
            ))}

          </div>

        </section>

        {/* CONTATO */}

        <section
          id="contato"
          className="section contact-section"
        >

          <div className="contact-terminal">

            <div className="terminal-bar">

              <span>
                CONTACT_ME.EXE
              </span>

              <div>
                _ □ ×
              </div>

            </div>

            <div className="terminal-content">

              <p className="terminal-code">
                &gt; INITIALIZING CONTACT...
              </p>

              <p className="terminal-code">
                &gt; CONNECTION:{" "}
                <span>READY</span>
              </p>

              <h2>
                LET'S MAKE
                <br />
                <span>SOMETHING COOL.</span>
              </h2>

              <p className="contact-description">
                Tem um projeto, ideia ou oportunidade?
                Meu inbox está aberto.
              </p>

              
              <a
                href="mailto:daniellemelyssaprofissional@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="email-button"
              >
                daniellemelyssaprofissional@gmail.com
                <span>↗</span>
              </a>

              <div className="social-links">

                <a
                  href="https://github.com/M5lyssa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>

                <a
                  href="https://wa.me/5582981809094"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHATSZAP
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      <footer>

        <span>
          © {new Date().getFullYear()} Melyssa_✦
        </span>

        <span>
          MADE WITH ♥ + CODE
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

export default App;