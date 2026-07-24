import { useState } from 'react';
import { Flame } from 'lucide-react';
import Reveal from '@/components/Reveal';

/**
 * JohnDemoTabs — the central demonstration memorial on the home page.
 * John Peters is a fictional demo figure so visitors from anywhere in the
 * world can explore MemoryGlen without feeling they are intruding on a
 * private family memorial. Four tabs: The Journey, The Memorial,
 * The Family Cemetery, The Family Tree. Each tab shows an image of the
 * person beneath its headline.
 */

type TabKey = 'journey' | 'memorial' | 'cemetery' | 'tree';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'journey', label: 'The Journey' },
  { key: 'memorial', label: 'The Memorial' },
  { key: 'cemetery', label: 'The Family Cemetery' },
  { key: 'tree', label: 'The Family Tree' },
];

/** Dignified portrait slot. Drop a real image into /public and set src to use it. */
function PersonImage({ src, alt, initial }: { src?: string; alt: string; initial: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="mx-auto mb-8 h-40 w-40 rounded-full object-cover ring-2 ring-amber-400/40 shadow-xl"
      />
    );
  }
  return (
    <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-amber-400/10 ring-2 ring-amber-400/30">
      <span className="font-serif text-5xl text-amber-300/80">{initial}</span>
    </div>
  );
}

