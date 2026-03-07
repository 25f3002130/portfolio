"use client";

import React from "react";
import { SplineScene } from "@/components/ui/splite";

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-neutral-950 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px]">
        {/* Left - Text */}
        <div className="flex flex-col justify-center text-left py-24" style={{ paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "3rem" }}>
          <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-6">
            Multi-disciplinary developer who builds across every platform.
          </h2>
          <div className="space-y-4 text-slate-400 text-base leading-[1.75] max-w-xl">
            <p>
              Full-stack developer, game dev, mobile app dev, and 3D artist with <span className="text-slate-200">5+ years of experience</span>. Currently pursuing a <span className="text-white font-medium">BS in Data Science from IIT Madras</span>.
            </p>
            <p>
              I build frameworks first, then craft pages — prioritizing smooth UX with minimal bugs. I bring <span className="text-white font-medium">leadership, critical thinking, and public speaking</span> to every team.
            </p>
          </div>
        </div>

        {/* Right - Spline 3D Robot (flush to right edge) */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
