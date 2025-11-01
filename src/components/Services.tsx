import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Signature Cut",
    description: "Premium haircut with hot towel treatment and scalp massage",
    price: "$45"
  },
  {
    title: "Beard Sculpting",
    description: "Professional beard trim, shape, and conditioning treatment",
    price: "$35"
  },
  {
    title: "Royal Shave",
    description: "Traditional straight razor shave with premium products",
    price: "$40"
  },
  {
    title: "Executive Package",
    description: "Complete grooming experience: cut, shave, and facial",
    price: "$95"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Our Services
        </h2>
        <p className="text-muted-foreground text-lg mb-12 text-center">
          Premium grooming services tailored for the modern gentleman
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-accent/30 hover:border-accent transition-all">
              <CardHeader>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-accent">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
