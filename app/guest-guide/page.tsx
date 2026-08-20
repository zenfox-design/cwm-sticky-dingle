import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Things to Do near Abergavenny",
  description: "A local guide to walks, wild swimming, climbing, canal trips, heritage, food and events around Govilon, Abergavenny and Bannau Brycheiniog.",
  alternates: { canonical: "/guest-guide" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Cwm Sticky Dingle",
    title: "Things to Do near Abergavenny | Cwm Sticky Dingle",
    description: "Hand-picked walks, adventures, heritage, food and events around Govilon, Abergavenny and Bannau Brycheiniog.",
    url: "/guest-guide",
    images: [{
      url: "/images/woodland-walk-near-abergavenny.webp",
      width: 867,
      height: 1800,
      alt: "A sunlit woodland path near Cwm Sticky Dingle",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Things to Do near Abergavenny | Cwm Sticky Dingle",
    description: "Hand-picked walks, adventures, heritage, food and events around Govilon, Abergavenny and Bannau Brycheiniog.",
    images: ["/images/woodland-walk-near-abergavenny.webp"],
  },
};

type GuideLink = { title: string; tag: string; note: string; href: string };

const groups: { id: string; number: string; title: string; intro: string; links: GuideLink[] }[] = [
  {
    id: "walks", number: "01", title: "Walks & wild places", intro: "Canal-side rambles, hilltop views and three local mountains with very different characters.",
    links: [
      { title: "Walking around Abergavenny", tag: "Route collection", note: "A useful local starting point for the Blorenge, Sugar Loaf, Skirrid and gentler valley walks.", href: "https://www.visitmonmouthshire.com/explore/abergavenny/walking-abergavenny" },
      { title: "Sugar Loaf", tag: "Mountain walk", note: "National Trust visitor information for the open moorland and far-reaching summit views.", href: "https://www.nationaltrust.org.uk/visit/wales/sugar-loaf-skirrid-and-usk-valley/visiting-the-sugar-loaf" },
      { title: "The Skirrid trail", tag: "3.8 miles · Energetic", note: "A distinctive ridge walk with a long history and a rewarding panorama from the summit.", href: "https://www.nationaltrust.org.uk/visit/wales/sugar-loaf-skirrid-and-usk-valley/the-skirrid-trail-in-the-sugar-loaf-and-usk-valley" },
      { title: "Keeper’s Pond & the Blorenge", tag: "Historic landscape", note: "Begin beside the early nineteenth-century reservoir and climb into the Blaenavon landscape.", href: "https://www.visitblaenavon.co.uk/en/visit-blaenavon/places-to-visit/the-keepers-pond" },
      { title: "Govilon to Llanfoist", tag: "Canal walk · Easy", note: "A mostly level, shaded stretch of the Monmouthshire & Brecon Canal for a gentler day out.", href: "https://www.visitmonmouthshire.com/inspire-me/seasons-in-monmouthshire/summer-in-monmouthshire/summer-walks" },
    ],
  },
  {
    id: "adventure", number: "02", title: "Adventure & instruction", intro: "Go with people who know the rock, rivers, caves and flying sites. Booking ahead is strongly recommended.",
    links: [
      { title: "Govilon Learning & Activity Centre", tag: "Right here in Govilon", note: "Climbing, caving, paddlesport, bushcraft, archery and outdoor programmes for groups.", href: "https://www.govilon.org.uk/" },
      { title: "Crosfield Outdoors", tag: "Local instructors", note: "Abergavenny-based guided climbing, canoeing, caving, gorge walking and mountain biking.", href: "https://www.crosfieldoutdoors.wales/" },
      { title: "Tandem paragliding", tag: "Weather dependent", note: "Fly with an instructor; the Blorenge is among the local sites used when conditions suit.", href: "https://www.paraglide.co.uk/tandem-paragliding-flights-wales-ezp-3.html" },
      { title: "Blorenge flying site guide", tag: "Qualified pilots only", note: "Official site information from the South East Wales Hang Gliding and Paragliding Club.", href: "https://www.flysouthwales.co.uk/site-guides/blorenge/" },
      { title: "Black Mountain Activities", tag: "Full-day adventures", note: "Rock climbing, caving, canoeing, kayaking and gorge walking across the region.", href: "https://www.blackmountain.co.uk/" },
    ],
  },
  {
    id: "water", number: "03", title: "Canal, boats & paddling", intro: "The canal threads quietly through the valley. Explore it on foot, by bike, in a canoe or from a day boat.",
    links: [
      { title: "Goytre Wharf", tag: "Canal & visitor hub", note: "Walks, waterside views and a useful base for exploring the Monmouthshire & Brecon Canal.", href: "https://canalrivertrust.org.uk/canals-and-rivers/places-to-visit/goytre-wharf" },
      { title: "Goytre Wharf day boats", tag: "Self-drive hire", note: "Book a day boat and travel at canal pace through the wooded landscape.", href: "https://www.abcdayboathire.com/locations/goytre-wharf/" },
      { title: "Canal Trust boat trips", tag: "Skippered trips", note: "Community-run passenger trips on the Monmouthshire & Brecon Canal.", href: "https://mbact.org.uk/our-boats/" },
      { title: "Keeper’s Pond", tag: "Open water", note: "A dramatic upland reservoir. It is unmanaged, so assess weather and water conditions carefully.", href: "https://www.visitblaenavon.co.uk/en/visit-blaenavon/places-to-visit/the-keepers-pond" },
    ],
  },
  {
    id: "heritage", number: "04", title: "History, industry & ruins", intro: "This landscape holds layers of iron, coal, faith, rebellion and border history — much of it still visible.",
    links: [
      { title: "Big Pit National Coal Museum", tag: "Underground tour", note: "Descend into a real coal mine and meet the industrial story that shaped the valleys.", href: "https://museum.wales/bigpit/" },
      { title: "Blaenafon Ironworks", tag: "World Heritage Site", note: "Furnaces, workers’ cottages and the remains of a globally important iron-making landscape.", href: "https://cadw.gov.wales/visit/places-to-visit/blaenafon-ironworks" },
      { title: "Blaenavon Heritage Railway", tag: "Steam & diesel", note: "A volunteer-run railway journey through the Blaenavon World Heritage landscape.", href: "https://www.bhrailway.co.uk/" },
      { title: "Abergavenny Museum & Castle", tag: "Town history", note: "A compact museum set within the castle grounds, ideal alongside a town visit.", href: "https://www.visitmonmouthshire.com/things-to-do/abergavenny-museum-and-castle-p1502571" },
      { title: "Llanthony Priory", tag: "900-year-old ruin", note: "Atmospheric priory remains in the secluded Vale of Ewyas, with mountain walks all around.", href: "https://cadw.gov.wales/visit/places-to-visit/llanthony-priory" },
      { title: "Tretower Court & Castle", tag: "Medieval Wales", note: "A striking pairing of ruined castle and beautifully preserved late-medieval court.", href: "https://cadw.gov.wales/visit/places-to-visit/tretower-court-and-castle" },
    ],
  },
  {
    id: "food", number: "05", title: "Markets, food & town", intro: "Abergavenny is a market town with a serious appetite. Check live listings before you set out.",
    links: [
      { title: "Abergavenny markets & events", tag: "Live listings", note: "Town-centre markets, makers, antiques and seasonal events in one current directory.", href: "https://www.visitmonmouthshire.com/explore/abergavenny/abergavenny-events" },
      { title: "Places to eat & drink", tag: "Local directory", note: "Browse restaurants, cafés, pubs and producers in and around Abergavenny.", href: "https://www.visitmonmouthshire.com/explore/abergavenny/places-to-eat-and-drink-abergavenny" },
      { title: "Abergavenny Food Festival", tag: "19–20 September 2026", note: "The town’s flagship weekend of producers, talks, tastings and family events.", href: "https://www.abergavennyfoodfestival.com/" },
      { title: "Visit Abergavenny", tag: "Independent town guide", note: "Shops, cafés, culture and practical ideas for making a day of the town.", href: "https://visitabergavenny.co.uk/" },
    ],
  },
  {
    id: "events", number: "06", title: "Events & rainy days", intro: "Save these live calendars for performances, family days, exhibitions and last-minute changes of plan.",
    links: [
      { title: "What’s on in Monmouthshire", tag: "Live county calendar", note: "The broadest official listing for festivals, workshops, exhibitions and family events.", href: "https://www.visitmonmouthshire.com/whats-on/all-events" },
      { title: "Borough Theatre", tag: "Performance", note: "Comedy, music, theatre and community shows in the centre of Abergavenny.", href: "https://boroughtheatreabergavenny.co.uk/whats-on/" },
      { title: "Visit Blaenavon", tag: "Rainy-day ideas", note: "A gateway to museums, heritage attractions and seasonal events across the World Heritage Site.", href: "https://www.visitblaenavon.co.uk/en/visit-blaenavon" },
      { title: "Abergavenny events", tag: "In town now", note: "A quick check for markets, workshops and events happening during your stay.", href: "https://www.visitmonmouthshire.com/explore/abergavenny/abergavenny-events" },
    ],
  },
];

export default function GuestGuide() {
  return <main className="guide-page" id="top">
    <header className="guide-header">
      <Link className="wordmark" href="/"><Image unoptimized className="brand-emblem brand-emblem-header" src="/images/cwm-sticky-dingle-emblem.webp" alt="" width={58} height={58}/><span>Cwm Sticky Dingle</span></Link>
      <nav className="desktop-nav"><a href="#walks">Walk</a><a href="#adventure">Adventure</a><a href="#heritage">History</a><a href="#food">Eat</a></nav>
      <Link className="header-cta" href="/">Return to the Dingle <span>↗</span></Link>
      <details className="mobile-menu"><summary><span>Menu</span><b aria-hidden="true"/></summary><nav><a href="#walks">Walk</a><a href="#adventure">Adventure</a><a href="#heritage">History</a><a href="#food">Eat</a><Link className="mobile-enquire" href="/">Return to the Dingle <span>↗</span></Link></nav></details>
    </header>

    <section className="guide-hero">
      <Image unoptimized src="/images/woodland-walk-near-abergavenny.webp" alt="A sunlit woodland path near Cwm Sticky Dingle" fill priority sizes="100vw" />
      <div className="guide-hero-shade" />
      <div className="guide-hero-copy"><p className="kicker light">The Cwm Sticky Dingle guest guide</p><h1>Go a little<br/><em>further.</em></h1><p>Walks worth waking early for, people to adventure with, old stories in the hills, and good places to eat afterwards.</p></div>
      <a className="guide-scroll" href="#start">Start exploring ↓</a>
    </section>

    <section className="guide-intro" id="start">
      <div><p className="kicker">Hand-picked, not exhaustive</p><h2>Your field notes<br/>for the valley.</h2><p>These are places and providers we’d point a friend towards. The links take you directly to route owners, local operators and official listings, so you can check current details and book with confidence.</p></div>
      <div className="guide-jumps">{groups.map(group => <a key={group.id} href={`#${group.id}`}><span>{group.number}</span><strong>{group.title}</strong><b>↓</b></a>)}</div>
    </section>

    {groups.map((group, groupIndex) => <section className={`guide-group guide-tone-${groupIndex % 3}`} id={group.id} key={group.id}>
      <div className="guide-group-heading"><p className="kicker">Field note {group.number}</p><h2>{group.title}</h2><p>{group.intro}</p></div>
      <div className="guide-links">{group.links.map((item, index) => <a className="guide-link" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
        <span>{String(index + 1).padStart(2,"0")}</span><div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.note}</p></div><b>↗</b>
      </a>)}</div>
    </section>)}

    <section className="guide-safety"><div><p className="kicker light">A note before you go</p><h2>Wild places<br/>change quickly.</h2></div><div><p>Mountain weather, water levels, access and opening times can all change. Check the linked provider on the day, take suitable clothing and equipment, and use qualified instructors for technical activities.</p><p>Our recommendations are a starting point, not a guarantee of access, conditions or availability.</p></div></section>
    <footer className="guide-footer"><div className="footer-brand"><Image unoptimized className="brand-emblem brand-emblem-footer" src="/images/cwm-sticky-dingle-emblem.webp" alt="Cwm Sticky Dingle Glamping emblem" width={156} height={156}/><h2>Come back with stories.</h2><p>Stay wild. Gather differently.</p></div><div><Link className="button button-light" href="/">Explore Cwm Sticky Dingle</Link></div><div className="footer-bottom"><span>Guest guide · August 2026</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
