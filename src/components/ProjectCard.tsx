// src/components/ProjectCard.tsx
import React from "react";

export interface Project { 
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} style={{ width: "100%", borderRadius: "1rem", marginBottom: "1rem", objectFit: "cover" }} />}
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="btn-primary">
          Voir le projet
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
