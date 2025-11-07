import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Calendar, BookOpen } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  calendar: Calendar,
  'book-open': BookOpen,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
    </footer>
  );
};
