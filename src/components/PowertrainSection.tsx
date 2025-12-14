import { useEffect, useRef, useState } from "react";
import { Settings, Wind, Flame, Cog, Users, BarChart3 } from "lucide-react";

const powertrainComponents = [
  {
    id: "intake",
    name: "AIR INTAKE",
    title: "Market & Audience Research",
    description: "CAT 90%ile data interpretation skills fuel precision targeting and market analysis.",
    icon: Wind,
    skills: ["Market Analysis", "Audience Segmentation", "Competitive Intelligence", "Data Interpretation"],
  },
  {
    id: "turbo",
    name: "TURBOCHARGER",
    title: "Creative Ideation & Storytelling",
    description: "Compressing complex ideas into high-impact narratives that accelerate engagement.",
    icon: Flame,
    skills: ["Brand Storytelling", "Creative Direction", "Content Strategy", "Campaign Ideation"],
  },
  {
    id: "combustion",
    name: "COMBUSTION CHAMBER",
    title: "Multi-Channel Execution",
    description: "Where strategy ignites into action across digital, trade, and PR channels.",
    icon: Cog,
    skills: ["Digital Marketing", "Trade Marketing", "PR Communications", "Event Management"],
  },
  {
    id: "drivetrain",
    name: "DRIVETRAIN",
    title: "Team Leadership & Collaboration",
    description: "Transferring power efficiently through cross-functional teams and stakeholders.",
    icon: Users,
    skills: ["Team Leadership", "Stakeholder Management", "Agency Coordination", "Project Management"],
  },
  {
    id: "exhaust",
    name: "EXHAUST SYSTEM",
    title: "Analytics & Optimization",
    description: "Refining outputs through continuous measurement, reporting, and iteration.",
    icon: BarChart3,
    skills: ["Performance Analytics", "ROI Tracking", "A/B Testing", "Campaign Optimization"],
  },
];

export const PowertrainSection = () => {
  const [activeComponent, setActiveComponent] = useState("intake");
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

  const activeItem = powertrainComponents.find((c) => c.id === activeComponent);

  return (
    <section
      id="powertrain"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`max-w-4xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <Settings size={20} className="text-primary" />
            <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
              ENGINEERING SPECIFICATIONS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Under the
            <span className="text-primary"> Hood</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            The precision-engineered powertrain that drives results. Each component 
            works in harmony to deliver maximum marketing performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Component Selector */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-card border border-border">
              <div className="p-6 border-b border-border">
                <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
                  POWERTRAIN COMPONENTS
                </span>
              </div>

              <div className="divide-y divide-border">
                {powertrainComponents.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setActiveComponent(component.id)}
                    className={`w-full p-6 text-left transition-all duration-300 group ${
                      activeComponent === component.id
                        ? "bg-secondary border-l-2 border-l-primary"
                        : "hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <component.icon
                        size={20}
                        className={`transition-colors duration-300 ${
                          activeComponent === component.id
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      />
                      <div>
                        <span
                          className={`font-display text-[10px] tracking-[0.2em] block mb-1 ${
                            activeComponent === component.id
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {component.name}
                        </span>
                        <span
                          className={`font-body text-sm ${
                            activeComponent === component.id
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {component.title}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Component Detail */}
          <div
            className={`lg:col-span-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {activeItem && (
              <div className="bg-card border border-border h-full">
                <div className="p-8 lg:p-12 border-b border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <activeItem.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-display text-[10px] tracking-[0.3em] text-primary block">
                        {activeItem.name}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-body text-lg text-muted-foreground">
                    {activeItem.description}
                  </p>
                </div>

                <div className="p-8 lg:p-12">
                  <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-6">
                    PERFORMANCE FEATURES
                  </span>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeItem.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 p-4 bg-secondary/50 group hover:bg-secondary transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-primary" />
                        <span className="font-body text-sm text-foreground">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Spec */}
                <div className="p-8 lg:p-12 border-t border-border bg-secondary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-1">
                        SYSTEM STATUS
                      </span>
                      <span className="font-display text-sm text-primary font-bold">
                        OPERATIONAL • OPTIMIZED
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-display text-xs text-muted-foreground">
                        ALL SYSTEMS GO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
