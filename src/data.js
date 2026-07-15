// All roster/fixture data is placeholder for the inaugural 2026 season.
// Structured so real data drops in without touching components.

export const FOUNDERS = [
  {
    id: 'rhodes',
    name: 'Jonty Rhodes',
    initials: 'JR',
    role: 'Founding Partner · Fielding Director',
    quote:
      'I’ve spent my whole life throwing myself at impossible balls. Building a club from the waterline up felt familiar.',
    line: 'The greatest fielder the game has produced. Now teaching a harbor city to fly.',
  },
  {
    id: 'duplessis',
    name: 'Faf du Plessis',
    initials: 'FdP',
    role: 'Founding Partner · Director of Cricket',
    quote:
      'Rotterdam doesn’t do glamour. It does work. That’s a cricket culture I’d back anywhere in the world.',
    line: 'Captain of captains. Architect of the Dockers’ playing identity.',
  },
  {
    id: 'klaasen',
    name: 'Heinrich Klaasen',
    initials: 'HK',
    role: 'Founding Partner · Marquee Batter',
    quote:
      'Finishing games is about staying calm in chaos. This city was built on exactly that.',
    line: 'The most feared middle-order hitter in T20. First name on the manifest.',
  },
]

export const ROSTER = [
  { num: 5,  name: 'H. Klaasen',      role: 'WK',  hand: 'RHB',          stat: 'SR 152.8',  origin: 'RSA' },
  { num: 18, name: 'F. du Plessis',   role: 'BAT', hand: 'RHB',          stat: 'SR 136.4',  origin: 'RSA' },
  { num: 7,  name: 'V. Talsma',       role: 'BWL', hand: 'Right-arm fast', stat: 'ECON 7.41', origin: 'NED' },
  { num: 23, name: 'S. de Ruiter',    role: 'BAT', hand: 'LHB',          stat: 'SR 128.9',  origin: 'NED' },
  { num: 45, name: 'A. Bhagwandin',   role: 'ALL', hand: 'Off-spin',     stat: 'SR 133.1',  origin: 'NED' },
  { num: 11, name: 'J. Vermeulen',    role: 'BWL', hand: 'Left-arm swing', stat: 'ECON 7.88', origin: 'NED' },
  { num: 88, name: 'T. Okafor',       role: 'BWL', hand: 'Right-arm fast', stat: 'ECON 8.02', origin: 'ENG' },
  { num: 9,  name: 'M. van der Berg', role: 'BAT', hand: 'RHB',          stat: 'SR 141.6',  origin: 'NED' },
  { num: 31, name: 'R. Fernando',     role: 'ALL', hand: 'Leg-spin',     stat: 'SR 124.4',  origin: 'SL'  },
  { num: 14, name: 'D. Kingma',       role: 'WK',  hand: 'RHB',          stat: 'SR 119.7',  origin: 'NED' },
  { num: 63, name: 'P. Steyn',        role: 'BWL', hand: 'Right-arm fast', stat: 'ECON 7.12', origin: 'RSA' },
  { num: 27, name: 'L. Bakker',       role: 'ALL', hand: 'Medium pace',  stat: 'SR 127.2',  origin: 'NED' },
]

export const ROLE_NAMES = { BAT: 'Batter', BWL: 'Bowler', ALL: 'All-rounder', WK: 'Wicketkeeper' }

// ETPL 2026 — invented European franchises. RTD = Rotterdam Dockers.
export const FIXTURES = [
  { date: 'JUN 12', opp: 'Lisbon Navigators',   code: 'LIS', venue: 'H', result: 'W', score: 'RTD 186/4 — LIS 172/8' },
  { date: 'JUN 15', opp: 'Barcelona Corsairs',  code: 'BCN', venue: 'H', result: 'L', score: 'RTD 154/9 — BCN 158/3' },
  { date: 'JUN 19', opp: 'Berlin Bears',        code: 'BER', venue: 'A', result: 'W', score: 'BER 141 — RTD 145/2' },
  { date: 'JUN 24', opp: 'Dublin Rovers',       code: 'DUB', venue: 'H', result: 'W', score: 'RTD 201/5 — DUB 183/7' },
  { date: 'JUN 28', opp: 'Paris Chevaliers',    code: 'PAR', venue: 'A', result: 'L', score: 'PAR 176/6 — RTD 170/8' },
  { date: 'JUL 03', opp: 'Copenhagen Kings',    code: 'CPH', venue: 'H', result: 'W', score: 'RTD 192/3 — CPH 160' },
  { date: 'JUL 09', opp: 'Milan Lions',         code: 'MIL', venue: 'A', result: 'W', score: 'MIL 148/9 — RTD 149/4' },
  { date: 'JUL 18', opp: 'Barcelona Corsairs',  code: 'BCN', venue: 'A', result: null, score: '19:30 CEST · NEXT' },
  { date: 'JUL 23', opp: 'Berlin Bears',        code: 'BER', venue: 'H', result: null, score: '18:00 CEST' },
  { date: 'JUL 29', opp: 'Paris Chevaliers',    code: 'PAR', venue: 'H', result: null, score: '19:30 CEST' },
]

export const TIERS = [
  {
    id: 'deckhand',
    name: 'Deckhand',
    price: '€89',
    per: '/season',
    perks: ['All home match tickets', 'Members’ quay entrance', 'Digital match programme'],
  },
  {
    id: 'stevedore',
    name: 'Stevedore',
    price: '€249',
    per: '/season',
    featured: true,
    perks: ['Everything in Deckhand', 'Reserved dock-side seating', 'Kit-launch priority access', 'Founders’ open-nets invite'],
  },
  {
    id: 'harbormaster',
    name: 'Harbormaster',
    price: '€950',
    per: '/season',
    perks: ['Everything in Stevedore', 'Gantry lounge hospitality', 'Named berth on the members’ wall', 'Season-end crew dinner'],
  },
]
