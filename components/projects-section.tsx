"use client";

import React, { useState } from "react";
import { RevealWaveImage } from "@/components/reveal-wave-image";

const projects = [
  {
    title: "United Earth Labs",
    description:
      "A startup focused on innovating human technology to accelerate our path toward becoming a Type 1 civilization on the Kardashev scale.",
    tags: ["Startup", "Deep Tech", "Innovation"],
    status: "Active",
  },
  {
    title: "FaceReco",
    description:
      "A surveillance software capable of detecting and cross-referencing leaked information. Discontinued due to high risk of misuse.",
    tags: ["Python", "OpenCV", "Deep Learning"],
    status: "Archived",
  },
  {
    title: "Terminal Academy",
    description:
      "A free-to-use platform where students can learn tech — no paywalls, no barriers. Education should be accessible to everyone.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "RightWrongCounter",
    description:
      "A simple counter app built out of necessity — couldn't find the one I needed, so I made my own.",
    tags: ["React", "JavaScript"],
  },
  {
    title: "Game Collection",
    description:
      "Multiple games built from scratch because I couldn't find the games I wanted to play. If it doesn't exist, build it.",
    tags: ["Unity", "C#", "Game Design"],
  },
  {
    title: "3D Models & Renders",
    description:
      "A collection of 3D models, animations, and photorealistic renders created across various personal and creative projects.",
    tags: ["Blender", "3D Art", "Animation"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full" style={{ minHeight: "100vh" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <RevealWaveImage
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
          className="h-full w-full"
          waveSpeed={0.3}
          waveAmplitude={0.15}
          revealRadius={0.25}
        />
      </div>

      <div
        className="relative z-10"
        style={{
          padding: "6rem clamp(2rem, 8vw, 8rem)",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <p
            style={{
              color: "#818cf8",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "0.75rem",
            }}
          >
            Projects
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
            }}
          >
            Things I&apos;ve built.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {projects.map((project) => {
            return (
              <ProjectCard key={project.title} project={project} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(20,20,35,0.95)" : "rgba(10,10,20,0.85)",
        border: hovered ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(255,255,255,0.12)",
        borderRadius: "1rem",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.3s, background 0.3s",
        backdropFilter: "blur(12px)",
      }}
    >
      {project.status && (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
          <span
            style={{
              fontSize: "0.7rem",
              color: project.status === "Active" ? "#4ade80" : "#f87171",
              border: `1px solid ${project.status === "Active" ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)"}`,
              borderRadius: "9999px",
              padding: "0.15rem 0.6rem",
              fontWeight: 500,
            }}
          >
            {project.status}
          </span>
        </div>
      )}

      <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "white" }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.7 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.7rem",
              color: "#94a3b8",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "9999px",
              padding: "0.2rem 0.65rem",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
