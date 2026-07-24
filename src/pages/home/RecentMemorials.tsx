import { Link } from 'react-router';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

interface RecentMemorial {
  name: string;
  born: number;
  died: number;
  place: string;
  /** Optional profile picture. When absent, an initial monogram is shown. */
  img?: string;
  /** Optional link to the person's own memorial page. */
  href?: string;
  featured?: boolean;
  tone: string;
}

/* Virginia sits at position 6. All others are recently-registered demo memorials
   shown with dignified initial monograms — never invented faces. */
const RECENT: RecentMemorial[] = [
  { name: 'Tendai Moyo', born: 1941, died: 2024, place: 'Bulawayo', tone: 'from-forest to-forest-deep' },
  { name: 'Sipho Nkosi', born: 1960, died: 2025, place: 'Durban', tone: 'from-evergreen to-forest' },
  { name: 'Mai Chiweshe', born: 1938, died: 2025, place: 'Masvingo', tone: 'from-forest-soft to-forest-deep' },
  { name: 'Thandiwe Dlamini', born: 1952, died: 2025, place: 'Johannesburg', tone: 'from-forest to-evergreen' },
  { name: 'Kudakwashe Mapfumo', born: 1947, died: 2025, place: 'Mutare', tone: 'from-forest-deep to-forest' },
  {
    name: 'Virginia Dadirayi Chiimba',
    born: 1955,
    died: 2025,
    place: 'Seke, Chitungwiza',
    img: '/virginia-portrait.jpg',
    href: '/memorials/virginia-dadirayi-chiimba',
    featured: true,
    tone: 'from-brass/30 to-forest-deep',
  },
  { name: 'Naledi Mokoena', born: 1965, died: 2025, place: 'Cape Town', tone: 'from-evergreen to-forest-deep' },
  { name: 'Sekuru Banda', born: 1929, died: 2025, place: 'Gweru', tone: 'from-forest to-forest-soft' },
  { name: 'Ayanda Khumalo', born: 1958, died: 2025, place: 'London', tone: 'from-forest-soft to-evergreen' },
  { name: 'Mbuya Takawira', born: 1935, died: 2025, place: 'Chinhoyi', tone: 'from-forest-deep to-evergreen' },
  { name: 'Pieter van Wyk', born: 1954, died: 2025, place: 'Pretoria', tone: 'from-evergreen to-forest-soft' },
  { name: 'Rudo Chikafu', born: 1971, died: 2025, place: 'Toronto', tone: 'from-forest to-forest-deep' },
  { name: 'Solomon Moyo', born: 1930, died: 2025, place: 'Harare', tone: 'from-forest-deep to-forest-soft' },
  { name: 'Grace Nyoni', born: 1949, died: 2025, place: 'Kwekwe', tone: 'from-forest to-evergreen' },
  { name: 'Farai Gumbo', born: 1962, died: 2025, place: 'Kadoma', tone: 'from-evergreen to-forest' },
  { name: 'Nomsa Dube', born: 1944, died: 2025, place: 'Bulawayo', tone: 'from-forest-soft to-forest-deep' },
  { name: 'Tapiwa Zvobgo', born: 1956, died: 2025, place: 'Marondera', tone: 'from-forest-deep to-forest' },
  { name: 'Lindiwe Ncube', born: 1968, died: 2025, place: 'Cape Town', tone: 'from-evergreen to-forest-deep' },
  { name: 'Chipo Marufu', born: 1951, died: 2025, place: 'Chegutu', tone: 'from-forest to-forest-soft' },
  { name: 'Themba Sibanda', born: 1940, died: 2025, place: 'Victoria Falls', tone: 'from-forest-soft to-evergreen' },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function Card({ m }: { m: RecentMemorial }) {
  const inner = (
    <article
      className={cn(
        'card-raised group h-full overflow-hidden border transition-all duration-200 hover:-translate-y-0.5',
        m.featured ? 'border-brass' : 'border-transparent hover:border-brass/50',
      )}
    >
      {/* Profile-picture area — real photo when present, dignified monogram otherwise */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {m.img ? (
          <img
            src={m.img}
            alt={'Portrait of ' + m.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            aria-hidden
            className={cn('flex h-full w-full items-center justify-center bg-gradient-to-b', m.tone)}
          >
            <span className="font-display text-4xl text-bone/80">{initials(m.name)}</span>
          </div>
        )}
        {m.featured && (
          <span className="absolute left-3 top-3 rounded-full border border-brass bg-forest-deep/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brass-soft">
            Founding Memorial
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg text-body">{m.name}</h3>
        <p className="type-meta mt-1 text-soft">
          {m.born}–{m.died} · {m.place}
        </p>
      </div>
    </article>
  );

  return (
    <Reveal as="li">
      {m.href ? (
        <Link to={m.href} className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </Reveal>
  );
}

export default function RecentMemorials() {
  return (
    <section className="section-pad" aria-labelledby="recent-heading">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow eyebrow-centered">RECENTLY REMEMBERED</p>
          <h2 id="recent-heading" className="type-h2 mt-4 text-center text-body">
            Newly created memorials
          </h2>
          <p className="type-story mx-auto mt-4 max-w-reading text-center text-soft">
            Families across Southern Africa and the diaspora are creating memorials every day. Each
            one holds a life, a story, and a place to gather.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {RECENT.map((m) => (
            <Card key={m.name} m={m} />
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link to="/memorials" className="btn btn-outline-evergreen">
            Browse all memorials
          </Link>
        </div>
      </div>
    </section>
  );
}
