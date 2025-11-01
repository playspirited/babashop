import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BookSection = () => {
  return (
    <section id="book" className="py-20 px-8">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Book Your Appointment
        </h2>
        <p className="text-muted-foreground text-lg mb-12 text-center">
          Experience luxury grooming at its finest
        </p>
        
        <div className="border-2 border-accent p-8 rounded-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+252 XX XXX XXXX" 
                  className="bg-input border-border text-foreground"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service" className="text-foreground">Select Service</Label>
              <Select>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cut">Signature Cut</SelectItem>
                  <SelectItem value="beard">Beard Sculpting</SelectItem>
                  <SelectItem value="shave">Royal Shave</SelectItem>
                  <SelectItem value="package">Executive Package</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground">Preferred Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground">Preferred Time</Label>
                <Input 
                  id="time" 
                  type="time" 
                  className="bg-input border-border text-foreground"
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
            >
              Confirm Booking
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
