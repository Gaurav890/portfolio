// Experience data type
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

// Case Study data type
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  role: string;
  featured: boolean;
  thumbnail?: string;
  tags: string[];
  summary: string;
  challenge: string;
  approach: string[];
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  keyTakeaways: string[];
  technologies?: string[];
}

// Project data type
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  featured: boolean;
  thumbnail?: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

// Highlight data type (for certifications, hackathons, speaking, etc.)
export interface Highlight {
  id: string;
  type: 'hackathon' | 'certification' | 'speaking' | 'mentoring' | 'leadership';
  title: string;
  organization: string;
  date: string;
  description: string;
  achievement?: string;
  link?: string;
}

// Contact/Social links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
