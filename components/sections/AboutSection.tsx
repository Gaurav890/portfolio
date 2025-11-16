'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Card } from '@/components/ui';
import { personalInfo, education } from '@/lib/data';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { GraduationCap, Sparkles, Target, Network, TrendingUp, Zap, Trophy } from 'lucide-react';

export const AboutSection = () => {
  const philosophies = [
    {
      number: '1',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Start with the behavior, not the feature',
      subtitle: 'Users rarely ask for features — they reveal patterns.',
      principle: 'The job of a PM is to uncover the behavior underneath the request.',
      example: {
        intro: 'When early users struggled with the AI styling assistant, the issue wasn\'t the model.',
        problem: 'The issue was trust.',
        solution: 'Designing fit rationales + confidence indicators improved task success by 28% and clarified how users interpreted AI outputs.',
      },
      takeaway: 'Solve the behavioral root cause, and features become obvious.',
    },
    {
      number: '2',
      icon: <Network className="w-6 h-6" />,
      title: 'Reduce complexity until the product is inevitable',
      subtitle: 'Complex systems are easy to build.',
      principle: 'Simple systems that feel "obvious" to users are hard.',
      example: {
        intro: 'A CMS workflow that spanned multiple teams took 8+ seconds to load, causing high drop-off and content bottlenecks.',
        problem: null,
        solution: 'By simplifying execution paths and improving performance to 2.5s, bounce rates dropped 22% and organic traffic rose 39%.',
      },
      takeaway: 'If users pause to think "what now?", the product isn\'t finished yet.',
    },
    {
      number: '3',
      icon: <Target className="w-6 h-6" />,
      title: 'Measure what matters — not what is shiny',
      subtitle: 'I avoid vanity metrics.',
      principle: 'Instead, I focus on indicators that reflect user trust, workflow efficiency, reliability, and repeat behavior.',
      example: {
        intro: 'Instead of tracking "clicks," I tracked:',
        problem: null,
        solution: null,
        metrics: [
          'time to first successful task',
          'recovery from AI misinterpretations',
          'early-cohort retention after first 5 interactions',
        ],
        conclusion: 'These signals shaped the roadmap more accurately than surface-level engagement.',
      },
      takeaway: 'Good metrics predict behavior; great metrics change the roadmap.',
    },
    {
      number: '4',
      icon: <Zap className="w-6 h-6" />,
      title: 'Build fast enough to learn, slow enough to be right',
      subtitle: 'Speed matters — but only when paired with clarity and reliability.',
      principle: null,
      example: {
        intro: 'I shipped a 0→1 AI assistant MVP in 11 weeks, but paired the velocity with:',
        problem: null,
        solution: null,
        metrics: [
          'evaluation frameworks',
          'transparent UX surfaces',
          'automated monitoring',
          'structured experimentation',
        ],
        conclusion: 'This allowed the team to learn fast without compromising quality.',
      },
      takeaway: 'Momentum is a feature — but reliability is the requirement.',
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

        {/* Product Philosophy - Creative Design */}
        <motion.div variants={staggerItem} className="max-w-7xl mx-auto px-4">
          <div className="mb-12 md:mb-20 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How I Think About Products</h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Four principles shaped by real outcomes from the products I've built
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
            {philosophies.map((principle, index) => {
              return (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group"
                  >
                    {/* Floating Number Badge */}
                    <motion.div
                      className="absolute -top-4 -left-4 z-20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-ocean-blue via-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl transform rotate-3">
                        <span className="text-2xl md:text-3xl font-black text-white">
                          {principle.number}
                        </span>
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-ocean-blue blur-xl opacity-40"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Main Card */}
                    <div className="relative h-full bg-white rounded-3xl border-2 border-slate-200 p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-ocean-blue/50 transition-all duration-500 group-hover:-translate-y-2">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ocean-blue/5 to-transparent rounded-bl-full rounded-tr-3xl" />

                      {/* Icon and Title Side by Side */}
                      <div className="relative flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-ocean-blue/10 to-indigo-600/10 border border-ocean-blue/20">
                          <div className="text-ocean-blue">
                            {principle.icon}
                          </div>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight pt-2">
                          {principle.title}
                        </h4>
                      </div>

                      {/* Subtitle & Principle */}
                      <div className="space-y-2 mb-6">
                        <p className="text-base md:text-lg text-slate-700 font-medium">
                          {principle.subtitle}
                        </p>
                        {principle.principle && (
                          <p className="text-sm md:text-base text-slate-600 italic border-l-4 border-ocean-blue/30 pl-4 py-1">
                            {principle.principle}
                          </p>
                        )}
                      </div>

                      {/* Example Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-ocean-blue animate-pulse" />
                          <p className="text-xs md:text-sm font-bold text-ocean-blue uppercase tracking-wider">
                            Real Example
                          </p>
                        </div>

                        <div className="space-y-3 text-sm md:text-base">
                          <p className="text-slate-700 leading-relaxed">
                            {principle.example.intro}
                          </p>

                          {principle.example.problem && (
                            <div className="bg-slate-100 border-l-4 border-slate-400 p-3 rounded-r-lg">
                              <p className="text-slate-900 font-semibold">
                                {principle.example.problem}
                              </p>
                            </div>
                          )}

                          {principle.example.solution && (
                            <div className="bg-slate-100 border-l-4 border-ocean-blue/40 p-3 rounded-r-lg">
                              <p className="text-slate-700">
                                {principle.example.solution}
                              </p>
                            </div>
                          )}

                          {principle.example.metrics && (
                            <div className="bg-slate-100 rounded-xl p-4">
                              <ul className="space-y-2 list-disc list-inside">
                                {principle.example.metrics.map((metric, idx) => (
                                  <li key={idx} className="text-slate-700 text-sm">
                                    {metric}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {principle.example.conclusion && (
                            <p className="text-slate-700 leading-relaxed">
                              {principle.example.conclusion}
                            </p>
                          )}
                        </div>

                        {/* Key Takeaway */}
                        <div className="mt-6 p-4 bg-gradient-to-br from-ocean-blue/5 to-indigo-600/5 rounded-2xl border-2 border-ocean-blue/20">
                          <p className="text-xs font-semibold text-ocean-blue uppercase tracking-wide mb-2">
                            Key Principle
                          </p>
                          <p className="text-sm md:text-base text-slate-900 font-semibold italic">
                            {principle.takeaway}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
