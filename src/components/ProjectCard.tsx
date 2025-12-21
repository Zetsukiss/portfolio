import React from 'react';

export interface Project {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: Project) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={link} className="btn btn-primary mt-3">Voir le projet</a>
      </div>
    </div>
  );
}
