import Link from 'next/link';

const pillars=[
  ['01','Build your profile','Bring your music, releases, socials, live history and press assets together in one professional artist profile.'],
  ['02','Get assessed','AU·RA translates your current position into clear readiness signals across music, brand, audience, live and professional setup.'],
  ['03','Know your next move','Stop guessing. Get practical next actions that move you closer to stronger releases, bookings and representation.']
];

export default function Home(){
  return <main>
    <div className="wrap">
      <nav className="nav"><div className="brand">AU·RA</div><div style={{display:'flex',gap:12}}><Link className="pill" href="#how">How it works</Link><Link className="pill" href="/dashboard">Agency demo</Link></div></nav>
      <section className="hero">
        <span className="pill">Artist intelligence for what comes next</span>
        <h1>Know where you stand. Know what to do next.</h1>
        <p>Build your artist profile, upload your music and turn uncertainty into a clear path toward stronger releases, bookings and representation.</p>
        <div className="actions"><Link className="btn" href="/artist">Start your artist profile</Link><Link className="btn alt" href="/artist#representation">Looking for representation?</Link></div>
      </section>
      <section className="section" id="how">
        <p className="muted">THE AU·RA METHOD</p><h2>Your career, made clearer.</h2>
        <div className="grid">{pillars.map(([n,t,d])=><div className="card" key={t}><span className="muted">{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
      </section>
      <section className="section split">
        <div className="callout"><p>YOUR AU·RA ASSESSMENT</p><div className="score">74%</div><h2 style={{fontSize:36}}>Representation readiness</h2><p className="muted">Strong music and brand foundation. Improve live proof and release consistency before pushing for full representation.</p></div>
        <div className="card"><p className="muted">NEXT BEST MOVES</p><div className="list"><div className="item"><span>Finish professional EPK</span><b>High impact</b></div><div className="item"><span>Prepare next single</span><b>4–6 weeks</b></div><div className="item"><span>Add live performance proof</span><b>Missing</b></div><div className="item"><span>Review representation fit</span><b>Locked</b></div></div></div>
      </section>
      <section className="section" id="representation"><p className="muted">REPRESENTATION</p><h2>Representation is earned, not sold.</h2><p style={{maxWidth:760,fontSize:20}} className="muted">AU·RA helps artists become representation-ready. Artists who show the right combination of music, momentum, professionalism and fit can submit for a human agency review. No score guarantees a deal.</p><div className="actions"><Link className="btn" href="/artist">Get assessed</Link></div></section>
    </div>
  </main>
}
