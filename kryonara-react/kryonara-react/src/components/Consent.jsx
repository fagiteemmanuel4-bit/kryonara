import { useEffect, useRef, useState } from "react";

export default function Consent({ route }) {
  const [done, setDone] = useState(() => {
    try { return localStorage.getItem("kry_accept") === "1"; } catch (e) { return false; }
  });
  const [ok, setOk] = useState(false);
  const box = useRef(null);
  const sheet = route === "policies";

  useEffect(() => {
    document.body.style.overflow = !done && !sheet ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [done, sheet]);
  useEffect(() => { if (!done && !sheet) box.current?.focus(); }, [done, sheet]);

  if (done) return null;
  const accept = () => {
    try { localStorage.setItem("kry_accept", "1"); } catch (e) { /* storage unavailable */ }
    setDone(true);
  };
  return (
    <div id="consent" className={sheet ? "sheet" : ""} role="dialog" aria-modal="true" aria-labelledby="ctitle">
      <div className="cbox">
        <span className="when">Welcome to Kryonara</span>
        <h2 id="ctitle">Before you continue</h2>
        <p>Please review how we handle your information and how our hiring works.</p>
        <ul>
          <li>We never ask applicants or interns for money.</li>
          <li>We use your details only for hiring and updates you ask for, and we do not sell them.</li>
          <li>Applying for a role does not guarantee an offer.</li>
        </ul>
        <label className="chk">
          <input ref={box} type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} /> I have read and accept the career policies, website privacy and website terms.
        </label>
        <div className="row">
          <button className="btn" type="button" disabled={!ok} onClick={accept}>Accept and continue</button>
          <button className="btn ghost" type="button" onClick={() => { window.location.hash = "#policies"; }}>Read the full policies</button>
        </div>
      </div>
    </div>
  );
}
