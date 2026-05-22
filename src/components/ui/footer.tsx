
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-headline font-bold tracking-[0.2em] uppercase leading-none">
                Arcitan
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-body mt-2 opacity-70">
                Restorations
              </span>
            </Link>
            <p className="text-muted-foreground font-body leading-relaxed max-w-md">
              Arcitan is a global architectural restoration and artisan foundation dedicated to the preservation of history through master craftsmanship and architectural research.
            </p>
            <p className="text-accent italic font-headline text-lg">"Reviving Heritage. Crafting the Future."</p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Mission", href: "/mission" },
                { name: "Projects", href: "/projects" },
                { name: "Services", href: "/services" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">Connect</h4>
            <ul className="space-y-4">
              {[
                { name: "Journal", href: "/journal" },
                { name: "Partnerships", href: "#" },
                { name: "Contact", href: "/contact" },
                { name: "Foundation", href: "#" },
                { name: "Archives", href: "#" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground tracking-widest">
            &copy; {new Date().getFullYear()} ARCITAN FOUNDATION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
            <Link href="#" className="hover:text-accent">Press Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
