import { useRef, useState } from 'react';
import type { ComponentType } from 'react';
import { useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import DemoBanner from '@/components/DemoBanner';
import ServiceProviderRail from '@/components/ServiceProviderRail';
import Hero from '@/pages/john/Hero';
import JohnTabBar from '@/pages/john/TabBar';
import type { JohnTabId } from '@/pages/john/TabBar';
import OverviewTab from '@/pages/john/OverviewTab';
import LifeStoryTab from '@/pages/john/LifeStoryTab';
import GalleryTab from '@/pages/john/GalleryTab';
import VideosTab from '@/pages/john/VideosTab';
import VoiceNotesTab from '@/pages/john/VoiceNotesTab';
import FuneralTab from '@/pages/john/FuneralTab';
import FamilyTab from '@/pages/john/FamilyTab';
import GuestbookTab from '@/pages/john/GuestbookTab';
import CandlesTab from '@/pages/john/CandlesTab';
import AnniversaryTab from '@/pages/john/AnniversaryTab';
import { PROVIDERS, isAnniversaryToday } from '@/pages/john/data';

const TAB_COMPONENTS: Record<JohnTabId, ComponentType> = {
  overview: OverviewTab,
  'life-story': LifeStoryTab,
  gallery: GalleryTab,
  videos: VideosTab,
  'voice-notes': VoiceNotesTab,
  funeral: FuneralTab,
  family: FamilyTab,
  guestbook: GuestbookTab,
  candles: CandlesTab,
  anniversary: AnniversaryTab,
};

function isTabId(value: string | null): value is JohnTabId {
  return value !== null && value in TAB_COMPONENTS;
}

/**
 * DEMONSTRATION memorial - John Peters (fictional). Built on the exact same
 * 10-tab template as the founding memorial, so every memorial has identical
 * functionality. A DemoBanner is always present so the demo is never mistaken
 * for a real person.
 */
export default function JohnMemorial() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const active: JohnTabId = isTabId(tabParam) ? tabParam : 'overview';
  const ActiveTab = TAB_COMPONENTS[active];
  const contentRef = useRef<HTMLDivElement>(null);

  const [bannerDismissed, setBannerDismissed] = useState(false);
  const anniversary = isAnniversaryToday();

  const selectTab = (tab: JohnTabId) => {
    setSearchParams(tab === 'overview' ? {} : { tab }, { preventScrollReset: false });
    window.setTimeout(() => {
      contentRef.current?.scrollIntoView({ block: 'start' });
    }, 0);
  };

  return (
    <div>
      {/* DemoBanner - always available so honesty is never lost. */}
      {!bannerDismissed ? (
        <div className="relative">
          <DemoBanner />
          <button
            type="button"
            onClick={() => setBannerDismissed(true)}
            aria-label="Dismiss demonstration notice"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-bone/70 transition-colors hover:text-bone"
          >
            <X size={14} aria-hidden />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setBannerDismissed(false)}
          className="fixed bottom-4 left-4 z-50 rounded-full border border-brass bg-forest-deep px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brass-soft shadow-raised"
        >
          Demo
        </button>
      )}

      <Hero anniversary={anniversary} onLightCandle={() => selectTab('candles')} />

      <JohnTabBar active={active} onSelect={selectTab} />

      <div ref={contentRef} className="container-content scroll-mt-36 py-16 md:py-24">
        <div className="flex gap-12">
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <ActiveTab />
              </motion.div>
            </AnimatePresence>
          </div>

          <ServiceProviderRail providers={PROVIDERS} />
        </div>
      </div>
    </div>
  );
}
