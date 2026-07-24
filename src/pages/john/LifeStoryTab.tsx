import Reveal from '@/components/Reveal';
import { BIOGRAPHY, NAME, TRIBUTES } from '@/pages/john/data';

const SECTIONS = [
  { id: 'early-years', label: 'Early Years' },
  { id: 'marriage-family', label: 'Marriage & Family' },
  { id: 'work', label: 'Work & Faith' },
  { id: 'community', label: 'Community' },
  { id: 'final-years', label: 'His Final Years' },
];

function PullQuote({ tributeIndex }: { tributeIndex: number }) {
  const t = TRIBUTES[tributeIndex];
  return (
    <Reveal>
      <blockquote className="my-10 border-l-2 border-brass pl-6">
        <p className="type-quote text-body">"{t.quote}"</p>
        <footer className="type-meta mt-3 text-soft">
          - {t.name} <span aria-hidden>·</span> {t.relation}
        </footer>
      </blockquote>
    </Reveal>
  );
}

function Paragraphs({ indexes }: { indexes: number[] }) {
  return (
    <div className="mt-6 space-y-5">
      {indexes.map((i) => (
        <Reveal key={i}>
          <p className="type-story text-body">{BIOGRAPHY[i]}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** TAB: Life Story - long-form single column with section anchors. */
export default function LifeStoryTab() {
  return (
    <article className="max-w-reading">
      <Reveal>
        <p className="eyebrow">His Life Story</p>
        <h2 className="type-h2 mt-4 text-body">The Story of {NAME}</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <nav aria-label="Life story sections" className="card-well mt-8 p-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="link-arrow text-sm">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>

      <section id="early-years" className="mt-14 scroll-mt-32" aria-labelledby="early-years-h">
        <Reveal>
          <h3 id="early-years-h" className="type-h3 text-body">
            Early Years
          </h3>
        </Reveal>
        <Paragraphs indexes={[0]} />
      </section>

      <section id="marriage-family" className="mt-14 scroll-mt-32" aria-labelledby="marriage-family-h">
        <Reveal>
          <h3 id="marriage-family-h" className="type-h3 text-body">
            Marriage &amp; Family
          </h3>
        </Reveal>
        <Paragraphs indexes={[1]} />
        <PullQuote tributeIndex={2} />
      </section>

      <section id="work" className="mt-14 scroll-mt-32" aria-labelledby="work-h">
        <Reveal>
          <h3 id="work-h" className="type-h3 text-body">
            Work &amp; Faith
          </h3>
        </Reveal>
        <Paragraphs indexes={[3, 4]} />
        <Reveal>
          <figure className="my-10">
            <img
              src="/virginia-gallery-2.jpg"
              alt="His well-worn Bible with reading glasses, in morning light"
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <figcaption className="type-meta mt-3 text-soft">
              He kept his faith through every season - it shaped the way he lived and led his family.
            </figcaption>
          </figure>
        </Reveal>
        <PullQuote tributeIndex={1} />
      </section>

      <section id="community" className="mt-14 scroll-mt-32" aria-labelledby="community-h">
        <Reveal>
          <h3 id="community-h" className="type-h3 text-body">
            Community
          </h3>
        </Reveal>
        <Paragraphs indexes={[2, 5]} />
        <PullQuote tributeIndex={4} />
      </section>

      <section id="final-years" className="mt-14 scroll-mt-32" aria-labelledby="final-years-h">
        <Reveal>
          <h3 id="final-years-h" className="type-h3 text-body">
            His Final Years
          </h3>
        </Reveal>
        <Paragraphs indexes={[6, 7, 8]} />
        <PullQuote tributeIndex={3} />
      </section>
    </article>
  );
}
