import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import endorsementImage from "@/assets/hardik-endorsement.jpg";

const EndorsementSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Quote className="h-8 w-8 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Celebrity Endorsement
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="gradient-text">TechNova</span> –<br />
                <span className="text-foreground">Trusted by Champions</span>
              </h2>
              
              <blockquote className="text-xl lg:text-2xl text-muted-foreground leading-relaxed italic">
                "Performance on the field demands excellence off it too. 
                TechNova X1 Pro keeps up with my training schedules, 
                strategy analysis, and everything in between. 
                It's not just a laptop – it's my winning partner."
              </blockquote>
              
              <div className="space-y-2">
                <div className="text-xl font-semibold">Hardik Pandya</div>
                <div className="text-muted-foreground">Indian Cricket Team • All-Rounder</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-premium">
                Get Your TechNova
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                Watch Full Interview
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2Yr</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative scroll-reveal">
            <div className="relative">
              <img 
                src={endorsementImage} 
                alt="Hardik Pandya with TechNova Laptop"
                className="w-full h-auto rounded-2xl shadow-premium"
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-foreground">Trusted Choice</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-float" style={{animationDelay: '1.5s'}} />
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EndorsementSection;