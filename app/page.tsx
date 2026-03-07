import HeroSection from "@/components/hero-section";

export const metadata = {
  title: "Dialga - Full-Stack Developer Portfolio",
  description: "Welcome to my portfolio - Full-stack developer crafting beautiful & functional web experiences.",
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
    </main>
  );
}
