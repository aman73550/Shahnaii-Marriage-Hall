import { useEffect, useRef, useState } from "react";

export function LuxuryCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      ringPosRef.current = {
        x: ringPosRef.current.x + (posRef.current.x - ringPosRef.current.x) * 0.1,
        y: ringPosRef.current.y + (posRef.current.y - ringPosRef.current.y) * 0.1,
      };

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseover", onHoverStart);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseover", onHoverStart);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  return (
    <>
      <style>{`body { cursor: none !important; } a, button, [role="button"] { cursor: none !important; }`}</style>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-2 h-2 rounded-full transition-all duration-200"
          style={{
            background: "#D4AF37",
            boxShadow: "0 0 8px rgba(212, 175, 55, 0.8)",
            transform: isHovering ? "scale(2)" : "scale(1)",
          }}
        />
      </div>
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-10 h-10 rounded-full border transition-all duration-300"
          style={{
            borderColor: isHovering ? "rgba(212, 175, 55, 0.9)" : "rgba(212, 175, 55, 0.4)",
            transform: isHovering ? "scale(1.5)" : "scale(1)",
          }}
        />
      </div>
    </>
  );
}
