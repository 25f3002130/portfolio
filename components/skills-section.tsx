"use client";

import React, { useState } from "react";

const categories = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "C#", level: 85 },
      { name: "C++", level: 80 },
      { name: "Rust", level: 60 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Three.js", level: 70 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 78 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "Game Dev & 3D",
    skills: [
      { name: "Unity", level: 85 },
      { name: "Unreal Engine", level: 65 },
      { name: "Blender", level: 80 },
      { name: "C# (Game)", level: 85 },
      { name: "Shader Programming", level: 60 },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 75 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ marginBottom: "1rem" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.35rem",
          fontSize: "0.85rem",
        }}
      >
        <span style={{ color: hovered ? "white" : "#cbd5e1", transition: "color 0.2s" }}>
          {name}
        </span>
        <span style={{ color: "#818cf8", fontWeight: 500 }}>{level}%</span>
      </div>
      <div
        style={{
          width: "100%",
          height: "6px",
          borderRadius: "3px",
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${level}%`,
            height: "100%",
            borderRadius: "3px",
            background: hovered
              ? "linear-gradient(90deg, #818cf8, #6366f1)"
              : "linear-gradient(90deg, #6366f1, #4f46e5)",
            transition: "width 0.8s ease, background 0.3s",
          }}
        />
      </div>
    </div>
  );
}

function CategoryCard({
  category,
}: {
  category: { name: string; skills: { name: string; level: number }[] };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(20,20,35,0.95)" : "rgba(10,10,20,0.85)",
        border: hovered
          ? "1px solid rgba(99,102,241,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1rem",
        padding: "1.5rem",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <h3
        style={{
          color: "#818cf8",
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: "1.25rem",
        }}
      >
        {category.name}
      </h3>
      {category.skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const totalLanguages = categories[0].skills.length;
  const totalSkills = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section
      id="skills"
      style={{
        width: "100%",
        background: "#0a0a0e",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
          paddingRight: "clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            What I Know
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Skills &amp; Technologies
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              maxWidth: "36rem",
              margin: "0 auto 2rem",
            }}
          >
            {totalLanguages} programming languages, {totalSkills} technologies across full-stack,
            game dev, 3D art, and more.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            {[
              { label: "Languages", value: `${totalLanguages}+` },
              { label: "Technologies", value: `${totalSkills}+` },
              { label: "Years Coding", value: "5+" },
              { label: "Domains", value: `${categories.length}` },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#818cf8",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
