import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '0',
    company: 'FleetPanda',
    role: 'Technical Project Manager',
    period: 'May 2026 – Present',
    location: 'San Francisco Bay Area, CA (Hybrid)',
    description: 'Owning end-to-end enterprise implementation across petroleum logistics accounts, deploying agentic workflows inside my own implementation process to scale quality without sacrificing per-customer depth.',
    achievements: [
      'Owning end-to-end implementation across 7 enterprise fuel distributor accounts representing $1.54M CARR — 3 live in production, 5 in active onboarding. Embed on-site with customers to map dispatch workflows, design tailored solutions on the FleetPanda platform, and drive adoption among dispatchers and drivers.',
      'Deployed a multi-agent system inside my own implementation workflow — transcript extraction, customer-facing email drafts, internal CS notes, risk escalation, edit-detection learning loop, and weekly reporting — to scale engagement quality across accounts without sacrificing depth per customer.',
      'Architecting customer-specific solutions across order management, driver app rollout, invoicing, customer portal, and accounting integrations — sequenced as a 6–8 week implementation per account with explicit adoption gates.',
      'Driving change management inside customer organizations: stakeholder mapping from ops VP to driver, on-site driver training and ride-alongs, usability feedback loops into product, and account health monitoring (CARR, activation ETA, health score).'
    ],
    technologies: ['Multi-Agent Systems', 'FleetPanda Platform', 'Enterprise Implementation', 'Change Management', 'Dispatch Workflow Design'],
    tags: ['Forward Deployed', 'Agentic Workflows', 'Enterprise Implementation', 'Petroleum Logistics', 'Change Management']
  },
  {
    id: '1',
    company: 'fAIshion Inc.',
    role: 'AI Product Manager — Fashion AI Agent',
    period: 'Jul 2025 – Oct 2025',
    location: 'San Francisco, CA',
    description: 'Led product strategy and delivery for a 0→1 AI-powered personal styling assistant. Translated research-level model outputs into clear, trustworthy user experiences and a scalable product foundation.',
    achievements: [
      'Owned the AI Stylist conversational agent inside fAIshion\'s virtual try-on platform, now live with 50K+ users and integrated across 14+ major retailers including ZARA, SSENSE, Nordstrom, Lululemon, H&M, and Farfetch.',
      'Drove agent task success from 62% to 81% by reworking the interaction model when early iterations over-optimized for model accuracy at the cost of user trust.',
      'Built the agent evaluation framework covering task completion, drop-off, latency, and accuracy, then ran a continuous refinement loop that lifted first-try resolution by 22% and dropped abandonment by 25%.',
      'Took the agent from internal alpha to public launch in 18 weeks across an 18-person ML, mobile, design, and QA team, enabling pilots with enterprise fashion retailers.'
    ],
    technologies: ['Generative AI', 'Python', 'React Native', 'Mixpanel', 'GA4', 'Prompt Systems', 'Figma', 'API Design'],
    tags: ['Generative AI', 'AI UX', 'Evaluation Frameworks', 'Mixpanel', 'Mobile', 'Python']
  },
  {
    id: '2',
    company: 'WP Creative',
    role: 'Senior Technical Project Manager',
    period: 'Apr 2022 – Dec 2023',
    location: 'Remote (NSW, Australia)',
    description: 'Led product and technical delivery for a MarTech SaaS platform serving 18+ enterprise properties. Drove full product lifecycle from discovery through launch, building the data infrastructure and workflow systems that enabled the team to move fast and measure what mattered.',
    achievements: [
      'Designed a drag-and-drop CMS experience that reduced campaign setup time by 41%, enabling marketing and ops teams to launch independently without engineering support.',
      'Conducted 35+ customer interviews and workflow studies, shaping roadmap priorities that drove a 39% lift in organic traffic and 14% improvement in conversion across enterprise properties.',
      'Delivered core performance improvements (8s → 2.5s load time), reducing bounce rate by 22% across high-traffic pages and directly improving SEO rankings.',
      'Built real-time dashboards (Power BI, Metabase) enabling same-day issue detection and preventing ~$50K/month in wasted ad spend.',
      'Introduced automated monitoring, Jira/Confluence workflow automation, and approval frameworks — reducing rework by 25% and cross-team response time from 2h to 30 min.'
    ],
    technologies: ['GA4', 'Power BI', 'Metabase', 'SQL', 'CMS Platforms', 'Jira', 'Confluence', 'Figma'],
    tags: ['Enterprise SaaS', 'MarTech', 'Analytics', 'Workflow Automation', 'CMS']
  },
  {
    id: '4',
    company: 'Hazesoft',
    role: 'Associate Product Manager — Automation & Reliability',
    period: 'May 2021 – Mar 2022',
    location: 'Kathmandu, Nepal',
    description: 'Focused on improving the reliability and operational quality of enterprise cloud deployments through automation, observability, and structured process improvements.',
    achievements: [
      'Defined reliability KPIs and automated deployment workflows, reducing release time by 87% and manual steps by 70%',
      'Built tiered observability (logs, metrics, traces) and alerting systems cutting detection latency by 55%',
      'Created SLO dashboards linking infra behavior to product-level signals, improving planning accuracy',
      'Managed dependency mapping and sequencing across 7 enterprise deployments to ensure zero critical outages',
      'Established lightweight post-incident review processes that increased delivery velocity by 27%'
    ],
    technologies: ['Grafana', 'Prometheus', 'AWS', 'CI/CD', 'Automation Tools', 'SQL'],
    tags: ['Reliability', 'Observability', 'DevOps Collaboration', 'SLOs', 'Automation']
  },
  {
    id: '5',
    company: 'Blind Women Association of Nepal',
    role: 'Web Developer & Accessibility Coordinator',
    period: 'Aug 2018 – Jan 2019',
    location: 'Kathmandu, Nepal',
    description: 'Built and maintained a web presence for a nonprofit supporting blind women, with a focus on accessibility standards and usability for assistive technology users.',
    achievements: [
      'Developed and launched the organization\'s website with full WCAG accessibility compliance, enabling screen-reader and keyboard-only navigation.',
      'Coordinated with staff to document content workflows and train non-technical team members on publishing and maintenance.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WCAG Accessibility', 'Web Development'],
    tags: ['Accessibility', 'Web Development', 'Nonprofit', 'Early Career']
  }
];
