import { useEffect, useRef, useState } from "react";
import { ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/951/new_large/ss20230618-6907-11ivpvt.jpg",
    alt: "Shahnaii Marriage Hall - Wide View",
    label: "Venue Overview",
  },
  {
    id: 2,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/955/new_large/ss20230618-6907-1nqzh4p.jpg",
    alt: "Shahnaii Marriage Hall - Facade & Entrance",
    label: "Grand Entrance",
  },
  {
    id: 3,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/949/new_large/ss20230618-6907-k5nf0i.jpg",
    alt: "Shahnaii Marriage Hall - Main Hall Setup",
    label: "Main Hall",
  },
  {
    id: 4,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/948/new_large/ss20230618-6907-18uy71i.jpg",
    alt: "Shahnaii Marriage Hall - Night Lighting",
    label: "Night Ambience",
  },
  {
    id: 5,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/953/new_large/ss20230618-6907-1ovjf3u.jpg",
    alt: "Shahnaii Marriage Hall - Interior View",
    label: "Interior",
  },
  {
    id: 6,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/952/new_large/ss20230618-6907-vreczg.jpg",
    alt: "Shahnaii Marriage Hall - Exterior View",
    label: "Exterior",
  },
  {
    id: 7,
    src: "https://img.weddingbazaar.com/photos/pictures/007/126/950/new_large/ss20230618-6907-ilyv93.jpg",
    alt: "Shahnaii Marriage Hall - Venue Grounds",
    label: "Venue Grounds",
  },
  {
    id: 8,
    src: "https://img.mandap.com/photos/pictures/34938/orginal/profile_pic_ss20230618-6907-11ivpvt.jpg",
    alt: "Shahnaii Marriage Hall - Profile View",
    label: "Shahnaii Hall",
  },
];

function GalleryItem({ img, index }: { img: typeof galleryImages[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      className="relative overflow-hidden cursor-pointer transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.95)",
        transitionDelay: `${index * 80}ms`,
        minHeight: "200px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid={`img-gallery-${img.id}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-all duration-700"
        loading="lazy"
        style={{
          filter: hovered ? "grayscale(0%) brightness(0.7)" : "grayscale(20%) brightness(0.85)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
        style={{
          background: hovered ? "rgba(5, 5, 5, 0.55)" : "rgba(5, 5, 5, 0.1)",
          border: hovered ? "2px solid rgba(212, 175, 55, 0.6)" : "2px solid transparent",
          inset: hovered ? "8px" : "0px",
        }}
      >
        <ZoomIn
          className="w-6 h-6 mb-2 transition-all duration-300"
          style={{
            color: "#D4AF37",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.5)",
          }}
        />
        <span
          className="text-[10px] tracking-[0.4em] uppercase transition-all duration-300"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#D4AF37",
            opacity: hovered ? 1 : 0,
          }}
        >
          {img.label}
        </span>
      </div>
    </div>
  );
}

export function GallerySection() {
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
      id="gallery"
      className="py-32 px-6"
      style={{ background: "#080808" }}
      data-testid="gallery-section"
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
            The Gallery
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Cinzel Decorative, serif", color: "#FCFBF7" }}
          >
            A Visual Legacy
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(232, 228, 217, 0.55)", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", letterSpacing: "0.04em" }}
          >
            Each frame is a story — of love, laughter, and legacies written in the grandeur of Shahnaii.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <GalleryItem key={img.id} img={img} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919811113182?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Shahnaii%20Marriage%20Hall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase border transition-all duration-300"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#D4AF37",
              borderColor: "rgba(212, 175, 55, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#D4AF37";
              (e.currentTarget as HTMLElement).style.color = "#050505";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#D4AF37";
            }}
            data-testid="link-gallery-whatsapp"
          >
            Request Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
