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
            <div className="w-full bg-neutral-950 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">About Me</h1>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            I'm a creative technologist with 5+ years of experience building across full-stack, game development, software, mobile apps, and 3D art. I approach every project with leadership, critical thinking, and an unwavering commitment to quality.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Core Strengths */}
                        <div className="group relative bg-gradient-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/50 rounded-2xl p-7 hover:border-blue-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="text-5xl mb-4">💪</div>
                                <h3 className="text-xl font-semibold text-blue-200 mb-3">Core Strengths</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    Public speaking, trustworthy leadership, critical thinking, and a strong presence. I bring clarity and confidence to every challenge.
                                </p>
                            </div>
                        </div>

                        {/* Diverse Expertise */}
                        <div className="group relative bg-gradient-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/50 rounded-2xl p-7 hover:border-purple-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="text-5xl mb-4">🎨</div>
                                <h3 className="text-xl font-semibold text-purple-200 mb-3">Full-Stack Mastery</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    Full-stack development, game design, mobile apps, software architecture, and 3D art. I don't just specialize—I explore everything.
                                </p>
                            </div>
                        </div>

                        {/* Build Framework First */}
                        <div className="group relative bg-gradient-to-br from-emerald-900/40 to-emerald-900/20 border border-emerald-500/50 rounded-2xl p-7 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="text-5xl mb-4">🏗️</div>
                                <h3 className="text-xl font-semibold text-emerald-200 mb-3">Structured Development</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    I build robust frameworks first, then craft experiences page by page. This ensures smooth UX and minimal bugs.
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="group relative bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 border border-indigo-500/50 rounded-2xl p-7 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="text-5xl mb-4">🎓</div>
                                <h3 className="text-xl font-semibold text-indigo-200 mb-3">Data Science Foundation</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    BS in Data Science and Application from IIT Madras. Currently pursuing advanced studies while building in the real world.
                                </p>
                            </div>
                        </div>

                        {/* Learning Philosophy */}
                        <div className="group relative bg-gradient-to-br from-orange-900/40 to-orange-900/20 border border-orange-500/50 rounded-2xl p-7 hover:border-orange-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="text-5xl mb-4">🚀</div>
                                <h3 className="text-xl font-semibold text-orange-200 mb-3">Learn by Building</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    I get bored with theory alone. I learn by applying knowledge immediately in real projects. This drives innovation and depth.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="group relative bg-gradient-to-br from-rose-900/40 to-rose-900/20 border border-rose-500/50 rounded-2xl p-7 hover:border-rose-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-xl font-semibold text-rose-200 mb-3">Making Education Accessible</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    Leading a team to make tech education free for everyone. Building exactly what we envision, step by step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};