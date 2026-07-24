import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

type DemoTabId = 'journey' | 'memorial' | 'cemetery' | 'tree';

const TABS: { id: DemoTabId; label: string }[] = [
  { id: 'journey', label: 'The Journey' },
  { id: 'memorial', label: 'The Memorial' },
  { id: 'cemetery', label: 'The Family Cemetery' },
  { id: 'tree', label: 'The Family Tree' },
];

/* ---------- The Journey — Repatriation Tracker ---------- */
const TRACKER = [
  {
    time: '3 AUG · 06:40',
    title: 'Passing confirmed',
    body: 'John Peters passed peacefully at a Johannesburg hospital. The family hub opened, and Grace invited the family across three time zones with one link.',
  },
  {
    time: '3 AUG · 11:20',
    title: 'In care of the funeral home',
    body: 'John is in the care of Horizon Funeral Services (demo). Family liaison: Mrs. T. Dube.',
  },
  {
    time: '4–6 AUG',
    title: 'Documentation cleared',
    checks: [
      'Death certificate (Home Affairs)',
      'Consulate clearance letter',
      'Transit & burial permits',
      'Embalming & packaging certificates',
    ],
  },
  {
    time: '7 AUG',
    title: 'The journey home',
    body: 'Johannesburg → Glen Forest Memorial Park. He has crossed the border. He is home.',
  },
];

