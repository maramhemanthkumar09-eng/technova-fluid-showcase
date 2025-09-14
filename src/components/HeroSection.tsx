import { Button } from "@/components/ui/button";
import { ShoppingCart, Play } from "lucide-react";
import heroImage from "@/assets/laptop-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-section">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold animate-glow-pulse">
                Limited Time Offer - 20% OFF
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">TechNova</span>
                <br />
                <span className="text-foreground">X1 Pro</span>
              </h1>
              <div className="typing-animation text-xl lg:text-2xl text-muted-foreground max-w-lg">
                Power Meets Portability – Work. Play. Create.
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl text-muted-foreground line-through">₹79,999</span>
                <span className="text-4xl font-bold gradient-text">₹63,999</span>
                <div className="price-badge">Save ₹16,000</div>
              </div>
              <p className="text-muted-foreground">Free shipping & 2-year warranty included</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-premium group">
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8 animate-delayed-slide-up">
              <div className="text-center p-4 glass-card">
                <div className="text-2xl font-bold gradient-text">12th Gen</div>
                <div className="text-sm text-muted-foreground">Intel i7</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-2xl font-bold gradient-text">12hrs</div>
                <div className="text-sm text-muted-foreground">Battery Life</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-delayed-slide-up-2">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="TechNova X1 Pro Laptop" 
                className="w-full h-auto animate-tech-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;