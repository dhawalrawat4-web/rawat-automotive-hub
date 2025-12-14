export const Footer = () => {
  return (
    <footer className="bg-carbon border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">R</span>
            </div>
            <div>
              <span className="font-display text-xs font-bold tracking-[0.3em] text-foreground">
                RAWAT
              </span>
              <span className="font-display text-xs font-light tracking-[0.2em] text-primary ml-1">
                M1
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-body text-sm text-muted-foreground text-center">
            Engineered for Impact. Designed for Growth.
          </p>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">
              © 2024 DHAWAL RAWAT
            </span>
            <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground mx-2">
              •
            </span>
            <span className="font-display text-[10px] tracking-[0.2em] text-primary">
              BRAND ACCELERATOR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
