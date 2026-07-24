import type { MemorialData } from '@/pages/memorial/types';

const data: MemorialData = {
  slug: 'sipho-nkosi',
  name: 'Sipho Nkosi',
  lifespan: '1960 \u2013 2025',
  born: 1960,
  died: 2025,
  place: 'Durban',
  country: 'South Africa',
  avatarInitial: 'S',
  heroImage: '/theme-still-water.jpg',
  accent: 'amber',
  epitaph: 'A beloved father remembered for patience and a love of learning.',
  familyMessage: 'A loving, faithful father \u2014 the heart of our family.',
  biography: [
    'Sipho Nkosi was born in 1960 in Durban, South Africa, into a close and hardworking family. From an early age he was known for patience and a love of learning, qualities that would come to define his whole life.',
    'He spent many years as a schoolteacher, earning the respect of everyone he worked alongside. Yet it was at home, surrounded by family, that he was truly happiest.',
    'He raised his children with discipline, patience, and deep love, teaching them to respect others, work hard, and hold on to faith through every season of life. He always had time to listen, and his door was open to anyone who needed comfort or counsel.',
    'A respected member of the Durban community, he touched countless lives through his gentle spirit and generous heart. Neighbours remember him as someone who gave freely and asked for little in return.',
    'Sipho Nkosi passed away in 2025, leaving behind a family and community that loved him dearly. Though he is gone, his lessons, his laughter, and his love remain with all who knew him.',
  ],
  tributes: [
    { name: 'David', relation: 'Son', quote: 'You were our anchor and our calm in every storm. Everything I am, I owe to your love and your example.' },
    { name: 'Tariro', relation: 'Grandchild', quote: 'Sekuru, your stories and your prayers will stay with me forever. I will live in a way that makes you proud.' },
    { name: 'Joseph', relation: 'Friend', quote: 'For many years you were the truest friend a person could ask for. The world is quieter without you.' },
    { name: 'Grace', relation: 'Community', quote: 'Your kindness knew no limits. You welcomed everyone with open arms and a warm meal.' },
  ],
  scriptures: [
    { reference: 'John 14:1-3', text: 'Let not your heart be troubled: ye believe in God, believe also in me. In my Father\u2019s house are many mansions; I go to prepare a place for you.' },
    { reference: '2 Timothy 4:7-8', text: 'I have fought a good fight, I have finished my course, I have kept the faith.' },
  ],
  hymn: { line: 'Mwari mubatsiri wedu, tichava nemi nguva dzose.', translation: '(God our helper, we will be with You always.)' },
  poemLines: [
    'Though you have journeyed beyond our sight,',
    'Your love remains our guiding light.',
    'In every prayer, in every song,',
    'Your spirit walks with us along.',
    'These gifts of love will never part,',
    'For you live forever in our hearts.',
  ],
  gallery: [
    { src: '/john-life-1.jpg', caption: 'A gathering of family, everyone together' },
    { src: '/john-life-2.jpg', caption: 'A quiet morning at home' },
    { src: '/john-life-3.jpg', caption: 'Celebrating a milestone with loved ones' },
    { src: '/john-life-4.jpg', caption: 'Sunday best, ready for church' },
    { src: '/john-life-5.jpg', caption: 'Among friends and neighbours' },
    { src: '/john-life-6.jpg', caption: 'A treasured everyday moment' },
  ],
  galleryCaption: 'A collection of precious moments captured with Sipho over the years \u2014 family gatherings, celebrations, and quiet everyday joys.',
  restingPlace: { title: 'Durban, South Africa', copy: 'Sipho Nkosi was laid to rest in Durban, the community he called home. The grave stands as a quiet place of remembrance where family and friends can visit and reflect.' },
  timeline: [
    { date: '1960', title: 'Born in Durban', body: 'Sipho Nkosi was born in 1960 in Durban, South Africa.' },
    { date: '1982', title: 'Built a Life and Family', body: 'He married and began raising a family, working as a schoolteacher.' },
    { date: '2005', title: 'A Pillar of the Community', body: 'Known across Durban for patience and a love of learning, he became a trusted and beloved figure.' },
    { date: '2025', title: 'Passed Away', body: 'Sipho Nkosi passed away in 2025, deeply mourned and dearly loved.' },
  ],
  family: [
    { name: 'David', relation: 'Son' },
    { name: 'Grace', relation: 'Daughter' },
    { name: 'Michael', relation: 'Son' },
    { name: 'Ruth', relation: 'Daughter-in-law' },
    { name: 'Tariro', relation: 'Grandchild' },
    { name: 'Anesu', relation: 'Grandchild' },
  ],
  guestbook: [
    { author: 'Peter Ncube', date: '2025', message: 'A truly good soul who helped so many without ever being asked. Rest well, dear friend.' },
    { author: 'Sarah Dube', date: '2025', message: 'I will always remember his warmth and wisdom. Deepest condolences to the whole family.' },
  ],
  candles: 132,
  providers: [
    { name: 'Eternal Stone Tombstones', category: 'Tombstone Maker', description: 'Granite headstones and memorials, crafted and engraved in Harare.' },
    { name: 'Msasa Florists', category: 'Florist', description: 'Wreaths and grave flowers, Harare and surrounds.' },
    { name: 'Glen View Catering', category: 'Caterer', description: 'Funeral catering across the region.' },
  ],
};

export default data;
