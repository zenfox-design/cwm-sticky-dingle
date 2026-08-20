import Image from "next/image";
import TopoMap from "./TopoMap";

const stays = [
  {eyebrow:"Sleep under canvas",title:"The Yurt",text:"A wood-fired hideaway for four, with its own shepherd’s-hut kitchen and bathroom beside the stream.",cta:"Check availability on Airbnb",href:"https://www.airbnb.co.uk/rooms/38643867",image:"/images/yurt-glamping-near-abergavenny.webp",alt:"Canvas yurt and private shepherd's hut in a meadow near Abergavenny",note:"4 guests · private kitchen · private bathroom"},
  {eyebrow:"A vintage escape",title:"Willowbrook",text:"A lovingly converted 1970s bus, hidden among trees with spring water, solar power and the valley at your door.",cta:"Check availability on Canopy & Stars",href:"https://www.canopyandstars.co.uk/britain/wales/monmouthshire/tyr-trawst/willowbrook",image:"/images/willowbrook-vintage-bus-glamping.webp",alt:"Willowbrook converted 1970s bus in the woods at Cwm Sticky Dingle",note:"2 guests · private kitchen · private bathroom"},
];
const events=["Intimate weddings","Performances","Microfestivals","School & charity trips","Retreats","Private gatherings"];
const extras=[
  {number:"01",title:"Stay",summary:"Yurt · Willowbrook · bell tents · camping",copy:"Turn the gathering into a whole weekend. Mix the two permanent hideaways with additional canvas accommodation and simple woodland camping for your wider group.",items:["The Yurt and Willowbrook","Bell tents or an extra yurt","Camping beneath the trees","Private kitchens and washrooms"]},
  {number:"02",title:"Feast",summary:"Catering · bar · firepit · field kitchen · BBQ",copy:"From a long-table supper to food cooked over the fire, we can help shape a relaxed way of eating that suits the setting and the size of your gathering.",items:["Local catering options","Bar setup and service","Field kitchen facilities","Firepit and BBQ cooking"]},
  {number:"03",title:"Stage",summary:"Sound · lighting · marquees · performance space",copy:"Use the Roundhouse as a natural focal point, then build outward with the production and shelter your idea needs—from an intimate acoustic set to a small celebration.",items:["Roundhouse performance space","Sound and lighting options","Marquees and weather cover","Flexible outdoor layouts"]},
];
const adventures=[
  {number:"01",id:"blorenge",title:"The Blorenge",meta:"Mountain walk · 4–7 miles",description:"Heather, big skies and views across the Vale of Usk."},
  {number:"02",id:"keepers-pond",title:"Keeper’s Pond",meta:"Wild swim · 10 min drive",description:"An upland pool shaped by the ironworkers of Blaenavon."},
  {number:"03",id:"gilwern-hill",title:"Gilwern Hill",meta:"Climbing · on the doorstep",description:"Limestone crags with more than a hundred established routes."},
  {number:"04",id:"mon-brec-canal",title:"Mon & Brec Canal",meta:"Walk or cycle · from Govilon",description:"A gentle towpath journey through wooded hills and villages."},
];
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://cwmstickydingle.co.uk/#website",
      url: "https://cwmstickydingle.co.uk/",
      name: "Cwm Sticky Dingle",
      description: "Off-grid stays and woodland gatherings in a hidden Welsh valley.",
      inLanguage: "en-GB",
    },
    {
      "@type": "LodgingBusiness",
      "@id": "https://cwmstickydingle.co.uk/#business",
      name: "Cwm Sticky Dingle",
      url: "https://cwmstickydingle.co.uk/",
      logo: "https://cwmstickydingle.co.uk/images/cwm-sticky-dingle-emblem.png",
      image: [
        "https://cwmstickydingle.co.uk/images/yurt-glamping-near-abergavenny.webp",
        "https://cwmstickydingle.co.uk/images/willowbrook-vintage-bus-glamping.webp",
        "https://cwmstickydingle.co.uk/images/roundhouse-event-venue-wales.webp",
      ],
      description: "Off-grid yurt and vintage bus glamping near Abergavenny, with a woodland roundhouse for retreats, celebrations and small events.",
      email: "cwmstickydingle@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Upper Cwm Farm, Cwm Lane",
        addressLocality: "Govilon",
        addressRegion: "Monmouthshire",
        postalCode: "NP7 9RY",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.8059583,
        longitude: -3.0862543,
      },
      areaServed: ["Abergavenny", "Monmouthshire", "Bannau Brycheiniog", "South Wales"],
      sameAs: [
        "https://www.instagram.com/cwmstickydingle/",
        "https://www.facebook.com/p/Cwm-Sticky-Dingle-Glamping-100091745062482/",
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Private kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private bathroom", value: true },
      ],
      containsPlace: [
        {
          "@type": "Accommodation",
          name: "The Yurt",
          description: "A private yurt for four with a shepherd's-hut kitchen and bathroom beside the stream.",
          occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
          url: "https://www.airbnb.co.uk/rooms/38643867",
        },
        {
          "@type": "Accommodation",
          name: "Willowbrook",
          description: "A converted 1970s bus for two with spring water, solar power, a private kitchen and bathroom.",
          occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          url: "https://www.canopyandstars.co.uk/britain/wales/monmouthshire/tyr-trawst/willowbrook",
        },
      ],
    },
  ],
};

