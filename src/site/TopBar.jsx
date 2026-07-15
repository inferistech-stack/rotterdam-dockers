export default function TopBar({ mode, onToggleMode }) {
  return (
    <header className="topbar">
      <a
        className="topbar-brand"
        href="#home"
        aria-label="Rotterdam Dockers — home"
        onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }}
      >
        <img className="topbar-crest" src={`${import.meta.env.BASE_URL}crest.jpg`} alt="" width="40" height="40" />
        <span className="topbar-lockup">
          <span className="topbar-word">ROTTERDAM DOCKERS</span>
          <span className="topbar-sub mono">ETPL · 2026 · MAASHAVEN</span>
        </span>
      </a>

      {/* sponsor lockup — placeholder marks until partners are announced */}
      <div className="sponsor-lockup" aria-label="Club partners">
        <span className="sponsor mono">PORT&nbsp;OF&nbsp;ROTTERDAM</span>
        <span className="sponsor-divider" />
        <span className="sponsor mono">KIT&nbsp;PARTNER&nbsp;TBA</span>
      </div>

      <div className="topbar-utils">
        <button
          className="util-btn"
          onClick={onToggleMode}
          aria-pressed={mode === 'night'}
          aria-label={mode === 'day' ? 'Switch to floodlit night' : 'Switch to daylight'}
        >
          {mode === 'day' ? (
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
            </svg>
          )}
        </button>
        <a className="util-btn util-cta mono" href="#membership">JOIN</a>
      </div>
    </header>
  )
}
