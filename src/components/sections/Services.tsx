"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ChevronRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Restoration & Preservation",
      desc: "Careful restoration of churches, monuments, civic buildings, and culturally significant architecture.",
      img: PlaceHolderImages?.find(i => i.id === "service-restoration")?.imageUrl
    },
    {
      title: "Artisan Craftsmanship",
      desc: "Stonework, woodwork, masonry, decorative restoration, and handcrafted architectural detailing.",
      img: PlaceHolderImages?.find(i => i.id === "service-craftsmanship")?.imageUrl
    },
    {
      title: "Architectural Research",
      desc: "Historical studies, preservation documentation, structural analysis, and heritage consulting.",
      img: PlaceHolderImages?.find(i => i.id === "service-research")?.imageUrl
    },
    {
      title: "Sustainable Restoration",
      desc: "Combining traditional building methods with modern sustainability and resilience practices.",
      img: PlaceHolderImages?.find(i => i.id === "project-monument")?.imageUrl
    },
    {
      title: "Bespoke Architectural Design",
      desc: "Designing timeless structures inspired by classical architecture and enduring craftsmanship.",
      img: PlaceHolderImages?.find(i => i.id === "project-contemporary")?.imageUrl
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-overlay opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline">What We Do</h2>
            <p className="text-white/60 font-body leading-relaxed text-lg">
              We approach every structure as a living witness to history. Our multidisciplinary team combines 
              academic rigor with artisanal mastery to deliver uncompromising results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.title} 
              className="group relative overflow-hidden border border-white/10 p-8 transition-all duration-500 hover:border-accent/50"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-6xl font-headline italic">0{idx + 1}</span>
              </div>
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-headline group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{service.desc}</p>
                
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform">
                  Explore Service <ChevronRight className="w-4 h-4 text-accent" />
                </button>
              </div>

              {/* Hover Image Reveal */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                {service.img && (
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover grayscale"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
