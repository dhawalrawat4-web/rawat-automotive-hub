import { useEffect, useRef, useState } from "react";
import { MapPin, Award, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const journey = [
  {
    location: "Mumbai",
    title: "Origin Point",
    description: "Where the journey began. Building the foundation in marketing fundamentals.",
    icon: MapPin,
  },
  {
    location: "Coimbatore",
    title: "KGISL Guest Lecturer",
    description: "Pit stop to train the next generation of marketing engineers.",
    icon: GraduationCap,
  },
  {
    location: "Global Campaigns",
    title: "Current Destination",
    description: "Leading B2B marketing initiatives across manufacturing and SaaS sectors.",
    icon: Briefcase,
  },
];

const achievements = [
  { value: "6+", label: "Years Experience" },
  { value: "₹63Cr+", label: "Pipeline Generated" },
  { value: "90%ile", label: "CAT Score" },
  { value: "3M+", label: "Organic Reach" },
];

export const DriverSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="driver"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bio */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Award size={20} className="text-primary" />
              <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                THE DRIVER
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Dhawal
              <span className="text-primary"> Rawat</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg">
              A precision-tuned marketing strategist with 6+ years of experience 
              navigating the complex terrain of B2B marketing. Specialized in 
              manufacturing, SaaS, and automotive sectors.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary" />
                <span className="font-body text-foreground">
                  Multi-channel strategy architect
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary" />
                <span className="font-body text-foreground">
                  Data-driven decision maker (CAT 90%ile)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary" />
                <span className="font-body text-foreground">
                  Cross-functional team leader
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-border mb-10">
              {achievements.map((stat) => (
                <div key={stat.label} className="bg-card p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.15em] font-semibold hover:bg-primary/90 transition-all duration-300 glow-red"
            >
              BOOK A TEST DRIVE
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right - Journey Map */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-card border border-border">
              <div className="p-6 border-b border-border">
                <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                  NAVIGATION LOG
                </span>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-border to-transparent" />

                <div className="divide-y divide-border">
                  {journey.map((stop, index) => (
                    <div
                      key={stop.location}
                      className="p-8 relative group hover:bg-secondary/30 transition-colors duration-300"
                    >
                      <div className="flex gap-8">
                        {/* Timeline Node */}
                        <div className="relative z-10">
                          <div className="w-6 h-6 bg-background border-2 border-primary flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <stop.icon size={16} className="text-primary" />
                            <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">
                              {stop.location.toUpperCase()}
                            </span>
                          </div>
                          <h4 className="font-display text-lg font-bold text-foreground mb-2">
                            {stop.title}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {stop.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-secondary/20">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">
                    CURRENTLY AVAILABLE FOR NEW ROUTES
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-display text-xs text-green-500">
                      OPEN TO OPPORTUNITIES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
