import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'fAIshion Inc.',
    role: 'Lead Product Manager — AI Experiences',
    period: 'Jul 2025 – Oct 2025',
    location: 'San Francisco, CA',
    description: 'Led product strategy and delivery for a 0→1 AI-powered personal styling assistant. Translated research-level model outputs into clear, trustworthy user experiences and a scalable product foundation.',
    achievements: [
      'Shipped a fully functional MVP in 11 weeks by defining scope, prioritizing workflows, and coordinating 18 contributors (ML, mobile, design, QA)',
      'Increased task success by 28% by designing transparent AI UX patterns including fit rationale, confidence indicators, and explanation surfaces',
      'Raised early-cohort engagement by 22% by refining interaction loops and onboarding flows based on usage signals from Mixpanel + GA4',
      'Reduced onboarding friction by 12% through simplified messaging and expectation-setting screens tied to model behavior',
      'Defined the architecture, usage metrics, and pricing assumptions for a retailer-facing API that demonstrated strong enterprise adoption signals'
    ],
    technologies: ['Generative AI', 'Python', 'React Native', 'Mixpanel', 'GA4', 'Prompt Systems', 'Figma', 'API Design'],
    tags: ['Generative AI', 'AI UX', 'Evaluation Frameworks', 'Mixpanel', 'Mobile', 'Python']
  },
  {
    id: '2',
    company: 'WP Creative',
    role: 'Senior Product Manager — SaaS Productivity & Systems',
    period: 'Jan 2023 – Dec 2023',
    location: 'Remote (NSW, Australia)',
    description: 'Led product strategy for a multi-site CMS ecosystem used by 11+ cross-functional teams. Improved data visibility, delivery speed, and operational consistency across 18 enterprise properties.',
    achievements: [
      'Designed a drag-and-drop CMS experience that reduced campaign setup time by 41% and improved content production across marketing and ops teams',
      'Conducted 35+ customer interviews and workflow studies, shaping roadmap priorities that drove a 39% lift in organic traffic and 14% improvement in conversion',
      'Delivered performance improvements (8s → 2.5s load time), reducing bounce rate by 22% across high-traffic pages',
      'Built real-time dashboards (Power BI, Metabase) enabling same-day issue detection and preventing ~$50K/month in wasted ad spend',
      'Streamlined cross-functional execution by reducing rework by 25% and improving delivery predictability'
    ],
    technologies: ['GA4', 'Power BI', 'Metabase', 'SQL', 'CMS Platforms', 'Jira', 'Confluence', 'Figma'],
    tags: ['Enterprise SaaS', 'CMS', 'Analytics', 'GA4', 'Workflow Optimization']
  },
  {
    id: '3',
    company: 'WP Creative',
    role: 'Product Manager — Workflow Intelligence',
    period: 'Apr 2022 – Dec 2022',
    location: 'Remote',
    description: 'Supported cross-team workflow execution, implementing frameworks and automations that improved reliability and reduced operational friction.',
    achievements: [
      'Designed requirement-validation and approval frameworks reducing rework by 25% and improving delivery consistency',
      'Introduced automated monitoring for workflow systems, reducing average response time from 2h → 0.5h',
      'Automated Jira + Confluence workflows to reduce handoff delays and improve cross-team throughput',
      'Strengthened execution quality by introducing templates, acceptance criteria standards, and structured sprint planning'
    ],
    technologies: ['Jira', 'Confluence', 'Automation Scripts', 'QA Collaboration Tools', 'Analytics'],
    tags: ['Jira', 'Reliability', 'Workflow Systems', 'Automation', 'Confluence']
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
    company: 'Hazesoft',
    role: 'Product Management Intern',
    period: 'May 2021 – Aug 2021',
    location: 'Kathmandu, Nepal',
    description: 'Worked with engineers to document operational workflows and analyze recurring system failures, contributing to the early automation roadmap.',
    achievements: [
      'Documented deployment and reliability workflows across six services, improving onboarding clarity and accelerating ramp time by 14%',
      'Analyzed failure patterns and drafted automation backlog items that enabled a 37% reduction in manual processes in the following quarter'
    ],
    technologies: ['Documentation Systems', 'Process Mapping', 'Confluence', 'Jira'],
    tags: ['Documentation', 'Process Mapping', 'Early PM Experience']
  }
];
