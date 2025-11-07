import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />

      {/* Placeholder for Case Studies - will be added next */}
      <div id="case-studies" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Featured Case Studies</h2>
          <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full mb-6" />
          <p className="body-md text-gray-text">Case Studies section coming soon...</p>
        </div>
      </div>

      <ProjectsSection />
      <HighlightsSection />
      <ContactSection />
    </main>
  );
}
