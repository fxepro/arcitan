
import { About } from "@/components/sections/About";
import { Philosophy } from "@/components/sections/Philosophy";

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-6">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-headline mb-8">Crafting Continuity</h1>
            <p className="text-xl text-white/70 font-body leading-relaxed">
              Arcitan was founded to bridge the gap between ancient craftsmanship and modern architectural preservation.
            </p>
          </div>
        </div>
      </section>
      <About />
      <Philosophy />
    </div>
  );
}
