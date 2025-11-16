import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Case Studies - Product Management Work',
  description: 'Real product challenges and measurable impact. Explore case studies showcasing product management expertise in AI products, technical leadership, and data-driven decision making.',
  keywords: [
    'product management case studies',
    'AI product management',
    'technical PM',
    'product strategy',
    'user research',
    'data-driven decisions',
    'product leadership',
    'PM case studies',
  ],
  openGraph: {
    title: 'Case Studies - Product Management Work | Gaurav Chaulagain',
    description: 'Real product challenges, measurable impact, and lessons learned from product management work',
    url: 'https://www.gauravhchaulagain.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - Product Management Work | Gaurav Chaulagain',
    description: 'Real product challenges, measurable impact, and lessons learned from product management work',
  },
  alternates: {
    canonical: 'https://www.gauravhchaulagain.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
