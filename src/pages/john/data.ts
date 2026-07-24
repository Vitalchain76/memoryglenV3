import type { Candle } from '@/components/CandleFlame';
import type { ServiceProvider } from '@/components/ServiceProviderRail';
import type { TimelineItem } from '@/components/Timeline';

/**
 * DEMONSTRATION content for John Peters (1958-2026).
 * John Peters and the Peters family are FICTIONAL, created to show how a
 * MemoryGlen memorial works. This file mirrors the schema of the founding
 * memorial (virginia/data.ts) exactly, so John's page has identical
 * functionality. Never present John as a real person.
 */

// --- Identity (kept in data so the layout stays generic) ---
export const NAME = 'John Peters';
export const LIFESPAN = '1958 - 2026';
export const PORTRAIT = '/memorial-john-portrait.jpg';
export const PORTRAIT_ALT =
  'Portrait of John Peters, a fictional elderly Zimbabwean gentleman, hands clasped in golden window light';
export const AVATAR_INITIAL = 'J';
export const QR_SRC = '/qr-john.svg';

export const HERO_STATS = [
  { value: '247', label: 'Candles' },
  { value: '38', label: 'Tributes' },
  { value: '13', label: 'Media' },
  { value: '25', label: 'Family' },
];

export const MEMORIAL_URL = 'https://memoryglen.com/memorials/john-peters';

export const EPITAPH = 'A father who connected continents. Three generations knew his kindness.';

/** Full biography. */
export const BIOGRAPHY: string[] = [
  'John Peters was born in 1958 in Harare, Zimbabwe, the eldest son of Samuel and Ruth Peters. He grew up in a home where hard work and kindness were taught as one and the same, lessons he carried for the rest of his life.',
  'For more than thirty years John worked with his hands and his heart, and three generations of schoolchildren knew his keys and his kindness. He believed that no person should be forgotten, and that every family deserves one place where its story rests together.',
  'John married Grace, and together they raised three children across three countries: David in Harare, Michael in Johannesburg, and Sarah in London. Distance never loosened the ties between them; he made sure of that.',
  'He was a listener. Whenever family or neighbours needed guidance, comfort, or simply company, John gave his time freely. His patience and warmth brought peace to many who trusted him.',
  'He taught his children to respect people, to value family above possessions, to work honestly, and to keep faith in difficult seasons. These were the gifts he gave, and they remain.',
  'John Peters passed away in Johannesburg in 2026. His family, scattered across three time zones, was brought together by one link, and he was carried home to rest among his own.',
  'His memory lives on in the hearts of his children, grandchildren, family, and the many friends whose lives he touched.',
];

export interface Tribute {
  name: string;
  relation: string;
  quote: string;
}

export const TRIBUTES: Tribute[] = [
  {
    name: 'David',
    relation: 'Son - Harare',
    quote:
      'You taught me that a day of honest work is never wasted. Everything I know about being a man, I learned watching you. Rest well, Dad.',
  },
  {
    name: 'Michael',
    relation: 'Son - Johannesburg',
    quote:
      'You crossed borders so we could have better lives, and you never once complained. Your sacrifice is the ground we stand on.',
  },
  {
    name: 'Sarah',
    relation: 'Daughter - London',
    quote:
      'Even an ocean away, I always felt you close. Your voice on the phone was home. I will carry your light forward, Dad.',
  },
  {
    name: 'Grace',
    relation: 'Wife',
    quote:
      'For fifty years you were my anchor and my calm. We built a family that no distance could break. I honour you always.',
  },
  {
    name: 'Tendai',
    relation: 'Grandson',
    quote:
      'Sekuru, every story and every lesson you shared stays with me. I promise to live in a way that makes you proud.',
  },
];

export const SCRIPTURES = [
  {
    reference: 'John 14:1-3',
    text: 'Let not your heart be troubled: ye believe in God, believe also in me. In my Father\u2019s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.',
  },
  {
    reference: '2 Timothy 4:7-8',
    text: 'I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day.',
  },
];

export const HYMN = {
  shona: 'Mwari mubatsiri wedu, tichava nemi nguva dzose.',
  translation: '(God our helper, we will be with You always.)',
};

export const POEM_LINES = [
  'Though you have journeyed beyond our sight,',
  'Your love remains our guiding light.',
  'In every prayer, in every song,',
  'Your spirit walks with us along.',
  'The lessons taught, the stories shared,',
  'The way you showed us that you cared -',
  'These gifts of love will never part,',
  'For you live forever in our hearts.',
  'Rest in peace, John Peters. Your memory is our blessing.',
];

