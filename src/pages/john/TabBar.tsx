import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type JohnTabId =
  | 'overview'
  | 'life-story'
  | 'gallery'
  | 'videos'
  | 'voice-notes'
  | 'funeral'
  | 'family'
  | 'guestbook'
  | 'candles'
  | 'anniversary';

const JOHN_TABS: { id: JohnTabId; label: string; count?: number }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'life-story', label: 'Life Story' },
  { id: 'gallery', label: 'Gallery', count: 13 },
  { id: 'videos', label: 'Videos', count: 3 },
  { id: 'voice-notes', label: 'Voice Notes', count: 1 },
  { id: 'funeral', label: 'Funeral' },
  { id: 'family', label: 'Family', count: 9 },
  { id: 'guestbook', label: 'Guestbook', count: 2 },
  { id: 'candles', label: 'Digital Candles', count: 6 },
  { id: 'anniversary', label: 'Anniversary Room' },
];

/** JohnTabBar - the 10-tab demo memorial, mirroring the founding memorial's tab bar. */
export default function JohnTabBar({
  active,
  onSelect,
}: {
  active: JohnTabId;
  onSelect: (tab: JohnTabId) => void;
}) {
  return (
    <div
      className="sticky top-[72px] z-40 border-b border-[color:var(--line)]"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 92%, transparent)', backdropFilter: 'blur(8px)' }}
    >
      <div className="container-content relative">
        <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[color:var(--bg)] to-transparent md:hidden" />
        <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[color:var(--bg)] to-transparent md:hidden" />
        <nav aria-label="Memorial sections" className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
          <ul className="flex min-w-max items-stretch gap-1 md:min-w-0 md:flex-wrap" role="tablist">
            {JOHN_TABS.map((tab) => {
              const selected = tab.id === active;
              return (
                <li key={tab.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => onSelect(tab.id)}
                    className={cn(
                      'relative flex min-h-12 items-center gap-1.5 whitespace-nowrap px-3 py-3 text-sm font-medium transition-colors duration-200',
                      selected ? 'text-body' : 'text-soft hover:text-body',
                    )}
                  >
                    {tab.label}
                    {typeof tab.count === 'number' && (
                      <span
                        className={cn(
                          'rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums',
                          selected ? 'bg-brass/15 text-brass' : 'text-soft',
                        )}
                      >
                        {tab.count}
                      </span>
                    )}
                    {selected && (
                      <motion.span
                        layoutId="john-tab-underline"
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="absolute inset-x-2 bottom-0 h-0.5 bg-brass"
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
