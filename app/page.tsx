import Link from 'next/link';

const steps=[
  ['1','Maak je artiestprofiel','Voeg je muziek, socials, releases, gigs en press assets toe.'],
  ['2','Krijg je AU·RA scan','Zie direct hoe klaar je bent voor releases, bookings en representation.'],
  ['3','Weet je volgende stap','AU·RA maakt van losse ambities een concrete route vooruit.']
];

const outcomes=[
  ['Release ready','Is je track en profiel klaar om serieus gepitcht te worden?'],
  ['Booking ready','Heb je genoeg live proof, branding en professionaliteit voor meer gigs?'],
  ['Representation ready','Ben je interessant genoeg voor een echte agency review?']
];

export default function Home(){
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <div className="wrap">
      <nav className="nav"><div className="brand">AU·RA</div><div className="navlinks"><Link className="pill" href="#how">Hoe werkt het?</Link><Link className="pill" href="/dashboard">Agency demo</Link></div></nav>

      <section className="hero hero-grid">
        <div>
          <span className="pill pulse">For emerging artists</span>
          <h1>Stop met gokken wat je volgende stap is.</h1>
          <p className="hero-copy">AU·RA laat beginnende en upcoming artiesten zien <b>waar ze nu staan</b>, <b>wat er nog ontbreekt</b> en <b>wat ze daarna moeten doen</b> om dichter bij betere releases, bookings en representation te komen.</p>
          <div className="actions"><Link className="btn" href="/artist">Start gratis met je profiel</Link><Link className="btn alt" href="#how">Bekijk hoe het werkt</Link></div>
          <div className="microproof"><span>✓ duidelijke feedback</span><span>✓ concrete next moves</span><span>✓ kans op agency review</span></div>
        </div>
        <div className="floating-stack">
          <div className="float-card float-a"><span className="muted">AU·RA READINESS</span><strong>74%</strong><small>Je basis is sterk. Nog 3 stappen tot agency review.</small></div>
          <div className="float-card float-b"><span className="muted">NEXT MOVE</span><b>Finish your EPK</b><small>High impact · estimated 2 days</small></div>
          <div className="float-card float-c"><span className="muted">STATUS</span><b>Representation locked</b><small>Unlock at 80%+ readiness</small></div>
        </div>
      </section>

      <section className="section explainer" id="how">
        <p className="eyebrow">IN 30 SECONDEN</p><h2>Wat doet AU·RA precies?</h2>
        <p className="lead">Zie AU·RA als een digitale artist development assistent. Je vult één keer je profiel en muziek in. Daarna krijg je geen vage motivatie, maar een duidelijke beoordeling en route.</p>
        <div className="grid">{steps.map(([n,t,d])=><div className="card step-card" key={t}><span className="stepnr">{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
      </section>

      <section className="section">
        <p className="eyebrow">WAT KRIJG JE?</p><h2>Niet alleen een score. Een plan.</h2>
        <div className="outcome-grid">{outcomes.map(([t,d])=><div className="outcome" key={t}><div className="dot"/><div><h3>{t}</h3><p className="muted">{d}</p></div></div>)}</div>
      </section>

      <section className="section split assessment-demo">
        <div className="callout"><p>YOUR AU·RA ASSESSMENT</p><div className="score">74%</div><h2 style={{fontSize:36}}>Representation readiness</h2><p className="muted">Sterke muziek en branding. Voeg meer live proof toe en maak je volgende release concreter voordat je representation pusht.</p><div className="progress"><span style={{width:'74%'}}/></div></div>
        <div className="card"><p className="muted">JOUW VOLGENDE STAPPEN</p><div className="list"><div className="item"><span>EPK afmaken</span><b>High impact</b></div><div className="item"><span>Volgende single voorbereiden</span><b>4–6 weken</b></div><div className="item"><span>Live performance toevoegen</span><b>Ontbreekt</b></div><div className="item"><span>Agency review</span><b>Locked</b></div></div></div>
      </section>

      <section className="section representation-block" id="representation"><p className="eyebrow">REPRESENTATION</p><h2>En als je er klaar voor bent?</h2><p className="lead">Dan kun je vanuit AU·RA een echte agency review aanvragen. Geen automatische deal, geen pay-to-sign. Een menselijke beoordeling op muziek, momentum, professionaliteit en fit.</p><div className="actions"><Link className="btn" href="/artist">Doe je AU·RA scan</Link></div></section>
    </div>
  </main>
}
