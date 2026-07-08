'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui';
import { personalInfo } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Name & Title */}
          <motion.h1 className="heading-xl text-slate-900" variants={staggerItem}>
            <span className="block">Hi, I&apos;m</span>
            <span className="block mt-2">{personalInfo.name}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-slate-600 font-medium"
            variants={staggerItem}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-10 py-2"
            variants={staggerItem}
          >
            {[
              { value: '3.5+', label: 'Years Experience' },
              { value: '$1.7M+', label: 'Contract Value' },
              { value: '6+', label: 'Agentic Projects Shipped' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-slate-900">{value}</span>
                <span className="text-sm text-slate-500">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Short Bio */}
          <motion.div
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto space-y-4"
            variants={staggerItem}
          >
            {personalInfo.shortBio.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            variants={staggerItem}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('/PM-gaurav.pdf', '_blank')}
              className="group"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
