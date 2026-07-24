export interface Tribute {
  name: string;
  relation: string;
  quote: string;
}

export interface GalleryItem {
  src: string;
  caption: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  body: string;
}

export interface FamilyMember {
  name: string;
  relation: string;
}

export interface GuestbookEntry {
  author: string;
  date: string;
  message: string;
}

export interface Scripture {
  reference: string;
  text: string;
}

export interface Provider {
  name: string;
  category: string;
  description: string;
}

export interface MemorialData {
  slug: string;
  name: string;
  lifespan: string;
  born: number;
  died: number;
  place: string;
  country: string;
  avatarInitial: string;
  heroImage: string;
  accent: string;
  epitaph: string;
  familyMessage: string;
  biography: string[];
  tributes: Tribute[];
  scriptures: Scripture[];
  hymn: { line: string; translation: string };
  poemLines: string[];
  gallery: GalleryItem[];
  galleryCaption: string;
  restingPlace: { title: string; copy: string };
  timeline: TimelineItem[];
  family: FamilyMember[];
  guestbook: GuestbookEntry[];
  candles: number;
  providers: Provider[];
}
