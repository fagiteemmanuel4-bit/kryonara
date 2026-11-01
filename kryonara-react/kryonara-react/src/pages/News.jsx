import { mail } from "../components/../lib.js";

export default function News() {
  return (
      <article className="view on" id="v-news">
        <div className="hero">
          <h1>News and updates</h1>
          <p>The latest from Kryonara and Strap, in one place.</p>
        </div>
        <section className="blk">
          <div className="grid">
            <article className="card rv"><time className="when" dateTime="2026-11-01">1 November 2026</time><h3>Applications are open for the January 2027 cohort</h3><p>We are hiring social media and content creators now, and other roles open next month. Everyone hired joins one cohort that starts in January 2027. <a href="#interns">See how it works</a>.</p></article>
            <article className="card rv"><time className="when" dateTime="2026-10-31">31 October 2026</time><h3>Our new website is live</h3><p>Kryonara now has a home on the web, with pages for who we are, careers, interns, news and our policies. New intern roles open one at a time before the January 2027 cohort.</p></article>
            <article className="card rv"><time className="when" dateTime="2026-10-30">30 October 2026</time><h3>We are hiring social media and content interns</h3><p>Kryonara has opened applications for a Social Media Management and Content Creation Intern to help launch Strap. The role is remote and flexible, with performance-based pay from ₦20,000 to ₦50,000 per month. <a href="#careers">Read the role</a>.</p></article>
            <article className="card rv"><time className="when" dateTime="2026-10">October 2026</time><h3>Introducing Strap, our advanced POS system</h3><p>Strap is the first startup built inside Kryonara. It is a point-of-sale, inventory and online store platform for Nigerian shops, and it is live now with a free plan. <a href="https://storefront-flow.vercel.app" target="_blank" rel="noopener">Try Strap</a>.</p></article>
          </div>
          <div className="row" style={{marginTop:"1.4rem"}}><a className="btn" href={mail("Subscribe me to Kryonara updates")}>Get updates by email</a></div>
        </section>
      </article>
  );
}
