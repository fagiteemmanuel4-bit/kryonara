import Tabs from "../components/Tabs.jsx";
import ReadyCheck from "../components/ReadyCheck.jsx";
import { applyProps } from "../components/../lib.js";

export default function Interns() {
  return (
      <article className="view on" id="v-interns">
        <div className="hero">
          <h1>Interns at Kryonara</h1>
          <p>Our internship programme gives young Africans real work on real products. This page explains when intern roles are posted, how to apply, and what life as a Kryonara intern looks like.</p>
          <div className="row"><a className="btn" {...applyProps("company")}>Follow us for new posts</a><a className="btn ghost" href="#careers">See the current role</a></div>
        </div>

        <section className="blk rv">
          <h2>When we post</h2>
          <div className="card dark rv" style={{margin:"1rem 0"}}><p className="big">We hire by role. Social media and content creators are open now, and other roles open next month.</p></div>
          <p className="lead">Everyone hired joins the same cohort in January 2027, so onboarding happens once. Each role stays open for about a month. Follow Kryonara on LinkedIn or check this page so you don’t miss the next one.</p>
          <div className="grid">
            <div className="card step rv"><h3>Each role opens for a month</h3><p>We post the role on LinkedIn and Indeed, and update this page.</p></div>
            <div className="card step rv"><h3>First days after posting</h3><p>You apply and fill in our short form. We review portfolios and shortlist.</p></div>
            <div className="card step rv"><h3>Following week</h3><p>Shortlisted applicants complete a small task, then the best are invited to a short video call.</p></div>
            <div className="card step rv"><h3>Trial and offer</h3><p>A few candidates start a short trial. Final interns receive a written offer. The whole process takes about three weeks.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>The road to January 2027</h2>
          <p className="lead">We hire early, so interns arrive to a product people already know, with training ready.</p>
          <div className="grid">
            <div className="card step rv"><h3>November 2026</h3><p>Applications are open for social media and content creators.</p></div>
            <div className="card step rv"><h3>December 2026</h3><p>Applications open for other roles. We shortlist, run tasks and send conditional offers.</p></div>
            <div className="card step rv"><h3>Before January</h3><p>We share our progress publicly and prepare training materials.</p></div>
            <div className="card step rv"><h3>January 2027</h3><p>Cohort one starts on the first or second Monday, with one onboarding for everyone.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Open now</h2>
          <div className="card rv" style={{marginTop:"1rem"}}><h3>Social Media Management and Content Creation Intern</h3><p>Remote and flexible, with performance-based pay from ₦20,000 to ₦50,000 per month. Work on Strap, starting with cohort one in January 2027.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn" href="#careers">Read the full role</a></div></div>
        </section>

        <section className="blk rv">
          <h2>Roles you may see</h2>
          <p className="lead">We post only what we need that month, so the list changes. These are the kinds of roles interns often fill.</p>
          <div className="grid">
            <div className="card rv"><h3>Social media management</h3><p>Plan, schedule and publish content, and track results.</p></div>
            <div className="card rv"><h3>Content creation</h3><p>Write posts and articles, and make graphics and short videos.</p></div>
            <div className="card rv"><h3>Community management</h3><p>Reply to comments and messages and keep the audience engaged.</p></div>
            <div className="card rv"><h3>Design and video editing</h3><p>Create visuals, carousels and short clips for our startups.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Your first month</h2>
          <p className="lead">What to expect, week by week. Tap a week to see more.</p>
          <Tabs labels={["Week 1", "Week 2", "Week 3", "Week 4"]} ariaLabel="Your first month"><div className="panel" role="tabpanel"><div><h3>Get set up</h3><p>Meet the team, get access to the content calendar and chat group, and agree your targets in writing.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><line className="ic" x1="40" y1="100" x2="280" y2="100" /><circle className="ia" cx="40" cy="100" r="16" /><circle className="id" cx="120" cy="100" r="16" /><circle className="id" cx="200" cy="100" r="16" /><circle className="id" cx="280" cy="100" r="16" /></svg></div><div className="panel" role="tabpanel"><div><h3>Publish your first posts</h3><p>Create and publish your first pieces of content, with feedback on each one.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><line className="ic" x1="40" y1="100" x2="280" y2="100" /><circle className="ia" cx="40" cy="100" r="16" /><circle className="ia" cx="120" cy="100" r="16" /><circle className="id" cx="200" cy="100" r="16" /><circle className="id" cx="280" cy="100" r="16" /></svg></div><div className="panel" role="tabpanel"><div><h3>Find your rhythm</h3><p>Post on schedule, reply to your audience and send your first weekly report.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><line className="ic" x1="40" y1="100" x2="280" y2="100" /><circle className="ia" cx="40" cy="100" r="16" /><circle className="ia" cx="120" cy="100" r="16" /><circle className="ia" cx="200" cy="100" r="16" /><circle className="id" cx="280" cy="100" r="16" /></svg></div><div className="panel" role="tabpanel"><div><h3>Review and reward</h3><p>We review your results against your targets, share feedback and decide your reward.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><line className="ic" x1="40" y1="100" x2="280" y2="100" /><circle className="ia" cx="40" cy="100" r="16" /><circle className="ia" cx="120" cy="100" r="16" /><circle className="ia" cx="200" cy="100" r="16" /><circle className="ia" cx="280" cy="100" r="16" /></svg></div></Tabs>
        </section>

        <section className="blk rv">
          <h2>Life as a Kryonara intern</h2>
          <div className="grid">
            <div className="card rv"><h3>Start of the week</h3><p>Check the shared content calendar to see what needs to be made and published.</p></div>
            <div className="card rv"><h3>During the week</h3><p>Create, publish and reply on schedule. Questions go to the team group chat.</p></div>
            <div className="card rv"><h3>End of the week</h3><p>A short check-in call and a simple report on what was posted and how it did.</p></div>
            <div className="card rv"><h3>End of the month</h3><p>We review results against your targets, share feedback and decide rewards.</p></div>
          </div>
          <p className="lead" style={{marginTop:"1rem"}}>We keep the tools simple: a shared spreadsheet for the content calendar, a chat group for daily updates, and free design tools such as Canva.</p>
        </section>

        <section className="blk rv">
          <h2>How pay works</h2>
          <p className="lead">The stipend is ₦20,000 to ₦50,000 a month, split into two parts.</p>
          <div className="two">
            <div className="card rv"><h3>Base pay</h3><p>For meeting the minimum: posting the agreed content and attending check-ins.</p></div>
            <div className="card rv"><h3>Performance pay</h3><p>For results: customers or signups that come through your own referral link or code. Effort counts too, including posts on time, quality and consistency, so someone with a small following is not punished unfairly.</p></div>
          </div>
          <p className="lead" style={{marginTop:"1rem"}}>Everyone stays in the programme. The full amount goes to those who show effort and results.</p>
        </section>

        <section className="blk rv">
          <h2>Rules that keep it fair</h2>
          <div className="grid">
            <div className="card rv"><h3>Terms in writing</h3><p>Pay terms are written down before anyone starts.</p></div>
            <div className="card rv"><h3>Monthly review</h3><p>We review your results every month.</p></div>
            <div className="card rv"><h3>Early warning</h3><p>You get a mid-month warning before any pay is withheld.</p></div>
            <div className="card rv"><h3>No fees</h3><p>We never charge applicants or interns any fee.</p></div>
            <div className="card rv"><h3>Official channels</h3><p>Everything is sent from an official company email.</p></div>
            <div className="card rv"><h3>Conditional offers</h3><p>Offers go only to shortlisted candidates and are confirmed after a short trial or onboarding task.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>How interns are rewarded</h2>
          <div className="two">
            <div className="card rv"><h3>Pay that follows effort</h3><p>₦20,000 to ₦50,000 per month, with the full amount going to interns who show effort and results. Terms are written down before you start.</p></div>
            <div className="card rv"><h3>Experience and recognition</h3><p>Published work for your portfolio, feedback from the team, a certificate and a reference letter after a successful internship.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Prepare your application</h2>
          <div className="grid">
            <div className="card rv"><h3>Show your work</h3><p>Link to a page you manage or a few posts you made. Quality beats quantity.</p></div>
            <div className="card rv"><h3>Write clearly</h3><p>A short, honest introduction is better than a long one.</p></div>
            <div className="card rv"><h3>Apply early</h3><p>Apply in the first days after a post goes live, while we are reviewing.</p></div>
            <div className="card rv"><h3>Stay reachable</h3><p>Check your email and WhatsApp. We contact shortlisted applicants there.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Are you ready to apply?</h2>
          <p className="lead">Tick what you already have. It takes ten seconds.</p>
          <ReadyCheck />
        </section>

        <section className="blk rv">
          <h2>Intern questions</h2>
          <div style={{marginTop:"1rem"}}>
            <details><summary>Why do roles open at different times?</summary><p>We hire by role. Social media and content creators come first, then other roles. Everyone hired joins one cohort in January 2027, so onboarding happens once.</p></details>
            <details><summary>Can I apply for more than one role?</summary><p>Yes, but apply to each post separately and tell us which role interests you most.</p></details>
            <details><summary>What if I miss a post?</summary><p>Follow us on LinkedIn and check this page. A new role opens each month before the January cohort starts.</p></details>
            <details><summary>Do I pay anything to apply?</summary><p>Never. Kryonara does not charge applicants or interns at any stage.</p></details>
          </div>
        </section>
      </article>
  );
}
