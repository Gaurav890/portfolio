'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Card } from '@/components/ui';
import { personalInfo, education } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { GraduationCap, Sparkles, Target, Network, TrendingUp, Zap, Trophy } from 'lucide-react';

export const AboutSection = () => {
  const philosophies = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Reframe the Problem',
      desc: 'I start by questioning assumptions. At fAIshion, users wanted "better images"—but the real problem was trust in AI-generated content. We solved it with transparency features, not just image quality.',
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: 'Think in Systems',
      desc: 'When Ironfish had low traffic, the root cause wasn\'t content—it was site speed (3.2s load time). Fixing infrastructure increased organic traffic by 100% and rankings by 85%.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Measure What Matters',
      desc: 'At Flare HR, I ignored vanity metrics and focused on lead quality over quantity. Result: 619% traffic growth translated to 617% increase in qualified conversions.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Ship Fast, Learn Faster',
      desc: 'Reduced Flare HR\'s campaign setup time by 86% through workflow optimization. Faster iterations compound—3x marketing velocity enabled rapid experimentation and learning.',
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

        {/* Bio with Cal Hacks Badge */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div variants={staggerItem} className="relative">
            {/* Main Bio */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-text leading-relaxed mb-6">
                {personalInfo.fullBio.split('\n\n')[0]}
              </p>
              <p className="text-lg text-gray-text leading-relaxed">
                {personalInfo.fullBio.split('\n\n')[1]}
              </p>
            </div>

            {/* Cal Hacks Winner Badge - Floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl border-2 border-indigo-200/50 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-slate-900 flex items-center justify-center shadow-md">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Cal Hacks 12.0 Winner</p>
                  <p className="text-xs text-slate-600">Best Use of Claude by Anthropic</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Philosophy - Critical Thinking */}
        <motion.div variants={staggerItem} className="max-w-6xl mx-auto">
          <div className="mb-12">
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
                className="group"
              >
                <div className="p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-indigo-600 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
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
