import ProjectsSection from "@/components/projects-section";

export const metadata = {
  title: "Projects | Portfolio",
  description: "My featured projects and work",
};

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <ProjectsSection />
    </main>
  );
}
