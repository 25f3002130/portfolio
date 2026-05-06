"use client";

import React, { useState } from "react";
import { RevealWaveImage } from "@/components/reveal-wave-image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MediaPull",
    description:
      "A universal media downloader platform. Currently supports YouTube and Instagram, with ongoing development to support 500+ websites including X (Twitter), TikTok, and more.",
    tags: ["Next.js", "Python", "Media", "API"],
    status: "Active",
    link: "https://github.com/25f3002130/MediaPull",
  },
  {
    title: "ZINCxNH",
    description:
      "Advanced AI code reviewer platform where users can input their code and receive real-time feedback from state-of-the-art AI models for better updates and code quality.",
    tags: ["AI/ML", "React", "Code Review", "LLM"],
    status: "Active",
    link: "https://github.com/25f3002130/ai-code-reviewer",
  },
  {
    title: "United Earth Labs",
    description:
      "A startup focused on innovating human technology to accelerate our path toward becoming a Type 1 civilization on the Kardashev scale.",
    tags: ["Startup", "Deep Tech", "Innovation"],
    status: "Active",
  },
  {
    title: "Terminal Academy",
    description:
      "A free-to-use platform where students can learn tech — no paywalls, no barriers. Education should be accessible to everyone.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
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
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Selected <span style={{ color: "#818cf8" }}>Work</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
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
        background: hovered ? "rgba(20,20,35,0.7)" : "rgba(10,10,20,0.4)",
        border: hovered ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(255,255,255,0.05)",
        borderRadius: "1.5rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        backdropFilter: "blur(16px)",
        boxShadow: hovered ? "0 20px 40px -20px rgba(0,0,0,0.5)" : "none",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h3 style={{ 
          fontSize: "1.25rem", 
          fontWeight: 700, 
          color: "white",
          letterSpacing: "-0.01em"
        }}>
          {project.title}
        </h3>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: hovered ? "#818cf8" : "#94a3b8",
                transition: "color 0.3s ease"
              }}
            >
              <Github size={20} />
            </a>
          )}
          {project.status && (
            <span
              style={{
                fontSize: "0.65rem",
                color: project.status === "Active" ? "#4ade80" : "#f87171",
                background: project.status === "Active" ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
                border: `1px solid ${project.status === "Active" ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}`,
                borderRadius: "9999px",
                padding: "0.2rem 0.6rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              {project.status}
            </span>
          )}
        </div>
      </div>

      <p style={{ 
        fontSize: "0.95rem", 
        color: "#94a3b8", 
        lineHeight: 1.6,
        marginBottom: "0.5rem"
      }}>
        {project.description}
      </p>

      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "0.6rem", 
        marginTop: "auto",
        paddingTop: "1rem"
      }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.7rem",
              color: hovered ? "#818cf8" : "#cbd5e1",
              background: hovered ? "rgba(129, 140, 248, 0.1)" : "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "0.5rem",
              padding: "0.3rem 0.75rem",
              fontWeight: 500,
              transition: "all 0.3s ease"
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
