
export default function JournalPage() {
  const articles = [
    { title: "The Secrets of Lime Mortar", date: "Oct 24, 2025", category: "Research" },
    { title: "Restoring the Spire: A Cathedral's Journey", date: "Sep 12, 2025", category: "Case Study" },
    { title: "Why Traditional Craftsmanship Matters in 2025", date: "Aug 05, 2025", category: "Philosophy" },
    { title: "Sourcing Sustainable Limestone from the Loire Valley", date: "Jul 18, 2025", category: "Sourcing" },
  ];

  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-background py-20 border-b">
        <div className="container mx-auto px-6 text-center">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold block mb-4">The Archive</span>
          <h1 className="text-5xl md:text-7xl font-headline">Arcitan Journal</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article) => (
              <div key={article.title} className="group border-b pb-12 cursor-pointer">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-accent">{article.category}</span>
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-3xl font-headline group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Exploring the intricate relationship between historical materials and modern longevity...
                  </p>
                  <button className="text-[10px] uppercase tracking-[0.3em] font-bold pt-4 group-hover:translate-x-2 transition-transform">
                    Read Article &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="border border-primary rounded-none h-14 px-12 text-[11px] uppercase tracking-[0.2em] font-bold">
              Load More Entries
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
