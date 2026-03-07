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
    <section id="projects" className="py-28 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative block rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 dark:text-white/[0.04] select-none leading-none">
                0{project.id}
              </span>

              <div className="relative flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-white/50 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white dark:bg-white/10 text-gray-600 dark:text-white/60 border border-gray-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 ml-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