export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><main>
<header className="site-header"><a className="wordmark" href="#top"><Image unoptimized className="brand-emblem brand-emblem-header" src="/images/cwm-sticky-dingle-emblem.webp" alt="" width={58} height={58}/><span>Cwm Sticky Dingle</span></a><nav className="desktop-nav"><a href="#stay">Stay</a><a href="#gather">Gather</a><a href="/guest-guide">Guest guide</a><a href="#story">Our story</a></nav><a className="header-cta" href="#enquire">Plan a gathering <span>↗</span></a><details className="mobile-menu"><summary><span>Menu</span><b aria-hidden="true"/></summary><nav><a href="#stay">Stay</a><a href="#gather">Gather</a><a href="/guest-guide">Guest guide</a><a href="#story">Our story</a><a className="mobile-enquire" href="#enquire">Plan a gathering <span>↗</span></a></nav></details></header>
<section className="hero" id="top"><Image unoptimized className="hero-image" src="/images/hillhero.webp" alt="Green hills and open sky above the Vale of Usk near Cwm Sticky Dingle" fill priority sizes="100vw"/><div className="hero-shade"/><div className="contours"/><Image unoptimized className="hero-emblem" src="/images/cwm-sticky-dingle-emblem.webp" alt="Cwm Sticky Dingle Glamping emblem" width={250} height={250}/><div className="hero-copy"><p className="kicker light">Off-grid glamping · Govilon · South Wales</p><h1>Stay wild.<br/>Gather differently.</h1><p className="hero-intro">A secluded yurt, a vintage bus and a woodland roundhouse near Abergavenny and Bannau Brycheiniog.</p><div className="hero-actions"><a className="button button-light" href="#stay">Find your stay</a><a className="text-link" href="#gather">Host something special <span>↗</span></a></div></div><div className="hero-location"><span className="pulse"/><span>Between the Blorenge<br/>&amp; Gilwern Hill</span></div><a className="scroll" href="#intro"><span>Discover</span><span>↓</span></a></section>
<section className="intro-section" id="intro"><p className="vertical-label">A hidden valley in South Wales</p><div className="intro-copy"><p className="kicker">Come off the road</p><h2>Follow the stream.<br/>Lose the signal.<br/><em>Find the place.</em></h2></div><div className="intro-note"><p>Far from traffic and streetlights, the Dingle is a place of running water, deep woods and open fires—only 3.5 miles from Abergavenny, but a world away.</p><a className="text-link" href="#story">Meet the valley <span>→</span></a></div><div className="sun-seal"><span>51.82° N</span><strong>☼</strong><span>3.07° W</span></div></section>
<section className="stay-section" id="stay"><div className="section-heading"><div><p className="kicker">Glamping near Abergavenny</p><h2>Two off-grid stays.<br/>One wild valley.</h2></div><p>Characterful, self-contained and completely private. Each has its own kitchen and bathroom, with the woods, streams and firepit shared only with the birds.</p></div><div className="stay-grid">{stays.map(s=><article className="stay-card" key={s.title}><Image unoptimized src={s.image} alt={s.alt} fill sizes="(max-width: 620px) 100vw, 50vw"/><div className="stay-gradient"/><div className="stay-copy"><p className="kicker light">{s.eyebrow}</p><h3>{s.title}</h3><p>{s.text}</p><small>{s.note}</small><a href={s.href} target="_blank" rel="noreferrer">{s.cta}<span>↗</span></a></div></article>)}</div></section>
<section className="gather-section" id="gather"><div className="roundhouse-image"><Image unoptimized src="/images/roundhouse-event-venue-wales.webp" alt="Hand-built woodland roundhouse event space in South Wales" fill sizes="(max-width: 900px) 100vw, 54vw"/><div className="roundhouse-label"><span>New</span>The Roundhouse</div></div><div className="gather-copy"><p className="kicker light">Gather in the woods</p><h2>A space with<br/>a story to tell.</h2><p className="large-copy">A timber roundhouse and open camping ground for celebrations, performances, retreats and ideas that need room to breathe.</p><div className="event-tags">{events.map(e=><span key={e}>{e}</span>)}</div><a className="button button-rust" href="#enquire">Explore gatherings</a></div></section>
<section className="build-event"><div className="event-title"><p className="kicker">Build your gathering</p><h2>Bring the idea.<br/><em>We’ll shape the rest.</em></h2><p className="event-intro">No two gatherings need the same setup. Start with the Roundhouse and the valley, then add the places to sleep, eat and celebrate that make the occasion work.</p><div className="event-notes"><span>One valley</span><span>Flexible setup</span><span>Made around you</span></div></div><div className="extras-wrap"><div className="extras-list">{extras.map((item,index)=><details className="extra" name="gathering-options" key={item.number} open={index===0}><summary><span>{item.number}</span><h3>{item.title}</h3><p>{item.summary}</p><b aria-hidden="true"/></summary><div className="extra-panel"><p>{item.copy}</p><ul>{item.items.map(detail=><li key={detail}>{detail}</li>)}</ul></div></details>)}</div><div className="event-next"><p>Tell us the rough guest numbers, dates and the kind of atmosphere you have in mind. We’ll help work out what fits.</p><a className="text-link" href="#enquire">Start shaping your gathering <span>→</span></a></div></div></section>
<section className="break-image"><Image unoptimized src="/images/woodland-swing-cwm-sticky-dingle.webp" alt="Wooden swing beneath an old tree at Cwm Sticky Dingle" fill sizes="100vw"/><div><p className="kicker light">Room to breathe</p><p>Camp under old trees.<br/>Cook over fire.<br/>Stay up late.</p></div></section>
<section className="explore-section" id="explore"><div className="explore-top"><div><p className="kicker light">Step beyond the gate</p><h2>The wild is<br/>closer than you think.</h2></div><p>Walk, swim, climb, fly or simply follow the canal to lunch. We’ll point you towards the best routes, seasonal conditions and people who know the hills.</p></div><TopoMap/><p className="map-disclaimer">Select a place below to locate it on the map. This is an area guide rather than arrival directions.</p><div className="adventure-list">{adventures.map((item)=><a className="adventure-link" href={`#map-${item.id}`} aria-label={`Show ${item.title} on the map`} key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><small>{item.meta}</small></div><p>{item.description}</p><b>↗</b></a>)}</div><a className="guide-home-cta" href="/guest-guide"><div><small>Field notes for your stay</small><strong>Open the complete<br/>guest guide.</strong><p>Discover local walks, wild swimming, climbing, canal trips, heritage and places worth eating.</p></div><span aria-hidden="true">↗</span></a></section>
<section className="story-section" id="story"><div className="story-photo"><Image unoptimized src="/images/house-lore.webp" alt="Historic drawing of a house and horse-drawn tramway in the Welsh hills" fill sizes="(max-width: 900px) 78vw, 32vw"/><div className="story-ring"><span>Wales</span><span>Cordell Country</span></div></div><div className="story-copy"><p className="kicker">Lore of the land</p><h2>Iron, water<br/>and old stories.</h2><p className="large-copy">These hills carry the marks of ironworkers, canal builders, drovers and dreamers. Alexander Cordell set his stories in this landscape; today the old tracks still run above the valley.</p><p>We’re collecting the history, names and family memories of the Dingle to share without sanding away the rough edges.</p><a className="text-link" href="#enquire">Join the valley story <span>→</span></a></div></section>
<section className="enquire-section" id="enquire"><div><p className="kicker light">Your gathering starts here</p><h2>What could happen<br/>in the Dingle?</h2></div><div className="enquire-copy"><p>Tell us what you’re imagining—dates, guest numbers, sleeping plans and the extras you may need. We’ll help shape what is possible.</p><a className="button button-light" href="mailto:cwmstickydingle@gmail.com?subject=Gathering enquiry">Start an enquiry <span>↗</span></a></div></section>
<footer><div className="footer-brand"><Image unoptimized className="brand-emblem brand-emblem-footer" src="/images/cwm-sticky-dingle-emblem.webp" alt="Cwm Sticky Dingle Glamping emblem" width={156} height={156}/><h2>Cwm Sticky Dingle</h2><p>Stay wild. Gather differently.</p></div><div className="footer-links"><div><span>Discover</span><a href="#stay">Stay</a><a href="#gather">Gather</a><a href="/guest-guide">Guest guide</a></div><div><span>Follow</span><a href="https://www.instagram.com/cwmstickydingle/">Instagram</a><a href="https://www.facebook.com/p/Cwm-Sticky-Dingle-Glamping-100091745062482/">Facebook</a></div><div><span>Find us</span><p>Govilon<br/>Abergavenny<br/>South Wales</p></div></div><div className="footer-bottom"><span>Homepage concept · August 2026</span><a href="#top">Back to top ↑</a></div></footer>
</main></>}
