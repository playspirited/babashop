import barber1 from "@/assets/gallery/barber1.jpg.jpg";
import barber2 from "@/assets/gallery/barber2.jpg.jpg";
import barber3 from "@/assets/gallery/barber3.jpg.jpg";
import barber4 from "@/assets/gallery/barber4.jpg.jpg";
import barber5 from "@/assets/gallery/barber5.jpg.jpg";
import barber6 from "@/assets/gallery/barber6.jpg.jpg";

const Gallery = () => {
  const galleryImages = [barber1, barber2, barber3, barber4, barber5, barber6];

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
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square bg-muted border border-accent/30 hover:border-accent transition-all rounded-lg overflow-hidden group"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
