import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import laptopHero from "@/assets/laptop-hero.jpg";
import laptopLitebook from "@/assets/laptop-litebook.jpg";
import laptopGamerx from "@/assets/laptop-gamerx.jpg";
import laptopCreator from "@/assets/laptop-creator.jpg";

const products = [
  {
    id: 1,
    name: "TechNova X1 Pro",
    image: laptopHero,
    originalPrice: "₹79,999",
    price: "₹63,999",
    discount: "20% OFF",
    rating: 4.8,
    reviews: 2840,
    badge: "Best Seller",
    specs: ["12th Gen Intel i7", "16GB RAM", "512GB SSD", "NVIDIA GTX"],
    isMain: true
  },
  {
    id: 2,
    name: "LiteBook 14",
    image: laptopLitebook,
    price: "₹42,999",
    rating: 4.6,
    reviews: 1520,
    badge: "Compact",
    specs: ["Intel i5", "8GB RAM", "256GB SSD", "14\" Display"]
  },
  {
    id: 3,
    name: "GamerX 17",
    image: laptopGamerx,
    price: "₹99,999",
    rating: 4.9,
    reviews: 890,
    badge: "Gaming Beast",
    specs: ["Intel i9", "32GB RAM", "1TB SSD", "RTX 4070"]
  },
  {
    id: 4,
    name: "CreatorBook 15",
    image: laptopCreator,
    price: "₹84,999",
    rating: 4.7,
    reviews: 1100,
    badge: "4K Creator",
    specs: ["Intel i7", "24GB RAM", "1TB SSD", "4K Display"]
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Laptop Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect laptop for your needs, from ultraportable workhorses 
            to gaming powerhouses and creative workstations.
          </p>
        </div>

        {/* Main Featured Product */}
        <div className="mb-16 scroll-reveal">
          {products
            .filter(product => product.isMain)
            .map((product) => (
              <div key={product.id} className="relative">
                <div className="glass-card p-8 lg:p-12 product-card">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-auto animate-tech-float"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">
                          {product.discount}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <Badge variant="secondary" className="mb-4">
                          {product.badge}
                        </Badge>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">{product.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          {product.originalPrice && (
                            <span className="text-xl text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          )}
                          <span className="text-3xl font-bold gradient-text">{product.price}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {product.specs.map((spec, index) => (
                            <div key={index} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="btn-premium flex-1">
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Add to Cart
                        </Button>
                        <Button size="lg" variant="outline" className="flex-1 hover:scale-105 transition-transform">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Related Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products
            .filter(product => !product.isMain)
            .map((product, index) => (
              <div key={product.id} className="product-card glass-card p-6 scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-2xl font-bold gradient-text">{product.price}</div>
                    
                    <div className="space-y-1">
                      {product.specs.slice(0, 3).map((spec, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-premium">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;