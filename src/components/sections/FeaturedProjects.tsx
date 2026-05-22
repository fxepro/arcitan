
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Historic Church Restorations",
      desc: "Preserving sacred spaces through structural restoration, artisan detailing, and historical conservation.",
      img: PlaceHolderImages.find(i => i.id === "project-church")?.imageUrl
    },
    {
      title: "Heritage Building Conservation",
      desc: "Revitalizing public landmarks and culturally significant architecture for modern use.",
      img: PlaceHolderImages.find(i => i.id === "project-heritage")?.imageUrl
    },
    {
      title: "Monument Preservation",
      desc: "Protecting monuments and civic architecture from structural and environmental degradation.",
      img: PlaceHolderImages.find(i => i.id === "project-monument")?.imageUrl
    },
    {
      title: "Contemporary Artisan Architecture",
      desc: "Designing new spaces inspired by timeless architectural traditions and modern needs.",
      img: PlaceHolderImages.find(i => i.id === "project-contemporary")?.imageUrl
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">Portfolio of Preservation</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline">Featured Projects</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden relative mb-6">
                <Image
                  src={project.img || ""}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="historic building"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none">View Case Study</Button>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-headline group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="outline" className="border-primary rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
