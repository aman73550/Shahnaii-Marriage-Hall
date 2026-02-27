import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export function ConciergeMap() {
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

  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "#080808" }}
      data-testid="concierge-map"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="text-center mb-20">
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-4"
              style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
            >
              Find Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Cinzel Decorative, serif", color: "#FCFBF7" }}
            >
              Your Journey Begins Here
            </h2>
            <div className="w-20 h-px mx-auto" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ border: "1px solid rgba(212, 175, 55, 0.15)" }}>
            <div className="lg:col-span-2 relative" style={{ minHeight: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8!2d83.05!3d27.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996fa3a73ab75a5%3A0x4a9b21c29d9e9e80!2sDomariyaganj%2C%20Uttar%20Pradesh%20272194!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(92%) contrast(83%)",
                  position: "absolute",
                  inset: 0,
                  minHeight: "450px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shahnaii Marriage Hall Location"
                data-testid="iframe-map"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: "1px solid rgba(212, 175, 55, 0.15)" }}
              />
            </div>

            <div
              className="flex flex-col gap-8 p-10"
              style={{ background: "#0D0D0D" }}
            >
              <div>
                <h3
                  className="text-xl font-semibold mb-6"
                  style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                >
                  Contact & Location
                </h3>
                <div className="h-px mb-6" style={{ background: "rgba(212, 175, 55, 0.15)" }} />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className="p-2 border flex-shrink-0 mt-0.5"
                    style={{ borderColor: "rgba(212, 175, 55, 0.3)", background: "rgba(212, 175, 55, 0.05)" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}
                    >
                      Address
                    </p>
                    <a
                      href="https://maps.google.com/?q=Motiganj+Chauraha,Domariyaganj,UP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed"
                      style={{ color: "#E8E4D9", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7" }}
                      data-testid="link-map-address"
                    >
                      Motiganj Chauraha,<br />
                      Domariyaganj, Bhari,<br />
                      Uttar Pradesh 272194
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-2 border flex-shrink-0 mt-0.5"
                    style={{ borderColor: "rgba(212, 175, 55, 0.3)", background: "rgba(212, 175, 55, 0.05)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:09811113182"
                      className="text-sm"
                      style={{ color: "#E8E4D9", fontFamily: "Montserrat, sans-serif" }}
                      data-testid="link-map-phone"
                    >
                      098111 13182
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-2 border flex-shrink-0 mt-0.5"
                    style={{ borderColor: "rgba(212, 175, 55, 0.3)", background: "rgba(212, 175, 55, 0.05)" }}
                  >
                    <Clock className="w-4 h-4" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}
                    >
                      Office Hours
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#E8E4D9", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7" }}
                    >
                      9:00 AM – 9:00 PM<br />
                      All Days
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="tel:09811113182"
                  className="flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    background: "#D4AF37",
                    color: "#050505",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#E8CC6A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#D4AF37"; }}
                  data-testid="link-contact-call"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919811113182?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20Shahnaii%20Marriage%20Hall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase border transition-all duration-300"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#D4AF37",
                    borderColor: "rgba(212, 175, 55, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(212, 175, 55, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                  data-testid="link-contact-whatsapp"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
