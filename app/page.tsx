import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Placeholder for other sections */}
      <div id="case-studies" className="h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl text-gray-400">Case Studies Section (Coming Soon)</p>
      </div>

      <div id="contact" className="h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-400">Contact Section (Coming Soon)</p>
      </div>
    </main>
  );
}
