import blogImg1 from 'assets/images/landing/blog/blog-img-1.webp';
import blogImg2 from 'assets/images/landing/blog/blog-img-2.webp';
import blogImg3 from 'assets/images/landing/blog/blog-img-3.webp';
import img1 from 'assets/images/landing/gallery/img1.webp';
import img2 from 'assets/images/landing/gallery/img2.webp';
import img3 from 'assets/images/landing/gallery/img3.webp';
import img4 from 'assets/images/landing/gallery/img4.webp';
import img5 from 'assets/images/landing/gallery/img5.webp';
import img6 from 'assets/images/landing/gallery/img6.webp';
import img7 from 'assets/images/landing/gallery/img7.webp';
import ecovisionProject from 'assets/images/landing/showcase/ecovision-project.webp';
import quantumLeapInitiative from 'assets/images/landing/showcase/quantum-leap-initiative.webp';
import skylineInnovations from 'assets/images/landing/showcase/skyline-innovations.webp';
import testimonialImg1 from 'assets/images/landing/testimonial/testimonial-1.webp';
import testimonialImg2 from 'assets/images/landing/testimonial/testimonial-2.webp';
import testimonialImg3 from 'assets/images/landing/testimonial/testimonial-3.webp';
import { users } from 'data/users';
import type { User } from 'types/users';

export type ShowcaseItem = {
  title: string;
  img: string;
  subtitle: string;
  desc: string;
};

export const showcaseData: ShowcaseItem[] = [
  {
    title: 'Skyline Innovations',
    img: skylineInnovations,
    subtitle: 'Modern architecture reimagined for tomorrow’s cities.',
    desc: 'A forward-thinking project blending minimal design with functional elegance. This work emphasizes clean geometry and sustainable building practices to create inspiring spaces.',
  },
  {
    title: 'Quantum Leap Initiative',
    img: quantumLeapInitiative,
    subtitle: 'Pioneering solutions for modern infrastructure.',
    desc: 'A daring take on structural innovation merges advanced technology with classic design. This initiative demonstrates how contemporary construction can meet the urban challenges of the future.',
  },
  {
    title: 'EcoVision Project',
    img: ecovisionProject,
    subtitle: 'Where sustainability meets architectural beauty.',
    desc: 'A project focused on eco-friendly materials and green architecture. Built with efficiency in mind, EcoVision highlights how smart design can minimize impact while maximizing aesthetic value.',
  },
];

export type Feature = {
  title: string;
  description: string;
};

export const featuresData: Feature[] = [
  {
    title: 'Real-time collaboration.',
    description: 'An intuitive drag-and-drop interface for easy content management.',
  },
  {
    title: 'Guided tutorials.',
    description: 'A notification system that alerts users about important updates and messages.',
  },
  {
    title: 'User data protection.',
    description: 'A feedback system that allows users to share their thoughts and suggestions.',
  },
  {
    title: 'Third-party integration.',
    description:
      'A responsive design that ensures optimal performance on both mobile and desktop devices.',
  },
  {
    title: 'Adaptive profiles.',
    description:
      'A sleek dashboard that provides real-time analytics and insights. Users can customize their views.',
  },
  {
    title: 'Personalized themes.',
    description: 'A robust search feature that helps users find content quickly and efficiently.',
  },
];

export type GalleryItem = {
  img: string;
  name: string;
};

export const galleryData: GalleryItem[] = [
  { img: img1, name: 'The Zenith UI/UX' },
  { img: img2, name: 'The Atlas Interface' },
  { img: img3, name: 'The Serpentine Design' },
  { img: img4, name: 'Heritage Blueprint' },
  { img: img5, name: 'The Vaulted Architecture' },
  { img: img6, name: 'Quantum Framework' },
  { img: img7, name: 'The Urban Experience' },
];

export type Stat = {
  value: string;
  label: string;
};

export const statsData: Stat[] = [
  { value: '4,000+', label: 'Users and still counting' },
  { value: '$25,000', label: 'In revenue and still generating' },
  { value: '3%', label: 'Flat platform fee' },
  { value: '5,152', label: 'Transactions this year' },
];

