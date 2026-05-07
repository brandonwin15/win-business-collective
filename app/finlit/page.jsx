export const metadata = {
  title: "Financial Literacy Education & Coaching | Win Business Collective",
  description:
    "Financial literacy education and coaching for everyday people. No products, no sales pitch, no Wall Street jargon. Just the foundation you should have had years ago.",
};

export default function FinancialLiteracy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #1a1714;
          --warm-white: #faf8f4;
          --parchment: #f2ede4;
          --sand: #d9cfc0;
          --accent: #c45c2e;
          --accent-soft: #e8876a;
          --muted: #7a6f63;
          --serif: 'DM Serif Display', Georgia, serif;
          --sans: 'DM Sans', system-ui, sans-serif;
        }

        .fl-page {
          background: var(--warm-white);
          color: var(--ink);
          font-family: var(--sans);
          font-weight: 300;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        /* HERO */
        .fl-hero {
          background: var(--ink);
          color: var(--warm-white);
          padding: 120px 24px 100px;
          position: relative;
          overflow: hidden;
        }

        .fl-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(196,92,46,0.18) 0%, transparent 65%);
          pointer-events: none;
        }

        .fl-hero-inner {
          max-width: 780px;
          margin: 0 auto;
          position: relative;
        }

        .fl-eyebrow {
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-soft);
          margin-bottom: 28px;
        }

        .fl-hero-headline {
          font-family: var(--serif);
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 400;
          letter-spacing: -0.01em;
          margin-bottom: 32px;
          color: var(--warm-white);
        }

        .fl-hero-headline em {
          font-style: italic;
          color: var(--accent-soft);
        }

        .fl-hero-sub {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          color: rgba(250,248,244,0.72);
          max-width: 620px;
          font-weight: 300;
        }

        .fl-divider-line {
          width: 48px;
          height: 2px;
          background: var(--accent);
          margin: 40px 0 0;
        }

        /* CONTENT SECTIONS */
        .fl-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fl-section {
          padding: 80px 0 0;
        }

        .fl-section:last-of-type {
          padding-bottom: 100px;
        }

        .fl-section-label {
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
        }

        .fl-section-heading {
          font-family: var(--serif);
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 24px;
          color: var(--ink);
        }

        .fl-section-body {
          font-size: 17px;
          line-height: 1.8;
          color: #3d3730;
          font-weight: 300;
        }

        .fl-section-body p + p {
          margin-top: 18px;
        }

        /* BIO CARD */
        .fl-bio-card {
          margin-top: 36px;
          padding: 36px;
          background: var(--parchment);
          border-left: 3px solid var(--accent);
        }

        .fl-bio-name {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .fl-bio-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
        }

        .fl-bio-text {
          font-size: 16px;
          line-height: 1.8;
          color: #3d3730;
          font-weight: 300;
        }

        /* PRICING */
        .fl-pricing-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 560px) {
          .fl-pricing-grid { grid-template-columns: 1fr; }
          .fl-for-list { grid-template-columns: 1fr; }
        }

        .fl-pricing-card {
          padding: 32px 28px;
          border: 1px solid var(--sand);
          background: var(--warm-white);
        }

        .fl-pricing-card-featured {
          background: var(--ink);
          border-color: var(--ink);
        }

        .fl-pricing-type {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .fl-pricing-card-featured .fl-pricing-type {
          color: var(--accent-soft);
        }

        .fl-pricing-price {
          font-family: var(--serif);
          font-size: 44px;
          font-weight: 400;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 4px;
        }

        .fl-pricing-card-featured .fl-pricing-price {
          color: var(--warm-white);
        }

        .fl-pricing-unit {
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .fl-pricing-card-featured .fl-pricing-unit {
          color: rgba(250,248,244,0.55);
        }

        .fl-pricing-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #3d3730;
          font-weight: 300;
        }

        .fl-pricing-card-featured .fl-pricing-desc {
          color: rgba(250,248,244,0.75);
        }

        /* BELIEF CALLOUTS */
        .fl-beliefs {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .fl-belief-item {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 24px;
          background: var(--parchment);
          border-left: 3px solid var(--accent);
        }

        .fl-belief-num {
          font-family: var(--serif);
          font-size: 32px;
          color: var(--sand);
          line-height: 1;
          flex-shrink: 0;
          margin-top: -4px;
        }

        .fl-belief-text {
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink);
          font-weight: 400;
        }

        /* WHO IT'S FOR */
        .fl-for-list {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .fl-for-item {
          padding: 20px 22px;
          border: 1px solid var(--sand);
          font-size: 15px;
          line-height: 1.55;
          color: #3d3730;
          position: relative;
        }

        .fl-for-item::before {
          content: '→';
          display: block;
          color: var(--accent);
          font-size: 13px;
          margin-bottom: 8px;
        }

        /* DIVIDER */
        .fl-rule {
          border: none;
          border-top: 1px solid var(--sand);
          margin: 0;
        }

        /* REACH OUT STRIP */
        .fl-reach-strip {
          background: var(--accent);
          padding: 60px 24px;
          text-align: center;
        }

        .fl-reach-heading {
          font-family: var(--serif);
          font-size: clamp(24px, 3.5vw, 36px);
          color: var(--warm-white);
          margin-bottom: 12px;
          font-weight: 400;
        }

        .fl-reach-sub {
          font-size: 16px;
          color: rgba(250,248,244,0.8);
          margin-bottom: 24px;
          font-weight: 300;
        }

        .fl-reach-email {
          display: inline-block;
          font-family: var(--sans);
          font-size: 16px;
          font-weight: 500;
          color: var(--warm-white);
          text-decoration: underline;
          text-underline-offset: 4px;
          letter-spacing: 0.02em;
          transition: opacity 0.2s;
        }

        .fl-reach-email:hover {
          opacity: 0.75;
        }

        /* DISCLAIMER */
        .fl-disclaimer {
          background: var(--parchment);
          border-top: 1px solid var(--sand);
          padding: 40px 24px;
        }

        .fl-disclaimer-inner {
          max-width: 720px;
          margin: 0 auto;
        }

        .fl-disclaimer-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }

        .fl-disclaimer-text {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 640px;
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fl-hero-inner > * { animation: fadeUp 0.7s ease both; }
        .fl-eyebrow        { animation-delay: 0.0s; }
        .fl-hero-headline  { animation-delay: 0.12s; }
        .fl-hero-sub       { animation-delay: 0.24s; }
        .fl-divider-line   { animation-delay: 0.34s; }
      `}</style>

      <div className="fl-page">

        {/* HERO */}
        <section className="fl-hero">
          <div className="fl-hero-inner">
            <p className="fl-eyebrow">Win Business Collective · Financial Literacy</p>
            <h1 className="fl-hero-headline">
              Most people aren't bad with money.<br />
              They were just <em>never taught.</em>
            </h1>
            <p className="fl-hero-sub">
              Win Business Collective brings financial literacy education and coaching to everyday
              people: no products, no sales pitch, no Wall Street jargon. Just the foundation
              you should have had years ago.
            </p>
            <div className="fl-divider-line" />
          </div>
        </section>

        {/* BODY */}
        <div className="fl-body">

          {/* About + Bio */}
          <section className="fl-section">
            <p className="fl-section-label">About This Work</p>
            <h2 className="fl-section-heading">Why I do this</h2>
            <div className="fl-section-body">
              <p>
                I started in tech. Moved into finance. Spent years inside an industry that had
                every tool to help people build wealth, and watched most of those tools get aimed
                at the wrong goal.
              </p>
              <p>
                What I learned is that the basics matter more than anything else. Budgeting.
                Understanding debt. Knowing what investing actually means for your life, not
                someone else's portfolio. Building habits that hold.
              </p>
              <p>
                Nobody taught me that early enough. So now I teach it.
              </p>
            </div>

            <div className="fl-bio-card">
              <p className="fl-bio-name">Brandon Win</p>
              <p className="fl-bio-title">Founder · FINRA Series 7 &amp; 66 Licensed</p>
              <p className="fl-bio-text">
                Brandon Win is the founder of Win Business Collective and a licensed
                ex-financial professional (FINRA Series 7 and 66) who started working young,
                spent years in tech and fintech, and didn't learn the real rules of money until
                he was deep in the financial services industry. Now he teaches others what he had
                to figure out the hard way. His approach isn't strictly about products or
                portfolios. It's about habits, smart decisions, and building a financial life
                that actually fits how you live.
              </p>
            </div>
          </section>

          <hr className="fl-rule" style={{ marginTop: "80px" }} />

          {/* What This Is */}
          <section className="fl-section">
            <p className="fl-section-label">What This Is</p>
            <h2 className="fl-section-heading">Education, not advising</h2>
            <div className="fl-section-body">
              <p>
                This is financial literacy education and coaching. Not financial advising. I don't
                manage your money. I don't sell products. I don't have a fund to put you in.
              </p>
              <p>
                What I do is help you understand your money: where it's going, what it's doing,
                and how to make decisions that actually make sense for your life.
              </p>
            </div>
          </section>

          <hr className="fl-rule" style={{ marginTop: "80px" }} />

          {/* Pricing */}
          <section className="fl-section">
            <p className="fl-section-label">Sessions &amp; Pricing</p>
            <h2 className="fl-section-heading">Pick the format that fits you</h2>
            <div className="fl-pricing-grid">
              <div className="fl-pricing-card">
                <p className="fl-pricing-type">Personal Sessions</p>
                <p className="fl-pricing-price">$50</p>
                <p className="fl-pricing-unit">per hour</p>
                <p className="fl-pricing-desc">
                  One-on-one coaching built around your situation. We go at your pace and focus
                  on what actually matters for where you are right now.
                </p>
              </div>
              <div className="fl-pricing-card fl-pricing-card-featured">
                <p className="fl-pricing-type">Community Course</p>
                <p className="fl-pricing-price">$150</p>
                <p className="fl-pricing-unit">per 1-hour session</p>
                <p className="fl-pricing-desc">
                  Group sessions covering the foundations most people were never taught. Learn
                  alongside others who are starting from the same place.
                </p>
              </div>
            </div>
          </section>

          <hr className="fl-rule" style={{ marginTop: "80px" }} />

          {/* What I Believe */}
          <section className="fl-section">
            <p className="fl-section-label">What I Believe</p>
            <h2 className="fl-section-heading">The things worth building around</h2>
            <div className="fl-beliefs">
              <div className="fl-belief-item">
                <span className="fl-belief-num">01</span>
                <p className="fl-belief-text">
                  The best financial plan isn't the most sophisticated one. It's the one you'll
                  actually stick to.
                </p>
              </div>
              <div className="fl-belief-item">
                <span className="fl-belief-num">02</span>
                <p className="fl-belief-text">
                  Investing should fit your life, not the other way around.
                </p>
              </div>
              <div className="fl-belief-item">
                <span className="fl-belief-num">03</span>
                <p className="fl-belief-text">
                  The most powerful thing most people can do isn't find the right stock.
                  It's build the right habits.
                </p>
              </div>
            </div>
          </section>

          <hr className="fl-rule" style={{ marginTop: "80px" }} />

          {/* Who It's For */}
          <section className="fl-section">
            <p className="fl-section-label">Who This Is For</p>
            <h2 className="fl-section-heading">Regular people. That's the whole point.</h2>
            <div className="fl-section-body">
              <p>This is not for people who already have it figured out.</p>
            </div>
            <div className="fl-for-list">
              <div className="fl-for-item">
                Anyone who feels like they missed the class everyone else seemed to take
              </div>
              <div className="fl-for-item">
                People who are doing okay but know they could be doing better
              </div>
              <div className="fl-for-item">
                First-generation wealth builders
              </div>
              <div className="fl-for-item">
                People who've been burned by advice that was really just a sales pitch in disguise
              </div>
            </div>
          </section>

        </div>

        {/* REACH OUT */}
        <div className="fl-reach-strip">
          <h2 className="fl-reach-heading">Ready to start from the beginning?</h2>
          <p className="fl-reach-sub">No pressure. No pitch. Just a conversation.</p>
          <a href="mailto:brandon@winbusinesscollective.com" className="fl-reach-email">
            brandon@winbusinesscollective.com
          </a>
        </div>

        {/* DISCLAIMER */}
        <div className="fl-disclaimer">
          <div className="fl-disclaimer-inner">
            <p className="fl-disclaimer-label">Disclaimer</p>
            <p className="fl-disclaimer-text">
              Win Business Collective offers financial literacy education and coaching services.
              This is not financial advising and does not constitute personalized investment advice.
              All educational content is for informational purposes only. All investments carry
              risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
