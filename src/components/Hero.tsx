import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-[1400px] w-full border-[3px] border-accent p-12 md:p-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Luxury Barbering.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Modern style in Somalia.
          </p>
          <a href="#book">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-12 py-6 text-lg font-medium"
            >
              Book
            </Button>
          </a>
          
        </div>

        <div className="mt-16">
          <img 
            src={heroImage} 
            alt="Professional barber providing luxury grooming service"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
