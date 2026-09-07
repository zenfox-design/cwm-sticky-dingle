import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Events | Cwm Sticky Dingle",
  description: "Seasonal gatherings, retreats, workshops and family days at Cwm Sticky Dingle in South Wales.",
  alternates: { canonical: "/our-events" },
};

const events = [
  {
    number: "01",
    title: "Rooted & Refreshed",
    tag: "Yoga retreat · May and August",
    note: "A restorative stay in the valley with yoga, good food, firelight and time outside. Full dates and booking details to follow.",
  },
  {
    number: "02",
    title: "Autumn Gathering",
    tag: "Seasonal gathering",
    note: "A gathering around the end of the summer season, bringing the yurts down, sharing food and marking the turn towards winter.",
  },
  {
    number: "03",
    title: "Spring Gathering",
    tag: "Seasonal gathering",
    note: "A practical and social weekend to wake the Dingle up for spring, put the yurts back together and prepare the site for the season ahead.",
  },
  {
    number: "04",
    title: "Roundhouse & Pizza Oven Build",
    tag: "Hands on weekend",
    note: "A communal making weekend around the Roundhouse, learning useful skills, working together and eating well at the end of the day.",
  },
  {
    number: "05",
    title: "Rural Craft Weekend",
    tag: "Workshop weekend",
    note: "A weekend of practical rural craft, making and shared skills rooted in the materials and traditions of the surrounding landscape.",
  },
  {
    number: "06",
    title: "Mums’ Wellness Retreat",
    tag: "Wellness retreat",
    note: "A small group retreat built around rest, movement, food, nature and time away from the usual noise.",
  },
  {
    number: "07",
    title: "Day Retreat",
    tag: "Yoga · forest bathing",
    note: "A simple day in the valley combining yoga, guided time in the woods and an unhurried shared meal.",
  },
  {
    number: "08",
    title: "Forest School Family Days",
    tag: "Families · outdoors",
    note: "Nature based family days with practical activities, play, making and time outside in the Dingle.",
  },
];

export default function OurEvents() {
  return <main className="guide-page" id="top">
    <header className="guide-header">
      <Link className="wordmark" href="/"><Image unoptimized className="brand-emblem brand-emblem-header" src="/images/cwm-sticky-dingle-emblem.webp" alt="" width={58} height={58}/><span>Cwm Sticky Dingle</span></Link>
      <nav className="desktop-nav"><Link href="/#stay">Stay</Link><Link href="/#gather">Gather</Link><Link href="/guest-guide">Guest guide</Link><Link href="/our-events">Our events</Link></nav>
      <Link className="header-cta" href="/#enquire">Plan a gathering <span>↗</span></Link>
      <details className="mobile-menu"><summary><span>Menu</span><b aria-hidden="true"/></summary><nav><Link href="/#stay">Stay</Link><Link href="/#gather">Gather</Link><Link href="/guest-guide">Guest guide</Link><Link href="/our-events">Our events</Link><Link href="/bespoke-experiences">Bespoke experiences</Link><Link className="mobile-enquire" href="/#enquire">Plan a gathering <span>↗</span></Link></nav></details>
    </header>

    <section className="guide-hero">
      <Image unoptimized src="/images/roundhouse-event-venue-wales.webp" alt="The Roundhouse at Cwm Sticky Dingle" fill priority sizes="100vw" />
      <div className="guide-hero-shade" />
      <div className="guide-hero-copy"><p className="kicker light">What is happening in the Dingle</p><h1>Come for<br/><em>something special.</em></h1><p>Seasonal gatherings, retreats, workshops and family days shaped around the valley, the Roundhouse and the people who bring it to life.</p></div>
      <a className="guide-scroll" href="#events">See the programme ↓</a>
    </section>

    <section className="guide-intro" id="events">
      <div><p className="kicker">Our programme</p><h2>Reasons to<br/>come back.</h2><p>This is the working programme for Cwm Sticky Dingle events. Some dates are still being developed, so the page will grow as each gathering is confirmed.</p></div>
      <div className="guide-jumps">{events.map(event => <a key={event.number} href={`#event-${event.number}`}><span>{event.number}</span><strong>{event.title}</strong><b>↓</b></a>)}</div>
    </section>

    <section className="guide-group guide-tone-0">
      <div className="guide-group-heading"><p className="kicker">The Dingle calendar</p><h2>Gather, learn,<br/>make, rest.</h2><p>Each event should feel connected to the place rather than dropped into it. Small groups, useful skills, good people and plenty of room to breathe.</p></div>
      <div className="guide-links">{events.map(event => <article className="guide-link" id={`event-${event.number}`} key={event.number}>
        <span>{event.number}</span><div><small>{event.tag}</small><h3>{event.title}</h3><p>{event.note}</p></div><b>↗</b>
      </article>)}</div>
    </section>

    <section className="guide-safety"><div><p className="kicker light">Want to create your own?</p><h2>Your idea<br/>can live here too.</h2></div><div><p>If you have a retreat, workshop, celebration or unusual gathering in mind, the Dingle can also be shaped around your own event.</p><Link className="button button-light" href="/bespoke-experiences">Explore bespoke experiences</Link></div></section>

    <footer className="guide-footer"><div className="footer-brand"><Image unoptimized className="brand-emblem brand-emblem-footer" src="/images/cwm-sticky-dingle-emblem.webp" alt="Cwm Sticky Dingle emblem" width={156} height={156}/><h2>Stay wild. Gather differently.</h2><p>Cwm Sticky Dingle · Govilon · South Wales</p></div><div><Link className="button button-light" href="/#enquire">Plan a gathering</Link></div><div className="footer-bottom"><span>Our events · V2 development</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
