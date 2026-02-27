import { Star, Gem, Sparkles } from "lucide-react";

const tickerItems = [
  { icon: <Sparkles className="w-3 h-3" />, text: "Wedding Season Bookings Open — Reserve Your Date Today" },
  { icon: <Gem className="w-3 h-3" />, text: "Grand Banquet Hall • Lush Green Lawn • Elite Party Venue" },
  { icon: <Star className="w-3 h-3" fill="currentColor" />, text: "Hosting 500 to 1,000 Guests with Impeccable Service" },
  { icon: <Sparkles className="w-3 h-3" />, text: "8 AC & Non-AC Guest Rooms • Dedicated Bridal Suite" },
  { icon: <Gem className="w-3 h-3" />, text: "Budget-Friendly Luxury — Motiganj Chauraha, Domariyaganj" },
  { icon: <Star className="w-3 h-3" fill="currentColor" />, text: "Wheelchair Accessible • Full Facility Venue" },
];

export function GoldTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] overflow-hidden"
      style={{ background: "#D4AF37" }}
      data-testid="gold-ticker"
    >
      <div className="flex items-center animate-ticker-scroll whitespace-nowrap" style={{ width: "max-content" }}>
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#050505", fontFamily: "Montserrat, sans-serif" }}
          >
            <span style={{ color: "#050505" }}>{item.icon}</span>
            {item.text}
            <span className="mx-4 opacity-40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
