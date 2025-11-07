import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'fAIshion Inc.',
    role: 'Product Manager (Technical)',
    period: 'July 2024 - October 2024',
    location: 'San Francisco, California, USA',
    description: 'Led the development of an AI-powered virtual try-on platform that uses generative AI to help users visualize clothing before purchase.',
    achievements: [
      'Delivered MVP in 11 weeks by defining clear scope, prioritizing features, and aligning cross-functional teams',
      'Improved conversion rates by +18% through trust-building features like accuracy indicators, disclaimers, and comparison views',
      'Increased user engagement by +25% by implementing interactive fit visualization and size recommendation features',
      'Reduced development friction by creating a shared product roadmap and sprint planning framework',
      'Enhanced user trust in AI recommendations through transparent accuracy metrics and educational content'
    ],
    technologies: ['Generative AI', 'Computer Vision', 'React', 'Python', 'TensorFlow']
  },
  {
    id: '2',
    company: 'WP Creative',
    role: 'Product Manager',
    period: 'April 2022 - December 2023',
    location: 'San Francisco, California, USA',
    description: 'Managed product development for enterprise CMS platform serving 18+ client websites across legal, real estate, and healthcare industries.',
    achievements: [
      'Increased organic traffic by +39% across client portfolio through SEO-optimized content management system',
      'Reduced campaign setup time by -41% by streamlining content publishing workflows and automation',
      'Improved client satisfaction by +32% through responsive support system and proactive feature updates',
      'Led cross-functional collaboration between development, design, and marketing teams',
      'Implemented data-driven decision making through comprehensive analytics dashboards'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SEO Tools', 'Analytics']
  },
  {
    id: '3',
    company: 'Hazesoft',
    role: 'Technical Project Manager',
    period: 'May 2021 - March 2022',
    location: 'Remote',
    description: 'Managed cloud infrastructure modernization and development projects for enterprise clients.',
    achievements: [
      'Achieved 97% uptime through robust infrastructure design and monitoring systems',
      'Reduced deployment time by -70% by implementing CI/CD pipelines and automation',
      'Led migration of legacy systems to cloud infrastructure with zero downtime',
      'Coordinated cross-functional teams across multiple time zones',
      'Improved system reliability through comprehensive testing and quality assurance processes'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring Tools', 'DevOps']
  }
];
