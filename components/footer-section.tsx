'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion } from 'motion/react';
import { GithubIcon, MailIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'Home', href: '/' },
			{ title: 'About', href: '#about' },
			{ title: 'Projects', href: '#projects' },
			{ title: 'Contact', href: '#contact' },
		],
	},
	{
		label: 'Expertise',
		links: [
			{ title: 'Full-Stack Dev', href: '#about' },
			{ title: 'Game Development', href: '#about' },
			{ title: 'Mobile Apps', href: '#about' },
			{ title: '3D Art & Design', href: '#about' },
		],
	},
	{
		label: 'Tech Stack',
		links: [
			{ title: 'Next.js', href: '#' },
			{ title: 'TypeScript', href: '#' },
			{ title: 'Tailwind CSS', href: '#' },
			{ title: 'React', href: '#' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'GitHub', href: 'https://github.com/25f3002130', icon: GithubIcon },
			{ title: 'Email', href: 'mailto:hello@example.com', icon: MailIcon },
		],
	},
];

export function Footer() {
	return (
		<footer
			className="relative w-full border-t border-white/10"
			style={{ padding: "4rem clamp(2rem, 8vw, 8rem)" }}
		>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem" }}>
				{footerLinks.map((section, index) => (
					<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
						<div style={{ textAlign: index === footerLinks.length - 1 ? "right" : "left" }}>
								<h3 style={{ fontSize: "0.875rem", color: "white", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.25rem" }}>{section.label}</h3>
								<ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "1rem", color: "#94a3b8" }}>
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-white"
												style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "color 0.3s" }}
											>
												{link.icon && <link.icon className="w-4 h-4 mr-1" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
						</div>
					</AnimatedContainer>
				))}
			</div>

			<div style={{ marginTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem", textAlign: "center" }}>
				<AnimatedContainer delay={0.4}>
					<p style={{ color: "#64748b", fontSize: "0.8rem" }}>
						© 2026 Aditya. All rights reserved.
					</p>
				</AnimatedContainer>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};