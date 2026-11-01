import Social from "./Social.jsx";
import SubscribeForm from "./SubscribeForm.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { mail, applyProps } from "./../lib.js";

export default function Footer() {
  return (
<footer id="footer">
  <div className="fwrap">
    <div className="sub">
      <div><h2>Stay in the loop</h2><p>News about Strap, new intern roles and company progress. No spam.</p></div>
      <SubscribeForm />
    </div>
    <div className="fcols">
      <div className="fcol"><h3>Kryonara</h3><p>A Lagos-based company building technology startups on trust and verified reputation.</p><Social /></div>
      <nav className="fcol" aria-label="Company"><h3>Company</h3><a href="#home">About us</a><a href="#news">News and updates</a><a href={mail("Hello Kryonara")}>Contact us</a><a href={mail("Partnership or investment enquiry")}>Partners and investors</a></nav>
      <nav className="fcol" aria-label="Products"><h3>Products</h3><a href="#products">Strap, POS system</a><a href="https://storefront-flow.vercel.app" target="_blank" rel="noopener">Open Strap</a><a href="#products">All products</a><a href="#devwall">Dev Wall (soon)</a><span className="soon">More tools coming soon</span></nav>
      <nav className="fcol" aria-label="Careers"><h3>Careers</h3><a href="#careers">Open roles</a><a href="#interns">Interns</a><a {...applyProps("linkedin")}>Apply on LinkedIn</a><a href="#policies">Career policies</a></nav>
    </div>
    <div className="fbot"><span>© Kryonara, Lagos, Nigeria</span><span>Built on trust.</span><ThemeToggle /></div>
  </div>
</footer>
  );
}