export const VOICE_NOTE = {
  title: 'A Message from Dad',
  description:
    'A cherished voice recording of John speaking to his family across the miles. His voice, warmth, and love continue to reach us through this precious recording.',
};

export interface GalleryItem {
  src: string;
  caption: string;
  category: 'Family' | 'Church' | 'Home';
}

export const GALLERY: GalleryItem[] = [
  { src: '/virginia-gallery-1.jpg', caption: 'Sunday lunch at home, everyone together', category: 'Family' },
  { src: '/virginia-gallery-2.jpg', caption: 'His well-worn Bible, read every morning', category: 'Church' },
  { src: '/virginia-gallery-3.jpg', caption: 'The family home at dusk, Harare', category: 'Home' },
  { src: '/virginia-gallery-4.jpg', caption: 'Hymn book and choir robes, he loved to sing', category: 'Church' },
  { src: '/virginia-gallery-1.jpg', caption: 'A family gathering, everyone at the table', category: 'Family' },
  { src: '/virginia-gallery-3.jpg', caption: 'A quiet evening at home', category: 'Home' },
  { src: '/virginia-gallery-4.jpg', caption: 'Sunday service with the choir', category: 'Church' },
  { src: '/virginia-gallery-2.jpg', caption: 'Morning devotion and prayer', category: 'Church' },
  { src: '/virginia-gallery-1.jpg', caption: 'Celebrating together, as he taught us', category: 'Family' },
  { src: '/virginia-gallery-3.jpg', caption: 'The garden he tended for years', category: 'Home' },
  { src: '/virginia-gallery-1.jpg', caption: 'Grandchildren visiting Sekuru', category: 'Family' },
  { src: '/virginia-gallery-2.jpg', caption: 'His favourite verses, marked and treasured', category: 'Church' },
  { src: '/virginia-gallery-3.jpg', caption: 'Home at last, among his own', category: 'Home' },
];

export const GALLERY_CAPTION =
  'A collection of precious moments captured with John over the years - family gatherings, celebrations, and quiet everyday joys.';

export interface Booklet {
  title: string;
  size: string;
  href: string;
}

export const BOOKLETS: Booklet[] = [
  { title: 'Memorial Invitation', size: '872 KB', href: '/booklets/invitation1.pdf' },
  { title: 'Memorial Invitation - Extended', size: '1.5 MB', href: '/booklets/invitation2.pdf' },
  { title: 'John Peters - Booklet Vol. 1', size: '3.0 MB', href: '/booklets/booklet1.pdf' },
  { title: 'John Peters - Final Booklet', size: '7.0 MB', href: '/booklets/booklet2.pdf' },
];

export const BOOKLETS_COPY =
  "Programme, invitations, and tribute booklets created to honour John's life - tributes from his children, grandchildren, family, and friends; poems; scripture; and memories.";

export const RESTING_PLACE = {
  title: 'Glen Forest Memorial Park, Zimbabwe',
  copy: 'John Peters was laid to rest at Glen Forest Memorial Park, brought home to lie among his own. His grave stands as a quiet place of remembrance where family and friends can visit, reflect, and feel close to his enduring spirit.',
  photos: ['/virginia-grave-1.jpg', '/virginia-grave-2.jpg'],
  caption: 'Photos from Glen Forest Memorial Park - May his soul rest in eternal peace.',
};

export const LIFE_TIMELINE: TimelineItem[] = [
  {
    date: '1958',
    title: 'Born in Harare',
    body: 'John Peters was born in 1958 in Harare, Zimbabwe, the eldest son of Samuel and Ruth Peters.',
    status: 'plain',
  },
  {
    date: '1976',
    title: 'Married and Started a Family',
    body: 'He married Grace and, over the years, they raised three children across three countries: David, Michael, and Sarah.',
    status: 'plain',
  },
  {
    date: '2002',
    title: 'Became a Grandfather',
    body: 'His first grandchild was born - the first of a growing family that would span five generations and several continents.',
    status: 'plain',
  },
  {
    date: '2010',
    title: 'Community Pillar',
    body: 'Known across his community for his kindness and steady hand, three generations of schoolchildren knew his keys and his kindness.',
    status: 'plain',
  },
  {
    date: '2026',
    title: 'Passed Away',
    body: 'John passed away in Johannesburg in 2026. His family was brought together across three time zones by one link.',
    status: 'plain',
  },
  {
    date: '2026',
    title: 'Brought Home',
    body: 'John was carried home and laid to rest at Glen Forest Memorial Park, among his own.',
    status: 'key',
  },
];

