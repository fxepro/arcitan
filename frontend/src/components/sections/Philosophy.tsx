
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import Image from "next/image";

export function Philosophy() {
  const pillars = [
    { title: "Traditional Artisan Methods", desc: "Honoring techniques passed down through centuries." },
    { title: "Modern Engineering", desc: "Integrating advanced structural analysis for longevity." },
    { title: "Sustainable Materials", desc: "Using natural, ethical, and local limestone and timber." },
    { title: "Cultural Preservation", desc: "Respecting the unique heritage of every community." },
    { title: "Human-Centered Design", desc: "Architecture that inspires and serves the soul." }
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 limestone-gradient relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">The Arcitan Way</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight">Timeless Craftsmanship</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Arcitan believes great architecture should outlive generations. We restore not only structures, 
              but the stories, identities, and craftsmanship embedded within them. We refuse to compromise 
              on materials or methods, ensuring that every stone laid today stands for another millennium.
            </p>
            
            <div className="space-y-4 pt-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex flex-col border-l-2 border-accent/20 pl-6 pb-4">
                  <span className="text-sm font-bold uppercase tracking-widest">{pillar.title}</span>
                  <span className="text-xs text-muted-foreground mt-1">{pillar.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative z-10 shadow-2xl">
              <Image 
                src={PlaceHolderImages.find(i => i.id === "mission-architect")?.imageUrl || ""}
                alt="Architectural tools"
                fill
                className="object-cover"
                data-ai-hint="architectural tools"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blueprint-overlay opacity-10 pointer-events-none -z-0" />
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-primary text-white p-12 md:p-20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:divide-x divide-white/10">
            <div className="space-y-10">
              <h3 className="text-3xl font-headline text-accent italic">Arcitan Foundation</h3>
              <ul className="space-y-6">
                {[
                  "Heritage-first philosophy",
                  "Artisan craftsmanship",
                  "Historical preservation expertise",
                  "Sustainable restoration methods",
                  "Timeless architectural value"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 text-lg">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10 lg:pl-20">
              <h3 className="text-3xl font-headline opacity-50 italic">Conventional Construction</h3>
              <ul className="space-y-6">
                {[
                  "Cost-first approach",
                  "Mass production",
                  "Generic renovation",
                  "Short-term fixes",
                  "Disposable trends"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 text-lg opacity-40">
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
