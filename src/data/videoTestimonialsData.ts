export interface VideoTestimonial {
  id: string;
  studentName: string;
  courseName: string;
  videoSrc: string;
  posterSrc: string;
  isComingSoon: boolean;
}

export const TESTIMONIAL_VIDEO_SRC_1 = 'https://res.cloudinary.com/z6ncmaq4/video/upload/v1790333343/video1_final_29mb.mp4';
export const TESTIMONIAL_VIDEO_SRC_2 = 'https://res.cloudinary.com/z6ncmaq4/video/upload/v1790333372/video2_final.mp4';
export const TESTIMONIAL_VIDEO_SRC_3 = 'https://res.cloudinary.com/z6ncmaq4/video/upload/v1790333393/video3_final.mp4';

export const TESTIMONIAL_POSTER_SRC_1 = 'https://res.cloudinary.com/z6ncmaq4/video/upload/so_1,q_auto:best/v1790333343/video1_final_29mb.jpg';
export const TESTIMONIAL_POSTER_SRC_2 = 'https://res.cloudinary.com/z6ncmaq4/video/upload/so_1,q_auto:best/v1790333393/video3_final.jpg';
export const TESTIMONIAL_POSTER_SRC_3 = 'https://res.cloudinary.com/z6ncmaq4/video/upload/so_1,q_auto:best/v1790333372/video2_final.jpg';

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'student-video-1',
    studentName: 'Student Testimonial',
    courseName: 'Diploma in Financial Accounting with Tally Prime',
    videoSrc: TESTIMONIAL_VIDEO_SRC_1,
    posterSrc: TESTIMONIAL_POSTER_SRC_1,
    isComingSoon: false
  },
  {
    id: 'student-video-2',
    studentName: 'Student Testimonial',
    courseName: 'Live GST Return Filing',
    videoSrc: TESTIMONIAL_VIDEO_SRC_3,
    posterSrc: TESTIMONIAL_POSTER_SRC_2,
    isComingSoon: false
  },
  {
    id: 'student-video-3',
    studentName: 'Student Testimonial',
    courseName: 'DCSF - Diploma in Computer Skills and Fundamentals',
    videoSrc: TESTIMONIAL_VIDEO_SRC_2,
    posterSrc: TESTIMONIAL_POSTER_SRC_3,
    isComingSoon: false
  }
];
