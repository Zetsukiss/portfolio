// src/components/Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#111",
        color: "#e0e0e0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#61dafb", marginBottom: "2rem" }}>Contact</h2>
      <p style={{ marginBottom: "3rem" }}>
        Vous pouvez me retrouver ou me contacter via ces plateformes :
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a
          href="mailto:zhangkevinzed@gmail.com"
          style={{
            display: "block",
            backgroundColor: "#2a2a2a",
            padding: "1.5rem",
            borderRadius: "1rem",
            textDecoration: "none",
            color: "#e0e0e0",
            minWidth: "220px",
            transition: "transform 0.3s, background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#61dafb";
            (e.currentTarget as HTMLElement).style.color = "#111";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#2a2a2a";
            (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <h3>Email</h3>
          <p>Zhangkevinzed@gmail.com</p>
        </a>

        <a
          href="https://github.com/Zetsukiss"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            backgroundColor: "#2a2a2a",
            padding: "1.5rem",
            borderRadius: "1rem",
            textDecoration: "none",
            color: "#e0e0e0",
            minWidth: "220px",
            transition: "transform 0.3s, background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#61dafb";
            (e.currentTarget as HTMLElement).style.color = "#111";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#2a2a2a";
            (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <h3>GitHub</h3>
          <p>github.com/Zetsukiss</p>
        </a>

        <a
          href="https://www.linkedin.com/in/kevin-zhang-9267021b9/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            backgroundColor: "#2a2a2a",
            padding: "1.5rem",
            borderRadius: "1rem",
            textDecoration: "none",
            color: "#e0e0e0",
            minWidth: "220px",
            transition: "transform 0.3s, background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#61dafb";
            (e.currentTarget as HTMLElement).style.color = "#111";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#2a2a2a";
            (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/kevin-zhang</p>
        </a>

        <div
          style={{
            display: "block",
            backgroundColor: "#2a2a2a",
            padding: "1.5rem",
            borderRadius: "1rem",
            color: "#e0e0e0",
            minWidth: "220px",
          }}
        >
          <h3>Téléphone</h3>
          <p>07.67.59.65.18</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
