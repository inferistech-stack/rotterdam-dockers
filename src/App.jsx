import { useEffect, useState } from 'react'
import Site from './site/Site'

function Splash() {
  return (
    <div className="splash" role="status" aria-label="Loading">
      <svg className="splash-mark" aria-hidden="true" viewBox="0 0 32 32" width="40" height="40">
        <path d="M16 5v16M16 21c0 4-4 6.5-8 6.5M16 21c0 4 4 6.5 8 6.5M9 10.5h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="3.4" r="1.8" fill="currentColor" />
      </svg>
      <div className="splash-word">ROTTERDAM DOCKERS</div>
      <div className="splash-sub mono">MAKING FAST THE LINES</div>
      <div className="splash-bar"><span /></div>
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let alive = true
    document.fonts.ready.then(() => { if (alive) setReady(true) })
    return () => { alive = false }
  }, [])
  if (!ready) return <Splash />
  return <Site />
}
