import { mail } from "../components/../lib.js";

export default function Policies() {
  return (
      <article className="view on" id="v-policies">
        <div className="hero">
          <h1>Career policies</h1>
          <p>These policies explain how we hire, pay, work and treat people. Read them before you apply, and contact us if anything is unclear.</p>
        </div>
        <section className="blk">
          <div className="grid">
            <div className="card rv"><h3>Equal opportunity</h3><p>We consider every applicant on skills, work samples and attitude. We do not discriminate on gender, ethnicity, religion, disability, age, background or where someone studied.</p></div>
            <div className="card rv"><h3>Fair hiring process</h3><p>Every applicant goes through the same stages: application, task, call and trial. Offers go only to shortlisted candidates and are confirmed after a short trial or onboarding task. We do not ask anyone to pay to apply or to be hired.</p></div>
            <div className="card rv"><h3>Data privacy</h3><p>We collect only what we need to assess you, such as contact details and work samples. We handle it in line with the Nigeria Data Protection Act 2023, use it only for hiring, and do not sell it. You can ask us to correct or delete your data at any time.</p></div>
            <div className="card rv"><h3>Compensation and rewards</h3><p>Internship pay is ₦20,000 to ₦50,000 per month, in two parts: base pay for meeting the minimum, and performance pay for results such as signups through your referral link or code. Effort counts too. Terms are agreed in writing before you start and reviewed monthly, and we give a mid-month warning before withholding any pay.</p></div>
            <div className="card rv"><h3>Work arrangements</h3><p>Roles are remote unless stated otherwise. Interns choose their own hours, deliver on agreed deadlines, join a short weekly check-in and reply to team messages within one working day.</p></div>
            <div className="card rv"><h3>Account and password security</h3><p>We give interns editor or admin access to company pages and never ask you to use or share personal passwords. Access ends when the internship ends. Please keep any login details we provide private.</p></div>
            <div className="card rv"><h3>Confidentiality</h3><p>Plans, drafts, product details and internal discussions are confidential until we publish them. Please do not share them outside the team without permission.</p></div>
            <div className="card rv"><h3>Ownership of work</h3><p>Content you create for Kryonara or Strap belongs to the company. You may show published work in your portfolio and resume, and we will happily confirm your contribution on request.</p></div>
            <div className="card rv"><h3>Respect and conduct</h3><p>We expect honest, respectful behaviour in every message and call. Harassment, bullying, plagiarism and misrepresenting your work are not tolerated, and we act on any concern raised in good faith.</p></div>
            <div className="card rv"><h3>Feedback and evaluation</h3><p>You receive regular feedback, a trial scorecard covering timeliness, quality and initiative, and a clear explanation of how your performance is judged.</p></div>
            <div className="card rv"><h3>Ending an internship</h3><p>Either side may end the internship with notice. We will explain the reason and pay any amount already earned. Interns who finish successfully receive a certificate and a reference letter.</p></div>
            <div className="card rv"><h3>Website privacy</h3><p>This website collects only what you choose to send us, such as an email or an application. We use it to reply to you, and we do not sell it or share it for advertising.</p></div>
            <div className="card rv"><h3>Website terms</h3><p>The information on this site is provided in good faith and may change as we grow. Applying for a role does not guarantee an internship offer. Strap is a separate service with its own terms and privacy policy.</p></div>
            <div className="card rv"><h3>Posting schedule</h3><p>We hire by role, and each role is open for about one month on LinkedIn and Indeed. Everyone hired joins the same cohort in January 2027. Please apply to each post separately. Late applications may be considered for the next role.</p></div>
            <div className="card rv"><h3>Official channels and scam awareness</h3><p>We never ask applicants or interns for money, and we only contact people through our official email, WhatsApp, LinkedIn and Indeed accounts. If someone asks you to pay in our name, please report it to us.</p></div>
            <div className="card rv"><h3>Accessibility and adjustments</h3><p>If you need a change to take part in the process or the work, such as more time or a different format, tell us and we will do our best to help.</p></div>
            <div className="card rv"><h3>Questions or complaints</h3><p>If you believe a policy has not been followed, write to <a href={mail()}>hello@kryonara.com</a>. We reply within five working days.</p></div>
          </div>
          <p style={{marginTop:"1.6rem",color:"var(--muted)",fontSize:".9rem"}}>Last updated October 2026.</p>
        </section>
      </article>
  );
}
