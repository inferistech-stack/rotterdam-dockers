import { useEffect, useState } from 'react'
import Site from './site/Site'

function Splash() {
  return (
    <div className="splash" role="status" aria-label="Loading">
      <img className="splash-crest" src={`${import.meta.env.BASE_URL}crest.jpg`} alt="Rotterdam Dockers crest" width="112" height="112" />
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
