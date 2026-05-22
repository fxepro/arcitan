
export function FutureVision() {
  const goals = [
    "International restoration initiatives",
    "Artisan apprenticeship programs",
    "Architectural preservation research",
    "Digital heritage archives",
    "Educational workshops",
    "Cultural partnerships",
    "Restoration technology innovation"
  ];

  return (
    <section className="py-24 lg:py-40 bg-white relative">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold block mb-6">Global Impact</span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline mb-10">Building a Global Restoration Movement</h2>
        <p className="text-xl text-muted-foreground font-body leading-relaxed mb-16">
          Arcitan aims to become a global architectural restoration and artisan foundation supporting international restoration initiatives, artisan apprenticeship programs, architectural preservation research, digital heritage archives, educational workshops, cultural partnerships, and restoration technology innovation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {goals.map((goal) => (
            <span 
              key={goal} 
              className="px-6 py-3 border border-border text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-colors cursor-default"
            >
              {goal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
