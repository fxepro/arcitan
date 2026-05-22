
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Arcitan Restorations | Reviving Heritage. Crafting the Future.',
  description: 'Arcitan is an architectural artisanal foundation focused on restoring historic architecture around the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
