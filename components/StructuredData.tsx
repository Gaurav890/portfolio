import { personalInfo, socialLinks } from '@/lib/data/personal';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.tagline,
    url: 'https://www.gauravhchaulagain.com',
    image: 'https://www.gauravhchaulagain.com/images/og-image.jpg',
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oakland',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'San Francisco Bay University',
        description: 'Master of Science in Computer Science',
      },
      {
        '@type': 'EducationalOrganization',
        name: "St. Xavier's College",
        description: 'Bachelor of Science in Computer Science',
      },
    ],
    sameAs: [
      socialLinks.find((link) => link.platform === 'LinkedIn')?.url,
      socialLinks.find((link) => link.platform === 'GitHub')?.url,
      socialLinks.find((link) => link.platform === 'Medium')?.url,
    ].filter(Boolean),
    knowsAbout: [
      'Product Management',
      'Technical Project Management',
      'LLMs',
      'AI Agents',
      'Agentic Systems',
      'AI Products',
      'Machine Learning',
      'Technical Product Management',
      'Artificial Intelligence',
      'Software Engineering',
      'Cross-functional Leadership',
      'Data-Driven Decision Making',
    ],
    award: [
      'Best Use of Claude - Cal Hacks 12.0 by Anthropic',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
