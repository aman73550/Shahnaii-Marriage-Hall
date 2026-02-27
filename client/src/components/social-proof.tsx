import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mohammed Siraj",
    location: "Domariyaganj",
    rating: 5,
    review:
      "A good place for a wedding with all facilities. The hall was grand and beautifully decorated. Staff were very cooperative and made sure everything was perfect for our big day. Highly recommended.",
    source: "Justdial Verified",
    event: "Wedding Reception",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Gorakhpur",
    rating: 5,
    review:
      "We hosted our daughter's wedding here. The green lawn was absolutely stunning in the evening lighting. The catering team prepared outstanding dishes — a perfect blend of local and global flavours. Our guests couldn't stop talking about it.",
    source: "Google Review",
    event: "Wedding & Reception",
  },
  {
    id: 3,
    name: "Afeef Khan",
    location: "Motiganj",
    rating: 5,
    review:
      "Shahnaii has been more than a hall — it's a trusted place where comfort and quality meet affordability. They maintained exceptional cleanliness throughout. The bridal suite was luxurious and the rooms were very comfortable.",
    source: "Mandap.com Feature",
    event: "Nikaah Ceremony",
  },
  {
    id: 4,
    name: "Rajesh Gupta",
    location: "Basti",
    rating: 4,
    review:
      "Very well managed venue. Everything from parking to the banquet setup was excellent. The team is professional and attentive. My son's reception was absolutely memorable. Will definitely recommend to others.",
    source: "Justdial Verified",
    event: "Birthday Gala",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < rating ? "#D4AF37" : "transparent"}
          style={{ color: "#D4AF37" }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
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
    <div
      ref={ref}
      className="relative p-8 flex flex-col gap-4 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 120}ms`,
        background: "#0D0D0D",
        border: "1px solid rgba(212, 175, 55, 0.12)",
      }}
      data-testid={`card-testimonial-${t.id}`}
    >
      <Quote
        className="w-8 h-8 absolute top-6 right-6 opacity-10"
        style={{ color: "#D4AF37" }}
      />

      <StarRating rating={t.rating} />

      <p
        className="text-sm leading-relaxed italic flex-1"
        style={{ fontFamily: "Playfair Display, serif", color: "rgba(232, 228, 217, 0.8)", lineHeight: "1.9" }}
      >
        "{t.review}"
      </p>

      <div className="pt-4 border-t" style={{ borderColor: "rgba(212, 175, 55, 0.1)" }}>
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-sm font-semibold"
              style={{ fontFamily: "Cinzel, serif", color: "#FCFBF7" }}
            >
              {t.name}
            </p>
            <p
              className="text-[11px] tracking-wide mt-0.5"
              style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}
            >
              {t.location} · {t.event}
            </p>
          </div>
          <div
            className="px-2 py-0.5 text-[9px] tracking-widest uppercase border"
            style={{
              color: "rgba(212, 175, 55, 0.7)",
              borderColor: "rgba(212, 175, 55, 0.2)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {t.source}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialProof() {
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
      id="reviews"
      className="py-32 px-6"
      style={{ background: "#050505" }}
      data-testid="social-proof"
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
            Verified Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Cinzel Decorative, serif", color: "#FCFBF7" }}
          >
            Voices of Honour
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={5} />
            <span
              className="text-sm"
              style={{ color: "rgba(212, 175, 55, 0.7)", fontFamily: "Montserrat, sans-serif" }}
            >
              4.8 / 5.0 — Based on 100+ verified reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-4 px-8 py-4 border"
            style={{ borderColor: "rgba(212, 175, 55, 0.2)", background: "rgba(212, 175, 55, 0.03)" }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}>25+</div>
              <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}>Major Events</div>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(212, 175, 55, 0.2)" }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}>6+</div>
              <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}>Years Serving</div>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(212, 175, 55, 0.2)" }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}>4.8★</div>
              <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(212, 175, 55, 0.5)", fontFamily: "Montserrat, sans-serif" }}>Avg. Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
