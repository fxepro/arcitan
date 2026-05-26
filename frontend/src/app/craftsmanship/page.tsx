
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function CraftsmanshipPage() {
  const craftImg = PlaceHolderImages.find(img => img.id === "service-craftsmanship");
  const stoneImg = PlaceHolderImages.find(img => img.id === "about-stone");

  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-white py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">Artisan Mastery</span>
              <h1 className="text-5xl md:text-7xl font-headline leading-tight">The Hand Behind the Stone</h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                At Arcitan, we believe that the soul of architecture lies in the human touch. Our artisans are masters of traditional methods, using tools and techniques that have remained largely unchanged for centuries.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-headline">Limestone Carving</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Hand-finished decorative elements</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-headline">Historic Masonry</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Structural lime mortar & stone repair</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-headline">Timber Framing</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Traditional joinery & conservation</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-headline">Leadwork</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Specialist heritage roofing</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative z-10 shadow-2xl">
                <Image
                  src={craftImg?.imageUrl || ""}
                  alt="Artisan tools"
                  fill
                  className="object-cover"
                  data-ai-hint="artisan tools"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 z-20 shadow-2xl">
                <Image
                  src={stoneImg?.imageUrl || ""}
                  alt="Stone carving"
                  fill
                  className="object-cover border-8 border-white"
                  data-ai-hint="stone carving"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-headline mb-8">Supporting the Next Generation</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-12">
            The greatest threat to architectural heritage is the loss of skill. Arcitan's foundation invests heavily in apprenticeship programs, training the next generation of master artisans in disappearing crafts.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold">
            Join the Foundation
          </button>
        </div>
      </section>
    </div>
  );
}
