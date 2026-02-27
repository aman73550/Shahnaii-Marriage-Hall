import { useEffect, useRef, useState } from "react";
import { MapPin, Phone } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1519167758481-83f29c8a4f7c?w=1920&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
  "https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=1920&q=80",
];

export function ImperialHero() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
      data-testid="imperial-hero"
    >
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-2000"
          style={{ opacity: i === currentImg ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover animate-ken-burns"
            style={{ transformOrigin: "center center" }}
          />
        </div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.45) 35%, rgba(5,5,5,0.88) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-6"
            style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
          >
            Motiganj Chauraha · Domariyaganj
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none"
            style={{
              fontFamily: "Cinzel Decorative, serif",
              background: "linear-gradient(135deg, #D4AF37 0%, #F5E27A 35%, #C0C0C0 55%, #D4AF37 80%, #E8CC6A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              textShadow: "none",
              filter: "drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))",
            }}
            data-testid="text-hero-title"
          >
            Shahnaii
          </h1>

          <h2
            className="text-xl md:text-2xl lg:text-3xl font-light mb-2"
            style={{
              fontFamily: "Cinzel, serif",
              color: "#FCFBF7",
              letterSpacing: "0.1em",
            }}
          >
            Marriage Hall
          </h2>

          <div className="w-32 h-px mx-auto my-8" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

          <p
            className="text-lg md:text-xl mb-2 italic"
            style={{ fontFamily: "Playfair Display, serif", color: "#E8E4D9" }}
          >
            Where Grandeur Meets Celebration.
          </p>

          <p
            className="text-xs tracking-[0.3em] uppercase mb-12"
            style={{ color: "rgba(212, 175, 55, 0.7)", fontFamily: "Montserrat, sans-serif" }}
          >
            Since Over Two Decades of Excellence
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="tel:09811113182"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300"
              style={{
                fontFamily: "Montserrat, sans-serif",
                background: "#D4AF37",
                color: "#050505",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E8CC6A";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4AF37";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
              data-testid="link-hero-call"
            >
              <Phone className="w-4 h-4" />
              Book Your Date
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase border transition-all duration-300"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#D4AF37",
                borderColor: "rgba(212, 175, 55, 0.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(212, 175, 55, 0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
              data-testid="link-hero-explore"
            >
              Explore the Venue
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className="transition-all duration-300"
            style={{
              width: i === currentImg ? "2rem" : "0.5rem",
              height: "2px",
              background: i === currentImg ? "#D4AF37" : "rgba(212, 175, 55, 0.3)",
            }}
            data-testid={`button-hero-slide-${i}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden md:flex items-center gap-2">
        <MapPin className="w-3 h-3" style={{ color: "#D4AF37" }} />
        <span
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(252, 251, 247, 0.5)", fontFamily: "Montserrat, sans-serif" }}
        >
          Domariyaganj, UP
        </span>
      </div>
    </section>
  );
}
