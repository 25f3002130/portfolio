export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app powered by AI with smart responses and conversation history.",
      tags: ["React", "Node.js", "WebSocket", "OpenAI"],
      link: "#",
    },
    {
      id: 3,
      title: "Task Management Tool",
      description: "Collaborative task manager with drag-and-drop, real-time sync, and team features.",
      tags: ["Next.js", "Prisma", "Tailwind", "Firebase"],
      link: "#",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard for tracking business metrics and KPIs.",
      tags: ["React", "D3.js", "TypeScript", "REST API"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative block rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-white/50 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
