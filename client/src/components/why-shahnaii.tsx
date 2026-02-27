import { useEffect, useRef, useState } from "react";
import { Users, ShieldCheck, Gem, BedDouble, Accessibility, ChefHat } from "lucide-react";

const pillars = [
  {
    id: "capacity",
    icon: Users,
    title: "Grand Capacity",
    description: "A magnificent banquet hall and lush lawn designed to accommodate between 500 to 1,000 guests in regal comfort.",
    stat: "1,000",
    statLabel: "Max Guests",
    span: "md:col-span-1",
  },
  {
    id: "value",
    icon: Gem,
    title: "Customisable Opulence",
    description: "Flexible, budget-friendly plans that allow families to experience grand dinners and multi-day functions without financial hindrance — every dream, every budget.",
    stat: "25+",
    statLabel: "Packages",
    span: "md:col-span-1",
  },
  {
    id: "hygiene",
    icon: ShieldCheck,
    title: "Impeccable Hygiene",
    description: "A strict code for cleanliness and hygiene is our core priority. Every space is maintained to the highest standards, ensuring the safety and comfort of every guest.",
    stat: "5★",
    statLabel: "Cleanliness",
    span: "md:col-span-1",
  },
  {
    id: "rooms",
    icon: BedDouble,
    title: "Seamless Hospitality",
    description: "8 on-site AC and Non-AC guest rooms and a dedicated Bridal Suite provide a comfortable sanctuary for the wedding party during those precious pre-ceremony moments.",
    stat: "8",
    statLabel: "Guest Rooms",
    span: "md:col-span-1",
  },
  {
    id: "catering",
    icon: ChefHat,
    title: "Culinary Artistry",
    description: "Our in-house catering team blends local and global flavours, creating dining experiences that guests specifically highlight in their 4+ star reviews.",
    stat: "4.8★",
    statLabel: "Food Rating",
    span: "md:col-span-1",
  },
  {
    id: "accessible",
    icon: Accessibility,
    title: "Inclusive Design",
    description: "Fully equipped with wheelchair-accessible entrances, exits, and parking — ensuring every family member can celebrate without barriers.",
    stat: "100%",
    statLabel: "Accessible",
    span: "md:col-span-1",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = pillar.icon;

  return (
    <div
      ref={ref}
      className="group relative p-6 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
        background: "#0D0D0D",
        border: "1px solid rgba(212, 175, 55, 0.1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 175, 55, 0.35)";
        (e.currentTarget as HTMLElement).style.background = "#111111";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 175, 55, 0.1)";
        (e.currentTarget as HTMLElement).style.background = "#0D0D0D";
      }}
      data-testid={`card-pillar-${pillar.id}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-2.5 border"
          style={{ borderColor: "rgba(212, 175, 55, 0.3)", background: "rgba(212, 175, 55, 0.05)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
        </div>
        <div className="text-right">
          <div
            className="text-2xl font-bold"
            style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
          >
            {pillar.stat}
          </div>
          <div
            className="text-[9px] tracking-widest uppercase"
            style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}
          >
            {pillar.statLabel}
          </div>
        </div>
      </div>

      <h3
        className="text-base font-semibold mb-3"
        style={{ fontFamily: "Cinzel, serif", color: "#FCFBF7" }}
      >
        {pillar.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(232, 228, 217, 0.55)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.8" }}
      >
        {pillar.description}
      </p>
    </div>
  );
}

export function WhyShahnaii() {
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
      id="why"
      className="py-32 px-6"
      style={{ background: "#080808" }}
      data-testid="why-shahnaii"
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
            The Pillars of Excellence
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Cinzel Decorative, serif", color: "#FCFBF7" }}
          >
            Why Shahnaii?
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(232, 228, 217, 0.55)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", letterSpacing: "0.04em" }}
          >
            Six reasons why Shahnaii has become the most trusted celebration venue in Domariyaganj — chosen by families who refuse to compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
