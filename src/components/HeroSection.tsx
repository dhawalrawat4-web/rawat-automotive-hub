import { useEffect, useState } from "react";
import { ChevronDown, Zap, Target, TrendingUp, Layers } from "lucide-react";

const specs = [
  { label: "ENGINE", value: "6-CYLINDER", detail: "6+ Years Experience", icon: Zap },
  { label: "HORSEPOWER", value: "3M+", detail: "Organic Reach | 143% Engagement", icon: TrendingUp },
  { label: "TORQUE", value: "₹63 Cr+", detail: "Lead Value Generated", icon: Target },
  { label: "TRANSMISSION", value: "MULTI-CHANNEL", detail: "Digital, Trade, ABM", icon: Layers },
  { label: "EFFICIENCY", value: "ROAS 5", detail: "₹60L/Year Optimized", icon: Zap },
  { label: "TERRAIN", value: "ALL-TERRAIN", detail: "Manufacturing, SaaS, Automotive", icon: Target },
];

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToPerformance = () => {
    const element = document.querySelector("#performance");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />
      
      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Model Badge */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary animate-pulse" />
              <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                2024 MODEL
              </span>
            </div>
            <div className="h-[1px] w-20 bg-border" />
            <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
              PERFORMANCE SERIES
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
              THE RAWAT
            </span>
            <span className="block font-display text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-gradient-performance leading-none mt-2">
              M1
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`mt-8 font-body text-lg sm:text-xl text-muted-foreground max-w-xl transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-foreground font-medium">Engineered for Impact.</span>{" "}
            <span className="text-primary">Designed for Growth.</span>
          </p>

          <p
            className={`mt-4 font-body text-sm text-muted-foreground max-w-lg transition-all duration-1000 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Built for B2B Marketing's Most Demanding Terrain. A precision-engineered 
            solution for automotive marketing challenges.
          </p>

          {/* Specs Grid */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-border max-w-4xl transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className="bg-card p-6 group hover:bg-secondary transition-colors duration-300"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <spec.icon size={14} className="text-primary" />
                  <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground font-medium">
                    {spec.label}
                  </span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {spec.value}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-1">
                  {spec.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToPerformance}
            className={`mt-16 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="font-display text-[10px] tracking-[0.3em]">EXPLORE TELEMETRY</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Side Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 pr-8">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground rotate-90 origin-center whitespace-nowrap">
          BRAND ACCELERATOR
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary via-transparent to-transparent" />
      </div>
    </section>
  );
};
