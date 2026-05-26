import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const services: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  pillars: { heading: string; body: string }[];
  quote: string;
  cta: string;
}> = {
  restoration: {
    title: "Restoration & Preservation",
    subtitle: "Returning buildings to their original glory",
    intro:
      "We undertake the careful, methodical restoration of churches, cathedrals, civic halls, heritage monuments, and culturally significant architecture worldwide. Every project begins with exhaustive archival research and structural diagnostics before a single stone is touched.",
    pillars: [
      { heading: "Structural Stabilisation", body: "Arresting decay at its source — consolidating foundations, reinforcing load-bearing masonry, and waterproofing historic fabric without altering its character." },
      { heading: "Material Authenticity", body: "We source lime mortars, natural stone, and traditional renders that are chemically and visually compatible with original construction." },
      { heading: "Decorative Conservation", body: "Plasterwork, carved stone, wrought iron, stained glass — each element is conserved in-situ wherever possible, replaced only when structurally necessary." },
      { heading: "Heritage Documentation", body: "Every intervention is photographically and technically documented, contributing to the permanent archive of each building." },
    ],
    quote: "A restored building is not simply repaired — it is given another century.",
    cta: "Discuss a Restoration Project",
  },
  craftsmanship: {
    title: "Artisan Craftsmanship",
    subtitle: "The human hand at the heart of every structure",
    intro:
      "Arcitan's artisan division brings together master craftspeople in stonework, timber framing, decorative plasterwork, leadwork, and traditional masonry. We operate on the principle that no machine replicates the precision, care, and intuition of a trained human hand.",
    pillars: [
      { heading: "Limestone Carving", body: "Hand-finished capitals, cornices, tracery, and sculptural elements carved to match or complement existing historic fabric." },
      { heading: "Historic Masonry", body: "Structural lime mortar pointing, ashlar repair, rubble consolidation, and dry-stone rebuilding using traditional techniques." },
      { heading: "Timber Framing", body: "Traditional mortise-and-tenon joinery, green oak framing, and the conservation of historic roof structures." },
      { heading: "Specialist Leadwork", body: "Heritage roofing, guttering, and decorative lead casting for ecclesiastical and civic buildings." },
    ],
    quote: "Craftsmanship is time made visible.",
    cta: "Enquire About Artisan Services",
  },
  research: {
    title: "Architectural Research",
    subtitle: "Knowledge that underpins every decision",
    intro:
      "Sound restoration is impossible without deep historical understanding. Our research division conducts archival investigations, materials analysis, structural surveys, and heritage impact assessments that give every project a rigorous intellectual foundation.",
    pillars: [
      { heading: "Archival Investigation", body: "Tracing original architects, builders, materials suppliers, and construction sequences through historical records, drawings, and photographs." },
      { heading: "Materials Analysis", body: "Laboratory analysis of mortars, pigments, stone, and timber to identify original specifications and guide like-for-like replacement." },
      { heading: "Structural Survey", body: "Comprehensive condition reports, crack monitoring, ground-penetrating radar surveys, and photogrammetric documentation." },
      { heading: "Heritage Consulting", body: "Expert advisory for planning authorities, conservation officers, private owners, and international heritage bodies." },
    ],
    quote: "To restore well, one must first understand deeply.",
    cta: "Request a Heritage Consultation",
  },
  sustainable: {
    title: "Sustainable Restoration",
    subtitle: "Longevity rooted in respect for nature",
    intro:
      "True sustainability in architecture is not a trend — it is the original principle of building to last. Arcitan integrates modern environmental engineering with traditional building methods, ensuring that restored structures perform well into the next century.",
    pillars: [
      { heading: "Natural Materials", body: "Lime, timber, natural stone, and clay — materials that breathe, self-regulate moisture, and age gracefully without chemical dependency." },
      { heading: "Passive Performance", body: "Improving thermal mass, natural ventilation, and daylighting using strategies drawn from the building's own historical logic." },
      { heading: "Minimal Intervention", body: "The most sustainable action is always to preserve what exists. We intervene only where necessary, reducing embodied carbon at every step." },
      { heading: "Longevity by Design", body: "Buildings restored with authentic materials and methods outlast those renovated with synthetic substitutes — by generations." },
    ],
    quote: "The greenest building is always the one already standing.",
    cta: "Explore Sustainable Restoration",
  },
  bespoke: {
    title: "Bespoke Architectural Design",
    subtitle: "New structures worthy of lasting centuries",
    intro:
      "Not all of Arcitan's work is restoration. We design new commissions — private residences, civic buildings, chapels, and cultural institutions — that draw on the principles of classical architecture and are built to the same uncompromising standard as our restoration work.",
    pillars: [
      { heading: "Classical Proportion", body: "Designs rooted in enduring principles of harmony, hierarchy, and human scale — architecture that feels inevitable rather than arbitrary." },
      { heading: "Natural Materials Throughout", body: "Stone, lime render, timber, and hand-made brick. No synthetic cladding. No disposable finishes. Only materials that improve with age." },
      { heading: "Master Craftsman Delivery", body: "Each bespoke project is executed by our own artisan teams, ensuring that the integrity of the design carries through to every detail." },
      { heading: "Future Heritage", body: "We design with the conviction that today's building should be worth restoring in two hundred years. That ambition shapes every decision." },
    ],
    quote: "We do not design buildings for today. We design for centuries.",
    cta: "Begin a Design Commission",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];
  if (!service) notFound();

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-[11px] uppercase tracking-widest font-bold mb-10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="max-w-3xl space-y-4">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">
              {service.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-headline">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[#F5EFE6]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {service.pillars.map((pillar) => (
              <div key={pillar.heading} className="border-l-2 border-accent pl-8 space-y-3">
                <h3 className="text-xl font-headline">{pillar.heading}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-2xl md:text-3xl font-headline italic mb-16">
            &ldquo;{service.quote}&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold"
            >
              <Link href="/contact">{service.cta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold bg-transparent"
            >
              <Link href="/">Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
