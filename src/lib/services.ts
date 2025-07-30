import Backendless from './backendless';
import { BlogPost, TeamMember, Service, Testimonial } from '@/types';

// Services
export const getServices = async (): Promise<Service[]> => {
  try {
    console.log('Fetching services...');
    const result: unknown = await Backendless.Data.of('Services').find();
    console.log('Services result:', result);
    
    if (Array.isArray(result)) {
      return result as Service[];
    } else if (result && typeof result === 'object' && 'data' in result) {
      return (result as { data: Service[] }).data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

// Testimonials
export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    console.log('Fetching testimonials...');
    const result: unknown = await Backendless.Data.of('Testimonials').find();
    console.log('Testimonials result:', result);
    
    if (Array.isArray(result)) {
      return result as Testimonial[];
    } else if (result && typeof result === 'object' && 'data' in result) {
      return (result as { data: Testimonial[] }).data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

// Team Members
export const getTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    console.log('Fetching team members...');
    const result: unknown = await Backendless.Data.of('team_members').find();
    console.log('Team members result:', result);
    
    if (Array.isArray(result)) {
      return result as TeamMember[];
    } else if (result && typeof result === 'object' && 'data' in result) {
      return (result as { data: TeamMember[] }).data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
};

// Blog Posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Fetching blog posts...');
    const result: unknown = await Backendless.Data.of('blog_posts').find();
    console.log('Blog posts result:', result);
    
    if (Array.isArray(result)) {
      return result as BlogPost[];
    } else if (result && typeof result === 'object' && 'data' in result) {
      return (result as { data: BlogPost[] }).data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};