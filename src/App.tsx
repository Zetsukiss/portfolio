import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import Contact from "./components/Contacts";
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '70px' }}>
       <section className="hero">
  <div className="hero-content">
    <div className="hero-left">
      <h1>Kevin Zhang</h1>
      <p>
        Bienvenue sur mon portfolio. Il regroupe mes projets, mes activités académiques et professionnelles,
        ainsi que des preuves de mon assiduité et de mon parcours.
      </p>
    <p className="subtitle">
      Orientation Blue Team • SOC • Réponse aux incidents • Ingénierie en cybersécurité • Réseaux & télécoms
    </p>
    </div>

    <div className="hero-right">
      <div className="hero-card">
        <h2><p>&lt; Hello World! &gt;</p></h2>
          <div className="flag-container">
            ----&gt;<span className="hidden-flag">{"FLAG{PORTFOLIO}"}</span>

          </div>
      </div>
    </div>
  </div>

  <div 
    className="scroll-down" 
    onClick={() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  ></div>
</section>

  <AboutMe />
      <Section id="projects" title="Projets">
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-block">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </Section>

      </main>
      <Contact />
      <Footer />

    </>
    
  );
}
