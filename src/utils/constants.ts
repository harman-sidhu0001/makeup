export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface AcademyCourse {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: number;
}

export const services: Service[] = [
  {
    title: "Bridal Makeup",
    icon: "fas fa-heart",
    description:
      "Flawless makeup that lasts all day and photographs beautifully. Includes trial session to perfect your look.",
    features: [
      "Traditional & Contemporary Styles",
      "Airbrush & HD Makeup Options",
      "Luxury Skincare Prep",
    ],
  },
  {
    title: "Destination Weddings",
    icon: "fas fa-globe-americas",
    description:
      "Specialized services for weddings abroad with travel packages and on-location convenience.",
    features: [
      "Travel & Accommodation Arrangements",
      "Climate-Adaptive Makeup",
      "Bridal Party Packages",
    ],
  },
  {
    title: "Special Occasions",
    icon: "fas fa-star",
    description:
      "Makeup services for engagements, anniversaries, photoshoots, and other memorable events.",
    features: [
      "Red Carpet Glam",
      "Editorial & Creative Makeup",
      "Personalized Style Consultation",
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Traditional Bridal",
    description: "Classic bridal look with soft smokey eyes and nude lips",
    imageUrl:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  // Add other gallery items...
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "Maya made me feel like the most beautiful bride on my wedding day. Her attention to detail and ability to enhance my natural features was incredible. My makeup lasted all night through tears and dancing!",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // Add other testimonials...
];

export const academyCourses: AcademyCourse[] = [
  {
    id: 1,
    title: "Bridal Makeup Masterclass",
    description:
      "Comprehensive training on creating flawless bridal looks that last all day and photograph beautifully.",
    features: [
      "Step-by-step video tutorials",
      "Product recommendations & tool guides",
      "Skin prep & long-wear techniques",
      "Client consultation training",
    ],
    price: 199,
  },
  // Add other courses...
];
