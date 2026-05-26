
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-6">Connect With Us</span>
            <h1 className="text-5xl md:text-7xl font-headline mb-8">Preserve the Legacy</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Whether you are looking to partner on a restoration project, support our foundation, or learn more about our artisan programs, we invite you to reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-headline">Contact Details</h2>
                <div className="w-12 h-[1px] bg-accent" />
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Global Headquarters</h4>
                    <p className="text-muted-foreground text-sm">12 Place de la Concorde<br />Paris, 75008, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Mail className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Email Inquiries</h4>
                    <p className="text-muted-foreground text-sm">foundation@arcitan.org<br />projects@arcitan.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Telephone</h4>
                    <p className="text-muted-foreground text-sm">+33 (0) 1 42 68 53 00</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-muted rounded-none space-y-4">
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Office Hours</h4>
                <p className="text-sm text-muted-foreground">Monday &ndash; Friday<br />09:00 &ndash; 18:00 CET</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-background border p-8 md:p-12 shadow-2xl">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold">Full Name</label>
                      <Input placeholder="Jean Dupont" className="rounded-none border-t-0 border-x-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-accent bg-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                      <Input type="email" placeholder="jean@example.com" className="rounded-none border-t-0 border-x-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-accent bg-transparent" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Subject</label>
                    <Input placeholder="Restoration Project Inquiry" className="rounded-none border-t-0 border-x-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-accent bg-transparent" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
                    <Textarea placeholder="Tell us about your project or inquiry..." className="min-h-[150px] rounded-none border-t-0 border-x-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-accent bg-transparent resize-none" />
                  </div>

                  <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
