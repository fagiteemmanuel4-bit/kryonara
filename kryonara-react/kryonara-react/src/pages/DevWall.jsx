import { mail } from "../components/../lib.js";

export default function DevWall() {
  return (
      <article className="view on" id="v-devwall">
        <div className="hero">
          <span className="pill">Coming soon</span>
          <h1>The Kryonara Dev Wall</h1>
          <p>A wall celebrating the best developers in Africa, with real work and verified profiles. We are still planning it, and we will share details here when it is ready.</p>
          <div className="row"><a className="btn" href={mail("Notify me about the Dev Wall")}>Get notified</a><a className="btn ghost" href="#news">Follow the news</a></div>
        </div>
        <section className="blk rv">
          <h2>A first look</h2>
          <p className="lead">Developer profile cards will appear here. This is a preview of the layout, not real people.</p>
          <div className="grid">
            <div className="card skel rv" aria-hidden="true"><i className="av"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i></div>
            <div className="card skel rv" aria-hidden="true"><i className="av"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i></div>
            <div className="card skel rv" aria-hidden="true"><i className="av"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i></div>
            <div className="card skel rv" aria-hidden="true"><i className="av"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i></div>
            <div className="card skel rv" aria-hidden="true"><i className="av"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i></div>
            <div className="card skel rv" aria-hidden="true"><i className="av"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>What we are planning</h2>
          <p className="lead">These ideas may change as we plan.</p>
          <div className="grid">
            <div className="card rv"><h3>Verified profiles</h3><p>Every developer on the wall would be checked, in line with our focus on trust.</p></div>
            <div className="card rv"><h3>Real work on show</h3><p>Profiles would link to projects and results, not just titles.</p></div>
            <div className="card rv"><h3>Seen across Africa</h3><p>A single place to find and celebrate talented developers from across the continent.</p></div>
          </div>
        </section>
      </article>
  );
}
