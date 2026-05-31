import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'elda-ai',
    title: 'ELDA.AI',
    subtitle: 'Winner of Cal Hacks 12.0 - Best Use of Claude by Anthropic',
    period: 'October 2024',
    featured: true,
    tags: ['AI', 'Healthcare', 'Hackathon Winner', 'Claude API'],
    description: 'An AI-powered eldercare assistant designed to help seniors with daily tasks, medication reminders, and companionship. Built in 36 hours during Cal Hacks 12.0 at UC Berkeley.',
    challenge: 'Elderly individuals often face challenges with managing medications, staying connected with family, and navigating daily activities. Traditional care solutions are expensive and may not provide 24/7 support.',
    solution: 'ELDA.AI leverages Claude AI API to provide conversational assistance, medication tracking, family connectivity features, and emergency support. The system uses natural language processing to understand context and provide personalized responses.',
    impact: [
      'Won "Best Use of Claude" award at Cal Hacks 12.0 by Anthropic',
      'Built fully functional prototype in 36 hours with cross-functional team',
      'Positive feedback from judges on user-centered design and technical implementation',
      'Demonstrated practical application of AI in healthcare accessibility'
    ],
    technologies: ['Claude AI API', 'React', 'Node.js', 'Python', 'Natural Language Processing'],
    links: {
      github: 'https://github.com/Gaurav890/Elda/'
    }
  },
  {
    id: '2',
    slug: 'aakha',
    title: 'Aakha.org',
    subtitle: 'AI-Powered Child Sponsorship Platform — Live at aakha.org',
    period: 'Fall 2025 — MS Capstone, SFBU',
    featured: true,
    tags: ['AI Matching', 'Social Impact', 'Full-Stack', 'PostgreSQL', 'NGO Tech'],
    description: 'Aakha.org is a live child sponsorship platform that connects sponsors, NGOs, and children through an AI-powered matching system. The platform replaces a fragmented, manual, and opaque sponsorship process with a transparent, data-driven ecosystem — where the right sponsor finds the right child, NGOs manage operations efficiently, and every stakeholder has a purpose-built interface.',
    challenge: 'Traditional child sponsorship programs are broken in three ways: sponsors have no reliable way to find children who match their values and preferences, NGOs are buried in manual administrative work, and children and sponsors rarely maintain meaningful long-term relationships. The lack of transparency — in fund allocation, progress tracking, and communication — erodes trust on all sides.',
    solution: 'Aakha.org solves this with a four-role platform (Sponsors, Children, NGOs, Admins) built around an AI matching engine at its core. The AI algorithm scores sponsor-child compatibility across six weighted factors: geographic proximity, age preference, education focus areas, shared interests, language compatibility, and sponsorship history. Each role gets a tailored dashboard — sponsors see AI-ranked match cards with compatibility scores, NGOs manage child profiles and approve sponsorship requests through a structured workflow, children track progress milestones, and admins oversee the full ecosystem. A moderated real-time messaging system keeps all communication safe and accountable.',
    impact: [
      'Built and deployed the AI matching algorithm as Backend & AI Lead — multi-factor weighted scoring across 6 dimensions with adaptive learning from user interactions and fallback handling for edge cases.',
      'Designed a normalized PostgreSQL schema with 14+ tables covering users, child profiles, NGO profiles, sponsorships, messages, and donation records — architected for data integrity and query performance at scale.',
      'Engineered the full REST API surface: 30+ endpoints covering auth, child management, sponsorship workflows, messaging, and the AI matching service — with JWT security, bcrypt hashing, rate limiting, and CORS.',
      'Deployed as a live platform at aakha.org — taken from capstone project to production, serving real NGOs and sponsors.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'AI Matching Algorithm', 'REST API', 'Tailwind CSS'],
    links: {
      live: 'https://www.aakha.org',
      github: 'https://github.com/Gaurav890/bridgechild'
    }
  },
  {
    id: '3',
    slug: 'fittrack-analytics',
    title: 'FitTrack Analytics',
    subtitle: 'Machine Learning Health Data Analysis Platform',
    period: 'September 2023 - December 2023',
    featured: true,
    tags: ['Machine Learning', 'Healthcare', 'Data Science', 'Python'],
    description: 'A machine learning platform that analyzes Fitbit health data to provide personalized insights on activity patterns, sleep quality, and health recommendations.',
    challenge: 'Wearable devices generate vast amounts of health data, but most users don\'t have the tools to extract meaningful insights or personalized recommendations from this data.',
    solution: 'FitTrack Analytics uses machine learning algorithms to analyze historical health data, identify patterns, and predict health outcomes. The platform provides visualizations, trend analysis, and actionable recommendations based on individual user patterns.',
    impact: [
      'Achieved 87% accuracy in predicting activity patterns and health trends',
      'Processed and analyzed over 100,000 data points from Fitbit API',
      'Generated personalized health insights and recommendations',
      'Demonstrated practical application of ML in healthcare analytics'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Fitbit API', 'Jupyter'],
    links: {
      github: 'https://github.com/Gaurav890/fittrack-analytics'
    }
  }
];
