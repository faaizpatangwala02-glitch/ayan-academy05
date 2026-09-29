export interface Course {
  id: string;
  name: string;
  title?: string;
  duration: string;
  fees?: string;
  highlight: string;
  benefits: string[];
  iconType: 'accounting' | 'gst' | 'computer';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  source: string;
  courseTaken?: string;
}

