import ShapeHero from "@/components/kokonutui/shape-hero";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full">
      <ShapeHero
        title1="Hi, I'm Dialga"
        title2="Developer"
        subtitle="Full-stack developer crafting beautiful & functional web experiences."
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="/about" aria-label="Go to about section">
          <svg className="w-6 h-6 text-black/30 dark:text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
