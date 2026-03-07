"use client";

import React from "react";

export default function AboutMe() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-4xl font-bold text-center mx-auto text-white">About Me</h1>
            <p className="text-base text-slate-400 text-center mt-3 max-w-2xl mx-auto">
                I'm a creative technologist with 5+ years of experience building across full-stack, game development, software, mobile apps, and 3D art. I approach every project with leadership, critical thinking, and an unwavering commitment to quality.
            </p>
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-8 pt-20 pb-20">
                <div className="size-[520px] -top-40 left-1/2 -translate-x-1/2 rounded-full absolute blur-[200px] -z-10 bg-blue-950/40"></div>
                
                <div className="bg-neutral-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                    <div className="text-5xl mb-4">💪</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Core Strengths</h3>
                    <p className="text-sm text-slate-300">
                        Public speaking, trustworthy leadership, critical thinking, and a strong presence. I bring clarity and confidence to every challenge.
                    </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                    <div className="text-5xl mb-4">🎨</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Mastery</h3>
                    <p className="text-sm text-slate-300">
                        Full-stack development, game design, mobile apps, software architecture, and 3D art. I don't just specialize—I explore everything.
                    </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                    <div className="text-5xl mb-4">🏗️</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Structured Development</h3>
                    <p className="text-sm text-slate-300">
                        I build robust frameworks first, then craft experiences page by page. This ensures smooth UX and minimal bugs.
                    </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                    <div className="text-5xl mb-4">🎓</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Science Foundation</h3>
                    <p className="text-sm text-slate-300">
                        BS in Data Science and Application from IIT Madras. Currently pursuing advanced studies while building in the real world.
                    </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                    <div className="text-5xl mb-4">🚀</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Learn by Building</h3>
                    <p className="text-sm text-slate-300">
                        I get bored with theory alone. I learn by applying knowledge immediately in real projects. This drives innovation and depth.
                    </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                    <div className="text-5xl mb-4">✨</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Making Education Accessible</h3>
                    <p className="text-sm text-slate-300">
                        Leading a team to make tech education free for everyone. Building exactly what we envision, step by step.
                    </p>
                </div>
            </div>
        </>
    );
};