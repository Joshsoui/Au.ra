import Link from 'next/link';

const steps=[
  ['01','Build your profile','Laat zien wie je bent als artiest: je sound, releases, socials, gigs, visuals en waar je naartoe wilt.'],
  ['02','Submit your music','Deel je beste tracks. Je profiel en muziek worden meegenomen in een bredere artist review.'],
  ['03','Move forward','Krijg richting op je volgende stap — van release strategy en artist development tot bookings en mogelijke representation.']
];

const outcomes=[
  ['Release direction','Welke release past bij waar jij nu staat — en wat moet er kloppen voordat je hem naar buiten brengt?'],
  ['Artist development','Scherp je sound, profiel, visuals en verhaal aan tot één artiestenmerk dat klopt.'],
  ['Industry opportunities','Sterke profielen kunnen worden meegenomen voor introductions, bookings, label opportunities of representation.']
];

export default function Home(){
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <div className="wrap">
      <nav className="nav"><Link className="brand" href="/">AU·RA</Link><div className="navlinks"><Link className="pill" href="#how">How it works</Link><Link className="pill" href="/dashboard">Agency</Link></div></nav>

      <section className="hero new-hero">
        <div className="hero-kicker"><span>FOR ARTISTS WHO WANT TO MOVE</span><span className="hero-line"/></div>
        <h1>Make music.<br/><span>Build momentum.</span></h1>
        <div className="hero-bottom"><p className="hero-copy">Je maakt muziek omdat je verder wilt dan alleen tracks uploaden. AU·RA brengt je muziek, profiel en ambitie samen en helpt bepalen wat jouw volgende serieuze stap is.</p><div className="actions"><Link className="btn" href="/artist">Submit your music</Link><Link className="btn alt" href="#how">Discover AU·RA</Link></div></div>
        <div className="hero-ticker"><span>ARTIST DEVELOPMENT</span><i>•</i><span>RELEASE STRATEGY</span><i>•</i><span>BOOKINGS</span><i>•</i><span>REPRESENTATION</span><i>•</i><span>INDUSTRY ACCESS</span></div>
      </section>

      <section className="section intro-statement"><p className="eyebrow">AU·RA FOR ARTISTS</p><h2>A good track can open a door.<br/>A strong artist knows what comes next.</h2><p className="lead">Voor upcoming DJ’s, producers en artiesten die hun project serieus nemen. Geen standaard demo-inbox, maar één plek waar je laat zien wat je maakt, waar je staat en waar je naartoe wilt.</p></section>

      <section className="section explainer" id="how">
        <div className="section-head"><div><p className="eyebrow">HOW IT WORKS</p><h2>From music to movement.</h2></div><p className="lead small-lead">Wij kijken verder dan één track. Sound, identiteit, releases, live presence, momentum en ambitie vormen samen het verhaal van een artiest.</p></div>
        <div className="grid">{steps.map(([n,t,d])=><div className="card step-card" key={t}><span className="stepnr">{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
      </section>

      <section className="section"><p className="eyebrow">WHERE IT CAN LEAD</p><h2>Build the artist. Create the opportunity.</h2><div className="outcome-grid">{outcomes.map(([t,d])=><div className="outcome" key={t}><div className="dot"/><div><h3>{t}</h3><p className="muted">{d}</p></div></div>)}</div></section>

      <section className="section split assessment-demo"><div className="callout"><p>ARTIST REVIEW</p><div className="score" style={{fontSize:42}}>Strong potential</div><h2 style={{fontSize:36}}>Your profile is moving in the right direction.</h2><p className="muted">Je sound en positionering vallen op. Met sterkere live content en een duidelijke volgende release wordt je verhaal als artiest overtuigender.</p></div><div className="card"><p className="muted">NEXT DIRECTION</p><div className="list"><div className="item"><span>Next release positioneren</span><b>Priority</b></div><div className="item"><span>Live profile versterken</span><b>Next</b></div><div className="item"><span>EPK & visuals aanscherpen</span><b>Recommended</b></div><div className="item"><span>Representation consideration</span><b>Selected</b></div></div></div></section>

      <section className="section representation-block" id="representation"><p className="eyebrow">REPRESENTATION</p><h2>Ready for more than doing it alone?</h2><p className="lead">AU·RA is ook een plek waar nieuw talent wordt ontdekt. Als je muziek, ontwikkeling en ambitie aansluiten, kan je profiel worden geselecteerd voor een persoonlijke kennismaking — en mogelijk de volgende stap richting management, releases of bookings.</p><div className="actions"><Link className="btn" href="/artist">Put yourself on the radar</Link></div></section>
    </div>
  </main>
}
