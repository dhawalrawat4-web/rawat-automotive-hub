import { useEffect, useRef, useState } from "react";
import { BarChart3, TrendingUp, Target, Zap, Award, Users } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    project: "PROJECT CHKDIN",
    subtitle: "High-Efficiency Lead Generation Prototype",
    objective: "Achieve maximum lead yield with minimal spend",
    metrics: [
      { label: "Cost Per Lead", value: "₹28" },
      { label: "Total Leads", value: "2,250+" },
      { label: "Lead Value", value: "₹63 Cr+" },
    ],
    engineering: "Aerodynamic Funnel Design: Google Search Ads + LinkedIn InMail Synergy",
    category: "LEAD GENERATION",
    icon: Target,
  },
  {
    id: 2,
    project: "PROJECT VELOCITY",
    subtitle: "Organic Reach Amplification System",
    objective: "Maximize brand visibility without paid spend",
    metrics: [
      { label: "Organic Reach", value: "3M+" },
      { label: "Engagement Lift", value: "143%" },
      { label: "Follower Growth", value: "5X" },
    ],
    engineering: "Content Velocity Engine: Data-Driven Storytelling + Community Activation",
    category: "BRAND AWARENESS",
    icon: TrendingUp,
  },
  {
    id: 3,
    project: "PROJECT APEX",
    subtitle: "Multi-Channel Revenue Accelerator",
    objective: "Optimize ROAS across all digital channels",
    metrics: [
      { label: "ROAS", value: "5X" },
      { label: "Budget Optimized", value: "₹60L/Yr" },
      { label: "Channels", value: "8+" },
    ],
    engineering: "Precision Targeting Matrix: ABM + Programmatic + Trade Marketing Integration",
    category: "REVENUE OPTIMIZATION",
    icon: Zap,
  },
];

export const PerformanceSection = () => {
  const [activeCase, setActiveCase] = useState(0);
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
      id="performance"
      ref={sectionRef}
      className="relative py-32 bg-secondary/30 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`max-w-4xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <BarChart3 size={20} className="text-primary" />
            <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
              TELEMETRY & DIAGNOSTICS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Test Drive
            <span className="text-primary"> Reports</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Performance data from real-world deployments. Each project represents 
            a complete systems test under demanding market conditions.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div
          className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 font-display text-xs tracking-[0.15em] font-semibold transition-all duration-300 ${
                activeCase === index
                  ? "bg-primary text-primary-foreground glow-red"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Panel - Project Info */}
          <div className="bg-card border border-border p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = caseStudies[activeCase].icon;
                return <Icon size={24} className="text-primary" />;
              })()}
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                PERFORMANCE REVIEW
              </span>
            </div>

            <h3 className="font-display text-3xl font-bold text-foreground mb-2">
              {caseStudies[activeCase].project}
            </h3>
            <p className="font-body text-lg text-primary mb-8">
              {caseStudies[activeCase].subtitle}
            </p>

            <div className="space-y-6">
              <div>
                <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-2">
                  OBJECTIVE
                </span>
                <p className="font-body text-foreground">
                  {caseStudies[activeCase].objective}
                </p>
              </div>

              <div>
                <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-2">
                  THE ENGINEERING
                </span>
                <p className="font-body text-muted-foreground">
                  {caseStudies[activeCase].engineering}
                </p>
              </div>
            </div>

            <button className="mt-10 px-6 py-3 border border-primary text-primary font-display text-xs tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              VIEW FULL DIAGNOSTIC REPORT →
            </button>
          </div>

          {/* Right Panel - Metrics */}
          <div className="bg-card border border-border">
            <div className="border-b border-border p-6">
              <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                PERFORMANCE METRICS
              </span>
            </div>

            <div className="grid gap-[1px] bg-border">
              {caseStudies[activeCase].metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="bg-card p-8 group hover:bg-secondary/50 transition-colors duration-300"
                >
                  <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-3">
                    {metric.label.toUpperCase()}
                  </span>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Bar */}
            <div className="p-6 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">
                  OVERALL PERFORMANCE SCORE
                </span>
                <span className="font-display text-sm text-primary font-bold">98%</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
