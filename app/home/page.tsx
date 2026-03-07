import HeroSection from "@/components/hero-section";

export const metadata = {
  title: "Home | Portfolio",
  description: "Welcome to my portfolio",
};

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
    </main>
  );
}
