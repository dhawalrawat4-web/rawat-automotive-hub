import { useState, useEffect, useRef } from "react";
import { Rocket, Target, TrendingUp, Users, Check, ArrowRight } from "lucide-react";

const challenges = [
  {
    id: "launch",
    title: "Launch New Product",
    description: "Introducing a new vehicle or product line to market",
    icon: Rocket,
    color: "primary",
  },
  {
    id: "awareness",
    title: "Boost Brand Awareness",
    description: "Increasing visibility and recognition in target markets",
    icon: TrendingUp,
    color: "accent",
  },
  {
    id: "leads",
    title: "Generate High-Value Leads",
    description: "Building a pipeline of qualified B2B opportunities",
    icon: Target,
    color: "primary",
  },
  {
    id: "engagement",
    title: "Improve Customer Engagement",
    description: "Deepening relationships with existing customers",
    icon: Users,
    color: "accent",
  },
];

const packages: Record<string, { skills: string[]; caseStudies: string[]; approach: string }> = {
  launch: {
    skills: ["Go-to-Market Strategy", "PR & Communications", "Digital Campaign Management", "Event Marketing"],
    caseStudies: ["Project APEX - Multi-Channel Launch", "Trade Show Activation"],
    approach: "Full-throttle launch strategy combining digital reach with high-impact trade presence.",
  },
  awareness: {
    skills: ["Content Strategy", "Social Media Marketing", "Influencer Partnerships", "Brand Storytelling"],
    caseStudies: ["Project VELOCITY - 3M+ Organic Reach", "143% Engagement Lift Campaign"],
    approach: "Content velocity engine designed to maximize organic visibility without heavy ad spend.",
  },
  leads: {
    skills: ["ABM Strategy", "Performance Marketing", "Marketing Automation", "Lead Scoring"],
    caseStudies: ["Project CHKDIN - ₹28 CPL", "₹63 Cr Lead Pipeline Generated"],
    approach: "Precision-targeted funnel architecture with focus on qualified, high-value prospects.",
  },
  engagement: {
    skills: ["CRM Strategy", "Email Marketing", "Community Building", "Customer Success"],
    caseStudies: ["Customer Retention Program", "Loyalty Campaign Architecture"],
    approach: "Relationship-first strategy to deepen engagement and drive repeat business.",
  },
};

export const ConfiguratorSection = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
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

  const selectedPackage = selectedChallenge ? packages[selectedChallenge] : null;

  return (
    <section
      id="testdrive"
      ref={sectionRef}
      className="relative py-32 bg-secondary/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
              INTERACTIVE CONFIGURATOR
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Configure Your
            <span className="text-primary"> Solution</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Select your marketing challenge and discover the tailored performance 
            package designed to accelerate your results.
          </p>
        </div>

        {/* Challenge Selector */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              onClick={() => setSelectedChallenge(challenge.id)}
              className={`p-6 border text-left transition-all duration-300 group ${
                selectedChallenge === challenge.id
                  ? "bg-primary border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <challenge.icon
                size={28}
                className={`mb-4 transition-colors duration-300 ${
                  selectedChallenge === challenge.id
                    ? "text-primary-foreground"
                    : "text-primary"
                }`}
              />
              <h3
                className={`font-display text-sm font-bold mb-2 transition-colors duration-300 ${
                  selectedChallenge === challenge.id
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {challenge.title}
              </h3>
              <p
                className={`font-body text-xs transition-colors duration-300 ${
                  selectedChallenge === challenge.id
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {challenge.description}
              </p>
            </button>
          ))}
        </div>

        {/* Performance Package */}
        {selectedPackage && (
          <div
            className={`bg-card border border-border transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary animate-pulse" />
                <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                  RECOMMENDED PERFORMANCE PACKAGE
                </span>
              </div>
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                TAILORED CONFIGURATION
              </span>
            </div>

            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {/* Skills */}
              <div className="p-8">
                <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-6">
                  PERFORMANCE FEATURES
                </span>
                <div className="space-y-3">
                  {selectedPackage.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <Check size={16} className="text-primary" />
                      <span className="font-body text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div className="p-8">
                <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-6">
                  PROVEN TRACK RECORD
                </span>
                <div className="space-y-4">
                  {selectedPackage.caseStudies.map((study) => (
                    <div key={study} className="p-4 bg-secondary/50">
                      <span className="font-body text-sm text-foreground">{study}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div className="p-8">
                <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground block mb-6">
                  ENGINEERING APPROACH
                </span>
                <p className="font-body text-muted-foreground mb-6">
                  {selectedPackage.approach}
                </p>
                <button className="w-full py-3 bg-primary text-primary-foreground font-display text-xs tracking-[0.15em] font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                  SCHEDULE TEST DRIVE
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedPackage && (
          <div className="border border-dashed border-border p-12 text-center">
            <p className="font-body text-muted-foreground">
              Select a challenge above to see your customized performance package
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
