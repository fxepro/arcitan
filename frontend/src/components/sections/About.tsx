
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Check } from "lucide-react";

export function About() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-stone");

  const values = [
    "Historical Integrity",
    "Architectural Precision",
    "Artisan Craftsmanship",
    "Sustainable Techniques",
    "Cultural Respect",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative z-10 shadow-2xl">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt={aboutImg?.description || "Architectural detail"}
                fill
                className="object-cover"
                data-ai-hint="stone sculpture"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-12 -left-12 w-full h-full border border-accent/20 -z-0 translate-x-4 translate-y-4" />
            <div className="absolute -bottom-8 -right-8 p-12 bg-primary text-white z-20 hidden lg:block">
              <span className="text-4xl font-headline italic">18</span>
              <p className="text-[10px] uppercase tracking-widest mt-2">Active Restoration <br /> Sites Worldwide</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">Legacy of Stone</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight">
                Architecture Is Civilization Preserved In Stone
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
                Arcitan was founded with a singular vision: to protect and restore the architectural masterpieces that define cultures, communities, and generations. From historic churches and heritage monuments to artisan-crafted modern structures inspired by classical design, Arcitan blends timeless craftsmanship with advanced restoration methodologies to preserve the soul of architecture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 border-t pt-10">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