export type Testimonial = {
  id: number;
  rating: number;
  review: string;
  name: string;
  company: string;
  img: string;
};

export const testimonialData: Testimonial[] = [
  {
    id: 0,
    rating: 5,
    review: 'I absolutely love the package I chose; it fits my needs perfectly!',
    name: 'Casey Adams',
    company: 'CEO, Limitless Ltd',
    img: testimonialImg1,
  },
  {
    id: 1,
    rating: 4,
    review: 'I absolutely love the package I chose; it fits my needs perfectly!',
    name: 'Jake Peralta',
    company: 'CEO, Limitless Ltd',
    img: testimonialImg2,
  },
  {
    id: 2,
    rating: 3,
    review: 'I absolutely love the package I chose; it fits my needs perfectly!',
    name: 'Charles Boyle',
    company: 'CEO, Limitless Ltd',
    img: testimonialImg3,
  },
  {
    id: 3,
    rating: 4,
    review: 'I absolutely love the package I chose; it fits my needs perfectly!',
    name: 'Terry Jeffords',
    company: 'CEO, Limitless Ltd',
    img: testimonialImg1,
  },
  {
    id: 4,
    rating: 5,
    review: 'I absolutely love the package I chose; it fits my needs perfectly!',
    name: 'Casey Adams',
    company: 'CEO, Limitless Ltd',
    img: testimonialImg2,
  },
];

export type BlogData = {
  id?: string | number;
  img: string;
  title: string;
  tag: string;
  date: string;
  timeRead: string;
  user: User;
  designation: string;
};

export const blogData: BlogData[] = [
  {
    id: 1,
    img: blogImg1,
    title: 'Enhancing Your Conversion Rates Through Front-End Development',
    tag: 'Nature',
    date: '2024-12-31',
    timeRead: '12 min read',
    user: users[5],
    designation: 'Front end developer',
  },
  {
    id: 2,
    img: blogImg2,
    title: 'Boosting Your Conversion Rates with Front-End Development',
    tag: 'Nature',
    date: '2024-12-31',
    timeRead: '12 min read',
    user: users[2],
    designation: 'Front end developer',
  },
  {
    id: 3,
    img: blogImg3,
    title: 'Improving Conversion Rates via Front-End Development',
    tag: 'Nature',
    date: '2024-12-31',
    timeRead: '12 min read',
    user: users[13],
    designation: 'Front end developer',
  },
];

export type FAQ = {
  summary: string;
  details: string;
};

export const faqData: FAQ[] = [
  {
    summary: 'How do I get started?',
    details:
      'Getting started is simple. Just sign up with your email, create an account, and you’ll have instant access to all the core features. You can explore the platform right away and upgrade later if you need advanced tools.',
  },
  {
    summary: 'Do I need to create an account to use this?',
    details:
      'Lorem ipsum dolor sit amet consectetur. Sed euismod scelerisque sed at. Adipiscing augue tempor tincidunt eu luctus massa facilisis. Mi a eget auctor et scelerisque bibendum sodales. Sagittis amet consequat integer blandit ut vitae tincidunt.',
  },
  {
    summary: 'Is there a free trial or demo available?',
    details:
      'Lorem ipsum dolor sit amet consectetur. Sed euismod scelerisque sed at. Adipiscing augue tempor tincidunt eu luctus massa facilisis. Mi a eget auctor et scelerisque bibendum sodales. Sagittis amet consequat integer blandit ut vitae tincidunt.',
  },
  {
    summary: 'What makes your product different from others?',
    details:
      'Lorem ipsum dolor sit amet consectetur. Sed euismod scelerisque sed at. Adipiscing augue tempor tincidunt eu luctus massa facilisis. Mi a eget auctor et scelerisque bibendum sodales. Sagittis amet consequat integer blandit ut vitae tincidunt.',
  },
  {
    summary: 'What payment methods do you accept?',
    details:
      'Lorem ipsum dolor sit amet consectetur. Sed euismod scelerisque sed at. Adipiscing augue tempor tincidunt eu luctus massa facilisis. Mi a eget auctor et scelerisque bibendum sodales. Sagittis amet consequat integer blandit ut vitae tincidunt.',
  },
];
