import { useState } from 'react'
import { FOUNDERS, ROSTER, ROLE_NAMES, FIXTURES, TIERS } from '../data'
import { LeftRail, RightRail } from './Rails'
import TopBar from './TopBar'
import { PortraitPlate, ActionPlate } from './Plates'
import { useReveal, useParallax } from './useReveal'

const NEXT = FIXTURES.find((f) => f.score.includes('NEXT'))

function Kicker({ children }) {
  return <p className="kicker mono">{children}</p>
}

/* ---------------- Hero ---------------- */
function Hero() {
  const plateRef = useParallax(0.07)
  return (
    <section className="hero-ed" id="home" aria-label="Rotterdam Dockers">
      <div className="hero-plate" ref={plateRef}>
        <img
          className="hero-img"
          src={`${import.meta.env.BASE_URL}hero-rotterdam.jpg`}
          srcSet={`${import.meta.env.BASE_URL}hero-rotterdam-sm.jpg 1100w, ${import.meta.env.BASE_URL}hero-rotterdam.jpg 1962w`}
          sizes="100vw"
          alt="The Erasmus Bridge and the Rotterdam skyline at night over the river Maas"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero-scrim" />
      </div>
      <div className="hero-content">
        <Kicker>EUROPEAN T20 PREMIER LEAGUE · INAUGURAL SEASON</Kicker>
        <h1 className="hero-title">
          <span className="line"><i>Rotterdam</i></span>
          <span className="line"><i>Dockers</i></span>
        </h1>
        <p className="hero-lede">
          Born on the Maashaven quays. Backed by three of the modern game’s
          sharpest minds. Built the way this city builds everything — properly.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#membership">Join the crew</a>
          <a className="btn btn-ghost" href="#fixtures">Season board</a>
        </div>
      </div>
      <div className="hero-ticker mono" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, k) => (
            <span key={k}>
              51.8951° N · 4.4830° E — MAASHAVEN&nbsp;&nbsp;•&nbsp;&nbsp;EST. 2026&nbsp;&nbsp;•&nbsp;&nbsp;BUILT ON THE WATERFRONT&nbsp;&nbsp;•&nbsp;&nbsp;GEEN WOORDEN MAAR DADEN&nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Next match strip ---------------- */
function NextMatch() {
  const ref = useReveal()
  if (!NEXT) return null
  return (
    <section className="next-match reveal" ref={ref} aria-label="Next match">
      <div className="next-plate">
        <ActionPlate />
      </div>
      <div className="next-body">
        <Kicker>NEXT SAILING · MATCHDAY 11</Kicker>
        <div className="next-line">
          <span className="next-team">BCN</span>
          <span className="next-v mono">v</span>
          <span className="next-team next-us">RTD</span>
        </div>
        <p className="next-meta mono">{NEXT.date} 2026 · 19:30 CEST · BARCELONA · AWAY</p>
        <a className="btn" href="#fixtures">Full fixtures</a>
      </div>
    </section>
  )
}

/* ---------------- Crew ---------------- */
function Crew() {
  const ref = useReveal()
  return (
    <section className="section" id="crew">
      <div className="section-head reveal" ref={ref}>
        <Kicker>THE CREW</Kicker>
        <h2 className="section-title">Founding partners</h2>
      </div>
      <div className="crew-grid">
        {FOUNDERS.map((f, i) => (
          <FounderCard key={f.id} f={f} index={i} />
        ))}
      </div>
    </section>
  )
}

function FounderCard({ f, index }) {
  const ref = useReveal()
  return (
    <article className="founder-card reveal" ref={ref} style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="founder-plate">
        <PortraitPlate mark={f.initials} tone={['a', 'b', 'c'][index]} />
        <div className="plate-scrim" />
        <div className="founder-name">
          <h3>{f.name}</h3>
          <p className="mono">{f.role.toUpperCase()}</p>
        </div>
      </div>
      <blockquote className="founder-quote">“{f.quote}”</blockquote>
    </article>
  )
}

/* ---------------- Roster ---------------- */
function Roster() {
  const ref = useReveal()
  return (
    <section className="section section-bleed" id="roster">
      <div className="section-head reveal" ref={ref}>
        <Kicker>SHIP’S MANIFEST · SQUAD 2026</Kicker>
        <h2 className="section-title">The roster</h2>
        <p className="section-note mono" aria-hidden="true">DRAG / SCROLL →</p>
      </div>
      <div className="roster-row" role="list">
        {ROSTER.map((p, i) => (
          <PlayerCard key={p.num} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}

function PlayerCard({ p, index }) {
  const ref = useReveal({ threshold: 0.05 })
  return (
    <article className="player-card reveal" ref={ref} style={{ transitionDelay: `${Math.min(index, 6) * 60}ms` }} role="listitem">
      <div className="player-plate">
        <PortraitPlate mark={String(p.num).padStart(2, '0')} tone={['a', 'b', 'c', 'd'][index % 4]} figure={false} />
        <div className="plate-scrim" />
        <span className="player-code mono">RTD/2026/{String(p.num).padStart(2, '0')}</span>
      </div>
      <div className="player-info">
        <h3>{p.name}</h3>
        <p className="mono">{ROLE_NAMES[p.role].toUpperCase()} · {p.origin}</p>
        <p className="mono player-stat">{p.hand} · {p.stat}</p>
      </div>
    </article>
  )
}

/* ---------------- Fixtures ---------------- */
function Fixtures() {
  const [tab, setTab] = useState('season')
  const ref = useReveal()
  const rows = FIXTURES.filter((f) => (tab === 'season' ? true : f.result !== null))
  return (
    <section className="section" id="fixtures">
      <div className="section-head reveal" ref={ref}>
        <Kicker>GANTRY BOARD · ALL TIMES CEST</Kicker>
        <h2 className="section-title">Fixtures &amp; results</h2>
        <div className="tabs" role="tablist" aria-label="Fixture filter">
          <button className="tab mono" role="tab" aria-selected={tab === 'season'} onClick={() => setTab('season')}>SEASON</button>
          <button className="tab mono" role="tab" aria-selected={tab === 'results'} onClick={() => setTab('results')}>RESULTS</button>
        </div>
      </div>
      <ul className="fixture-board">
        {rows.map((f) => {
          const next = f.score.includes('NEXT')
          return (
            <li key={f.date + f.code} className={`board-row ${next ? 'next' : ''}`}>
              <span className="board-date mono">{f.date}</span>
              <span className="board-match">
                {f.venue === 'H' ? `RTD v ${f.code}` : `${f.code} v RTD`}
                <small>{f.opp} · {f.venue === 'H' ? 'Maashaven Ground' : 'Away'}</small>
              </span>
              <span className="board-score mono">{f.score}</span>
              {f.result
                ? <span className={`board-res mono ${f.result}`}>{f.result}</span>
                : <span className="board-res mono upcoming">·</span>}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

/* ---------------- Membership + contact ---------------- */
function Membership() {
  const ref = useReveal()
  const [sent, setSent] = useState(false)
  return (
    <section className="section" id="membership">
      <div className="section-head reveal" ref={ref}>
        <Kicker>GATE 6 · MEMBERSHIP &amp; CONTACT</Kicker>
        <h2 className="section-title">Join the crew</h2>
      </div>
      <div className="tier-grid">
        {TIERS.map((t, i) => (
          <TierCard key={t.id} t={t} index={i} />
        ))}
      </div>
      <div className="contact-block">
        <div className="contact-intro">
          <Kicker>CONTACT THE HARBOR MASTER</Kicker>
          <h3 className="contact-title">Signal the office</h3>
          <p>Press, partnership and membership enquiries. We answer on working days, harbor hours.</p>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <div className="field">
            <label htmlFor="c-name" className="mono">NAME</label>
            <input id="c-name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="c-email" className="mono">EMAIL</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field wide">
            <label htmlFor="c-msg" className="mono">MESSAGE</label>
            <textarea id="c-msg" name="message" required />
          </div>
          <div className="wide contact-actions">
            <button className="btn" type="submit" disabled={sent}>Send signal</button>
            <span className="sent-note mono" role="status">{sent ? 'LINE SECURED — WE’LL SIGNAL BACK.' : ''}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

function TierCard({ t, index }) {
  const ref = useReveal()
  return (
    <article className={`tier-card reveal ${t.featured ? 'featured' : ''}`} ref={ref} style={{ transitionDelay: `${index * 90}ms` }}>
      {t.featured && <span className="tier-flag mono">CREW PICK</span>}
      <h3>{t.name}</h3>
      <p className="tier-price mono">{t.price}<small>{t.per}</small></p>
      <ul>
        {t.perks.map((perk) => <li key={perk}>{perk}</li>)}
      </ul>
      <button className={t.featured ? 'btn' : 'btn btn-ghost'}>Sign on</button>
    </article>
  )
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer-ed">
      <img className="footer-crest" src={`${import.meta.env.BASE_URL}crest.jpg`} alt="Rotterdam Dockers crest" width="104" height="104" />
      <div className="footer-word" aria-hidden="true">DOCKERS</div>
      <div className="footer-meta mono">
        <span>51.8951° N · 4.4830° E — MAASHAVEN, ROTTERDAM</span>
        <span>© 2026 ROTTERDAM DOCKERS · ETPL</span>
      </div>
    </footer>
  )
}

export default function Site() {
  const [mode, setMode] = useState('night')
  if (typeof document !== 'undefined') document.documentElement.dataset.mode = mode
  return (
    <>
      <a className="skip-link" href="#crew">Skip to content</a>
      <TopBar mode={mode} onToggleMode={() => setMode((m) => (m === 'day' ? 'night' : 'day'))} />
      <LeftRail />
      <RightRail />
      <main className="page">
        <Hero />
        <NextMatch />
        <Crew />
        <Roster />
        <Fixtures />
        <Membership />
      </main>
      <Footer />
    </>
  )
}
