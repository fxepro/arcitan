
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    { name: "Projects", href: "#projects" },
    { name: "Restoration Services", href: "#services" },
    { name: "Artisan Craftsmanship", href: "#craftsmanship" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex flex-col items-center"
        >
          <span className="text-2xl font-headline font-bold tracking-[0.2em] uppercase leading-none">
            Arcitan
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-body mt-1 opacity-70 group-hover:text-accent transition-colors">
            Restorations
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-widest font-semibold hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button variant="outline" className="border-primary rounded-none px-6 text-[11px] uppercase tracking-widest h-10 hover:bg-primary hover:text-primary-foreground">
            Partnerships
          </Button>
        </div>

        {/* Mobile Nav Trigger */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 lg:hidden flex flex-col items-center justify-center space-y-8 transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-headline tracking-widest uppercase hover:text-accent"
          >
            {link.name}
          </Link>
        ))}
        <Button 
          variant="outline" 
          className="border-primary rounded-none px-12 py-6 text-sm uppercase tracking-widest"
          onClick={() => setIsOpen(false)}
        >
          Partnerships
        </Button>
      </div>
    </nav>
  );
}
