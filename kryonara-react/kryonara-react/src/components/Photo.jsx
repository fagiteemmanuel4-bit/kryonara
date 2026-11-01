import { CONFIG } from "../config.js";

export default function Photo() {
  return (
    <div className="photo" role="img" aria-label="Photo of Emmanuel, founder of Kryonara">
      {CONFIG.photo ? <img src={CONFIG.photo} alt="Emmanuel, founder of Kryonara" /> : "E"}
    </div>
  );
}
