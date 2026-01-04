// src/components/Voiraussi.tsx
import React from "react";

const Voiraussi = () => {
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
      <h2 style={{ color: "#61dafb", marginBottom: "2rem" }}>Liens utiles</h2>
      <p style={{ marginBottom: "3rem" }}>
        Vous pouvez également consulter ces plateformes :
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
          href="https://tryhackme.com/p/Zertuartz"
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
          <h3>Tryhackme</h3>
          <p>tryhackme.com/p/Zertuartz</p>
        </a>

        <a
          href="https://www.root-me.org/zhang-1065800?lang=fr#72136ee54bcdfb696c28291470f8064a"
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
          <h3>Root-me</h3>
          <p>www.root-me.org/zhang</p>
        </a>
      </div>
    </section>
  );
};

export default Voiraussi;
