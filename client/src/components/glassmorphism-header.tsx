import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Legacy", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export function GlassmorphismHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 z-[90] transition-all duration-700"
      style={{
        top: "28px",
        background: scrolled
          ? "rgba(5, 5, 5, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212, 175, 55, 0.15)" : "1px solid transparent",
      }}
      data-testid="glassmorphism-header"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex flex-col leading-none" data-testid="link-logo">
          <span
            className="text-base font-bold tracking-[0.2em] uppercase"
            style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
          >
            Shahnaii
          </span>
          <span
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(212, 175, 55, 0.6)", fontFamily: "Montserrat, sans-serif" }}
          >
            Marriage Hall
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(252, 251, 247, 0.7)" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#D4AF37"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(252, 251, 247, 0.7)"; }}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:09811113182"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border text-xs tracking-widest uppercase transition-all duration-300"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#D4AF37",
            borderColor: "rgba(212, 175, 55, 0.5)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#D4AF37";
            (e.currentTarget as HTMLElement).style.color = "#050505";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#D4AF37";
          }}
          data-testid="link-header-call"
        >
          <Phone className="w-3 h-3" />
          Book Now
        </a>
      </div>
    </header>
  );
}
