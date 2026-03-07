import HeroSection from "@/components/hero-section";
import AboutMe from "@/components/about";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import { Footer } from "@/components/footer-section";

export const metadata = {
  title: "Dialga - Full-Stack Developer Portfolio",
  description: "Welcome to my portfolio - Full-stack developer crafting beautiful & functional web experiences.",
};

export default function Home() {
  return (
    <main className="w-full bg-neutral-950">
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
