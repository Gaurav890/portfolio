'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/lib/data';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: 'https://medium.com/@gauravchaulagain/', external: true },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/#contact', isSection: true },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    if (href === '/#contact') return false; // Contact link is never "active"
    return pathname?.startsWith(href);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    // Handle external links normally
    if (link.external) {
      return;
    }

    // Handle section links (like Contact)
    if (link.isSection) {
      e.preventDefault();
      const sectionId = link.href.split('#')[1];

      // If we're on the home page, just scroll
      if (pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on a different page, navigate to home with hash
        router.push(link.href);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold gradient-text">
                {personalInfo.name.split(' ')[0]}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive(link.href)
                      ? 'text-ocean-blue'
                      : 'text-deep-black hover:text-ocean-blue'
                  )}
                  onClick={(e) => handleNavClick(e, link)}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-white md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'text-2xl font-medium transition-colors duration-200',
                    isActive(link.href)
                      ? 'text-ocean-blue'
                      : 'text-deep-black hover:text-ocean-blue'
                  )}
                  onClick={(e) => handleNavClick(e, link)}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};
