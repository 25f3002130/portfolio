"use client";

import React from "react";
import { SplineScene } from "@/components/ui/splite";

export default function AboutMe() {
  return (
    <section className="w-full bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Spline 3D Profile */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9wHuwm/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              I build across every platform — because one is never enough.
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a full-stack developer, game developer, mobile app developer, software engineer, and 3D artist with over 5 years of experience. I don't believe in being limited to one discipline — I get easily bored learning just one thing, so I explore and build across everything a human possibly can.
              </p>
              <p>
                Currently pursuing a <span className="text-white font-medium">BS in Data Science & Application from IIT Madras</span>, I combine academic foundation with hands-on building. My approach is straightforward: build the framework first, then craft each page one by one — ensuring users get a smooth experience with as few bugs as possible.
              </p>
              <p>
                Beyond technical skills, I bring <span className="text-white font-medium">public speaking, leadership, critical thinking, and presence of mind</span> to every team I work with. What drives me? Being able to make exactly what I envision. It can be hard, but the end result is always worth it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
