"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Python", level: 85 },
  { name: "Game Development", level: 80 },
  { name: "3D Art / Blender", level: 75 },
  { name: "Mobile (React Native)", level: 78 },
];

const timeline = [
  { year: "2020", title: "Started Coding", desc: "First lines of code — instantly hooked." },
  { year: "2022", title: "Full-Stack Projects", desc: "Built real products end-to-end." },
  { year: "2024", title: "IIT Madras", desc: "BS in Data Science & Application." },
  { year: "2026", title: "Building the Future", desc: "Leading teams, shipping products." },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
    >
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-slate-400 mt-2">{label}</div>
    </motion.div>
  );
}

export default function AboutMe() {
  return (
    <section className="w-full bg-neutral-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-900/20 blur-[180px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-28">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Bio + Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          {/* Bio - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              I build things across <span className="text-indigo-400">every platform</span>.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I'm a full-stack developer, game developer, mobile app developer, software engineer, and 3D artist with over 5 years of experience. I don't believe in being limited to one discipline — I get bored learning just one thing, so I explore and build across everything a human possibly can.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Currently pursuing a <span className="text-white font-medium">BS in Data Science & Application from IIT Madras</span>, I combine academic rigor with hands-on building. My approach is simple: build the framework first, then craft each page to ensure users get the smoothest experience with as few bugs as possible.
            </p>
            <p className="text-slate-300 leading-relaxed">
              What drives me? Being able to make <span className="text-white font-medium">exactly</span> what I envision. It can be hard, but the end result is always worth it.
            </p>
          </motion.div>

          {/* Stats - takes 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            <StatCard value="5+" label="Years Experience" delay={0.1} />
            <StatCard value="6+" label="Disciplines" delay={0.2} />
            <StatCard value="IIT" label="Madras Student" delay={0.3} />
            <StatCard value="∞" label="Curiosity" delay={0.4} />
          </div>
        </div>

        {/* Skills + What I Bring Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">
                &#60;/&#62;
              </span>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">
                ★
              </span>
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🎤", title: "Public Speaking", desc: "Confident communicator who can present ideas clearly." },
                { icon: "🤝", title: "Trustworthy", desc: "Reliable teammate who delivers on every commitment." },
                { icon: "👑", title: "Leadership", desc: "Natural leader who guides teams towards shared goals." },
                { icon: "🧠", title: "Critical Thinking", desc: "Analytical mind that solves problems at their root." },
                { icon: "⚡", title: "Presence of Mind", desc: "Quick thinker who adapts to any situation on the fly." },
                { icon: "🔭", title: "Endless Curiosity", desc: "Always exploring new domains, never settling for one." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
              ◆
            </span>
            My Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-emerald-500/50 hidden md:block" />

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold text-sm mb-4 shadow-lg shadow-indigo-500/25">
                    {item.year.slice(2)}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-slate-300 italic max-w-3xl mx-auto leading-relaxed">
            "I don't learn to learn — I learn to <span className="text-indigo-400 font-medium not-italic">build</span>. The best way to understand something is to create it."
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
