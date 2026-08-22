import Link from 'next/link';

const steps=[
  ['1','Vertel ons wie je bent','Maak je artiestprofiel compleet met je muziek, releases, socials, gigs en plannen.'],
  ['2','Laat je muziek beoordelen','Stuur je muziek en profiel in. We kijken naar je sound, positionering, momentum en waar je nu staat.'],
  ['3','Ontdek wat je volgende stap is','Je krijgt gericht inzicht in wat er nodig is voor releases, bookings, development of representation.']
];

const outcomes=[
  ['Release direction','Krijg inzicht in hoe sterk je release staat en welke route daarbij past.'],
  ['Artist development','Zie waar je profiel al sterk is en waar je jezelf als artiest verder kunt ontwikkelen.'],
  ['Representation','Val je op en zien we een sterke fit? Dan kan je profiel door naar een persoonlijke agency review.']
];

export default function Home(){
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <div className="wrap">
      <nav className="nav"><div className="brand">AU·RA</div><div className="navlinks"><Link className="pill" href="#how">Hoe werkt het?</Link><Link className="pill" href="/dashboard">Agency</Link></div></nav>

      <section className="hero hero-grid">
        <div>
          <span className="pill pulse">Artist development & representation</span>
          <h1>Your next move starts here.</h1>
          <p className="hero-copy">AU·RA is er voor artiesten die serieus verder willen. Deel je muziek en bouw je artiestprofiel. Wij kijken naar waar je staat, waar je potentie ligt en welke volgende stap bij jou past.</p>
          <div className="actions"><Link className="btn" href="/artist">Submit your profile</Link><Link className="btn alt" href="#how">Hoe werkt het?</Link></div>
          <div className="microproof"><span>Artist development</span><span>Release direction</span><span>Representation opportunities</span></div>
        </div>
        <div className="floating-stack">
          <div className="float-card float-a"><span className="muted">ARTIST REVIEW</span><strong>In review</strong><small>Music · profile · momentum · positioning</small></div>
          <div className="float-card float-b"><span className="muted">NEXT DIRECTION</span><b>Strengthen your next release</b><small>Profile feedback available</small></div>
          <div className="float-card float-c"><span className="muted">REPRESENTATION</span><b>Selected artists only</b><small>Personal review when there is a potential fit</small></div>
        </div>
      </section>

      <section className="section explainer" id="how">
        <p className="eyebrow">HOW IT WORKS</p><h2>Meer dan alleen een demo insturen.</h2>
        <p className="lead">Een goede track is belangrijk, maar een artiestencarrière bestaat uit meer. Daarom kijken we naar het complete plaatje: muziek, identiteit, releases, live ervaring, momentum en ambitie.</p>
        <div className="grid">{steps.map(([n,t,d])=><div className="card step-card" key={t}><span className="stepnr">{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
      </section>

      <section className="section">
        <p className="eyebrow">WHAT COMES NEXT</p><h2>Iedere artiest heeft een andere volgende stap.</h2>
        <div className="outcome-grid">{outcomes.map(([t,d])=><div className="outcome" key={t}><div className="dot"/><div><h3>{t}</h3><p className="muted">{d}</p></div></div>)}</div>
      </section>

      <section className="section split assessment-demo">
        <div className="callout"><p>ARTIST REVIEW</p><div className="score" style={{fontSize:42}}>Strong potential</div><h2 style={{fontSize:36}}>Your profile is moving in the right direction.</h2><p className="muted">Je sound en positionering vallen op. Meer recente live content en een sterk plan rond je volgende release kunnen je profiel verder brengen.</p></div>
        <div className="card"><p className="muted">RECOMMENDED NEXT STEPS</p><div className="list"><div className="item"><span>Professional EPK afronden</span><b>Priority</b></div><div className="item"><span>Volgende release voorbereiden</span><b>Next</b></div><div className="item"><span>Recente live content toevoegen</span><b>Recommended</b></div><div className="item"><span>Representation review</span><b>By selection</b></div></div></div>
      </section>

      <section className="section representation-block" id="representation"><p className="eyebrow">REPRESENTATION</p><h2>Op zoek naar de juiste mensen om je heen?</h2><p className="lead">We gebruiken AU·RA ook om nieuw talent te ontdekken. Wanneer je muziek, profiel en ambitie aansluiten bij waar wij in geloven, kan je submission worden geselecteerd voor een persoonlijke kennismaking en mogelijke representation.</p><div className="actions"><Link className="btn" href="/artist">Submit your music</Link></div></section>
    </div>
  </main>
}
