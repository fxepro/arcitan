
import { Services } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-background py-20 border-b">
        <div className="container mx-auto px-6 text-center">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-4">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-headline">Restoration Services</h1>
        </div>
      </section>
      <Services />
    </div>
  );
}
