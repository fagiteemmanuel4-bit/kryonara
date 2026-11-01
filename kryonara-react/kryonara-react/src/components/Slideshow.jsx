import { Children, cloneElement, useEffect, useRef, useState } from "react";

export default function Slideshow({ children }) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const calm = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const go = (k) => setI(((k % n) + n) % n);

  useEffect(() => {
    if (calm || paused || !n) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(t);
  }, [calm, paused, n, i]);

  return (
    <div className="show" role="region" aria-roledescription="carousel" aria-label="Kryonara awareness slideshow"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - startX.current; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); }}>
      <div className="track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s, k) => cloneElement(s, { key: k, "aria-hidden": k !== i }))}
      </div>
      <div className="ctl">
        <button type="button" aria-label="Previous slide" onClick={() => go(i - 1)}>{"\u2039"}</button>
        <div className="pips">
          {slides.map((_, k) => (
            <button key={k} type="button" className={k === i ? "on" : ""} aria-label={`Go to slide ${k + 1}`} onClick={() => go(k)} />
          ))}
        </div>
        <button type="button" aria-label="Next slide" onClick={() => go(i + 1)}>{"\u203a"}</button>
      </div>
    </div>
  );
}
