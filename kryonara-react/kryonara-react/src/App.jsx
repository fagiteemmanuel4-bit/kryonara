import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Consent from "./components/Consent.jsx";
import { pages } from "./pages/index.js";

const getRoute = () => {
  const h = (window.location.hash || "#home").slice(1);
  return pages[h] ? h : "home";
};

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const { Component, title, desc } = pages[route];

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Per-page title and description, scroll to top, and scroll-reveal.
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    window.scrollTo(0, 0);
    const els = [...document.querySelectorAll(".rv:not(.in)")];
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return undefined; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [route, title, desc]);

  // Highlight the current page in the footer.
  useEffect(() => {
    document.querySelectorAll("footer a[href^='#']").forEach((a) =>
      a.classList.toggle("on", a.getAttribute("href") === "#" + route));
  }, [route]);

  // Scroll progress bar, header shadow, and the card spotlight.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.getElementById("prog");
      if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      document.querySelector("header")?.classList.toggle("sc", window.scrollY > 8);
      document.getElementById("totop")?.classList.toggle("on", window.scrollY > 600);
    };
    const onMove = (e) => {
      const glow = document.getElementById("glow");
      if (glow && e.pointerType === "mouse") {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        glow.classList.add("on");
      }
      const card = e.target.closest?.(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div id="prog" aria-hidden="true" />
      <div id="glow" aria-hidden="true" />
      <button type="button" id="totop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{"\u2191"}</button>
      <Header />
      <main><Component /></main>
      <Footer />
      <Consent route={route} />
    </>
  );
}
