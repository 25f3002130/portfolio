"use client";

import React from "react";

export default function AboutMe() {
    const cards = [
        {
            emoji: "💪",
            title: "Core Strengths",
            description: "Public speaking, trustworthy leadership, critical thinking, and a strong presence. I bring clarity and confidence to every challenge.",
            colorFrom: "from-blue-900/40",
            colorTo: "to-blue-900/20",
            borderColor: "border-blue-500/50",
            hoverBorder: "hover:border-blue-400/80",
            hoverShadow: "hover:shadow-blue-500/20",
            textColor: "text-blue-200",
            gradientFrom: "from-blue-500/10"
        },
        {
            emoji: "🎨",
            title: "Full-Stack Mastery",
            description: "Full-stack development, game design, mobile apps, software architecture, and 3D art. I don't just specialize—I explore everything.",
            colorFrom: "from-purple-900/40",
            colorTo: "to-purple-900/20",
            borderColor: "border-purple-500/50",
            hoverBorder: "hover:border-purple-400/80",
            hoverShadow: "hover:shadow-purple-500/20",
            textColor: "text-purple-200",
            gradientFrom: "from-purple-500/10"
        },
        {
            emoji: "🏗️",
            title: "Structured Development",
            description: "I build robust frameworks first, then craft experiences page by page. This ensures smooth UX and minimal bugs.",
            colorFrom: "from-emerald-900/40",
            colorTo: "to-emerald-900/20",
            borderColor: "border-emerald-500/50",
            hoverBorder: "hover:border-emerald-400/80",
            hoverShadow: "hover:shadow-emerald-500/20",
            textColor: "text-emerald-200",
            gradientFrom: "from-emerald-500/10"
        },
        {
            emoji: "🎓",
            title: "Data Science Foundation",
            description: "BS in Data Science and Application from IIT Madras. Currently pursuing advanced studies while building in the real world.",
            colorFrom: "from-indigo-900/40",
            colorTo: "to-indigo-900/20",
            borderColor: "border-indigo-500/50",
            hoverBorder: "hover:border-indigo-400/80",
            hoverShadow: "hover:shadow-indigo-500/20",
            textColor: "text-indigo-200",
            gradientFrom: "from-indigo-500/10"
        },
        {
            emoji: "🚀",
            title: "Learn by Building",
            description: "I get bored with theory alone. I learn by applying knowledge immediately in real projects. This drives innovation and depth.",
            colorFrom: "from-orange-900/40",
            colorTo: "to-orange-900/20",
            borderColor: "border-orange-500/50",
            hoverBorder: "hover:border-orange-400/80",
            hoverShadow: "hover:shadow-orange-500/20",
            textColor: "text-orange-200",
            gradientFrom: "from-orange-500/10"
        },
        {
            emoji: "✨",
            title: "Making Education Accessible",
            description: "Leading a team to make tech education free for everyone. Building exactly what we envision, step by step.",
            colorFrom: "from-rose-900/40",
            colorTo: "to-rose-900/20",
            borderColor: "border-rose-500/50",
            hoverBorder: "hover:border-rose-400/80",
            hoverShadow: "hover:shadow-rose-500/20",
            textColor: "text-rose-200",
            gradientFrom: "from-rose-500/10"
        }
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="w-full bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">About Me</h1>
                        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            I'm a creative technologist with 5+ years of experience building across full-stack, game development, software, mobile apps, and 3D art. I approach every project with leadership, critical thinking, and an unwavering commitment to quality.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br ${card.colorFrom} ${card.colorTo} ${card.borderColor} border rounded-2xl p-8 ${card.hoverBorder} transition-all duration-300 hover:shadow-lg ${card.hoverShadow}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradientFrom} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                
                                <div className="relative space-y-4">
                                    <div className="text-6xl h-16 flex items-start">
                                        {card.emoji}
                                    </div>
                                    
                                    <h3 className={`text-xl font-semibold ${card.textColor} line-clamp-2`}>
                                        {card.title}
                                    </h3>
                                    
                                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-5">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};