import Tabs from "../components/Tabs.jsx";

export default function Products() {
  return (
      <article className="view on" id="v-products">
        <div className="hero">
          <h1>Our products</h1>
          <p>Every Kryonara product starts with a real problem. Here is what we have built, and how to use it.</p>
          <div className="row"><span className="pill live">Strap is live</span></div>
          <div className="row"><a className="btn" href="https://storefront-flow.vercel.app" target="_blank" rel="noopener">Open Strap</a><a className="btn ghost" href="https://storefront-flow.vercel.app/support" target="_blank" rel="noopener">Strap Help Centre</a></div>
        </div>
        <section className="blk rv">
          <h2>Strap</h2>
          <div className="two" style={{marginTop:"1rem"}}>
            <div className="card dark rv"><h3>Strap, advanced POS system</h3><p>Strap is a point-of-sale, inventory and online store platform for Nigerian shops. Sales, stock, expenses, customers and online orders live in one connected workspace. It is the first startup built inside Kryonara.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Start selling free</a></div></div>
            <div className="card rv"><h3>At a glance</h3><ul><li>Type: POS, inventory and online store</li><li>Made for: Nigerian shops and retail businesses</li><li>Status: live, with a free plan</li><li>Pricing: Free, Business ₦3,000 per month, Pro ₦5,000 per month</li></ul></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>See Strap in action</h2>
          <p className="lead">Illustrations of how Strap is designed to work. Tap a tab to explore.</p>
          <Tabs labels={["Sales", "Receipts", "Stock", "Reports"]} ariaLabel="Strap features"><div className="panel" role="tabpanel"><div><h3>Record a sale</h3><p>Add items, see the total and complete the sale in a few taps.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="is" x="50" y="8" width="220" height="184" rx="14" /><rect className="id" x="68" y="26" width="120" height="14" /><rect className="id" x="212" y="26" width="40" height="14" /><rect className="id" x="68" y="52" width="100" height="14" /><rect className="id" x="212" y="52" width="40" height="14" /><rect className="id" x="68" y="78" width="130" height="14" /><rect className="id" x="212" y="78" width="40" height="14" /><line className="ic" x1="68" y1="108" x2="252" y2="108" /><rect className="ia" x="68" y="124" width="184" height="42" rx="8" /><text x="160" y="151" textAnchor="middle" className="tx">Charge</text></svg></div><div className="panel" role="tabpanel"><div><h3>Give a clear receipt</h3><p>Customers get a proper record of what they bought and what they paid.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="id" x="100" y="8" width="120" height="184" rx="4" /><rect className="ib" x="122" y="26" width="76" height="8" /><line className="ic" x1="118" y1="56" x2="202" y2="56" /><line className="ic" x1="118" y1="76" x2="202" y2="76" /><line className="ic" x1="118" y1="96" x2="180" y2="96" /><line className="ic" x1="118" y1="116" x2="202" y2="116" /><circle className="ia" cx="160" cy="156" r="18" /><polyline className="ic wh" points="150,156 158,164 172,148" /></svg></div><div className="panel" role="tabpanel"><div><h3>Know your stock</h3><p>See what you have and what is running low, so you can restock before you run out.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="id" x="40" y="30" width="60" height="16" /><rect className="ia" x="110" y="30" width="170" height="16" /><rect className="id" x="40" y="80" width="60" height="16" /><rect className="ia" x="110" y="80" width="110" height="16" /><rect className="id" x="40" y="130" width="60" height="16" /><rect className="ib" x="110" y="130" width="40" height="16" /><line className="ic" x1="30" y1="170" x2="290" y2="170" /></svg></div><div className="panel" role="tabpanel"><div><h3>See how you are doing</h3><p>Understand your daily sales at a glance, without doing the sums yourself.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="id" x="50" y="120" width="36" height="50" /><rect className="id" x="100" y="96" width="36" height="74" /><rect className="id" x="150" y="104" width="36" height="66" /><rect className="id" x="200" y="72" width="36" height="98" /><rect className="ia" x="250" y="40" width="36" height="130" /><polyline className="ic" points="68,106 118,82 168,90 218,58 268,26" /><line className="ic" x1="30" y1="170" x2="300" y2="170" /></svg></div></Tabs>
        </section>
        <section className="blk rv">
          <h2>More than a cash register</h2>
          <p className="lead">The same workspace that records a sale also helps you understand stock, serve customers and grow online.</p>
          <div className="grid">
            <div className="card rv"><h3>Barcode and QR scanning</h3><p>Use your phone camera or a USB or Bluetooth scanner.</p></div>
            <div className="card rv"><h3>Receipts and printing</h3><p>Preview receipts and design your own layout.</p></div>
            <div className="card rv"><h3>Reports and insights</h3><p>See sales, expenses, stock value and the signals behind them.</p></div>
            <div className="card rv"><h3>Shop teams</h3><p>Owner, manager and cashier roles keep selling organised.</p></div>
            <div className="card rv"><h3>Store management</h3><p>Manage shop details, branches and preferences.</p></div>
            <div className="card rv"><h3>Online catalogue</h3><p>Publish products, organise categories and manage orders.</p></div>
            <div className="card rv"><h3>Protected workspace</h3><p>Sign-in and controlled access keep shop activity private.</p></div>
            <div className="card rv"><h3>Fast daily workflows</h3><p>Go from product to sale to stock update in fewer steps.</p></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>From search to sale</h2>
          <p className="lead">A clean counter flow, with stock and sales kept in sync.</p>
          <div className="flow"><div>Search or scan a product</div><div>Build the current cart</div><div>Choose cash, card, transfer or credit</div><div>Confirm payment</div><div>Preview or print the receipt</div></div>
        </section>
        <section className="blk rv">
          <h2>Know your stock</h2>
          <p className="lead">Search by name, SKU or barcode, filter products and spot stock that needs attention.</p>
          <div className="mock rv"><div className="stats"><div className="stat"><b>124</b><span>Available products</span></div><div className="stat"><b>12</b><span>Low stock</span></div><div className="stat"><b>3</b><span>Out of stock</span></div><div className="stat"><b>₦1,842,500</b><span>Inventory value</span></div></div><p style={{marginTop:".8rem",fontSize:".85rem"}}>Example figures, as shown in the Strap workspace preview.</p></div>
        </section>
        <section className="blk rv">
          <h2>Give your shop a front door online</h2>
          <div className="panel" style={{marginTop:"1rem"}}><div><p className="lead">Publish products, organise categories, feature what you want customers to notice and manage online orders from the same workspace. A shareable catalogue, open all day.</p></div><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect className="is" x="30" y="14" width="260" height="172" rx="12" /><line className="ic" x1="30" y1="42" x2="290" y2="42" /><circle className="ia" cx="48" cy="28" r="4" /><circle className="ib" cx="62" cy="28" r="4" /><circle className="id" cx="76" cy="28" r="4" /><rect className="id" x="46" y="56" width="56" height="58" rx="6" /><rect className="id" x="112" y="56" width="56" height="58" rx="6" /><rect className="id" x="178" y="56" width="56" height="58" rx="6" /><rect className="ia" x="46" y="122" width="40" height="8" rx="4" /><rect className="ib" x="112" y="122" width="40" height="8" rx="4" /><rect className="ia" x="178" y="122" width="40" height="8" rx="4" /><rect className="ia" x="46" y="146" width="188" height="24" rx="12" /><text x="140" y="163" textAnchor="middle" className="tx">Order now</text></svg></div>
        </section>
        <section className="blk rv">
          <h2>Which plan fits you?</h2>
          <p className="lead">Pick what matters most to your shop.</p>
          <div className="pick card rv" style={{position:"relative"}}>
            <div className="opts">
              <input type="radio" name="plan" id="p1" /><label className="opt" htmlFor="p1">Sell at the counter<small>POS, products, customers and expenses</small></label>
              <input type="radio" name="plan" id="p2" /><label className="opt" htmlFor="p2">Sell online too<small>An online store with categories and featured products</small></label>
              <input type="radio" name="plan" id="p3" /><label className="opt" htmlFor="p3">Run a bigger operation<small>Advanced inventory, stock tools and reports</small></label>
            </div>
            <p className="res r0">Choose an option to see the plan that fits.</p>
            <div className="res r1"><h3>Free, ₦0</h3><p>POS and offline sales, products and inventory, customers and expenses, and basic orders and reports.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Start free</a></div></div>
            <div className="res r2"><h3>Business, ₦3,000 per month</h3><p>Everything in Free, plus the online store, storefront categories and layouts, featured products and store data export.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Choose Business</a></div></div>
            <div className="res r3"><h3>Pro, ₦5,000 per month</h3><p>Everything in Business, plus advanced inventory tools, stock calculation tools and advanced reports.</p><div className="row" style={{marginTop:"1rem"}}><a className="btn" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Choose Pro</a></div></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>Simple pricing</h2>
          <p className="lead">Start free. Pay when your shop is ready to sell online. Prices are in naira, as listed on the Strap website.</p>
          <div className="grid">
            <div className="card price rv"><h3>Free</h3><p className="amt">₦0</p><ul><li>POS and offline sales</li><li>Products and inventory</li><li>Customers and expenses</li><li>Basic orders and reports</li></ul><a className="btn ghost" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Choose Free</a></div>
            <div className="card price hot rv"><span className="pill">Most popular</span><h3>Business</h3><p className="amt">₦3,000<small> / month</small></p><ul><li>Everything in Free</li><li>Online store</li><li>Storefront categories and layouts</li><li>Featured products</li><li>Store data export</li></ul><a className="btn" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Choose Business</a></div>
            <div className="card price rv"><h3>Pro</h3><p className="amt">₦5,000<small> / month</small></p><ul><li>Everything in Business</li><li>Advanced inventory tools</li><li>Stock calculation tools</li><li>Advanced reports</li><li>Priority Pro features</li></ul><a className="btn ghost" href="https://storefront-flow.vercel.app/auth" target="_blank" rel="noopener">Choose Pro</a></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>Teams and hardware</h2>
          <div className="two">
            <div className="card rv"><h3>Team access</h3><ul><li>Owner: full store management</li><li>Manager: operational management</li><li>Cashier: fast selling workflows</li></ul></div>
            <div className="card rv"><h3>Works with how you sell</h3><div className="chips" style={{marginTop:".6rem"}}><span>Camera scanning</span><span>USB and Bluetooth scanners</span><span>Receipt printer workflows</span><span>Custom receipt designer</span></div></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>Strap questions</h2>
          <div style={{marginTop:"1rem"}}>
            <details><summary>Can I use Strap on a phone and a computer?</summary><p>Yes. Strap is responsive, so the key workflows work on phones, tablets and desktop screens.</p></details>
            <details><summary>Can I scan products on a PC?</summary><p>Yes. A compatible USB or Bluetooth barcode or QR scanner works like a keyboard, and camera scanning is available on supported devices.</p></details>
            <details><summary>Can I sell online with Strap?</summary><p>Yes. The online store is available on the paid Business and Pro plans, starting at ₦3,000 per month.</p></details>
            <details><summary>Can I print receipts?</summary><p>Strap includes receipt previews and a custom receipt designer. Compatible printer connections are being developed for supported hardware.</p></details>
          </div>
        </section>
        <section className="blk rv">
          <h2>Who Strap is for</h2>
          <p className="lead">Strap is designed for businesses that sell every day, such as:</p>
          <div className="grid">
            <div className="card rv"><h3>Mini-marts and groceries</h3><p>Keep fast-moving products, prices and stock under control while the counter stays busy.</p></div>
            <div className="card rv"><h3>Fashion and lifestyle</h3><p>Organise products and sales without turning retail into spreadsheet work.</p></div>
            <div className="card rv"><h3>Beauty and personal care</h3><p>Track sales, expenses and stock in one place to see where the money goes.</p></div>
            <div className="card rv"><h3>Electronics and accessories</h3><p>Use SKU and barcode workflows to find products fast and keep stock accurate.</p></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>How to get Strap</h2>
          <div className="grid">
            <div className="card step rv"><h3>1. Create your account</h3><p>Open Strap and set up your shop workspace for free.</p></div>
            <div className="card step rv"><h3>2. Add your products</h3><p>Add them by hand, import a catalogue, or build your stock as you sell.</p></div>
            <div className="card step rv"><h3>3. Sell, then go online</h3><p>Sell at the counter, and open your online store when you are ready.</p></div>
          </div>
        </section>
        <section className="blk rv">
          <h2>More tools coming</h2>
          <div className="card rv" style={{marginTop:"1rem"}}><p>New Kryonara tools will be listed on this page as they launch, each with a link to get it. <a href="#news">Follow the news</a> to hear first.</p></div>
        </section>
      </article>
  );
}
