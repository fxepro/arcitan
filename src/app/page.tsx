
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Philosophy } from "@/components/sections/Philosophy";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FutureVision } from "@/components/sections/FutureVision";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      {/* Secondary Mission Snippet Section */}
      <section id="mission" className="py-24 bg-white border-y relative">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-6">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-headline mb-8">Preserving History Through Architecture</h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We believe architecture is more than infrastructure. It is memory, identity, and human expression 
            made permanent. Arcitan exists to restore endangered historic structures, train and support 
            skilled artisans, preserve architectural traditions, promote sustainable restoration practices, 
            and create enduring architectural works for future generations.
          </p>
        </div>
      </section>

      <Services />
      <Philosophy />
      <FeaturedProjects />
      <FutureVision />
      <FinalCTA />
      <Footer />
    </main>
  );
}
