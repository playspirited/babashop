import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="text-foreground text-xl font-bold">XanBP</div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-accent transition-colors">
            Services
          </a>
          <a href="#gallery" className="text-foreground hover:text-accent transition-colors">
            Gallery
          </a>
          <a href="#book" className="text-foreground hover:text-accent transition-colors">
            Book Now
          </a>
        </div>

        <Button 
          variant="outline" 
          className="bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
          asChild
        >
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
