import { MapPin, Phone, MessageCircle } from "lucide-react";

const navItems = [
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    href: "https://maps.google.com/?q=Motiganj+Chauraha,Domariyaganj,Uttar+Pradesh+272194",
    target: "_blank",
  },
  {
    id: "call",
    icon: Phone,
    label: "Call",
    href: "tel:09811113182",
    target: undefined,
    featured: true,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919811113182?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Shahnaii%20Marriage%20Hall",
    target: "_blank",
  },
];

export function RoyalTrioNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[95] md:hidden flex"
      style={{
        background: "rgba(5, 5, 5, 0.97)",
        borderTop: "1px solid rgba(212, 175, 55, 0.25)",
        backdropFilter: "blur(20px)",
      }}
      data-testid="royal-trio-nav"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.target ? "noopener noreferrer" : undefined}
            className="flex-1 flex flex-col items-center justify-center py-4 gap-1 transition-all duration-200 active:opacity-70"
            style={
              item.featured
                ? {
                    background: "#D4AF37",
                    color: "#050505",
                  }
                : {
                    color: "rgba(212, 175, 55, 0.7)",
                  }
            }
            data-testid={`link-trio-${item.id}`}
          >
            <Icon className="w-5 h-5" />
            <span
              className="text-[9px] tracking-widest uppercase"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
