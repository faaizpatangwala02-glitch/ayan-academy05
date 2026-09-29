export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Static Gallery Photos for Ayan Academy.
 * 
 * To display the real photos, place the 4 image files into the /public/gallery/ directory
 * (via the file explorer in the code editor) and uncomment the entries below.
 * 
 * When empty, the Gallery section displays a clean, elegant "Gallery photos coming soon." message.
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'ayan-gallery-1',
    src: '/gallery/WhatsApp Image 2026-09-06 at 10.25.49 PM.jpeg',
    alt: 'Ayan Academy student certification ceremony - Shaikh M. Atiq Zakir Husain',
    caption: 'Student Certification Ceremony with Instructor'
  },
  {
    id: 'ayan-gallery-2',
    src: '/gallery/WhatsApp Image 2026-09-06 at 10.26.41 PM.jpeg',
    alt: 'Ayan Academy student certification ceremony - Abda Munaf Musa',
    caption: 'Student Course Completion & Certificate Handover'
  },
  {
    id: 'ayan-gallery-3',
    src: '/gallery/WhatsApp Image 2026-09-08 at 3.05.24 AM.jpeg',
    alt: 'Ayan Academy student certification ceremony - Shaikh Mohammed Sufiyan',
    caption: 'Tally Prime & Accounting Course Certification'
  },
  {
    id: 'ayan-gallery-4',
    src: '/gallery/WhatsApp Image 2026-09-06 at 10.28.30 PM.jpeg',
    alt: 'Ayan Academy student certification ceremony - Parth Arvind Bhai Prajapati',
    caption: 'Practical Accounting & GST Training Completion'
  }
];

