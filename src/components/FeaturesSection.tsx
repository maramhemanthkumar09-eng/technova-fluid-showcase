import { Cpu, Battery, Wifi, Gamepad2, Monitor, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "12th Gen Intel i7",
    description: "Latest processor technology for ultimate performance",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Monitor,
    title: "15.6\" Full HD",
    description: "Crystal clear display with vibrant colors",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Battery,
    title: "12h Battery Life",
    description: "All-day productivity without compromise",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Gamepad2,
    title: "NVIDIA GTX",
    description: "Dedicated graphics for gaming and creativity",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Wifi,
    title: "Wi-Fi 6",
    description: "Lightning-fast wireless connectivity",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Lightweight",
    description: "Just 1.8kg for ultimate portability",
    color: "from-yellow-500 to-orange-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience cutting-edge technology designed for modern professionals, 
            students, gamers, and creators who demand excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card glass-card p-8 text-center scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 icon-glow`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Use cases section */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 glass-card feature-card">
            <div className="text-3xl mb-3">🎓</div>
            <h4 className="font-semibold mb-2">For Students</h4>
            <p className="text-sm text-muted-foreground">Portable, long battery, perfect for lectures</p>
          </div>
          <div className="text-center p-6 glass-card feature-card">
            <div className="text-3xl mb-3">💼</div>
            <h4 className="font-semibold mb-2">For Professionals</h4>
            <p className="text-sm text-muted-foreground">Multitasking powerhouse for productivity</p>
          </div>
          <div className="text-center p-6 glass-card feature-card">
            <div className="text-3xl mb-3">🎮</div>
            <h4 className="font-semibold mb-2">For Gamers</h4>
            <p className="text-sm text-muted-foreground">NVIDIA graphics, smooth gaming experience</p>
          </div>
          <div className="text-center p-6 glass-card feature-card">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="font-semibold mb-2">For Creators</h4>
            <p className="text-sm text-muted-foreground">Video editing, design, and rendering</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;