export default function JohnDemoTabs() {
  const [tab, setTab] = useState<TabKey>('journey');

  return (
    <section className="relative overflow-hidden bg-[#0d1512] py-20 text-stone-100 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-amber-500/70">
            Demonstration — the Peters family and all persons shown are fictional
          </p>
        </Reveal>

        {/* Central figure header */}
        <Reveal>
          <div className="mt-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400/80">
              In Loving Memory
            </p>
            <h2 className="mt-3 font-serif text-5xl text-white sm:text-6xl">John Peters</h2>
            <p className="mt-2 text-amber-300/90">1958 &ndash; 2026</p>
            <p className="mt-1 text-stone-300">A Father Who Connected Continents</p>
          </div>
        </Reveal>

        {/* Tab bar */}
        <nav
          aria-label="Demo memorial sections"
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-white/10 pb-4"
        >
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={
                'relative pb-2 text-sm transition-colors sm:text-base ' +
                (tab === t.key
                  ? 'text-amber-300'
                  : 'text-stone-400 hover:text-stone-200')
              }
            >
              {t.label}
              {tab === t.key && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-amber-400" />
              )}
            </button>
          ))}
        </nav>

        {/* Panels */}
        <div className="mt-12">
          {tab === 'journey' && (
            <Reveal key="journey">
              <div className="text-center">
                <PersonImage alt="Portrait of John Peters" initial="J" />
                <h3 className="font-serif text-3xl text-white sm:text-4xl">Bringing John Home</h3>
                <p className="mt-3 text-amber-300/90">
                  Johannesburg &rarr; Glen Forest Memorial Park
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-stone-300">
                  When John Peters passed away in Johannesburg, his family stretched across three
                  countries before breakfast. This is how MemoryGlen brought them &mdash; and him &mdash;
                  home together.
                </p>
              </div>

              <div className="mx-auto mt-14 max-w-2xl text-left">
                <h4 className="font-serif text-2xl text-white">The Repatriation Tracker</h4>
                <ol className="mt-8 space-y-8 border-l border-amber-400/30 pl-8">
                  <li className="relative">
                    <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-amber-400" />
                    <p className="text-xs uppercase tracking-widest text-amber-400/80">3 Aug &middot; 06:40</p>
                    <p className="mt-1 font-semibold text-white">Passing confirmed</p>
                    <p className="mt-1 text-sm text-stone-300">
                      John Peters passed peacefully at a Johannesburg hospital. The family hub opened
                      and Grace invited the family across three time zones with one link.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-amber-400" />
                    <p className="text-xs uppercase tracking-widest text-amber-400/80">3 Aug &middot; 11:20</p>
                    <p className="mt-1 font-semibold text-white">In care of the funeral home</p>
                    <p className="mt-1 text-sm text-stone-300">
                      John is in the care of Horizon Funeral Services (demo). Family liaison: Mrs. T. Dube.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-amber-400" />
                    <p className="text-xs uppercase tracking-widest text-amber-400/80">4&ndash;6 Aug</p>
                    <p className="mt-1 font-semibold text-white">Documentation cleared</p>
                    <ul className="mt-2 space-y-1 text-sm text-stone-300">
                      <li>&#10003; Death certificate (Home Affairs)</li>
                      <li>&#10003; Consulate clearance letter</li>
                      <li>&#10003; Transit &amp; burial permits</li>
                      <li>&#10003; Embalming &amp; packaging certificates</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </Reveal>
          )}

          {tab === 'memorial' && (
            <Reveal key="memorial">
              <div className="text-center">
                <PersonImage alt="Portrait of John Peters" initial="J" />
                <p className="text-sm uppercase tracking-[0.25em] text-amber-400/80">In Loving Memory</p>
                <h3 className="mt-3 font-serif text-4xl text-white sm:text-5xl">John Peters</h3>
                <p className="mt-2 text-amber-300/90">1958 &ndash; 2026</p>
                <p className="mt-2 text-stone-300">A Father Who Connected Continents</p>
                <p className="mt-8 flex items-center justify-center gap-2 text-stone-200">
                  <Flame className="h-5 w-5 text-amber-400" />
                  247 candles lit &mdash; from London, Toronto, Harare, Joburg
                </p>
                <button
                  type="button"
                  className="mt-6 rounded-md bg-amber-400 px-6 py-3 font-medium text-stone-900 transition hover:bg-amber-300"
                >
                  Light a candle
                </button>
              </div>
            </Reveal>
          )}

          {tab === 'cemetery' && (
            <Reveal key="cemetery">
              <div className="text-center">
                <PersonImage alt="The Peters family" initial="P" />
                <h3 className="font-serif text-4xl text-white">The Peters Family Glen</h3>
                <p className="mt-3 italic text-stone-300">&ldquo;We carry each other.&rdquo;</p>
                <p className="mt-2 text-sm text-stone-400">
                  Custodian: Grace Peters &middot; Designated successor: David Peters
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-stone-300">
                  Every family deserves one place where its story rests together. The Peters Family Glen
                  spans four generations &mdash; each resting place linked, each memory kept, cared for by
                  the family itself.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: 'John Peters', years: '1958 – 2026', note: 'Glen Forest Memorial Park' },
                  { name: 'Samuel Peters', years: '1931 – 2001', note: 'He taught John the worth of work' },
                  { name: 'Ruth Peters', years: '1935 – 2011', note: 'Her kitchen fed a whole street' },
                  { name: 'James Peters', years: '1961 – 2019', note: 'The laughing brother' },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-14 items-end justify-center rounded-t-full bg-white/10">
                      <span className="mb-3 text-2xl text-amber-300/70">&#10013;</span>
                    </div>
                    <p className="font-serif text-lg text-white">{p.name}</p>
                    <p className="mt-1 text-sm text-amber-300/80">{p.years}</p>
                    <p className="mt-2 text-xs text-stone-400">{p.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {tab === 'tree' && (
            <Reveal key="tree">
              <div className="text-center">
                <PersonImage alt="Portrait of John Peters" initial="J" />
                <h3 className="font-serif text-4xl text-white">The Family Tree</h3>
                <div className="mx-auto mt-6 max-w-2xl rounded-lg bg-white/[0.04] px-6 py-4 text-sm text-stone-200">
                  87 family members across 5 generations &middot; 12 connections suggested by MemoryGlen,
                  confirmed by family
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-stone-300">
                  One person can belong to every family that loves them. Sarah Miller (n&eacute;e Peters)
                  appears here in the Peters Family Glen &mdash; and in her husband&rsquo;s Miller Family Glen.
                  Solid lines: this glen. Dotted lines: family beyond it. Nobody is left out of the story.
                </p>
              </div>

              <div className="mt-12 flex flex-col items-center gap-6">
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="rounded-full border border-white/20 px-5 py-2 text-sm text-stone-200">Samuel &middot; Ruth</span>
                  <span className="rounded-full border border-white/20 px-5 py-2 text-sm text-stone-200">James Peters</span>
                </div>
                <div className="rounded-2xl bg-amber-400/10 px-8 py-4 text-center ring-1 ring-amber-400/40">
                  <p className="font-serif text-lg text-white">John Peters</p>
                  <p className="text-xs text-amber-300/80">1958&ndash;2026 &middot; with Grace</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="rounded-full border border-white/20 px-5 py-2 text-sm text-stone-200">David &mdash; Harare</span>
                  <span className="rounded-full border border-white/20 px-5 py-2 text-sm text-stone-200">Michael &mdash; JHB</span>
                  <span className="rounded-full border border-white/20 px-5 py-2 text-center text-sm text-stone-200">
                    Sarah &mdash; London<br />
                    <span className="text-xs text-stone-400">in 2 family glens</span>
                  </span>
                  <span className="rounded-full border border-dashed border-white/20 px-5 py-2 text-center text-sm text-stone-400">
                    Miller Family<br />
                    <span className="text-xs">her husband&rsquo;s glen</span>
                  </span>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
