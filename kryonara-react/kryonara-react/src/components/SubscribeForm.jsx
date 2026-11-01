import { useState } from "react";
import { CONFIG } from "../config.js";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const fallback = () => {
    const subject = encodeURIComponent("Subscribe me to Kryonara updates");
    const body = encodeURIComponent("Please add this email to your updates list: " + email);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    setMsg("Your email app should open. Send the message to finish subscribing.");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg("Please enter a valid email address.");
      return;
    }
    if (CONFIG.subscribeUrl) {
      const fd = new FormData();
      fd.append("email", email);
      fetch(CONFIG.subscribeUrl, { method: "POST", body: fd, mode: "no-cors" })
        .then(() => { setMsg("Thank you. You are subscribed."); setEmail(""); })
        .catch(fallback);
    } else {
      fallback();
    }
  };

  return (
    <form id="subform" noValidate onSubmit={submit}>
      <label className="sr" htmlFor="subemail">Email address</label>
      <input id="subemail" type="email" required placeholder="you@example.com" autoComplete="email"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn" type="submit">Subscribe</button>
      <p id="submsg" role="status">{msg}</p>
    </form>
  );
}
