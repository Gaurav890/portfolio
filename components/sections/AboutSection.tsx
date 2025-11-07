'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Card } from '@/components/ui';
import { personalInfo, education } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { GraduationCap, Sparkles, Target, Network, TrendingUp, Zap, Trophy } from 'lucide-react';

export const AboutSection = () => {
  const philosophies = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Reframe the Problem',
      desc: 'I start by questioning assumptions. Users once told me they wanted "better images"—but the real problem was trust in AI-generated content. We solved it with transparency features, not just image quality.',
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: 'Think in Systems',
      desc: 'When a property investment platform had low traffic, everyone blamed content. I found the root cause: 3.2-second load times. Fixing infrastructure increased organic traffic by 100% and rankings by 85%.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Measure What Matters',
      desc: 'I ignore vanity metrics. On a fintech project serving 100K+ businesses, I focused on lead quality over quantity. 619% traffic growth became 617% increase in qualified conversions—not just clicks.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Ship Fast, Learn Faster',
      desc: 'I reduced one team\'s campaign setup time by 86% through workflow optimization. Faster iterations compound—3x velocity enabled rapid experimentation and continuous learning.',
    },
  ];

  return (
    <Section className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-slate-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mx-auto rounded-full" />
        </motion.div>

        {/* Bio with Image */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div variants={staggerItem} className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image - Left Side */}
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Circular image container with placeholder */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-ocean-blue/20 to-ocean-blue/10 border-4 border-ocean-blue/30 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/gaurav_profile.png"
                      alt="Gaurav Profile Picture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-ocean-blue/20 -z-10 scale-110"></div>
                </div>
              </div>

              {/* Bio Text - Right Side */}
              <div className="prose prose-lg max-w-none md:max-w-2xl">
                <p className="text-lg text-gray-text leading-relaxed mb-6">
                  {personalInfo.fullBio.split('\n\n')[0]}
                </p>
                <p className="text-lg text-gray-text leading-relaxed">
                  {personalInfo.fullBio.split('\n\n')[1]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Philosophy - Critical Thinking */}
        <motion.div variants={staggerItem} className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">How I Think About Products</h3>
            <p className="text-lg text-slate-600">
              Four principles backed by real results from my product work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophies.map((principle, index) => (
              <motion.div
                key={index}
                variants={slideUp}
              >
                <div className="p-6 bg-white border-2 border-ocean-blue/20 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean-blue text-white flex items-center justify-center flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
