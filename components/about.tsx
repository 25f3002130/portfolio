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
            <div className="w-full">
                <h1 className="text-4xl font-bold text-center mx-auto">About Me</h1>
                <p className="text-base text-slate-600 text-center mt-3 max-w-2xl mx-auto">
                    I'm a creative technologist with 5+ years of experience building across full-stack, game development, software, mobile apps, and 3D art. I approach every project with leadership, critical thinking, and an unwavering commitment to quality.
                </p>
                
                <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                    <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-indigo-100/50"></div>
                    
                    {/* Core Strengths */}
                    <div>
                        <div className="size-10 p-2 bg-blue-50 border border-blue-200 rounded">
                            <span className="text-xl">💪</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-700">Core Strengths</h3>
                            <p className="text-sm text-slate-600">
                                Public speaking, trustworthy leadership, critical thinking, and a strong presence. I bring clarity and confidence to every challenge.
                            </p>
                        </div>
                    </div>

                    {/* Diverse Expertise */}
                    <div>
                        <div className="size-10 p-2 bg-purple-50 border border-purple-200 rounded">
                            <span className="text-xl">🎨</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-700">Full-Stack Mastery</h3>
                            <p className="text-sm text-slate-600">
                                Full-stack development, game design, mobile apps, software architecture, and 3D art. I don't just specialize—I explore everything.
                            </p>
                        </div>
                    </div>

                    {/* Build Framework First */}
                    <div>
                        <div className="size-10 p-2 bg-emerald-50 border border-emerald-200 rounded">
                            <span className="text-xl">🏗️</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-700">Structured Development</h3>
                            <p className="text-sm text-slate-600">
                                I build robust frameworks first, then craft experiences page by page. This ensures smooth UX and minimal bugs.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                            <span className="text-xl">🎓</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-700">Data Science Foundation</h3>
                            <p className="text-sm text-slate-600">
                                BS in Data Science and Application from IIT Madras. Currently pursuing advanced studies while building in the real world.
                            </p>
                        </div>
                    </div>

                    {/* Learning Philosophy */}
                    <div>
                        <div className="size-10 p-2 bg-orange-50 border border-orange-200 rounded">
                            <span className="text-xl">🚀</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-700">Learn by Building</h3>
                            <p className="text-sm text-slate-600">
                                I get bored with theory alone. I learn by applying knowledge immediately in real projects. This drives innovation and depth.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div>
                        <div className="size-10 p-2 bg-rose-50 border border-rose-200 rounded">
                            <span className="text-xl">✨</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-700">Making Education Accessible</h3>
                            <p className="text-sm text-slate-600">
                                Leading a team to make tech education free for everyone. Building exactly what we envision, step by step.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};