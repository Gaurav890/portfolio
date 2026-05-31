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
    slug: 'nepal-election-chat',
    title: 'NepalElection.chat',
    subtitle: 'AI Election Copilot — Built & Deployed in 24 Hours',
    period: 'May 2026',
    featured: true,
    tags: ['AI Agents', 'Real-Time Data', 'Next.js', 'LLM', 'Agentic Pipeline'],
    description: 'NepalElection.chat is a live AI election intelligence platform built and deployed in 24 hours during Nepal\'s 2082 federal election. It combines a multi-agent data pipeline scraping real-time results from Nepal\'s top news sources with a bilingual AI chat interface — giving any user instant answers about 165 constituencies, 3,406 candidates, and 77 districts in English or Nepali. Within 24 hours of launch: 13K Google Search impressions, 724 organic clicks, and users from 5 countries — all from zero.',
    challenge: 'Nepal\'s election results were scattered across multiple Nepali-language news sources with conflicting data, no unified API, and no English interface. Diaspora communities in the US, UK, and Australia had no reliable, real-time way to follow results. The window to be useful was narrow — election results only matter for hours.',
    solution: 'Built a three-layer agentic system in 24 hours. Layer 1: Data ingestion agents continuously scraping election.onlinekhabar.com (4.5K API calls) and election.ekantipur.com, reconciling discrepancies between sources and caching results in Upstash Redis (4.8K calls) for sub-second reads. Layer 2: A cron-driven refresh pipeline running on Vercel edge functions, keeping all 165 constituency results current without manual intervention. Layer 3: A bilingual AI chat agent (English + Nepali) that lets users ask natural language questions — "who won in Kathmandu?", "how many seats does Congress have?" — with cited sources and timestamps. An interactive SVG map of Nepal\'s 77 districts color-coded by winning party completed the experience.',
    impact: [
      '13K Google Search impressions and 724 organic clicks within 24 hours of launch — from zero prior search presence.',
      'Reached users across 5 countries organically: Nepal (56%), USA (13%), India (5%), UK (4%), Australia (3%) — the exact diaspora audience the tool was built for.',
      'Indexed and ranked for high-intent queries including "nepal election map", "nepal election live count", and "sudurpaschim election result 2082" with avg position 6.7.',
      'Zero-error data pipeline: 4.8K Redis cache hits and 4.5K live scrape calls processed across /results/[slug] (155 invocations), /api/hot-seats, and map routes with 0% error rate on all production routes.',
      'Demonstrated the full Forward Deployed AI loop: identify the moment → architect the agentic system → ship to production → real users in hours.'
    ],
    technologies: ['Next.js', 'Vercel Edge Functions', 'Upstash Redis', 'AI Chat Agent', 'Web Scraping', 'Cron Automation', 'SVG Map', 'LLM'],
    links: {
      live: 'https://nepalelection.chat',
      github: 'https://github.com/Gaurav890/nepalelection'
    }
  },
  {
    id: '4',
    slug: 'aquaoracle',
    title: 'AquaOracle',
    subtitle: 'Terminal-Based Local RAG Platform for Water Safety & Regulatory Compliance',
    period: '2025',
    featured: true,
    tags: ['RAG', 'Local AI', 'Privacy-First', 'Vector Search', 'Compliance Tech', 'Terminal'],
    description: 'AquaOracle is a fully local, terminal-based retrieval-augmented generation platform built for water safety and regulatory compliance. It lets facilities managers and EHS professionals query CDC guidelines, OSHA standards, and WHO water quality requirements through a CLI — getting cited, factual answers from their own document corpus with zero data leaving the machine. Built on a four-stage retrieval pipeline (vector search → cross-encoder re-ranking → graph expansion → context assembly) feeding a local Llama 3.1 instance via Ollama.',
    challenge: 'Facilities responsible for Legionella prevention and water system compliance sit on a pile of regulatory PDFs — CDC protocols, OSHA monitoring requirements, WHO standards — that are scattered, version-fragmented, and full of tables and structured data that generic tools mishandle. The real constraint: these environments often cannot use cloud AI due to data sovereignty, HIPAA, or internal security policy. Teams were spending hours manually cross-referencing documents to answer questions like "What are the CDC control measures for Legionella in cooling towers?" — in a domain where wrong answers are a life-safety failure.',
    solution: 'Built a 100% local RAG system: no external API calls, no cloud storage, no telemetry. The ingestion pipeline uses PyMuPDF for layout-aware PDF parsing, pdfplumber for table structure preservation, and a hybrid semantic + sliding-window chunker (1024-token max, 20% overlap) that keeps document structure intact. Embeddings (768-dim) are generated locally via Ollama and stored in Qdrant with HNSW indexing. Queries run through a four-stage retrieval pipeline: vector search retrieves 50–100 candidates, a cross-encoder re-ranker (ms-marco-MiniLM-L-6-v2) scores each pair for true relevance, graph expansion (NetworkX, k=1–2 hops) surfaces related sections the vector search missed, and context assembly deduplicates and trims to an 8192-token window before hitting Llama 3.1:8b at temperature 0.1 for grounded, cited responses. The whole system runs from the terminal — designed for practitioners, not demos.',
    impact: [
      'Ingested 18 regulatory PDFs (~56 MB) covering CDC, OSHA, and WHO water safety standards — end-to-end pipeline runs one-time in ~60 minutes, then queries resolve in ~3 seconds p95.',
      'Four-stage retrieval pipeline (vector → re-rank → graph → assembly) achieves materially higher answer precision than naive RAG: cross-encoder re-ranking alone eliminates false positives that embedding similarity misses in dense regulatory text.',
      'Zero data egress: 100% local inference with Ollama + Qdrant + SQLite — built for environments where cloud AI is blocked by compliance policy, exactly the constraint most RAG demos ignore.',
      'Designed to the actual domain constraints: table extraction preserves regulatory tables that naive PDF-to-text destroys; citations in every response meet the auditability bar required in compliance contexts.',
      'Demonstrated the Forward Deployed pattern: identified the real constraint (not "AI for water" but "local AI for a data-sovereignty-constrained compliance use case"), made the hard architectural call (fully local over easier cloud), and built to production-grade retrieval quality rather than demo quality.'
    ],
    technologies: ['Python', 'Ollama', 'Llama 3.1', 'Qdrant', 'NetworkX', 'SQLite', 'PyMuPDF', 'pdfplumber', 'Cross-Encoder Re-ranking', 'HNSW', 'RAG'],
    links: {
      github: 'https://github.com/Gaurav890/AquaOracle'
    }
  },
  {
    id: '6',
    slug: 'vocal-stack',
    title: 'vocal-stack',
    subtitle: 'Open-Source npm Library for Production Voice AI Agents — Published on npm',
    period: '2025',
    featured: true,
    tags: ['Open Source', 'Voice AI', 'npm Package', 'TypeScript', 'Developer Tooling'],
    description: 'vocal-stack is a published npm utility library that solves the three most common production failures in voice AI pipelines: unnatural LLM output reaching TTS, silent pauses breaking conversation flow, and zero latency observability. It ships three composable modules — a Speech Sanitizer, Flow Controller, and Voice Auditor — that drop into any LLM-to-TTS pipeline with a single import.',
    challenge: 'Every team building a voice AI agent hits the same three walls: LLM output is full of markdown, URLs, and code blocks that sound broken when spoken aloud; processing pauses create awkward silence that kills the conversational feel; and there is no built-in way to measure time-to-first-token, p95/p99 latency, or throughput. These are not edge cases — they are the default failure modes of every production voice agent. Each team was solving them independently with fragile, one-off boilerplate.',
    solution: 'Instead of solving this once inside a single product, I packaged the solution as a provider-agnostic open-source library and published it to npm. The Speech Sanitizer strips markdown, URLs, and code from LLM streams before they reach TTS. The Flow Controller detects stream stalls at a configurable threshold (700ms default) and injects natural filler phrases to hold the conversation. The Voice Auditor wraps any stream and tracks TTFT, total duration, token counts, and p95/p99 percentiles. Each module is independent but composes via a clean async pipeline: LLM Stream → Sanitizer → Flow Control → Monitor → TTS. TypeScript-first, ESM + CJS, 90%+ test coverage, and ~2–3ms per-chunk overhead at 1000+ chunks/second.',
    impact: [
      'Shipped a production-ready open-source library to npm (v1.0.2) — provider-agnostic, works with OpenAI, Claude, Gemini, ElevenLabs, Azure, and any streaming LLM/TTS pair.',
      'Eliminated hours of boilerplate for voice AI developers: text sanitization, stall detection, and latency monitoring in one composable package.',
      'Designed the architecture to be modular and tree-shakeable — developers import only what they need via subpath imports (vocal-stack/sanitizer, /flow, /monitor).',
      'Demonstrated the Forward Deployed instinct: identified a recurring infrastructure gap across voice AI teams, built the reusable solution, and shipped it publicly rather than keeping it internal.'
    ],
    technologies: ['TypeScript', 'Node.js', 'npm', 'Async Streams', 'Voice AI', 'LLM', 'TTS', 'OpenAI', 'ElevenLabs'],
    links: {
      github: 'https://github.com/gaurav890/vocal-stack',
      live: 'https://www.npmjs.com/package/vocal-stack'
    }
  },
  {
    id: '7',
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
