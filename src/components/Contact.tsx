import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "Mogadishu, Somalia"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+252 XX XXX XXXX"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@xanbp.com"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 9AM - 8PM"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-muted/20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-12 text-center">
          Visit us or reach out for inquiries
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 border border-accent/30 rounded-lg hover:border-accent transition-all"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            © 2025 XanBP. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
