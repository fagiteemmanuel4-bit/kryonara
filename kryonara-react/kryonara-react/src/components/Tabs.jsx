import { Children, cloneElement, useRef, useState } from "react";

export default function Tabs({ labels, ariaLabel, children }) {
  const panels = Children.toArray(children);
  const [i, setI] = useState(0);
  const refs = useRef([]);
  const select = (k, focus) => {
    const j = (k + labels.length) % labels.length;
    setI(j);
    if (focus) refs.current[j]?.focus();
  };
  const onKey = (e, k) => {
    if (e.key === "ArrowRight") select(k + 1, true);
    if (e.key === "ArrowLeft") select(k - 1, true);
  };
  return (
    <div className="tabs card rv">
      <div role="tablist" aria-label={ariaLabel}>
        {labels.map((l, k) => (
          <button key={l} ref={(el) => { refs.current[k] = el; }} role="tab" type="button"
            aria-selected={k === i} tabIndex={k === i ? 0 : -1} onClick={() => select(k)} onKeyDown={(e) => onKey(e, k)}>
            {l}
          </button>
        ))}
      </div>
      {panels.map((p, k) => cloneElement(p, { key: k, hidden: k !== i }))}
    </div>
  );
}
