import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Linkedin, FileDown, Send, Calendar } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Test drive request received! I'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-secondary/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
              SCHEDULE CONSULTATION
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Book a
            <span className="text-primary"> Test Drive</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Ready to accelerate your marketing performance? Let's discuss how 
            the Rawat M1 can be configured for your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border">
              <div className="p-6 border-b border-border">
                <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                  REQUEST FORM
                </span>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <label className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block mb-2">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block mb-2">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell me about your marketing challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.15em] font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 glow-red"
                >
                  SUBMIT REQUEST
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-card border border-border">
                <div className="p-6 border-b border-border">
                  <span className="font-display text-xs tracking-[0.3em] text-primary font-semibold">
                    QUICK ACTIONS
                  </span>
                </div>

                <div className="divide-y divide-border">
                  <a
                    href="mailto:dhawal@example.com"
                    className="flex items-center gap-4 p-6 group hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Mail
                        size={20}
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block">
                        EMAIL
                      </span>
                      <span className="font-body text-foreground">dhawal@example.com</span>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 group hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Linkedin
                        size={20}
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block">
                        LINKEDIN
                      </span>
                      <span className="font-body text-foreground">Connect on LinkedIn</span>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-6 group hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Phone
                        size={20}
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground block">
                        PHONE
                      </span>
                      <span className="font-body text-foreground">+91 98765 43210</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Download Spec Sheet */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <FileDown size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">
                      Technical Spec Sheet
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Download the complete specifications document (Resume/CV)
                    </p>
                    <button className="px-6 py-2 border border-primary text-primary font-display text-xs tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      DOWNLOAD PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Schedule Call */}
              <div className="bg-primary/10 border border-primary/30 p-8">
                <div className="flex items-start gap-4">
                  <Calendar size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">
                      Prefer a Live Demo?
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Schedule a 30-minute call to discuss your specific requirements.
                    </p>
                    <button className="px-6 py-2 bg-primary text-primary-foreground font-display text-xs tracking-[0.15em] font-semibold hover:bg-primary/90 transition-all duration-300">
                      SCHEDULE CALL
                    </button>
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
