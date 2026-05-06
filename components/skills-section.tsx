"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Gamepad2, 
  Wrench, 
  Database, 
  Terminal,
  Cpu,
  Layers,
  Zap
} from "lucide-react";

const categories = [
  {
    name: "Languages",
    icon: <Code2 size={18} />,
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
    icon: <Layout size={18} />,
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
    icon: <Server size={18} />,
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
    icon: <Gamepad2 size={18} />,
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
    icon: <Wrench size={18} />,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 75 },
    ],
  },
];

function getLevelColor(level: number) {
  if (level >= 90) return "#818cf8"; // Expert
  if (level >= 80) return "#6366f1"; // Advanced
  if (level >= 70) return "#a78bfa"; // Intermediate
  return "#94a3b8"; // Learning
}

function SkillChip({ name, level }: { name: string; level: number }) {
  const [hovered, setHovered] = useState(false);
  const color = getLevelColor(level);

  return (
    <motion.div
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "2rem",
        background: hovered ? "rgba(129, 140, 248, 0.15)" : "rgba(255, 255, 255, 0.03)",
        border: hovered 
          ? `1px solid ${color}44` 
          : "1px solid rgba(255, 255, 255, 0.08)",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "default",
        transition: "all 0.2s ease",
        backdropFilter: "blur(4px)",
      }}
    >
      <div 
        style={{ 
          width: "6px", 
          height: "6px", 
          borderRadius: "50%", 
          background: color,
          boxShadow: hovered ? `0 0 8px ${color}` : "none",
          transition: "all 0.3s ease"
        }} 
      />
      <span 
        style={{ 
          fontSize: "0.85rem", 
          color: hovered ? "white" : "#cbd5e1",
          fontWeight: 500,
          whiteSpace: "nowrap"
        }}
      >
        {name}
      </span>
      
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            style={{ 
              fontSize: "0.7rem", 
              color: color,
              fontWeight: 600,
              overflow: "hidden"
            }}
          >
            {level}%
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CategoryCard({
  category,
}: {
  category: { name: string; icon: React.ReactNode; skills: { name: string; level: number }[] };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: hovered ? "rgba(20,20,35,0.7)" : "rgba(10,10,20,0.4)",
        border: hovered
          ? "1px solid rgba(99,102,241,0.3)"
          : "1px solid rgba(255,255,255,0.05)",
        borderRadius: "1.5rem",
        padding: "1.75rem",
        backdropFilter: "blur(16px)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        boxShadow: hovered ? "0 20px 40px -20px rgba(0,0,0,0.5)" : "none",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Glow */}
      <div 
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(20px)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease"
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <div style={{ 
          color: "#818cf8",
          background: "rgba(129, 140, 248, 0.1)",
          padding: "0.5rem",
          borderRadius: "0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {category.icon}
        </div>
        <h3
          style={{
            color: "white",
            fontSize: "1.1rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {category.name}
        </h3>
      </div>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.div>
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
        background: "#030303", // Darker background for more premium feel
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Accents */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "30rem",
          height: "30rem",
          background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "40rem",
          height: "40rem",
          background: "radial-gradient(circle, rgba(129,140,248,0.02) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
          paddingRight: "clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                color: "#818cf8",
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "1rem",
                display: "block"
              }}
            >
              Expertise
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em"
              }}
            >
              Technical <span style={{ color: "#818cf8" }}>Toolkit</span>
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "32rem",
                margin: "0 auto 3rem",
              }}
            >
              A comprehensive overview of my technical stack and specialized skill sets.
            </p>
          </motion.div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(2rem, 8vw, 5rem)",
              flexWrap: "wrap",
              padding: "2rem",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              width: "fit-content",
              margin: "0 auto"
            }}
          >
            {[
              { label: "Languages", value: `${totalLanguages}+`, icon: <Terminal size={14} /> },
              { label: "Tech Stack", value: `${totalSkills}+`, icon: <Layers size={14} /> },
              { label: "Experience", value: "5yr+", icon: <Zap size={14} /> },
              { label: "Categories", value: `${categories.length}`, icon: <Cpu size={14} /> },
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem"
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem"
                  }}
                >
                  <span style={{ color: "#818cf8" }}>{stat.icon}</span>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2rem",
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
