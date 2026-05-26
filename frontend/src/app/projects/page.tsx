
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function ProjectsPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-4">Case Studies</span>
          <h1 className="text-5xl md:text-7xl font-headline">Portfolio of Preservation</h1>
        </div>
      </section>
      <FeaturedProjects />
    </div>
  );
}
