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
      github: 'https://github.com/gauravchaulagain'
    }
  },
  {
    id: '2',
    slug: 'bridgechild',
    title: 'BridgeChild',
    subtitle: 'Full-Stack Education Platform - Master\'s Capstone Project',
    period: 'January 2024 - May 2024',
    featured: true,
    tags: ['Education', 'Full-Stack', 'MERN Stack', 'Capstone'],
    description: 'A comprehensive education technology platform connecting K-12 students with mentors and tutors. Includes features for scheduling, video conferencing, progress tracking, and payment processing.',
    challenge: 'Many students struggle to find qualified mentors and tutors who can provide personalized guidance. Existing platforms lack integrated features for scheduling, communication, and progress tracking.',
    solution: 'BridgeChild provides a unified platform where students can discover mentors, schedule sessions, conduct video calls, track progress, and process payments—all in one place. The platform includes role-based dashboards for students, mentors, and administrators.',
    impact: [
      'Successfully completed as Master\'s capstone project with high marks',
      'Implemented end-to-end features including authentication, scheduling, video calls, and payments',
      'Designed scalable architecture to support future growth',
      'Created intuitive user experience across multiple user roles'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Stripe API', 'JWT'],
    links: {
      github: 'https://github.com/gauravchaulagain'
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
      github: 'https://github.com/gauravchaulagain'
    }
  }
];