function JourneyPanel() {
  return (
    <div className="text-left">
      <p className="eyebrow !text-sage">WHEN A PERSON DIES FAR FROM HOME</p>
      <h3 className="type-h2 mt-3 text-bone">Bringing John Home</h3>
      <p className="mt-2 font-display text-lg italic text-brass-soft">
        Johannesburg → Glen Forest Memorial Park
      </p>
      <p className="type-story mt-4 max-w-2xl text-bone/80">
        When John Peters passed away in Johannesburg, his family was in three countries before
        breakfast. This is how MemoryGlen brought the family — and him — home together.
      </p>

      <h4 className="type-h3 mt-10 text-bone">The Repatriation Tracker</h4>
      <hr className="brass-rule mt-3" />
      <ol className="mt-6 space-y-8 border-l border-brass/30 pl-6">
        {TRACKER.map((step) => (
          <li key={step.time} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full border-2 border-brass bg-forest-deep"
            />
            <p className="type-meta font-semibold tracking-[0.16em] text-brass-soft">{step.time}</p>
            <p className="font-display mt-1 text-xl text-bone">{step.title}</p>
            {step.body && <p className="mt-1 text-sm leading-relaxed text-bone/75">{step.body}</p>}
            {step.checks && (
              <ul className="mt-2 space-y-1">
                {step.checks.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-bone/75">
                    <span className="text-brass-soft">✓</span> {c}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- The Memorial ---------- */
function MemorialPanel() {
  const [candles, setCandles] = useState(247);
  const [lit, setLit] = useState(false);
  return (
    <div className="flex flex-col items-center text-center">
      <figure className="relative bg-[#FBF8F1] p-3 shadow-raised">
        <span aria-hidden className="pointer-events-none absolute inset-1.5 border border-brass" />
        <img
          src="/memorial-john-portrait.jpg"
          alt="Portrait of the fictional John Peters"
          className="h-[250px] w-[200px] object-cover"
        />
      </figure>
      <p className="eyebrow mt-8 !text-sage">IN LOVING MEMORY</p>
      <h3 className="type-display mt-3 text-bone">John Peters</h3>
      <p className="type-meta mt-3 font-medium tracking-[0.2em] text-brass-soft">1958 – 2026</p>
      <p className="mt-4 font-display text-2xl italic text-bone/90">
        A Father Who Connected Continents
      </p>
      <p className="mt-6 flex items-center gap-2 text-bone/80">
        <Flame size={18} aria-hidden className="text-ember" />
        {candles} candles lit — from London, Toronto, Harare, Joburg
      </p>
      <button
        type="button"
        onClick={() => {
          if (!lit) {
            setCandles((c) => c + 1);
            setLit(true);
          }
        }}
        className="btn btn-evergreen mt-6"
      >
        <Flame size={16} aria-hidden /> {lit ? 'Candle lit' : 'Light a candle'}
      </button>
    </div>
  );
}

/* ---------- The Family Cemetery ---------- */
const GRAVES = [
  { name: 'John Peters', years: '1958 – 2026', line: 'Glen Forest Memorial Park' },
  { name: 'Samuel Peters', years: '1931 – 2001', line: 'He taught John the worth of work' },
  { name: 'Ruth Peters', years: '1935 – 2011', line: 'Her kitchen fed a whole street' },
  { name: 'James Peters', years: '1961 – 2019', line: 'The laughing brother' },
];

function CemeteryPanel() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brass text-brass-soft">
        <span className="font-display text-2xl">P</span>
      </div>
      <h3 className="type-h2 mt-5 text-bone">The Peters Family Glen</h3>
      <p className="mt-2 font-display text-lg italic text-bone/90">&ldquo;We carry each other.&rdquo;</p>
      <p className="type-meta mt-2 text-sage">
        Custodian: Grace Peters · Designated successor: David Peters
      </p>
      <p className="type-story mx-auto mt-6 max-w-2xl text-bone/80">
        Every family deserves one place where its story rests together. The Peters Family Glen holds
        four generations — each resting place linked, each memory kept, cared for by the family itself.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GRAVES.map((g) => (
          <li
            key={g.name}
            className="flex flex-col items-center rounded-sm border border-brass/25 bg-forest-deep/60 p-6"
          >
            <div className="flex h-20 w-16 items-end justify-center rounded-t-[2rem] bg-bone/90 pb-2 text-2xl text-forest-deep">
              †
            </div>
            <p className="font-display mt-4 text-lg text-bone">{g.name}</p>
            <p className="type-meta mt-1 text-brass-soft">{g.years}</p>
            <p className="mt-2 text-xs italic leading-relaxed text-bone/70">{g.line}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- The Family Tree ---------- */
function TreeNode({ label, sub, primary }: { label: string; sub?: string; primary?: boolean }) {
  return (
    <div
      className={
        primary
          ? 'rounded-full border border-brass bg-forest-deep px-6 py-3 text-center shadow-raised'
          : 'rounded-full border border-bone/25 bg-forest/60 px-5 py-2.5 text-center'
      }
    >
      <p className={primary ? 'font-display text-lg text-bone' : 'text-sm font-medium text-bone/90'}>
        {label}
      </p>
      {sub && <p className="type-meta mt-0.5 text-brass-soft">{sub}</p>}
    </div>
  );
}

function TreePanel() {
  return (
    <div className="text-left">
      <h3 className="type-h2 text-bone">The Family Tree</h3>
      <hr className="brass-rule mt-3" />
      <div className="mt-6 rounded-sm border border-bone/15 bg-bone/5 px-5 py-3">
        <p className="text-sm text-bone/85">
          87 family members across 5 generations · 12 connections suggested by MemoryGlen, confirmed
          by family.
        </p>
      </div>
      <p className="type-story mt-6 max-w-2xl text-bone/80">
        One person can belong to every family that loves them. Sarah Miller (née Peters) appears here
        in the Peters Family Glen — and in her husband&rsquo;s Miller Family Glen. Solid lines: this
        glen. Dotted lines: family beyond it. Nobody is left out of the story.
      </p>
      <p className="type-meta mt-3 text-sage">
        Each name below will open its own active memorial profile.
      </p>

      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          <TreeNode label="Samuel · Ruth" />
          <TreeNode label="James Peters" />
        </div>
        <TreeNode label="John Peters" sub="1958–2026 · with Grace" primary />
        <div className="flex flex-wrap justify-center gap-6">
          <TreeNode label="David — Harare" />
          <TreeNode label="Michael — JHB" />
          <TreeNode label="Sarah — London" sub="in 2 family glens" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Shell ---------- */
export default function JohnDemoTabs() {
  const [tab, setTab] = useState<DemoTabId>('journey');
  return (
    <section className="section-pad bg-forest" aria-labelledby="john-demo-heading">
      <div className="container-content">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brass/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brass-soft">
            Demonstration — the Peters family and all persons shown are fictional
          </p>
          <h2 id="john-demo-heading" className="type-h2 mt-6 text-bone">
            See what a MemoryGlen memorial can do
          </h2>
        </div>

        <div className="mt-10 border-b border-brass/25">
          <nav
            aria-label="Demo memorial sections"
            className="flex justify-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TABS.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(t.id)}
                  className={
                    'relative flex-none px-5 py-4 text-[0.9375rem] font-medium transition-colors duration-200 ' +
                    (active ? 'text-bone' : 'text-sage hover:text-bone')
                  }
                >
                  {t.label}
                  {active && (
                    <motion.span
                      layoutId="demo-tab-underline"
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute inset-x-4 -bottom-px h-0.5 bg-brass"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {tab === 'journey' && <JourneyPanel />}
              {tab === 'memorial' && <MemorialPanel />}
              {tab === 'cemetery' && <CemeteryPanel />}
              {tab === 'tree' && <TreePanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
