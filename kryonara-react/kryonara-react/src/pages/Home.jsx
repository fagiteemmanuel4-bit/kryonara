import Slideshow from "../components/Slideshow.jsx";
import Social from "../components/Social.jsx";
import Photo from "../components/Photo.jsx";
import Countdown from "../components/Countdown.jsx";
import { mail, wa } from "../components/../lib.js";

export default function Home() {
  return (
      <article className="view on" id="v-home">
        <div className="hero has-orbit">
          <h1>We build technology companies Africa can trust.</h1>
          <p>Kryonara is a company based in Lagos, Nigeria. We don’t build one product. We build startups, and each one is designed around a simple idea: people should be able to check who they are working with, and what they have actually done.</p>
          <div className="chips"><span>Lagos, Nigeria</span><span>Strap POS</span><span>Hiring interns</span></div>
          <div className="row"><a className="btn" href="#careers">View open roles</a><a className="btn ghost" href="#policies">Read our career policies</a></div>
          <div className="orbit" aria-hidden="true"><svg viewBox="0 0 300 300" focusable="false"><circle className="o" cx="150" cy="150" r="60" /><circle className="o" cx="150" cy="150" r="100" /><circle className="o" cx="150" cy="150" r="140" /><g className="ring r1"><circle className="node" cx="150" cy="90" r="7" /><circle className="node" cx="150" cy="210" r="7" /></g><g className="ring r2"><circle className="node" cx="250" cy="150" r="9" /><circle className="node" cx="79.3" cy="79.3" r="7" /></g><g className="ring r3"><circle className="node" cx="150" cy="10" r="9" /><circle className="node" cx="28.8" cy="220" r="7" /></g><circle className="core" cx="150" cy="150" r="36" /><text x="150" y="155" textAnchor="middle" className="tx">Trust</text></svg></div>
        </div>

        <section className="y27 rv" aria-labelledby="y27t">
          <span className="tag">Cohort one · January 2027</span>
          <div className="big" aria-hidden="true"><span>2</span><span>0</span><span>2</span><span>7</span></div>
          <h2 id="y27t">A new way of building in Nigeria starts in 2027.</h2>
          <p>Kryonara is hiring its first intern cohort now, so the team arrives to a product people already know, with training ready on day one. Join the people who help change how Nigerian startups are seen.</p>
          <Countdown />
          <p className="fine">Counting down to Monday 4 January 2027, the earliest start date. The cohort starts on the first or second Monday of January.</p>
          <div className="row"><a className="btn" href="#careers">Apply now</a><a className="btn ghost" href="#interns">How the cohort works</a></div>
          <div className="trio"><div><b>Hire early, onboard once</b><span>Everyone joins the same January cohort.</span></div><div><b>Work that is measured</b><span>Real targets, real feedback, real results.</span></div><div><b>Pay for effort and results</b><span>₦20,000 to ₦50,000 a month, in two parts.</span></div></div>
          <div className="mega" aria-hidden="true"><div className="mq"><span>2027</span><span>Nigeria builds</span><span>Built on trust</span><span>2027</span><span>Nigeria builds</span><span>Built on trust</span></div></div>
        </section>

        <div className="marq" aria-hidden="true"><div className="mq"><span>Trust</span><span>Verified reputation</span><span>Built in Lagos</span><span>Strap POS</span><span>Real internships</span><span>Made for Africa</span><span>Trust</span><span>Verified reputation</span><span>Built in Lagos</span><span>Strap POS</span><span>Real internships</span><span>Made for Africa</span></div></div>

        <section className="blk rv" aria-labelledby="aw">
          <h2 id="aw">Why Kryonara exists</h2>
          <p className="lead">Our awareness mission, in four pictures.</p>
          <Slideshow>
              <div className="slide"><div className="st"><h3>Creating job opportunities for Africa</h3><p>Talent is everywhere in Africa. Opportunity is not. Every Kryonara startup creates roles, internships and first work experiences for young people who are ready to work.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><line className="ic" x1="20" y1="170" x2="300" y2="170" /><circle className="ib" cx="80" cy="100" r="16" /><path className="ib" d="M52 170v-28a28 28 0 0 1 56 0v28z" /><circle className="ia" cx="160" cy="80" r="20" /><path className="ia" d="M124 170v-36a36 36 0 0 1 72 0v36z" /><circle className="ib" cx="240" cy="100" r="16" /><path className="ib" d="M212 170v-28a28 28 0 0 1 56 0v28z" /><polyline className="ic" points="60,60 120,40 170,48 250,18" /><path className="ic" d="M236 14h16v16" /></svg></div>
              <div className="slide"><div className="st"><h3>Building from Nigeria</h3><p>Our home is Lagos. We start here, learn from the market we know best, and build products and teams that can grow across the continent.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><circle className="ia" cx="248" cy="46" r="24" /><rect className="id" x="36" y="100" width="42" height="70" /><rect className="ib" x="88" y="58" width="46" height="112" /><rect className="id" x="144" y="86" width="38" height="84" /><rect className="ib" x="192" y="112" width="50" height="58" /><rect className="id" x="252" y="92" width="34" height="78" /><rect className="iw" x="98" y="72" width="8" height="8" /><rect className="iw" x="116" y="72" width="8" height="8" /><rect className="iw" x="98" y="94" width="8" height="8" /><rect className="iw" x="116" y="94" width="8" height="8" /><rect className="iw" x="98" y="116" width="8" height="8" /><rect className="iw" x="116" y="116" width="8" height="8" /><line className="ic" x1="20" y1="170" x2="300" y2="170" /></svg></div>
              <div className="slide"><div className="st"><h3>Aiming to build Africa’s next big technology company</h3><p>That is the size of our ambition. We take it one startup, one product and one team at a time, with Strap as our first step.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="id" x="40" y="140" width="40" height="30" /><rect className="id" x="95" y="110" width="40" height="60" /><rect className="id" x="150" y="75" width="40" height="95" /><rect className="ia" x="205" y="40" width="40" height="130" /><polyline className="ic" points="50,120 115,92 170,56 225,22" /><circle className="ib" cx="225" cy="22" r="7" /><line className="ic" x1="20" y1="170" x2="300" y2="170" /></svg></div>
              <div className="slide"><div className="st"><h3>Trust at the centre</h3><p>Jobs, products and partnerships work better when people can verify who is who. That is why trust and verified reputation sit at the heart of everything we make.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><path className="is" d="M160 18L232 44V100C232 140 202 166 160 184C118 166 88 140 88 100V44Z" /><polyline className="ic bl" points="126,100 154,128 198,76" /></svg></div>
              <div className="slide"><div className="st"><h3>Real work, real experience</h3><p>Our interns do real tasks on real products, with feedback along the way and results they can show to future employers.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="is" x="70" y="44" width="150" height="100" rx="8" /><rect className="id" x="82" y="56" width="126" height="76" /><rect className="ia" x="92" y="68" width="60" height="8" /><rect className="ib" x="92" y="86" width="90" height="6" /><rect className="ib" x="92" y="100" width="70" height="6" /><line className="ic" x1="50" y1="158" x2="240" y2="158" /><circle className="ia" cx="268" cy="96" r="15" /><path className="ia" d="M244 158v-26a24 24 0 0 1 48 0v26z" /></svg></div>
              <div className="slide"><div className="st"><h3>Built for small businesses</h3><p>Shops, stores and small teams run much of Africa’s economy. Our tools are designed to make their daily work simpler.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="id" x="70" y="84" width="180" height="86" /><rect className="ia" x="60" y="52" width="40" height="32" /><rect className="ib" x="100" y="52" width="40" height="32" /><rect className="ia" x="140" y="52" width="40" height="32" /><rect className="ib" x="180" y="52" width="40" height="32" /><rect className="ia" x="220" y="52" width="40" height="32" /><rect className="is" x="92" y="106" width="56" height="38" /><rect className="ib" x="176" y="102" width="46" height="68" /><line className="ic" x1="40" y1="170" x2="280" y2="170" /></svg></div>
              <div className="slide"><div className="st"><h3>Growing across the continent</h3><p>We start in Lagos, then reach more cities and countries as our products and our team grow.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><line className="ic" x1="160" y1="100" x2="60" y2="50" /><line className="ic" x1="160" y1="100" x2="262" y2="48" /><line className="ic" x1="160" y1="100" x2="70" y2="156" /><line className="ic" x1="160" y1="100" x2="258" y2="154" /><line className="ic" x1="160" y1="100" x2="160" y2="26" /><circle className="ib" cx="60" cy="50" r="12" /><circle className="ib" cx="262" cy="48" r="12" /><circle className="ib" cx="70" cy="156" r="12" /><circle className="ib" cx="258" cy="154" r="12" /><circle className="id" cx="160" cy="26" r="11" /><circle className="ia" cx="160" cy="100" r="28" /></svg></div>
              <div className="slide"><div className="st"><h3>Work that gets noticed</h3><p>People who do the work well earn recognition, bigger responsibility and better rewards.</p></div>
                <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="id" x="40" y="140" width="60" height="30" /><rect className="id" x="100" y="110" width="60" height="60" /><rect className="id" x="160" y="80" width="60" height="90" /><rect className="ia" x="220" y="56" width="60" height="114" /><polygon className="ib" points="250,8 256,24 273,24 259,34 264,50 250,40 236,50 241,34 227,24 244,24" /><line className="ic" x1="20" y1="170" x2="300" y2="170" /></svg></div>
            </Slideshow>
        </section>

        <section className="blk rv">
          <h2>Who we are</h2>
          <p className="lead">A holding company for startups, built from the ground up in Africa, for Africa.</p>
          <div className="grid">
            <div className="card rv"><h3>A company, not a single app</h3><p>Kryonara is the parent that designs, funds and runs new technology ventures. Each startup gets its own brand, team and goals, while sharing the same standards of honesty and quality.</p></div>
            <div className="card rv"><h3>Rooted in Lagos</h3><p>We are based in Lagos and work with talent across Nigeria and the wider continent. Many of our roles are remote, so good people can join us wherever they live.</p></div>
            <div className="card rv"><h3>Built on verified reputation</h3><p>Trust is the thread that connects everything we make. We want identity, work history and results to be easy to confirm, so honest people and businesses get recognised for what they do.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>What we believe</h2>
          <p className="lead">Four principles guide how we work, hire and make decisions.</p>
          <div className="grid">
            <div className="card rv"><h3>Trust is earned</h3><p>We keep our promises, in small things first. Reliability over time matters more than a good first impression.</p></div>
            <div className="card rv"><h3>Proof over claims</h3><p>We prefer evidence to talk. A finished task, a measured result or a published piece of work says more than a title.</p></div>
            <div className="card rv"><h3>Start small, finish well</h3><p>We build in focused steps and ship what works before adding more. Scope discipline keeps quality high.</p></div>
            <div className="card rv"><h3>Reward real work</h3><p>People who deliver should see it in their recognition, responsibility and pay. Effort that moves a project forward is noticed.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>How we build</h2>
          <p className="lead">Every Kryonara venture follows the same four stages.</p>
          <div className="grid">
            <div className="card step rv"><h3>1. Listen</h3><p>We start with a real problem faced by real people, and talk to them before writing a line of code.</p></div>
            <div className="card step rv"><h3>2. Build small</h3><p>We make the simplest version that solves the problem, then put it in front of users.</p></div>
            <div className="card step rv"><h3>3. Verify</h3><p>We check what works using real feedback and numbers, and drop what doesn’t.</p></div>
            <div className="card step rv"><h3>4. Grow</h3><p>When something proves itself, we add people, features and reach, carefully.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Strap, our advanced POS system</h2>
          <div className="two">
            <div className="card dark rv"><h3>Strap</h3><p>Strap is an advanced point-of-sale (POS) system and the first startup built inside Kryonara. It brings sales, stock, expenses and an online store into one workspace for Nigerian shops, and it is live now with a free plan.</p></div>
            <div className="card rv"><h3>Join the launch</h3><p>We are recruiting social media and content interns to help Strap find its audience. If you want real experience on a product that is just starting out, <a href="#careers">see the role</a>.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>What Strap helps businesses do</h2>
          <p className="lead">Strap is built for shops, stores and small teams that want to run sales more simply.</p>
          <div className="grid">
            <div className="card rv"><h3>Record sales quickly</h3><p>Ring up a sale in a few taps instead of writing it by hand.</p></div>
            <div className="card rv"><h3>Give clear receipts</h3><p>Customers get a proper record of what they bought and paid.</p></div>
            <div className="card rv"><h3>Know your stock</h3><p>Keep track of what you have and what is running low.</p></div>
            <div className="card rv"><h3>See how you are doing</h3><p>Understand your daily sales without doing the sums yourself.</p></div>
          </div>
          <div className="row" style={{marginTop:"1.4rem"}}><a className="btn" href="https://storefront-flow.vercel.app" target="_blank" rel="noopener">Try Strap free</a><a className="btn ghost" href="#products">Explore Strap</a></div>
        </section>

        <section className="blk rv">
          <h2>Meet the founder</h2>
          <div className="card founder rv" style={{marginTop:"1rem"}}>
            <Photo />
            <div><h3>Emmanuel</h3><p className="role">Founder, Kryonara</p><p>Emmanuel is a founder and AI-augmented engineer based in Lagos. He started Kryonara to build technology companies on trust, where people and businesses are known for what they actually do.</p><p>He leads the company’s products and personally oversees hiring, so every new intern works with the person making the decisions.</p></div>
          </div>
          <p className="lead" style={{marginTop:"1rem"}}>Our interns will be introduced here as they join, with their permission.</p>
        </section>

        <section className="blk rv">
          <h2>Our progress so far</h2>
          <div className="grid">
            <div className="card step rv"><h3>Kryonara is founded</h3><p>A Lagos-based company built to create technology startups on trust.</p></div>
            <div className="card step rv"><h3>Strap is live</h3><p>Our POS, inventory and online store platform is open to shops, with a free plan.</p></div>
            <div className="card step rv"><h3>October 2026</h3><p>We opened our first internship applications on LinkedIn and Indeed.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Partners, investors and updates</h2>
          <div className="two">
            <div className="card rv"><h3>For partners and investors</h3><p>If you share our goals and want to explore working together, we would like to hear from you.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn ghost" href={mail("Partnership or investment enquiry")}>Start a conversation</a></div></div>
            <div className="card rv"><h3>Stay updated</h3><p>Get news about Strap, new intern roles and company progress. Read the latest on our <a href="#news">News page</a> or ask to be added to our updates list.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn ghost" href={mail("Subscribe me to Kryonara updates")}>Get updates</a></div></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Our promises</h2>
          <p className="lead">What you can always expect from Kryonara.</p>
          <div className="grid">
            <div className="card rv"><h3>No fees, ever</h3><p>We never charge applicants or interns, at any stage.</p></div>
            <div className="card rv"><h3>Terms in writing</h3><p>Pay, targets and duties are agreed in writing before you start.</p></div>
            <div className="card rv"><h3>Your data stays yours</h3><p>We use your details only for hiring and updates you ask for.</p></div>
            <div className="card rv"><h3>Credit for your work</h3><p>You can show your published work in your portfolio, and we will confirm your contribution.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Why work with Kryonara</h2>
          <p className="lead">A young company is a place where one person can make a visible difference.</p>
          <div className="grid">
            <div className="card rv"><h3>Real responsibility</h3><p>Your work is published and seen from your first weeks.</p></div>
            <div className="card rv"><h3>Close to the founder</h3><p>You work alongside the person who makes the decisions.</p></div>
            <div className="card rv"><h3>Clear expectations</h3><p>Targets, feedback and rewards are explained before you begin.</p></div>
            <div className="card rv"><h3>Room to grow</h3><p>People who deliver are noticed and given more responsibility.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Where we are headed</h2>
          <p className="lead">Our direction for the next stages. Plans can change as we learn.</p>
          <div className="grid">
            <div className="card step rv"><h3>Now</h3><p>Hiring our first intern cohort for January 2027 and growing Strap.</p></div>
            <div className="card step rv"><h3>Next</h3><p>Opening new intern roles every month and growing a team that delivers.</p></div>
            <div className="card step rv"><h3>Later</h3><p>Launching more startups under Kryonara and reaching users across Africa.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Ways to work with us</h2>
          <div className="grid">
            <div className="card rv"><h3>As an intern</h3><p>Gain real experience on a real product. Each role opens for about a month before the January 2027 cohort. <a href="#interns">See the intern page</a>.</p></div>
            <div className="card rv"><h3>As a collaborator</h3><p>Writers, designers, video editors and community builders can reach out about short projects. Email us with samples of your work.</p></div>
            <div className="card rv"><h3>As a partner</h3><p>Schools, communities and businesses that share our goals are welcome to start a conversation about working together.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Frequently asked</h2>
          <div style={{marginTop:"1rem"}}>
            <details><summary>What is Kryonara?</summary><p>Kryonara is a company based in Lagos that builds technology startups. It is not a single product. It is the parent company that creates and runs ventures such as Strap.</p></details>
            <details><summary>What is Strap?</summary><p>Strap is a point-of-sale, inventory and online store platform for Nigerian shops, and the first startup built inside Kryonara. It is live now with a free plan.</p></details>
            <details><summary>Where is Kryonara based?</summary><p>Our home is Lagos, Nigeria. Most roles are remote so people from across Nigeria can join.</p></details>
            <details><summary>How can I join?</summary><p>Check the <a href="#careers">Careers</a> and <a href="#interns">Interns</a> pages for open roles and the application steps.</p></details>
            <details><summary>Is it safe to apply?</summary><p>Yes. We never ask applicants for money, and we only contact people through our official channels. See our <a href="#policies">policies</a>.</p></details>
          </div>
        </section>

        <section className="blk rv"><div className="band"><h2>Build something that earns trust.</h2><p>Join our next intern cohort, try Strap for your shop, or talk to us about working together.</p><div className="row"><a className="btn" href="#careers">See open roles</a><a className="btn ghost" href="https://storefront-flow.vercel.app" target="_blank" rel="noopener">Try Strap free</a></div></div></section>

        <section className="blk rv" id="contact">
          <h2>Contact us</h2>
          <p className="lead">Questions about Kryonara, Strap or working with us? We read every message.</p>
          <div className="row">
            <a className="btn" href={mail()}>hello@kryonara.com</a>
            <a className="btn ghost" href={wa()} rel="noopener">Message us on WhatsApp</a><Social />
          </div>
        </section>
      </article>
  );
}