export interface FamilyMember {
  name: string;
  relation: string;
  birthYear?: number;
}

export const CHILDREN: FamilyMember[] = [
  { name: 'David Peters', relation: 'Son - Harare', birthYear: 1978 },
  { name: 'Michael Peters', relation: 'Son - Johannesburg', birthYear: 1981 },
  { name: 'Sarah Miller', relation: 'Daughter - London', birthYear: 1985 },
];

export const GRANDCHILDREN: FamilyMember[] = [
  { name: 'Tendai', relation: 'Grandchild - eldest', birthYear: 2002 },
  { name: 'Rutendo', relation: 'Grandchild' },
  { name: 'Nathan', relation: 'Grandchild' },
  { name: 'Emily', relation: 'Grandchild' },
  { name: 'Joshua', relation: 'Grandchild' },
  { name: 'Grace', relation: 'Grandchild' },
];

export const FUNERAL_EVENT = {
  title: 'Memorial Service',
  date: 'Saturday, August 2026',
  time: '10:30 - 14:00',
  venue: 'Glen Forest Memorial Park, Harare, Zimbabwe',
};

export interface ServiceVideo {
  title: string;
  thumbnail: string;
}

export const SERVICE_VIDEOS: ServiceVideo[] = [
  { title: 'Funeral Service - Part 1', thumbnail: '/virginia-gallery-4.jpg' },
  { title: 'Funeral Service - Part 2', thumbnail: '/virginia-gallery-3.jpg' },
  { title: 'Funeral Service - Part 3', thumbnail: '/virginia-gallery-2.jpg' },
];

export const VIDEOS_META = 'Recorded August 2026 - Glen Forest Memorial Park';

export interface GuestbookEntry {
  title: string;
  author: string;
  date: string;
  message: string;
}

export const GUESTBOOK: GuestbookEntry[] = [
  {
    title: 'A True Gentleman',
    author: 'Peter Ncube',
    date: '10 August 2026',
    message:
      'John helped half the street without ever being asked. His strength and wisdom continue to guide us. We miss his laughter.',
  },
  {
    title: 'Family Above All',
    author: 'Linda Moyo',
    date: '12 August 2026',
    message:
      'He held his family together across continents. Those Sunday phone calls were his way of keeping everyone close. Forever treasured.',
  },
];

export const CANDLES: Candle[] = [
  { name: 'David', message: TRIBUTES[0].quote, date: '3 Aug 2026' },
  { name: 'Michael', message: TRIBUTES[1].quote, date: '3 Aug 2026' },
  { name: 'Sarah', message: TRIBUTES[2].quote, date: '3 Aug 2026' },
  { name: 'Grace', message: TRIBUTES[3].quote, date: '4 Aug 2026' },
  { name: 'Tendai (Grandson)', message: TRIBUTES[4].quote, date: '4 Aug 2026' },
  {
    name: 'The Peters Family',
    message: 'Forever in our hearts, Baba. Your light continues to guide us every single day.',
    date: '5 Aug 2026',
  },
];

export const PROVIDERS: ServiceProvider[] = [
  {
    name: 'Eternal Stone Tombstones',
    category: 'Tombstone Maker',
    description: 'Granite headstones and memorials, crafted and engraved in Harare.',
    contactHref: 'mailto:admin@memoryglen.com?subject=Eternal%20Stone%20Tombstones',
    tier: 'featured',
  },
  {
    name: 'Msasa Florists',
    category: 'Florist',
    description: 'Wreaths & grave flowers, Harare & surrounds.',
    tier: 'standard',
  },
  {
    name: 'Glen View Catering',
    category: 'Caterer',
    description: 'Funeral catering, Harare & Johannesburg.',
    tier: 'standard',
  },
  {
    name: 'ClearStream Funeral Streaming',
    category: 'Livestream Services',
    phone: '+263 71 555 0143',
    tier: 'basic',
  },
  {
    name: 'Heritage Printers',
    category: 'Memorial Booklets',
    phone: '+263 71 555 0192',
    tier: 'basic',
  },
];

/** Demo: never forces an anniversary state. */
export function isAnniversaryToday(): boolean {
  return false;
}
