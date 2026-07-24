import type { MemorialData } from '@/pages/memorial/types';

const data: MemorialData = {
  slug: 'naledi-mokoena',
  name: 'Naledi Mokoena',
  lifespan: '1965 \u2013 2024',
  born: 1965,
  died: 2024,
  place: 'Cape Town',
  country: 'South Africa',
  avatarInitial: 'N',
  heroImage: '/theme-sunflower.jpg',
  accent: 'amber',
  epitaph: 'A beloved mother remembered for a joyful spirit and endless creativity.',
  familyMessage: 'A loving, faithful mother \u2014 the heart of our family.',
  biography: [
    'Naledi Mokoena was born in 1965 in Cape Town, South Africa, into a close and hardworking family. From an early age she was known for a joyful spirit and endless creativity, qualities that would come to define her whole life.',
    'She spent many years as a seamstress, earning the respect of everyone she worked alongside. Yet it was at home, surrounded by family, that she was truly happiest.',
    'She raised her children with discipline, patience, and deep love, teaching them to respect others, work hard, and hold on to faith through every season of life. She always had time to listen, and her door was open to anyone who needed comfort or counsel.',
    'A respected member of the Cape Town community, she touched countless lives through her gentle spirit and generous heart. Neighbours remember her as someone who gave freely and asked for little in return.',
    'Naledi Mokoena passed away in 2024, leaving behind a family and community that loved her dearly. Though she is gone, her lessons, her laughter, and her love remain with all who knew her.',
  ],
  tributes: [
    { name: 'David', relation: 'Son', quote: 'You were our anchor and our calm in every storm. Everything I am, I owe to your love and your example.' },
    { name: 'Tariro', relation: 'Grandchild', quote: 'Gogo, your stories and your prayers will stay with me forever. I will live in a way that makes you proud.' },
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
    { src: '/naledi-life-1.jpg', caption: 'A gathering of family, everyone together' },
    { src: '/naledi-life-2.jpg', caption: 'A quiet morning at home' },
    { src: '/naledi-life-3.jpg', caption: 'Celebrating a milestone with loved ones' },
    { src: '/naledi-life-4.jpg', caption: 'Sunday best, ready for church' },
    { src: '/naledi-life-5.jpg', caption: 'Among friends and neighbours' },
    { src: '/naledi-life-6.jpg', caption: 'A treasured everyday moment' },
  ],
  galleryCaption: 'A collection of precious moments captured with Naledi over the years \u2014 family gatherings, celebrations, and quiet everyday joys.',
  restingPlace: { title: 'Cape Town, South Africa', copy: 'Naledi Mokoena was laid to rest in Cape Town, the community she called home. The grave stands as a quiet place of remembrance where family and friends can visit and reflect.' },
  timeline: [
    { date: '1965', title: 'Born in Cape Town', body: 'Naledi Mokoena was born in 1965 in Cape Town, South Africa.' },
    { date: '1987', title: 'Built a Life and Family', body: 'She married and began raising a family, working as a seamstress.' },
    { date: '2010', title: 'A Pillar of the Community', body: 'Known across Cape Town for a joyful spirit and endless creativity, she became a trusted and beloved figure.' },
    { date: '2024', title: 'Passed Away', body: 'Naledi Mokoena passed away in 2024, deeply mourned and dearly loved.' },
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
    { author: 'Peter Ncube', date: '2024', message: 'A truly good soul who helped so many without ever being asked. Rest well, dear friend.' },
    { author: 'Sarah Dube', date: '2024', message: 'I will always remember her warmth and wisdom. Deepest condolences to the whole family.' },
  ],
  candles: 118,
  providers: [
    { name: 'Eternal Stone Tombstones', category: 'Tombstone Maker', description: 'Granite headstones and memorials, crafted and engraved in Cape Town.' },
    { name: 'Msasa Florists', category: 'Florist', description: 'Wreaths and grave flowers, Cape Town and surrounds.' },
    { name: 'Glen View Catering', category: 'Caterer', description: 'Funeral catering across the region.' },
  ],
};

export default data;
