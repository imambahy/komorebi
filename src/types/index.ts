export interface BlogPost {
  objectId?: string;
  title: string;
  content: string;
  author: string;
  authorId?: string;
  tags?: string[];
  publishedAt?: number | string;
  created?: number;
  updated?: number;
}

export interface TeamMember {
  objectId?: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  created?: number;
  updated?: number;
}

export interface Service {
  objectId?: string;
  name: string;
  description: string;
  price?: number;
  features?: string[];
  image?: string;
  created?: number;
  updated?: number;
}

export interface Testimonial {
  objectId?: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  created?: number;
  updated?: number;
}
