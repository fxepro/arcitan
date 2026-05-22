
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Philosophy } from "@/components/sections/Philosophy";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FutureVision } from "@/components/sections/FutureVision";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      
      {/* Home Page Mission Snippet */}
      <section className="py-24 bg-white border-y relative">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-6">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-headline mb-8">Preserving History Through Architecture</h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
            We believe architecture is more than infrastructure. It is memory, identity, and human expression 
            made permanent. Arcitan exists to restore endangered historic structures and train the next generation of artisans.
          </p>
          <a href="/mission" className="text-[11px] uppercase tracking-widest font-bold text-accent hover:underline">
            Read Our Full Mission Statement
          </a>
        </div>
      </section>

      <Services />
      <Philosophy />
      <FeaturedProjects />
      <FutureVision />
      <FinalCTA />
    </>
  );
}
