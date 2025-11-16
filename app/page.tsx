'use client';

import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from another page
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <EducationSection />
      <ProjectsSection />
      <HighlightsSection />
      <ContactSection />
    </main>
  );
}
