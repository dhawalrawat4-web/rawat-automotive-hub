import { useState, useEffect } from "react";
import { Menu, X, Gauge, Navigation as NavIcon, Settings, User, Phone } from "lucide-react";

const navItems = [
  { label: "EXTERIOR", href: "#hero", icon: Gauge },
  { label: "TELEMETRY", href: "#performance", icon: NavIcon },
  { label: "POWERTRAIN", href: "#powertrain", icon: Settings },
  { label: "TEST DRIVE", href: "#testdrive", icon: NavIcon },
  { label: "THE DRIVER", href: "#driver", icon: User },
  { label: "CONTACT", href: "#contact", icon: Phone },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-sm font-bold tracking-[0.3em] text-foreground">
                RAWAT
              </span>
              <span className="font-display text-sm font-light tracking-[0.2em] text-primary ml-2">
                M1
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="font-display text-xs tracking-[0.15em] font-medium">
                  {item.label}
                </span>
                <div className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 bg-primary text-primary-foreground font-display text-xs tracking-[0.15em] font-semibold hover:bg-primary/90 transition-all duration-300 glow-red"
            >
              BOOK TEST DRIVE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon size={18} className="text-primary" />
                <span className="font-display text-sm tracking-[0.15em] font-medium">
                  {item.label}
                </span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 w-full py-3 bg-primary text-primary-foreground font-display text-sm tracking-[0.15em] font-semibold"
            >
              BOOK TEST DRIVE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
