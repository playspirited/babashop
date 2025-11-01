const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-8 bg-muted/20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Gallery
        </h2>
        <p className="text-muted-foreground text-lg mb-12 text-center">
          Witness the art of precision grooming
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-muted border border-accent/30 hover:border-accent transition-all rounded-lg overflow-hidden group"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-card group-hover:scale-105 transition-transform">
                <span className="text-muted-foreground text-sm">Gallery Image {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
