import { useEffect, useRef, useState } from "react";
import { Building2, TreePine, PartyPopper } from "lucide-react";

const wings = [
  {
    id: "banquet",
    icon: Building2,
    title: "Grand Banquet Hall",
    subtitle: "Interior Elegance",
    description:
      "A magnificent air-conditioned banquet hall draped in luxury — from crystal chandeliers to silk-lined walls. Seats up to 700 guests for grand dinners, Nikaah ceremonies, and receptions.",
    features: ["700+ Guest Capacity", "Crystal Chandelier Lighting", "Full A/C Setup", "Premium Sound System"],
    accent: "from-amber-900/20 to-transparent",
    imgSrc: "https://img.weddingbazaar.com/photos/pictures/007/126/949/new_large/ss20230618-6907-k5nf0i.jpg",
  },
  {
    id: "lawn",
    icon: TreePine,
    title: "Lush Green Lawn",
    subtitle: "Open-Air Grandeur",
    description:
      "An expansive manicured lawn under open skies — perfect for evening receptions, Mehndi ceremonies, and outdoor gatherings. Accommodates up to 1,000 guests in natural splendour.",
    features: ["1,000 Guest Capacity", "Manicured Landscape", "Evening Lighting", "Outdoor Stage Setup"],
    accent: "from-emerald-900/20 to-transparent",
    imgSrc: "https://img.weddingbazaar.com/photos/pictures/007/126/952/new_large/ss20230618-6907-vreczg.jpg",
  },
  {
    id: "party",
    icon: PartyPopper,
    title: "Elite Party Venue",
    subtitle: "Intimate Celebrations",
    description:
      "A sophisticated boutique space for birthdays, anniversaries, and social gatherings. Designed to deliver a premium experience without compromise — budget-friendly luxury at its finest.",
    features: ["Flexible Configuration", "Décor Packages", "Catering Available", "AV & Lighting"],
    accent: "from-purple-900/20 to-transparent",
    imgSrc: "https://img.weddingbazaar.com/photos/pictures/007/126/948/new_large/ss20230618-6907-18uy71i.jpg",
  },
];

function WingCard({ wing, index }: { wing: typeof wings[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = wing.icon;

  return (
    <div
      ref={ref}
      className="group relative flex flex-col overflow-hidden transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 150}ms`,
        background: "#0D0D0D",
        border: "1px solid rgba(212, 175, 55, 0.12)",
      }}
      data-testid={`card-wing-${wing.id}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={wing.imgSrc}
          alt={wing.title}
          className="w-full h-full object-cover transition-opacity duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, #0D0D0D 100%)" }} />
        <div
          className="absolute top-4 left-4 p-2 border"
          style={{ background: "rgba(5, 5, 5, 0.8)", borderColor: "rgba(212, 175, 55, 0.4)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p
          className="text-[10px] tracking-[0.4em] uppercase mb-2"
          style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
        >
          {wing.subtitle}
        </p>
        <h3
          className="text-xl font-semibold mb-3"
          style={{ fontFamily: "Cinzel, serif", color: "#FCFBF7" }}
        >
          {wing.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "rgba(232, 228, 217, 0.65)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.8" }}
        >
          {wing.description}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-2">
          {wing.features.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#D4AF37" }} />
              <span
                className="text-[11px] tracking-wide"
                style={{ color: "rgba(212, 175, 55, 0.7)", fontFamily: "Montserrat, sans-serif" }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-6 pt-4 border-t transition-colors duration-300"
          style={{ borderColor: "rgba(212, 175, 55, 0.1)" }}
        >
          <a
            href="tel:09811113182"
            className="text-[11px] tracking-[0.3em] uppercase transition-colors duration-300"
            style={{ color: "rgba(212, 175, 55, 0.6)", fontFamily: "Montserrat, sans-serif" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#D4AF37"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(212, 175, 55, 0.6)"; }}
            data-testid={`link-wing-${wing.id}-enquire`}
          >
            Enquire Now →
          </a>
        </div>
      </div>
    </div>
  );
}

export function ExperienceWings() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-32 px-6"
      style={{ background: "#050505" }}
      data-testid="experience-wings"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-20 transition-all duration-1000"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(30px)" }}
        >
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-4"
            style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
          >
            The Experience
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Cinzel Decorative, serif", color: "#FCFBF7" }}
          >
            Three Wings of Grandeur
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(232, 228, 217, 0.55)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", letterSpacing: "0.04em" }}
          >
            Three distinct spaces, one unified vision of perfection. Each wing crafted to honour your most cherished moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wings.map((wing, i) => (
            <WingCard key={wing.id} wing={wing} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
