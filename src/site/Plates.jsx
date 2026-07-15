// Art-directed industrial SVG "plates" — placeholders for real photography.
// Every color routes through CSS custom properties so the day/night toggle relights them.
// Swap points: replace any <Plate*> with an <img>/<video> when real assets land.

function Grain({ id, opacity = 0.5 }) {
  return (
    <filter id={id}>
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n" />
      <feColorMatrix in="n" type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="linear" slope={opacity} />
      </feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic" />
    </filter>
  )
}

// Wide cinematic harbor establishing shot — the hero plate.
export function HarborPlate({ className = '' }) {
  return (
    <svg className={`plate-svg ${className}`} viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Rotterdam harbor at night — cranes, containers and the Erasmus Bridge under floodlight">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--plate-sky-top)" />
          <stop offset="0.62" stopColor="var(--plate-sky-bot)" />
          <stop offset="1" stopColor="var(--plate-ground)" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.62" r="0.5">
          <stop offset="0" stopColor="var(--plate-lamp)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--plate-lamp)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--plate-ground)" />
          <stop offset="1" stopColor="var(--plate-water)" />
        </linearGradient>
        <Grain id="g-harbor" opacity={0.35} />
      </defs>

      <rect width="1200" height="750" fill="url(#sky)" />
      <rect y="360" width="1200" height="120" fill="url(#glow)" />

      {/* Erasmus Bridge — the Swan */}
      <g stroke="var(--plate-line)" strokeWidth="2.5" fill="none" opacity="0.9">
        <path d="M120 470 H1090" strokeWidth="4" />
        <path d="M430 470 L470 250 L510 470" strokeWidth="5" />
        <path d="M470 250 L300 470 M470 250 L360 470 M470 250 L410 470" strokeWidth="1.4" />
        <path d="M470 250 L560 470 M470 250 L640 470 M470 250 L760 470 M470 250 L900 470 M470 250 L1030 470" strokeWidth="1.4" />
        <path d="M470 260 L470 250" strokeWidth="5" />
      </g>

      {/* Floodlight towers */}
      {[180, 1010].map((x) => (
        <g key={x} stroke="var(--plate-line)" strokeWidth="4" fill="none">
          <path d={`M${x} 470 V180`} />
          <rect x={x - 26} y="150" width="52" height="26" fill="var(--plate-lamp)" stroke="none" opacity="0.9" />
        </g>
      ))}

      {/* STS cranes */}
      {[
        { x: 250, s: 1 },
        { x: 720, s: 1.15 },
        { x: 940, s: 0.9 },
      ].map(({ x, s }, i) => (
        <g key={i} transform={`translate(${x} 470) scale(${s})`} stroke="var(--plate-crane)" strokeWidth="6" fill="none">
          <path d="M-55 0 V-150 M55 0 V-150 M-55 -150 H120 M-55 -110 L120 -150 M-55 -150 L-20 -230 L120 -150" />
          <path d="M0 -150 V0" strokeWidth="3" />
        </g>
      ))}

      {/* Container stacks */}
      <g>
        {[
          [140, 430, 'a'], [140, 400, 'b'], [200, 430, 'c'], [560, 435, 'd'], [560, 408, 'a'],
          [620, 435, 'b'], [820, 440, 'c'], [880, 440, 'd'], [880, 413, 'a'], [1050, 435, 'b'],
        ].map(([x, y, tone], i) => (
          <rect key={i} x={x} y={y} width="58" height="26" rx="1.5" fill={`var(--plate-c-${tone})`} opacity="0.95" />
        ))}
      </g>

      <rect y="470" width="1200" height="280" fill="url(#water)" />
      {/* water reflections */}
      <g stroke="var(--sodium-amber)" strokeWidth="2" opacity="0.16">
        <path d="M470 480 V690" />
        <path d="M180 480 V620" strokeWidth="3" />
        <path d="M1010 480 V620" strokeWidth="3" />
      </g>

      <rect width="1200" height="750" filter="url(#g-harbor)" opacity="0.5" fill="transparent" />
    </svg>
  )
}

// Tall portrait plate — founders / players. Big monogram over an industrial backdrop.
export function PortraitPlate({ mark, tone = 'a', className = '', figure = true }) {
  return (
    <svg className={`plate-svg ${className}`} viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`pp-${mark}`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="var(--plate-portrait-top)" />
          <stop offset="1" stopColor="var(--plate-portrait-bot)" />
        </linearGradient>
        <Grain id={`pg-${mark}`} opacity={0.3} />
      </defs>
      <rect width="600" height="800" fill={`url(#pp-${mark})`} />
      {/* container-yard bands */}
      <g opacity="0.5">
        <rect x="-20" y="150" width="640" height="54" fill={`var(--plate-c-${tone})`} opacity="0.4" />
        <rect x="-20" y="560" width="640" height="70" fill="var(--plate-ground)" opacity="0.55" />
      </g>
      {/* soft figure silhouette */}
      {figure && (
        <g fill="var(--plate-figure)" opacity="0.55">
          <circle cx="300" cy="300" r="86" />
          <path d="M170 640 Q170 440 300 440 Q430 440 430 640 Z" />
        </g>
      )}
      {/* big monogram */}
      <text x="300" y="330" textAnchor="middle" fill="var(--sodium-amber)" style={{ font: '900 220px "Archivo Variable", sans-serif', fontStretch: '125%' }} opacity="0.95">{mark}</text>
      <rect width="600" height="800" filter={`url(#pg-${mark})`} opacity="0.5" fill="transparent" />
    </svg>
  )
}

// Action plate — abstract on-pitch energy band for the "next match" feature.
export function ActionPlate({ className = '' }) {
  return (
    <svg className={`plate-svg ${className}`} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="act" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--plate-portrait-top)" />
          <stop offset="1" stopColor="var(--plate-ground)" />
        </linearGradient>
        <radialGradient id="spot" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0" stopColor="var(--sodium-amber)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--sodium-amber)" stopOpacity="0" />
        </radialGradient>
        <Grain id="ag" opacity={0.28} />
      </defs>
      <rect width="1200" height="600" fill="url(#act)" />
      <rect width="1200" height="600" fill="url(#spot)" />
      {/* motion streaks */}
      <g stroke="var(--plate-line)" strokeWidth="2" opacity="0.28">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${-100 + i * 150} 600 L${100 + i * 150} 0`} />
        ))}
      </g>
      {/* stumps motif */}
      <g stroke="var(--sodium-amber)" strokeWidth="6" opacity="0.8">
        <path d="M840 250 V420 M870 250 V420 M900 250 V420" />
        <path d="M834 248 H906" strokeWidth="4" />
      </g>
      <rect width="1200" height="600" filter="url(#ag)" opacity="0.5" fill="transparent" />
    </svg>
  )
}
