'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button, FloatingIcons } from '@/components/ui';
import { personalInfo } from '@/lib/data';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '@/lib/animations';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-cream-bg to-white -z-10" />

      {/* Floating Tool Icons */}
      <FloatingIcons />

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-ocean-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-ocean-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-2 bg-ocean-blue/10 text-ocean-blue rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            className="heading-xl"
            variants={staggerItem}
          >
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text mt-2">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-text font-medium max-w-3xl mx-auto"
            variants={staggerItem}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Short Bio */}
          <motion.p
            className="body-lg max-w-2xl mx-auto"
            variants={staggerItem}
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            variants={staggerItem}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('case-studies')}
              className="group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('/ProductManager.pdf', '_blank')}
              className="group"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-12"
            variants={fadeIn}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="flex flex-col items-center space-y-2 text-gray-text">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-ocean-blue rounded-full"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
