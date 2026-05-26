
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-restoration");

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Architectural Restoration"}
          fill
          priority
          className="object-cover brightness-[0.4]"
          data-ai-hint="cathedral restoration"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        <div className="absolute inset-0 blueprint-overlay opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <span className="inline-block text-accent uppercase tracking-[0.5em] text-xs font-bold animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Architecture Meets Artisanship
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Reviving the World's <br />
              <span className="italic">Architectural Heritage</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Arcitan restores historic architecture through artisanal craftsmanship, architectural research, and sustainable restoration practices — preserving the beauty and stories of the past for future generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-10 text-[11px] uppercase tracking-[0.2em] font-bold">
              Explore Our Mission
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-10 text-[11px] uppercase tracking-[0.2em] font-bold bg-transparent">
              View Restoration Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white rotate-90 mb-4 origin-center">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
}
