export default function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "GraphQL", "REST APIs"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"] },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0e0e0e]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            A bit about me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-white/60">
              I&apos;m a passionate full-stack developer who loves building web
              applications that are beautiful, fast, and user-friendly. I focus on
              creating scalable solutions using modern technologies.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-white/60">
              When I&apos;m not coding, you can find me contributing to open source projects,
              writing technical blogs, or exploring new technologies.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-white/60">
              I&apos;m always open to collaborating on exciting projects and connecting
              with fellow developers.
            </p>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/60 bg-gray-50 dark:bg-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
