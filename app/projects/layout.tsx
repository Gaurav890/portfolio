import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Personal Projects',
  description: 'Side projects and hackathon wins showcasing technical skills, creativity, and passion for building innovative AI and web solutions. View projects featuring machine learning, full-stack development, and award-winning applications.',
  keywords: [
    'personal projects',
    'hackathon projects',
    'AI projects',
    'machine learning projects',
    'web development',
    'portfolio projects',
    'hackathon wins',
    'technical projects',
  ],
  openGraph: {
    title: 'Personal Projects - Gaurav Chaulagain',
    description: 'Side projects and hackathon wins showcasing technical skills and innovative solutions',
    url: 'https://www.gauravhchaulagain.com/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Projects - Gaurav Chaulagain',
    description: 'Side projects and hackathon wins showcasing technical skills and innovative solutions',
  },
  alternates: {
    canonical: 'https://www.gauravhchaulagain.com/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
