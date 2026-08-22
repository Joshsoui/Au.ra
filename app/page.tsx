import Link from 'next/link';

const steps=[
  ['01','Build your profile','Laat zien wie je bent als artiest: je sound, releases, socials, gigs, visuals en waar je naartoe wilt.'],
  ['02','Submit your music','Deel je beste tracks. Je profiel en muziek worden meegenomen in een bredere artist review.'],
  ['03','Build what’s missing','Je ziet waar je volgende kansen liggen. Wat nog ontbreekt kun je zelf verbeteren — of samen met AU·RA opbouwen.']
];

const outcomes=[
  ['Release direction','Welke release past bij waar jij nu staat — en wat moet er kloppen voordat je hem naar buiten brengt?'],
  ['Artist development','Scherp je sound, profiel, visuals en verhaal aan tot één artiestenmerk dat klopt.'],
  ['Industry opportunities','Sterke profielen kunnen worden meegenomen voor introductions, bookings, label opportunities of representation.']
];

const buildWithAura=[
  ['EPK & artist story','Van bio en press shots tot één professioneel verhaal dat je naar labels en bookers kunt sturen.'],
  ['Content & visuals','Bouw de content, visuals en release-assets die je profiel sterker en consistenter maken.'],
  ['Platform presence','Zorg dat Spotify, SoundCloud, Instagram, TikTok en YouTube samen hetzelfde artiestenverhaal vertellen.'],
  ['Release strategy','Werk je volgende release uit: positionering, planning, pitching en wat er vóór release moet staan.']
];

export default function Home(){
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <div className="wrap">
      <nav className="nav"><Link className="brand" href="/">AU·RA</Link><div className="navlinks"><Link className="pill" href="#how">How it works</Link><Link className="pill" href="/dashboard">Agency</Link></div></nav>

      <section className="hero new-hero">
        <div className="hero-kicker"><span>FOR ARTISTS WHO WANT TO MOVE</span><span className="hero-line"/></div>
        <h1>Make music.<br/><span>Build momentum.</span></h1>
        <div className="hero-bottom"><p className="hero-copy">Je maakt muziek omdat je verder wilt dan alleen tracks uploaden. AU·RA brengt je muziek, profiel en ambitie samen, laat zien wat je volgende stap is én helpt je bouwen aan wat daarvoor nog ontbreekt.</p><div className="actions"><Link className="btn" href="/artist">Submit your music</Link><Link className="btn alt" href="#how">Discover AU·RA</Link></div></div>
        <div className="hero-ticker"><span>ARTIST DEVELOPMENT</span><i>•</i><span>RELEASE STRATEGY</span><i>•</i><span>BOOKINGS</span><i>•</i><span>REPRESENTATION</span><i>•</i><span>INDUSTRY ACCESS</span></div>
      </section>

      <section className="section intro-statement"><p className="eyebrow">AU·RA FOR ARTISTS</p><h2>A good track can open a door.<br/>A strong artist is ready when it does.</h2><p className="lead">Voor upcoming DJ’s, producers en artiesten die hun project serieus nemen. We kijken niet alleen naar je muziek, maar naar het complete plaatje — en helpen je de onderdelen opbouwen die nodig zijn om professioneler voor de dag te komen.</p></section>

      <section className="section explainer" id="how">
        <div className="section-head"><div><p className="eyebrow">HOW IT WORKS</p><h2>From music to movement.</h2></div><p className="lead small-lead">Sound, identiteit, releases, live presence, momentum en ambitie vormen samen je artiestenprofiel. AU·RA laat zien wat al sterk staat en waar nog werk te doen is.</p></div>
        <div className="grid">{steps.map(([n,t,d])=><div className="card step-card" key={t}><span className="stepnr">{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
      </section>

      <section className="section"><p className="eyebrow">WHERE IT CAN LEAD</p><h2>Build the artist. Create the opportunity.</h2><div className="outcome-grid">{outcomes.map(([t,d])=><div className="outcome" key={t}><div className="dot"/><div><h3>{t}</h3><p className="muted">{d}</p></div></div>)}</div></section>

      <section className="section split assessment-demo"><div className="callout"><p>ARTIST REVIEW</p><div className="score" style={{fontSize:42}}>Strong potential</div><h2 style={{fontSize:36}}>Your profile is moving in the right direction.</h2><p className="muted">Je sound en positionering vallen op. Met sterkere live content en een duidelijke volgende release wordt je verhaal als artiest overtuigender.</p></div><div className="card"><p className="muted">NEXT DIRECTION</p><div className="list"><div className="item"><span>Next release positioneren</span><b>Priority</b></div><div className="item"><span>Live profile versterken</span><b>Next</b></div><div className="item"><span>EPK & visuals aanscherpen</span><b>Recommended</b></div><div className="item"><span>Representation consideration</span><b>Selected</b></div></div></div></section>

      <section className="section build-section"><div className="section-head"><div><p className="eyebrow">BUILD WITH AU·RA</p><h2>Missing something?<br/>Build it here.</h2></div><p className="lead small-lead">Je krijgt niet alleen te horen wat beter kan. Voor onderdelen die nog ontbreken kan AU·RA je helpen ze daadwerkelijk professioneel op te bouwen — direct vanuit je artist profile.</p></div><div className="build-grid">{buildWithAura.map(([t,d],i)=><div className="build-row" key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div><Link href="/artist">Build with AU·RA ↗</Link></div>)}</div><p className="build-note">Zelf doen blijft altijd mogelijk. AU·RA support is er wanneer je sneller of professioneler wilt doorpakken.</p></section>

      <section className="section representation-block representation-strong" id="representation"><div className="rep-top"><p className="eyebrow">REPRESENTATION</p><span>SELECTIVE · PERSONAL · LONG TERM</span></div><h2>Some artists need advice.<br/><span>Some are ready for a team.</span></h2><div className="rep-grid"><div><p className="lead">We zijn altijd op zoek naar artiesten met een eigen sound, duidelijke ambitie en de drive om iets op te bouwen. Niet om zoveel mogelijk namen te verzamelen, maar om met de juiste artiesten echt stappen te zetten.</p><p className="rep-copy">Word je geselecteerd voor representation, dan gaat het verder dan feedback op een profiel. We bouwen mee aan je carrière: van strategie en releases tot labelrelaties, bookings, positionering en de keuzes die bepalen wat er daarna gebeurt.</p></div><div className="rep-card"><span className="eyebrow">WHAT REPRESENTATION MEANS</span><div><b>Strategy</b><small>Een duidelijke koers voor jou als artiest.</small></div><div><b>Releases & labels</b><small>De juiste muziek bij de juiste mensen krijgen.</small></div><div><b>Bookings & network</b><small>Nieuwe deuren openen wanneer je er klaar voor bent.</small></div><div><b>Long-term development</b><small>Niet één release. Een carrière bouwen.</small></div></div></div><div className="rep-cta"><div><b>Think you’re ready?</b><span>Put your music in front of us.</span></div><Link className="btn" href="/artist">Submit for representation</Link></div></section>
    </div>
  </main>
}
