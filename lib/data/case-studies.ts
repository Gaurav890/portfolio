import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'ai-fashion-trust',
    title: 'AI Fashion Tech Startup',
    subtitle: 'Building Trust in AI Try-On Experiences',
    company: 'AI Fashion Technology Company',
    period: 'July 2025 - October 2025',
    role: 'Product Manager (Technical)',
    featured: true,
    tags: ['AI/ML', 'Trust & Transparency', 'E-commerce', 'Generative AI'],
    summary: 'Led the development of an AI-powered virtual try-on platform, focusing on building user trust through transparency, accuracy indicators, and educational features. Delivered MVP in 11 weeks with +18% conversion improvement.',
    challenge: 'AI-generated try-on images can feel uncanny or misleading. Users hesitate to trust AI recommendations for purchase decisions. The core challenge was: How do we make users confident enough in AI-generated images to make real purchasing decisions?',
    approach: [
      'Reframed from "How do we make AI look perfect?" to "How do we make users trust imperfect AI?"',
      'Conducted user research to identify trust barriers in AI-generated fashion imagery',
      'Designed transparency features: accuracy scores, disclaimers, and comparison views',
      'Implemented educational onboarding to set realistic expectations',
      'Created feedback loops for continuous AI improvement'
    ],
    solution: 'Built a trust-first AI try-on platform with: (1) Accuracy indicators showing confidence levels for each generated image, (2) Side-by-side comparison views (original vs AI-generated), (3) Clear disclaimers about AI limitations, (4) Educational tooltips explaining how the AI works, (5) User feedback system to improve AI accuracy over time.',
    impact: [
      {
        metric: 'Conversion Rate',
        value: '+18%',
        description: 'Increase in users who made purchases after using AI try-on'
      },
      {
        metric: 'User Engagement',
        value: '+25%',
        description: 'More users trying multiple outfits and exploring products'
      },
      {
        metric: 'Trust Score',
        value: '4.2/5',
        description: 'Post-launch user survey on AI recommendation trustworthiness'
      },
      {
        metric: 'MVP Delivery',
        value: '11 weeks',
        description: 'From concept to production launch with full feature set'
      }
    ],
    keyTakeaways: [
      'Trust is earned through transparency, not perfection. Users accepted AI limitations when clearly communicated.',
      'Education reduces friction. Teaching users how AI works increased adoption by 40%.',
      'Feedback loops compound: User corrections improved AI accuracy, which increased trust, which generated more feedback.',
      'Technical feasibility ≠ Product viability. The AI worked well technically, but required trust-building UX to drive adoption.'
    ],
    technologies: ['Generative AI', 'Computer Vision', 'React', 'Python', 'TensorFlow', 'FastAPI']
  },
  {
    id: '2',
    slug: 'real-estate-seo-authority',
    title: 'Real Estate Investment Platform',
    subtitle: 'Rebuilding Digital Authority Through Technical SEO',
    company: 'Real Estate Investment Firm',
    period: 'April 2023 - August 2023',
    role: 'Product Manager',
    featured: true,
    tags: ['SEO', 'Technical Infrastructure', 'Real Estate', 'Growth'],
    summary: 'Diagnosed and fixed critical technical SEO issues blocking a real estate investment firm from ranking. Achieved +100% organic traffic growth by addressing site architecture, page speed, and content strategy.',
    challenge: 'A real estate investment firm had invested heavily in content but saw minimal organic traffic. Despite quality content, they were invisible in search results. The site was slow, had indexing issues, and lacked technical SEO foundation.',
    approach: [
      'Conducted comprehensive technical SEO audit using Screaming Frog and Google Search Console',
      'Identified critical issues: slow page speed (5.8s load time), broken internal links, missing schema markup',
      'Prioritized fixes by impact: Core Web Vitals, crawlability, indexing, then content optimization',
      'Implemented systematic monitoring and testing framework',
      'Trained team on SEO best practices for sustainable growth'
    ],
    solution: 'Executed a three-phase technical SEO overhaul: (1) Performance optimization - reduced load time from 5.8s to 2.1s through image optimization, lazy loading, and CDN implementation, (2) Site architecture - fixed 200+ broken internal links, implemented proper URL structure, added XML sitemaps, (3) Content enhancement - added schema markup for rich snippets, optimized meta descriptions, improved internal linking strategy.',
    impact: [
      {
        metric: 'Organic Traffic',
        value: '+100%',
        description: 'Doubled organic search traffic within 4 months'
      },
      {
        metric: 'Page Load Time',
        value: '-64%',
        description: 'Reduced from 5.8s to 2.1s, improving user experience and rankings'
      },
      {
        metric: 'Indexed Pages',
        value: '+127%',
        description: 'Increased from 230 to 522 pages properly indexed by Google'
      },
      {
        metric: 'Keyword Rankings',
        value: '+85%',
        description: 'More keywords ranking in top 10 positions'
      }
    ],
    keyTakeaways: [
      'Technical SEO is foundational. Great content can\'t rank if the site infrastructure is broken.',
      'Page speed matters more than we think. -64% load time correlated with +40% engagement.',
      'Systematize fixes: Created a checklist that prevented future technical debt.',
      'Visibility compounds: Each fixed page improved the authority of connected pages through internal linking.'
    ],
    technologies: ['WordPress', 'Google Search Console', 'Screaming Frog', 'Schema.org', 'CDN', 'Image Optimization']
  },
  {
    id: '3',
    slug: 'hr-tech-marketing-velocity',
    title: 'HR Technology SaaS Platform',
    subtitle: 'Restoring Marketing Velocity Through Technical Excellence',
    company: 'HR Technology Company',
    period: 'September 2022 - February 2023',
    role: 'Product Manager',
    featured: true,
    tags: ['Marketing Ops', 'Automation', 'HR Tech', 'Conversion Optimization'],
    summary: 'Transformed a broken marketing website into a high-performing conversion engine. Achieved +619% traffic growth and +617% conversions by fixing technical issues, streamlining workflows, and implementing data-driven optimization.',
    challenge: 'An HR technology company\'s marketing team was stuck. Campaign launches took weeks instead of days. The website had persistent technical issues. Analytics were unreliable. The team couldn\'t move fast enough to test ideas or respond to market opportunities.',
    approach: [
      'Mapped the entire campaign workflow to identify bottlenecks',
      'Found root cause: fragile CMS setup where any change risked breaking the site',
      'Rebuilt technical foundation with staging environment and version control',
      'Implemented analytics and conversion tracking infrastructure',
      'Created campaign templates and reusable components for faster launches',
      'Trained team on new workflow and empowered them to move independently'
    ],
    solution: 'Rebuilt marketing infrastructure from the ground up: (1) Technical stability - migrated to robust CMS setup with proper staging/production environments, (2) Campaign automation - created reusable landing page templates reducing setup from 3 weeks to 2 days, (3) Data infrastructure - implemented proper analytics tracking, conversion funnels, and A/B testing framework, (4) Process optimization - documented workflows, created checklists, empowered team with self-service tools.',
    impact: [
      {
        metric: 'Traffic Growth',
        value: '+619%',
        description: 'Explosive growth enabled by ability to launch campaigns quickly'
      },
      {
        metric: 'Conversion Rate',
        value: '+617%',
        description: 'More conversions through optimized funnels and A/B testing'
      },
      {
        metric: 'Campaign Setup Time',
        value: '-86%',
        description: 'Reduced from 3 weeks to 2 days with templates and automation'
      },
      {
        metric: 'Marketing Velocity',
        value: '3x',
        description: 'Team could launch 3x more campaigns per quarter'
      }
    ],
    keyTakeaways: [
      'Velocity compounds: -86% setup time didn\'t just save time, it enabled 3x more experiments, which led to better learning, which drove growth.',
      'Remove friction between people and their goals. The marketing team had great ideas but were blocked by technical barriers.',
      'Staging environments are not optional. Teams that can test safely ship faster.',
      'Measure what matters: Shifted focus from vanity metrics (pageviews) to conversion metrics (form submissions, demo requests).'
    ],
    technologies: ['WordPress', 'Google Analytics', 'Google Tag Manager', 'A/B Testing', 'Landing Page Builders', 'CRM Integration']
  },
  {
    id: '4',
    slug: 'legal-news-reliability',
    title: 'Legal Industry News Platform',
    subtitle: 'Engineering Reliability for Legal News Platform',
    company: 'Legal News Media Company',
    period: 'March 2023 - July 2023',
    role: 'Product Manager',
    featured: false,
    tags: ['Reliability', 'Performance', 'News Platform', 'Infrastructure'],
    summary: 'Transformed an unreliable legal news platform into a robust, high-performance system. Achieved +109% organic traffic growth by fixing downtime issues, improving page speed, and implementing proper monitoring.',
    challenge: 'A legal news platform faced frequent downtime and slow load times. Readers were frustrated. Editorial team couldn\'t publish reliably. The platform was losing credibility and traffic due to technical unreliability.',
    approach: [
      'Conducted infrastructure audit to identify reliability issues',
      'Found problems: inadequate hosting, no caching, inefficient database queries',
      'Prioritized fixes: eliminate downtime first, then optimize speed',
      'Implemented monitoring and alerting systems',
      'Created runbooks for common issues to empower editorial team'
    ],
    solution: 'Rebuilt infrastructure for reliability: (1) Hosting upgrade - migrated to enterprise-grade hosting with 99.9% uptime SLA, (2) Performance optimization - implemented Redis caching, optimized database queries, CDN for media, (3) Monitoring - set up uptime monitoring, performance tracking, automated alerts, (4) Scalability - prepared infrastructure to handle traffic spikes during breaking news.',
    impact: [
      {
        metric: 'Uptime',
        value: '99.8%',
        description: 'From frequent outages to near-perfect reliability'
      },
      {
        metric: 'Organic Traffic',
        value: '+109%',
        description: 'More readers as site became reliable and fast'
      },
      {
        metric: 'Page Load Time',
        value: '-58%',
        description: 'Faster experience improved engagement and SEO'
      },
      {
        metric: 'Publishing Confidence',
        value: '100%',
        description: 'Editorial team regained confidence in platform reliability'
      }
    ],
    keyTakeaways: [
      'Reliability is a feature. For a news platform, uptime directly impacts credibility and traffic.',
      'Performance and SEO are connected. Faster sites rank better and retain more readers.',
      'Monitoring enables proactive fixes. Catching issues before users report them maintains trust.',
      'Empower non-technical teams with runbooks and clear escalation paths.'
    ],
    technologies: ['WordPress', 'Redis', 'CDN', 'Database Optimization', 'Uptime Monitoring', 'Performance Testing']
  },
  {
    id: '5',
    slug: 'corporate-training-trust-speed',
    title: 'Corporate Training Services Provider',
    subtitle: 'Redesigning for Trust and Speed',
    company: 'Corporate Training Company',
    period: 'November 2022 - March 2023',
    role: 'Product Manager',
    featured: false,
    tags: ['UX/UI', 'Conversion Optimization', 'Professional Services', 'Lead Generation'],
    summary: 'Redesigned a corporate training provider\'s website to build trust and improve conversion rates. Achieved +27.9% increase in phone inquiries through modern design, social proof, and streamlined user experience.',
    challenge: 'A corporate training provider had an outdated website that didn\'t reflect their expertise. Visitors bounced quickly. Phone inquiries were declining. The site lacked credibility signals and had a confusing navigation structure.',
    approach: [
      'Conducted user research to understand decision-making process for training services',
      'Identified trust gap: site looked outdated, lacked social proof, unclear value proposition',
      'Designed modern, professional interface emphasizing credibility',
      'Simplified navigation and conversion paths',
      'Added testimonials, case studies, and certification badges'
    ],
    solution: 'Complete website redesign focused on trust and conversion: (1) Modern UI - clean, professional design that reflects expertise, (2) Trust signals - added client logos, testimonials, certifications prominently, (3) Clear CTAs - simplified user journey with obvious next steps, (4) Mobile optimization - responsive design for on-the-go decision makers.',
    impact: [
      {
        metric: 'Phone Inquiries',
        value: '+27.9%',
        description: 'More qualified leads calling for training services'
      },
      {
        metric: 'Bounce Rate',
        value: '-35%',
        description: 'Visitors staying longer and exploring services'
      },
      {
        metric: 'Form Submissions',
        value: '+42%',
        description: 'More quote requests and consultation bookings'
      },
      {
        metric: 'Mobile Traffic',
        value: '+56%',
        description: 'Better mobile experience drove more mobile visitors'
      }
    ],
    keyTakeaways: [
      'First impressions matter. Outdated design signals outdated expertise, regardless of actual quality.',
      'Social proof reduces friction. Testimonials and client logos increased conversion rates significantly.',
      'Simplify the path to value. Reducing navigation complexity improved conversion by 40%.',
      'Design for your audience: Professional services buyers needed trust signals more than flashy features.'
    ],
    technologies: ['WordPress', 'Modern CSS', 'Responsive Design', 'A/B Testing', 'Heatmap Analysis', 'Conversion Tracking']
  },
  {
    id: '6',
    slug: 'retail-ecommerce-reliability-revenue',
    title: 'Home Improvement Retail E-commerce',
    subtitle: 'Turning Reliability into Revenue',
    company: 'Retail E-commerce Company',
    period: 'January 2023 - May 2023',
    role: 'Product Manager',
    featured: false,
    tags: ['E-commerce', 'Reliability', 'Conversion Rate', 'Retail'],
    summary: 'Transformed an unreliable e-commerce site into a high-performing sales engine. Achieved +28.2% traffic growth and +75% quote requests by fixing technical issues and optimizing conversion paths.',
    challenge: 'A home improvement retailer\'s e-commerce site was plagued by technical issues: slow load times, broken product pages, cart abandonment. Customers couldn\'t reliably complete purchases. Revenue was stagnating despite strong brand reputation.',
    approach: [
      'Audited entire purchase funnel to identify drop-off points',
      'Found critical issues: slow product images, broken checkout flow, mobile payment issues',
      'Prioritized fixes by revenue impact',
      'Implemented proper testing and quality assurance processes',
      'Optimized conversion funnel based on user behavior data'
    ],
    solution: 'Comprehensive e-commerce optimization: (1) Performance - optimized product images, implemented lazy loading, improved checkout speed, (2) Reliability - fixed broken payment integrations, eliminated cart errors, (3) Conversion - streamlined checkout process from 5 steps to 3, added trust badges, improved mobile experience, (4) Analytics - implemented proper conversion tracking and funnel analysis.',
    impact: [
      {
        metric: 'Organic Traffic',
        value: '+28.2%',
        description: 'Better site performance improved SEO rankings'
      },
      {
        metric: 'Quote Requests',
        value: '+75%',
        description: 'More customers requesting quotes for large orders'
      },
      {
        metric: 'Cart Abandonment',
        value: '-42%',
        description: 'Fixed checkout issues reduced drop-offs'
      },
      {
        metric: 'Mobile Conversions',
        value: '+89%',
        description: 'Mobile payment fixes drove significant revenue growth'
      }
    ],
    keyTakeaways: [
      'E-commerce reliability = revenue. Every broken flow is lost money.',
      'Mobile matters more than ever. 60% of traffic was mobile, but only 20% of conversions before fixes.',
      'Test the full journey. Issues in checkout weren\'t visible until we tested end-to-end.',
      'Performance impacts both SEO and conversions. Faster sites rank better and convert better.'
    ],
    technologies: ['WooCommerce', 'Payment Gateway Integration', 'Image Optimization', 'Mobile Optimization', 'Analytics', 'Conversion Tracking']
  }
];
