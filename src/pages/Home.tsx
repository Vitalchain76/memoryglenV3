import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen,
  Flame,
  Images,
  Mic,
  Music,
  QrCode,
  ShieldCheck,
  Video,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import StatBand from '@/components/StatBand';
import CandleFlame from '@/components/CandleFlame';
import Hero from '@/pages/home/Hero';
import JohnDemoTabs from '@/pages/home/JohnDemoTabs';
import RecentMemorials from '@/pages/home/RecentMemorials';
import HowItWorks from '@/pages/home/HowItWorks';

/* ---------- Section 5 — Feature grid ---------- */
const FEATURES = [
  { Icon: Images, title: 'Photo & Video Gallery', body: 'Every photograph, every clip — kept in one permanent, beautiful place.' },
  { Icon: Mic, title: 'Voice Notes', body: 'Her voice, wishing you a happy new year — forever.' },
  { Icon: Music, title: 'Song Playlists', body: 'Compile the songs they loved from Spotify, YouTube, or your own recordings. On every memorial.' },
  { Icon: Video, title: 'Funeral Livestreams', body: 'The diaspora killer feature — the recording stays in the family hub forever.' },
  { Icon: QrCode, title: 'QR Code Plaques', body: 'A brass plaque on the headstone that opens the memorial — every visit finds every memory.' },
  { Icon: BookOpen, title: 'Memorial Books', body: 'The story, tributes, and photographs printed and bound for the family shelf.' },
  { Icon: ShieldCheck, title: 'Family Control', body: 'Guardians approve all content. Full privacy control.' },
  { Icon: Flame, title: 'Digital Candles', body: 'Light a candle from anywhere in the world. The flames never go out.' },
];

function FeatureGrid() {
  return (
    <section className="section-pad" aria-labelledby="features-heading">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow eyebrow-centered">EVERYTHING A MEMORY DESERVES</p>
          <h2 id="features-heading" className="type-h2 mt-4 text-center text-body">
            A sanctuary, fully furnished.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={(i % 4) * 0.08}>
              <div className="card-well group h-full p-6 transition-transform duration-200 hover:-translate-y-0.5">
                <Icon
                  size={24}
                  aria-hidden
                  className="text-evergreen transition-colors duration-200 group-hover:text-brass"
                />
                <h3 className="type-h3 mt-4 text-body">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Section 7 — Stats band ---------- */
function HomeStats() {
  return (
    <section className="bg-forest-deep py-14" aria-label="MemoryGlen in numbers">
      <div className="container-content">
        <StatBand
          onDark
          className="justify-between"
          stats={[
            { value: '500+', label: 'Families Served' },
            { value: '200+', label: 'Livestreams' },
            { value: '1K+', label: 'QR Codes' },
            { value: '50+', label: 'Partner Parlours' },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------- Section 8 — Partner bands ---------- */
const PARTNERS = [
  {
    img: '/parlour-hero.jpg',
    title: 'Your brand. Your families. Powered by MemoryGlen.',
    body: 'White-label memorial portals under your own name. Sign families up from your own website.',
    cta: 'Become a Partner',
    href: '/funeral-parlours',
    alt: 'A dignified funeral-home reception in warm wood and soft light',
  },
  {
    img: '/society-hero.jpg',
    title: 'No more 3AM WhatsApp chaos.',
    body: 'From R10 per member per month — under 50c a day.',
    cta: 'For Societies & Stokvels',
    href: '/burial-societies',
    alt: 'Hands of a circle of people passing a ledger book at golden hour',
  },
];

function PartnerBands() {
  return (
    <section aria-label="For funeral parlours and burial societies">
      <div className="grid md:grid-cols-2">
        {PARTNERS.map((p) => (
          <Reveal key={p.title}>
            <Link to={p.href} className="group relative block min-h-[380px] overflow-hidden">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:600ms] group-hover:scale-[1.04]"
              />
              <div aria-hidden className="absolute inset-0 bg-forest-deep/70" />
              <div className="relative flex min-h-[380px] flex-col justify-end p-8 md:p-12">
                <h3 className="type-h3 max-w-md !text-[1.5rem] text-bone">{p.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/80">{p.body}</p>
                <span className="btn btn-evergreen mt-6 w-fit">{p.cta}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Section 9 — Closing CTA ---------- */
function ClosingCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [ignited, setIgnited] = useState(false);
  if (inView && !ignited) setIgnited(true);

  return (
    <section ref={ref} className="section-pad" aria-labelledby="closing-heading">
      <div className="container-content flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={ignited ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <CandleFlame size={28} lit={ignited} />
        </motion.div>
        <Reveal>
          <hr className="brass-rule mx-auto mt-8" />
          <h2 id="closing-heading" className="type-h2 mt-8 max-w-reading text-body">
            Start preserving memories today.
          </h2>
          <p className="type-story mt-4 text-soft">Create a free memorial in minutes. It stays forever.</p>
          <Link to="/create" className="btn btn-evergreen mt-8">
            Create a Memorial — free
          </Link>
          <p className="mt-6 text-sm text-soft">
            Questions? Write to{' '}
            <a href="mailto:admin@memoryglen.com" className="text-evergreen underline underline-offset-4">
              admin@memoryglen.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Home — the landing page. */
export default function Home() {
  return (
    <>
      <Hero />
      <JohnDemoTabs />
      <RecentMemorials />
      <HowItWorks />
      <FeatureGrid />
      <HomeStats />
      <PartnerBands />
      <ClosingCta />
    </>
  );
}
