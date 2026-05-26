
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 bg-primary text-white overflow-hidden text-center">
      <div className="absolute inset-0 blueprint-overlay opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-headline">The Future Deserves Its Past</h2>
          <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed">
            Some buildings are more than structures. They are sacred expressions of history, craftsmanship, and civilization. Arcitan exists to ensure they endure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold">
              Partner With Arcitan
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold bg-transparent">
              Support Preservation
            </Button>
          </div>
          
          <div className="pt-10">
            <button className="text-[11px] uppercase tracking-widest text-white/50 hover:text-accent transition-colors">
              Explore Restoration Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
