export interface HeroSlide {
  id: string;
  line1: string;
  line2: string;
  imageSrc: string;
  alt: string;
  objectPosition?: string;
}

/**
 * Hero Section Slider Configuration:
 * Strictly mapped to the 4 original Ayan Academy classroom photos.
 * 
 * Slide 1 -> hero1.jpeg (We Make Accountants)
 * Slide 2 -> hero2.jpeg (Build Your Career With Ayan Academy)
 * Slide 3 -> hero3.jpeg (Master Tally, GST & TDS)
 * Slide 4 -> hero4.jpeg (Become Job-Ready)
 * 
 * ZERO AI-generated images, ZERO stock photos, ZERO gallery reuse.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-slide-1',
    line1: 'WE MAKE',
    line2: 'ACCOUNTANTS',
    imageSrc: '/hero/hero1.jpeg',
    alt: 'Ayan Academy Classroom Photo 1 - We Make Accountants',
    objectPosition: 'center center'
  },
  {
    id: 'hero-slide-2',
    line1: 'BUILD YOUR CAREER',
    line2: 'WITH AYAN ACADEMY',
    imageSrc: '/hero/hero2.jpeg',
    alt: 'Ayan Academy Classroom Photo 2 - Build Your Career With Ayan Academy',
    objectPosition: 'center center'
  },
  {
    id: 'hero-slide-3',
    line1: 'MASTER',
    line2: 'TALLY, GST & TDS',
    imageSrc: '/hero/hero3.jpeg',
    alt: 'Ayan Academy Classroom Photo 3 - Master Tally, GST & TDS',
    objectPosition: 'center center'
  },
  {
    id: 'hero-slide-4',
    line1: 'BECOME',
    line2: 'JOB-READY',
    imageSrc: '/hero/hero4.jpeg',
    alt: 'Ayan Academy Classroom Photo 4 - Become Job-Ready',
    objectPosition: 'center center'
  }
];


