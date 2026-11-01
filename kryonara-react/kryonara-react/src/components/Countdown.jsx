import { useEffect, useState } from "react";

// Monday 4 January 2027, 00:00 in Lagos (UTC+1).
const TARGET = Date.UTC(2027, 0, 3, 23, 0, 0);
const LABELS = ["Days", "Hours", "Minutes", "Seconds"];
const parts = () => {
  const s = Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
  return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
};

export default function Countdown() {
  const [v, setV] = useState(parts);
  useEffect(() => {
    const t = setInterval(() => setV(parts()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="count" role="timer" aria-label="Countdown to 4 January 2027">
      {v.map((n, i) => (
        <div key={LABELS[i]}><b>{String(n).padStart(2, "0")}</b><small>{LABELS[i]}</small></div>
      ))}
    </div>
  );
}
