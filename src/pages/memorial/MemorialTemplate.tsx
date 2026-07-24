import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import type { MemorialData } from '@/pages/memorial/types';

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
      {children}
    </p>
  );
}

export default function MemorialTemplate({ data }: { data: MemorialData }) {
  const [candleCount, setCandleCount] = useState(data.candles);
  const [lit, setLit] = useState(false);

  return (
    <Layout>
      <main className="bg-[#0d1a12] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(' + data.heroImage + ')' }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1a12]" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/70">
                Public Memorial &middot; Published
              </p>
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl font-serif text-white backdrop-blur">
                {data.avatarInitial}
              </div>
              <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{data.name}</h1>
              <p className="mt-3 text-lg text-amber-200/90">{data.lifespan}</p>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
                {data.epitaph}
              </p>
              <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-6">
                <Stat value={String(candleCount)} label="Candles" />
                <Stat value={String(data.tributes.length)} label="Tributes" />
                <Stat value={String(data.gallery.length)} label="Media" />
              </div>
              <button
                onClick={() => {
                  if (!lit) {
                    setCandleCount((c) => c + 1);
                    setLit(true);
                  }
                }}
                className="mt-10 rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-[#0d1a12] transition hover:bg-amber-300"
              >
                {lit ? 'Thank you for lighting a candle' : 'Light a Candle'}
              </button>
            </motion.div>
          </div>
        </section>

        {/* FAMILY MESSAGE */}
        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-12 text-center">
            <p className="font-serif text-xl italic leading-relaxed text-white/90">
              &ldquo;{data.familyMessage}&rdquo;
            </p>
            <p className="mt-4 text-sm uppercase tracking-widest text-white/50">
              A message from the family
            </p>
          </div>
        </section>

        {/* BIOGRAPHY */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <SectionLabel>Biography</SectionLabel>
          <h2 className="mb-8 font-serif text-3xl">Their Life</h2>
          <div className="space-y-5 text-base leading-relaxed text-white/80">
            {data.biography.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* TRIBUTES */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <SectionLabel>With Love</SectionLabel>
            <h2 className="mb-10 font-serif text-3xl">Tributes from Family</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {data.tributes.map((t, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6"
                >
                  <p className="text-base italic leading-relaxed text-white/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-amber-200/80">
                    &mdash; {t.name} &middot; {t.relation}
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="mb-3 font-serif text-3xl">Family Memories</h2>
          <p className="mb-8 max-w-2xl text-sm text-white/60">{data.galleryCaption}</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {data.gallery.map((g, i) => (
              <figure key={i} className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
                <figcaption className="bg-black/30 px-3 py-2 text-xs text-white/60">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* SCRIPTURE */}
        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <SectionLabel>Scripture</SectionLabel>
            <div className="space-y-8">
              {data.scriptures.map((s, i) => (
                <div key={i}>
                  <p className="font-serif text-lg italic leading-relaxed text-white/85">
                    &ldquo;{s.text}&rdquo;
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-widest text-amber-200/70">
                    {s.reference}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">A Hymn They Loved</p>
              <p className="mt-4 font-serif text-lg italic text-white/85">
                &ldquo;{data.hymn.line}&rdquo;
              </p>
              <p className="mt-2 text-sm text-white/60">{data.hymn.translation}</p>
            </div>
          </div>
        </section>

        {/* POEM */}
        <section className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="mb-8 font-serif text-2xl text-amber-100">Forever in Our Hearts</h2>
          <div className="space-y-2 text-base leading-relaxed text-white/80">
            {data.poemLines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <SectionLabel>Their Journey</SectionLabel>
            <h2 className="mb-10 font-serif text-3xl">Life Timeline</h2>
            <ol className="relative space-y-8 border-l border-white/15 pl-8">
              {data.timeline.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[37px] mt-1 h-3 w-3 rounded-full bg-amber-400" />
                  <p className="text-sm font-semibold text-amber-200/80">{t.date}</p>
                  <h3 className="mt-1 font-serif text-xl">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAMILY */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <SectionLabel>Family</SectionLabel>
          <h2 className="mb-10 font-serif text-3xl">Those They Left Behind</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.family.map((m, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium text-white">{m.name}</p>
                <p className="text-sm text-white/60">{m.relation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GUESTBOOK */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <SectionLabel>Guestbook</SectionLabel>
            <h2 className="mb-10 font-serif text-3xl">Messages of Condolence</h2>
            <div className="space-y-6">
              {data.guestbook.map((g, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <p className="text-base leading-relaxed text-white/85">{g.message}</p>
                  <p className="mt-3 text-sm text-amber-200/80">
                    {g.author} &middot; {g.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESTING PLACE */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <SectionLabel>Final Resting Place</SectionLabel>
          <h2 className="mb-4 font-serif text-3xl">{data.restingPlace.title}</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75">
            {data.restingPlace.copy}
          </p>
        </section>

        {/* PROVIDERS */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <SectionLabel>Family Service Providers</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {data.providers.map((p, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <p className="font-medium text-white">{p.name}</p>
                  <p className="text-xs uppercase tracking-widest text-amber-200/70">
                    {p.category}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-3xl px-6 py-12 text-center text-sm text-white/50">
          Rest in peace, {data.name}. Your memory is our blessing.
        </footer>
      </main>
    </Layout>
  );
}
