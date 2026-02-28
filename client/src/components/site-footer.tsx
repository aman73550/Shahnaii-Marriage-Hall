import { MapPin, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="py-16 px-6 border-t"
      style={{
        background: "#050505",
        borderColor: "rgba(212, 175, 55, 0.1)",
      }}
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Cinzel Decorative, serif", color: "#D4AF37" }}
              >
                Shahnaii
              </h2>
              <p
                className="text-[10px] tracking-[0.4em] uppercase mt-1"
                style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}
              >
                Marriage Hall
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(232, 228, 217, 0.45)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.8" }}
            >
              A premier luxury wedding venue in the heart of Domariyaganj — where grandeur meets celebration, and every event becomes a timeless legacy.
            </p>
          </div>

          <div>
            <h3
              className="text-xs tracking-[0.4em] uppercase mb-6"
              style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
            >
              Navigate
            </h3>
            <div className="flex flex-col gap-3">
              {["#experience", "#gallery", "#why", "#reviews", "#story", "#contact"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs tracking-wide capitalize transition-colors duration-200"
                  style={{ color: "rgba(232, 228, 217, 0.45)", fontFamily: "Montserrat, sans-serif" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(232, 228, 217, 0.45)"; }}
                >
                  {href.replace("#", "").replace("-", " ")}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-xs tracking-[0.4em] uppercase mb-6"
              style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
            >
              Connect
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=Motiganj+Chauraha,Domariyaganj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
                data-testid="link-footer-location"
              >
                <MapPin
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "rgba(212, 175, 55, 0.5)" }}
                />
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(232, 228, 217, 0.45)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7" }}
                >
                  Motiganj Chauraha, Domariyaganj,<br />Bhari, Uttar Pradesh 272194
                </span>
              </a>
              <a
                href="tel:09811113182"
                className="flex items-center gap-3"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4" style={{ color: "rgba(212, 175, 55, 0.5)" }} />
                <span
                  className="text-xs"
                  style={{ color: "rgba(232, 228, 217, 0.45)", fontFamily: "Montserrat, sans-serif" }}
                >
                  098111 13182
                </span>
              </a>
              <a
                href="https://wa.me/919811113182"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                data-testid="link-footer-whatsapp"
              >
                <MessageCircle className="w-4 h-4" style={{ color: "rgba(212, 175, 55, 0.5)" }} />
                <span
                  className="text-xs"
                  style={{ color: "rgba(232, 228, 217, 0.45)", fontFamily: "Montserrat, sans-serif" }}
                >
                  WhatsApp Concierge
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(212, 175, 55, 0.08)" }}
        >
          <p
            className="text-[11px] tracking-widest"
            style={{ color: "rgba(212, 175, 55, 0.25)", fontFamily: "Montserrat, sans-serif" }}
          >
            © {new Date().getFullYear()} Shahnaii Marriage Hall. All rights reserved.
          </p>
          <p
            className="text-[11px]"
            style={{ color: "rgba(212, 175, 55, 0.35)", fontFamily: "Montserrat, sans-serif", letterSpacing: "0.05em" }}
            data-testid="text-developer-credit"
          >
            Designed & Developed by{" "}
            <span style={{ color: "rgba(212, 175, 55, 0.55)" }}>Team Insights Pvt Ltd</span>
            {" | "}
            <a
              href="https://instagram.com/amangupta.yt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(212, 175, 55, 0.55)" }}
              data-testid="link-developer-social"
            >
              Aman Gupta (@amangupta.yt)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
