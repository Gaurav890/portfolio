import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <HighlightsSection />
      <ContactSection />
    </main>
  );
}
