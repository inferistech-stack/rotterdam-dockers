import { useEffect, useState } from 'react'

const NAV = [
  { id: 'home', label: 'Home', icon: 'anchor' },
  { id: 'crew', label: 'The Crew', icon: 'crew' },
  { id: 'roster', label: 'Roster', icon: 'roster' },
  { id: 'fixtures', label: 'Fixtures', icon: 'fixtures' },
  { id: 'membership', label: 'Membership', icon: 'gate' },
]

const SOCIAL = [
  { id: 'x', label: 'X', d: 'M4 4l7 8-7 8h2.5l5.6-6.4L21 20h-6l-5-5.7L5.5 20H3l7.4-8.5L3 4h6l4.5 5.2L18.5 4H21l-6.8 7.8L21 20' },
  { id: 'instagram', label: 'Instagram', d: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6a1 1 0 100 2 1 1 0 000-2z' },
  { id: 'youtube', label: 'YouTube', d: 'M22 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 002.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 001.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 001.8-1.8C22 15.2 22 12 22 12zM10 15V9l5 3z' },
  { id: 'tiktok', label: 'TikTok', d: 'M14 3c.3 2.3 1.8 4 4 4.3V10c-1.5 0-2.9-.5-4-1.3V15a5 5 0 11-5-5v2.6a2.4 2.4 0 102.4 2.4V3H14z' },
]

const Icon = ({ name }) => {
  const p = {
    anchor: <path d="M12 5v13M12 18c-3 0-5-2-5-5M12 18c3 0 5-2 5-5M8 8h8" />,
    crew: <path d="M8 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm8 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3 19v-1a4 4 0 014-4h2M21 19v-1a4 4 0 00-4-4h-2" />,
    roster: <path d="M6 4h9l3 3v13H6zM9 9h6M9 13h6M9 17h4" />,
    fixtures: <path d="M4 6h16M4 6v13h16V6M8 3v4M16 3v4M8 12h3M13 12h3M8 16h3" />,
    gate: <path d="M4 20V9l8-5 8 5v11M4 20h16M10 20v-5h4v5" />,
  }[name]
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {p}
    </svg>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const ids = NAV.map((n) => n.id)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function jump(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function LeftRail() {
  const active = useActiveSection()
  return (
    <nav className="rail rail-left" aria-label="Sections">
      <ul className="rail-items">
        {NAV.map((n) => (
          <li key={n.id}>
            <button
              className="rail-btn"
              aria-current={active === n.id}
              onClick={() => jump(n.id)}
            >
              <Icon name={n.icon} />
              <span className="rail-tip">{n.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function RightRail() {
  return (
    <div className="rail rail-right" aria-label="Social channels">
      <ul className="rail-items">
        {SOCIAL.map((s) => (
          <li key={s.id}>
            <a className="rail-social" href="#" aria-label={s.label} onClick={(e) => e.preventDefault()}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={s.d} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
