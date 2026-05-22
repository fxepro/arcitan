
import { FutureVision } from "@/components/sections/FutureVision";

export default function MissionPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">The Foundation</span>
            <h1 className="text-5xl md:text-7xl font-headline">The Arcitan Mission</h1>
            <div className="w-24 h-[1px] bg-accent mx-auto" />
            <p className="text-2xl text-muted-foreground font-body leading-relaxed italic">
              "We believe architecture is the most enduring record of human civilization. To lose a building is to lose a chapter of our collective soul."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-headline">Preservation & Protection</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our primary goal is the restoration of endangered historic structures. We identify buildings of significant cultural, historical, or architectural value that are at risk of being lost to time, neglect, or modern development.
              </p>
              <ul className="space-y-4">
                {[
                  "Structural stabilization of ancient masonry",
                  "Restoration of hand-carved details",
                  "Preservation of original materials and textures",
                  "Documenting architectural heritage for archives"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm uppercase tracking-widest font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-headline">Education & Artisan Training</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Restoration is impossible without the skills of the past. Arcitan establishes apprentice programs to ensure that techniques like limestone carving, traditional timber framing, and historic masonry are passed to a new generation.
              </p>
              <div className="p-8 bg-muted border-l-4 border-accent">
                <p className="text-sm font-body italic">
                  "The tools change, but the touch of the artisan remains the heartbeat of architecture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FutureVision />
    </div>
  );
}
