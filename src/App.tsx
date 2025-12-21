import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '70px' }}>
        <Section id="home" title="Kevin Zhang">
          <p>Étudiant ingénieur en informatique, intéressé par systèmes, réseaux et cybersécurité.</p>
        </Section>

        <Section id="projects" title="Projets">
          <div className="row g-4">
            {projects.map((p, idx) => (
              <div key={idx} className="col-md-4">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
