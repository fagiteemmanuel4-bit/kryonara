import { CONFIG } from "./config.js";

export const mail = (subject) =>
  `mailto:${CONFIG.email}` + (subject ? `?subject=${encodeURIComponent(subject)}` : "");

export const wa = () => `https://wa.me/${CONFIG.whatsapp}`;

export const applyProps = (key) => {
  const url = CONFIG[key];
  if (url) return { href: url, target: "_blank", rel: "noopener" };
  if (key === "indeed") return { href: mail("Application"), style: { display: "none" } };
  return { href: mail("Application: Social Media and Content Intern") };
};
