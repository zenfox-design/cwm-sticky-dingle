import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bespoke Experiences & Occasions | Cwm Sticky Dingle",
  description: "Weddings, retreats, celebrations, catering, wellness, music, workshops and family activities shaped around Cwm Sticky Dingle.",
  alternates: { canonical: "/bespoke-experiences" },
};

const options = [
  ["01", "Weddings & celebrations", "Intimate weddings, birthdays, anniversaries and private weekends with the Roundhouse and valley as the setting."],
  ["02", "Food & catering", "Long table suppers, fire cooking, field kitchens, family meals and bespoke catering for groups."],
  ["03", "Wellness", "Yoga, mindfulness, forest bathing and restorative sessions built into a day, weekend or retreat."],
  ["04", "Music & performance", "Acoustic sets, DJs, small live shows, sound, lighting and unusual performance ideas that suit the space."],
  ["05", "Workshops & making", "Rural craft, cookery, music, walking, practical skills and hands on group activities."],
  ["06", "Families & children", "Forest school style activities, nature based sessions, games and practical things to do together."],
];

export default function BespokeExperiences() {
  return <main className="guide-page" id="top">
    <header className="guide-header">
      <Link className="wordmark" href="/"><Image unoptimized className="brand-emblem brand-emblem-header" src="/images/cwm-sticky-dingle-emblem.webp" alt="" width={58} height={58}/><span>Cwm Sticky Dingle</span></Link>
      <nav className="desktop-nav"><Link href="/#stay">Stay</Link><Link href="/#gather">Gather</Link><Link href="/guest-guide">Guest guide</Link><Link href="/our-events">Our events</Link></nav>
      <Link className="header-cta" href="/#enquire">Plan a gathering <span>↗</span></Link>
      <details className="mobile-menu"><summary><span>Menu</span><b aria-hidden="true"/></summary><nav><Link href="/#stay">Stay</Link><Link href="/#gather">Gather</Link><Link href="/guest-guide">Guest guide</Link><Link href="/our-events">Our events</Link><Link href="/bespoke-experiences">Bespoke experiences</Link><Link className="mobile-enquire" href="/#enquire">Plan a gathering <span>↗</span></Link></nav></details>
    </header>

    <section className="guide-hero">
      <Image unoptimized src="/images/woodland-swing-cwm-sticky-dingle.webp" alt="Woodland at Cwm Sticky Dingle" fill priority sizes="100vw" />
      <div className="guide-hero-shade" />
      <div className="guide-hero-copy"><p className="kicker light">Bespoke experiences & occasions</p><h1>Bring the idea.<br/><em>We’ll shape the rest.</em></h1><p>From a small birthday around the fire to a wedding, retreat or workshop weekend, tell us what you have in mind and we can help build the experience around it.</p></div>
      <a className="guide-scroll" href="#possibilities">See what is possible ↓</a>
    </section>

    <section className="guide-intro" id="possibilities">
      <div><p className="kicker">Not rigid packages</p><h2>Start with<br/>the feeling.</h2><p>You do not need to arrive with a production plan. Give us the rough dates, guest numbers and atmosphere you want, and we can work out which spaces, people and activities make sense.</p></div>
      <div className="guide-jumps">{options.map(([number, title]) => <a key={number} href={`#option-${number}`}><span>{number}</span><strong>{title}</strong><b>↓</b></a>)}</div>
    </section>

    <section className="guide-group guide-tone-1">
      <div className="guide-group-heading"><p className="kicker">Build your gathering</p><h2>Use the Dingle<br/>as your starting point.</h2><p>The Roundhouse, accommodation and outdoor spaces form the base. From there we can connect the food, activities, entertainment and practical setup around your group.</p></div>
      <div className="guide-links">{options.map(([number, title, note]) => <article className="guide-link" id={`option-${number}`} key={number}>
        <span>{number}</span><div><small>Can be added to your gathering</small><h3>{title}</h3><p>{note}</p></div><b>↗</b>
      </article>)}</div>
    </section>

    <section className="guide-safety"><div><p className="kicker light">The useful bit</p><h2>Tell us what<br/>you are imagining.</h2></div><div><p>A rough brief is enough to start: preferred dates, approximate numbers, whether people need to stay overnight and anything you already know you want included.</p><a className="button button-light" href="mailto:cwmstickydingle@gmail.com?subject=Bespoke gathering enquiry">Start an enquiry <span>↗</span></a></div></section>

    <footer className="guide-footer"><div className="footer-brand"><Image unoptimized className="brand-emblem brand-emblem-footer" src="/images/cwm-sticky-dingle-emblem.webp" alt="Cwm Sticky Dingle emblem" width={156} height={156}/><h2>Made around you.</h2><p>Cwm Sticky Dingle · Govilon · South Wales</p></div><div><Link className="button button-light" href="/our-events">See our own events</Link></div><div className="footer-bottom"><span>Bespoke experiences · V2 development</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
