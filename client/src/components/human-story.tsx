import { useEffect, useRef, useState } from "react";

const stories = [
  {
    id: 1,
    number: "01",
    title: "A Trusted Sanctuary",
    subtitle: "The Foundation",
    text: "For years, Shahnaii has been more than a hall — it's a dependable place where comfort and quality meet affordability. In the heart of Motiganj Chauraha, families from across the region have placed their most precious moments in our care.",
    cite: "Justdial Verified Review",
    imgSrc: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
  },
  {
    id: 2,
    number: "02",
    title: "Inclusive Celebrations",
    subtitle: "For Every Family",
    text: "Designed so every guest arrives, celebrates, and departs without hassle — regardless of their accessibility needs. Our fully wheelchair-accessible venue is a testament to our belief that no family member should ever be left behind.",
    cite: "Mandap.com Feature",
    imgSrc: "https://images.unsplash.com/photo-1519167758481-83f29c8a4f7c?w=800&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "Where Legacies Begin",
    subtitle: "The Shahnaii Journey",
    text: "Having hosted over 25 major events in 6 years, the hall has become a staple of the Domariyaganj community. Families return not just for the grandeur, but for the trust — knowing that their celebration will be handled with care, attention, and pride.",
    cite: "Community Legacy",
    imgSrc: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
  },
];

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 transition-all duration-1000 overflow-hidden`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${isEven ? -40 : 40}px)`,
      }}
      data-testid={`card-story-${story.id}`}
    >
      <div className="relative md:w-1/2 h-72 md:h-auto overflow-hidden">
        <img
          src={story.imgSrc}
          alt={story.title}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(30%) brightness(0.5)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isEven
              ? "linear-gradient(90deg, rgba(5,5,5,0) 60%, #0a0a0a 100%)"
              : "linear-gradient(270deg, rgba(5,5,5,0) 60%, #0a0a0a 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end p-8">
          <span
            className="text-7xl font-black leading-none opacity-15"
            style={{ fontFamily: "Cinzel Decorative, serif", color: "#D4AF37" }}
          >
            {story.number}
          </span>
        </div>
      </div>

      <div
        className="md:w-1/2 flex flex-col justify-center px-10 py-12"
        style={{ background: "#0A0A0A", borderTop: isEven ? "none" : "none" }}
      >
        <p
          className="text-[10px] tracking-[0.5em] uppercase mb-2"
          style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
        >
          {story.subtitle}
        </p>
        <h3
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ fontFamily: "Cinzel, serif", color: "#FCFBF7", lineHeight: "1.3" }}
        >
          {story.title}
        </h3>
        <div className="w-12 h-px mb-6" style={{ background: "#D4AF37" }} />
        <p
          className="text-sm leading-relaxed mb-6 italic"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "rgba(232, 228, 217, 0.7)",
            lineHeight: "2",
          }}
        >
          "{story.text}"
        </p>
        <p
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(212, 175, 55, 0.4)", fontFamily: "Montserrat, sans-serif" }}
        >
          — {story.cite}
        </p>
      </div>
    </div>
  );
}

export function HumanStory() {
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
      id="story"
      className="py-32 px-6"
      style={{ background: "#050505" }}
      data-testid="human-story"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-24 transition-all duration-1000"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(30px)" }}
        >
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-4"
            style={{ color: "#D4AF37", fontFamily: "Montserrat, sans-serif" }}
          >
            The Shahnaii Journeys
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Cinzel Decorative, serif", color: "#FCFBF7" }}
          >
            Where Legacies Begin
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(232, 228, 217, 0.55)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", letterSpacing: "0.04em" }}
          >
            Every celebration holds a story. These are the stories that define Shahnaii — told through the eyes of the families who trusted us with their most precious moments.
          </p>
        </div>

        <div className="flex flex-col gap-px" style={{ border: "1px solid rgba(212, 175, 55, 0.1)" }}>
          {stories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
