import { useState } from "react";

const ITEMS = [
  "I have a link to my work, such as a page I manage or posts I made",
  "I can write a short, honest introduction about myself",
  "I have a phone or laptop and a stable internet connection",
  "I can give a few hours each week and meet deadlines",
  "I check my email and WhatsApp regularly",
];

export default function ReadyCheck() {
  const [on, setOn] = useState(ITEMS.map(() => false));
  const count = on.filter(Boolean).length;
  const note = count === 5 ? "You are ready. Go to the Careers page and apply."
    : count >= 3 ? "Almost there. Finish the rest, then apply." : "Start with the first item on the list.";
  return (
    <div className="card rv" id="ready" style={{ marginTop: "1rem" }}>
      <div className="meter" aria-hidden="true"><i style={{ width: `${count * 20}%` }} /></div>
      {ITEMS.map((t, k) => (
        <label className="chk" key={t}>
          <input type="checkbox" checked={on[k]} onChange={() => setOn(on.map((v, j) => (j === k ? !v : v)))} /> {t}
        </label>
      ))}
      <p id="mtxt" role="status" style={{ marginTop: ".6rem", fontWeight: 600 }}>{count} of 5 ready. {note}</p>
    </div>
  );
}
