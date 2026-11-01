import { applyProps } from "../components/../lib.js";

export default function Careers() {
  return (
      <article className="view on" id="v-careers">
        <div className="hero">
          <h1>Careers at Kryonara</h1>
          <p>Join a young company at the stage where your work is noticed and your ideas shape what gets built. Here is what is open right now.</p>
        </div>

        <section className="blk rv">
          <h2>Open roles</h2>
          <div className="card job rv" style={{marginTop:"1rem"}}>
            <h3>Social Media Management and Content Creation Intern</h3>
            <div className="tags"><span>Internship</span><span>Remote</span><span>Flexible hours</span><span>Starts January 2027</span><span>₦20,000 to ₦50,000 per month</span><span>Strap</span></div>
            <p>Help launch Strap on social media. You will plan, create and publish content, grow our presence on LinkedIn and other platforms, and learn how a real startup markets itself.</p>
            <div className="row" style={{marginTop:"1rem"}}><a className="btn" {...applyProps("linkedin")}>Apply on LinkedIn</a><a className="btn ghost" {...applyProps("indeed")}>Also listed on Indeed</a></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>About the role</h2>
          <p className="lead">You will work with a small team and a social media lead, with clear tasks and regular feedback. Strap is new, so the content you make will be some of the first people see.</p>
          <div className="two">
            <div className="card rv"><h3>What you will do</h3><ul>
              <li>Plan and follow a weekly content calendar</li>
              <li>Write posts, captions and short articles for LinkedIn and other platforms</li>
              <li>Design simple graphics, carousels and short videos</li>
              <li>Publish on schedule and reply to comments and messages</li>
              <li>Track what works and share a short weekly report</li>
              <li>Suggest new content ideas and test them</li>
            </ul></div>
            <div className="card rv"><h3>What we are looking for</h3><ul>
              <li>Strong written English and an eye for clear, simple writing</li>
              <li>Active use of social media, especially LinkedIn, Instagram or X</li>
              <li>Basic design or editing skills (Canva, CapCut or similar)</li>
              <li>Reliability: you post when you say you will</li>
              <li>A device and stable internet connection</li>
              <li>Examples of your work, such as a page you manage or posts you made</li>
            </ul></div>
            <div className="card rv"><h3>Nice to have</h3><ul>
              <li>Experience running a page for a business, school or community</li>
              <li>Basic understanding of hashtags, timing and engagement</li>
              <li>Photography, video editing or copywriting practice</li>
              <li>Interest in startups and technology</li>
            </ul></div>
            <div className="card rv"><h3>What you will gain</h3><ul>
              <li>Published work for your portfolio</li>
              <li>Hands-on experience launching a real product</li>
              <li>Feedback and mentorship from the team</li>
              <li>A certificate and reference letter after a successful internship</li>
              <li>Clear targets and a path to more responsibility</li>
            </ul></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Pay and schedule</h2>
          <div className="two">
            <div className="card rv"><h3>Compensation</h3><p>₦20,000 to ₦50,000 per month, in two parts. Base pay is for meeting the minimum: posting the agreed content and joining check-ins. Performance pay is for results, such as customers or signups that come through your own referral link or code. Effort counts too, including posts on time, quality and consistency, so a small following is never punished unfairly. Terms are put in writing before you begin, reviewed monthly, and you get a mid-month warning before any pay is withheld.</p></div>
            <div className="card rv"><h3>Schedule and location</h3><p>Remote and flexible. The cohort starts on the first or second Monday of January 2027, and everyone hired joins the same cohort. You choose working hours that suit you, as long as deadlines are met and you can join a short weekly check-in call.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>How hiring works</h2>
          <p className="lead">Our process takes about three weeks and is the same for everyone.</p>
          <div className="grid">
            <div className="card step rv"><h3>Week 1: Apply and shortlist</h3><p>Apply on LinkedIn and complete our short form. We review portfolios and shortlist about ten people.</p></div>
            <div className="card step rv"><h3>Week 2: Task and call</h3><p>Shortlisted applicants complete a small task, such as writing three posts and describing one graphic. The strongest are invited to a 15-minute video call.</p></div>
            <div className="card step rv"><h3>Week 3: Trial and offer</h3><p>A few shortlisted candidates start a short trial with a simple scorecard. Offers are conditional and are confirmed after the trial or an onboarding task.</p></div>
          </div>
        </section>

        <section className="blk rv">
          <h2>Questions</h2>
          <div style={{marginTop:"1rem"}}>
            <details><summary>Do I need experience?</summary><p>Experience helps, but proof of ability matters more. A portfolio, even a small one, is the best way to show us what you can do.</p></details>
            <details><summary>Do I have to live in Lagos?</summary><p>No. The role is remote. Applicants from anywhere in Nigeria are welcome.</p></details>
            <details><summary>Is every intern paid the maximum?</summary><p>No. Everyone who meets the minimum receives base pay. The full amount goes to interns who also show effort and results, measured by posts on time, quality, consistency and signups through their referral link.</p></details>
            <details><summary>How do I apply?</summary><p>Use the Apply on LinkedIn button above. After you apply, we will send a short form to collect your contact details and work samples.</p></details>
            <details><summary>When does the internship start?</summary><p>Everyone hired joins one cohort that starts on the first or second Monday of January 2027, so onboarding happens once. We hire by role: social media and content creators first, then other roles.</p></details>
            <details><summary>When will I hear back?</summary><p>We aim to respond to every applicant within the first week of the process.</p></details>
          </div>
        </section>
      </article>
  );
}
